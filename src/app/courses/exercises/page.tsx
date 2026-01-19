
'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, Circle, Info, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function ExercisesPage() {
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('completedExercises');
    if (saved) {
      setCompletedExercises(JSON.parse(saved));
    }
  }, []);

  const toggleExercise = (id: string) => {
    const newCompleted = completedExercises.includes(id)
      ? completedExercises.filter(e => e !== id)
      : [...completedExercises, id];
    
    setCompletedExercises(newCompleted);
    localStorage.setItem('completedExercises', JSON.stringify(newCompleted));
  };

  const exercises = [
    {
      id: 'ex1',
      title: 'Scanner un réseau local',
      difficulty: 'Débutant',
      time: '15 minutes',
      objectives: [
        'Identifier votre plage d\'adresses IP',
        'Utiliser nmap pour découvrir les hôtes actifs',
        'Lister tous les appareils connectés',
        'Identifier les services ouverts sur un hôte'
      ],
      steps: [
        'Ouvrez un terminal dans Kali Linux',
        'Identifiez votre adresse IP avec `ip addr` ou `ifconfig`',
        'Lancez un scan ping : `sudo nmap -sn 192.168.1.0/24`',
        'Notez les adresses IP découvertes',
        'Scannez un hôte spécifique : `sudo nmap -sV 192.168.1.1`',
        'Analysez les résultats : ports ouverts, services, versions'
      ],
      validation: [
        'Vous avez identifié au moins 3 appareils sur le réseau',
        'Vous avez listé les ports ouverts d\'au moins un appareil',
        'Vous comprenez la différence entre un scan ping et un scan de ports'
      ]
    },
    {
      id: 'ex2',
      title: 'Capturer et analyser du trafic avec Wireshark',
      difficulty: 'Débutant',
      time: '20 minutes',
      objectives: [
        'Lancer Wireshark et sélectionner une interface',
        'Capturer du trafic ICMP (ping)',
        'Appliquer des filtres',
        'Analyser les paquets capturés'
      ],
      steps: [
        'Lancez Wireshark : `sudo wireshark`',
        'Sélectionnez votre interface réseau (eth0, wlan0)',
        'Cliquez sur "Start" pour commencer la capture',
        'Dans un nouveau terminal, faites un ping : `ping -c 10 8.8.8.8`',
        'Dans Wireshark, appliquez le filtre : `icmp`',
        'Analysez les paquets Echo Request et Echo Reply',
        'Examinez les détails : TTL, sequence number, temps de réponse',
        'Arrêtez la capture et sauvegardez le fichier'
      ],
      validation: [
        'Vous avez capturé au moins 10 paquets ICMP',
        'Vous comprenez la différence entre Echo Request et Echo Reply',
        'Vous savez appliquer des filtres de base dans Wireshark'
      ]
    },
    {
      id: 'ex3',
      title: 'Scanner les réseaux Wi-Fi',
      difficulty: 'Intermédiaire',
      time: '25 minutes',
      objectives: [
        'Activer le mode monitor sur votre carte Wi-Fi',
        'Scanner les réseaux Wi-Fi environnants',
        'Identifier les types de chiffrement',
        'Analyser la puissance du signal'
      ],
      steps: [
        'Vérifiez votre interface Wi-Fi : `sudo airmon-ng`',
        'Arrêtez les processus interférents : `sudo airmon-ng check kill`',
        'Activez le mode monitor : `sudo airmon-ng start wlan0`',
        'Vérifiez l\'activation : `iwconfig` (devrait afficher wlan0mon)',
        'Lancez le scan : `sudo airodump-ng wlan0mon`',
        'Observez les réseaux détectés : BSSID, canal, chiffrement, ESSID',
        'Notez les différents types de chiffrement (WPA2, WPA3, WEP)',
        'Arrêtez avec Ctrl+C et désactivez le mode monitor : `sudo airmon-ng stop wlan0mon`'
      ],
      validation: [
        'Vous avez activé le mode monitor avec succès',
        'Vous avez identifié au moins 5 réseaux Wi-Fi',
        'Vous comprenez les différences entre WPA2, WPA3 et WEP',
        'Vous avez désactivé le mode monitor correctement'
      ]
    },
    {
      id: 'ex4',
      title: 'Capturer un handshake WPA2',
      difficulty: 'Intermédiaire',
      time: '30 minutes',
      objectives: [
        'Capturer un handshake WPA2 sur votre propre réseau',
        'Comprendre le processus de capture',
        'Vérifier la validité du handshake'
      ],
      steps: [
        'Activez le mode monitor : `sudo airmon-ng start wlan0`',
        'Scannez les réseaux : `sudo airodump-ng wlan0mon`',
        'Identifiez VOTRE réseau (BSSID et canal)',
        'Lancez la capture ciblée : `sudo airodump-ng -c [CANAL] --bssid [BSSID] -w handshake wlan0mon`',
        'Attendez qu\'un appareil se connecte (ou reconnectez un de vos appareils)',
        'Observez le message "WPA handshake" en haut à droite',
        'Arrêtez la capture avec Ctrl+C',
        'Vérifiez le handshake : `aircrack-ng handshake-01.cap`'
      ],
      validation: [
        'Vous avez capturé un handshake valide',
        'Le fichier .cap contient bien le handshake (vérifié avec aircrack-ng)',
        'Vous comprenez pourquoi le handshake est nécessaire pour le cracking'
      ]
    },
    {
      id: 'ex5',
      title: 'Tenter de cracker WPA2 (réseau de test)',
      difficulty: 'Avancé',
      time: '45 minutes',
      objectives: [
        'Utiliser aircrack-ng avec une wordlist',
        'Comprendre le processus de cracking',
        'Analyser les résultats'
      ],
      steps: [
        'Assurez-vous d\'avoir un handshake capturé (exercice précédent)',
        'Localisez rockyou.txt : `locate rockyou.txt`',
        'Décompressez si nécessaire : `sudo gunzip /usr/share/wordlists/rockyou.txt.gz`',
        'Lancez aircrack-ng : `sudo aircrack-ng -w /usr/share/wordlists/rockyou.txt -b [BSSID] handshake-01.cap`',
        'Observez la progression du cracking',
        'Si le mot de passe est trouvé, notez-le',
        'Si non trouvé, essayez avec une wordlist plus petite ou créez-en une personnalisée'
      ],
      validation: [
        'Vous avez lancé aircrack-ng avec succès',
        'Vous comprenez pourquoi certains mots de passe sont trouvés et d\'autres non',
        'Vous réalisez l\'importance d\'un mot de passe fort'
      ]
    },
    {
      id: 'ex6',
      title: 'Analyser WPA3 dans Wireshark',
      difficulty: 'Avancé',
      time: '30 minutes',
      objectives: [
        'Capturer du trafic WPA3',
        'Observer le protocole SAE',
        'Comparer avec WPA2'
      ],
      steps: [
        'Activez le mode monitor : `sudo airmon-ng start wlan0`',
        'Identifiez un réseau WPA3 : `sudo airodump-ng wlan0mon`',
        'Capturez le trafic : `sudo airodump-ng -c [CANAL] --bssid [BSSID] -w wpa3 wlan0mon`',
        'Attendez qu\'un appareil se connecte',
        'Ouvrez la capture dans Wireshark : `wireshark wpa3-01.cap`',
        'Appliquez le filtre : `wlan.fc.type_subtype == 0x0b`',
        'Observez les trames SAE (commit et confirm)',
        'Comparez avec une capture WPA2 (4-way handshake)'
      ],
      validation: [
        'Vous avez capturé des trames SAE',
        'Vous comprenez la différence entre SAE et le 4-way handshake',
        'Vous réalisez pourquoi WPA3 est plus sécurisé'
      ]
    }
  ];

  const completionRate = Math.round((completedExercises.length / exercises.length) * 100);

  return (
    <CourseLayout title="Exercices pratiques">
      <div className="space-y-8">
        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Mettez en pratique vos connaissances avec ces exercices progressifs. 
            Chaque exercice est conçu pour renforcer votre compréhension des concepts 
            vus dans les cours précédents.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Votre progression
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{completedExercises.length} / {exercises.length} exercices complétés</span>
                  <span className="font-semibold">{completionRate}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${completionRate}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Conseil :</strong> Suivez les exercices dans l'ordre. Chaque exercice 
              s'appuie sur les compétences acquises dans les précédents.
            </AlertDescription>
          </Alert>
        </section>

        {/* Liste des exercices */}
        <section className="space-y-6">
          {exercises.map((exercise, index) => {
            const isCompleted = completedExercises.includes(exercise.id);
            const difficultyColor = 
              exercise.difficulty === 'Débutant' ? 'text-green-600' :
              exercise.difficulty === 'Intermédiaire' ? 'text-orange-600' :
              'text-red-600';

            return (
              <Card key={exercise.id} className={isCompleted ? 'border-green-600' : ''}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="mt-1">
                        {isCompleted ? (
                          <CheckCircle2 className="h-6 w-6 text-green-600" />
                        ) : (
                          <Circle className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          Exercice {index + 1} : {exercise.title}
                        </CardTitle>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className={difficultyColor}>
                            {exercise.difficulty}
                          </span>
                          <span>⏱️ {exercise.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={isCompleted}
                        onCheckedChange={() => toggleExercise(exercise.id)}
                      />
                      <span className="text-sm text-muted-foreground">Terminé</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Objectifs :</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exercise.objectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Étapes à suivre :</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                      {exercise.steps.map((step, i) => (
                        <li key={i} className="ml-2">{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Validation :</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {exercise.validation.map((val, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>{val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Conseils généraux */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Conseils pour réussir</h2>
          
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Prenez votre temps</strong> : Ne vous précipitez pas. Comprenez chaque étape avant de passer à la suivante.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Documentez vos résultats</strong> : Prenez des notes, faites des captures d'écran. Cela vous aidera à réviser.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Utilisez uniquement vos propres réseaux</strong> : Ne testez jamais ces techniques sur des réseaux qui ne vous appartiennent pas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Lisez les messages d'erreur</strong> : Ils contiennent souvent la solution au problème.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Expérimentez</strong> : N'hésitez pas à modifier les commandes pour voir ce qui se passe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Consultez la documentation</strong> : Utilisez `man nmap`, `man aircrack-ng`, etc. pour plus d'informations.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/courses/wpa3">
              ← Précédent : Comprendre WPA3
            </Link>
          </Button>
          <Button asChild>
            <Link href="/courses/resources">
              Suivant : Ressources →
            </Link>
          </Button>
        </div>
      </div>
    </CourseLayout>
  );
}
