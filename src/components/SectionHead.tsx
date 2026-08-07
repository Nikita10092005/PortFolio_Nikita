import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  index,
}: {
  eyebrow: string;
  title: string;
  index: string;
}) {
  return (
    <div className="flex justify-between items-end gap-6 sm:gap-10 flex-wrap mb-12 sm:mb-16">
      <div>
        <div className="font-mono text-[12px] font-medium tracking-[0.22em] uppercase text-accent flex items-center gap-2.5 before:content-[''] before:w-6 before:h-px before:bg-accent">
          {eyebrow}
        </div>
        <Reveal>
          <h2 className="font-serif text-[clamp(34px,5vw,58px)] mt-2">{title}</h2>
        </Reveal>
      </div>
      <div className="font-mono text-[13px] text-muted dark:text-dark-muted tracking-[0.1em]">{index}</div>
    </div>
  );
}
