import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      {/* Subtle gradient glow behind content; pointer events disabled to not block Spline */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.25),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/10">
            Modern • Interactive • Playful
          </p>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Crafting immersive web experiences
          </h1>
          <p className="mt-4 text-white/70 max-w-xl">
            I build delightful, performant interfaces with a focus on 3D, motion, and micro-interactions. Explore selected work and see how I can help bring your ideas to life.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium transition">
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative h-[60vh] lg:h-[75vh] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
