
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Network, Lock, BookOpen, Terminal, Wifi } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const features = [
    {
      icon: Terminal,
      title: "Introduction à Kali Linux",
      description: "Découvrez Kali Linux, son installation et ses outils essentiels",
      href: "/courses/introduction"
    },
    {
      icon: Shield,
      title: "Fondamentaux du Hacking",
      description: "Apprenez les concepts de base du hacking éthique et de la cybersécurité",
      href: "/courses/hacking-fundamentals"
    },
    {
      icon: Network,
      title: "Tester son réseau",
      description: "Apprenez à analyser et tester la sécurité de votre réseau avec nmap et Wireshark",
      href: "/courses/network-testing"
    },
    {
      icon: Wifi,
      title: "Sécurité WiFi",
      description: "Maîtrisez WPA2, WPA3 et les techniques d'audit des réseaux sans fil",
      href: "/courses/wifi-security"
    },
    {
      icon: BookOpen,
      title: "Exercices pratiques",
      description: "Mettez en pratique vos connaissances avec des quiz interactifs",
      href: "/courses/exercises"
    },
    {
      icon: Shield,
      title: "Ressources",
      description: "Tutoriels, outils et guides pour approfondir vos connaissances",
      href: "/courses/resources"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Kali Linux Academy</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Apprenez la cybersécurité avec Kali Linux
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Une plateforme pédagogique progressive pour maîtriser les tests de réseau, 
              le cracking Wi-Fi et les fondamentaux de la sécurité informatique
            </p>
          </div>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button asChild className="h-14 px-8 text-lg font-semibold">
              <Link href="/courses/introduction">
                Commencer maintenant
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-14 px-8 text-lg font-semibold">
              <Link href="/courses/exercises">
                Voir les quiz
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Parcours d'apprentissage</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suivez notre programme structuré pour maîtriser la cybersécurité étape par étape
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={index} href={feature.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl group-hover:from-primary/20 group-hover:to-primary/30 transition-all">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-3xl font-bold">Une approche pédagogique et progressive</h3>
            <p className="text-lg text-muted-foreground">
              Cette plateforme est conçue pour tous les niveaux, du débutant à l'expert. 
              Chaque cours inclut des explications simples, des exemples concrets et des 
              exercices pratiques pour vous permettre de progresser à votre rythme.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 Kali Linux Academy - Plateforme éducative de cybersécurité</p>
        </div>
      </footer>
    </div>
  );
}
