import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101010] text-white">

      {/* ── HEADER ── */}
      <Header />

      {/* ── HERO ── */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">

        <h1 className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-black leading-tight mb-6 max-w-3xl">
          Formation Complète en<br />
          <span className="text-[#5EFF8A]">Sécurité Informatique.</span>
        </h1>

        <p className="font-exo-2 text-base text-gray-400 max-w-md mb-2">
          Cours · Exercices · Progression
        </p>
        <p className="font-exo-2 text-sm text-gray-500 max-w-md mb-10">
          Linux · Réseaux · Pentest · Audit sécurité<br />
          Parcours complet vers l'expertise cybersécurité.
        </p>

        <Link
          href="/modules"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-[#5EFF8A] px-10 py-4 font-exo-2 text-base font-bold text-[#101010] hover:brightness-110 hover:scale-105 transition-all touch-manipulation"
        >
          Rejoindre le Cursus <ArrowRight className="h-5 w-5" />
        </Link>
      </main>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
