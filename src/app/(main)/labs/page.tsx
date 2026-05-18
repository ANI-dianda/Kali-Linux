import { FlaskConical, Clock, Target, Lock } from 'lucide-react';
import Link from 'next/link';

export const metadata = { title: 'Labs & Challenges — Académie Cybersécurité' };

const labs = [
  { id: 1, title: 'Identifier un email de phishing', level: 'Débutant', duration: '20 min', module: '1.1', available: true, desc: 'Analysez 5 emails et identifiez lesquels sont des tentatives de phishing.' },
  { id: 2, title: 'Créer une phrase de passe solide', level: 'Débutant', duration: '15 min', module: '1.1', available: true, desc: 'Appliquez la méthode de la phrase de passe pour sécuriser vos comptes.' },
  { id: 3, title: 'Analyser le CIA Triad d\'un incident réel', level: 'Débutant', duration: '30 min', module: '1.1', available: true, desc: 'Prenez une cyberattaque réelle et identifiez quels piliers CIA ont été touchés.' },
  { id: 4, title: 'Scanner un réseau avec Nmap', level: 'Intermédiaire', duration: '45 min', module: '2.2', available: false, desc: 'Utilisez Nmap pour cartographier un réseau de test et identifier les services ouverts.' },
  { id: 5, title: 'Exploiter une injection SQL basique', level: 'Intermédiaire', duration: '60 min', module: '2.3', available: false, desc: 'Testez une application web vulnérable et extrayez des données via SQLi.' },
  { id: 6, title: 'Capturer un handshake WPA2', level: 'Intermédiaire', duration: '45 min', module: '2.5', available: false, desc: 'Dans un environnement de test, capturez et analysez un handshake WiFi.' },
];

const levelColors: Record<string, string> = {
  'Débutant': 'text-green-400 border-green-400/30 bg-green-400/10',
  'Intermédiaire': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  'Avancé': 'text-red-400 border-red-400/30 bg-red-400/10',
};

export default function LabsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-4">LABS & CHALLENGES</h1>
        <p className="font-exo-2 text-gray-400 text-lg max-w-xl mx-auto">
          Mettez en pratique vos connaissances avec des exercices concrets et progressifs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {labs.map((lab) => (
          <div key={lab.id} className={`relative rounded-xl border ${lab.available ? 'border-white/15 hover:border-cyan-400/40' : 'border-white/8 opacity-60'} bg-white/5 p-6 transition-all`}>
            {!lab.available && <Lock className="absolute top-4 right-4 h-4 w-4 text-gray-500" />}
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-flex rounded-full border px-2.5 py-0.5 font-orbitron text-xs font-bold ${levelColors[lab.level]}`}>
                {lab.level}
              </span>
              <span className="font-exo-2 text-xs text-gray-500">Module {lab.module}</span>
            </div>
            <h3 className="font-exo-2 text-base font-bold text-white mb-2">{lab.title}</h3>
            <p className="font-exo-2 text-sm text-gray-400 mb-4">{lab.desc}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-gray-500 font-exo-2">
                <Clock className="h-3.5 w-3.5" /> {lab.duration}
              </div>
              {lab.available ? (
                <Link href={`/modules/debutant/intro-cyber`} className="font-exo-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                  Commencer →
                </Link>
              ) : (
                <span className="font-exo-2 text-xs text-gray-600">Bientôt disponible</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
