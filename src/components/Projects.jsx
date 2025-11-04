import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime 3D Landing',
    description: 'Interactive hero with Spline + physics, responsive layout, and A11y-first motion.',
    tags: ['React', 'Spline', 'Framer Motion'],
    url: '#',
    accent: 'from-cyan-400/20 to-cyan-400/0',
  },
  {
    title: 'Design System Kit',
    description: 'A cohesive component library with tokens, theming, and dark mode baked in.',
    tags: ['Design Tokens', 'Tailwind', 'Radix'],
    url: '#',
    accent: 'from-purple-400/20 to-purple-400/0',
  },
  {
    title: 'AI-Powered Dashboard',
    description: 'Insightful analytics with conversational filters and live data visualizations.',
    tags: ['FastAPI', 'React', 'E2E'],
    url: '#',
    accent: 'from-emerald-400/20 to-emerald-400/0',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Projects</h2>
            <p className="mt-2 text-white/70">A curated set of work that blends craft, utility, and play.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition">Work with me</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.url} className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${p.accent}`} />
              <div className="p-5 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:underline underline-offset-4">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{p.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-black/40 border border-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-cyan-300 group-hover:gap-2 transition-all">
                  Visit <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
