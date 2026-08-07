"use client";
import { useState } from "react";
import { Button } from "./ui/Button";
import Reveal from "./Reveal";

const RESUME_PATH = "/resume.pdf";

/** Shared handler so Hero, Resume section, and Contact can all trigger the same download UX. */
export function downloadResume(setLoading?: (v: boolean) => void) {
  setLoading?.(true);
  const a = document.createElement("a");
  a.href = RESUME_PATH;
  a.download = "resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  if (setLoading) setTimeout(() => setLoading(false), 500);
}

export function viewResume() {
  window.open(RESUME_PATH, "_blank", "noopener");
}

export default function Resume() {
  const [downloading, setDownloading] = useState(false);

  return (
    <section id="resume" aria-label="Resume" className="py-[140px] bg-bg-raised dark:bg-dark-card">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent flex items-center gap-2.5 before:content-[''] before:w-6 before:h-px before:bg-accent mb-2">
              05 / Documented
            </div>
            <h2 className="font-serif text-4xl mb-5">My Resume</h2>
            <p className="text-muted dark:text-dark-muted text-lg mb-10 max-w-[64ch]">
              Everything above, distilled onto one page — education, internships, projects and skills, ready to hand
              to a recruiter.
            </p>
            <ul className="grid sm:grid-cols-2 mb-10 border-t border-line dark:border-white/10">
              {[
                ["Education", "BCA, VNSGU · 2023–2026"],
                ["Experience", "2 certified internships"],
                ["Skills", "React, PHP, MySQL, MongoDB"],
                ["Achievements", "Gold Medal, Advanced Excel"],
              ].map(([k, v]) => (
                <li key={k} className="flex justify-between py-5 border-b border-line dark:border-white/10 font-mono text-[13px] uppercase tracking-wide font-semibold gap-5 sm:odd:pr-8 sm:even:pl-8 sm:even:border-l">
                  <span>{k}</span>
                  <span className="text-muted dark:text-dark-muted normal-case font-sans text-sm font-normal text-right">{v}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3.5 flex-wrap">
              <Button variant="solid" onClick={viewResume} aria-label="View resume in a new tab">
                View Resume
              </Button>
              <Button
                variant="ghost"
                loading={downloading}
                onClick={() => downloadResume(setDownloading)}
                aria-label="Download resume PDF"
              >
                Download Resume
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
