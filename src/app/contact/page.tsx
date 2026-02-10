'use client';

import { Mail, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="space-y-8">
            {/* Hero */}
            <div className="text-center space-y-4">
              <MessageSquare className="h-16 w-16 text-primary mx-auto" />
              <h1 className="text-4xl font-bold">Contactez-nous</h1>
              <p className="text-xl text-muted-foreground">
                Une question ? Une suggestion ? N'hésitez pas à nous contacter !
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <Card>
                <CardHeader>
                  <Mail className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Email</CardTitle>
                  <CardDescription>
                    Pour toute question ou suggestion
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:contact@kalilinuxacademy.com">
                      Envoyer un email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* GitHub */}
              <Card>
                <CardHeader>
                  <Github className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>GitHub</CardTitle>
                  <CardDescription>
                    Code source et contributions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <a 
                      href="https://github.com/ANI-dianda/Kali-Linux" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Voir le projet
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card>
                <CardHeader>
                  <Linkedin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>LinkedIn</CardTitle>
                  <CardDescription>
                    Réseau professionnel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Me suivre
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Twitter */}
              <Card>
                <CardHeader>
                  <Twitter className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Twitter / X</CardTitle>
                  <CardDescription>
                    Actualités et discussions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Me suivre
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Community */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Rejoindre la Communauté</CardTitle>
                <CardDescription>
                  Échangez avec d'autres apprenants et partagez vos expériences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Une communauté Discord/Telegram sera bientôt disponible pour permettre 
                  aux apprenants d'échanger, de s'entraider et de partager leurs projets.
                </p>
                <Button variant="outline" disabled>
                  Bientôt disponible
                </Button>
              </CardContent>
            </Card>

            {/* Contributions */}
            <Card>
              <CardHeader>
                <CardTitle>Contribuer au Projet</CardTitle>
                <CardDescription>
                  Ce projet est open source et accueille les contributions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Vous pouvez contribuer de plusieurs façons :
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Signaler des bugs ou proposer des améliorations sur GitHub</li>
                  <li>• Proposer de nouveaux cours ou exercices</li>
                  <li>• Améliorer la documentation</li>
                  <li>• Traduire le contenu</li>
                  <li>• Partager la plateforme avec d'autres apprenants</li>
                </ul>
                <Button asChild>
                  <a 
                    href="https://github.com/ANI-dianda/Kali-Linux" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Contribuer sur GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
  );
}
