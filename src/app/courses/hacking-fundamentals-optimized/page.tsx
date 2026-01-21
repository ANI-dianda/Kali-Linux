'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { CollapsibleSection } from "@/components/CollapsibleSection";
import { Tabs } from "@/components/Tabs";
import { TableOfContents } from "@/components/TableOfContents";
import { ExpandableContent } from "@/components/ExpandableContent";
import { CourseNavigation } from "@/components/CourseNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  ExternalLink,
  BookOpen,
  Code,
  Terminal
} from "lucide-react";

export default function OptimizedHackingFundamentalsPage() {
  const tocItems = [
    { id: 'introduction', title: 'Introduction au Hacking', level: 2 },
    { id: 'types-attaques', title: 'Types d\'attaques', level: 2 },
    { id: 'techniques', title: 'Techniques d\'attaque', level: 2 },
    { id: 'malwares', title: 'Malwares', level: 2 },
    { id: 'cryptographie', title: 'Cryptographie', level: 2 },
    { id: 'securite', title: 'Sécurité systèmes', level: 2 },
    { id: 'ingenierie', title: 'Ingénierie sociale', level: 2 },
    { id: 'legal', title: 'Aspects légaux', level: 2 }
  ];

  const theoryContent = (
    <div className="space-y-6">
      <CollapsibleSection 
        title="Qu'est-ce que le Hacking ?" 
        icon={Shield}
        defaultOpen={true}
      >
        <div id="introduction">
          <ExpandableContent maxHeight={150}>
            <p className="text-muted-foreground mb-4">
              Le hacking est l'art d'exploiter les failles d'un système informatique pour accéder à des données ou perturber un service. 
              Il peut être motivé par la curiosité, le défi technique, l'espionnage, le vol d'informations ou l'activisme.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                <span>Hackers éthiques (white hat) : testent la sécurité pour la renforcer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>Hackers malveillants (black hat) : agissent de manière illégale</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                <span>Impact direct sur la société et les services vitaux</span>
              </li>
            </ul>
          </ExpandableContent>
          
          <Alert className="mt-4">
            <ExternalLink className="h-4 w-4" />
            <AlertDescription>
              <strong>Exemple réel :</strong> L'attaque WannaCry (2017) a paralysé des hôpitaux en Europe, 
              montrant l'impact direct sur des services vitaux.
            </AlertDescription>
          </Alert>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Types d'attaques" icon={Target}>
        <div id="types-attaques">
          <ExpandableContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Attaques Directes</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  Ciblage frontal d'un serveur ou réseau
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Par Rebond</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  Utilisation d'un système intermédiaire
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-red-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Par Réponse</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  Exploitation des réactions système
                </CardContent>
              </Card>
            </div>
          </ExpandableContent>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Techniques d'attaque courantes" icon={Zap}>
        <div id="techniques">
          <ExpandableContent>
            <div className="space-y-3">
              {[
                { name: "Bombes logicielles", desc: "Déclenchées à une date précise" },
                { name: "Chevaux de Troie", desc: "Se déguisent en logiciels utiles" },
                { name: "Mail bombing", desc: "Saturation d'une boîte de réception" },
                { name: "Buffer overflow", desc: "Exploitation mémoire" }
              ].map((technique, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded border">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div>
                    <span className="font-medium text-sm">{technique.name}</span>
                    <p className="text-xs text-muted-foreground">{technique.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ExpandableContent>
        </div>
      </CollapsibleSection>
    </div>
  );

  const practicalContent = (
    <div className="space-y-6">
      <CollapsibleSection title="Outils de base" icon={Terminal} defaultOpen={true}>
        <div className="space-y-4">
          <div className="bg-muted p-4 rounded-lg font-mono text-sm">
            <div className="text-muted-foreground"># Scanner un réseau</div>
            <div>nmap -sn 192.168.1.0/24</div>
          </div>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm">
            <div className="text-muted-foreground"># Analyser le trafic</div>
            <div>wireshark</div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Exercices pratiques" icon={Code}>
        <div className="space-y-3">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Ces exercices sont à des fins éducatives uniquement. Utilisez-les sur vos propres systèmes.
            </AlertDescription>
          </Alert>
          <ExpandableContent>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Installer Kali Linux en machine virtuelle</li>
              <li>Scanner votre réseau local avec nmap</li>
              <li>Capturer du trafic avec Wireshark</li>
              <li>Analyser les protocoles réseau</li>
            </ol>
          </ExpandableContent>
        </div>
      </CollapsibleSection>
    </div>
  );

  const resourcesContent = (
    <div className="space-y-4">
      <CollapsibleSection title="Documentation" icon={BookOpen} defaultOpen={true}>
        <div className="grid gap-3">
          {[
            { title: "OWASP Top 10", url: "#", desc: "Vulnérabilités web courantes" },
            { title: "NIST Cybersecurity", url: "#", desc: "Framework de sécurité" },
            { title: "CVE Database", url: "#", desc: "Base de données des vulnérabilités" }
          ].map((resource, index) => (
            <div key={index} className="flex items-center justify-between p-2 border rounded">
              <div>
                <div className="font-medium text-sm">{resource.title}</div>
                <div className="text-xs text-muted-foreground">{resource.desc}</div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </CollapsibleSection>
    </div>
  );

  const tabs = [
    { id: 'theory', label: 'Théorie', content: theoryContent },
    { id: 'practical', label: 'Pratique', content: practicalContent },
    { id: 'resources', label: 'Ressources', content: resourcesContent }
  ];

  return (
    <CourseLayout title="Fondamentaux du Hacking (Version Optimisée)">
      <div className="flex gap-8">
        {/* Table des matières */}
        <aside className="hidden lg:block w-64 shrink-0">
          <TableOfContents items={tocItems} />
        </aside>

        {/* Contenu principal */}
        <div className="flex-1 min-w-0">
          <Alert className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Avertissement :</strong> Ce cours est à visée éducative. L'utilisation malveillante 
              de ces connaissances est illégale.
            </AlertDescription>
          </Alert>

          <Tabs tabs={tabs} defaultTab="theory" />

          <CourseNavigation currentCourseId="hacking-fundamentals" />
        </div>
      </div>
    </CourseLayout>
  );
}