import Link from 'next/link';
import { Clock, ChevronLeft, ChevronRight, Construction } from 'lucide-react';
export const metadata = { title: 'Module 1.4 : Sécurité du Quotidien — Académie Cybersécurité' };
export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center gap-2 font-exo-2 text-sm text-gray-500 mb-8">
        <Link href="/modules" className="hover:text-cyan-400 transition-colors">Modules</Link>
        <span>/</span><span className="text-gray-400">Débutant</span><span>/</span><span className="text-white">Module 1.4</span>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
        <Construction className="h-16 w-16 text-yellow-400 mx-auto mb-6" strokeWidth={1.5} />
        <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 mb-4">
          <span className="font-orbitron text-xs font-bold text-green-400">NIVEAU DÉBUTANT</span>
        </div>
        <h1 className="font-orbitron text-3xl font-black text-white mb-4">Module 1.4 : Sécurité du Quotidien</h1>
        <p className="font-exo-2 text-gray-400 mb-4 max-w-lg mx-auto">Mots de passe, 2FA, VPN, mises à jour et bonnes pratiques numériques — ce module arrive bientôt.</p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-exo-2 mb-8"><Clock className="h-4 w-4" /> 3 à 4 heures · Prérequis : Module 1.1</div>
        <Link href="/modules" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-exo-2 text-sm font-semibold text-white hover:border-cyan-400/50 transition-colors">Voir tous les modules</Link>
      </div>
      <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
        <Link href="/modules/debutant/linux-kali" className="inline-flex items-center gap-2 font-exo-2 text-sm text-gray-400 hover:text-white transition-colors"><ChevronLeft className="h-4 w-4" /> Module 1.3</Link>
        <Link href="/modules/intermediaire/osint" className="inline-flex items-center gap-2 font-exo-2 text-sm text-gray-400 hover:text-white transition-colors">Module 2.1 <ChevronRight className="h-4 w-4" /></Link>
      </div>
    </div>
  );
}
