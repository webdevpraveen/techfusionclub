import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";

export function Logo({ className }: { className?: string }) {
  const { theme } = useTheme();

  return (
    <img
      src={theme === "light" ? "/images/branding/techfusionlogolight.png" : "/images/branding/techfusionlogo.png"}
      alt="Tech Fusion Club Logo"
      className={cn("h-10 w-auto object-contain transition-all duration-300", className)}
    />
  );
}
