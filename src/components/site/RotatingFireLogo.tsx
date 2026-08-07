import { cn } from "@/lib/utils";

export function RotatingFireLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center select-none py-8 sm:py-12 overflow-visible", className)}>
      {/* 1. Deep Radial Heat & Smoke Background Glow */}
      <div className="absolute size-96 sm:size-[32rem] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/70 via-orange-600/40 via-red-700/20 to-transparent blur-3xl animate-pulse" />

      {/* 2. REALISTIC FIRE FLAMES - SVG Licking Flame Tongues System */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
        <svg
          viewBox="0 0 400 400"
          className="absolute size-[26rem] sm:size-[34rem] overflow-visible drop-shadow-[0_0_25px_rgba(234,88,12,0.9)]"
        >
          <defs>
            {/* Fire Flame Gradient 1: Core Hot White to Amber to Deep Red */}
            <linearGradient id="real-fire-grad-1" x1="0.5" y1="1" x2="0.5" y2="0">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="20%" stopColor="#fef08a" />
              <stop offset="45%" stopColor="#f97316" />
              <stop offset="75%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0" />
            </linearGradient>

            {/* Fire Flame Gradient 2: Intense Orange-Gold */}
            <linearGradient id="real-fire-grad-2" x1="0.5" y1="1" x2="0.5" y2="0">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="35%" stopColor="#ea580c" />
              <stop offset="70%" stopColor="#b91c1c" />
              <stop offset="100%" stopColor="#450a0a" stopOpacity="0" />
            </linearGradient>

            {/* Flame Glow Filter */}
            <filter id="flame-blur">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* Background Outer Flame Layer - Large Swaying Tongues */}
          <g className="origin-bottom opacity-80" style={{ transformOrigin: "200px 320px" }}>
            {/* Left Flame Tongue */}
            <path
              d="M140 320 Q120 220 160 140 Q180 200 200 320 Z"
              fill="url(#real-fire-grad-2)"
              className="animate-[pulse_1.2s_ease-in-out_infinite]"
              style={{ animationDelay: "0ms" }}
            />
            {/* Center Main High Flame Tongue */}
            <path
              d="M160 330 Q200 100 210 30 Q240 120 250 330 Z"
              fill="url(#real-fire-grad-1)"
              className="animate-[pulse_0.9s_ease-in-out_infinite]"
              style={{ animationDelay: "150ms" }}
            />
            {/* Right Flame Tongue */}
            <path
              d="M210 320 Q260 180 270 120 Q270 230 250 320 Z"
              fill="url(#real-fire-grad-2)"
              className="animate-[pulse_1.4s_ease-in-out_infinite]"
              style={{ animationDelay: "300ms" }}
            />
          </g>

          {/* Foreground Energetic Flame Tongues */}
          <g className="origin-bottom">
            {/* Mid Flame Licks */}
            <path
              d="M170 300 Q190 160 205 90 Q225 180 235 300 Z"
              fill="url(#real-fire-grad-1)"
              className="animate-[bounce_1.1s_ease-in-out_infinite]"
            />
            <path
              d="M155 310 Q175 200 185 130 Q200 220 215 310 Z"
              fill="url(#real-fire-grad-2)"
              className="animate-[pulse_0.8s_ease-in-out_infinite]"
            />
            <path
              d="M195 310 Q220 190 235 110 Q245 210 255 310 Z"
              fill="url(#real-fire-grad-1)"
              className="animate-[pulse_1.3s_ease-in-out_infinite]"
            />
          </g>
        </svg>

        {/* 3. Rising Sparks & Burning Embers (Drifting upwards) */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute bottom-10 left-[45%] size-2.5 rounded-full bg-yellow-200 shadow-[0_0_10px_#fde047] animate-[bounce_1.5s_infinite]" />
          <span className="absolute bottom-14 left-[52%] size-3 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24] animate-[ping_2s_infinite]" />
          <span className="absolute bottom-20 left-[38%] size-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316] animate-[pulse_1.2s_infinite]" />
          <span className="absolute bottom-24 left-[58%] size-2.5 rounded-full bg-red-400 shadow-[0_0_10px_#f87171] animate-[bounce_1.8s_infinite]" />
          <span className="absolute bottom-32 left-[48%] size-1.5 rounded-full bg-amber-200 shadow-[0_0_6px_#fef08a] animate-[ping_1.3s_infinite]" />
        </div>
      </div>

      {/* 4. Main HUGE Logo - Rotating Clockwise in the Middle of Fire Flames */}
      <div className="relative z-20 size-72 sm:size-[24rem] animate-[spin_12s_linear_infinite] drop-shadow-[0_0_40px_rgba(251,146,60,1)]">
        <img
          src="/images/branding/techfusionlogo.png"
          alt="Tech Fusion Real Fire Rotating Logo"
          className="size-full object-contain filter drop-shadow-[0_0_30px_rgba(249,115,22,1)] transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* 5. Fiery Base Glow Bar */}
      <div className="absolute -bottom-4 h-12 w-64 sm:w-96 rounded-full bg-gradient-to-r from-red-600 via-amber-400 to-red-600 blur-xl opacity-90 animate-pulse" />
    </div>
  );
}
