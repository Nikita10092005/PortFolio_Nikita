"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { profile } from "@/data/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

interface GhUser {
  name: string | null;
  login: string;
  followers: number;
  public_repos: number;
  avatar_url: string;
}
interface GhRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

export default function GithubSection() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<GhRepo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUser}`)
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.json();
      })
      .then((data: GhUser) => {
        setUser(data);
        return fetch(`https://api.github.com/users/${data.login}/repos?sort=updated&per_page=5`);
      })
      .then((r) => (r.ok ? r.json() : []))
      .then(setRepos)
      .catch(() => setError(true));
  }, []);

  return (
    <section id="github" aria-label="GitHub activity" className="py-[140px]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-16">
        <SectionHead eyebrow="Open Source" title="GitHub Activity" index="08 / Live Feed" />

        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-14">
            <div className="border border-line-strong dark:border-white/25 p-9">
              <div className="w-[72px] h-[72px] rounded-full bg-bg-raised dark:bg-dark-card mb-4.5 overflow-hidden relative">
                {user?.avatar_url && (
                  <Image src={user.avatar_url} alt={`${user.name || user.login} avatar`} fill sizes="72px" className="object-cover" />
                )}
              </div>
              <h3 className="text-[22px] font-serif">{user?.name || user?.login || (error ? profile.name : "Loading…")}</h3>
              <p className="text-muted dark:text-dark-muted text-[13px] font-mono mt-1">
                @{user?.login || (error ? profile.githubUser : "github")}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="border-t border-line dark:border-white/10 pt-3">
                  <div className="font-serif text-[26px] text-accent">{user?.followers ?? "—"}</div>
                  <div className="font-mono text-[10.5px] uppercase text-muted dark:text-dark-muted tracking-wide font-semibold">Followers</div>
                </div>
                <div className="border-t border-line dark:border-white/10 pt-3">
                  <div className="font-serif text-[26px] text-accent">{user?.public_repos ?? "—"}</div>
                  <div className="font-mono text-[10.5px] uppercase text-muted dark:text-dark-muted tracking-wide font-semibold">Repositories</div>
                </div>
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener"
                aria-label={`View GitHub profile for ${profile.githubUser}`}
                className="mt-7 w-full justify-center font-mono text-xs tracking-wide uppercase px-6 py-4 inline-flex items-center gap-2.5 border border-ink dark:border-dark-ink hover:border-accent hover:text-accent transition-all"
              >
                View GitHub Profile
              </a>
            </div>

            <div className="flex flex-col gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10" aria-live="polite">
              {!repos && !error && <div className="bg-bg dark:bg-dark-bg p-5">Loading repositories…</div>}
              {error && <div className="bg-bg dark:bg-dark-bg p-5">GitHub data unavailable right now.</div>}
              {repos && repos.length === 0 && <div className="bg-bg dark:bg-dark-bg p-5">No public repositories yet.</div>}
              {repos?.map((r) => (
                <a
                  key={r.name}
                  href={r.html_url}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Repository ${r.name}`}
                  className="bg-bg dark:bg-dark-bg p-5 flex justify-between items-center gap-4 hover:bg-bg-raised dark:hover:bg-dark-card transition-colors"
                >
                  <div>
                    <div className="font-mono text-sm font-medium">{r.name}</div>
                    <div className="text-[13px] text-muted dark:text-dark-muted mt-1">{r.description ? r.description.slice(0, 64) : "No description"}</div>
                  </div>
                  <div className="font-mono text-[11px] text-accent whitespace-nowrap font-semibold">
                    {r.language || "—"} · ★{r.stargazers_count}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
