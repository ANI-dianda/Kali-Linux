import Link from 'next/link';
import { Clock, Target, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { QuizModule12 } from './QuizModule12';

export const metadata = {
  title: 'Module 1.2 : Bases de l\'Informatique et des Réseaux — Académie Cybersécurité',
  description: 'Maîtrisez les fondamentaux de l\'informatique et des réseaux : matériel, OS, modèle OSI, TCP/IP et menaces réseau.',
};

export default function Module12Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-exo-2 text-sm text-gray-500 mb-8">
        <Link href="/modules" className="hover:text-cyan-400 transition-colors">Modules</Link>
        <span>/</span>
        <span className="text-gray-400">Débutant</span>
        <span>/</span>
        <span className="text-white">Module 1.2</span>
      </div>

      {/* Hero */}
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 mb-4">
          <span className="font-orbitron text-xs font-bold text-green-400">NIVEAU DÉBUTANT</span>
        </div>
        <h1 className="font-orbitron text-3xl sm:text-4xl font-black text-white mb-4">
          Module 1.2 : Bases de l'Informatique et des Réseaux
        </h1>
        <p className="font-exo-2 text-gray-300 text-lg mb-6">
          On ne sécurise bien que ce que l'on comprend parfaitement.
        </p>
        <div className="flex flex-wrap gap-6 text-sm font-exo-2 text-gray-400">
          <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-cyan-400" /> 10 à 15 heures</div>
          <div className="flex items-center gap-2"><Target className="h-4 w-4 text-cyan-400" /> Prérequis : Module 1.1</div>
          <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-cyan-400" /> 4 sections · 3 exercices · 1 quiz</div>
        </div>
      </div>

      {/* Intro Professeur */}
      <section className="mb-12">
        <div className="rounded-xl border border-purple-400/20 bg-purple-400/5 p-6">
          <p className="font-orbitron text-xs font-bold text-purple-400 mb-3">MOT DU PROFESSEUR</p>
          <p className="font-exo-2 text-gray-300 leading-relaxed">
            Un bon professionnel de la cybersécurité n'est pas seulement quelqu'un qui connaît les outils d'attaque ou de défense. C'est avant tout quelqu'un qui maîtrise le <strong className="text-white">fonctionnement sous-jacent</strong> des technologies qu'il protège ou teste.
          </p>
          <p className="font-exo-2 text-gray-300 leading-relaxed mt-3">
            Si vous sautez ces bases, vous risquez de mal interpréter les résultats d'un scan Nmap, de ne pas comprendre pourquoi un firewall bloque une connexion, ou de proposer des contre-mesures inefficaces. Nous allons donc démonter la machine et le réseau comme un mécanicien démonte un moteur.
          </p>
        </div>
      </section>

      {/* Objectifs */}
      <section className="mb-12">
        <h2 className="font-orbitron text-xl font-bold text-white mb-4">🎯 Objectifs d'apprentissage</h2>
        <ul className="space-y-2 font-exo-2 text-gray-300">
          {[
            'Comprendre l\'architecture matérielle d\'un système informatique et ses risques',
            'Maîtriser les concepts clés des systèmes d\'exploitation (kernel, privilèges, processus)',
            'Connaître le modèle OSI en 7 couches et le modèle TCP/IP',
            'Identifier les protocoles réseau critiques et leurs vulnérabilités',
            'Reconnaître les principales menaces réseau avec des exemples réels 2025-2026',
          ].map((obj) => (
            <li key={obj} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shrink-0" />
              {obj}
            </li>
          ))}
        </ul>
      </section>

      {/* Section 1 — Hardware */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          1. Architecture d'un Système Informatique
        </h2>
        <p className="font-exo-2 text-gray-300 mb-6">
          Analogie : l'ordinateur comme une <strong className="text-white">grande entreprise</strong>.
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10 mb-6">
          <table className="w-full font-exo-2 text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-4 py-3 text-cyan-400 font-bold">Composant</th>
                <th className="text-left px-4 py-3 text-white font-bold">Rôle</th>
                <th className="text-left px-4 py-3 text-white font-bold">Attaques connues</th>
                <th className="text-left px-4 py-3 text-white font-bold">Contre-mesures</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                { comp: 'CPU', color: 'text-red-400', role: 'Cœurs, threads, cache L1/L2/L3', attacks: 'Spectre, Meltdown, side-channel', fix: 'Mises à jour microcode, isolation (SEV, TEE)' },
                { comp: 'RAM', color: 'text-yellow-400', role: 'Volatile, DDR4/5, ECC', attacks: 'Malware fileless, cold boot attacks', fix: 'Chiffrement mémoire (Intel TME, AMD SEV)' },
                { comp: 'SSD / NVMe', color: 'text-green-400', role: 'Flash NAND, wear leveling', attacks: 'Ransomware, firmware attacks, forensics', fix: 'Chiffrement disque (LUKS, BitLocker, FileVault)' },
                { comp: 'BIOS / UEFI', color: 'text-purple-400', role: 'Secure Boot, TPM 2.0', attacks: 'Rootkits firmware (LoJax, Thunderclap)', fix: 'Secure Boot + TPM + Measured Boot' },
                { comp: 'Carte réseau', color: 'text-blue-400', role: 'MAC address, Wi-Fi 6/7, Ethernet', attacks: 'ARP Poisoning, Evil Twin, packet injection', fix: 'MAC filtering, 802.1X, segmentation réseau' },
              ].map((row) => (
                <tr key={row.comp} className="border-b border-white/5 last:border-0">
                  <td className={`px-4 py-3 font-bold ${row.color}`}>{row.comp}</td>
                  <td className="px-4 py-3">{row.role}</td>
                  <td className="px-4 py-3 text-red-300">{row.attacks}</td>
                  <td className="px-4 py-3 text-green-300">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
          <p className="font-exo-2 text-sm text-gray-300">
            <strong className="text-cyan-400">Insight expert 2026 :</strong> Avec l'essor des puces ARM (Apple M-series, Qualcomm) et des accélérateurs IA (NPU), de nouvelles surfaces d'attaque apparaissent au niveau matériel. La sécurité "hardware-rooted" devient un standard minimum pour les entreprises matures.
          </p>
        </div>
      </section>

      {/* Section 2 — OS */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          2. Les Systèmes d'Exploitation en Profondeur
        </h2>
        <p className="font-exo-2 text-gray-300 mb-6">Un OS gère les ressources et fournit des abstractions aux programmes.</p>

        <h3 className="font-orbitron text-base font-bold text-white mb-4">Concepts fondamentaux</h3>
        <div className="space-y-3 mb-8">
          {[
            { term: 'Kernel', color: 'text-cyan-400', desc: 'Le cœur privilégié (Ring 0). Il dialogue directement avec le matériel.' },
            { term: 'User Space vs Kernel Space', color: 'text-green-400', desc: 'Séparation critique pour la stabilité et la sécurité du système.' },
            { term: 'Processus & Threads', color: 'text-yellow-400', desc: 'Un processus = programme en exécution + ses ressources. Un thread = unité d\'exécution légère.' },
            { term: 'Gestion des privilèges', color: 'text-purple-400', desc: 'Windows : Administrator / UAC. Linux : root (UID 0) vs utilisateur standard. Principe du moindre privilège.' },
            { term: 'Virtual Memory & Paging', color: 'text-blue-400', desc: 'Permet d\'utiliser le disque comme extension de la RAM.' },
          ].map((item) => (
            <div key={item.term} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <span className={`font-orbitron text-sm font-bold ${item.color}`}>{item.term} : </span>
              <span className="font-exo-2 text-sm text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>

        <h3 className="font-orbitron text-base font-bold text-white mb-4">Les 3 grandes familles d'OS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { os: 'Windows', color: 'border-blue-400/30 bg-blue-400/5 text-blue-400', desc: 'Majoritaire en entreprise (~70%). Active Directory très attaqué (Kerberos Golden Ticket, Pass-the-Hash).' },
            { os: 'Linux', color: 'border-green-400/30 bg-green-400/5 text-green-400', desc: 'Roi de la cybersécurité. Permissions fines (chmod, chown). Base de Kali, Parrot, tous les serveurs.' },
            { os: 'macOS / iOS', color: 'border-gray-400/30 bg-gray-400/5 text-gray-300', desc: 'Basé sur Darwin (Unix). Sandboxing fort. Cible grandissante, surtout en entreprise.' },
          ].map((item) => (
            <div key={item.os} className={`rounded-xl border p-5 ${item.color}`}>
              <div className="font-orbitron text-sm font-bold mb-2">{item.os}</div>
              <p className="font-exo-2 text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
          <p className="font-exo-2 text-sm text-gray-300">
            <strong className="text-yellow-400">⚠️ Mise en garde :</strong> 80% des malwares visent encore Windows, mais les attaques sur Linux (surtout serveurs) augmentent fortement avec la conteneurisation (Docker/Kubernetes).
          </p>
        </div>
      </section>

      {/* Section 3 — Réseaux */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          3. Les Réseaux : Voyage d'un Paquet de Données
        </h2>

        <h3 className="font-orbitron text-base font-bold text-white mb-4">Modèle OSI — 7 couches</h3>
        <div className="overflow-x-auto rounded-xl border border-white/10 mb-8">
          <table className="w-full font-exo-2 text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-4 py-3 text-cyan-400 font-bold">#</th>
                <th className="text-left px-4 py-3 text-white font-bold">Couche</th>
                <th className="text-left px-4 py-3 text-white font-bold">Protocoles</th>
                <th className="text-left px-4 py-3 text-white font-bold">Attaques</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                { n: '7', name: 'Application', proto: 'HTTP, HTTPS, DNS, SMTP', attacks: 'Phishing, SQLi, XSS, API abuse' },
                { n: '6', name: 'Présentation', proto: 'TLS, SSL, JPEG, ASCII', attacks: 'Padding Oracle, BEAST, CRIME' },
                { n: '5', name: 'Session', proto: 'RPC, NetBIOS', attacks: 'Session Hijacking, Fixation' },
                { n: '4', name: 'Transport', proto: 'TCP, UDP', attacks: 'Port Scanning, SYN Flood, UDP amplification' },
                { n: '3', name: 'Réseau', proto: 'IP, ICMP, OSPF, BGP', attacks: 'IP Spoofing, Routing attacks, Smurf' },
                { n: '2', name: 'Liaison de données', proto: 'Ethernet, Wi-Fi, PPP', attacks: 'ARP Poisoning, MAC Flooding, Evil Twin' },
                { n: '1', name: 'Physique', proto: 'Câbles, fibre, ondes radio', attacks: 'Wiretapping, Tempest, jamming' },
              ].map((row) => (
                <tr key={row.n} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-3 font-orbitron font-bold text-cyan-400">{row.n}</td>
                  <td className="px-4 py-3 font-bold text-white">{row.name}</td>
                  <td className="px-4 py-3 text-gray-400">{row.proto}</td>
                  <td className="px-4 py-3 text-red-300">{row.attacks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-orbitron text-base font-bold text-white mb-4">Concepts critiques</h3>
        <div className="space-y-3 mb-6">
          {[
            { title: 'Adresses IP', desc: 'Publique vs Privée (NAT). IPv4 épuisement → IPv6 (attention à la double stack).' },
            { title: 'Ports (0-65535)', desc: '22 → SSH · 80 → HTTP · 443 → HTTPS · 3389 → RDP · 445 → SMB. Plus un port est ouvert, plus la surface d\'attaque est grande.' },
            { title: 'TCP Handshake (3-way)', desc: 'SYN → SYN-ACK → ACK. Base des scans furtifs (SYN scan de Nmap).' },
            { title: 'DNS', desc: 'Traduit google.com en IP. Hiérarchie : Root → TLD → Authoritative. Attaques : Cache Poisoning, DGA, DNS Tunneling.' },
            { title: 'HTTP vs HTTPS', desc: 'TLS 1.3 aujourd\'hui standard. HTTPS = HTTP + chiffrement TLS. Certificats via Let\'s Encrypt.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="font-orbitron text-sm font-bold text-cyan-400">{item.title} : </span>
              <span className="font-exo-2 text-sm text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>

        {/* Exemple concret HTTPS */}
        <div className="rounded-xl border border-green-400/20 bg-green-400/5 p-6">
          <p className="font-orbitron text-sm font-bold text-green-400 mb-3">Exemple concret : que se passe-t-il quand vous tapez https://google.com ?</p>
          <ol className="space-y-2 font-exo-2 text-sm text-gray-300">
            {[
              'Résolution DNS → google.com traduit en adresse IP',
              'TCP Handshake sur le port 443 (SYN → SYN-ACK → ACK)',
              'Négociation TLS (échange de certificats, clés de session)',
              'Échange de requêtes HTTP chiffrées',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-orbitron text-xs font-bold text-green-400 mt-0.5">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 4 — Menaces */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          4. Menaces Réseau Courantes (2025-2026)
        </h2>
        <div className="space-y-4 mb-8">
          {[
            { name: 'ARP Poisoning / MitM', color: 'border-red-400/30 bg-red-400/5 text-red-400', desc: 'L\'attaquant se fait passer pour le routeur sur un réseau local. Très efficace sur les Wi-Fi publics non sécurisés.' },
            { name: 'DDoS', color: 'border-orange-400/30 bg-orange-400/5 text-orange-400', desc: 'Cloudflare a détecté des millions d\'attaques en quelques mois. Saturation des couches 3/4 ou 7.' },
            { name: 'Supply Chain Attacks', color: 'border-yellow-400/30 bg-yellow-400/5 text-yellow-400', desc: 'Compromission d\'un fournisseur de confiance pour atteindre des cibles en aval (ex: SolarWinds, XZ Utils).' },
            { name: 'Ransomware via RDP/Ports exposés', color: 'border-purple-400/30 bg-purple-400/5 text-purple-400', desc: 'Le port 3389 (RDP) exposé sur internet est une porte d\'entrée majeure pour les ransomwares.' },
          ].map((threat) => (
            <div key={threat.name} className={`rounded-xl border p-5 ${threat.color}`}>
              <h3 className="font-orbitron text-sm font-bold mb-2">{threat.name}</h3>
              <p className="font-exo-2 text-sm text-gray-300">{threat.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { value: '1,85M$', label: 'Coût moyen d\'un ransomware par incident', color: 'text-red-400' },
            { value: '~2s', label: 'Fréquence d\'une attaque ransomware d\'ici 2031', color: 'text-orange-400' },
            { value: '4,8M', label: 'Postes vacants en cybersécurité dans le monde', color: 'text-yellow-400' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <div className={`font-orbitron text-3xl font-black ${stat.color} mb-2`}>{stat.value}</div>
              <p className="font-exo-2 text-xs text-gray-400">{stat.label}</p>
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
              title: 'Commandes réseau essentielles',
              desc: 'Ouvrez votre terminal et exécutez ces commandes. Notez et analysez les résultats.',
              commands: [
                { cmd: 'ipconfig', os: 'Windows' },
                { cmd: 'ip addr', os: 'Linux' },
                { cmd: 'ping 8.8.8.8', os: 'Tous' },
                { cmd: 'tracert google.com', os: 'Windows' },
                { cmd: 'nslookup google.com', os: 'Tous' },
                { cmd: 'netstat -ano', os: 'Windows' },
                { cmd: 'ss -tuln', os: 'Linux' },
              ],
            },
            {
              num: '02',
              title: 'Analyse WHOIS',
              desc: 'Allez sur https://www.whois.com/whois/ et analysez les informations d\'un site web de votre choix. Que révèle-t-il sur l\'infrastructure ?',
              commands: [],
            },
            {
              num: '03',
              title: 'Parcours d\'un email',
              desc: 'Dessinez le parcours d\'un email depuis votre ordinateur jusqu\'au destinataire en indiquant les couches OSI impliquées à chaque étape.',
              commands: [],
            },
          ].map((ex) => (
            <div key={ex.num} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <span className="font-orbitron text-2xl font-black text-cyan-400/30">{ex.num}</span>
                <div className="flex-1">
                  <h3 className="font-orbitron text-sm font-bold text-white mb-2">{ex.title}</h3>
                  <p className="font-exo-2 text-sm text-gray-400 mb-3">{ex.desc}</p>
                  {ex.commands.length > 0 && (
                    <div className="rounded-lg bg-black/60 border border-white/10 p-4 space-y-1">
                      {ex.commands.map((c) => (
                        <div key={c.cmd} className="flex items-center gap-3">
                          <code className="font-mono text-sm text-green-400">{c.cmd}</code>
                          <span className="font-exo-2 text-xs text-gray-600">({c.os})</span>
                        </div>
                      ))}
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
          <h3 className="font-orbitron text-base font-bold text-yellow-400 mb-4">Cartographie Complète de Votre Environnement Réseau</h3>
          <ul className="space-y-2 font-exo-2 text-sm text-gray-300">
            {[
              'Schéma (draw.io ou Visio) : Box internet → Routeur → Appareils → Services exposés',
              'Liste des ports ouverts (via scan local)',
              'Identification de 5 risques potentiels avec leur couche OSI correspondante',
              'Propositions de premières mesures de durcissement (hardening)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5 shrink-0">→</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ressources */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          📚 Ressources Recommandées
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Computer Networking: A Top-Down Approach', type: 'Livre', desc: 'Kurose & Ross — La référence absolue pour comprendre les réseaux.', href: '#' },
            { title: 'TCP/IP Illustrated', type: 'Livre', desc: 'W. Richard Stevens — Référence technique approfondie sur TCP/IP.', href: '#' },
            { title: 'Wireshark', type: 'Outil gratuit', desc: 'Analyseur de paquets réseau. Indispensable pour visualiser le trafic.', href: 'https://wireshark.org' },
          ].map((r) => (
            <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/30 transition-colors">
              <div className="font-exo-2 text-xs text-cyan-400 mb-1">{r.type}</div>
              <div className="font-orbitron text-sm font-bold text-white mb-2">{r.title}</div>
              <p className="font-exo-2 text-xs text-gray-400">{r.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Quiz */}
      <section className="mb-12">
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
          🧠 Quiz du Module
        </h2>
        <QuizModule12 />
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-white/10">
        <Link href="/modules/debutant/intro-cyber"
          className="inline-flex items-center gap-2 font-exo-2 text-sm text-gray-400 hover:text-white transition-colors">
          <ChevronLeft className="h-4 w-4" /> Module 1.1
        </Link>
        <Link href="/modules/debutant/linux-kali"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-exo-2 text-sm font-bold text-black transition-all hover:bg-cyan-400 hover:scale-105">
          Module suivant : Linux & Kali <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
