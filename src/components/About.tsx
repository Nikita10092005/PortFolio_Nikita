import { profile } from "@/data/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" aria-label="About" className="py-[140px] md:py-[140px]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <SectionHead eyebrow="About" title="The developer behind the code" index="01 / Profile" />

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-20">
          <Reveal className="space-y-5">
            {profile.about.map((p, i) => (
              <p
                key={i}
                className={`text-lg text-text-secondary dark:text-dark-secondary ${
                  i === 0
                    ? "first-letter:font-serif first-letter:text-[74px] first-letter:float-left first-letter:leading-[0.8] first-letter:pr-2.5 first-letter:pt-1.5 first-letter:text-accent first-letter:font-bold"
                    : ""
                }`}
              >
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal className="border-l border-line dark:border-white/10 pl-10">
            <h4 className="text-[15px] uppercase tracking-[0.1em] font-mono font-semibold text-muted dark:text-dark-muted mb-4.5">
              Quick Facts
            </h4>
            <ul className="flex flex-col gap-3.5 mb-10">
              <li className="flex justify-between text-sm border-b border-dotted border-line dark:border-white/10 pb-3 gap-4">
                <span className="text-muted dark:text-dark-muted font-mono text-xs uppercase tracking-wide">Based in</span>
                <span className="font-medium text-right">{profile.location}</span>
              </li>
              <li className="flex justify-between text-sm border-b border-dotted border-line dark:border-white/10 pb-3 gap-4">
                <span className="text-muted dark:text-dark-muted font-mono text-xs uppercase tracking-wide">Graduation</span>
                <span className="font-medium text-right">BCA, VNSGU (2023–26)</span>
              </li>
              <li className="flex justify-between text-sm border-b border-dotted border-line dark:border-white/10 pb-3 gap-4">
                <span className="text-muted dark:text-dark-muted font-mono text-xs uppercase tracking-wide">Focus</span>
                <span className="font-medium text-right">Full Stack Web Development & Web Design</span>
              </li>
              <li className="flex justify-between text-sm border-b border-dotted border-line dark:border-white/10 pb-3 gap-4">
                <span className="text-muted dark:text-dark-muted font-mono text-xs uppercase tracking-wide">Internships</span>
                <span className="font-medium text-right">2 completed</span>
              </li>
              <li className="flex justify-between text-sm border-b border-dotted border-line dark:border-white/10 pb-3 gap-4">
                <span className="text-muted dark:text-dark-muted font-mono text-xs uppercase tracking-wide">Email</span>
                <span className="font-medium text-right">{profile.email}</span>
              </li>
            </ul>
            <h4 className="text-[15px] uppercase tracking-[0.1em] font-mono font-semibold text-muted dark:text-dark-muted mb-4.5">
              Languages
            </h4>
            <div className="flex gap-2.5 flex-wrap">
              {profile.languages.map((l) => (
                <span
                  key={l}
                  className="font-mono text-[11px] tracking-wide border border-line-strong dark:border-white/25 px-3.5 py-1.5 uppercase font-medium"
                >
                  {l}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
