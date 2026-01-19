
'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Network, Activity, Wifi, Info, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NetworkTestingPage() {
  return (
    <CourseLayout title="Tester son réseau">
      <div className="space-y-8">
        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Dans ce module, vous apprendrez à analyser et tester la sécurité de votre réseau 
            en utilisant des outils professionnels comme nmap, Wireshark et la suite aircrack-ng.
          </p>
          
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Avertissement légal :</strong> N'utilisez ces techniques que sur des réseaux 
              dont vous êtes propriétaire ou pour lesquels vous avez une autorisation écrite explicite.
            </AlertDescription>
          </Alert>
        </section>

        {/* Analyse avec nmap */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Network className="h-8 w-8 text-primary" />
            Analyse de réseau avec nmap
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Scanner un réseau local</CardTitle>
              <CardDescription>Découvrez les appareils, services et versions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Scan basique</TabsTrigger>
                  <TabsTrigger value="advanced">Scan avancé</TabsTrigger>
                  <TabsTrigger value="stealth">Scan furtif</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">1. Découverte des hôtes actifs</h4>
                    <p className="text-sm text-muted-foreground">
                      Identifiez rapidement tous les appareils connectés au réseau.
                    </p>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="text-muted-foreground"># Scan ping du réseau</div>
                      <div>sudo nmap -sn 192.168.1.0/24</div>
                      <div className="mt-3 text-muted-foreground"># Résultat :</div>
                      <div className="text-green-600">Nmap scan report for 192.168.1.1</div>
                      <div>Host is up (0.0012s latency).</div>
                      <div>MAC Address: AA:BB:CC:DD:EE:FF (Router)</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">2. Scan des ports ouverts</h4>
                    <p className="text-sm text-muted-foreground">
                      Identifiez les services actifs sur un hôte spécifique.
                    </p>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="text-muted-foreground"># Scan des 1000 ports les plus courants</div>
                      <div>sudo nmap 192.168.1.1</div>
                      <div className="mt-3 text-muted-foreground"># Résultat :</div>
                      <div>PORT    STATE SERVICE</div>
                      <div>22/tcp  open  ssh</div>
                      <div>80/tcp  open  http</div>
                      <div>443/tcp open  https</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Détection de services et versions</h4>
                    <p className="text-sm text-muted-foreground">
                      Identifiez les versions exactes des services pour détecter les vulnérabilités.
                    </p>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="text-muted-foreground"># Scan avec détection de version</div>
                      <div>sudo nmap -sV 192.168.1.1</div>
                      <div className="mt-3 text-muted-foreground"># Résultat détaillé :</div>
                      <div>PORT    STATE SERVICE VERSION</div>
                      <div>22/tcp  open  ssh     OpenSSH 8.2p1</div>
                      <div>80/tcp  open  http    Apache httpd 2.4.41</div>
                      <div>443/tcp open  https   Apache httpd 2.4.41</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Détection du système d'exploitation</h4>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="text-muted-foreground"># Scan avec détection OS</div>
                      <div>sudo nmap -O 192.168.1.1</div>
                      <div className="mt-3 text-muted-foreground"># Résultat :</div>
                      <div>Running: Linux 4.X|5.X</div>
                      <div>OS details: Linux 4.15 - 5.6</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Scan complet</h4>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="text-muted-foreground"># Scan agressif (tous les ports)</div>
                      <div>sudo nmap -A -p- 192.168.1.1</div>
                      <div className="mt-2 text-muted-foreground"># Options :</div>
                      <div>-A : Active détection OS, version, script, traceroute</div>
                      <div>-p- : Scanne tous les 65535 ports</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="stealth" className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Scan SYN (furtif)</h4>
                    <p className="text-sm text-muted-foreground">
                      Scan plus discret qui n'établit pas de connexion complète.
                    </p>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="text-muted-foreground"># Scan SYN</div>
                      <div>sudo nmap -sS 192.168.1.1</div>
                      <div className="mt-2 text-muted-foreground"># Avantages :</div>
                      <div>- Plus rapide que le scan TCP connect</div>
                      <div>- Moins détectable dans les logs</div>
                      <div>- Nécessite les privilèges root</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Scan avec timing</h4>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="text-muted-foreground"># Scan lent pour éviter la détection</div>
                      <div>sudo nmap -T2 192.168.1.1</div>
                      <div className="mt-2 text-muted-foreground"># Niveaux de timing :</div>
                      <div>-T0 : Paranoid (très lent)</div>
                      <div>-T1 : Sneaky (lent)</div>
                      <div>-T2 : Polite (ralenti)</div>
                      <div>-T3 : Normal (défaut)</div>
                      <div>-T4 : Aggressive (rapide)</div>
                      <div>-T5 : Insane (très rapide)</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Conseil :</strong> Commencez toujours par un scan basique avant d'utiliser 
                  des scans plus agressifs. Cela évite de surcharger le réseau et d'être détecté.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Wireshark */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            Capture du trafic avec Wireshark
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Analyser le trafic réseau en temps réel</CardTitle>
              <CardDescription>Exemple pratique : analyser un ping</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Étape 1 : Lancer Wireshark</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Lancer Wireshark avec privilèges</div>
                  <div>sudo wireshark</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sélectionnez votre interface réseau (eth0, wlan0, etc.) et cliquez sur "Start".
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Étape 2 : Générer du trafic ICMP</h4>
                <p className="text-sm text-muted-foreground">
                  Ouvrez un nouveau terminal et effectuez un ping :
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Ping vers Google DNS</div>
                  <div>ping -c 4 8.8.8.8</div>
                  <div className="mt-3 text-muted-foreground"># Résultat :</div>
                  <div>PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.</div>
                  <div>64 bytes from 8.8.8.8: icmp_seq=1 ttl=118 time=15.2 ms</div>
                  <div>64 bytes from 8.8.8.8: icmp_seq=2 ttl=118 time=14.8 ms</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Étape 3 : Analyser les paquets ICMP</h4>
                <p className="text-sm text-muted-foreground">
                  Dans Wireshark, appliquez le filtre suivant :
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Filtre Wireshark</div>
                  <div>icmp</div>
                </div>
                <div className="space-y-2 mt-3">
                  <p className="text-sm font-semibold">Ce que vous verrez :</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li><strong>Echo Request</strong> : Votre ordinateur envoie une requête ping</li>
                    <li><strong>Echo Reply</strong> : Le serveur répond au ping</li>
                    <li><strong>TTL</strong> : Time To Live, nombre de sauts réseau</li>
                    <li><strong>Sequence number</strong> : Numéro de séquence du paquet</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Filtres Wireshark utiles</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Filtrer par protocole</div>
                  <div>http</div>
                  <div>dns</div>
                  <div>tcp</div>
                  <div>udp</div>
                  <div className="mt-3 text-muted-foreground"># Filtrer par IP</div>
                  <div>ip.addr == 192.168.1.1</div>
                  <div>ip.src == 192.168.1.10</div>
                  <div>ip.dst == 8.8.8.8</div>
                  <div className="mt-3 text-muted-foreground"># Filtrer par port</div>
                  <div>tcp.port == 80</div>
                  <div>tcp.port == 443</div>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Astuce :</strong> Utilisez "Follow TCP Stream" (clic droit sur un paquet) 
                  pour voir l'intégralité d'une conversation réseau.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Vérification Wi-Fi */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Wifi className="h-8 w-8 text-primary" />
            Vérification de la sécurité Wi-Fi
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Scanner les réseaux Wi-Fi</CardTitle>
              <CardDescription>Identifier les réseaux et leur niveau de sécurité</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Étape 1 : Activer le mode monitor</h4>
                <p className="text-sm text-muted-foreground">
                  Le mode monitor permet à votre carte Wi-Fi de capturer tous les paquets sans fil.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Vérifier les interfaces</div>
                  <div>sudo airmon-ng</div>
                  <div className="mt-3 text-muted-foreground"># Activer le mode monitor</div>
                  <div>sudo airmon-ng start wlan0</div>
                  <div className="mt-3 text-muted-foreground"># Résultat :</div>
                  <div className="text-green-600">Mode monitor enabled on wlan0mon</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Étape 2 : Scanner les réseaux Wi-Fi</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Lancer le scan</div>
                  <div>sudo airodump-ng wlan0mon</div>
                  <div className="mt-3 text-muted-foreground"># Informations affichées :</div>
                  <div>BSSID              PWR  Beacons  CH  ENC  ESSID</div>
                  <div>AA:BB:CC:DD:EE:FF  -45  120      6   WPA2 MonReseau</div>
                  <div>11:22:33:44:55:66  -67  85       11  WPA2 AutreReseau</div>
                </div>
                <div className="space-y-2 mt-3">
                  <p className="text-sm font-semibold">Colonnes importantes :</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li><strong>BSSID</strong> : Adresse MAC du point d'accès</li>
                    <li><strong>PWR</strong> : Puissance du signal (plus proche de 0 = meilleur)</li>
                    <li><strong>CH</strong> : Canal Wi-Fi utilisé</li>
                    <li><strong>ENC</strong> : Type de chiffrement (WEP, WPA, WPA2, WPA3)</li>
                    <li><strong>ESSID</strong> : Nom du réseau</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Étape 3 : Capturer un handshake WPA2</h4>
                <p className="text-sm text-muted-foreground">
                  Le handshake est échangé lorsqu'un appareil se connecte au réseau.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Capturer sur un réseau spécifique</div>
                  <div>sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon</div>
                  <div className="mt-2 text-muted-foreground"># Options :</div>
                  <div>-c 6 : Canal du réseau cible</div>
                  <div>--bssid : Adresse MAC du point d'accès</div>
                  <div>-w capture : Nom du fichier de capture</div>
                  <div className="mt-3 text-muted-foreground"># Attendre qu'un appareil se connecte...</div>
                  <div className="text-green-600">WPA handshake: AA:BB:CC:DD:EE:FF</div>
                </div>
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important :</strong> Pour capturer un handshake, vous devez attendre qu'un 
                  appareil se connecte naturellement au réseau. Ne déconnectez pas les utilisateurs 
                  sans autorisation.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/courses/introduction">
              ← Précédent : Introduction
            </Link>
          </Button>
          <Button asChild>
            <Link href="/courses/wpa2-cracking">
              Suivant : Cracker WPA2 →
            </Link>
          </Button>
        </div>
      </div>
    </CourseLayout>
  );
}
