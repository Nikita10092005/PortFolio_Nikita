"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className={cn("w-[38px] h-[38px]", className)} aria-hidden="true" />;

  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className={cn("w-[38px] h-[38px] rounded-full border border-line-strong dark:border-white/25 flex items-center justify-center text-ink dark:text-dark-ink hover:border-accent hover:text-accent hover:rotate-[20deg] transition-all duration-300", className)}
    >
      <Sun size={16} strokeWidth={1.5} />
    </button>
  );
}
