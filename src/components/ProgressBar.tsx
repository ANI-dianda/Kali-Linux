'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useProgress } from "@/hooks/useProgress";
import { Trophy, Star, Target } from "lucide-react";

export function ProgressBar() {
  const { progress, getProgressPercentage } = useProgress();
  const percentage = getProgressPercentage();

  const getLevelIcon = () => {
    switch (progress.currentLevel) {
      case 'Expert': return <Trophy className="h-4 w-4 text-yellow-500" />;
      case 'Intermédiaire': return <Star className="h-4 w-4 text-blue-500" />;
      default: return <Target className="h-4 w-4 text-green-500" />;
    }
  };

  const getLevelColor = () => {
    switch (progress.currentLevel) {
      case 'Expert': return 'bg-yellow-100 text-yellow-800';
      case 'Intermédiaire': return 'bg-blue-100 text-blue-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {getLevelIcon()}
            <span className="font-semibold text-sm">Votre progression</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getLevelColor()}>
              {progress.currentLevel}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {progress.totalBadges} badges
            </span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{percentage}% terminé</span>
            <span>{Object.values(progress.courses).filter(c => c.completed).length}/6 cours</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}