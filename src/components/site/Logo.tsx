import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";

export function Logo({ className }: { className?: string }) {
  const { theme } = useTheme();

  const isLight = theme === "light";
  const defaultSrc = isLight ? "/images/branding/techfusionlogolight.webp" : "/images/branding/techfusionlogo.webp";
  const smSrc = isLight ? "/images/branding/techfusionlogolight-sm.webp" : "/images/branding/techfusionlogo-sm.webp";

  return (
    <img
      src={defaultSrc}
      srcSet={`${smSrc} 256w, ${defaultSrc} 512w`}
      sizes="(max-width: 640px) 256px, 512px"
      alt="Tech Fusion Club Logo"
      width={160}
      height={160}
      className={cn("h-10 w-auto object-contain transition-all duration-300", className)}
    />
  );
}
