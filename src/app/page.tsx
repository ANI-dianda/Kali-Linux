
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Network, Lock, BookOpen, Terminal, Wifi, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const courses = [
    {
      icon: Terminal,
      title: "Introduction à Kali Linux",
      description: "Découvrez Kali Linux et ses outils essentiels",
      href: "/courses/introduction-enhanced",
      level: "Débutant"
    },
    {
      icon: Shield,
      title: "Fondamentaux du Hacking",
      description: "Concepts de base du hacking éthique",
      href: "/courses/hacking-fundamentals-optimized",
      level: "Débutant"
    },
    {
      icon: Network,
      title: "Tester son réseau",
      description: "Analysez la sécurité de votre réseau",
      href: "/courses/network-testing",
      level: "Intermédiaire"
    },
    {
      icon: Wifi,
      title: "Sécurité WiFi",
      description: "WPA2, WPA3 et audit des réseaux sans fil",
      href: "/courses/wifi-security",
      level: "Intermédiaire"
    },
    {
      icon: BookOpen,
      title: "Exercices pratiques",
      description: "Quiz interactifs pour tester vos connaissances",
      href: "/courses/exercises",
      level: "Tous niveaux"
    },
    {
      icon: Lock,
      title: "Ressources",
      description: "Outils et guides pour approfondir",
      href: "/courses/resources",
      level: "Tous niveaux"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Apprenez la cybersécurité avec{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Kali Linux
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Plateforme gratuite d'apprentissage en français • 6 modules progressifs • Quiz interactifs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild className="h-12 px-8 text-base">
              <Link href="/courses">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-8 text-base">
              <Link href="/about">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Link key={index} href={course.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">{course.level}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm">
                      {course.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
