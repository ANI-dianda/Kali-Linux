'use client';

import { Clock, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ReadingTimeProps {
  wordCount: number;
  difficulty?: 'Débutant' | 'Intermédiaire' | 'Avancé';
}

export function ReadingTime({ wordCount, difficulty = 'Débutant' }: ReadingTimeProps) {
  // Vitesse de lecture moyenne : 200 mots/minute
  const readingTime = Math.ceil(wordCount / 200);
  
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Débutant': return 'text-green-600 bg-green-50';
      case 'Intermédiaire': return 'text-yellow-600 bg-yellow-50';
      case 'Avancé': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <Card className="mb-6 border-l-4 border-l-primary">
      <CardContent className="py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min de lecture</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span>{wordCount.toLocaleString()} mots</span>
            </div>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
            {difficulty}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}