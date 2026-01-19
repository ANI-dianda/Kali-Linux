
'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Lock, Zap, Info, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WPA3Page() {
  return (
    <CourseLayout title="Comprendre WPA3">
      <div className="space-y-8">
        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-lg text-muted-foreground">
            WPA3 est la dernière génération de sécurité Wi-Fi, introduite en 2018. 
            Il apporte des améliorations significatives par rapport à WPA2 et corrige 
            plusieurs vulnérabilités connues.
          </p>
          
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Bonne nouvelle :</strong> WPA3 rend les attaques par dictionnaire 
              (comme celles vues avec WPA2) beaucoup plus difficiles, voire impossibles.
            </AlertDescription>
          </Alert>
        </section>

        {/* Fonctionnement WPA3 */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            Fonctionnement de WPA3
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>SAE (Simultaneous Authentication of Equals)</CardTitle>
              <CardDescription>Le cœur de la sécurité WPA3</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                WPA3 remplace le 4-way handshake de WPA2 par SAE (aussi appelé Dragonfly), 
                un protocole d'échange de clés beaucoup plus sécurisé.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold">Principe de SAE</h4>
                <p className="text-sm text-muted-foreground">
                  SAE utilise un protocole d'authentification mutuelle où le client et le point 
                  d'accès prouvent qu'ils connaissent le mot de passe sans jamais le transmettre 
                  sur le réseau.
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                  <div className="font-semibold">Étapes de SAE :</div>
                  <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                    <li>Le client et le point d'accès échangent des "commit" messages</li>
                    <li>Chacun calcule un secret partagé basé sur le mot de passe</li>
                    <li>Ils échangent des "confirm" messages pour vérifier le secret</li>
                    <li>Une clé de session unique est dérivée pour chiffrer les communications</li>
                  </ol>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Avantages cryptographiques</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>Forward Secrecy</strong> : Même si le mot de passe est compromis plus tard, 
                    les sessions passées restent sécurisées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>Protection contre les attaques par dictionnaire hors ligne</strong> : 
                    Impossible de capturer et cracker comme avec WPA2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>Résistance aux attaques KRACK</strong> : Corrige les vulnérabilités 
                    du 4-way handshake de WPA2</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Différences WPA2 vs WPA3 */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Différences entre WPA2 et WPA3</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-orange-600" />
                  WPA2
                </CardTitle>
                <CardDescription>Protocole précédent (2004-2018)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span>4-way handshake vulnérable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Attaques par dictionnaire hors ligne possibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Vulnérable aux attaques KRACK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Pas de forward secrecy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Chiffrement AES-CCMP (128-bit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Mots de passe faibles facilement crackables</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  WPA3
                </CardTitle>
                <CardDescription>Nouveau standard (2018+)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>SAE (Dragonfly) plus sécurisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Protection contre les attaques hors ligne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Immunisé contre KRACK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Forward secrecy intégré</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Chiffrement AES-GCMP (192-bit en WPA3-Enterprise)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Protection même avec mots de passe faibles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pourquoi WPA3 est plus sécurisé */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            Pourquoi WPA3 est plus sécurisé
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Protection contre les attaques classiques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">1. Impossible de capturer et cracker hors ligne</h4>
                <p className="text-sm text-muted-foreground">
                  Avec WPA2, un attaquant peut capturer le handshake et tester des millions de 
                  mots de passe hors ligne sans être détecté. Avec WPA3, chaque tentative de 
                  connexion doit être faite en ligne, ce qui :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Ralentit considérablement les attaques (1 tentative par seconde au lieu de millions)</li>
                  <li>Permet au point d'accès de détecter et bloquer les tentatives répétées</li>
                  <li>Rend les attaques par force brute impraticables</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">2. Protection contre les attaques KRACK</h4>
                <p className="text-sm text-muted-foreground">
                  KRACK (Key Reinstallation Attack) était une vulnérabilité majeure de WPA2 
                  découverte en 2017. Elle permettait de :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Déchiffrer le trafic Wi-Fi</li>
                  <li>Injecter du contenu malveillant</li>
                  <li>Voler des informations sensibles</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  WPA3 corrige cette vulnérabilité par conception grâce à SAE.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">3. Forward Secrecy</h4>
                <p className="text-sm text-muted-foreground">
                  Si un attaquant découvre votre mot de passe Wi-Fi dans le futur, il ne pourra 
                  pas déchiffrer les communications passées qu'il aurait pu enregistrer. Chaque 
                  session utilise des clés uniques qui ne peuvent pas être recalculées.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">4. Protection des réseaux publics</h4>
                <p className="text-sm text-muted-foreground">
                  WPA3 introduit "Enhanced Open" (OWE - Opportunistic Wireless Encryption) pour 
                  les réseaux publics sans mot de passe. Cela chiffre les communications même 
                  sur les hotspots ouverts, protégeant contre l'espionnage.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Attaques sur WPA3 */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Attaques possibles sur WPA3</h2>

          <Card>
            <CardHeader>
              <CardTitle>Limitations et vulnérabilités connues</CardTitle>
              <CardDescription>WPA3 n'est pas parfait, mais beaucoup plus robuste</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important :</strong> Les outils classiques comme aircrack-ng ne fonctionnent 
                  pas contre WPA3. Les attaques nécessitent des techniques beaucoup plus avancées.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <h4 className="font-semibold">1. Attaques Dragonblood (2019)</h4>
                <p className="text-sm text-muted-foreground">
                  Des chercheurs ont découvert des vulnérabilités dans les premières implémentations 
                  de WPA3 :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li><strong>Downgrade attacks</strong> : Forcer un appareil à utiliser WPA2</li>
                  <li><strong>Side-channel attacks</strong> : Exploiter les fuites d'informations timing</li>
                  <li><strong>Denial of Service</strong> : Bloquer les connexions légitimes</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  Ces vulnérabilités ont été corrigées dans les mises à jour firmware. 
                  Assurez-vous que vos appareils sont à jour.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">2. Attaques par force brute en ligne</h4>
                <p className="text-sm text-muted-foreground">
                  Contrairement à WPA2, les attaques doivent être faites en ligne, ce qui les rend :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Extrêmement lentes (1 tentative par seconde maximum)</li>
                  <li>Facilement détectables par le point d'accès</li>
                  <li>Bloquables après plusieurs échecs</li>
                </ul>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm mt-2">
                  <div className="text-muted-foreground"># Tentative avec aircrack-ng (ne fonctionne pas)</div>
                  <div>sudo aircrack-ng -w rockyou.txt capture-wpa3.cap</div>
                  <div className="mt-2 text-red-600">ERROR: WPA3 handshake not supported</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">3. Mode de transition WPA2/WPA3</h4>
                <p className="text-sm text-muted-foreground">
                  De nombreux routeurs utilisent un mode de transition qui accepte à la fois 
                  WPA2 et WPA3 pour la compatibilité. Cela peut permettre des attaques de 
                  downgrade où l'attaquant force l'utilisation de WPA2.
                </p>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Recommandation :</strong> Si tous vos appareils supportent WPA3, 
                    désactivez le mode de transition et utilisez WPA3 uniquement.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Analyse dans Wireshark */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Analyse WPA3 dans Wireshark</h2>

          <Card>
            <CardHeader>
              <CardTitle>Observer le protocole SAE</CardTitle>
              <CardDescription>Comprendre les échanges WPA3</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Capturer le trafic WPA3</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Mettre la carte en mode monitor</div>
                  <div>sudo airmon-ng start wlan0</div>
                  <div className="mt-2 text-muted-foreground"># Capturer avec airodump-ng</div>
                  <div>sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w wpa3-capture wlan0mon</div>
                  <div className="mt-2 text-muted-foreground"># Ouvrir dans Wireshark</div>
                  <div>wireshark wpa3-capture-01.cap</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Filtres Wireshark pour WPA3</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <div className="text-muted-foreground"># Filtrer les trames SAE</div>
                  <div>wlan.fc.type_subtype == 0x0b</div>
                  <div className="mt-2 text-muted-foreground"># Voir les commit messages</div>
                  <div>wlan.fixed.auth_seq == 1</div>
                  <div className="mt-2 text-muted-foreground"># Voir les confirm messages</div>
                  <div>wlan.fixed.auth_seq == 2</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Ce que vous verrez</h4>
                <p className="text-sm text-muted-foreground">
                  Dans Wireshark, vous observerez :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li><strong>Authentication frames</strong> avec SAE commit et confirm</li>
                  <li><strong>Pas de handshake 4-way</strong> comme avec WPA2</li>
                  <li><strong>Données chiffrées</strong> impossibles à déchiffrer sans la clé</li>
                  <li><strong>Management Frame Protection (MFP)</strong> activé par défaut</li>
                </ul>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Note :</strong> Contrairement à WPA2, vous ne pourrez pas déchiffrer 
                  le trafic WPA3 dans Wireshark même si vous connaissez le mot de passe, car 
                  chaque session utilise des clés uniques.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Migration vers WPA3 */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Migrer vers WPA3</h2>

          <Card>
            <CardHeader>
              <CardTitle>Comment passer à WPA3</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Vérifier la compatibilité</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Votre routeur doit supporter WPA3 (vérifiez les spécifications ou mettez à jour le firmware)</li>
                  <li>Vos appareils doivent supporter WPA3 (la plupart des appareils depuis 2019)</li>
                  <li>Windows 10 (version 1903+), macOS (10.15+), iOS (13+), Android (10+)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Configuration recommandée</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Connectez-vous à l'interface d'administration de votre routeur</li>
                  <li>Allez dans les paramètres Wi-Fi / Sécurité</li>
                  <li>Sélectionnez "WPA3-Personal" ou "WPA3-SAE"</li>
                  <li>Si certains appareils ne supportent pas WPA3, utilisez "WPA2/WPA3 Transition Mode"</li>
                  <li>Sauvegardez et redémarrez le routeur</li>
                  <li>Reconnectez tous vos appareils</li>
                </ol>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Conseil :</strong> Testez d'abord avec le mode de transition, puis passez 
                  à WPA3 uniquement une fois que vous avez confirmé que tous vos appareils fonctionnent.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
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
