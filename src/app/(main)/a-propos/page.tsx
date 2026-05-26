import { Shield, Target, Heart, AlertTriangle, Github, Linkedin, MapPin } from 'lucide-react';

export const metadata = { title: 'À propos — KaliAcademy' };

const values = [
  { title: 'Éthique',        desc: 'Hacking éthique et légal uniquement. Aucune tolérance pour les usages malveillants.' },
  { title: 'Accessibilité',  desc: 'Contenu 100% gratuit, en français, sans inscription obligatoire.' },
  { title: 'Pédagogie',      desc: 'Progression logique du débutant à l\'expert, avec exercices pratiques.' },
  { title: 'Open Source',    desc: 'Code source disponible sur GitHub, ouvert aux contributions.' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">

        {/* En-tête */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#59FF88]" />
            <span className="font-orbitron text-xs font-bold tracking-widest text-[#59FF88]">À PROPOS</span>
          </div>
          <h1 className="font-orbitron text-3xl sm:text-4xl font-black text-white mb-4 leading-snug">
            KaliAcademy
          </h1>
          <p className="font-exo-2 text-gray-400 text-base max-w-xl leading-relaxed">
            Plateforme gratuite de formation en cybersécurité, pensée pour la communauté francophone africaine et mondiale.
          </p>
        </div>

        {/* Mission */}
        <div className="rounded-xl border border-white/8 bg-white/3 p-7 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-5 w-5 text-[#59FF88]" strokeWidth={1.5} />
            <h2 className="font-orbitron text-base font-bold text-white">Mission</h2>
          </div>
          <p className="font-exo-2 text-sm text-gray-400 leading-relaxed">
            Démocratiser l'apprentissage de la cybersécurité en proposant un parcours structuré, gratuit et accessible à tous — quel que soit le niveau de départ ou la localisation géographique.
          </p>
        </div>

        {/* Valeurs */}
        <div className="rounded-xl border border-white/8 bg-white/3 p-7 mb-5">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-5 w-5 text-[#59FF88]" strokeWidth={1.5} />
            <h2 className="font-orbitron text-base font-bold text-white">Valeurs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#59FF88] shrink-0" />
                <div>
                  <p className="font-exo-2 text-sm font-bold text-white mb-0.5">{v.title}</p>
                  <p className="font-exo-2 text-xs text-gray-500">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Créateur */}
        <div className="rounded-xl border border-white/8 bg-white/3 p-7 mb-5">
          <h2 className="font-orbitron text-base font-bold text-white mb-5">Créateur</h2>
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#59FF88]/10 border border-[#59FF88]/20">
              <Shield className="h-7 w-7 text-[#59FF88]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-orbitron text-sm font-black text-white mb-1">DIANDA Jean Anicet</h3>
              <div className="flex items-center gap-1.5 mb-3">
                <MapPin className="h-3.5 w-3.5 text-gray-600" />
                <span className="font-exo-2 text-xs text-gray-500">Ouagadougou, Burkina Faso</span>
              </div>
              <p className="font-exo-2 text-sm text-gray-400 leading-relaxed mb-4">
                Passionné de cybersécurité, j'ai créé KaliAcademy pour partager mes connaissances et contribuer à la formation en sécurité informatique dans l'espace francophone africain.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/ANI-dianda" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-exo-2 text-xs text-gray-400 hover:text-[#59FF88] transition-colors">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/anicet-dianda-33a42732a" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-exo-2 text-xs text-gray-400 hover:text-[#59FF88] transition-colors">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Avertissement légal */}
        <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-7">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-5 w-5 text-yellow-400" strokeWidth={1.5} />
            <h2 className="font-orbitron text-base font-bold text-yellow-400">Avertissement légal</h2>
          </div>
          <div className="space-y-2 font-exo-2 text-sm text-gray-400">
            <p><strong className="text-white">Tous les contenus sont à usage éducatif uniquement.</strong></p>
            <p>Toute activité de hacking sans autorisation explicite est <strong className="text-red-400">illégale</strong> et punie par la loi.</p>
            <p>Utilisez ces connaissances uniquement sur vos propres systèmes ou dans des environnements de test autorisés.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
