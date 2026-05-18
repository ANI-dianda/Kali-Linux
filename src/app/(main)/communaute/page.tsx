import { Users, MessageCircle, Github, Construction } from 'lucide-react';
import Link from 'next/link';

export const metadata = { title: 'Communauté — Académie Cybersécurité' };

export default function CommunautePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-4">COMMUNAUTÉ</h1>
        <p className="font-exo-2 text-gray-400 text-lg max-w-xl mx-auto">
          Rejoignez une communauté d'apprenants passionnés par la cybersécurité.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {[
          { icon: MessageCircle, title: 'WhatsApp', desc: 'Rejoignez le groupe WhatsApp pour poser vos questions et partager vos avancées.', href: 'https://wa.me/22665569437', label: 'Rejoindre', color: 'text-green-400' },
          { icon: Github, title: 'GitHub', desc: 'Contribuez au projet open source, signalez des bugs ou proposez des améliorations.', href: 'https://github.com/ANI-dianda/Kali-Linux', label: 'Voir le repo', color: 'text-white' },
          { icon: Users, title: 'Forum (bientôt)', desc: 'Un forum dédié pour les discussions techniques, CTF et entraide entre membres.', href: '#', label: 'Bientôt disponible', color: 'text-cyan-400' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <item.icon className={`h-10 w-10 ${item.color} mx-auto mb-4`} strokeWidth={1.5} />
            <h3 className="font-orbitron text-base font-bold text-white mb-2">{item.title}</h3>
            <p className="font-exo-2 text-sm text-gray-400 mb-4">{item.desc}</p>
            <a href={item.href} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-exo-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
              {item.label} →
            </a>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-8 text-center">
        <Construction className="h-10 w-10 text-yellow-400 mx-auto mb-4" strokeWidth={1.5} />
        <p className="font-exo-2 text-gray-300">Plus de fonctionnalités communautaires arrivent bientôt : forum, classements, projets collaboratifs.</p>
      </div>
    </div>
  );
}
