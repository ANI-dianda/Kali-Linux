'use client';

import Link from 'next/link';
import { Shield, Menu, X, LogOut, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';
import { Button } from './ui/button';
import { useAuth } from '@/contexts/AuthContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/courses', label: 'Parcours' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline">Kali Linux Academy</span>
            <span className="font-bold text-lg sm:hidden">KLA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/ANI-dianda/Kali-Linux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {!loading && (
              user ? (
                <div className="hidden md:flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{user.email}</span>
                  <Button variant="outline" onClick={() => signOut()} className="h-9 px-3">
                    <LogOut className="h-4 w-4 mr-1" />
                    Déconnexion
                  </Button>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Button asChild variant="outline" className="h-9 px-3">
                    <Link href="/login">Connexion</Link>
                  </Button>
                  <Button asChild className="h-9 px-3">
                    <Link href="/register">Inscription</Link>
                  </Button>
                </div>
              )
            )}
            <ThemeToggle />
            <Button
              variant="outline"
              className="md:hidden h-9 w-9 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/ANI-dianda/Kali-Linux"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </a>
            {!loading && (
              user ? (
                <>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground mb-2">{user.email}</p>
                    <Button variant="outline" onClick={() => signOut()} className="w-full">
                      <LogOut className="h-4 w-4 mr-2" />
                      Déconnexion
                    </Button>
                  </div>
                </>
              ) : (
                <div className="pt-2 border-t space-y-2">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/login">Connexion</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/register">Inscription</Link>
                  </Button>
                </div>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
