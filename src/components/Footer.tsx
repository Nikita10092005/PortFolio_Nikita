"use client";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-white/10 pt-16 pb-8">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <div className="flex justify-between items-start flex-wrap gap-10 mb-14">
          <div className="font-serif text-[32px] font-bold">{profile.name}</div>
          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-dark-muted mb-4 font-semibold">
                Navigate
              </h4>
              {["About", "Experience", "Projects", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-sm mb-2.5 text-text-secondary dark:text-dark-secondary hover:text-accent transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-dark-muted mb-4 font-semibold">
                Elsewhere
              </h4>
              <a href={profile.github} target="_blank" rel="noopener" className="block text-sm mb-2.5 text-text-secondary dark:text-dark-secondary hover:text-accent transition-colors">
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="block text-sm mb-2.5 text-text-secondary dark:text-dark-secondary hover:text-accent transition-colors">
                Email
              </a>
              <a href={`tel:${profile.phoneRaw}`} className="block text-sm mb-2.5 text-text-secondary dark:text-dark-secondary hover:text-accent transition-colors">
                Phone
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 sm:pt-12">
          <p className="font-mono text-[11px] text-muted dark:text-dark-muted tracking-wide">
            © 2026 Nikita Kalal — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
