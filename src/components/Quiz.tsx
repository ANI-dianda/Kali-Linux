'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, Award } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizProps {
  quizId: string;
  title: string;
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
}

export function Quiz({ quizId, title, questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const { saveQuizScore, addBadge } = useProgress();

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      const finalScore = Math.round(((score + (isCorrect ? 1 : 0)) / questions.length) * 100);
      saveQuizScore(quizId, finalScore);
      
      if (finalScore >= 80) {
        addBadge(`quiz-${quizId}`);
      }
      
      setShowResult(true);
      onComplete?.(finalScore);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  if (showResult) {
    const finalScore = Math.round((score / questions.length) * 100);
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {finalScore >= 80 ? (
              <>
                <Award className="h-6 w-6 text-green-600" />
                Félicitations !
              </>
            ) : (
              <>Quiz terminé</>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{finalScore}%</div>
            <p className="text-muted-foreground">
              {score} / {questions.length} bonnes réponses
            </p>
          </div>

          {finalScore >= 80 && (
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
              <p className="text-green-800 dark:text-green-200">
                🎉 Badge débloqué ! Vous maîtrisez ce sujet.
              </p>
            </div>
          )}

          <Button onClick={resetQuiz} className="w-full">
            Recommencer le quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} / {questions.length}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-medium">{question.question}</p>

        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <Button 
          onClick={handleNext} 
          disabled={selectedAnswer === null}
          className="w-full"
        >
          {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Terminer'}
        </Button>
      </CardContent>
    </Card>
  );
}
