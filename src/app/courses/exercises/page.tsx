'use client';

import { CourseLayout } from "@/components/CourseLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useProgress } from "@/hooks/useProgress";
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Trophy,
  Target,
  Brain,
  Zap
} from "lucide-react";
import Link from "next/link";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
}

export default function ExercisesPage() {
  const { saveQuizScore } = useProgress();
  const [currentQuiz, setCurrentQuiz] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const quizzes = [
    {
      id: 1,
      title: "Quiz Kali Linux - Bases",
      icon: Target,
      difficulty: "Débutant",
      questions: [
        {
          id: 1,
          question: "Quelle est la distribution Linux spécialisée en tests de pénétration ?",
          options: ["Ubuntu", "Kali Linux", "CentOS", "Debian"],
          correct: 1,
          explanation: "Kali Linux est spécifiquement conçu pour les tests de pénétration et la sécurité informatique.",
          category: "Bases"
        },
        {
          id: 2,
          question: "Quel outil Kali permet de scanner les ports d'un réseau ?",
          options: ["Wireshark", "Nmap", "Metasploit", "John"],
          correct: 1,
          explanation: "Nmap (Network Mapper) est l'outil de référence pour scanner les ports et découvrir les services.",
          category: "Outils"
        },
        {
          id: 3,
          question: "Que signifie l'acronyme WPA ?",
          options: ["Wireless Protected Access", "Web Protocol Access", "Windows Password Auth", "WiFi Public Access"],
          correct: 0,
          explanation: "WPA signifie Wireless Protected Access, un protocole de sécurité pour les réseaux WiFi.",
          category: "Sécurité"
        }
      ]
    },
    {
      id: 2,
      title: "Quiz Hacking - Concepts",
      icon: Brain,
      difficulty: "Intermédiaire",
      questions: [
        {
          id: 4,
          question: "Qu'est-ce qu'un cheval de Troie ?",
          options: ["Un virus qui se réplique", "Un malware déguisé en logiciel légitime", "Un outil de chiffrement", "Un type de pare-feu"],
          correct: 1,
          explanation: "Un cheval de Troie est un malware qui se déguise en logiciel utile pour tromper l'utilisateur.",
          category: "Malware"
        },
        {
          id: 5,
          question: "Quelle technique exploite la psychologie humaine ?",
          options: ["Buffer overflow", "Ingénierie sociale", "SQL injection", "DDoS"],
          correct: 1,
          explanation: "L'ingénierie sociale exploite les faiblesses humaines plutôt que techniques.",
          category: "Techniques"
        },
        {
          id: 6,
          question: "Que fait un keylogger ?",
          options: ["Chiffre les données", "Enregistre les frappes clavier", "Bloque les connexions", "Scanne les ports"],
          correct: 1,
          explanation: "Un keylogger enregistre secrètement toutes les frappes clavier de l'utilisateur.",
          category: "Malware"
        }
      ]
    },
    {
      id: 3,
      title: "Quiz Sécurité - Avancé",
      icon: Zap,
      difficulty: "Avancé",
      questions: [
        {
          id: 7,
          question: "Quelle est la différence entre chiffrement symétrique et asymétrique ?",
          options: ["Aucune différence", "Symétrique = 1 clé, Asymétrique = 2 clés", "Symétrique = plus sûr", "Asymétrique = plus rapide"],
          correct: 1,
          explanation: "Le chiffrement symétrique utilise une seule clé, l'asymétrique utilise une paire de clés (publique/privée).",
          category: "Cryptographie"
        },
        {
          id: 8,
          question: "Qu'est-ce qu'un IDS ?",
          options: ["Internet Data Service", "Intrusion Detection System", "Internal Database Server", "IP Discovery Scanner"],
          correct: 1,
          explanation: "Un IDS (Intrusion Detection System) surveille et détecte les activités suspectes sur un réseau.",
          category: "Sécurité"
        },
        {
          id: 9,
          question: "Quel protocole sécurise les transactions web ?",
          options: ["HTTP", "FTP", "SSL/TLS", "SMTP"],
          correct: 2,
          explanation: "SSL/TLS chiffre les communications web pour sécuriser les transactions en ligne.",
          category: "Protocoles"
        }
      ]
    }
  ];

  const startQuiz = (quizId: number) => {
    setCurrentQuiz(quizId);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const selectAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({...prev, [questionId]: answerIndex}));
    setSelectedAnswer(answerIndex);
  };

  const submitQuiz = () => {
    setShowResults(true);
    // Sauvegarder le score
    const score = getScore();
    if (currentQuiz) {
      saveQuizScore('exercises', `quiz-${currentQuiz}`, score);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const getCurrentQuiz = () => quizzes.find(q => q.id === currentQuiz);
  const getScore = () => {
    const quiz = getCurrentQuiz();
    if (!quiz) return 0;
    let correct = 0;
    quiz.questions.forEach(q => {
      if (answers[q.id] === q.correct) correct++;
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant": return "bg-green-100 text-green-800";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
      case "Avancé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (currentQuiz) {
    const quiz = getCurrentQuiz();
    if (!quiz) return null;

    return (
      <CourseLayout title={`Quiz: ${quiz.title}`}>
        <div className="max-w-4xl mx-auto space-y-6">
          {!showResults ? (
            <>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(quiz.difficulty)}`}>
                  {quiz.difficulty}
                </span>
                <Button variant="outline" onClick={resetQuiz}>
                  ← Retour aux quiz
                </Button>
              </div>

              {quiz.questions.map((question, index) => (
                <Card key={question.id} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Question {index + 1}: {question.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => selectAnswer(question.id, optionIndex)}
                        className={`w-full p-3 text-left rounded-lg border transition-colors ${
                          answers[question.id] === optionIndex
                            ? 'border-primary bg-primary/10'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <span className="font-medium mr-2">{String.fromCharCode(65 + optionIndex)}.</span>
                        {option}
                      </button>
                    ))}
                  </CardContent>
                </Card>
              ))}

              <div className="flex justify-center">
                <Button 
                  onClick={submitQuiz}
                  disabled={Object.keys(answers).length !== quiz.questions.length}
                  className="px-8"
                >
                  Voir les résultats
                </Button>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <Card className="text-center border-primary/20">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Trophy className="h-16 w-16 text-yellow-500" />
                  </div>
                  <CardTitle className="text-2xl">
                    Score: {getScore()}%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {getScore() >= 80 ? "Excellent travail ! 🎉" : 
                     getScore() >= 60 ? "Bien joué ! 👍" : 
                     "Continuez vos efforts ! 💪"}
                  </p>
                </CardContent>
              </Card>

              {quiz.questions.map((question, index) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.correct;
                
                return (
                  <Card key={question.id} className={`border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        {isCorrect ? 
                          <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-1" /> :
                          <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                        }
                        <div>
                          <CardTitle className="text-lg">
                            Question {index + 1}: {question.question}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            Votre réponse: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                              {question.options[userAnswer]}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-600 mt-1">
                              Bonne réponse: {question.options[question.correct]}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Alert>
                        <AlertDescription>
                          <strong>Explication:</strong> {question.explanation}
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                );
              })}

              <div className="flex gap-4 justify-center">
                <Button onClick={() => startQuiz(currentQuiz)} variant="outline">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Refaire le quiz
                </Button>
                <Button onClick={resetQuiz}>
                  Autres quiz
                </Button>
              </div>
            </div>
          )}
        </div>
      </CourseLayout>
    );
  }

  return (
    <CourseLayout title="Exercices pratiques - Quiz interactifs">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <Alert>
          <Trophy className="h-4 w-4" />
          <AlertDescription className="text-sm sm:text-base">
            Testez vos connaissances avec ces quiz interactifs ! Chaque quiz vous donnera des explications détaillées pour approfondir votre apprentissage.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {quizzes.map((quiz) => {
            const Icon = quiz.icon;
            return (
              <Card key={quiz.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}>
                        {quiz.difficulty}
                      </span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl leading-tight">{quiz.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {quiz.questions.length} questions • ~{Math.ceil(quiz.questions.length * 1.5)} minutes
                  </p>
                  <Button 
                    onClick={() => startQuiz(quiz.id)}
                    className="w-full text-sm sm:text-base"
                  >
                    Commencer le quiz
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Conseils pour réussir</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm sm:text-base">Avant de commencer :</h4>
              <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                <li>• Relisez les cours correspondants</li>
                <li>• Prenez votre temps pour réfléchir</li>
                <li>• Lisez attentivement chaque question</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm sm:text-base">Après le quiz :</h4>
              <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                <li>• Lisez toutes les explications</li>
                <li>• Refaites les quiz si nécessaire</li>
                <li>• Approfondissez les sujets difficiles</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/courses/wpa3">
              ← Précédent : Comprendre WPA3
            </Link>
          </Button>
          <Button asChild>
            <Link href="/courses/resources">
              Suivant : Ressources →
            </Link>
          </Button>
        </div>
      </div>
    </CourseLayout>
  );
}