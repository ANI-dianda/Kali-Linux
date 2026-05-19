'use client';

import { Quiz } from '@/components/Quiz';

const questions = [
  {
    question: 'Quel composant matériel est particulièrement ciblé par les attaques Spectre et Meltdown ?',
    options: [
      'La carte réseau (NIC)',
      'Le disque dur / SSD',
      'Le CPU (processeur)',
      'La RAM',
    ],
    correctAnswer: 2,
    explanation: 'Spectre et Meltdown sont des vulnérabilités side-channel qui exploitent des failles dans l\'architecture des processeurs modernes (CPU).',
  },
  {
    question: 'Dans le modèle OSI, sur quelle couche opère le protocole TCP ?',
    options: [
      'Couche 3 — Réseau',
      'Couche 4 — Transport',
      'Couche 5 — Session',
      'Couche 7 — Application',
    ],
    correctAnswer: 1,
    explanation: 'TCP opère sur la couche 4 (Transport). Il gère la fiabilité de la transmission et les numéros de ports.',
  },
  {
    question: 'Quel port est associé au protocole SSH (administration Linux à distance) ?',
    options: [
      'Port 80',
      'Port 443',
      'Port 22',
      'Port 3389',
    ],
    correctAnswer: 2,
    explanation: 'Le port 22 est le port par défaut de SSH. Le port 3389 est RDP (Windows), 80 est HTTP, 443 est HTTPS.',
  },
  {
    question: 'Qu\'est-ce qu\'une attaque ARP Poisoning ?',
    options: [
      'Saturer un serveur avec des milliers de requêtes',
      'Intercepter des données en se faisant passer pour le routeur sur un réseau local',
      'Chiffrer les fichiers d\'une victime pour demander une rançon',
      'Envoyer de faux emails pour voler des identifiants',
    ],
    correctAnswer: 1,
    explanation: 'L\'ARP Poisoning (couche 2) consiste à envoyer de fausses réponses ARP pour associer l\'adresse MAC de l\'attaquant à l\'IP du routeur, permettant d\'intercepter le trafic.',
  },
  {
    question: 'Quelle est la différence principale entre TCP et UDP ?',
    options: [
      'TCP est plus rapide, UDP est plus fiable',
      'TCP garantit la livraison des données, UDP est rapide mais sans garantie',
      'UDP utilise le chiffrement, TCP non',
      'TCP est utilisé uniquement pour le Wi-Fi',
    ],
    correctAnswer: 1,
    explanation: 'TCP établit une connexion (handshake 3 temps) et garantit la livraison. UDP est sans connexion, plus rapide, utilisé pour le streaming, DNS, jeux en ligne.',
  },
  {
    question: 'Pourquoi le protocole DNS est-il souvent ciblé par les attaquants ?',
    options: [
      'Car il chiffre toutes les communications',
      'Car il traduit les noms de domaine en IP et peut être manipulé pour rediriger les utilisateurs',
      'Car il gère les mots de passe des utilisateurs',
      'Car il est uniquement utilisé sur Windows',
    ],
    correctAnswer: 1,
    explanation: 'Le DNS traduit google.com en adresse IP. En le manipulant (DNS Spoofing), un attaquant peut rediriger les victimes vers de faux sites.',
  },
];

export function QuizModule12() {
  return (
    <Quiz
      quizId="module-1-2"
      title="Quiz — Module 1.2 : Bases de l'Informatique et des Réseaux"
      questions={questions}
    />
  );
}
