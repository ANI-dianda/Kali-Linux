import Link from 'next/link';
import { moduleLevels } from '@/lib/modules-data';
import { Clock, ChevronRight, Lock, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Modules — Académie Cybersécurité',
  description: 'Tous les modules de cybersécurité, du débutant à l\'expert.',
};

export default function ModulesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-4">
          MODULES
        </h1>
        <p className="font-exo-2 text-gray-400 text-lg max-w-xl mx-auto">
          Une progression structurée en 3 niveaux et 15 modules pour maîtriser la cybersécurité.
        </p>
      </div>

      {/* Levels */}
      <div className="space-y-16">
        {moduleLevels.map((lvl) => (
          <div key={lvl.level}>
            {/* Level Header */}
            <div className={`inline-flex items-center gap-2 rounded-full border ${lvl.borderColor} ${lvl.bgColor} px-4 py-1.5 mb-6`}>
              <span className={`font-orbitron text-sm font-bold ${lvl.color}`}>
                NIVEAU {lvl.level.toUpperCase()}
              </span>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lvl.modules.map((mod) => (
                <div key={mod.id} className={`relative rounded-xl border ${mod.available ? 'border-white/15 hover:border-cyan-400/40' : 'border-white/8 opacity-60'} bg-white/5 p-6 transition-all`}>
                  {!mod.available && (
                    <div className="absolute top-4 right-4">
                      <Lock className="h-4 w-4 text-gray-500" />
                    </div>
                  )}
                  {mod.available && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                  )}

                  <div className={`font-orbitron text-xs font-bold ${lvl.color} mb-2`}>
                    MODULE {mod.number}
                  </div>
                  <h3 className="font-exo-2 text-base font-bold text-white mb-2 pr-6">{mod.title}</h3>
                  <p className="font-exo-2 text-sm text-gray-400 mb-4">{mod.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{mod.duration}</span>
                    </div>
                    {mod.available ? (
                      <Link
                        href={mod.href}
                        className="inline-flex items-center gap-1 font-exo-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Commencer <ChevronRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="font-exo-2 text-xs text-gray-600">Bientôt disponible</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
