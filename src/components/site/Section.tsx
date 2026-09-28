import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { RiseText } from "./RiseText";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  action,
  className,
  step = 42,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
  step?: number;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6",
        align === "center"
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow ? <p className="eyebrow scrub-fade mb-4">{eyebrow}</p> : null}
        <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
          {typeof title === "string" ? (
            <RiseText text={title} step={step} />
          ) : (
            <span className="scrub-rise block">{title}</span>
          )}
        </h2>
        {body ? (
          <Reveal
            as="div"
            delay={240}
            className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {body}
          </Reveal>
        ) : null}
      </div>
      {action ? (
        <Reveal as="div" delay={320} className="shrink-0">
          {action}
        </Reveal>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 sm:py-24 lg:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
