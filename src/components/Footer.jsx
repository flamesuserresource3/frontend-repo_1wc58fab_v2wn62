import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Let’s build something great</h3>
            <p className="mt-2 text-white/70 max-w-prose">
              Have an idea in mind or a project to ship? I’m available for collaborations, freelance work, and product design partnerships.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:justify-end">
            <a href="mailto:hello@example.com" className="px-4 py-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition inline-flex items-center gap-2">
              <Mail size={18} /> Say hello
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Flames. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
