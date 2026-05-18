'use client';

import Link from 'next/link';
import { Shield, Github, Linkedin, Twitter, Mail, Phone, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-cyan-400" strokeWidth={1.5} />
              <span className="font-orbitron font-black text-white">ACADÉMIE <span className="text-cyan-400">CYBER</span></span>
            </div>
            <p className="text-sm text-gray-400">
              Plateforme gratuite d'apprentissage de la cybersécurité en français, du débutant à l'expert.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/ANI-dianda/Kali-Linux" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/anicet-dianda-33a42732a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/anicetdianda?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Modules */}
          <div>
            <h3 className="font-orbitron text-sm font-bold text-white mb-4">MODULES</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/modules" className="hover:text-cyan-400 transition-colors">Tous les modules</Link></li>
              <li><Link href="/modules/debutant/intro-cyber" className="hover:text-cyan-400 transition-colors">Niveau Débutant</Link></li>
              <li><Link href="/modules" className="hover:text-cyan-400 transition-colors">Niveau Intermédiaire</Link></li>
              <li><Link href="/modules" className="hover:text-cyan-400 transition-colors">Niveau Avancé</Link></li>
              <li><Link href="/labs" className="hover:text-cyan-400 transition-colors">Labs & Challenges</Link></li>
            </ul>
          </div>

          {/* Site */}
          <div>
            <h3 className="font-orbitron text-sm font-bold text-white mb-4">SITE</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link href="/communaute" className="hover:text-cyan-400 transition-colors">Communauté</Link></li>
              <li><Link href="/ressources" className="hover:text-cyan-400 transition-colors">Ressources</Link></li>
              <li><Link href="/a-propos" className="hover:text-cyan-400 transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-orbitron text-sm font-bold text-white mb-4">CONTACT</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href="https://wa.me/22665569437" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  WhatsApp: +226 65 56 94 37
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href="tel:+22661367838" className="hover:text-cyan-400 transition-colors">
                  +226 61 36 78 38
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href="mailto:anicetdianda06@gmail.com" className="hover:text-cyan-400 transition-colors">
                  anicetdianda06@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DIANDA Jean Anicet — Ouagadougou, Burkina Faso</p>
          <p>Usage éducatif uniquement. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
