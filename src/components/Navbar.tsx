"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";

const navIds = navLinks.map((link) => link.href.slice(1));
const mobileSections = [
  ...navLinks.slice(0, 5),
  { href: "#resume", label: "Resume" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];
const mobileIds = mobileSections.map((section) => section.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useScrollSpy(navIds);
  const mobileActive = useScrollSpy(mobileIds, 110);
  const currentLabel = mobileSections.find((section) => section.href === `#${mobileActive}`)?.label ?? "Home";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 400);
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(distance > 0 ? Math.min((window.scrollY / distance) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[100] bg-bg/85 backdrop-blur-md transition-all duration-300 dark:bg-dark-bg/85 ${scrolled ? "border-b border-line shadow-[0_8px_28px_rgba(26,26,26,0.07)] dark:border-white/10 dark:shadow-[0_8px_28px_rgba(0,0,0,0.22)]" : "border-b border-line/70 dark:border-white/10 md:border-transparent"}`}>
        <div className="relative mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8 sm:py-5 lg:px-16">
          <a href="#home" className="font-serif text-[22px] font-bold" aria-label="Nikita Kalal — Home">
            NK<span className="text-accent">.</span>
          </a>

          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 md:hidden" aria-live="polite">
            <span className="block max-w-[88px] truncate font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted dark:text-dark-muted min-[390px]:max-w-[120px]">{currentLabel}</span>
          </div>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`relative pb-1 font-mono text-[13px] font-medium uppercase tracking-[0.08em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent after:transition-all ${active === link.href.slice(1) ? "text-ink after:w-full dark:text-dark-ink" : "text-muted after:w-0 hover:text-ink hover:after:w-full dark:text-dark-muted dark:hover:text-dark-ink"}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="hidden md:block"><ThemeToggle /></div>
            <div className="md:hidden"><ThemeToggle className="!h-11 !w-11" /></div>
            <button className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line-strong p-2 transition-colors hover:border-accent hover:text-accent dark:border-white/25 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobileMenu" onClick={() => setOpen((value) => !value)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[-1px] h-px md:hidden" aria-hidden="true">
          <div className="h-full bg-accent transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <div className={`fixed inset-0 z-[98] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        <button type="button" aria-label="Close navigation" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className={`absolute inset-0 bg-ink/20 backdrop-blur-[2px] transition-opacity duration-500 dark:bg-black/45 ${open ? "opacity-100" : "opacity-0"}`} />
        <nav id="mobileMenu" aria-label="Mobile" className={`absolute bottom-0 right-0 top-0 flex w-[88%] max-w-[370px] flex-col overflow-y-auto border-l border-line bg-bg px-7 pb-10 pt-28 shadow-[-18px_0_45px_rgba(26,26,26,0.12)] transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)] dark:border-white/10 dark:bg-dark-bg dark:shadow-[-18px_0_45px_rgba(0,0,0,0.35)] ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Navigation</div>
          {navLinks.map((link, index) => {
            const isActive = active === link.href.slice(1);
            return (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={isActive ? "page" : undefined} tabIndex={open ? 0 : -1} className={`group flex min-h-14 items-center justify-between border-b border-line py-3 font-serif text-[clamp(25px,8vw,34px)] font-semibold transition-colors dark:border-white/10 ${isActive ? "text-accent" : "hover:text-accent"}`}>
                <span>{link.label}</span>
                <span className={`font-mono text-[10px] tracking-widest ${isActive ? "opacity-100" : "opacity-35"}`}>{String(index + 1).padStart(2, "0")}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className={`fixed bottom-5 right-5 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-bg/95 text-ink shadow-[0_8px_24px_rgba(26,26,26,0.14)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent dark:border-white/25 dark:bg-dark-bg/95 dark:text-dark-ink md:hidden ${showBackToTop ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}>
        <ArrowUp size={18} strokeWidth={1.5} aria-hidden="true" />
      </button>
    </>
  );
}
