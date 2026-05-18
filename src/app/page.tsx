'use client';

import Link from 'next/link';
import { Shield, BookOpen, FlaskConical, Users, ArrowRight, Lock, Wifi, Globe, Terminal } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Modules' },
  { value: '3', label: 'Niveaux' },
  { value: '100%', label: 'Gratuit' },
  { value: 'FR', label: 'En français' },
];

const features = [
  { icon: BookOpen, title: 'Modules structurés', desc: 'Du débutant à l\'expert, une progression claire et logique.', color: 'text-cyan-400' },
  { icon: Terminal, title: 'Labs pratiques', desc: 'Des exercices concrets pour appliquer chaque concept appris.', color: 'text-green-400' },
  { icon: Users, title: 'Communauté', desc: 'Échangez avec d\'autres apprenants et progressez ensemble.', color: 'text-purple-400' },
  { icon: FlaskConical, title: 'Quiz interactifs', desc: 'Testez vos connaissances à la fin de chaque module.', color: 'text-yellow-400' },
];

const topics = [
  { icon: Lock, label: 'Cryptographie' },
  { icon: Wifi, label: 'Sécurité WiFi' },
  { icon: Globe, label: 'Sécurité Web' },
  { icon: Terminal, label: 'Kali Linux' },
  { icon: Shield, label: 'Pentest' },
  { icon: FlaskConical, label: 'Forensics' },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-32 pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 mb-8">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-exo-2 text-sm text-cyan-400 font-semibold">Plateforme gratuite · En français</span>
        </div>

        <h1 className="font-orbitron text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
          ACADÉMIE
          <br />
          <span className="text-cyan-400">CYBERSÉCURITÉ</span>
        </h1>

        <p className="font-exo-2 text-lg sm:text-xl text-gray-300 max-w-2xl mb-10">
          Apprenez la cybersécurité de zéro jusqu'au niveau expert. Des modules structurés, des labs pratiques et une communauté active — tout en français.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-exo-2 text-base font-bold text-black transition-all hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            Commencer gratuitement <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/modules/debutant/intro-cyber"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-exo-2 text-base font-semibold text-white transition-all hover:border-cyan-400/50 hover:bg-white/5"
          >
            Module 1.1 — Débutant
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-orbitron text-3xl font-black text-cyan-400">{s.value}</div>
              <div className="font-exo-2 text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="px-4 py-12 border-y border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((t) => (
              <div key={t.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <t.icon className="h-4 w-4 text-cyan-400" strokeWidth={1.5} />
                <span className="font-exo-2 text-sm text-gray-300">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-orbitron text-3xl font-black text-white text-center mb-4">
            Tout ce qu'il vous faut pour progresser
          </h2>
          <p className="font-exo-2 text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Une plateforme complète conçue pour vous accompagner à chaque étape de votre apprentissage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/30 transition-colors">
                <f.icon className={`h-8 w-8 ${f.color} mb-4`} strokeWidth={1.5} />
                <h3 className="font-orbitron text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="font-exo-2 text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-10">
            <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="font-orbitron text-3xl font-black text-white mb-4">
              Prêt à commencer ?
            </h2>
            <p className="font-exo-2 text-gray-400 mb-8">
              Commencez par le Module 1.1 — aucun prérequis nécessaire.
            </p>
            <Link
              href="/modules/debutant/intro-cyber"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-10 py-4 font-exo-2 text-base font-bold text-black transition-all hover:bg-cyan-400 hover:scale-105"
            >
              Démarrer le Module 1.1 <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
