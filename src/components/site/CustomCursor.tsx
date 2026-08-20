import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CursorState = "default" | "interactive" | "view" | "grab" | "drag";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isTouch, setIsTouch] = useState(true);

  // Initial capability detection
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkPointer = () => {
      const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      setIsTouch(!isFinePointer);
      if (isFinePointer) {
        document.documentElement.classList.add("has-custom-cursor");
      } else {
        document.documentElement.classList.remove("has-custom-cursor");
      }
    };

    checkPointer();

    const mq = window.matchMedia("(pointer: fine)");
    mq.addEventListener("change", checkPointer);
    return () => {
      mq.removeEventListener("change", checkPointer);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (isTouch) return;

    let mouseX = -100; // start off-screen
    let mouseY = -100;
    let ringX = mouseX;
    let ringY = mouseY;
    let isMoving = false;
    let frameId: number;
    let isDown = false;
    let dragThresholdMet = false;
    let downX = 0;
    let downY = 0;

    const render = () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const lerpFactor = reducedMotion ? 1 : 0.2; // spring lerp

      ringX += (mouseX - ringX) * lerpFactor;
      ringY += (mouseY - ringY) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      if (Math.abs(mouseX - ringX) > 0.1 || Math.abs(mouseY - ringY) > 0.1) {
        frameId = requestAnimationFrame(render);
      } else {
        isMoving = false;
      }
    };

    const updateState = (e: PointerEvent, forceDownState?: boolean) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (forceDownState || isDown) {
        if (dragThresholdMet) {
          setCursorState("drag");
        } else {
          setCursorState("grab");
        }
        return;
      }

      const viewEl = target.closest('[data-cursor="view"]');
      if (viewEl) {
        setCursorState("view");
        return;
      }

      const isInteractive = target.closest(
        "a, button, [role='button'], input, textarea, select, summary, [tabindex]:not([tabindex='-1'])",
      );
      if (isInteractive) {
        setCursorState("interactive");
        return;
      }

      setCursorState("default");
    };

    const onPointerMove = (e: PointerEvent) => {
      // Ignore touch events in the pointer stream just in case
      if (e.pointerType === "touch") return;

      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      if (!isMoving) {
        isMoving = true;
        frameId = requestAnimationFrame(render);
      }

      if (isDown && !dragThresholdMet) {
        const dist = Math.hypot(mouseX - downX, mouseY - downY);
        if (dist > 5) {
          dragThresholdMet = true;
        }
      }

      updateState(e);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch" || e.button !== 0) return;
      isDown = true;
      dragThresholdMet = false;
      downX = e.clientX;
      downY = e.clientY;
      updateState(e, true);

      // Add a subtle click feedback class to dot
      if (dotRef.current) {
        dotRef.current.classList.add("click-pulse");
        setTimeout(() => {
          if (dotRef.current) dotRef.current.classList.remove("click-pulse");
        }, 150);
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      isDown = false;
      dragThresholdMet = false;
      updateState(e);
    };

    const onPointerEnter = () => {
      if (ringRef.current) ringRef.current.style.opacity = "1";
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    const onPointerLeave = () => {
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    document.addEventListener("mouseenter", onPointerEnter);
    document.addEventListener("mouseleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseenter", onPointerEnter);
      document.removeEventListener("mouseleave", onPointerLeave);
      cancelAnimationFrame(frameId);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div
      className="custom-cursor-container"
      style={{
        pointerEvents: "none",
        zIndex: 9999,
        position: "fixed",
        inset: 0,
        overflow: "hidden",
      }}
    >
      <div
        ref={dotRef}
        className={cn(
          "custom-cursor-dot",
          cursorState === "interactive" && "is-interactive",
          cursorState === "view" && "is-view",
          (cursorState === "grab" || cursorState === "drag") && "is-grab",
        )}
      />
      <div
        ref={ringRef}
        className={cn(
          "custom-cursor-ring",
          cursorState === "interactive" && "is-interactive",
          cursorState === "view" && "is-view",
          cursorState === "grab" && "is-grab",
          cursorState === "drag" && "is-drag",
        )}
      >
        <div className="custom-cursor-label">
          {cursorState === "view" && "VIEW"}
          {cursorState === "grab" && "GRAB"}
          {cursorState === "drag" && "← DRAG →"}
        </div>
      </div>
    </div>
  );
}
