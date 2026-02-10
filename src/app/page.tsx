
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Network, Lock, BookOpen, Terminal, Wifi } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProgressBar } from "@/components/ProgressBar";
import { ThemeSelector } from "@/components/ThemeSelector";
import { useProgress } from "@/hooks/useProgress";
import { CheckCircle2 } from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function Home() {
  const { isCourseCompleted } = useProgress();
  
  const features = [
    {
      icon: Terminal,
      title: "Introduction à Kali Linux",
      description: "Découvrez Kali Linux, son installation et ses outils essentiels",
      href: "/courses/introduction-enhanced",
      id: "introduction"
    },
    {
      icon: Shield,
      title: "Fondamentaux du Hacking",
      description: "Apprenez les concepts de base du hacking éthique et de la cybersécurité",
      href: "/courses/hacking-fundamentals-optimized",
      id: "hacking-fundamentals"
    },
    {
      icon: Network,
      title: "Tester son réseau",
      description: "Apprenez à analyser et tester la sécurité de votre réseau avec nmap et Wireshark",
      href: "/courses/network-testing",
      id: "network-testing"
    },
    {
      icon: Wifi,
      title: "Sécurité WiFi",
      description: "Maîtrisez WPA2, WPA3 et les techniques d'audit des réseaux sans fil",
      href: "/courses/wifi-security",
      id: "wifi-security"
    },
    {
      icon: BookOpen,
      title: "Exercices pratiques",
      description: "Mettez en pratique vos connaissances avec des quiz interactifs",
      href: "/courses/exercises",
      id: "exercises"
    },
    {
      icon: Shield,
      title: "Ressources",
      description: "Tutoriels, outils et guides pour approfondir vos connaissances",
      href: "/courses/resources",
      id: "resources"
    }
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight">
              Apprenez la cybersécurité avec Kali Linux
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed px-2">
              Une plateforme pédagogique progressive pour maîtriser les tests de réseau, 
              le cracking Wi-Fi et les fondamentaux de la sécurité informatique
            </p>
          </div>
          
          {/* Sélecteur de thème */}
          <div className="max-w-4xl mx-auto">
            <ThemeSelector />
          </div>
          
          {/* Barre de progression */}
          <div className="max-w-2xl mx-auto">
            <ProgressBar />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button asChild className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold">
              <Link href="/courses/introduction-enhanced">
                Commencer gratuitement
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold">
              <Link href="/courses">
                Voir tous les cours
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Parcours d'apprentissage</h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Suivez notre programme structuré pour maîtriser la cybersécurité étape par étape
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isCompleted = isCourseCompleted(feature.id);
            return (
              <Link key={index} href={feature.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1 relative compact-card">
                  {isCompleted && (
                    <div className="absolute top-2 right-2 z-10">
                      <CheckCircle2 className="h-5 w-5 text-green-500 bg-white rounded-full" />
                    </div>
                  )}
                  <CardHeader className="pb-2 sm:pb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg group-hover:from-primary/20 group-hover:to-primary/30 transition-all">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors leading-tight">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    {isCompleted && (
                      <div className="mt-2 text-xs text-green-600 font-medium">
                        ✓ Cours terminé
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">Une approche pédagogique et progressive</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Cette plateforme est conçue pour tous les niveaux, du débutant à l'expert. 
              Chaque cours inclut des explications simples, des exemples concrets et des 
              exercices pratiques pour vous permettre de progresser à votre rythme.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link href="/about">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </ProtectedRoute>
  );
}
