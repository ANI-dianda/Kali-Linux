import Link from 'next/link';
import { moduleLevels } from '@/lib/modules-data';
import { Clock, Lock, ChevronRight, ChevronLeft } from 'lucide-react';

export const metadata = { title: 'Niveau Intermédiaire — KaliAcademy' };

const level = moduleLevels.find(l => l.level === 'Intermédiaire')!;

export default function IntermediairePage() {
  return (
    <div className="bg-[#101010] min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">

        <Link href="/modules" className="inline-flex items-center gap-1 font-exo-2 text-xs text-gray-500 hover:text-white transition-colors mb-10">
          <ChevronLeft className="h-3.5 w-3.5" /> Tous les niveaux
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="font-orbitron text-xs font-bold tracking-widest text-yellow-400">NIVEAU INTERMÉDIAIRE</span>
          </div>
          <h1 className="font-orbitron text-3xl sm:text-4xl font-black text-white mb-2">Techniques offensives & défensives</h1>
          <p className="font-exo-2 text-sm text-gray-400 max-w-lg">
            Prérequis : niveau Débutant complet. Ces 6 modules couvrent les techniques essentielles utilisées par les professionnels.
          </p>
        </div>

        <div className="space-y-2">
          {level.modules.map((mod) => (
            mod.available ? (
              <Link
                key={mod.id}
                href={mod.href}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/3 px-5 py-4 hover:border-yellow-400/40 transition-all group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="font-orbitron text-xs font-bold text-yellow-400 shrink-0">{mod.number}</span>
                  <div className="min-w-0">
                    <p className="font-exo-2 text-sm font-bold text-white truncate">{mod.title}</p>
                    <p className="font-exo-2 text-xs text-gray-500 truncate">{mod.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
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
                  <span className="font-orbitron text-xs font-bold text-gray-600 shrink-0">{mod.number}</span>
                  <div className="min-w-0">
                    <p className="font-exo-2 text-sm font-bold text-gray-400 truncate">{mod.title}</p>
                    <p className="font-exo-2 text-xs text-gray-600 truncate">{mod.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-4">
                  <span className="font-exo-2 text-xs text-gray-600 hidden sm:block">Bientôt</span>
                  <Lock className="h-3.5 w-3.5 text-gray-600" />
                </div>
              </div>
            )
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/8 flex items-center justify-between">
          <Link href="/modules/debutant" className="inline-flex items-center gap-2 font-exo-2 text-sm text-gray-500 hover:text-white transition-colors">
            <ChevronLeft className="h-4 w-4" /> Niveau Débutant
          </Link>
          <Link href="/modules/avance" className="inline-flex items-center gap-2 font-exo-2 text-sm text-gray-500 hover:text-white transition-colors">
            Niveau Avancé <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
