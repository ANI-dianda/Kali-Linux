import Link from 'next/link';
import { ArrowRight, BookOpen, Terminal, Users, ChevronRight, CheckCircle } from 'lucide-react';
import { moduleLevels } from '@/lib/modules-data';

const popularModules = moduleLevels.flatMap(l => l.modules).slice(0, 4);

const reasons = [
  { icon: BookOpen, title: 'Cours structurés', desc: '15 modules du débutant à l\'expert, avec progression claire.' },
  { icon: Terminal, title: 'Pratique avant tout', desc: 'Exercices, labs et projets concrets à chaque module.' },
  { icon: Users, title: '100% gratuit', desc: 'Tout le contenu est libre d\'accès, sans inscription obligatoire.' },
  { icon: CheckCircle, title: 'En français', desc: 'Contenu pensé et rédigé en français pour la communauté francophone.' },
];

const levelColors: Record<string, string> = {
  'Débutant': 'text-[#5EFF8A] border-[#5EFF8A]/30 bg-[#5EFF8A]/8',
  'Intermédiaire': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/8',
  'Avancé': 'text-red-400 border-red-400/30 bg-red-400/8',
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101010]">

      {/* ── HERO ── */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-28 pb-20 min-h-[90vh]">

        <div className="inline-flex items-center gap-2 rounded-full border border-[#5EFF8A]/25 bg-[#5EFF8A]/8 px-4 py-1.5 mb-10">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5EFF8A] animate-pulse" />
          <span className="font-exo-2 text-xs text-[#5EFF8A] font-semibold tracking-wide uppercase">Plateforme gratuite · En français</span>
        </div>

        <h1 className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6 max-w-4xl">
          Apprends Kali Linux et la<br />
          <span className="text-[#5EFF8A]">cybersécurité</span> par la pratique.
        </h1>

        <p className="font-exo-2 text-base sm:text-lg text-gray-400 max-w-xl mb-4">
          Pour qui ? Débutants complets, étudiants en informatique, professionnels qui veulent évoluer.
        </p>

        <div className="flex items-center gap-3 font-exo-2 text-sm text-gray-500 mb-10">
          <span>Cours</span>
          <span className="text-[#5EFF8A]">•</span>
          <span>Exercices</span>
          <span className="text-[#5EFF8A]">•</span>
          <span>Progression</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/modules"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#5EFF8A] px-8 py-3.5 font-exo-2 text-sm font-bold text-[#101010] transition-all hover:brightness-110 hover:scale-105"
          >
            Commencer <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/modules"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-8 py-3.5 font-exo-2 text-sm font-semibold text-gray-300 transition-all hover:border-white/30 hover:text-white"
          >
            Explorer les modules
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16">
          {[
            { value: '15', label: 'Modules' },
            { value: '3', label: 'Niveaux' },
            { value: '100%', label: 'Gratuit' },
            { value: 'FR', label: 'Français' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-orbitron text-2xl font-black text-[#5EFF8A]">{s.value}</div>
              <div className="font-exo-2 text-xs text-gray-500 mt-1 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COURS POPULAIRES ── */}
      <section className="px-4 py-20 border-t border-white/8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-orbitron text-2xl font-black text-white">Modules populaires</h2>
            <Link href="/modules" className="inline-flex items-center gap-1 font-exo-2 text-sm text-[#5EFF8A] hover:brightness-110 transition-all">
              Voir tout <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularModules.map((mod) => (
              <div key={mod.id} className={`rounded-xl border bg-white/3 p-6 transition-all ${mod.available ? 'border-white/12 hover:border-[#5EFF8A]/30 cursor-pointer' : 'border-white/6 opacity-50'}`}>
                <div className="flex items-start justify-between mb-3">
                  <span className={`inline-flex rounded-full border px-2.5 py-0.5 font-orbitron text-xs font-bold ${levelColors[mod.level]}`}>
                    {mod.level}
                  </span>
                  <span className="font-exo-2 text-xs text-gray-600">{mod.duration}</span>
                </div>
                <h3 className="font-exo-2 text-sm font-bold text-white mb-1">Module {mod.number}</h3>
                <p className="font-exo-2 text-sm text-gray-400 mb-4 line-clamp-2">{mod.title}</p>
                {mod.available ? (
                  <Link href={mod.href} className="inline-flex items-center gap-1 font-exo-2 text-xs font-bold text-[#5EFF8A] hover:brightness-110 transition-all">
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
      <section className="px-4 py-20 border-t border-white/8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-orbitron text-2xl font-black text-white mb-10 text-center">Pourquoi apprendre ici ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div key={r.title} className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/3 p-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#5EFF8A]/10 border border-[#5EFF8A]/20">
                  <r.icon className="h-4 w-4 text-[#5EFF8A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-exo-2 text-sm font-bold text-white mb-1">{r.title}</h3>
                  <p className="font-exo-2 text-sm text-gray-400">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRESSION ── */}
      <section className="px-4 py-20 border-t border-white/8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-orbitron text-2xl font-black text-white mb-4">Une progression claire</h2>
          <p className="font-exo-2 text-gray-400 mb-12">Chaque module débloque le suivant. Avancez à votre rythme.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            {[
              { label: 'Débutant', sub: '4 modules', color: 'bg-[#5EFF8A] text-[#101010]' },
              { label: '→', sub: '', color: 'bg-transparent text-gray-600' },
              { label: 'Intermédiaire', sub: '6 modules', color: 'bg-yellow-400 text-[#101010]' },
              { label: '→', sub: '', color: 'bg-transparent text-gray-600' },
              { label: 'Avancé', sub: '6 modules', color: 'bg-red-400 text-white' },
            ].map((step, i) => (
              step.label === '→' ? (
                <span key={i} className="font-orbitron text-xl text-gray-700 hidden sm:block">→</span>
              ) : (
                <div key={i} className={`rounded-xl px-6 py-4 font-orbitron text-sm font-black ${step.color}`}>
                  {step.label}
                  {step.sub && <div className="font-exo-2 text-xs font-normal mt-0.5 opacity-70">{step.sub}</div>}
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="px-4 py-20 border-t border-white/8">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="font-orbitron text-3xl font-black text-white mb-4">Prêt à commencer ?</h2>
          <p className="font-exo-2 text-gray-400 mb-8">Module 1.1 — aucun prérequis. Gratuit. En français.</p>
          <Link
            href="/modules/debutant/intro-cyber"
            className="inline-flex items-center gap-2 rounded-md bg-[#5EFF8A] px-10 py-4 font-exo-2 text-base font-bold text-[#101010] transition-all hover:brightness-110 hover:scale-105"
          >
            Démarrer maintenant <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
