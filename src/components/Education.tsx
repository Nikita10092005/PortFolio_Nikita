import { education } from "@/data/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Education() {
  return (
    <section id="education" aria-label="Education" className="py-[140px]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <SectionHead eyebrow="Academics" title="Education" index="06 / Record" />

        <Reveal>
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`grid md:grid-cols-[140px_1fr] gap-8 py-8 border-b border-line dark:border-white/10 ${i === 0 ? "border-t" : ""}`}
            >
              <div className="font-mono text-[13px] text-accent tracking-wide font-semibold">{edu.year}</div>
              <div>
                <h3 className="font-serif text-[23px] mb-1.5">{edu.degree}</h3>
                <div className="font-mono text-xs text-muted dark:text-dark-muted uppercase tracking-wide mb-3 font-medium">
                  {edu.school}
                </div>
                <p className="text-text-secondary dark:text-dark-secondary text-[15px] max-w-[60ch]">{edu.description}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
