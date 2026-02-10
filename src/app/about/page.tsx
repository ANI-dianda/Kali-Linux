import { Shield, Target, Heart, Code } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="space-y-8">
            {/* Hero */}
            <div className="text-center space-y-4">
              <Shield className="h-16 w-16 text-primary mx-auto" />
              <h1 className="text-4xl font-bold">À propos de Kali Linux Academy</h1>
              <p className="text-xl text-muted-foreground">
                Une plateforme éducative gratuite pour apprendre la cybersécurité en français
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Notre Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Kali Linux Academy a pour mission de démocratiser l'apprentissage de la cybersécurité 
                en proposant des cours gratuits, accessibles et en français. Nous croyons que la sécurité 
                informatique doit être accessible à tous, quel que soit le niveau de départ.
              </p>
            </div>

            {/* Valeurs */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Nos Valeurs</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Éthique :</strong> Nous promouvons uniquement le hacking éthique et légal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Accessibilité :</strong> Tous nos contenus sont gratuits et en français</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Pédagogie :</strong> Approche progressive adaptée à tous les niveaux</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Open Source :</strong> Code source disponible sur GitHub</span>
                </li>
              </ul>
            </div>

            {/* Créateur */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Le Créateur</h2>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <h3 className="text-xl font-semibold">DIANDA Jean Anicet</h3>
                <p className="text-muted-foreground">
                  Passionné de cybersécurité basé à Ouagadougou, Burkina Faso. 
                  Cette plateforme est née de la volonté de partager mes connaissances 
                  et de contribuer à la formation en cybersécurité dans l'espace francophone africain.
                </p>
                <div className="flex gap-4 text-sm">
                  <a 
                    href="https://github.com/ANI-dianda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Avertissement légal */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-lg space-y-3">
              <h2 className="text-xl font-bold text-yellow-600 dark:text-yellow-500">
                ⚠️ Avertissement Légal Important
              </h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Tous les contenus de cette plateforme sont à usage éducatif uniquement.</strong>
                </p>
                <p>
                  Le cracking Wi-Fi, les tests de pénétration ou toute autre activité de hacking 
                  sans autorisation écrite explicite du propriétaire du système est <strong>ILLÉGAL</strong> 
                  et puni par la loi dans la plupart des pays, y compris au Burkina Faso.
                </p>
                <p>
                  Utilisez ces connaissances uniquement sur vos propres systèmes, dans des 
                  environnements de test autorisés, ou dans le cadre de votre travail avec 
                  les autorisations appropriées.
                </p>
                <p className="font-semibold">
                  L'auteur et la plateforme déclinent toute responsabilité en cas d'usage 
                  illégal ou non éthique des informations partagées.
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Technologies Utilisées</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-muted/50 p-3 rounded-lg">Next.js 15</div>
                <div className="bg-muted/50 p-3 rounded-lg">React 19</div>
                <div className="bg-muted/50 p-3 rounded-lg">TypeScript</div>
                <div className="bg-muted/50 p-3 rounded-lg">TailwindCSS 4</div>
                <div className="bg-muted/50 p-3 rounded-lg">Supabase</div>
                <div className="bg-muted/50 p-3 rounded-lg">Radix UI</div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
