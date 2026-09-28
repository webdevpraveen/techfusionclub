import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, X } from "lucide-react";
import type { ClubEvent } from "@/data/events";
import { formatEventDate } from "@/data/events";
import { cn } from "@/lib/utils";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type DayParts = { y: number; m: number; d: number };

/** Dates are stored as plain `YYYY-MM-DD`, so slice them rather than reading a
 *  local `Date` back — `new Date(iso)` lands on the previous day west of UTC. */
function partsOf(iso: string): DayParts {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  return { y: y ?? 1970, m: (m ?? 1) - 1, d: d ?? 1 };
}

function keyOf(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function monthOf(key: string) {
  const { y, m } = partsOf(key);
  return { y, m };
}

/** Every day an event touches, including the days between its start and end. */
function byCalendarDay(list: ClubEvent[]) {
  const map = new Map<string, ClubEvent[]>();
  for (const e of list) {
    const start = partsOf(e.date);
    const end = partsOf(e.endDate ?? e.date);
    const cursor = new Date(start.y, start.m, start.d);
    const last = new Date(end.y, end.m, end.d);
    while (cursor <= last) {
      const key = keyOf(cursor.getFullYear(), cursor.getMonth(), cursor.getDate());
      const bucket = map.get(key);
      if (bucket) bucket.push(e);
      else map.set(key, [e]);
      cursor.setDate(cursor.getDate() + 1);
    }
  }
  return map;
}

function countInMonth(days: Map<string, ClubEvent[]>, y: number, m: number) {
  const slugs = new Set<string>();
  for (const [key, list] of days) {
    const p = monthOf(key);
    if (p.y === y && p.m === m) for (const e of list) slugs.add(e.slug);
  }
  return slugs.size;
}

function formatLong(key: string) {
  const p = partsOf(key);
  return new Date(p.y, p.m, p.d).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** How many chips fit before the cell switches to a "+n more" row. */
const VISIBLE_CHIPS = 2;

type Cell = { day: number; key: string; list: ClubEvent[]; inMonth: boolean };

export function EventCalendar({
  events,
  onOpen,
}: {
  events: ClubEvent[];
  onOpen: (slug: string) => void;
}) {
  const days = useMemo(() => byCalendarDay(events), [events]);
  const now = useMemo(() => {
    const t = new Date();
    return { y: t.getFullYear(), m: t.getMonth(), d: t.getDate() };
  }, []);

  const [cursor, setCursor] = useState(() => {
    if (countInMonth(days, now.y, now.m) > 0) return { y: now.y, m: now.m };
    const earliest = [...events].sort((a, b) => a.date.localeCompare(b.date))[0];
    return earliest ? monthOf(earliest.date) : { y: now.y, m: now.m };
  });
  const [selected, setSelected] = useState<string | null>(null);

  // Re-filtering can leave the visible month empty, so jump to the earliest
  // month that has one. Gated on the filtered slug set rather than on `events`
  // identity: the parent re-renders on every countdown tick with a new array,
  // and that would snap the grid back whenever a visitor pages into a quiet
  // month by hand.
  const signature = events.map((e) => e.slug).join("|");
  const syncedRef = useRef<string | null>(null);
  useEffect(() => {
    if (syncedRef.current === signature) return;
    syncedRef.current = signature;
    if (days.size === 0) return;
    setCursor((c) => {
      if (countInMonth(days, c.y, c.m) > 0) return c;
      const earliest = [...events].sort((a, b) => a.date.localeCompare(b.date))[0];
      return earliest ? monthOf(earliest.date) : c;
    });
  }, [signature, days, events]);

  // Whole weeks only, and the grid always starts on the Sunday before the 1st
  // so the neighbouring month's edges fill in instead of leaving blanks.
  const cells = useMemo(() => {
    const startDow = new Date(cursor.y, cursor.m, 1).getDay();
    const total = new Date(cursor.y, cursor.m + 1, 0).getDate();
    const weeks = Math.ceil((startDow + total) / 7);
    const out: Cell[] = [];
    for (let i = 0; i < weeks * 7; i++) {
      const dt = new Date(cursor.y, cursor.m, 1 - startDow + i);
      const y = dt.getFullYear();
      const m = dt.getMonth();
      const d = dt.getDate();
      const key = keyOf(y, m, d);
      out.push({ day: d, key, list: days.get(key) ?? [], inMonth: m === cursor.m });
    }
    return out;
  }, [cursor, days]);

  const monthCount = countInMonth(days, cursor.y, cursor.m);
  const monthLabel = MONTHS[cursor.m] ?? "";

  const shift = (delta: number) => {
    const next = new Date(cursor.y, cursor.m + delta, 1);
    setCursor({ y: next.getFullYear(), m: next.getMonth() });
    setSelected(null);
  };

  /** A day holding one event opens its brief straight away; more than one
   *  reveals the day list underneath the grid. */
  const pick = (key: string, list: ClubEvent[]) => {
    const only = list.length === 1 ? list[0] : undefined;
    if (only) {
      onOpen(only.slug);
      return;
    }
    setSelected((k) => (k === key ? null : key));
  };

  const selectedList = selected ? (days.get(selected) ?? []) : [];

  return (
    <div className="glass-strong border-animated relative overflow-hidden rounded-[2rem] px-4 py-5 sm:px-6 sm:py-6">
      <div className="circuit-lines pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p
            aria-live="polite"
            className="font-display text-xl font-bold leading-none sm:text-2xl"
          >
            {monthLabel} <span className="text-muted-foreground">{cursor.y}</span>
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="text-primary-glow">{monthCount}</span>{" "}
              {monthCount === 1 ? "event" : "events"} this month
            </p>
            <button
              type="button"
              onClick={() => {
                setCursor({ y: now.y, m: now.m });
                setSelected(null);
              }}
              className="rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              Today
            </button>
            <div className="flex items-center gap-0.5 rounded-lg border border-border bg-surface p-0.5">
              <button
                type="button"
                onClick={() => shift(-1)}
                aria-label="Previous month"
                className="grid size-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-surface-strong hover:text-foreground"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => shift(1)}
                aria-label="Next month"
                className="grid size-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-surface-strong hover:text-foreground"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-7 gap-1 sm:gap-1.5">
          {WEEKDAYS.map((w) => (
            <div
              key={w}
              aria-hidden="true"
              className="pb-2 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px]"
            >
              <span className="hidden sm:inline">{w}</span>
              <span className="sm:hidden">{w.slice(0, 1)}</span>
            </div>
          ))}

          {cells.map((cell) => (
            <DayCell
              key={cell.key}
              cell={cell}
              year={cursor.y}
              month={cursor.m}
              today={now}
              selected={selected === cell.key}
              onPick={pick}
              onOpen={onOpen}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" /> Upcoming
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary-glow" /> Archived
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-0.5 rounded-full bg-primary/70" /> Runs across days
          </span>
        </div>

        {selected && selectedList.length > 1 ? (
          <div
            className="glass-strong animate-fade-in mt-5 rounded-2xl p-5 sm:p-6"
            role="region"
            aria-label={`Events on ${formatLong(selected)}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-lg font-bold sm:text-xl">
                  {formatLong(selected)}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {selectedList.length}{" "}
                  {selectedList.length === 1 ? "session" : "sessions"} on this day
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close this day"
                className="glass grid size-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            <ul className="mt-5 grid gap-3 lg:grid-cols-2">
              {selectedList.map((e) => (
                <li key={e.slug}>
                  <button
                    type="button"
                    onClick={() => onOpen(e.slug)}
                    aria-label={`Open the full brief for ${e.title}`}
                    className="glass hover-float w-full rounded-xl border border-border/60 p-4 text-left transition-colors hover:border-primary/50"
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-glow">
                      {e.category}
                    </p>
                    <p className="mt-2 font-display text-sm font-bold leading-snug sm:text-base">
                      {e.title}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {e.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3" />
                        {formatEventDate(e)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3" />
                        {e.venue}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function DayCell({
  cell,
  year,
  month,
  today,
  selected,
  onPick,
  onOpen,
}: {
  cell: Cell;
  year: number;
  month: number;
  today: DayParts;
  selected: boolean;
  onPick: (key: string, list: ClubEvent[]) => void;
  onOpen: (slug: string) => void;
}) {
  const { day, key, list, inMonth } = cell;
  const isToday = year === today.y && month === today.m && day === today.d;
  const spans = list.some((e) => !!e.endDate && e.endDate !== e.date);
  const monthName = MONTHS[month] ?? "";
  const busy = list.length > 0;

  const pickLabel = [
    isToday ? "Today" : `${day} ${monthName} ${year}`,
    list.length === 1 ? `open ${list[0]?.title}` : `show ${list.length} events`,
  ].join(" — ");

  return (
    <div
      className={cn(
        "flex min-h-12 flex-col gap-1 rounded-xl border p-1 transition-colors duration-300 sm:min-h-[5.5rem] sm:p-1.5",
        busy && inMonth
          ? "border-border/60 bg-surface/50"
          : busy
            ? "border-border/40 bg-surface/25"
            : "border-transparent",
        inMonth || "opacity-55",
        selected && "border-primary/60 bg-primary/10",
        spans && "border-l-2 border-l-primary/70",
      )}
    >
      {busy ? (
        <button
          type="button"
          onClick={() => onPick(key, list)}
          aria-pressed={selected}
          aria-label={pickLabel}
          className={cn(
            "grid size-6 shrink-0 place-items-center rounded-full font-mono text-[10px] transition-colors sm:text-[11px]",
            isToday
              ? "bg-primary font-bold text-primary-foreground"
              : "text-foreground hover:bg-primary/20"
          )}
        >
          {day}
        </button>
      ) : (
        <span
          className={cn(
            "grid size-6 shrink-0 place-items-center rounded-full font-mono text-[10px] sm:text-[11px]",
            isToday ? "bg-primary font-bold text-primary-foreground" : "text-muted-foreground/60",
          )}
        >
          {day}
        </span>
      )}

      {/* Event chips where there is room for titles, dots where there is not. */}
      <span className="hidden flex-col gap-1 sm:flex">
        {list.slice(0, VISIBLE_CHIPS).map((e) => (
          <button
            key={e.slug}
            type="button"
            onClick={() => onOpen(e.slug)}
            aria-label={`Open the full brief for ${e.title}`}
            className={cn(
              "flex w-full items-center gap-1.5 rounded-md px-1.5 py-0.5 text-left text-[10px] font-medium transition-[filter,background-color] duration-300 hover:brightness-125",
              e.status === "upcoming"
                ? "bg-accent/15 text-accent"
                : "bg-primary/12 text-primary-glow",
            )}
          >
            <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-current" />
            <span className="truncate">{e.title}</span>
          </button>
        ))}
        {list.length > VISIBLE_CHIPS ? (
          <button
            type="button"
            onClick={() => onPick(key, list)}
            aria-label={`Show all ${list.length} events on ${day} ${monthName}`}
            className={cn(
              "px-1.5 text-left font-mono text-[9px] text-muted-foreground transition-colors hover:text-foreground",
              selected && "text-primary-glow",
            )}
          >
            +{list.length - VISIBLE_CHIPS} more
          </button>
        ) : null}
      </span>

      {busy ? (
        <span className="flex flex-wrap gap-1 px-1 sm:hidden">
          {list.slice(0, 3).map((e) => (
            <span
              key={e.slug}
              className={cn(
                "size-1.5 rounded-full",
                e.status === "upcoming" ? "bg-accent" : "bg-primary-glow",
              )}
            />
          ))}
        </span>
      ) : null}
    </div>
  );
}
