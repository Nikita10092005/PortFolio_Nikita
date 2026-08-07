"use client";
import { FormEvent, useState } from "react";
import { profile } from "@/data/content";
import { sendContactEmail, isEmailConfigured } from "@/lib/emailjs";
import { Button } from "./ui/Button";
import Reveal from "./Reveal";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Errors {
  name?: boolean;
  email?: boolean;
  message?: boolean;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  function validate() {
    const next: Errors = {
      name: values.name.trim().length < 2,
      email: !EMAIL_PATTERN.test(values.email.trim()),
      message: values.message.trim().length < 5,
    };
    setErrors(next);
    return !next.name && !next.email && !next.message;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus(null);
    if (!validate()) {
      setStatus({ type: "error", msg: "Please fix the highlighted fields before sending." });
      return;
    }
    setSending(true);
    try {
      await sendContactEmail({
        from_name: values.name.trim(),
        from_email: values.email.trim(),
        message: values.message.trim(),
        sent_time: new Date().toLocaleString(),
        user_agent: navigator.userAgent,
      });
      setStatus({ type: "success", msg: "✓ Message Sent Successfully — thank you, I'll reply soon." });
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        msg: "Your message could not be sent just now. Please wait a moment and try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="py-[140px] bg-bg-raised dark:bg-dark-card">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-16">
          <Reveal>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent flex items-center gap-2.5 before:content-[''] before:w-6 before:h-px before:bg-accent mb-2">
              Get In Touch
            </div>
            <h2 className="font-serif text-4xl mb-4.5">Let&apos;s build something</h2>
            <p className="text-muted dark:text-dark-muted text-lg mb-10 max-w-[44ch]">
              Open to internship and junior developer roles, freelance projects, or just a conversation about
              full-stack web development.
            </p>
            <ul className="flex flex-col">
              <li>
                <a href={`mailto:${profile.email}`} className="flex justify-between items-center py-4.5 border-b border-line dark:border-white/10 hover:text-accent hover:pl-2 transition-all gap-4">
                  <span className="font-mono text-[11px] uppercase text-muted dark:text-dark-muted tracking-wide font-semibold">Email</span>
                  <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phoneRaw}`} className="flex justify-between items-center py-4.5 border-b border-line dark:border-white/10 hover:text-accent hover:pl-2 transition-all gap-4">
                  <span className="font-mono text-[11px] uppercase text-muted dark:text-dark-muted tracking-wide font-semibold">Phone</span>
                  <span>{profile.phone}</span>
                </a>
              </li>
              <li>
                <span className="flex justify-between items-center py-4.5 border-b border-line dark:border-white/10 gap-4">
                  <span className="font-mono text-[11px] uppercase text-muted dark:text-dark-muted tracking-wide font-semibold">Location</span>
                  <span>{profile.location}</span>
                </span>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub profile" className="flex justify-between items-center py-4.5 border-b border-line dark:border-white/10 hover:text-accent hover:pl-2 transition-all gap-4">
                  <span className="font-mono text-[11px] uppercase text-muted dark:text-dark-muted tracking-wide font-semibold">GitHub</span>
                  <span>@{profile.githubUser}</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="flex justify-between items-center py-4.5 border-b border-line dark:border-white/10 hover:text-accent hover:pl-2 transition-all gap-4">
                  <span className="font-mono text-[11px] uppercase text-muted dark:text-dark-muted tracking-wide font-semibold">Resume</span>
                  <span>View / Download</span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal>
            <form onSubmit={onSubmit} noValidate>
              {process.env.NODE_ENV === "development" && !isEmailConfigured() && (
                <div role="note" className="mb-6 border border-accent/40 bg-accent/10 px-4 py-3 font-mono text-[12px] text-accent">
                  Development setup: add the three NEXT_PUBLIC_EMAILJS values to enable message delivery.
                </div>
              )}
              <div className="mb-5.5">
                <label htmlFor="cname" className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-dark-muted flex justify-between mb-2 font-semibold">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="cname"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  aria-required="true"
                  aria-describedby="err-name"
                  value={values.name}
                  onChange={(e) => {
                    setValues((v) => ({ ...v, name: e.target.value }));
                    setErrors((er) => ({ ...er, name: false }));
                  }}
                  disabled={sending}
                  className={`w-full bg-transparent border-0 border-b py-3 px-0.5 text-base outline-none transition-colors
                    placeholder:text-muted dark:placeholder:text-dark-muted disabled:opacity-55 disabled:cursor-not-allowed
                    hover:border-ink dark:hover:border-dark-ink focus:border-accent
                    ${errors.name ? "border-red-600" : "border-line-strong dark:border-white/25"}`}
                />
                {errors.name && (
                  <div id="err-name" role="alert" className="font-mono text-[11.5px] text-red-600 mt-2">
                    Please enter your name.
                  </div>
                )}
              </div>

              <div className="mb-5.5">
                <label htmlFor="cemail" className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-dark-muted flex justify-between mb-2 font-semibold">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="cemail"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby="err-email"
                  value={values.email}
                  onChange={(e) => {
                    setValues((v) => ({ ...v, email: e.target.value }));
                    setErrors((er) => ({ ...er, email: false }));
                  }}
                  disabled={sending}
                  className={`w-full bg-transparent border-0 border-b py-3 px-0.5 text-base outline-none transition-colors
                    placeholder:text-muted dark:placeholder:text-dark-muted disabled:opacity-55 disabled:cursor-not-allowed
                    hover:border-ink dark:hover:border-dark-ink focus:border-accent
                    ${errors.email ? "border-red-600" : "border-line-strong dark:border-white/25"}`}
                />
                {errors.email && (
                  <div id="err-email" role="alert" className="font-mono text-[11.5px] text-red-600 mt-2">
                    Please enter a valid email address.
                  </div>
                )}
              </div>

              <div className="mb-5.5">
                <label htmlFor="cmsg" className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-dark-muted flex justify-between mb-2 font-semibold">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="cmsg"
                  placeholder="Tell me about your project…"
                  aria-required="true"
                  aria-describedby="err-message"
                  value={values.message}
                  onChange={(e) => {
                    setValues((v) => ({ ...v, message: e.target.value }));
                    setErrors((er) => ({ ...er, message: false }));
                  }}
                  disabled={sending}
                  rows={4}
                  className={`w-full bg-transparent border-0 border-b py-3 px-0.5 text-base outline-none transition-colors resize-y min-h-[110px]
                    placeholder:text-muted dark:placeholder:text-dark-muted disabled:opacity-55 disabled:cursor-not-allowed
                    hover:border-ink dark:hover:border-dark-ink focus:border-accent
                    ${errors.message ? "border-red-600" : "border-line-strong dark:border-white/25"}`}
                />
                {errors.message && (
                  <div id="err-message" role="alert" className="font-mono text-[11.5px] text-red-600 mt-2">
                    Please write a short message.
                  </div>
                )}
              </div>

              <Button type="submit" variant="solid" loading={sending}>
                Send Message
              </Button>

              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-center gap-2.5 font-mono text-[13px] mt-5 py-3.5 px-4 border
                    ${status.type === "success" ? "text-green-700 bg-green-700/10 border-green-700 dark:text-green-400 dark:border-green-400" : "text-red-600 bg-red-600/10 border-red-600 dark:text-red-400 dark:border-red-400"}`}
                >
                  {status.msg}
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
