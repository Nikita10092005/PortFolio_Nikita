"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

const base =
  "min-h-11 min-w-[132px] justify-center font-mono text-[13px] font-semibold tracking-[0.08em] uppercase px-7 py-3 inline-flex items-center gap-2.5 " +
  "transition-all duration-300 ease-[cubic-bezier(.19,1,.22,1)] cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const variants = {
  solid:
    "bg-ink text-bg border border-ink hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-1 " +
    "dark:bg-dark-ink dark:text-dark-bg dark:border-dark-ink",
  ghost:
    "bg-transparent text-ink border border-ink hover:border-accent hover:text-accent hover:-translate-y-1 " +
    "dark:text-dark-ink dark:border-dark-ink",
};

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="w-3.5 h-3.5 rounded-full border-2 border-current border-t-transparent animate-spin"
    />
  );
}

interface CommonProps {
  variant?: "solid" | "ghost";
  loading?: boolean;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "solid",
  loading,
  disabled,
  children,
  className,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], (loading || disabled) && "opacity-65 cursor-not-allowed !translate-y-0", className)}
      disabled={loading || disabled}
      {...props}
    >
      {loading && <Spinner />}
      <span className={loading ? "opacity-75" : ""}>{children}</span>
    </button>
  );
}

export function LinkButton({
  variant = "solid",
  children,
  className,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
