import Link from 'next/link';
import { Clock, ChevronLeft, ChevronRight, Construction } from 'lucide-react';

interface ModulePlaceholderProps {
  number: string;
  title: string;
  description: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  duration: string;
  prerequisites: string;
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

const levelStyles = {
  'Débutant': { badge: 'border-green-400/30 bg-green-400/10 text-green-400' },
  'Intermédiaire': { badge: 'border-yellow-400/30 bg-yellow-400/10 text-yellow-400' },
  'Avancé': { badge: 'border-red-400/30 bg-red-400/10 text-red-400' },
};

export function ModulePlaceholder({
  number, title, description, level, duration, prerequisites,
  prevHref, prevLabel, nextHref, nextLabel,
}: ModulePlaceholderProps) {
  const style = levelStyles[level];
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center gap-2 font-exo-2 text-sm text-gray-500 mb-8">
        <Link href="/modules" className="hover:text-cyan-400 transition-colors">Modules</Link>
        <span>/</span><span className="text-gray-400">{level}</span>
        <span>/</span><span className="text-white">Module {number}</span>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
        <Construction className="h-16 w-16 text-yellow-400 mx-auto mb-6" strokeWidth={1.5} />
        <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 mb-4 ${style.badge}`}>
          <span className="font-orbitron text-xs font-bold">NIVEAU {level.toUpperCase()}</span>
        </div>
        <h1 className="font-orbitron text-3xl font-black text-white mb-4">Module {number} : {title}</h1>
        <p className="font-exo-2 text-gray-400 mb-4 max-w-lg mx-auto">{description} — Ce module arrive bientôt.</p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-exo-2 mb-8">
          <Clock className="h-4 w-4" /> {duration} · Prérequis : {prerequisites}
        </div>
        <Link href="/modules" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-exo-2 text-sm font-semibold text-white hover:border-cyan-400/50 transition-colors">
          Voir tous les modules
        </Link>
      </div>
      <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
        {prevHref ? (
          <Link href={prevHref} className="inline-flex items-center gap-2 font-exo-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ChevronLeft className="h-4 w-4" /> {prevLabel}
          </Link>
        ) : <div />}
        {nextHref ? (
          <Link href={nextHref} className="inline-flex items-center gap-2 font-exo-2 text-sm text-gray-400 hover:text-white transition-colors">
            {nextLabel} <ChevronRight className="h-4 w-4" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
