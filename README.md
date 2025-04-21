# NitroFx - Portfolio de Trading

Ce projet est un site web moderne pour NitroFx, un trader professionnel basé au Canada. Le site présente ses services de signaux de trading et ses formations.

## Fonctionnalités

- Design moderne et responsive avec animations
- Présentation des packs de trading (Silver, Gold, Platinum)
- Section de cours et formations
- Témoignages clients
- Section "À propos" présentant NitroFx et son taux de réussite de 95%

## Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Pour un code typé et plus robuste
- **Tailwind CSS** - Pour le styling
- **Framer Motion** - Pour les animations
- **Lucide React** - Pour les icônes
- **shadcn/ui** - Pour les composants UI

## Structure du projet

\`\`\`
nitrofx-portfolio/
├── app/                    # Dossier principal de l'application Next.js
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/             # Composants React
│   ├── layout/             # Composants de mise en page (navbar, footer)
│   ├── sections/           # Sections principales de la page d'accueil
│   ├── ui/                 # Composants UI réutilisables
│   └── theme-provider.tsx  # Provider pour le thème
├── lib/                    # Utilitaires et données
│   ├── data.ts             # Données pour les packs et cours
│   └── utils.ts            # Fonctions utilitaires
├── public/                 # Fichiers statiques (images, etc.)
└── tailwind.config.ts      # Configuration Tailwind CSS
\`\`\`

## Installation

1. Clonez ce dépôt
\`\`\`bash
git clone https://github.com/votre-utilisateur/nitrofx-portfolio.git
cd nitrofx-portfolio
\`\`\`

2. Installez les dépendances
\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

3. Lancez le serveur de développement
\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Déploiement

Ce projet peut être facilement déployé sur Vercel:

1. Importez votre dépôt GitHub dans Vercel
2. Vercel détectera automatiquement qu'il s'agit d'un projet Next.js
3. Cliquez sur "Deploy"

## Personnalisation

### Modifier les packs de trading
Modifiez le fichier `lib/data.ts` pour changer les détails des packs de trading, leurs prix et fonctionnalités.

### Modifier les cours
Vous pouvez également modifier les cours disponibles dans le même fichier `lib/data.ts`.

### Personnaliser les couleurs
Les couleurs principales du site sont définies dans le fichier `tailwind.config.ts`. Vous pouvez ajuster les couleurs bleues, blanches et noires selon vos préférences.

### Ajouter de nouvelles sections
Pour ajouter une nouvelle section:
1. Créez un nouveau composant dans le dossier `components/sections/`
2. Importez et ajoutez ce composant dans `app/page.tsx`

## Maintenance

### Mise à jour des dépendances
Pour maintenir le site à jour et sécurisé, exécutez régulièrement:
\`\`\`bash
npm update
# ou
yarn upgrade
\`\`\`

### Optimisation des images
Toutes les images sont optimisées via Next.js Image. Si vous ajoutez de nouvelles images, assurez-vous de les placer dans le dossier `public/` et de les utiliser avec le composant `Image` de Next.js.

## Bonnes pratiques

- Gardez le code propre et bien commenté
- Utilisez des noms de variables et de fonctions descriptifs
- Suivez les principes de conception responsive
- Testez le site sur différents appareils et navigateurs

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

Créé avec ❤️ pour NitroFx
\`\`\`

<Actions>
  <Action name="Ajouter une page de détail pour les packs" description="Créer une page détaillée pour chaque pack de trading" />
  <Action name="Intégrer un système de paiement" description="Ajouter Stripe pour les paiements des packs et cours" />
  <Action name="Créer une page de blog" description="Ajouter une section blog pour partager des analyses de marché" />
  <Action name="Ajouter une authentification" description="Intégrer un système de connexion pour les membres" />
  <Action name="Développer un tableau de bord" description="Créer un espace membre avec accès aux signaux et cours" />
</Actions>

\`\`\`


```svg file="public/8vrp3.jpg" url="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg" isTempFile
