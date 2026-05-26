import Link from 'next/link';
import { moduleLevels } from '@/lib/modules-data';
import { Clock, Lock, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Modules — KaliAcademy',
  description: 'Tous les modules de cybersécurité, du débutant à l\'expert.',
};

const levelStyles: Record<string, { badge: string; cardBorder: string; number: string; dot: string }> = {
  'Débutant':      { badge: 'text-[#5EFF8A] border-[#5EFF8A]/30 bg-[#5EFF8A]/10',   cardBorder: 'hover:border-[#5EFF8A]/40',   number: 'text-[#5EFF8A]', dot: 'bg-[#5EFF8A]' },
  'Intermédiaire': { badge: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10', cardBorder: 'hover:border-yellow-400/40', number: 'text-yellow-400', dot: 'bg-yellow-400' },
  'Avancé':        { badge: 'text-red-400 border-red-400/30 bg-red-400/10',          cardBorder: 'hover:border-red-400/40',    number: 'text-red-400',   dot: 'bg-red-400' },
};

export default function ModulesPage() {
  return (
    <div className="bg-[#101010] min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">

        {/* En-tête */}
        <div className="mb-12">
          <h1 className="font-orbitron text-3xl sm:text-4xl font-black text-white mb-2">
            Tous les modules
          </h1>
          <p className="font-exo-2 text-sm text-gray-500">
            15 modules · 3 niveaux · Kali Linux & Cybersécurité
          </p>
        </div>

        {/* Niveaux */}
        <div className="space-y-12">
          {moduleLevels.map((lvl) => {
            const s = levelStyles[lvl.level];
            return (
              <div key={lvl.level}>

                {/* Titre du niveau */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                  <span className={`font-orbitron text-xs font-bold tracking-widest ${s.number}`}>
                    NIVEAU {lvl.level.toUpperCase()}
                  </span>
                  <span className="font-exo-2 text-xs text-gray-600">
                    — {lvl.modules.length} modules
                  </span>
                </div>

                {/* Cartes */}
                <div className="space-y-2">
                  {lvl.modules.map((mod) => (
                    mod.available ? (
                      <Link
                        key={mod.id}
                        href={mod.href}
                        className={`flex items-center justify-between rounded-xl border border-white/10 bg-white/3 px-5 py-4 transition-all ${s.cardBorder} group`}
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <span className={`font-orbitron text-xs font-bold shrink-0 ${s.number}`}>
                            {mod.number}
                          </span>
                          <div className="min-w-0">
                            <p className="font-exo-2 text-sm font-bold text-white truncate">{mod.title}</p>
                            <p className="font-exo-2 text-xs text-gray-500 truncate">{mod.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 shrink-0 ml-4">
                          <span className="hidden sm:flex items-center gap-1 font-exo-2 text-xs text-gray-600">
                            <Clock className="h-3 w-3" /> {mod.duration}
                          </span>
                          <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />
                        </div>
                      </Link>
                    ) : (
                      <div
                        key={mod.id}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/2 px-5 py-4 opacity-40 cursor-not-allowed"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <span className="font-orbitron text-xs font-bold text-gray-600 shrink-0">
                            {mod.number}
                          </span>
                          <div className="min-w-0">
                            <p className="font-exo-2 text-sm font-bold text-gray-400 truncate">{mod.title}</p>
                            <p className="font-exo-2 text-xs text-gray-600 truncate">{mod.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-4">
                          <span className="font-exo-2 text-xs text-gray-600 hidden sm:block">Bientôt</span>
                          <Lock className="h-3.5 w-3.5 text-gray-600" />
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
