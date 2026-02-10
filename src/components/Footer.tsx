'use client';

import Link from 'next/link';
import { Shield, Github, Linkedin, Twitter, Mail, Phone, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="h-4 w-4" />
                <a href="https://wa.me/22665569437" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp: +226 65 56 94 37
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+22661367838" className="hover:text-primary transition-colors">
                  Tél: +226 61 36 78 38
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:anicetdianda06@gmail.com" className="hover:text-primary transition-colors">
                  anicetdianda06@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="font-semibold mb-3">Suivez-moi</h3>
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
                href="https://www.linkedin.com/in/anicet-dianda-33a42732a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/anicetdianda?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
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
