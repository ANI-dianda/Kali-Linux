# Changelog - Kali Linux Academy

## Version 2.0 - Navigation Complète (Janvier 2025)

### ✅ Priorités Hautes Complétées

#### 1. Header de Navigation Fixe
- **Fichier**: `src/components/Header.tsx`
- Navigation sticky en haut de page avec logo
- Menu responsive avec hamburger sur mobile
- Liens vers: Accueil, Parcours, À propos, Contact, GitHub
- Toggle de thème intégré
- Design moderne avec backdrop blur

#### 2. Footer Complet
- **Fichier**: `src/components/Footer.tsx`
- 4 colonnes: Logo/Description, Navigation, Ressources, Réseaux sociaux
- Liens vers GitHub, LinkedIn, Twitter, Email
- Copyright: © 2025 DIANDA Jean Anicet - Ouagadougou, Burkina Faso
- Mention open source avec lien GitHub
- Design responsive

#### 3. Bandeau Avertissement Légal
- **Fichier**: `src/components/LegalBanner.tsx` (déjà existant, corrigé)
- Popup au premier chargement (localStorage)
- Message clair sur l'usage éthique et légal
- Bouton "J'ai compris et j'accepte"
- Couleur jaune/warning pour attirer l'attention

#### 4. Bouton Copier pour Code
- **Fichier**: `src/components/CodeBlock.tsx`
- Composant réutilisable pour afficher du code
- Bouton "Copier" qui apparaît au hover
- Feedback visuel "Copié !" pendant 2 secondes
- Support de différents langages (bash, python, etc.)
- Titre optionnel pour les blocs de code

#### 5. Pages Essentielles

##### Page À propos (`/about`)
- **Fichier**: `src/app/about/page.tsx`
- Mission et valeurs de la plateforme
- Présentation du créateur (DIANDA Jean Anicet)
- Avertissement légal détaillé
- Technologies utilisées (Next.js, React, TypeScript, etc.)
- Liens vers réseaux sociaux

##### Page Contact (`/contact`)
- **Fichier**: `src/app/contact/page.tsx`
- Cards pour chaque moyen de contact (Email, GitHub, LinkedIn, Twitter)
- Section communauté (Discord/Telegram à venir)
- Section contributions open source
- Design moderne avec icônes

##### Page Index des Cours (`/courses`)
- **Fichier**: `src/app/courses/page.tsx`
- Liste complète des 6 cours avec progression
- Badges de difficulté (Débutant, Intermédiaire, Avancé)
- Durée estimée pour chaque cours
- Indicateur de cours terminés (checkmark vert)
- Parcours recommandé avec ordre suggéré

#### 6. Améliorations Homepage
- **Fichier**: `src/app/page.tsx`
- CTA principal: "Commencer gratuitement" (au lieu de "Commencer le parcours")
- CTA secondaire: "Voir tous les cours" (au lieu de "Tester mes connaissances")
- Bouton "En savoir plus" dans la section About
- Suppression du header/footer inline (maintenant dans layout)

#### 7. Layout Global
- **Fichier**: `src/app/layout.tsx`
- Header et Footer intégrés dans le layout
- Disponibles sur toutes les pages automatiquement
- Structure cohérente sur tout le site

### 🔧 Corrections Techniques

1. **useProgress Hook** (`src/hooks/useProgress.ts`)
   - Ajout de `isCourseCompleted(courseId)`
   - Ajout de `markCourseCompleted(courseId)`
   - Ajout de `getNextCourse(currentCourseId)`
   - Correction de `saveQuizScore` (2 paramètres au lieu de 3)

2. **CourseNavigation** (`src/components/CourseNavigation.tsx`)
   - Correction du type de retour de `getNextCourse` (string au lieu d'objet)
   - Ajout d'un mapping des IDs vers noms de cours
   - Amélioration de l'affichage du cours suivant

3. **LegalBanner** (`src/components/LegalBanner.tsx`)
   - Suppression du prop `size` non supporté par Button
   - Utilisation de className pour le sizing

4. **Exercises Page** (`src/app/courses/exercises/page.tsx`)
   - Correction de l'appel `saveQuizScore` avec 2 paramètres

### 📊 Statistiques

- **Nouveaux fichiers**: 5
  - Header.tsx
  - Footer.tsx
  - CodeBlock.tsx
  - about/page.tsx
  - contact/page.tsx
  - courses/page.tsx

- **Fichiers modifiés**: 6
  - layout.tsx
  - page.tsx
  - useProgress.ts
  - CourseNavigation.tsx
  - LegalBanner.tsx
  - exercises/page.tsx

- **Build**: ✅ Réussi (16 pages générées)
- **Déploiement**: ✅ Poussé sur GitHub (commit 127e2c0)
- **Netlify**: 🚀 Déploiement automatique en cours

### 🎯 Prochaines Étapes Suggérées

#### Priorités Moyennes (Design/UX)
- [ ] Ajouter des icônes Lucide partout (déjà partiellement fait)
- [ ] Améliorer les jauges de progression (cercles animés)
- [ ] Section témoignages sur homepage
- [ ] Améliorer les typographies (déjà fait avec enhanced.css)

#### Contenu & Pédagogie
- [ ] Développer le module "Tester son réseau" (actuellement basique)
- [ ] Ajouter des captures d'écran/GIFs dans les cours
- [ ] Créer des walkthroughs pour VulnHub
- [ ] Ajouter plus de quiz interactifs

#### Interactivité & Gamification
- [ ] Système de badges visuels (déjà en place, à améliorer)
- [ ] Checklist par module
- [ ] Leaderboard (optionnel)

#### Idées Avancées (Long Terme)
- [ ] Système de comptes avec Supabase Auth
- [ ] Intégration vidéos YouTube
- [ ] PWA (Progressive Web App)
- [ ] Certificat de fin de parcours
- [ ] Communauté Discord/Telegram
- [ ] Version multilingue (FR/EN)

### 🌐 Liens Utiles

- **Site en production**: https://ani-dianda.netlify.app
- **GitHub**: https://github.com/ANI-dianda/Kali-Linux
- **Netlify Dashboard**: https://app.netlify.com/projects/ani-dianda

### 📝 Notes Techniques

- **Framework**: Next.js 15.5.7 (App Router)
- **React**: 19
- **TypeScript**: Strict mode
- **Styling**: TailwindCSS 4 + CSS custom (themes.css, enhanced.css)
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Déploiement**: Netlify (auto-deploy depuis main)
- **Stockage**: localStorage (progression utilisateur)

### ⚠️ Contraintes Connues

- Button component: Seulement variants 'default' et 'outline' (pas 'ghost')
- Button component: Pas de prop `size` (utiliser className)
- Supabase: Configuré mais Auth pas encore activé
- Progression: Stockée en localStorage (perdue si cache effacé)

---

**Créé par**: DIANDA Jean Anicet  
**Date**: Janvier 2025  
**Localisation**: Ouagadougou, Burkina Faso 🇧🇫
