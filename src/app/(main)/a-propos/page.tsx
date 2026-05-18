import { Shield, Target, Heart, Code, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const metadata = { title: 'À propos — Académie Cybersécurité' };

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Hero */}
      <div className="text-center mb-16">
        <Shield className="h-16 w-16 text-cyan-400 mx-auto mb-6" strokeWidth={1.5} />
        <h1 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-4">À PROPOS</h1>
        <p className="font-exo-2 text-gray-400 text-lg max-w-xl mx-auto">
          Une plateforme gratuite pour démocratiser la cybersécurité dans l'espace francophone.
        </p>
      </div>

      <div className="space-y-10">
        {/* Mission */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-cyan-400" strokeWidth={1.5} />
            <h2 className="font-orbitron text-xl font-bold text-white">Notre Mission</h2>
          </div>
          <p className="font-exo-2 text-gray-300 leading-relaxed">
            L'Académie Cybersécurité a pour mission de démocratiser l'apprentissage de la cybersécurité en proposant des cours gratuits, accessibles et en français. Nous croyons que la sécurité informatique doit être accessible à tous, quel que soit le niveau de départ ou la localisation géographique.
          </p>
        </div>

        {/* Valeurs */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-cyan-400" strokeWidth={1.5} />
            <h2 className="font-orbitron text-xl font-bold text-white">Nos Valeurs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Éthique', desc: 'Nous promouvons uniquement le hacking éthique et légal.' },
              { title: 'Accessibilité', desc: 'Tous nos contenus sont gratuits et en français.' },
              { title: 'Pédagogie', desc: 'Approche progressive adaptée à tous les niveaux.' },
              { title: 'Open Source', desc: 'Code source disponible sur GitHub pour tous.' },
            ].map((v) => (
              <div key={v.title} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shrink-0" />
                <div>
                  <span className="font-exo-2 text-sm font-bold text-white">{v.title} : </span>
                  <span className="font-exo-2 text-sm text-gray-400">{v.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Créateur */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Code className="h-6 w-6 text-cyan-400" strokeWidth={1.5} />
            <h2 className="font-orbitron text-xl font-bold text-white">Le Créateur</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <h3 className="font-orbitron text-lg font-bold text-white mb-2">DIANDA Jean Anicet</h3>
              <p className="font-exo-2 text-gray-300 text-sm leading-relaxed mb-4">
                Passionné de cybersécurité basé à Ouagadougou, Burkina Faso. Cette plateforme est née de la volonté de partager mes connaissances et de contribuer à la formation en cybersécurité dans l'espace francophone africain.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/ANI-dianda" target="_blank" rel="noopener noreferrer" className="font-exo-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">GitHub →</a>
                <a href="https://www.linkedin.com/in/anicet-dianda-33a42732a" target="_blank" rel="noopener noreferrer" className="font-exo-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">LinkedIn →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Avertissement légal */}
        <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-400" strokeWidth={1.5} />
            <h2 className="font-orbitron text-xl font-bold text-yellow-400">Avertissement Légal</h2>
          </div>
          <div className="space-y-3 font-exo-2 text-sm text-gray-300">
            <p><strong className="text-white">Tous les contenus sont à usage éducatif uniquement.</strong></p>
            <p>Toute activité de hacking sans autorisation écrite explicite du propriétaire du système est <strong className="text-red-400">ILLÉGALE</strong> et punie par la loi.</p>
            <p>Utilisez ces connaissances uniquement sur vos propres systèmes ou dans des environnements de test autorisés.</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-orbitron text-xl font-bold text-white mb-6">Technologies Utilisées</h2>
          <div className="flex flex-wrap gap-3">
            {['Next.js 15', 'React 19', 'TypeScript', 'TailwindCSS 4', 'Supabase', 'Radix UI', 'Netlify'].map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-exo-2 text-sm text-gray-300">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
