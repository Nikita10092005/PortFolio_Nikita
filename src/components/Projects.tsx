"use client";
import { useState } from "react";
import { projects } from "@/data/content";
import { ProjectItem } from "@/types";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import ProjectModal from "./ProjectModal";

const filters = [
  { key: "all", label: "All" },
  { key: "react", label: "React" },
  { key: "fullstack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
] as const;

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [active, setActive] = useState<ProjectItem | null>(null);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" aria-label="Projects" className="py-[140px]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <SectionHead eyebrow="Selected Work" title="Projects" index="04 / Portfolio" />

        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap mb-11" role="group" aria-label="Filter projects by category">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={`min-h-11 min-w-0 sm:min-w-[132px] px-6 py-3 font-mono text-[12px] font-semibold tracking-wide uppercase border transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent
                  ${filter === f.key ? "bg-ink text-bg border-ink shadow-[4px_4px_0_rgba(184,134,11,0.3)] dark:bg-dark-ink dark:text-dark-bg dark:border-dark-ink" : "border-line-strong dark:border-white/25 hover:-translate-y-0.5 hover:border-accent hover:text-accent"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10">
            {visible.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                aria-label={`View case study: ${p.title}`}
                className={`text-left bg-bg dark:bg-dark-bg p-5 sm:p-8 lg:p-10 hover:bg-bg-raised dark:hover:bg-dark-card transition-colors flex flex-col
                  ${p.featured ? "md:col-span-2 md:grid md:grid-cols-[1.1fr_1fr] md:gap-10 md:items-center" : ""}`}
              >
                <div className={`aspect-[16/10] bg-bg-raised dark:bg-dark-card border border-line dark:border-white/10 flex items-center justify-center mb-5 ${p.featured ? "md:mb-0 md:aspect-auto md:h-full md:min-h-[280px]" : ""}`}>
                  <span className="font-serif text-[15px] text-muted dark:text-dark-muted tracking-wide">{p.title}</span>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <span className="font-mono text-xs text-accent font-semibold">
                      {p.featured ? `Featured — ${String(i + 1).padStart(2, "0")}` : String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-serif text-[26px] mb-2.5">{p.title}</h3>
                  <p className="text-muted dark:text-dark-muted text-[15px] mb-4.5">{p.description}</p>
                  <div className="flex gap-2 flex-wrap mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-[10.5px] uppercase tracking-wide px-2.5 py-1.5 bg-accent/10 text-accent font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-5 flex-wrap">
                    {p.links.map((l) =>
                      l.href ? (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener"
                          onClick={(e) => e.stopPropagation()}
                          className="font-mono text-[11.5px] uppercase tracking-wide border-b border-ink dark:border-dark-ink pb-0.5 hover:text-accent hover:border-accent font-medium"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <span key={l.label} className="font-mono text-[11.5px] uppercase tracking-wide opacity-50 border-b border-line-strong dark:border-white/25 pb-0.5">
                          {l.label}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
