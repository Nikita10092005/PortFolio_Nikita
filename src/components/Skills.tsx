"use client";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function Bar({ percent }: { percent: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(percent);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={ref} className="h-0.5 bg-line dark:bg-white/10 relative overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 bg-accent transition-[width] duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="py-[140px]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <SectionHead eyebrow="Capabilities" title="Skills & Tools" index="02 / Toolkit" />
      </div>
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10">
            {skills.map((cat) => (
              <div key={cat.title} className="bg-bg dark:bg-dark-bg p-9 hover:bg-bg-raised dark:hover:bg-dark-card transition-colors">
                <h3 className="font-serif text-[22px] mb-5 flex items-center gap-3">
                  {cat.title} <span className="font-mono text-xs text-accent font-medium">{cat.index}</span>
                </h3>
                {cat.items.map((item) => (
                  <div key={item.name} className="mb-4">
                    <div className="flex justify-between text-[13px] mb-1.5 font-mono tracking-wide font-medium">
                      <span>{item.name}</span>
                      <span className="text-muted dark:text-dark-muted">{item.level}</span>
                    </div>
                    <Bar percent={item.percent} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
