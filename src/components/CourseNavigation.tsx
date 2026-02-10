'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/hooks/useProgress";
import { CheckCircle2, ArrowRight, Share2 } from "lucide-react";
import Link from "next/link";

interface CourseNavigationProps {
  currentCourseId: string;
  onComplete?: () => void;
}

export function CourseNavigation({ currentCourseId, onComplete }: CourseNavigationProps) {
  const { markCourseCompleted, getNextCourse, isCourseCompleted } = useProgress();
  const nextCourseId = getNextCourse(currentCourseId);
  const isCompleted = isCourseCompleted(currentCourseId);

  const courseNames: Record<string, string> = {
    'introduction': 'Introduction à Kali Linux',
    'hacking-fundamentals': 'Fondamentaux du Hacking',
    'network-testing': 'Tester son réseau',
    'wifi-security': 'Sécurité WiFi',
    'exercises': 'Exercices pratiques',
    'resources': 'Ressources'
  };

  const handleComplete = () => {
    markCourseCompleted(currentCourseId);
    onComplete?.();
  };

  const shareProgress = () => {
    const text = `Je viens de terminer le cours "${currentCourseId}" sur Kali Linux Academy ! 🎉`;
    if (navigator.share) {
      navigator.share({
        title: 'Kali Linux Academy',
        text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
      alert('Lien copié dans le presse-papier !');
    }
  };

  return (
    <Card className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10">
      <CardContent className="pt-6">
        <div className="space-y-4">
          {!isCompleted ? (
            <div className="text-center space-y-3">
              <h3 className="font-semibold text-lg">Félicitations ! 🎉</h3>
              <p className="text-muted-foreground">
                Vous avez terminé ce cours. Marquez-le comme terminé pour débloquer le suivant.
              </p>
              <div className="flex gap-3 justify-center">
                <Button onClick={handleComplete} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Marquer comme terminé
                </Button>
                <Button variant="outline" onClick={shareProgress} className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Partager
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">Cours terminé !</span>
              </div>
              {nextCourseId && (
                <div className="space-y-2">
                  <p className="text-muted-foreground">Cours suivant recommandé :</p>
                  <Button asChild className="flex items-center gap-2">
                    <Link href={`/courses/${nextCourseId}`}>
                      {courseNames[nextCourseId] || nextCourseId}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}