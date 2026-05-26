import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101010] text-white">

      {/* ── HERO ── */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
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

        <Link
          href="/modules"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-[#5EFF8A] px-10 py-4 font-exo-2 text-base font-bold text-[#101010] hover:brightness-110 hover:scale-105 transition-all"
        >
          Commencer <ArrowRight className="h-5 w-5" />
        </Link>
      </main>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
