'use client';

import Link from 'next/link';
import { Shield, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">Kali Linux Academy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Plateforme gratuite d'apprentissage de la cybersécurité en français
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">Parcours</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-semibold mb-3">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/introduction-enhanced" className="text-muted-foreground hover:text-primary transition-colors">Introduction</Link></li>
              <li><Link href="/courses/hacking-fundamentals-optimized" className="text-muted-foreground hover:text-primary transition-colors">Fondamentaux</Link></li>
              <li><Link href="/courses/wifi-security" className="text-muted-foreground hover:text-primary transition-colors">Sécurité WiFi</Link></li>
              <li><Link href="/courses/exercises" className="text-muted-foreground hover:text-primary transition-colors">Exercices</Link></li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold mb-3">Suivez-nous</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="https://github.com/ANI-dianda/Kali-Linux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@kalilinuxacademy.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Open source sur{' '}
              <a
                href="https://github.com/ANI-dianda/Kali-Linux"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} DIANDA Jean Anicet - Ouagadougou, Burkina Faso
          </p>
          <p className="mt-1">
            Tous droits réservés. Usage éducatif uniquement.
          </p>
        </div>
      </div>
    </footer>
  );
}
