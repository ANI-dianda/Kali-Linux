import { Mail, Github, Linkedin, Twitter, MessageCircle, Phone, Send } from 'lucide-react';

export const metadata = { title: 'Contact — Académie Cybersécurité' };

const contacts = [
  { icon: MessageCircle, label: 'WhatsApp', value: '+226 65 56 94 37', href: 'https://wa.me/22665569437', color: 'text-green-400' },
  { icon: Phone, label: 'Téléphone', value: '+226 61 36 78 38', href: 'tel:+22661367838', color: 'text-cyan-400' },
  { icon: Mail, label: 'Email', value: 'anicetdianda06@gmail.com', href: 'mailto:anicetdianda06@gmail.com', color: 'text-blue-400' },
  { icon: Github, label: 'GitHub', value: 'ANI-dianda/Kali-Linux', href: 'https://github.com/ANI-dianda/Kali-Linux', color: 'text-white' },
  { icon: Linkedin, label: 'LinkedIn', value: 'anicet-dianda', href: 'https://www.linkedin.com/in/anicet-dianda-33a42732a', color: 'text-blue-500' },
  { icon: Twitter, label: 'Twitter / X', value: '@anicetdianda', href: 'https://x.com/anicetdianda?s=21', color: 'text-sky-400' },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <Send className="h-16 w-16 text-cyan-400 mx-auto mb-6" strokeWidth={1.5} />
        <h1 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-4">CONTACT</h1>
        <p className="font-exo-2 text-gray-400 text-lg max-w-xl mx-auto">
          Une question, une suggestion ou envie de contribuer ? Je suis disponible sur plusieurs canaux.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {contacts.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/30 transition-colors group">
            <c.icon className={`h-8 w-8 ${c.color} shrink-0`} strokeWidth={1.5} />
            <div>
              <div className="font-orbitron text-xs font-bold text-gray-500 mb-0.5">{c.label}</div>
              <div className="font-exo-2 text-sm text-white group-hover:text-cyan-400 transition-colors">{c.value}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Contribuer */}
      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-8">
        <h2 className="font-orbitron text-xl font-bold text-white mb-4">Contribuer au Projet</h2>
        <p className="font-exo-2 text-gray-300 text-sm mb-4">Ce projet est open source. Vous pouvez contribuer en :</p>
        <ul className="space-y-2 font-exo-2 text-sm text-gray-400 mb-6">
          {['Signalant des bugs ou proposant des améliorations sur GitHub', 'Proposant de nouveaux modules ou exercices', 'Partageant la plateforme avec d\'autres apprenants', 'Améliorant la documentation'].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">→</span> {item}
            </li>
          ))}
        </ul>
        <a href="https://github.com/ANI-dianda/Kali-Linux" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-exo-2 text-sm font-bold text-black hover:bg-cyan-400 transition-all">
          <Github className="h-4 w-4" /> Contribuer sur GitHub
        </a>
      </div>
    </div>
  );
}
