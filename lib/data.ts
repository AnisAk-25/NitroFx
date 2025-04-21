/**
 * Données pour les packs de trading et les cours
 */

// Packs de trading
export const packages = [
  {
    id: "silver",
    name: "Pack Silver",
    price: "49,99€",
    description: "Idéal pour les débutants",
    features: [
      "5-10 signaux de trading par semaine",
      "Analyses techniques basiques",
      "Accès à la communauté Discord",
      "Support par email",
      "1 cours de trading débutant inclus",
    ],
    popular: false,
    color: "text-gray-400",
  },
  {
    id: "gold",
    name: "Pack Gold",
    price: "99,99€",
    description: "Pour les traders intermédiaires",
    features: [
      "15-20 signaux de trading par semaine",
      "Analyses techniques détaillées",
      "Accès à la communauté Discord",
      "Support prioritaire",
      "3 cours de trading inclus",
      "Webinaires hebdomadaires",
    ],
    popular: true,
    color: "text-yellow-400",
  },
  {
    id: "platinum",
    name: "Pack Platinum",
    price: "199,99€",
    description: "Pour les traders avancés",
    features: [
      "Signaux de trading illimités",
      "Analyses techniques avancées",
      "Accès VIP à la communauté",
      "Support 24/7 dédié",
      "Tous les cours de trading inclus",
      "Webinaires exclusifs",
      "Sessions de coaching personnalisées",
    ],
    popular: false,
    color: "text-blue-400",
  },
]

// Cours de trading
export const courses = [
  {
    id: "basics",
    title: "Fondamentaux du Trading",
    description: "Maîtrisez les bases essentielles pour débuter dans le trading",
    image: "/stock-market-analysis.png",
    duration: "6 heures",
    level: "Débutant",
    price: "79,99€",
    lessons: 12,
  },
  {
    id: "technical",
    title: "Analyse Technique Avancée",
    description: "Apprenez à lire les graphiques et à identifier les tendances",
    image: "/candlestick-chart-analysis.png",
    duration: "8 heures",
    level: "Intermédiaire",
    price: "99,99€",
    lessons: 15,
  },
  {
    id: "psychology",
    title: "Psychologie du Trading",
    description: "Développez une mentalité gagnante et gérez vos émotions",
    image: "/balanced-trader-mind.png",
    duration: "5 heures",
    level: "Tous niveaux",
    price: "89,99€",
    lessons: 10,
  },
  {
    id: "forex",
    title: "Maîtriser le Forex",
    description: "Stratégies spécifiques pour le marché des devises",
    image: "/currency-exchange-flow.png",
    duration: "10 heures",
    level: "Avancé",
    price: "129,99€",
    lessons: 18,
  },
  {
    id: "crypto",
    title: "Trading de Cryptomonnaies",
    description: "Exploitez les opportunités des marchés crypto",
    image: "/bitcoin-trading-dashboard.png",
    duration: "7 heures",
    level: "Intermédiaire",
    price: "109,99€",
    lessons: 14,
  },
  {
    id: "risk",
    title: "Gestion du Risque",
    description: "Protégez votre capital avec des techniques éprouvées",
    image: "/balancing-market-risks.png",
    duration: "4 heures",
    level: "Tous niveaux",
    price: "69,99€",
    lessons: 8,
  },
]
