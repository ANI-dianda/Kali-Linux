'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/modules', label: 'Modules' },
  { href: '/labs', label: 'Labs' },
  { href: '/communaute', label: 'Communauté' },
  { href: '/ressources', label: 'Ressources' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-[#101010]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#5EFF8A]/10 border border-[#5EFF8A]/30">
              <Terminal className="h-4 w-4 text-[#5EFF8A]" strokeWidth={2} />
            </div>
            <span className="font-orbitron text-base font-black tracking-wider text-white">
              KALI<span className="text-[#5EFF8A]">ACADEMY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md font-exo-2 text-sm font-semibold transition-colors ${
                  pathname.startsWith(link.href)
                    ? 'text-[#5EFF8A] bg-[#5EFF8A]/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/8'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/8 bg-[#101010]">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-md px-4 py-3 font-exo-2 text-sm font-semibold transition-colors ${
                  pathname.startsWith(link.href)
                    ? 'text-[#5EFF8A] bg-[#5EFF8A]/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/8'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/modules"
              className="block mt-2 text-center rounded-md bg-[#5EFF8A] px-5 py-3 font-exo-2 text-sm font-bold text-[#101010]"
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
