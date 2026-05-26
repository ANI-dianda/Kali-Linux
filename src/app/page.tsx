import Link from 'next/link';
import { ArrowRight, BookOpen, Terminal, Users, CheckCircle, ChevronRight } from 'lucide-react';
import { moduleLevels } from '@/lib/modules-data';

const popularModules = moduleLevels.flatMap(l => l.modules).slice(0, 4);

const reasons = [
  { icon: BookOpen,     title: 'Cours structurés',   desc: '15 modules du débutant à l\'expert.' },
  { icon: Terminal,     title: 'Pratique avant tout', desc: 'Exercices et labs concrets à chaque module.' },
  { icon: CheckCircle,  title: '100 % gratuit',       desc: 'Aucune inscription, aucun paiement.' },
  { icon: Users,        title: 'En français',         desc: 'Contenu pensé pour la communauté francophone.' },
];

const levelColors: Record<string, string> = {
  'Débutant':      'text-[#5EFF8A] border-[#5EFF8A]/30 bg-[#5EFF8A]/8',
  'Intermédiaire': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/8',
  'Avancé':        'text-red-400   border-red-400/30   bg-red-400/8',
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101010] text-white">

      {/* ── HERO ── */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-28 pb-20 min-h-[88vh]">
        <p className="font-exo-2 text-xs text-[#5EFF8A] tracking-widest uppercase mb-6">
          Gratuit · En français · Débutant → Expert
        </p>

        <h1 className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-black leading-tight mb-6 max-w-3xl">
          Apprendre Kali Linux<br />
          <span className="text-[#5EFF8A]">de zéro à avancé.</span>
        </h1>

        <p className="font-exo-2 text-base text-gray-400 max-w-md mb-10">
          Cours · Exercices · Progression — tout en un seul endroit.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/modules/debutant/intro-cyber"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#5EFF8A] px-8 py-3.5 font-exo-2 text-sm font-bold text-[#101010] hover:brightness-110 hover:scale-105 transition-all"
          >
            Commencer <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/modules"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-8 py-3.5 font-exo-2 text-sm font-semibold text-gray-300 hover:border-white/30 hover:text-white transition-all"
          >
            Explorer les modules
          </Link>
        </div>
      </section>

      {/* ── COURS POPULAIRES ── */}
      <section className="px-4 py-16 border-t border-white/8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-orbitron text-xl font-black text-white">Modules disponibles</h2>
            <Link href="/modules" className="inline-flex items-center gap-1 font-exo-2 text-sm text-[#5EFF8A] hover:brightness-110 transition-all">
              Voir tout <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularModules.map((mod) => (
              <div
                key={mod.id}
                className={`rounded-xl border bg-white/3 p-5 transition-all ${
                  mod.available
                    ? 'border-white/12 hover:border-[#5EFF8A]/30'
                    : 'border-white/6 opacity-40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`rounded-full border px-2.5 py-0.5 font-orbitron text-xs font-bold ${levelColors[mod.level]}`}>
                    {mod.level}
                  </span>
                  <span className="font-exo-2 text-xs text-gray-600">{mod.duration}</span>
                </div>
                <p className="font-exo-2 text-xs text-gray-500 mb-1">Module {mod.number}</p>
                <h3 className="font-exo-2 text-sm font-bold text-white mb-4">{mod.title}</h3>
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
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI ICI ── */}
      <section className="px-4 py-16 border-t border-white/8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-orbitron text-xl font-black text-white mb-8 text-center">Pourquoi apprendre ici ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div key={r.title} className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/3 p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#5EFF8A]/10 border border-[#5EFF8A]/20">
                  <r.icon className="h-4 w-4 text-[#5EFF8A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-exo-2 text-sm font-bold text-white mb-0.5">{r.title}</h3>
                  <p className="font-exo-2 text-sm text-gray-400">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRESSION ── */}
      <section className="px-4 py-16 border-t border-white/8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-orbitron text-xl font-black text-white mb-3">Une progression claire</h2>
          <p className="font-exo-2 text-sm text-gray-400 mb-10">Avancez à votre rythme, module par module.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {[
              { label: 'Débutant',      sub: '4 modules', bg: 'bg-[#5EFF8A] text-[#101010]' },
              { label: 'Intermédiaire', sub: '6 modules', bg: 'bg-yellow-400 text-[#101010]' },
              { label: 'Avancé',        sub: '6 modules', bg: 'bg-red-400 text-white' },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                {i > 0 && <span className="font-orbitron text-gray-700 hidden sm:block">→</span>}
                <div className={`rounded-xl px-6 py-4 font-orbitron text-sm font-black ${step.bg}`}>
                  {step.label}
                  <div className="font-exo-2 text-xs font-normal mt-0.5 opacity-70">{step.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/modules/debutant/intro-cyber"
              className="inline-flex items-center gap-2 rounded-md bg-[#5EFF8A] px-8 py-3.5 font-exo-2 text-sm font-bold text-[#101010] hover:brightness-110 hover:scale-105 transition-all"
            >
              Démarrer maintenant <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
