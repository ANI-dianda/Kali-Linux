'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReadingTime } from "@/components/ReadingTime";
import { CollapsibleSection } from "@/components/CollapsibleSection";
import { Tabs } from "@/components/Tabs";
import { TableOfContents } from "@/components/TableOfContents";
import { ExpandableContent } from "@/components/ExpandableContent";
import { CourseNavigation } from "@/components/CourseNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Terminal, 
  Download, 
  Package, 
  Zap, 
  Info,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function EnhancedIntroductionPage() {
  const breadcrumbItems = [
    { label: "Cours", href: "/" },
    { label: "Introduction à Kali Linux" }
  ];

  const tocItems = [
    { id: 'what-is-kali', title: 'Qu\'est-ce que Kali Linux ?', level: 2 },
    { id: 'installation', title: 'Installation', level: 2 },
    { id: 'essential-tools', title: 'Outils essentiels', level: 2 },
    { id: 'first-steps', title: 'Premiers pas', level: 2 }
  ];

  const theoryContent = (
    <div className="course-content space-y-8">
      <CollapsibleSection 
        title="Qu'est-ce que Kali Linux ?" 
        icon={Terminal}
        defaultOpen={true}
      >
        <div id="what-is-kali" className="space-y-6">
          <ExpandableContent maxHeight={200}>
            <p className="text-lg leading-relaxed">
              Kali Linux est une distribution Linux spécialisée dans les tests de sécurité et le pentesting. 
              Développée par Offensive Security, elle contient plus de 600 outils préinstallés pour l'audit 
              de sécurité, les tests d'intrusion et la forensique numérique.
            </p>
            
            <div className="enhanced-alert info">
              <Info className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <strong>Important :</strong> Kali Linux est destiné aux professionnels de la sécurité et 
                aux chercheurs. Utilisez ces outils uniquement sur des systèmes dont vous avez l'autorisation.
              </div>
            </div>

            <div className="unified-card">
              <div className="unified-card-header">
                <div className="unified-card-icon">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="unified-card-title">Pourquoi utiliser Kali Linux ?</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                  <span>Plus de 600 outils de sécurité préinstallés et préconfigurés</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                  <span>Mises à jour régulières et support de la communauté</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                  <span>Compatible avec de nombreux périphériques (VM, USB, ARM)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                  <span>Documentation complète et ressources d'apprentissage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                  <span>Gratuit et open source</span>
                </li>
              </ul>
            </div>
          </ExpandableContent>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Installation de Kali Linux" icon={Download}>
        <div id="installation" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="unified-card">
              <div className="unified-card-header">
                <div className="unified-card-icon">
                  <Package className="h-5 w-5" />
                </div>
                <h4 className="unified-card-title">Machine Virtuelle</h4>
              </div>
              <p className="medium-contrast-text mb-4">
                Idéal pour débuter en toute sécurité. Installation sans modification du système principal.
              </p>
              <div className="space-y-3">
                <h5 className="high-contrast-text font-semibold">Étapes :</h5>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Téléchargez VirtualBox ou VMware</li>
                  <li>Téléchargez l'image ISO de Kali Linux</li>
                  <li>Créez une nouvelle VM (4GB RAM minimum)</li>
                  <li>Montez l'ISO et installez Kali</li>
                  <li>Configurez le réseau en mode bridge</li>
                </ol>
              </div>
            </div>

            <div className="unified-card">
              <div className="unified-card-header">
                <div className="unified-card-icon">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="unified-card-title">Live USB</h4>
              </div>
              <p className="medium-contrast-text mb-4">
                Pour une utilisation portable sans installation permanente.
              </p>
              <div className="space-y-3">
                <h5 className="high-contrast-text font-semibold">Étapes :</h5>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Téléchargez l'image ISO de Kali Linux</li>
                  <li>Utilisez Rufus (Windows) ou dd (Linux)</li>
                  <li>Créez la clé USB bootable</li>
                  <li>Redémarrez et bootez sur la clé USB</li>
                  <li>Sélectionnez "Live" au démarrage</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="enhanced-alert info">
            <Info className="h-5 w-5 shrink-0" />
            <div>
              <strong>Configuration recommandée :</strong> 4GB RAM minimum, 20GB d'espace disque, 
              processeur 64-bit avec support de virtualisation (VT-x/AMD-V).
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );

  const practicalContent = (
    <div className="course-content space-y-8">
      <CollapsibleSection title="Premier exercice pratique" icon={Terminal} defaultOpen={true}>
        <div id="first-steps" className="space-y-6">
          <div className="unified-card">
            <div className="unified-card-header">
              <div className="unified-card-icon">
                <Terminal className="h-5 w-5" />
              </div>
              <h4 className="unified-card-title">Scanner un réseau local</h4>
            </div>
            
            <p className="medium-contrast-text mb-4">
              Découvrez les appareils connectés à votre réseau avec nmap.
            </p>

            <div className="space-y-4">
              <h5 className="high-contrast-text font-semibold">Instructions :</h5>
              <ol className="list-decimal list-inside space-y-2">
                <li>Ouvrez un terminal dans Kali Linux</li>
                <li>Identifiez votre plage d'adresses IP</li>
                <li>Exécutez la commande suivante :</li>
              </ol>

              <div className="enhanced-code-block">
                <div className="comment"># Scan ping simple</div>
                <div className="command">sudo nmap -sn 192.168.1.0/24</div>
                <div className="comment mt-3"># Résultat attendu :</div>
                <div className="text-green-600">Starting Nmap...</div>
                <div>Nmap scan report for 192.168.1.1</div>
                <div>Host is up (0.0012s latency).</div>
              </div>

              <div className="enhanced-alert success">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <div>
                  <strong>Explication :</strong> L'option <code>-sn</code> effectue un scan ping sans 
                  scanner les ports. C'est rapide et permet de découvrir les hôtes actifs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );

  const tabs = [
    { id: 'theory', label: 'Théorie', content: theoryContent },
    { id: 'practical', label: 'Pratique', content: practicalContent }
  ];

  return (
    <CourseLayout title="Introduction à Kali Linux (Version Améliorée)">
      <div className="animate-fade-in-up">
        <Breadcrumbs items={breadcrumbItems} />
        <ReadingTime wordCount={800} difficulty="Débutant" />
        
        <div className="flex gap-8">
          {/* Table des matières */}
          <aside className="hidden lg:block w-64 shrink-0">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Contenu principal */}
          <div className="flex-1 min-w-0">
            <Tabs tabs={tabs} defaultTab="theory" />
            
            {/* Navigation améliorée */}
            <div className="flex justify-between items-center pt-8 border-t mt-8">
              <Link href="/" className="nav-button-enhanced">
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </Link>
              <Link href="/courses/hacking-fundamentals-optimized" className="nav-button-enhanced nav-button-primary">
                Suivant : Fondamentaux du Hacking
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <CourseNavigation currentCourseId="introduction" />
          </div>
        </div>
      </div>
    </CourseLayout>
  );
}