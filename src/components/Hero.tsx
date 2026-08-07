"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile, stats } from "@/data/content";
import { Button, LinkButton } from "./ui/Button";
import { downloadResume } from "./Resume";

function Counter({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1200;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-serif text-[clamp(28px,3.4vw,44px)] font-bold text-accent">
      {value}
    </div>
  );
}

/** Subtle drifting gold particles behind the hero copy. */
function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w: number, h: number, raf: number;
    let particles: { x: number; y: number; r: number; vx: number; vy: number; o: number }[] = [];

    function resize() {
      w = canvas!.width = canvas!.offsetWidth;
      h = canvas!.height = canvas!.offsetHeight;
    }
    function init() {
      resize();
      particles = Array.from({ length: Math.min(40, Math.floor(w / 40)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        o: Math.random() * 0.4 + 0.1,
      }));
    }
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(184,134,11,${p.o})`;
        ctx!.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    window.addEventListener("resize", resize);
    init();
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 z-0 opacity-55 pointer-events-none" />;
}

const technologies = ["React", "Next.js", "TypeScript", "Node.js", "PHP", "Laravel", "MySQL"];

function DeveloperPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      role="img"
      aria-label="Technology stack: React, Next.js, TypeScript, Node.js, PHP, Laravel and MySQL"
      className="relative min-h-[390px] overflow-hidden border border-line-strong bg-bg-raised p-7 shadow-[18px_18px_0_rgba(26,26,26,0.05)] dark:border-white/25 dark:bg-dark-card sm:min-h-[460px] sm:p-10"
    >
      <div className="absolute inset-5 border border-line/70 dark:border-white/10" />
      <div className="relative flex h-full min-h-[334px] flex-col justify-between sm:min-h-[380px]">
        <div className="flex items-center justify-between font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-muted dark:text-dark-muted">
          <span>Core stack</span><span className="text-accent">07 tools</span>
        </div>
        <div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-accent/40 sm:h-52 sm:w-52">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute inset-3 rounded-full border border-dashed border-line-strong dark:border-white/25" />
          <div className="text-center">
            <span className="block font-serif text-5xl italic text-accent">&lt;/&gt;</span>
            <span className="mt-2 block font-mono text-[12px] uppercase tracking-[0.18em]">Full-stack</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          {technologies.map((technology, index) => (
            <motion.span key={technology} animate={{ y: [0, index % 2 ? -4 : 4, 0] }} transition={{ duration: 3.5 + index * 0.2, repeat: Infinity, ease: "easeInOut" }} className="border border-line-strong bg-bg px-3 py-2 font-mono text-[12px] font-semibold tracking-wide dark:border-white/20 dark:bg-dark-bg">
              {technology}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [downloading, setDownloading] = useState(false);

  return (
    <section id="home" aria-label="Introduction" className="min-h-screen flex flex-col justify-center pt-[140px] pb-16 relative">
      <HeroCanvas />
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        <div className="font-mono text-[13px] tracking-[0.2em] uppercase text-muted dark:text-dark-muted mb-6 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Portfolio — Issue No. 01 — Vapi, Gujarat
        </div>

        <h1 className="font-serif font-bold leading-[0.98] tracking-tight text-[clamp(42px,9vw,118px)]">
          Hello, I&apos;m
          <br />
          <em className="italic font-medium text-accent not-italic md:italic">{profile.name}</em>
        </h1>

        <div className="mt-7 font-mono text-[15px] text-muted dark:text-dark-muted flex flex-wrap gap-y-2">
          {profile.roles.map((r, i) => (
            <span key={r}>
              {r}
              {i < profile.roles.length - 1 && <span className="mx-3.5 text-line-strong dark:text-white/25">/</span>}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center mt-14">
          <div>
            <p className="text-lg text-text-secondary dark:text-dark-secondary max-w-[46ch]">{profile.lede}</p>
            <div className="flex flex-wrap gap-3.5 mt-8">
              <LinkButton href="#projects" variant="solid">
                View Projects
              </LinkButton>
              <Button
                variant="ghost"
                loading={downloading}
                onClick={() => downloadResume(setDownloading)}
                aria-label="Download resume PDF"
              >
                Download Resume
              </Button>
              <LinkButton href="#contact" variant="ghost">
                Contact Me
              </LinkButton>
            </div>
          </div>
          <DeveloperPanel />
        </div>

        <div className="mt-20 border-t border-b border-line dark:border-white/10 grid grid-cols-2 md:grid-cols-4">
          <div className="p-7 border-r border-line dark:border-white/10">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted dark:text-dark-muted mb-1.5">Location</div>
            <div className="font-serif text-xl">Vapi, IN</div>
          </div>
          <div className="p-7 border-r border-line dark:border-white/10 md:border-r">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted dark:text-dark-muted mb-1.5">Availability</div>
            <div className="font-serif text-xl text-accent">Open to work</div>
          </div>
          {stats.map((s, i) => (
            <div key={s.label} className={`p-7 ${i === 0 ? "border-r border-line dark:border-white/10" : ""}`}>
              <Counter target={s.value} />
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted dark:text-dark-muted mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
