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
      <div className="container mx-auto px-4 py-6 flex items-center justify-center font-exo-2 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} DIANDA Jean Anicet — Ouagadougou, Burkina Faso</p>

      </div>
    </footer>
  );
}
