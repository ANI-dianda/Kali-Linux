'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PartyPopper, X } from 'lucide-react';

export function WelcomeModal() {
  const { user } = useAuth();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (user) {
      const hasSeenWelcome = localStorage.getItem(`welcome-${user.id}`);
      if (!hasSeenWelcome) {
        setShow(true);
      }
    }
  }, [user]);

  const handleClose = () => {
    if (user) {
      localStorage.setItem(`welcome-${user.id}`, 'true');
      setShow(false);
    }
  };

  if (!show || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <Card className="w-full max-w-lg relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <PartyPopper className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-2xl md:text-3xl">
            Bienvenue sur Kali Linux Academy ! 🎉
          </CardTitle>
          <CardDescription className="text-base">
            Merci de rejoindre notre communauté d'apprenants
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Vous avez maintenant accès à tous nos cours de cybersécurité en français !
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
            <h3 className="font-semibold text-sm">Ce qui vous attend :</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>✅ 6 modules de cours complets</li>
              <li>✅ Quiz interactifs avec explications</li>
              <li>✅ Progression sauvegardée automatiquement</li>
              <li>✅ Badges et niveaux à débloquer</li>
              <li>✅ Contenu 100% gratuit</li>
            </ul>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-yellow-600 dark:text-yellow-500">⚠️ Rappel important :</strong> Utilisez ces connaissances de manière éthique et légale uniquement.
            </p>
          </div>

          <Button onClick={handleClose} className="w-full">
            Commencer mon apprentissage
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
