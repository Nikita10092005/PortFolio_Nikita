"use client";

import { achievements } from "@/data/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { LinkButton } from "./ui/Button";

export default function Achievements() {
  function scrollToOneCart(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const project = document.querySelector<HTMLElement>('[aria-label="View case study: OneCart.com"]');
    project?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.history.replaceState(null, "", "#projects");
  }

  return (
    <section id="achievements" aria-label="Achievements" className="py-[140px] bg-bg-raised dark:bg-dark-card">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <SectionHead eyebrow="Recognition" title="Achievements" index="07 / Highlights" />

        <Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10 text-center">
            {achievements.stats.map((s) => (
              <article
                key={s.label}
                className="group flex min-h-[240px] flex-col items-center justify-center bg-bg px-8 py-12 transition-all duration-300 hover:relative hover:z-10 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(26,26,26,0.08)] dark:bg-dark-bg dark:hover:shadow-[0_14px_35px_rgba(0,0,0,0.25)]"
              >
                <div className="font-serif text-[64px] leading-none text-accent font-bold">{s.value}</div>
                <div className="font-mono text-[13px] uppercase tracking-wide text-muted dark:text-dark-muted mt-5 font-semibold">
                  {s.label}
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <article className="group border border-line-strong bg-bg px-6 py-12 transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_18px_45px_rgba(26,26,26,0.07)] dark:border-white/25 dark:bg-dark-bg dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.24)] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
            <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-accent">
              — Featured Award
            </div>
            <h3 className="mt-5 max-w-[18ch] font-serif text-[clamp(36px,5vw,64px)] leading-[1.05]">
              Gold Medal – Major Project
            </h3>
            <p className="mt-4 font-serif text-xl italic text-accent sm:text-2xl">OneCart.com (Semester 6)</p>
            <p className="mt-7 max-w-[70ch] text-base leading-relaxed text-text-secondary dark:text-dark-secondary sm:text-lg">
              Awarded Gold Medal for the Semester 6 Final Year Major Project &quot;OneCart.com&quot;, a Full Stack
              E-commerce Website developed using React, Node.js, Express.js and MySQL.
            </p>
            <div className="mt-10 flex flex-wrap gap-3.5">
              <LinkButton href="#projects" variant="solid" onClick={scrollToOneCart}>View Project</LinkButton>
              <LinkButton
                href="https://github.com/Nikita10092005/OneCart.com-frontend"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                GitHub
              </LinkButton>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
