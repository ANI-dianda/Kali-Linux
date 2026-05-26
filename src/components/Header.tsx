'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/modules',    label: 'Modules' },
  { href: '/labs',       label: 'Labs' },
  { href: '/ressources', label: 'Ressources' },
  { href: '/a-propos',   label: 'À propos' },
  { href: '/contact',    label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Ferme le menu au changement de route
  useEffect(() => { setIsMenuOpen(false); }, [pathname]);

  // Bloque le scroll body quand menu ouvert sur mobile
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-[#101010]/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-14 sm:h-16 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity active:opacity-60"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md bg-[#5EFF8A]/10 border border-[#5EFF8A]/30">
                <Terminal className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#5EFF8A]" strokeWidth={2} />
              </div>
              <span className="font-orbitron text-sm sm:text-base font-black tracking-wider text-white">
                KALI<span className="text-[#5EFF8A]">ACADEMY</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
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

            {/* Burger — mobile/tablet */}
            <button
              type="button"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md text-gray-400 hover:text-white active:bg-white/10 transition-colors touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay mobile */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Drawer mobile — slide depuis le haut */}
      <div
        className={`lg:hidden fixed top-14 sm:top-16 left-0 right-0 z-40 bg-[#101010] border-b border-white/8 transition-all duration-200 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center rounded-lg px-4 py-3.5 font-exo-2 text-base font-semibold transition-colors touch-manipulation ${
                pathname.startsWith(link.href)
                  ? 'text-[#5EFF8A] bg-[#5EFF8A]/10'
                  : 'text-gray-300 active:bg-white/8'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
