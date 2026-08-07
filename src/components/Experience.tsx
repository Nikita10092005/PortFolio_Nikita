import { experience } from "@/data/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="py-[140px] bg-bg-raised dark:bg-dark-card">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <SectionHead eyebrow="Career" title="Experience" index="03 / Timeline" />

        <Reveal>
          <div className="relative pl-12 before:content-[''] before:absolute before:left-1.5 before:top-1.5 before:bottom-1.5 before:w-px before:bg-line-strong dark:before:bg-white/25">
            {experience.map((exp, i) => (
              <div key={i} className={`relative ${i < experience.length - 1 ? "pb-16" : ""}`}>
                <div className="absolute -left-12 top-1.5 w-[13px] h-[13px] rounded-full border-2 border-accent bg-bg dark:bg-dark-bg" />
                <div className="flex justify-between items-baseline flex-wrap gap-2.5 mb-2.5">
                  <h3 className="font-serif text-[26px]">{exp.role}</h3>
                  <span className="font-mono text-xs text-accent uppercase tracking-wide font-semibold whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                <div className="font-mono text-[13px] text-muted dark:text-dark-muted mb-4 uppercase tracking-wide font-medium">
                  {exp.company}
                </div>
                <ul className="flex flex-col gap-2 max-w-[64ch]">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-base pl-4.5 relative text-text-secondary dark:text-dark-secondary before:content-['—'] before:absolute before:left-0 before:text-accent">
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 flex-wrap mt-4.5">
                  {exp.tags.map((t) => (
                    <span key={t} className="font-mono text-[10.5px] uppercase tracking-wide px-2.5 py-1.5 bg-accent/10 text-accent font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
