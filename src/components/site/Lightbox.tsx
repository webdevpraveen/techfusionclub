import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxItem = { src: string; alt: string; caption?: string };

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onIndexChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, step]);

  if (!open || index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${item.alt}`}
      className="fixed inset-0 z-[80] flex flex-col bg-background/95 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Close image viewer"
          className="glass grid size-10 place-items-center rounded-full text-foreground transition-colors hover:text-primary-glow"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-16">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous image"
          className="glass absolute left-2 z-10 grid size-11 place-items-center rounded-full text-foreground transition-colors hover:text-primary-glow sm:left-5"
        >
          <ChevronLeft className="size-5" />
        </button>
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          className="max-h-full max-w-full rounded-2xl border border-border object-contain animate-rise"
        />
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next image"
          className="glass absolute right-2 z-10 grid size-11 place-items-center rounded-full text-foreground transition-colors hover:text-primary-glow sm:right-5"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="px-5 pb-8 text-center sm:px-8">
        <p className="text-sm text-foreground">{item.alt}</p>
        {item.caption ? (
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {item.caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
