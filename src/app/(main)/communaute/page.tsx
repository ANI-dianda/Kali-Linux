import Link from 'next/link';

export const metadata = { title: 'Communauté — KaliAcademy' };

export default function CommunautePage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <p className="font-orbitron text-xs font-bold tracking-widest text-[#59FF88] mb-6">COMMUNAUTÉ</p>
        <h1 className="font-orbitron text-2xl sm:text-3xl font-black text-white mb-4">Bientôt disponible.</h1>
        <p className="font-exo-2 text-sm text-gray-500 mb-8">
          Un espace d'échange entre apprenants est en cours de construction.
        </p>
        <Link href="/modules" className="inline-flex items-center gap-2 rounded-xl bg-[#59FF88] px-6 py-3 font-exo-2 text-sm font-bold text-[#050505] hover:brightness-110 transition-all">
          Voir les modules
        </Link>
      </div>
    </div>
  );
}
