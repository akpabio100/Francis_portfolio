import { useEffect, useState } from "react";
import { PROFILE } from "../lib/data";
import { ArrowUpRight, Star } from "./Icons";
import { Counter, TiltCard } from "./Interactive";
import { Reveal, SectionTitle } from "./Reveal";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

type GhUser = {
  public_repos: number;
  followers: number;
  following: number;
};

type State = "loading" | "ok" | "error";

const LANG_COLORS: Record<string, string> = {
  Dart: "#00b4ab",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572a5",
};

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(String(res.status));
  return res.json() as Promise<T>;
}

/** Live data from your public GitHub profile (no API key needed). */
export default function GitHubSection() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    let cancelled = false;
    const base = `https://api.github.com/users/${PROFILE.githubUser}`;

    Promise.all([
      getJson<GhUser>(base),
      getJson<Repo[]>(`${base}/repos?sort=updated&per_page=30`),
    ])
      .then(([u, r]) => {
        if (cancelled) return;
        setUser(u);
        setRepos(r.filter((x) => !x.fork).slice(0, 6));
        setState("ok");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="GitHub"
          title="My code, live from GitHub"
          subtitle="My latest public repositories, pulled straight from my GitHub profile."
        />

        {state === "loading" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="glass h-44 animate-pulse rounded-3xl" />
            ))}
          </div>
        )}

        {state === "error" && (
          <div className="glass rounded-3xl p-8 text-slate-300">
            I couldn&apos;t load my repositories right now. You can see them directly on{" "}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-300 underline"
            >
              GitHub
            </a>
            .
          </div>
        )}

        {state === "ok" && user && (
          <>
            <Reveal>
              <div className="mb-10 grid max-w-xl grid-cols-3 gap-6">
                {[
                  { v: user.public_repos, l: "Public repos" },
                  { v: user.followers, l: "Followers" },
                  { v: user.following, l: "Following" },
                ].map((s) => (
                  <div key={s.l} className="glass rounded-2xl p-5 text-center">
                    <div className="font-display text-3xl font-bold text-white">
                      <Counter to={s.v} />
                    </div>
                    <div className="mt-1 text-sm text-slate-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            {repos.length === 0 ? (
              <p className="text-slate-400">No public repositories to show yet.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {repos.map((r, i) => (
                  <Reveal key={r.id} delay={(i % 3) * 0.1} className="h-full">
                    <TiltCard className="glass h-full rounded-3xl p-7 transition-colors duration-300 hover:border-sky-400/50">
                      <a
                        href={r.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-full flex-col"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="break-all font-display text-lg font-semibold text-white">
                            {r.name}
                          </h3>
                          <ArrowUpRight width={18} height={18} className="shrink-0 text-sky-300" />
                        </div>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                          {r.description ?? "No description yet."}
                        </p>
                        <div className="mt-5 flex items-center gap-5 text-sm text-slate-300">
                          {r.language && (
                            <span className="inline-flex items-center gap-2">
                              <span
                                className="h-3 w-3 rounded-full"
                                style={{ background: LANG_COLORS[r.language] ?? "#38bdf8" }}
                              />
                              {r.language}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1.5">
                            <Star width={15} height={15} /> {r.stargazers_count}
                          </span>
                        </div>
                      </a>
                    </TiltCard>
                  </Reveal>
                ))}
              </div>
            )}

            <Reveal delay={0.2}>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-10"
              >
                View all on GitHub <ArrowUpRight width={18} height={18} />
              </a>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
