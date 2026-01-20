
'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BookOpen, Video, Globe, Download, Terminal, Users, Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = {
    documentation: [
      {
        title: "Documentation officielle Kali Linux",
        description: "Guide complet et documentation officielle",
        url: "https://www.kali.org/docs/",
        icon: BookOpen
      },
      {
        title: "Nmap Reference Guide",
        description: "Documentation complète de nmap avec tous les paramètres",
        url: "https://nmap.org/book/man.html",
        icon: Terminal
      },
      {
        title: "Wireshark User Guide",
        description: "Guide utilisateur officiel de Wireshark",
        url: "https://www.wireshark.org/docs/wsug_html_chunked/",
        icon: BookOpen
      },
      {
        title: "Aircrack-ng Documentation",
        description: "Documentation de la suite aircrack-ng",
        url: "https://www.aircrack-ng.org/documentation.html",
        icon: Terminal
      }
    ],
    tutorials: [
      {
        title: "Offensive Security Training",
        description: "Formations officielles de l'équipe derrière Kali Linux",
        url: "https://www.offensive-security.com/courses-and-certifications/",
        icon: Video
      },
      {
        title: "Null Byte",
        description: "Tutoriels pratiques sur le hacking éthique",
        url: "https://null-byte.wonderhowto.com/",
        icon: Globe
      }
    ],
    tools: [
      {
        title: "Kali Linux Download",
        description: "Télécharger la dernière version de Kali Linux",
        url: "https://www.kali.org/get-kali/",
        icon: Download
      },
      {
        title: "VirtualBox",
        description: "Logiciel de virtualisation gratuit",
        url: "https://www.virtualbox.org/",
        icon: Download
      },
      {
        title: "Wireshark Download",
        description: "Télécharger Wireshark pour votre système",
        url: "https://www.wireshark.org/download.html",
        icon: Download
      },
      {
        title: "SecLists",
        description: "Collection de listes pour les tests de sécurité",
        url: "https://github.com/danielmiessler/SecLists",
        icon: Download
      }
    ],
    communities: [
      {
        title: "Kali Linux Forums",
        description: "Forum officiel de la communauté Kali Linux",
        url: "https://forums.kali.org/",
        icon: Users
      },
      {
        title: "r/Kalilinux",
        description: "Subreddit dédié à Kali Linux",
        url: "https://www.reddit.com/r/Kalilinux/",
        icon: Users
      },
      {
        title: "r/netsec",
        description: "Communauté de sécurité réseau sur Reddit",
        url: "https://www.reddit.com/r/netsec/",
        icon: Users
      },
      {
        title: "Discord Kali Linux",
        description: "Serveur Discord officiel de Kali Linux",
        url: "https://discord.gg/kali-linux",
        icon: Users
      }
    ],
    practice: [
      {
        title: "HackTheBox",
        description: "Plateforme de challenges de pentesting",
        url: "https://www.hackthebox.com/",
        icon: Terminal
      },
      {
        title: "TryHackMe",
        description: "Apprendre la cybersécurité avec des labs guidés",
        url: "https://tryhackme.com/",
        icon: Terminal
      },
      {
        title: "OverTheWire",
        description: "Wargames pour apprendre la sécurité",
        url: "https://overthewire.org/wargames/",
        icon: Terminal
      },
      {
        title: "PentesterLab",
        description: "Exercices pratiques de pentesting",
        url: "https://pentesterlab.com/",
        icon: Terminal
      }
    ]
  };

  const books = [
    {
      title: "Kali Linux Revealed",
      author: "Raphaël Hertzog, Jim O'Gorman",
      description: "Le livre officiel de Kali Linux, gratuit en ligne",
      level: "Débutant à Intermédiaire"
    },
    {
      title: "The Web Application Hacker's Handbook",
      author: "Dafydd Stuttard, Marcus Pinto",
      description: "Guide complet sur la sécurité des applications web",
      level: "Intermédiaire à Avancé"
    },
    {
      title: "Metasploit: The Penetration Tester's Guide",
      author: "David Kennedy et al.",
      description: "Guide pratique du framework Metasploit",
      level: "Intermédiaire"
    },
    {
      title: "Practical Packet Analysis",
      author: "Chris Sanders",
      description: "Maîtriser Wireshark pour l'analyse réseau",
      level: "Débutant à Intermédiaire"
    }
  ];

  return (
    <CourseLayout title="Ressources complémentaires">
      <div className="space-y-8">
        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Approfondissez vos connaissances avec ces ressources soigneusement sélectionnées. 
            Que vous soyez débutant ou expert, vous trouverez ici de quoi progresser.
          </p>
          
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Note :</strong> Toutes les ressources externes sont fournies à titre informatif. 
              Assurez-vous toujours de respecter les lois et réglementations en vigueur.
            </AlertDescription>
          </Alert>
        </section>

        {/* Documentation */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            Documentation officielle
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.documentation.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription>{resource.description}</CardDescription>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Accéder →
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Tutoriels */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Video className="h-8 w-8 text-primary" />
            Tutoriels et formations
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.tutorials.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription>{resource.description}</CardDescription>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Visiter →
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Outils */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Download className="h-8 w-8 text-primary" />
            Outils et téléchargements
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.tools.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription>{resource.description}</CardDescription>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Télécharger →
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Communautés */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Communautés et forums
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.communities.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription>{resource.description}</CardDescription>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Rejoindre →
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Plateformes de pratique */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Terminal className="h-8 w-8 text-primary" />
            Plateformes de pratique
          </h2>
          <p className="text-muted-foreground">
            Mettez en pratique vos compétences dans des environnements sécurisés et légaux.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.practice.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription>{resource.description}</CardDescription>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Commencer →
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Livres recommandés */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Livres recommandés</h2>
          <div className="grid gap-4">
            {books.map((book, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{book.title}</CardTitle>
                      <CardDescription className="mt-1">Par {book.author}</CardDescription>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {book.level}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{book.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conseils pour continuer */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Conseils pour continuer votre apprentissage</h2>
          
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Pratiquez régulièrement</strong> : La cybersécurité s'apprend par la pratique. Consacrez du temps chaque semaine à des exercices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Rejoignez une communauté</strong> : Échangez avec d'autres passionnés, posez des questions, partagez vos découvertes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Participez à des CTF</strong> : Les Capture The Flag sont d'excellents moyens de tester vos compétences.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Restez à jour</strong> : La cybersécurité évolue rapidement. Suivez les actualités et les nouvelles vulnérabilités.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Documentez vos apprentissages</strong> : Tenez un blog ou un journal de vos découvertes et techniques apprises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Envisagez une certification</strong> : OSCP, CEH, ou CompTIA Security+ peuvent valider vos compétences.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Respectez toujours l'éthique</strong> : N'utilisez vos compétences que de manière légale et éthique.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/courses/exercises">
              ← Précédent : Exercices pratiques
            </Link>
          </Button>
          <Button asChild>
            <Link href="/">
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </CourseLayout>
  );
}
