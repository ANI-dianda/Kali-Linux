'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/modules', label: 'Modules' },
  { href: '/labs', label: 'Labs & Challenges' },
  { href: '/blog', label: 'Blog' },
  { href: '/communaute', label: 'Communauté' },
  { href: '/ressources', label: 'Ressources' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Shield className="h-7 w-7 text-cyan-400" strokeWidth={1.5} />
            <span className="font-orbitron text-lg font-black tracking-wider text-white">
              ACADÉMIE <span className="text-cyan-400">CYBER</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md font-exo-2 text-sm font-semibold transition-colors ${
                  pathname.startsWith(link.href)
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile button */}
          <div className="flex items-center gap-3">
            <Link
              href="/modules"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 font-exo-2 text-sm font-bold text-black transition-all hover:bg-cyan-400 hover:scale-105"
            >
              Commencer
            </Link>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-md px-4 py-3 font-exo-2 text-sm font-semibold transition-colors ${
                  pathname.startsWith(link.href)
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/modules"
              className="block mt-2 text-center rounded-full bg-cyan-500 px-5 py-3 font-exo-2 text-sm font-bold text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Commencer gratuitement
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
