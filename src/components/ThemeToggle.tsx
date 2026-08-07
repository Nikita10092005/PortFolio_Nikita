"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[38px] h-[38px]" aria-hidden="true" />;

  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className="w-[38px] h-[38px] rounded-full border border-line-strong dark:border-white/25 flex items-center justify-center
                 text-ink dark:text-dark-ink hover:border-accent hover:text-accent hover:rotate-[20deg] transition-all duration-300"
    >
      <Sun size={16} strokeWidth={1.5} />
    </button>
  );
}
