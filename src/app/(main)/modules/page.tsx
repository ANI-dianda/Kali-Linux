import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Modules — KaliAcademy',
};

const levels = [
  {
    number: '01',
    href: '/modules/debutant',
    label: 'Débutant',
    dot: 'bg-[#59FF88]',
    color: 'text-[#59FF88]',
    glow: 'shadow-[0_0_40px_rgba(89,255,136,0.06)]',
    border: 'hover:border-[#59FF88]/30',
    activeBorder: 'border-[#59FF88]/15',
    badge: '4 modules',
    desc: 'Linux, réseaux, cybersécurité et prise en main de Kali Linux.',
  },
  {
    number: '02',
    href: '/modules/intermediaire',
    label: 'Intermédiaire',
    dot: 'bg-yellow-400',
    color: 'text-yellow-400',
    glow: 'shadow-[0_0_40px_rgba(250,204,21,0.06)]',
    border: 'hover:border-yellow-400/30',
    activeBorder: 'border-yellow-400/15',
    badge: '6 modules',
    desc: 'OSINT, scanning, sécurité web, Wi-Fi et cryptographie.',
  },
  {
    number: '03',
    href: '/modules/avance',
    label: 'Avancé',
    dot: 'bg-red-400',
    color: 'text-red-400',
    glow: 'shadow-[0_0_40px_rgba(248,113,113,0.06)]',
    border: 'hover:border-red-400/30',
    activeBorder: 'border-red-400/15',
    badge: '6 modules',
    desc: 'Pentest, Blue Team, forensic, post-exploitation, cloud et gouvernance.',
  },
];

export default function ModulesPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <div className="py-16 lg:py-24">

        {/* En-tête */}
        <div className="px-6 sm:px-8 lg:px-12 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#59FF88]" />
            <span className="font-orbitron text-xs font-bold tracking-widest text-[#59FF88] uppercase">Modules</span>
          </div>
          <h1 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
            Choisissez votre niveau.
          </h1>
          <p className="font-exo-2 text-sm text-gray-500 max-w-md">
            Trois niveaux progressifs pour maîtriser la cybersécurité de zéro à expert.
          </p>
        </div>

        {/* Carousel horizontal */}
        <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 sm:px-8 lg:px-12 pb-4 lg:overflow-visible lg:grid lg:grid-cols-3 lg:gap-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

          {levels.map((lvl) => (
            <Link
              key={lvl.number}
              href={lvl.href}
              className={`group relative flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-auto snap-center rounded-2xl border ${lvl.activeBorder} bg-white/[0.03] ${lvl.glow} ${lvl.border} transition-all duration-300 hover:-translate-y-1 p-6 sm:p-7`}
            >
              {/* Numéro semi-transparent */}
              <div className={`font-orbitron text-6xl sm:text-7xl font-black ${lvl.color} opacity-10 leading-none mb-6 select-none`}>
                {lvl.number}
              </div>

              {/* Niveau + badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${lvl.dot}`} />
                  <span className={`font-orbitron text-base font-black ${lvl.color}`}>{lvl.label}</span>
                </div>
                <span className={`rounded-full border ${lvl.activeBorder} ${lvl.color} bg-white/3 px-3 py-1 font-exo-2 text-xs font-semibold`}>
                  {lvl.badge}
                </span>
              </div>

              {/* Description */}
              <p className="font-exo-2 text-sm text-gray-400 leading-relaxed mb-8">
                {lvl.desc}
              </p>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <span className="font-exo-2 text-xs text-gray-600">Voir les modules</span>
                <div className={`flex h-9 w-9 items-center justify-center rounded-full border ${lvl.activeBorder} bg-white/3 group-hover:bg-white/8 transition-all`}>
                  <ArrowRight className={`h-4 w-4 ${lvl.color} group-hover:translate-x-0.5 transition-transform`} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Hide scrollbar webkit */}
        <style>{`.snap-x::-webkit-scrollbar { display: none; }`}</style>

      </div>
    </div>
  );
}
