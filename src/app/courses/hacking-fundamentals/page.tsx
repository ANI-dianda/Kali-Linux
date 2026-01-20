'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Shield, 
  Zap, 
  Target, 
  Bug, 
  Lock, 
  Network, 
  Users, 
  Scale,
  AlertTriangle,
  Info,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HackingFundamentalsPage() {
  const chapters = [
    {
      id: 1,
      title: "Qu'est-ce que le Hacking ?",
      icon: Shield,
      level: "Débutant",
      content: {
        intro: "Le hacking est l'art d'exploiter les failles d'un système informatique pour accéder à des données ou perturber un service.",
        details: [
          "Motivations diverses : curiosité, défi technique, espionnage, vol d'informations, activisme",
          "Distinction entre hackers éthiques (white hat) et malveillants (black hat)",
          "Impact direct sur la société et les services vitaux"
        ],
        example: {
          title: "Cas réel : WannaCry (2017)",
          description: "Cette attaque a paralysé des hôpitaux en Europe en exploitant une faille Windows, montrant l'impact direct sur des services vitaux."
        }
      }
    },
    {
      id: 2,
      title: "Types d'attaques",
      icon: Target,
      level: "Débutant",
      content: {
        intro: "Les attaques informatiques se classent selon leur approche et leur méthode d'exécution.",
        details: [
          "<strong>Attaques directes</strong> : Ciblage frontal d'un serveur ou réseau",
          "<strong>Attaques indirectes par rebond</strong> : Utilisation d'un système intermédiaire pour masquer l'identité",
          "<strong>Attaques indirectes par réponse</strong> : Exploitation des réactions d'un système pour le perturber"
        ],
        example: {
          title: "Cas réel : Attaque DDoS contre GitHub (2018)",
          description: "Utilisation de milliers de serveurs tiers pour saturer le site, illustrant la puissance des attaques indirectes par rebond."
        }
      }
    },
    {
      id: 3,
      title: "Techniques d'attaque courantes",
      icon: Zap,
      level: "Intermédiaire",
      content: {
        intro: "Les pirates disposent d'un arsenal varié de techniques pour compromettre les systèmes.",
        details: [
          "<strong>Bombes logicielles</strong> : Déclenchées à une date précise",
          "<strong>Chevaux de Troie</strong> : Se déguisent en logiciels utiles",
          "<strong>Mail bombing</strong> : Saturation d'une boîte de réception",
          "<strong>Ping of death</strong> : Envoi de paquets trop volumineux",
          "<strong>Buffer overflow</strong> : Exploitation d'une mauvaise gestion de mémoire"
        ],
        example: {
          title: "Cas réel : Cheval de Troie Zeus",
          description: "A infecté des millions d'ordinateurs pour voler des données bancaires, illustrant la dangerosité de ces méthodes."
        }
      }
    },
    {
      id: 4,
      title: "Malwares et logiciels malveillants",
      icon: Bug,
      level: "Intermédiaire",
      content: {
        intro: "Les malwares constituent une menace majeure pour la sécurité informatique.",
        details: [
          "<strong>Virus</strong> : S'insèrent dans des fichiers exécutables",
          "<strong>Vers</strong> : Se propagent automatiquement via les réseaux",
          "<strong>Keyloggers</strong> : Enregistrent les frappes clavier",
          "<strong>Spywares</strong> : Collectent des données personnelles",
          "<strong>Vecteurs de diffusion</strong> : E-mails, téléchargements, failles réseau"
        ],
        example: {
          title: "Cas réel : Ver ILOVEYOU (2000)",
          description: "A infecté des millions de machines via un simple e-mail, provoquant des pertes financières et techniques considérables."
        }
      }
    },
    {
      id: 5,
      title: "Cryptographie et chiffrement",
      icon: Lock,
      level: "Avancé",
      content: {
        intro: "La cryptographie protège les données et communications grâce à différentes méthodes de chiffrement.",
        details: [
          "<strong>Chiffrement symétrique</strong> : Une seule clé (ex: AES)",
          "<strong>Chiffrement asymétrique</strong> : Paire de clés publique/privée (ex: RSA)",
          "<strong>Fonctions de hachage</strong> : Garantissent l'intégrité (ex: SHA-256)",
          "<strong>Applications</strong> : Sécurisation des échanges numériques"
        ],
        example: {
          title: "Application pratique : SSL/TLS",
          description: "Les transactions bancaires en ligne utilisent SSL/TLS pour protéger les informations des clients, évitant le vol de données sensibles."
        }
      }
    },
    {
      id: 6,
      title: "Sécurité des systèmes et réseaux",
      icon: Network,
      level: "Avancé",
      content: {
        intro: "La sécurité repose sur une combinaison d'outils et de bonnes pratiques.",
        details: [
          "<strong>Pare-feu</strong> : Filtrent les connexions",
          "<strong>NAT</strong> : Masque les adresses internes",
          "<strong>Authentification</strong> : Mots de passe ou biométrie",
          "<strong>IDS (Intrusion Detection System)</strong> : Surveillance des activités suspectes (ex: Snort)",
          "<strong>Sauvegardes</strong> : Protection contre la perte de données"
        ],
        example: {
          title: "Cas réel : Intrusion Yahoo (2014)",
          description: "Yahoo a détecté une intrusion massive grâce à ses systèmes de surveillance, limitant les dégâts d'une fuite de données."
        }
      }
    },
    {
      id: 7,
      title: "Ingénierie sociale",
      icon: Users,
      level: "Intermédiaire",
      content: {
        intro: "L'ingénierie sociale exploite la faiblesse humaine plutôt que les failles techniques.",
        details: [
          "<strong>Phishing</strong> : Faux e-mails pour voler des informations",
          "<strong>Usurpation téléphonique</strong> : Se faire passer pour une personne de confiance",
          "<strong>Manipulation directe</strong> : Exploitation de la confiance",
          "<strong>Prétexte</strong> : Création de scénarios crédibles"
        ],
        example: {
          title: "Cas réel : Attaque RSA (2011)",
          description: "Des employés ont cliqué sur un e-mail piégé, entraînant une fuite de données stratégiques. Montre l'importance de la vigilance humaine."
        }
      }
    },
    {
      id: 8,
      title: "Aspects légaux et audits",
      icon: Scale,
      level: "Avancé",
      content: {
        intro: "La sécurité implique aussi des aspects juridiques et organisationnels.",
        details: [
          "<strong>Respect des licences</strong> : Conformité logicielle",
          "<strong>Audits de sécurité</strong> : Identification des failles (méthode FEROS)",
          "<strong>Procédures légales</strong> : Réponse aux incidents",
          "<strong>Conformité réglementaire</strong> : RGPD, ISO 27001"
        ],
        example: {
          title: "Cas réel : Sony Pictures (2014)",
          description: "Après l'attaque, Sony a dû engager des poursuites judiciaires et renforcer ses audits pour regagner la confiance."
        }
      }
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-800";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
      case "Avancé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <CourseLayout title="Fondamentaux du Hacking">
      <div className="space-y-8">
        {/* Introduction */}
        <section className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Objectif pédagogique :</strong> Ce cours présente les concepts fondamentaux du hacking 
              à des fins éducatives et de sensibilisation à la cybersécurité. Toutes les techniques présentées 
              doivent être utilisées de manière éthique et légale.
            </AlertDescription>
          </Alert>
          
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Avertissement :</strong> L'utilisation malveillante de ces connaissances est illégale 
              et peut entraîner des poursuites judiciaires. Respectez toujours les lois en vigueur.
            </AlertDescription>
          </Alert>
        </section>

        {/* Chapitres */}
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          return (
            <section key={chapter.id} className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">
                          Chapitre {chapter.id} - {chapter.title}
                        </CardTitle>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(chapter.level)}`}>
                      {chapter.level}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    {chapter.content.intro}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Points clés :</h4>
                    <ul className="space-y-2">
                      {chapter.content.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm" dangerouslySetInnerHTML={{ __html: detail }} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <ExternalLink className="h-5 w-5" />
                        {chapter.content.example.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {chapter.content.example.description}
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </section>
          );
        })}

        {/* Conclusion */}
        <section className="space-y-4">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Conclusion générale
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Le hacking est un phénomène global qui combine des techniques informatiques variées, 
                des malwares puissants, des méthodes de manipulation humaine et des enjeux légaux. 
                La société est directement impactée par ces pratiques, comme le prouvent les attaques 
                contre des hôpitaux, des entreprises ou des institutions financières.
              </p>
              
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Les clés de la protection :</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Prévention</strong> : Mise en place de mesures proactives</li>
                  <li>• <strong>Cryptographie</strong> : Protection des données sensibles</li>
                  <li>• <strong>Audits réguliers</strong> : Évaluation continue de la sécurité</li>
                  <li>• <strong>Sensibilisation</strong> : Formation des utilisateurs</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/courses/introduction">
              ← Précédent : Introduction à Kali Linux
            </Link>
          </Button>
          <Button asChild>
            <Link href="/courses/network-testing">
              Suivant : Tester son réseau →
            </Link>
          </Button>
        </div>
      </div>
    </CourseLayout>
  );
}