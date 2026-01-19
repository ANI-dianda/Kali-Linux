
'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Terminal, Download, Package, Zap, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IntroductionPage() {
  return (
    <CourseLayout title="Introduction à Kali Linux">
      <div className="space-y-8">
        {/* Qu'est-ce que Kali Linux */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Terminal className="h-8 w-8 text-primary" />
            Qu'est-ce que Kali Linux ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Kali Linux est une distribution Linux spécialisée dans les tests de sécurité et le pentesting. 
            Développée par Offensive Security, elle contient plus de 600 outils préinstallés pour l'audit 
            de sécurité, les tests d'intrusion et la forensique numérique.
          </p>
          
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Important :</strong> Kali Linux est destiné aux professionnels de la sécurité et 
              aux chercheurs. Utilisez ces outils uniquement sur des systèmes dont vous avez l'autorisation.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Pourquoi utiliser Kali Linux ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Plus de 600 outils de sécurité préinstallés et préconfigurés</li>
                <li>Mises à jour régulières et support de la communauté</li>
                <li>Compatible avec de nombreux périphériques (VM, USB, ARM)</li>
                <li>Documentation complète et ressources d'apprentissage</li>
                <li>Gratuit et open source</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Installation */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Download className="h-8 w-8 text-primary" />
            Installation de Kali Linux
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Machine Virtuelle (Recommandé)
                </CardTitle>
                <CardDescription>Idéal pour débuter en toute sécurité</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  L'installation en machine virtuelle est la méthode la plus sûre pour débuter. 
                  Elle vous permet de tester Kali Linux sans modifier votre système principal.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Étapes :</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Téléchargez VirtualBox ou VMware</li>
                    <li>Téléchargez l'image ISO de Kali Linux</li>
                    <li>Créez une nouvelle VM (4GB RAM minimum)</li>
                    <li>Montez l'ISO et installez Kali</li>
                    <li>Configurez le réseau en mode bridge</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Live USB
                </CardTitle>
                <CardDescription>Pour une utilisation portable</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Le Live USB permet de démarrer Kali Linux directement depuis une clé USB 
                  sans installation permanente.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Étapes :</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Téléchargez l'image ISO de Kali Linux</li>
                    <li>Utilisez Rufus (Windows) ou dd (Linux)</li>
                    <li>Créez la clé USB bootable</li>
                    <li>Redémarrez et bootez sur la clé USB</li>
                    <li>Sélectionnez "Live" au démarrage</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Configuration recommandée :</strong> 4GB RAM minimum, 20GB d'espace disque, 
              processeur 64-bit avec support de virtualisation (VT-x/AMD-V).
            </AlertDescription>
          </Alert>
        </section>

        {/* Outils essentiels */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Outils essentiels</h2>
          
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>nmap - Scanner de réseau</CardTitle>
                <CardDescription>L'outil de référence pour la découverte réseau</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Nmap (Network Mapper) est un outil open source pour l'exploration réseau et l'audit de sécurité. 
                  Il permet de découvrir les hôtes et services sur un réseau.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-muted-foreground"># Scanner un réseau local</div>
                  <div>nmap -sn 192.168.1.0/24</div>
                  <div className="mt-2 text-muted-foreground"># Scanner les ports d'un hôte</div>
                  <div>nmap -sV 192.168.1.1</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wireshark - Analyseur de paquets</CardTitle>
                <CardDescription>Capture et analyse du trafic réseau</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Wireshark est l'analyseur de protocoles réseau le plus utilisé au monde. 
                  Il permet de capturer et d'analyser le trafic réseau en temps réel.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Utilisations courantes :</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Analyse du trafic réseau en temps réel</li>
                    <li>Débogage de problèmes réseau</li>
                    <li>Détection d'intrusions et d'anomalies</li>
                    <li>Apprentissage des protocoles réseau</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>aircrack-ng - Suite Wi-Fi</CardTitle>
                <CardDescription>Outils pour tester la sécurité Wi-Fi</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Aircrack-ng est une suite complète d'outils pour auditer la sécurité des réseaux Wi-Fi. 
                  Elle permet de capturer des paquets, tester des clés et analyser les réseaux sans fil.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Composants principaux :</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li><strong>airmon-ng</strong> : Active le mode monitor</li>
                    <li><strong>airodump-ng</strong> : Capture les paquets Wi-Fi</li>
                    <li><strong>aircrack-ng</strong> : Craque les clés WEP/WPA</li>
                    <li><strong>aireplay-ng</strong> : Génère du trafic</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Metasploit Framework</CardTitle>
                <CardDescription>Plateforme de test d'intrusion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Metasploit est le framework de pentesting le plus populaire. Il contient des milliers 
                  d'exploits, payloads et modules pour tester la sécurité des systèmes.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-muted-foreground"># Lancer Metasploit</div>
                  <div>msfconsole</div>
                  <div className="mt-2 text-muted-foreground"># Rechercher un exploit</div>
                  <div>search type:exploit platform:windows</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Premier pas */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Premier pas : Scanner un réseau local</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Exercice pratique</CardTitle>
              <CardDescription>Découvrez les appareils connectés à votre réseau</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Objectif :</h4>
                <p className="text-sm text-muted-foreground">
                  Utiliser nmap pour identifier tous les appareils connectés à votre réseau local 
                  et découvrir leurs adresses IP.
                </p>

                <h4 className="font-semibold mt-4">Instructions :</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Ouvrez un terminal dans Kali Linux</li>
                  <li>Identifiez votre plage d'adresses IP (généralement 192.168.1.0/24 ou 192.168.0.0/24)</li>
                  <li>Exécutez la commande suivante :</li>
                </ol>

                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Scan ping simple</div>
                  <div>sudo nmap -sn 192.168.1.0/24</div>
                  <div className="mt-3 text-muted-foreground"># Résultat attendu :</div>
                  <div className="text-green-600">Starting Nmap...</div>
                  <div>Nmap scan report for 192.168.1.1</div>
                  <div>Host is up (0.0012s latency).</div>
                  <div>Nmap scan report for 192.168.1.10</div>
                  <div>Host is up (0.045s latency).</div>
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Explication :</strong> L'option <code>-sn</code> effectue un scan ping sans 
                    scanner les ports. C'est rapide et permet de découvrir les hôtes actifs sur le réseau.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/">
              Retour à l'accueil
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
