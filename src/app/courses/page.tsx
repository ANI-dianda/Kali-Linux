'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, Network, Lock, BookOpen, Terminal, Wifi, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useProgress } from '@/hooks/useProgress';
import { ProgressBar } from '@/components/ProgressBar';

export default function CoursesPage() {
  const { isCourseCompleted } = useProgress();

  const courses = [
    {
      icon: Terminal,
      title: 'Introduction à Kali Linux',
      description: 'Découvrez Kali Linux, son installation et ses outils essentiels',
      href: '/courses/introduction-enhanced',
      id: 'introduction',
      level: 'Débutant',
      duration: '2h'
    },
    {
      icon: Shield,
      title: 'Fondamentaux du Hacking',
      description: 'Apprenez les concepts de base du hacking éthique et de la cybersécurité',
      href: '/courses/hacking-fundamentals-optimized',
      id: 'hacking-fundamentals',
      level: 'Débutant',
      duration: '3h'
    },
    {
      icon: Network,
      title: 'Tester son réseau',
      description: 'Apprenez à analyser et tester la sécurité de votre réseau avec nmap et Wireshark',
      href: '/courses/network-testing',
      id: 'network-testing',
      level: 'Intermédiaire',
      duration: '4h'
    },
    {
      icon: Wifi,
      title: 'Sécurité WiFi',
      description: 'Maîtrisez WPA2, WPA3 et les techniques d\'audit des réseaux sans fil',
      href: '/courses/wifi-security',
      id: 'wifi-security',
      level: 'Intermédiaire',
      duration: '3h'
    },
    {
      icon: BookOpen,
      title: 'Exercices pratiques',
      description: 'Mettez en pratique vos connaissances avec des quiz interactifs',
      href: '/courses/exercises',
      id: 'exercises',
      level: 'Tous niveaux',
      duration: '1h'
    },
    {
      icon: Shield,
      title: 'Ressources',
      description: 'Tutoriels, outils et guides pour approfondir vos connaissances',
      href: '/courses/resources',
      id: 'resources',
      level: 'Tous niveaux',
      duration: 'Variable'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold">Parcours d'apprentissage</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Suivez notre programme structuré pour maîtriser la cybersécurité étape par étape
            </p>
          </div>

          {/* Progress */}
          <div className="max-w-2xl mx-auto mb-12">
            <ProgressBar />
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => {
              const Icon = course.icon;
              const isCompleted = isCourseCompleted(course.id);
              
              return (
                <Link key={index} href={course.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1 relative">
                    {isCompleted && (
                      <div className="absolute top-3 right-3 z-10">
                        <CheckCircle2 className="h-6 w-6 text-green-500 bg-white rounded-full" />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg group-hover:from-primary/20 group-hover:to-primary/30 transition-all">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {course.title}
                      </CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="font-medium">{course.level}</span>
                        <span>{course.duration}</span>
                      </div>
                      {isCompleted && (
                        <div className="mt-3 text-sm text-green-600 font-medium">
                          ✓ Cours terminé
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Learning Path */}
          <div className="max-w-4xl mx-auto mt-16 space-y-6">
            <h2 className="text-2xl font-bold text-center">Parcours Recommandé</h2>
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <p className="text-muted-foreground">
                Pour une progression optimale, nous vous recommandons de suivre les cours dans cet ordre :
              </p>
              <ol className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="font-bold text-primary">1.</span>
                  <span>Introduction à Kali Linux - Familiarisez-vous avec l'environnement</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">2.</span>
                  <span>Fondamentaux du Hacking - Comprenez les concepts de base</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">3.</span>
                  <span>Tester son réseau - Pratiquez l'analyse réseau</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">4.</span>
                  <span>Sécurité WiFi - Approfondissez vos connaissances</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">5.</span>
                  <span>Exercices pratiques - Testez vos compétences</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">6.</span>
                  <span>Ressources - Continuez à apprendre</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
