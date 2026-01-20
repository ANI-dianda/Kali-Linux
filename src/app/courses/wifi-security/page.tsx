'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  Shield, 
  AlertTriangle, 
  Terminal, 
  Lock, 
  Unlock,
  Radio,
  Network,
  Key,
  Zap,
  Eye,
  CheckCircle2,
  XCircle,
  Info,
  Code
} from "lucide-react";
import Link from "next/link";

export default function WiFiSecurityPage() {
  const sections = [
    {
      id: 1,
      title: "Introduction aux Réseaux Wi-Fi",
      icon: Radio,
      content: {
        intro: "Comprendre les fondamentaux du Wi-Fi pour mieux le sécuriser",
        subsections: [
          {
            title: "Qu'est-ce que le Wi-Fi ?",
            content: "Le Wi-Fi (Wireless Fidelity) est une technologie qui permet aux appareils de communiquer sans fil en utilisant des ondes radio. Contrairement au câblage Ethernet, les signaux Wi-Fi peuvent traverser les murs et être captés par n'importe qui à portée, ce qui rend la sécurité cruciale."
          },
          {
            title: "Les Fréquences Wi-Fi",
            content: "Trois bandes principales : 2.4 GHz (grande portée, interférences), 5 GHz (débit élevé, portée réduite), 6 GHz (très haut débit, équipements récents requis)"
          }
        ]
      }
    },
    {
      id: 2,
      title: "Théorie de la Sécurité Wi-Fi",
      icon: Shield,
      content: {
        intro: "Comment fonctionne le chiffrement Wi-Fi et pourquoi certaines méthodes sont vulnérables",
        subsections: [
          {
            title: "WEP (1997) - TOTALEMENT COMPROMIS",
            content: "Utilise RC4 avec clé statique. Vecteur d'initialisation trop petit (24 bits). Crackable en quelques minutes avec Aircrack-ng.",
            status: "danger"
          },
          {
            title: "WPA (2003) - VULNÉRABLE", 
            content: "Protocole TKIP, clés dynamiques. Vulnérable aux attaques Beck-Tews (15 minutes) et Ohigashi-Morii.",
            status: "warning"
          },
          {
            title: "WPA2 (2004) - BONNE SÉCURITÉ",
            content: "Basé sur CCMP/AES-128. Vulnérable à KRACK (2017) et PMKID cracking (2018).",
            status: "success"
          },
          {
            title: "WPA3 (2018) - EXCELLENTE SÉCURITÉ",
            content: "SAE (résistant aux attaques offline), Protected Management Frames, Forward Secrecy.",
            status: "success"
          }
        ]
      }
    },
    {
      id: 3,
      title: "Protocoles et Normes Détaillés",
      icon: Network,
      content: {
        intro: "Comprendre en profondeur les protocoles WPA2, WPA3 et leurs variantes",
        subsections: [
          {
            title: "WPA2-Personal vs Enterprise",
            content: "Personal : mot de passe partagé (8-63 caractères). Enterprise : serveur RADIUS (802.1X), chaque utilisateur a ses identifiants."
          },
          {
            title: "WPA3 : La Nouvelle Génération",
            content: "SAE remplace PSK, PMF chiffre les trames de gestion, Forward Secrecy protège les communications passées."
          },
          {
            title: "WPS : La Faiblesse Cachée",
            content: "Code PIN de seulement 7 chiffres significatifs, vérification séparée des deux moitiés. Attaque brute-force en quelques heures.",
            status: "danger"
          }
        ]
      }
    },
    {
      id: 4,
      title: "Outils de Test et d'Audit Wi-Fi",
      icon: Terminal,
      content: {
        intro: "Maîtrisez les outils professionnels pour tester la sécurité de vos réseaux",
        subsections: [
          {
            title: "Airmon-ng : Mode Monitor",
            content: "Passage en mode monitor pour capturer tous les paquets Wi-Fi environnants.",
            commands: [
              "airmon-ng start wlan0",
              "airmon-ng stop wlan0mon"
            ]
          },
          {
            title: "Airodump-ng : Scanner les Réseaux", 
            content: "Découverte et analyse des réseaux Wi-Fi disponibles.",
            commands: [
              "airodump-ng wlan0mon",
              "airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon"
            ]
          },
          {
            title: "hcxdumptool : Capture Avancée",
            content: "Outil moderne pour capturer handshakes et PMKID.",
            commands: [
              "hcxdumptool -i wlan0mon -o capture.pcapng",
              "hcxdumptool -i wlan0mon -o capture.pcapng --enable_status=1"
            ]
          },
          {
            title: "Hashcat : Craquage des Mots de Passe",
            content: "Conversion et craquage des captures.",
            commands: [
              "hcxpcaptool -o capture.16800 capture.pcapng",
              "hashcat -m 16800 capture.16800 /usr/share/wordlists/rockyou.txt"
            ]
          }
        ]
      }
    },
    {
      id: 5,
      title: "Les Attaques Wi-Fi (Éducatif)",
      icon: Zap,
      content: {
        intro: "Comprendre les techniques d'attaque pour mieux se défendre",
        subsections: [
          {
            title: "Attaque par Force Brute / Dictionnaire",
            content: "Capture du handshake/PMKID puis test de mots de passe depuis une wordlist. Efficace contre les mots de passe faibles.",
            defense: "Mot de passe fort (16+ caractères), WPA3, éviter les mots courants"
          },
          {
            title: "Attaque par Déauthentification",
            content: "Envoi de paquets de déauthentification pour déconnecter les clients et capturer le handshake lors de la reconnexion.",
            defense: "Activer PMF (Protected Management Frames), WPA3"
          },
          {
            title: "Attaque WPS",
            content: "Exploitation de la vulnérabilité du PIN WPS (10,000 combinaisons possibles).",
            defense: "Désactiver WPS complètement"
          }
        ]
      }
    },
    {
      id: 6,
      title: "Sécuriser son Réseau Wi-Fi",
      icon: Lock,
      content: {
        intro: "Guide complet pour protéger efficacement votre réseau sans fil",
        subsections: [
          {
            title: "Checklist de Sécurité de Base",
            items: [
              "WPA3-Personal ou WPA2-AES uniquement",
              "Mot de passe de 16+ caractères aléatoires", 
              "WPS désactivé",
              "SSID personnalisé",
              "Firmware du routeur à jour"
            ]
          },
          {
            title: "Sécurité Avancée",
            items: [
              "Réseau invité isolé",
              "Filtrage MAC (barrière supplémentaire)",
              "Réduire la puissance d'émission",
              "Segmenter les IoT sur un réseau séparé"
            ]
          }
        ]
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "danger": return "border-l-red-500 bg-red-50";
      case "warning": return "border-l-yellow-500 bg-yellow-50";
      case "success": return "border-l-green-500 bg-green-50";
      default: return "border-l-blue-500 bg-blue-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "danger": return <XCircle className="h-5 w-5 text-red-500" />;
      case "warning": return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "success": return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      default: return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <CourseLayout title="Sécurité WiFi - WPA2 & WPA3">
      <div className="space-y-8">
        {/* Avertissement légal */}
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>⚠️ AVERTISSEMENT LÉGAL IMPORTANT</strong><br/>
            Ce cours est à visée ÉDUCATIVE et DÉFENSIVE uniquement. L'utilisation de ces techniques sur des réseaux sans autorisation est ILLÉGALE. 
            Les sanctions peuvent inclure des amendes importantes et des poursuites pénales. Utilisez ces connaissances uniquement sur vos propres réseaux 
            ou réseaux pour lesquels vous avez une autorisation écrite explicite.
          </AlertDescription>
        </Alert>

        {/* Sections du cours */}
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <section key={section.id} className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">
                      {section.id}. {section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    {section.content.intro}
                  </p>

                  {section.content.subsections?.map((subsection, index) => (
                    <Card key={index} className={`border-l-4 ${getStatusColor(subsection.status || 'default')}`}>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          {subsection.status && getStatusIcon(subsection.status)}
                          <CardTitle className="text-lg">{subsection.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{subsection.content}</p>
                        
                        {subsection.commands && (
                          <div className="space-y-2">
                            <h5 className="font-semibold flex items-center gap-2">
                              <Terminal className="h-4 w-4" />
                              Commandes :
                            </h5>
                            {subsection.commands.map((cmd, cmdIndex) => (
                              <div key={cmdIndex} className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm">
                                <span className="text-gray-500">$ </span>{cmd}
                              </div>
                            ))}
                          </div>
                        )}

                        {subsection.defense && (
                          <Alert>
                            <Shield className="h-4 w-4" />
                            <AlertDescription>
                              <strong>Défense :</strong> {subsection.defense}
                            </AlertDescription>
                          </Alert>
                        )}
                      </CardContent>
                    </Card>
                  ))}

                  {section.content.subsections?.[0]?.items && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.content.subsections.map((subsection, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className="text-lg">{subsection.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {subsection.items?.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>
          );
        })}

        {/* Script d'audit */}
        <section className="space-y-4">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                7. Script Complet d'Audit Wi-Fi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>UTILISATION RESPONSABLE :</strong> Ce script est destiné à tester VOTRE PROPRE RÉSEAU 
                  ou un réseau pour lequel vous avez une autorisation écrite.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h4 className="font-semibold">Fonctionnalités du script :</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-4">
                      <h5 className="font-semibold mb-2">Vérifications</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Droits root</li>
                        <li>• Outils installés</li>
                        <li>• Interface Wi-Fi</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-4">
                      <h5 className="font-semibold mb-2">Fonctions</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Scanner les réseaux</li>
                        <li>• Capturer handshake</li>
                        <li>• Craquer mot de passe</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-h-64 overflow-y-auto">
                  <div className="text-gray-500"># Installation des outils</div>
                  <div>apt install aircrack-ng hcxdumptool hashcat</div>
                  <br/>
                  <div className="text-gray-500"># Activation mode monitor</div>
                  <div>airmon-ng start wlan0</div>
                  <br/>
                  <div className="text-gray-500"># Capture handshake</div>
                  <div>hcxdumptool -i wlan0mon -o capture.pcapng</div>
                  <br/>
                  <div className="text-gray-500"># Conversion et craquage</div>
                  <div>hcxpcaptool -o capture.16800 capture.pcapng</div>
                  <div>hashcat -m 16800 capture.16800 wordlist.txt</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recommandations finales */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              Recommandations Finales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Pour sécuriser :</h4>
                <ul className="space-y-1 text-sm">
                  <li>✅ Utilisez WPA3 si possible</li>
                  <li>✅ Mot de passe fort (16+ caractères)</li>
                  <li>✅ Désactivez WPS</li>
                  <li>✅ Mettez à jour le firmware</li>
                  <li>✅ Activez PMF</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">À éviter :</h4>
                <ul className="space-y-1 text-sm">
                  <li>❌ WEP (totalement compromis)</li>
                  <li>❌ WPS activé</li>
                  <li>❌ Mots de passe faibles</li>
                  <li>❌ SSID révélant le modèle</li>
                  <li>❌ Firmware obsolète</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/courses/network-testing">
              ← Précédent : Tester son réseau
            </Link>
          </Button>
          <Button asChild>
            <Link href="/courses/exercises">
              Suivant : Exercices pratiques →
            </Link>
          </Button>
        </div>
      </div>
    </CourseLayout>
  );
}