import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white">Flames • Portfolio</a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#projects" className="text-sm text-white/80 hover:text-white transition">Projects</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white transition">About</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"><Linkedin size={18} /></a>
            <a href="#contact" aria-label="Email" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"><Mail size={18} /></a>
          </div>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md bg-white/5 hover:bg-white/10">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/50">
          <div className="px-4 py-3 space-y-2">
            <a onClick={() => setOpen(false)} href="#projects" className="block py-2 text-white/80">Projects</a>
            <a onClick={() => setOpen(false)} href="#about" className="block py-2 text-white/80">About</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block py-2 text-white/80">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
