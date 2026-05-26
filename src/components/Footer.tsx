'use client';

import Link from 'next/link';
import { Terminal, Github, Linkedin, Twitter } from 'lucide-react';

const links = [
  { label: 'Modules',     href: '/modules' },
  { label: 'Labs',        href: '/labs' },
  { label: 'Communauté',  href: '/communaute' },
  { label: 'Ressources',  href: '/ressources' },
  { label: 'À propos',    href: '/a-propos' },
  { label: 'Contact',     href: '/contact' },
];

const socials = [
  { icon: Github,   href: 'https://github.com/ANI-dianda/Kali-Linux',              label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/anicet-dianda-33a42732a',   label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://x.com/anicetdianda?s=21',                       label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#101010]">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#5EFF8A]/10 border border-[#5EFF8A]/30">
              <Terminal className="h-4 w-4 text-[#5EFF8A]" strokeWidth={2} />
            </div>
            <span className="font-orbitron text-sm font-black text-white">
              KALI<span className="text-[#5EFF8A]">ACADEMY</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="font-exo-2 text-sm text-gray-500 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#5EFF8A] transition-colors" aria-label={s.label}>
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-2 font-exo-2 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} DIANDA Jean Anicet — Ouagadougou, Burkina Faso</p>
          <p>Usage éducatif uniquement.</p>
        </div>
      </div>
    </footer>
  );
}
