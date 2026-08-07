"use client";
import { useEffect, useRef } from "react";
import { ProjectItem } from "@/types";

export default function ProjectModal({ project, onClose }: { project: ProjectItem | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (project) closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-ink/55 backdrop-blur-sm z-[200] flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-bg dark:bg-dark-bg max-w-[640px] w-full max-h-[86vh] overflow-y-auto p-12 border border-line-strong dark:border-white/25 relative">
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-6 right-6 font-mono text-xs text-muted dark:text-dark-muted hover:text-accent p-1.5"
        >
          CLOSE ✕
        </button>
        <div className="font-mono text-xs text-accent uppercase tracking-wide mb-6 font-semibold">
          {project.category === "fullstack" ? "Full Stack Case Study" : project.category === "react" ? "React Case Study" : "Frontend Case Study"}
        </div>
        <h3 id="modalTitle" className="font-serif text-4xl mb-2">
          {project.title}
        </h3>
        <p className="text-text-secondary dark:text-dark-secondary mb-5 text-base mt-4">{project.description}</p>
        <div className="flex gap-2 flex-wrap mb-2">
          {project.tags.map((t) => (
            <span key={t} className="font-mono text-[10.5px] uppercase tracking-wide px-2.5 py-1.5 bg-accent/10 text-accent font-semibold">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-5 flex-wrap mt-4">
          {project.links
            .filter((l) => l.href)
            .map((l) => (
              <a
                key={l.label}
                href={l.href!}
                target="_blank"
                rel="noopener"
                className="font-mono text-[11.5px] uppercase tracking-wide border-b border-ink dark:border-dark-ink pb-0.5 hover:text-accent hover:border-accent font-medium"
              >
                {l.label}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
