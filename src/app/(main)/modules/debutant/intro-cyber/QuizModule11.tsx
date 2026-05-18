'use client';

import { Quiz } from '@/components/Quiz';

const questions = [
  {
    question: 'Quelle est la bonne définition de la Confidentialité dans le modèle CIA ?',
    options: [
      'Garantir que le service reste accessible en permanence',
      'Empêcher les personnes non autorisées d\'accéder aux données',
      'S\'assurer que les données ne sont pas modifiées',
      'Chiffrer toutes les communications réseau',
    ],
    correctAnswer: 1,
    explanation: 'La Confidentialité vise à empêcher l\'accès non autorisé aux données. C\'est le "C" du CIA Triad.',
  },
  {
    question: 'Un ransomware attaque principalement quel pilier du CIA Triad ?',
    options: [
      'Confidentialité uniquement',
      'Disponibilité uniquement',
      'Intégrité et Disponibilité',
      'Les trois piliers simultanément',
    ],
    correctAnswer: 2,
    explanation: 'Un ransomware chiffre les fichiers (atteinte à l\'Intégrité) et les rend inaccessibles (atteinte à la Disponibilité).',
  },
  {
    question: 'Quelle est la principale différence entre un White Hat et un Black Hat ?',
    options: [
      'Le White Hat utilise des outils plus avancés',
      'Le Black Hat travaille toujours seul',
      'Le White Hat agit de manière éthique et légale, le Black Hat a des intentions malveillantes',
      'Le White Hat ne peut pas pirater des systèmes',
    ],
    correctAnswer: 2,
    explanation: 'La différence fondamentale est l\'intention et le cadre légal. Le White Hat a une autorisation explicite pour tester les systèmes.',
  },
  {
    question: 'Quel type d\'attaque représente 90% des incidents de cybersécurité selon les statistiques ?',
    options: [
      'DDoS',
      'Ransomware',
      'Phishing',
      'Malware',
    ],
    correctAnswer: 2,
    explanation: 'Le phishing est le vecteur d\'attaque le plus courant. La plupart des cyberattaques commencent par un email frauduleux.',
  },
  {
    question: 'Combien de professionnels en cybersécurité manquent dans le monde en 2026 ?',
    options: [
      'Plus de 400 000',
      'Plus de 4 millions',
      'Plus de 40 000',
      'Plus de 400 millions',
    ],
    correctAnswer: 1,
    explanation: 'Il manque plus de 4 millions de professionnels en cybersécurité dans le monde, ce qui représente une énorme opportunité de carrière.',
  },
];

export function QuizModule11() {
  return (
    <Quiz
      quizId="module-1-1"
      title="Quiz — Module 1.1 : Introduction à la Cybersécurité"
      questions={questions}
    />
  );
}
