"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(navLinks.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-md transition-colors duration-300
          bg-bg/85 dark:bg-dark-bg/85
          ${scrolled ? "border-b border-line dark:border-white/10 shadow-sm" : "border-b border-transparent"}`}
      >
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16 py-4 sm:py-5 flex items-center justify-between">
          <a href="#home" className="font-serif text-[22px] font-bold" aria-label="Nikita Kalal — Home">
            NK<span className="text-accent">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-mono text-[13px] font-medium tracking-[0.08em] uppercase transition-colors relative pb-1
                  ${active === l.href.replace("#", "") ? "text-ink dark:text-dark-ink" : "text-muted dark:text-dark-muted"}
                  hover:text-ink dark:hover:text-dark-ink
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-accent after:transition-all
                  ${active === l.href.replace("#", "") ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              className="md:hidden min-h-11 min-w-11 p-2 flex items-center justify-center"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobileMenu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobileMenu"
        aria-label="Mobile"
        aria-hidden={!open}
        className={`fixed inset-0 z-[99] bg-bg dark:bg-dark-bg flex flex-col items-start justify-center gap-7 px-10
          transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)]
          ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-serif text-4xl font-semibold"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
