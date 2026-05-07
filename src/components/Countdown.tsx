import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-29T09:00:00+05:30").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    setT(calc());
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  const items = [
    { l: "Days", v: t.d },
    { l: "Hours", v: t.h },
    { l: "Minutes", v: t.m },
    { l: "Seconds", v: t.s },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-5 max-w-2xl mx-auto">
      {items.map((it) => (
        <div key={it.l} className="glass-card rounded-2xl p-4 sm:p-6 text-center">
          <div className="text-3xl sm:text-5xl font-bold font-display text-gradient tabular-nums">
            {String(it.v).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
            {it.l}
          </div>
        </div>
      ))}
    </div>
  );
}
