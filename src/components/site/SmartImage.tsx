import { useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Image with a shimmering skeleton while it decodes, then a blur-out settle.
 * `complete` is re-checked on mount because cached images can finish before
 * React attaches the load handler.
 */
export function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  eager = false,
  kenBurns = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  kenBurns?: boolean;
}) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    setStatus("loading");
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setStatus("ready");
  }, [src]);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        status === "loading" && "shimmer",
        status === "error" && "grid-lines bg-muted",
        className,
      )}
    >
      {status === "error" ? (
        <div className="absolute inset-0 grid place-items-center text-muted-foreground">
          <ImageOff className="size-6 opacity-60" />
        </div>
      ) : null}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("error")}
        className={cn(
          "size-full object-cover transition-[opacity,filter,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
          status === "ready" ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-xl",
          kenBurns && status === "ready" && "ken-burns",
          imgClassName,
        )}
      />
    </div>
  );
}
