import Link from 'next/link';
import { Shield, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">Kali Linux Academy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Plateforme gratuite d'apprentissage de la cybersécurité en français.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Cours</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/introduction" className="text-muted-foreground hover:text-foreground">Introduction Kali</Link></li>
              <li><Link href="/courses/network-testing" className="text-muted-foreground hover:text-foreground">Tests réseau</Link></li>
              <li><Link href="/courses/wpa2-cracking" className="text-muted-foreground hover:text-foreground">Sécurité WiFi</Link></li>
              <li><Link href="/courses/exercises" className="text-muted-foreground hover:text-foreground">Exercices</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/resources" className="text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Code source</a></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Avertissement légal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 DIANDA Jean Anicet - Ouagadougou, Burkina Faso</p>
          <p className="mt-2">Fait avec ❤️ pour la communauté francophone de cybersécurité</p>
        </div>
      </div>
    </footer>
  );
}
