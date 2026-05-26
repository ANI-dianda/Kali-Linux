import Link from 'next/link';
import { moduleLevels } from '@/lib/modules-data';
import { Clock, Lock, CheckCircle, ArrowRight, BookOpen, Terminal, Users } from 'lucide-react';

export const metadata = {
  title: 'Modules — KaliAcademy',
  description: 'Tous les modules de cybersécurité, du débutant à l\'expert.',
};

const reasons = [
  { icon: BookOpen,    title: 'Cours structurés',   desc: '15 modules du débutant à l\'expert.' },
  { icon: Terminal,    title: 'Pratique avant tout', desc: 'Exercices et labs concrets à chaque module.' },
  { icon: CheckCircle, title: '100 % gratuit',       desc: 'Aucune inscription, aucun paiement.' },
  { icon: Users,       title: 'En français',         desc: 'Contenu pensé pour la communauté francophone.' },
];

const levelStyles: Record<string, { badge: string; border: string; title: string }> = {
  'Débutant':      { badge: 'text-[#5EFF8A] border-[#5EFF8A]/30 bg-[#5EFF8A]/8',   border: 'hover:border-[#5EFF8A]/40',   title: 'text-[#5EFF8A]' },
  'Intermédiaire': { badge: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/8', border: 'hover:border-yellow-400/40', title: 'text-yellow-400' },
  'Avancé':        { badge: 'text-red-400 border-red-400/30 bg-red-400/8',          border: 'hover:border-red-400/40',    title: 'text-red-400' },
};

export default function ModulesPage() {
  return (
    <div className="bg-[#101010] min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 max-w-5xl">

        {/* Header */}
        <div className="mb-14">
          <h1 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-3">MODULES</h1>
          <p className="font-exo-2 text-gray-400 max-w-xl">
            15 modules structurés en 3 niveaux pour maîtriser Kali Linux et la cybersécurité.
          </p>
        </div>

        {/* Pourquoi */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
          {reasons.map((r) => (
            <div key={r.title} className="flex flex-col gap-2 rounded-xl border border-white/8 bg-white/3 p-4">
              <r.icon className="h-4 w-4 text-[#5EFF8A]" strokeWidth={1.5} />
              <h3 className="font-exo-2 text-xs font-bold text-white">{r.title}</h3>
              <p className="font-exo-2 text-xs text-gray-500">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Progression */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-16 p-6 rounded-xl border border-white/8 bg-white/3">
          <span className="font-exo-2 text-sm text-gray-400 sm:mr-4">Progression :</span>
          {[
            { label: 'Débutant',      sub: '4 modules', bg: 'bg-[#5EFF8A] text-[#101010]' },
            { label: 'Intermédiaire', sub: '6 modules', bg: 'bg-yellow-400 text-[#101010]' },
            { label: 'Avancé',        sub: '6 modules', bg: 'bg-red-400 text-white' },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              {i > 0 && <span className="text-gray-700 hidden sm:block">→</span>}
              <div className={`rounded-lg px-4 py-2 font-orbitron text-xs font-black ${step.bg}`}>
                {step.label}
                <div className="font-exo-2 font-normal opacity-70 mt-0.5">{step.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Modules par niveau */}
        <div className="space-y-14">
          {moduleLevels.map((lvl) => {
            const style = levelStyles[lvl.level];
            return (
              <div key={lvl.level}>
                <div className={`inline-flex items-center rounded-full border px-3 py-1 mb-6 ${style.badge}`}>
                  <span className="font-orbitron text-xs font-bold">NIVEAU {lvl.level.toUpperCase()}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {lvl.modules.map((mod) => (
                    <div
                      key={mod.id}
                      className={`relative rounded-xl border bg-white/3 p-5 transition-all ${
                        mod.available
                          ? `border-white/12 ${style.border}`
                          : 'border-white/6 opacity-50'
                      }`}
                    >
                      {/* Lock / Check */}
                      <div className="absolute top-4 right-4">
                        {mod.available
                          ? <CheckCircle className="h-4 w-4 text-[#5EFF8A]" />
                          : <Lock className="h-4 w-4 text-gray-600" />
                        }
                      </div>

                      <div className={`font-orbitron text-xs font-bold mb-2 ${style.title}`}>
                        MODULE {mod.number}
                      </div>
                      <h3 className="font-exo-2 text-sm font-bold text-white mb-2 pr-6">{mod.title}</h3>
                      <p className="font-exo-2 text-xs text-gray-500 mb-4 line-clamp-2">{mod.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 font-exo-2 text-xs text-gray-600">
                          <Clock className="h-3.5 w-3.5" /> {mod.duration}
                        </div>
                        {mod.available ? (
                          <Link
                            href={mod.href}
                            className="inline-flex items-center gap-1 font-exo-2 text-xs font-bold text-[#5EFF8A] hover:brightness-110 transition-all"
                          >
                            Commencer <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        ) : (
                          <span className="font-exo-2 text-xs text-gray-600">Bientôt disponible</span>
                        )}
                      </div>
                    </div>
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
