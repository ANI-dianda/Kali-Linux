export type Level = 'Débutant' | 'Intermédiaire' | 'Avancé';

export interface Module {
  id: string;
  number: string;
  title: string;
  description: string;
  level: Level;
  duration: string;
  prerequisites: string;
  href: string;
  available: boolean;
}

export interface ModuleLevel {
  level: Level;
  color: string;
  bgColor: string;
  borderColor: string;
  modules: Module[];
}

export const moduleLevels: ModuleLevel[] = [
  {
    level: 'Débutant',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/30',
    modules: [
      {
        id: 'intro-cyber',
        number: '1.1',
        title: 'Introduction à la Cybersécurité',
        description: 'Découvrez les bases de la cybersécurité, le modèle CIA, les types d\'attaques et les différents profils de hackers.',
        level: 'Débutant',
        duration: '5-7 heures',
        prerequisites: 'Aucun',
        href: '/modules/debutant/intro-cyber',
        available: true,
      },
      {
        id: 'reseaux',
        number: '1.2',
        title: 'Bases de l\'Informatique et des Réseaux',
        description: 'Comprenez comment fonctionnent les réseaux, les protocoles TCP/IP, DNS, HTTP et les fondamentaux de l\'infrastructure.',
        level: 'Débutant',
        duration: '6-8 heures',
        prerequisites: 'Module 1.1',
        href: '/modules/debutant/reseaux',
        available: false,
      },
      {
        id: 'linux-kali',
        number: '1.3',
        title: 'Linux pour la Cybersécurité (inclut Kali)',
        description: 'Maîtrisez les commandes Linux essentielles et découvrez l\'environnement Kali Linux avec ses outils intégrés.',
        level: 'Débutant',
        duration: '8-10 heures',
        prerequisites: 'Module 1.2',
        href: '/modules/debutant/linux-kali',
        available: false,
      },
      {
        id: 'securite-basique',
        number: '1.4',
        title: 'Sécurité du Quotidien',
        description: 'Protégez votre vie numérique : mots de passe, 2FA, VPN, mises à jour et bonnes pratiques au quotidien.',
        level: 'Débutant',
        duration: '3-4 heures',
        prerequisites: 'Module 1.1',
        href: '/modules/debutant/securite-basique',
        available: false,
      },
    ],
  },
  {
    level: 'Intermédiaire',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/30',
    modules: [
      {
        id: 'osint',
        number: '2.1',
        title: 'Reconnaissance & OSINT',
        description: 'Apprenez à collecter des informations publiques sur une cible avec des outils comme Maltego, theHarvester et Shodan.',
        level: 'Intermédiaire',
        duration: '6-8 heures',
        prerequisites: 'Niveau Débutant complet',
        href: '/modules/intermediaire/osint',
        available: false,
      },
      {
        id: 'scanning',
        number: '2.2',
        title: 'Scanning & Énumération',
        description: 'Découvrez Nmap, Masscan et les techniques d\'énumération pour cartographier un réseau cible.',
        level: 'Intermédiaire',
        duration: '7-9 heures',
        prerequisites: 'Module 2.1',
        href: '/modules/intermediaire/scanning',
        available: false,
      },
      {
        id: 'web-security',
        number: '2.3',
        title: 'Sécurité Web (OWASP Top 10)',
        description: 'Maîtrisez les 10 vulnérabilités web les plus critiques : SQLi, XSS, CSRF, IDOR et bien plus.',
        level: 'Intermédiaire',
        duration: '10-12 heures',
        prerequisites: 'Module 2.2',
        href: '/modules/intermediaire/web-security',
        available: false,
      },
      {
        id: 'crypto',
        number: '2.4',
        title: 'Cryptographie & Chiffrement',
        description: 'Comprenez le chiffrement symétrique, asymétrique, les hash, TLS/SSL et leur application en sécurité.',
        level: 'Intermédiaire',
        duration: '6-8 heures',
        prerequisites: 'Module 1.2',
        href: '/modules/intermediaire/crypto',
        available: false,
      },
      {
        id: 'wifi',
        number: '2.5',
        title: 'WiFi & Réseaux sans fil',
        description: 'Analysez la sécurité des réseaux WiFi, WPA2/WPA3, les attaques courantes et comment s\'en protéger.',
        level: 'Intermédiaire',
        duration: '7-9 heures',
        prerequisites: 'Module 1.3',
        href: '/modules/intermediaire/wifi',
        available: false,
      },
      {
        id: 'malware',
        number: '2.6',
        title: 'Malware & Reverse Engineering',
        description: 'Analysez des malwares réels, comprenez leur fonctionnement et apprenez les bases du reverse engineering.',
        level: 'Intermédiaire',
        duration: '10-14 heures',
        prerequisites: 'Module 1.3',
        href: '/modules/intermediaire/malware',
        available: false,
      },
    ],
  },
  {
    level: 'Avancé',
    color: 'text-red-400',
    bgColor: 'bg-red-400/10',
    borderColor: 'border-red-400/30',
    modules: [
      {
        id: 'pentest',
        number: '3.1',
        title: 'Pentest & Exploitation',
        description: 'Réalisez des tests d\'intrusion complets avec Metasploit, Burp Suite et les méthodologies professionnelles.',
        level: 'Avancé',
        duration: '15-20 heures',
        prerequisites: 'Niveau Intermédiaire complet',
        href: '/modules/avance/pentest',
        available: false,
      },
      {
        id: 'post-exploitation',
        number: '3.2',
        title: 'Post-Exploitation & Persistance',
        description: 'Maîtrisez les techniques de maintien d\'accès, pivoting, exfiltration de données et couverture des traces.',
        level: 'Avancé',
        duration: '12-15 heures',
        prerequisites: 'Module 3.1',
        href: '/modules/avance/post-exploitation',
        available: false,
      },
      {
        id: 'blue-team',
        number: '3.3',
        title: 'Blue Team & Défense (SOC, SIEM)',
        description: 'Construisez et gérez un SOC, configurez un SIEM, analysez les logs et répondez aux incidents.',
        level: 'Avancé',
        duration: '12-15 heures',
        prerequisites: 'Module 2.3',
        href: '/modules/avance/blue-team',
        available: false,
      },
      {
        id: 'forensics',
        number: '3.4',
        title: 'Forensics & Analyse d\'Incidents',
        description: 'Analysez des systèmes compromis, récupérez des preuves numériques et rédigez des rapports d\'incidents.',
        level: 'Avancé',
        duration: '10-12 heures',
        prerequisites: 'Module 3.3',
        href: '/modules/avance/forensics',
        available: false,
      },
      {
        id: 'cloud-security',
        number: '3.5',
        title: 'Sécurité Cloud',
        description: 'Sécurisez les environnements AWS, Azure et GCP. IAM, misconfiguration, threat detection dans le cloud.',
        level: 'Avancé',
        duration: '12-15 heures',
        prerequisites: 'Module 3.1',
        href: '/modules/avance/cloud-security',
        available: false,
      },
      {
        id: 'gouvernance',
        number: '3.6',
        title: 'Gouvernance, Risques & Conformité',
        description: 'ISO 27001, RGPD, NIST Framework, gestion des risques et politiques de sécurité en entreprise.',
        level: 'Avancé',
        duration: '8-10 heures',
        prerequisites: 'Module 3.3',
        href: '/modules/avance/gouvernance',
        available: false,
      },
    ],
  },
];

export const allModules = moduleLevels.flatMap(l => l.modules);

export function getModuleByHref(href: string) {
  return allModules.find(m => m.href === href);
}

export function getAdjacentModules(href: string) {
  const index = allModules.findIndex(m => m.href === href);
  return {
    prev: index > 0 ? allModules[index - 1] : null,
    next: index < allModules.length - 1 ? allModules[index + 1] : null,
  };
}
