# 🔐 Configuration de l'Authentification Supabase

## ✅ Ce qui a été créé

### Composants d'authentification
1. **AuthContext** (`src/contexts/AuthContext.tsx`) - Gestion de l'état utilisateur
2. **Page Login** (`/login`) - Connexion email/password
3. **Page Register** (`/register`) - Inscription
4. **Header mis à jour** - Boutons Login/Logout + affichage email

### Fonctionnalités
- ✅ Inscription avec email/password
- ✅ Connexion avec email/password
- ✅ Déconnexion
- ✅ Affichage de l'utilisateur connecté dans le Header
- ✅ Gestion des erreurs
- ✅ Messages de succès
- ✅ Responsive mobile

## 🚀 Configuration Supabase (À FAIRE)

### Étape 1 : Créer un projet Supabase

1. Allez sur https://supabase.com
2. Cliquez sur "Start your project"
3. Créez un compte (gratuit)
4. Créez un nouveau projet :
   - **Name**: kali-linux-academy
   - **Database Password**: (choisissez un mot de passe fort)
   - **Region**: Europe (West) - le plus proche du Burkina Faso
   - **Pricing Plan**: Free (50k users, 500MB DB)

### Étape 2 : Récupérer les clés API

1. Dans votre projet Supabase, allez dans **Settings** > **API**
2. Copiez ces valeurs :
   - **Project URL** (ex: https://xxxxx.supabase.co)
   - **anon public** key (commence par eyJ...)

### Étape 3 : Configurer les variables d'environnement

#### En local (`.env.local`)
```bash
NEXT_PUBLIC_DATABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_DATABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Sur Netlify
1. Allez sur https://app.netlify.com/projects/ani-dianda
2. **Site settings** > **Environment variables**
3. Ajoutez :
   - `NEXT_PUBLIC_DATABASE_URL` = votre Project URL
   - `NEXT_PUBLIC_DATABASE_PUBLISHABLE_KEY` = votre anon key

### Étape 4 : Configurer l'authentification Supabase

1. Dans Supabase, allez dans **Authentication** > **Providers**
2. Activez **Email** (déjà activé par défaut)
3. Dans **URL Configuration**, ajoutez :
   - **Site URL**: https://ani-dianda.netlify.app
   - **Redirect URLs**: 
     - https://ani-dianda.netlify.app
     - https://ani-dianda.netlify.app/login
     - http://localhost:3000 (pour dev local)

### Étape 5 : Configurer l'email de confirmation (Optionnel)

Par défaut, Supabase envoie un email de confirmation.

**Option A** : Désactiver la confirmation (pour tester rapidement)
1. **Authentication** > **Settings**
2. Décochez "Enable email confirmations"

**Option B** : Garder la confirmation (recommandé en production)
- Les utilisateurs recevront un email pour confirmer leur compte
- Vous pouvez personnaliser les templates d'email dans **Authentication** > **Email Templates**

## 📊 Structure de la base de données (À créer)

Pour sauvegarder la progression des utilisateurs, créez cette table :

### Table `user_progress`

```sql
-- Dans Supabase SQL Editor
create table user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  completed_lessons text[] default '{}',
  badges text[] default '{}',
  quiz_scores jsonb default '{}',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id)
);

-- Enable Row Level Security
alter table user_progress enable row level security;

-- Policy: Users can only see their own progress
create policy "Users can view own progress"
  on user_progress for select
  using (auth.uid() = user_id);

-- Policy: Users can insert their own progress
create policy "Users can insert own progress"
  on user_progress for insert
  with check (auth.uid() = user_id);

-- Policy: Users can update their own progress
create policy "Users can update own progress"
  on user_progress for update
  using (auth.uid() = user_id);
```

## 🔄 Migration localStorage → Supabase

Une fois Supabase configuré, créez ce hook pour migrer automatiquement :

```typescript
// src/hooks/useSupabaseProgress.ts
'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

export function useSupabaseProgress() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Migrer localStorage vers Supabase
      const localProgress = localStorage.getItem('kali-academy-progress');
      if (localProgress) {
        const data = JSON.parse(localProgress);
        supabase
          .from('user_progress')
          .upsert({
            user_id: user.id,
            completed_lessons: data.completedLessons,
            badges: data.badges,
            quiz_scores: data.quizScores,
          })
          .then(() => {
            console.log('Progression migrée vers Supabase');
          });
      }
    }
  }, [user]);
}
```

## 🧪 Test en local

1. Configurez `.env.local` avec vos vraies clés Supabase
2. Redémarrez le serveur : `pnpm dev`
3. Allez sur http://localhost:3000/register
4. Créez un compte
5. Vérifiez dans Supabase **Authentication** > **Users** que l'utilisateur est créé

## 📝 Fichiers créés

- `src/contexts/AuthContext.tsx` - Context d'authentification
- `src/app/login/page.tsx` - Page de connexion
- `src/app/register/page.tsx` - Page d'inscription
- `src/components/Header.tsx` - Mis à jour avec Login/Logout
- `src/app/layout.tsx` - Mis à jour avec AuthProvider
- `.env.local` - Variables d'environnement (avec placeholders)

## ⚠️ Important

Le fichier `.env.local` contient des **placeholders**. Vous devez :
1. Créer votre projet Supabase
2. Remplacer les valeurs dans `.env.local`
3. Ajouter les mêmes variables sur Netlify
4. **NE JAMAIS** commit `.env.local` dans Git (déjà dans .gitignore)

## 🎯 Prochaines étapes

1. ✅ Créer projet Supabase
2. ✅ Configurer variables d'environnement
3. ✅ Créer table `user_progress`
4. ✅ Tester inscription/connexion
5. ⏳ Migrer useProgress pour utiliser Supabase au lieu de localStorage
6. ⏳ Ajouter page profil utilisateur
7. ⏳ Ajouter reset password

## 📞 Besoin d'aide ?

Si vous avez des questions sur la configuration Supabase, consultez :
- Documentation : https://supabase.com/docs/guides/auth
- Dashboard : https://app.supabase.com

---

**Status actuel** : ✅ Code prêt, en attente de configuration Supabase
