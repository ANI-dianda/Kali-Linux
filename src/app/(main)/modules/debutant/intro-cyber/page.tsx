import Link from 'next/link';
import { Clock, Target, BookOpen, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';
import { QuizModule11 } from './QuizModule11';
import { CopyBlock } from './CopyBlock';

export const metadata = {
  title: 'Module 1.1 : Introduction à la Cybersécurité — Académie Cybersécurité',
  description: 'Découvrez les bases de la cybersécurité : modèle CIA, types d\'attaques, hackers et enjeux actuels.',
};

export default function Module11Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-exo-2 text-sm text-gray-500 mb-8">
        <Link href="/modules" className="hover:text-cyan-400 transition-colors">Modules</Link>
        <span>/</span>
        <span className="text-gray-400">Débutant</span>
        <span>/</span>
        <span className="text-white">Module 1.1</span>
      </div>

      {/* Hero */}
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 mb-4">
          <span className="font-orbitron text-xs font-bold text-green-400">NIVEAU DÉBUTANT</span>
        </div>
        <h1 className="font-orbitron text-3xl sm:text-4xl font-black text-white mb-4">
          Module 1.1 : Introduction à la Cybersécurité
        </h1>
        <p className="font-exo-2 text-gray-300 text-lg mb-6">
          Découvrez pourquoi la cybersécurité existe et comment elle fonctionne dans la vraie vie.
        </p>
        <div className="flex flex-wrap gap-6 text-sm font-exo-2 text-gray-400">
          <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-cyan-400" /> 5 à 7 heures</div>
          <div className="flex items-center gap-2"><Target className="h-4 w-4 text-cyan-400" /> Prérequis : Aucun</div>
          <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-cyan-400" /> 5 sections · 3 exercices · 1 quiz</div>
        </div>
      </div>

      {/* Objectifs */}
      <section className="mb-12">
        <h2 className="font-orbitron text-xl font-bold text-white mb-4">🎯 Objectifs d'apprentissage</h2>
        <ul className="space-y-2 font-exo-2 text-gray-300">
          {[
            'Comprendre ce qu\'est la cybersécurité et pourquoi elle est essentielle',
            'Maîtriser le modèle CIA Triad (Confidentialité, Intégrité, Disponibilité)',
            'Identifier les principaux types d\'attaques informatiques',
            'Distinguer les différents profils de hackers',
            'Connaître les enjeux actuels de la cybersécurité en 2026',
          ].map((obj) => (
            <li key={obj} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shrink-0" />
              {obj}
            </li>
          ))}
        </ul>
      </section>

      {/* Section 1 */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          1. Qu'est-ce que la Cybersécurité ?
        </h2>
        <p className="font-exo-2 text-gray-300 mb-4">Imagine ta maison :</p>
        <ul className="space-y-2 font-exo-2 text-gray-300 mb-6 ml-4">
          <li>🔑 Tu fermes la porte à clé → <strong className="text-white">Confidentialité</strong></li>
          <li>🚨 Tu mets une alarme → <strong className="text-white">Intégrité</strong> (personne ne vient tout casser)</li>
          <li>🧯 Tu as une assurance et un extincteur → <strong className="text-white">Disponibilité</strong></li>
        </ul>
        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5 mb-6">
          <p className="font-exo-2 text-gray-200">
            <strong className="text-cyan-400">Définition :</strong> La cybersécurité regroupe toutes les techniques et bonnes pratiques qui permettent de <strong className="text-white">protéger</strong> nos ordinateurs, téléphones, données, entreprises et même nos États contre les personnes malveillantes sur internet.
          </p>
        </div>
        <h3 className="font-orbitron text-base font-bold text-white mb-3">Exemples concrets du quotidien :</h3>
        <ul className="space-y-2 font-exo-2 text-gray-300 ml-4">
          <li>📱 Quand tu utilises un code PIN ou Face ID sur ton téléphone → cybersécurité</li>
          <li>📧 Quand tu reçois un email "Votre colis est bloqué, cliquez ici" → tentative d'attaque</li>
          <li>🏦 Quand une entreprise se fait voler les données de millions de clients (Uber, Yahoo…) → échec de cybersécurité</li>
        </ul>
      </section>

      {/* Section 2 — CIA Triad */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          2. Le Modèle CIA Triad
        </h2>
        <p className="font-exo-2 text-gray-300 mb-6">
          C'est le <strong className="text-white">triangle fondamental</strong>. Tous les experts en cybersécurité l'utilisent.
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10 mb-6">
          <table className="w-full font-exo-2 text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-4 py-3 text-cyan-400 font-bold">Pilier</th>
                <th className="text-left px-4 py-3 text-white font-bold">Explication</th>
                <th className="text-left px-4 py-3 text-white font-bold">Exemple réel</th>
                <th className="text-left px-4 py-3 text-white font-bold">Conséquence si échoué</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/5">
                <td className="px-4 py-3 font-bold text-white">Confidentialité</td>
                <td className="px-4 py-3">Empêcher les non-autorisés de voir les données</td>
                <td className="px-4 py-3">Vol de photos (iCloud hack 2014), vol d'identifiants bancaires</td>
                <td className="px-4 py-3 text-red-400">Fuite de données personnelles</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="px-4 py-3 font-bold text-white">Intégrité</td>
                <td className="px-4 py-3">Garantir que les données ne sont pas modifiées</td>
                <td className="px-4 py-3">Ransomware WannaCry (2017) qui chiffre tous les fichiers</td>
                <td className="px-4 py-3 text-red-400">Perte ou corruption de données</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold text-white">Disponibilité</td>
                <td className="px-4 py-3">Garantir que le service reste accessible</td>
                <td className="px-4 py-3">Attaque DDoS sur une banque ou un hôpital</td>
                <td className="px-4 py-3 text-red-400">Service inaccessible</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
          <p className="font-exo-2 text-gray-300">
            <strong className="text-yellow-400">Analogie :</strong> Un coffre-fort (Confidentialité), un cadenas incassable (Intégrité), et une porte qui ne se bloque jamais (Disponibilité).
          </p>
        </div>
      </section>

      {/* Section 3 — Types d'attaques */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          3. Les Principaux Types d'Attaques
        </h2>
        <div className="space-y-4">
          {[
            {
              name: 'Phishing',
              color: 'border-red-400/30 bg-red-400/5',
              titleColor: 'text-red-400',
              desc: 'Tu reçois un email qui semble venir de Netflix : "Votre compte va être bloqué". Il te demande ton mot de passe.',
              note: '90% des attaques commencent comme ça.',
            },
            {
              name: 'Ransomware (rançongiciel)',
              color: 'border-orange-400/30 bg-orange-400/5',
              titleColor: 'text-orange-400',
              desc: 'En 2024-2025, plusieurs hôpitaux français ont été paralysés. Les attaquants chiffrent toutes les données et demandent des millions d\'euros.',
              note: null,
            },
            {
              name: 'Malware',
              color: 'border-yellow-400/30 bg-yellow-400/5',
              titleColor: 'text-yellow-400',
              desc: 'Un virus caché dans un logiciel cracké que tu télécharges pour "avoir Photoshop gratuit".',
              note: null,
            },
            {
              name: 'Ingénierie sociale',
              color: 'border-purple-400/30 bg-purple-400/5',
              titleColor: 'text-purple-400',
              desc: 'Un faux technicien Microsoft t\'appelle et te dit qu\'il y a un problème sur ton PC pour prendre le contrôle à distance.',
              note: null,
            },
            {
              name: 'DDoS',
              color: 'border-blue-400/30 bg-blue-400/5',
              titleColor: 'text-blue-400',
              desc: 'Des milliers d\'ordinateurs infectés (botnet) attaquent en même temps un site pour le faire tomber.',
              note: null,
            },
          ].map((attack) => (
            <div key={attack.name} className={`rounded-xl border ${attack.color} p-5`}>
              <h3 className={`font-orbitron text-sm font-bold ${attack.titleColor} mb-2`}>{attack.name}</h3>
              <p className="font-exo-2 text-gray-300 text-sm">{attack.desc}</p>
              {attack.note && <p className={`font-exo-2 text-xs mt-2 font-bold ${attack.titleColor}`}>⚠️ {attack.note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — Types de hackers */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          4. Les Différents Types de Hackers
        </h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full font-exo-2 text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-4 py-3 text-cyan-400 font-bold">Type</th>
                <th className="text-left px-4 py-3 text-white font-bold">Intention</th>
                <th className="text-left px-4 py-3 text-white font-bold">Exemple concret</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                { type: 'Black Hat', color: 'text-red-400', intention: 'Malveillant (vol, destruction)', example: 'Pirate qui vend des données volées sur le dark web' },
                { type: 'White Hat', color: 'text-green-400', intention: 'Éthique (protéger)', example: 'Pentester embauché par une entreprise' },
                { type: 'Grey Hat', color: 'text-yellow-400', intention: 'Entre les deux', example: 'Découvre une faille et la signale (parfois contre paiement)' },
                { type: 'Red Team', color: 'text-orange-400', intention: 'Attaque simulée', example: 'Équipe qui teste les défenses d\'une grande entreprise' },
                { type: 'Blue Team', color: 'text-blue-400', intention: 'Défense permanente', example: 'Analystes en SOC qui surveillent les alertes 24/7' },
                { type: 'Script Kiddie', color: 'text-gray-400', intention: 'Débutant sans grande compétence', example: 'Jeune qui utilise un outil trouvé sur internet' },
              ].map((h) => (
                <tr key={h.type} className="border-b border-white/5 last:border-0">
                  <td className={`px-4 py-3 font-bold ${h.color}`}>{h.type}</td>
                  <td className="px-4 py-3">{h.intention}</td>
                  <td className="px-4 py-3">{h.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5 — Enjeux 2026 */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          5. Enjeux Actuels en 2026
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { value: '2 200+', label: 'attaques par jour en France', color: 'text-red-400' },
            { value: '4M+', label: 'professionnels manquants dans le monde', color: 'text-yellow-400' },
            { value: '$10T+', label: 'coût mondial des cyberattaques par an', color: 'text-orange-400' },
            { value: 'IA', label: 'utilisée par les attaquants pour des phishings ultra-réalistes', color: 'text-purple-400' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className={`font-orbitron text-3xl font-black ${stat.color} mb-2`}>{stat.value}</div>
              <p className="font-exo-2 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exercices */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          🛠️ Exercices Pratiques
        </h2>
        <div className="space-y-4">
          {[
            {
              num: '01',
              title: 'Analyse d\'actualité',
              desc: 'Cherche dans l\'actualité une cyberattaque récente (2025 ou 2026). Identifie quel(s) pilier(s) du CIA ont été touchés (Confidentialité, Intégrité, Disponibilité).',
            },
            {
              num: '02',
              title: 'Inventaire de tes données',
              desc: 'Liste 5 données personnelles importantes pour toi (banque, email principal, photos, etc.) et note comment tu les protèges aujourd\'hui.',
            },
            {
              num: '03',
              title: 'Phrase de passe',
              desc: 'Crée ou améliore ton mot de passe principal en utilisant la méthode de la phrase de passe.',
            },
          ].map((ex) => (
            <div key={ex.num} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <span className="font-orbitron text-2xl font-black text-cyan-400/30">{ex.num}</span>
                <div>
                  <h3 className="font-orbitron text-sm font-bold text-white mb-2">{ex.title}</h3>
                  <p className="font-exo-2 text-sm text-gray-400">{ex.desc}</p>
                  {ex.num === '03' && (
                    <div className="mt-3 rounded-lg bg-black/40 border border-white/10 px-4 py-3 font-mono text-sm text-green-400">
                      ❌ Azerty123 &nbsp;&nbsp; ✅ JAdoreLeFromage2026!
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projet Final */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          🏆 Projet Final du Module
        </h2>
        <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-6">
          <h3 className="font-orbitron text-base font-bold text-yellow-400 mb-4">Ta Fiche de Sécurité Personnelle 2026</h3>
          <p className="font-exo-2 text-gray-300 mb-4">Crée un document (Notion, Google Doc ou papier) contenant :</p>
          <ul className="space-y-2 font-exo-2 text-sm text-gray-300">
            <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">→</span> Tes 3 mots de passe les plus importants (stockés dans un gestionnaire de mots de passe)</li>
            <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">→</span> Liste des sites avec 2FA activé</li>
            <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">→</span> Tes habitudes à améliorer (ex: ne plus cliquer sur les liens des emails)</li>
            <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">→</span> Une phrase d'engagement : "Je m'engage à…"</li>
          </ul>
        </div>
      </section>

      {/* Ressources */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          📚 Ressources Supplémentaires
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="https://secnumacademie.gouv.fr" target="_blank" rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/30 transition-colors">
            <div className="font-orbitron text-sm font-bold text-cyan-400 mb-1">SecNumacadémie (ANSSI)</div>
            <p className="font-exo-2 text-xs text-gray-400">Formation officielle en cybersécurité, gratuite et en français.</p>
          </a>
          <a href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/30 transition-colors">
            <div className="font-orbitron text-sm font-bold text-cyan-400 mb-1">Have I Been Pwned</div>
            <p className="font-exo-2 text-xs text-gray-400">Vérifie si tes emails ont été compromis dans une fuite de données.</p>
          </a>
        </div>
      </section>

      {/* Quiz */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          🧠 Quiz du Module
        </h2>
        <QuizModule11 />
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-white/10">
        <div />
        <Link
          href="/modules/debutant/reseaux"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-exo-2 text-sm font-bold text-black transition-all hover:bg-cyan-400 hover:scale-105"
        >
          Module suivant : Réseaux <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
