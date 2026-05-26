import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Modules — KaliAcademy',
};

const levels = [
  {
    href: '/modules/debutant',
    label: 'Débutant',
    number: '01',
    count: '4 modules',
    desc: 'Aucun prérequis. Comprendre la cybersécurité, les réseaux, Linux et Kali Linux.',
    color: 'text-[#5EFF8A]',
    border: 'hover:border-[#5EFF8A]/50',
    dot: 'bg-[#5EFF8A]',
  },
  {
    href: '/modules/intermediaire',
    label: 'Intermédiaire',
    number: '02',
    count: '6 modules',
    desc: 'OSINT, scanning, sécurité web, cryptographie, WiFi et malware.',
    color: 'text-yellow-400',
    border: 'hover:border-yellow-400/50',
    dot: 'bg-yellow-400',
  },
  {
    href: '/modules/avance',
    label: 'Avancé',
    number: '03',
    count: '6 modules',
    desc: 'Pentest, post-exploitation, Blue Team, forensics, cloud et gouvernance.',
    color: 'text-red-400',
    border: 'hover:border-red-400/50',
    dot: 'bg-red-400',
  },
];

export default function ModulesPage() {
  return (
    <div className="bg-[#101010] min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">

        <div className="mb-12">
          <h1 className="font-orbitron text-3xl sm:text-4xl font-black text-white mb-2">Modules</h1>
          <p className="font-exo-2 text-sm text-gray-500">Choisissez votre niveau pour commencer.</p>
        </div>

        <div className="space-y-4">
          {levels.map((lvl) => (
            <Link
              key={lvl.href}
              href={lvl.href}
              className={`flex items-center justify-between rounded-xl border border-white/10 bg-white/3 px-6 py-6 transition-all ${lvl.border} group`}
            >
              <div className="flex items-center gap-5">
                <span className={`font-orbitron text-2xl font-black ${lvl.color} opacity-30 group-hover:opacity-100 transition-opacity`}>
                  {lvl.number}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`h-1.5 w-1.5 rounded-full ${lvl.dot}`} />
                    <h2 className={`font-orbitron text-base font-black ${lvl.color}`}>{lvl.label}</h2>
                    <span className="font-exo-2 text-xs text-gray-600">— {lvl.count}</span>
                  </div>
                  <p className="font-exo-2 text-sm text-gray-400">{lvl.desc}</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-white shrink-0 ml-4 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
