import { Construction, Rss } from 'lucide-react';
import Link from 'next/link';

export const metadata = { title: 'Blog — Académie Cybersécurité' };

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
      <Rss className="h-16 w-16 text-cyan-400 mx-auto mb-6" strokeWidth={1.5} />
      <h1 className="font-orbitron text-4xl font-black text-white mb-4">BLOG</h1>
      <p className="font-exo-2 text-gray-400 text-lg max-w-xl mx-auto mb-8">
        Actualités cybersécurité, tutoriels, analyses d'incidents et conseils pratiques — bientôt disponible.
      </p>
      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-8 max-w-md mx-auto">
        <Construction className="h-10 w-10 text-yellow-400 mx-auto mb-4" strokeWidth={1.5} />
        <p className="font-exo-2 text-gray-300 mb-6">Le blog est en cours de construction. En attendant, commencez votre apprentissage avec nos modules.</p>
        <Link href="/modules" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-exo-2 text-sm font-bold text-black hover:bg-cyan-400 transition-all">
          Voir les modules
        </Link>
      </div>
    </div>
  );
}
