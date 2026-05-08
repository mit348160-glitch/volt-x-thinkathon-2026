import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

const SESSION_KEY = "ignivox.splashShown";

export function Splash() {
  // Initialize from sessionStorage so repeat visits skip immediately.
  const [gone, setGone] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [fade, setFade] = useState(false);

  const dismiss = () => {
    setFade(true);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    window.setTimeout(() => setGone(true), 500);
  };

  useEffect(() => {
    if (gone) return;
    const t1 = window.setTimeout(() => setFade(true), 1800);
    const t2 = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      setGone(true);
    }, 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="glow-orb h-[420px] w-[420px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[oklch(0.65_0.27_305)] animate-pulse-glow" />

      <div className="relative flex flex-col items-center text-center">
        <div className="relative">
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] blur-2xl opacity-70 animate-pulse-glow" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] shadow-[var(--shadow-neon)] animate-float">
            <Zap className="h-10 w-10 text-white" />
          </span>
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-bold font-display tracking-tight animate-fade-up">
          VOLT <span className="text-gradient">X</span> IGNIVOX
        </h1>
        <p
          className="mt-3 text-sm uppercase tracking-[0.4em] text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Igniting Ideas · 2026
        </p>
        <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full bg-gradient-to-r from-[var(--neon-purple)] via-[var(--neon-blue)] to-[var(--neon-cyan)] origin-left animate-[splash-bar_1.8s_ease-out_forwards]" />
        </div>
      </div>

      <button
        onClick={dismiss}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full glass"
        aria-label="Skip splash screen"
      >
        Skip intro
      </button>

      <style>{`
        @keyframes splash-bar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
