import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";

export function Logo({ className }: { className?: string }) {
  const { theme } = useTheme();

  return (
    <img
      src={theme === "light" ? "/images/branding/techfusionlogolight.webp" : "/images/branding/techfusionlogo.webp"}
      alt="Tech Fusion Club Logo"
      className={cn("h-10 w-auto object-contain transition-all duration-300", className)}
    />
  );
}
