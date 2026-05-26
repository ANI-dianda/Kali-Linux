import Link from 'next/link';
import { ArrowRight, BookOpen, Monitor, TrendingUp } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const skills = ['Linux', 'Réseaux', 'Pentest', 'Audit sécurité'];

const features = [
  { icon: BookOpen,   label: 'Cours' },
  { icon: Monitor,    label: 'Exercices' },
  { icon: TrendingUp, label: 'Progression' },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white">

      <Header />

      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-16 sm:py-24 lg:py-32">

        {/* Titre */}
        <h1 className="font-orbitron text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-black leading-snug mb-6 max-w-sm sm:max-w-xl lg:max-w-3xl">
          Formation complète en{' '}
          <span className="text-[#59FF88]">Sécurité Informatique.</span>
        </h1>

        {/* Sous-titre */}
        <p className="font-exo-2 text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-xs sm:max-w-md lg:max-w-xl mb-8">
          Maîtrisez Linux, les réseaux, le pentest et l'audit sécurité grâce à un parcours complet vers l'expertise cybersécurité.
        </p>

        {/* Compétences */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-10">
          {skills.map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              {i > 0 && <span className="text-[#59FF88]/40 text-xs">•</span>}
              <span className="font-exo-2 text-xs sm:text-sm text-gray-400">{s}</span>
            </span>
          ))}
        </div>

        {/* Blocs features */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-2 rounded-xl border border-white/8 bg-white/3 px-5 py-4 w-24 sm:w-28 lg:w-32">
              <f.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#59FF88]" strokeWidth={1.5} />
              <span className="font-exo-2 text-xs sm:text-sm text-gray-400">{f.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/modules"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#59FF88] px-10 py-4 font-exo-2 text-sm sm:text-base font-bold text-[#050505] transition-all hover:brightness-110 hover:scale-105 active:scale-95 touch-manipulation"
        >
          Rejoindre le cursus <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Link>

      </main>

      <Footer />
    </div>
  );
}
