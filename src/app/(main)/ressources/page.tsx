import { ExternalLink, BookOpen, Youtube, Globe, Terminal } from 'lucide-react';

export const metadata = { title: 'Ressources — Académie Cybersécurité' };

const resources = [
  {
    category: 'Plateformes d\'entraînement',
    icon: Terminal,
    color: 'text-cyan-400',
    items: [
      { name: 'TryHackMe', desc: 'Apprentissage guidé avec des labs virtuels', href: 'https://tryhackme.com', free: true },
      { name: 'HackTheBox', desc: 'Challenges avancés et machines à pirater', href: 'https://hackthebox.com', free: true },
      { name: 'PicoCTF', desc: 'CTF pour débutants, organisé par Carnegie Mellon', href: 'https://picoctf.org', free: true },
      { name: 'Root-Me', desc: 'Plateforme française de challenges de sécurité', href: 'https://root-me.org', free: true },
    ],
  },
  {
    category: 'Formations officielles',
    icon: BookOpen,
    color: 'text-green-400',
    items: [
      { name: 'SecNumacadémie (ANSSI)', desc: 'Formation officielle française en cybersécurité', href: 'https://secnumacademie.gouv.fr', free: true },
      { name: 'Cybrary', desc: 'Cours en ligne sur la cybersécurité', href: 'https://cybrary.it', free: true },
      { name: 'SANS Reading Room', desc: 'Articles techniques de référence', href: 'https://sans.org/reading-room', free: true },
    ],
  },
  {
    category: 'Outils essentiels',
    icon: Globe,
    color: 'text-purple-400',
    items: [
      { name: 'Have I Been Pwned', desc: 'Vérifiez si vos données ont fuité', href: 'https://haveibeenpwned.com', free: true },
      { name: 'VirusTotal', desc: 'Analysez des fichiers et URLs suspects', href: 'https://virustotal.com', free: true },
      { name: 'Shodan', desc: 'Moteur de recherche pour appareils connectés', href: 'https://shodan.io', free: false },
      { name: 'Exploit-DB', desc: 'Base de données d\'exploits publics', href: 'https://exploit-db.com', free: true },
    ],
  },
];

export default function RessourcesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-4">RESSOURCES</h1>
        <p className="font-exo-2 text-gray-400 text-lg max-w-xl mx-auto">
          Une sélection des meilleures ressources gratuites pour progresser en cybersécurité.
        </p>
      </div>

      <div className="space-y-12">
        {resources.map((section) => (
          <div key={section.category}>
            <div className="flex items-center gap-3 mb-6">
              <section.icon className={`h-6 w-6 ${section.color}`} strokeWidth={1.5} />
              <h2 className="font-orbitron text-lg font-bold text-white">{section.category}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-start justify-between rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/30 transition-colors group">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-exo-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{item.name}</span>
                      {item.free && <span className="rounded-full bg-green-400/10 border border-green-400/20 px-2 py-0.5 font-exo-2 text-xs text-green-400">Gratuit</span>}
                    </div>
                    <p className="font-exo-2 text-xs text-gray-400">{item.desc}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0 mt-0.5 ml-3" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
