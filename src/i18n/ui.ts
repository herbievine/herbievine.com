export const languages = {
  en: "english",
  fr: "français",
};

export const defaultLang = "en";

export const ui: Record<
  keyof typeof languages,
  Record<string, string | string[]>
> = {
  en: {
    // HOME
    "home.title": "herbie vine",
    "home.location": "paris, france",
    "home.job": "freelance software engineer",
    "home.about":
      "i partner up with startups, businesses, and entrepreneurs to create powerful, scalable, and user-friendly b2b applications. each project is unique, and i work closely with you to understand your goals and deliver a product that exceeds your expectations.",

    // WORK
    "work.title": "** work **",
    "work.inflow.title": "inflow",
    "work.inflow.location": "paris, france",
    "work.inflow.items": [
      "- developed checkout gateway which accepts 2 payment methods in 20+ countries",
      "- helped merchants receive multiple payments from a single URL",
    ],
    "work.payback.title": "payback (ex sesame)",
    "work.payback.location": "paris, france",
    "work.payback.items": [
      "- improved user onboarding leading to a reduction in churn",
      "- increased FCP to 500ms and CLS to 0",
    ],
    "work.wn.title": "wn",
    "work.wn.location": "paris, france",
    "work.wn.items": [
      "- reduced onboarding time and increased KYC conversion",
      "- connection with web3 smart contract for investment service",
    ],

    // LINKS
    "links.title": "** links **",
    "links.x": "x",
    "links.linkedin": "linkedin",
    "links.github": "github",
    "links.bookCall": "book a call",
    "links.email": "email",
  },
  fr: {
    // HOME
    "home.title": "herbie vine",
    "home.location": "paris, france",
    "home.job": "développeur freelance",
    "home.about":
      "je m'associe avec des startups, des entreprises et des entrepreneurs pour créer des applications b2b puissantes, évolutives et conviviales. chaque projet est unique, et je travaille en étroite collaboration avec vous pour comprendre vos objectifs et livrer un produit qui dépasse vos attentes.",

    // WORK
    "work.title": "** travail **",
    "work.inflow.title": "inflow",
    "work.inflow.location": "paris, france",
    "work.inflow.items": [
      "- développé une platform de paiement acceptant 2 méthodes de paiement dans 20+ pays",
      "- aidé les commerçants à recevoir plusieurs paiements à partir d'une seule URL",
    ],
    "work.payback.title": "payback (ex sesame)",
    "work.payback.location": "paris, france",
    "work.payback.items": [
      "- amélioré l'intégration des utilisateurs, réduisant ainsi le taux de désabonnement",
      "- augmenté la FCP à 500ms et le CLS à 0",
    ],
    "work.wn.title": "wn",
    "work.wn.location": "paris, france",
    "work.wn.items": [
      "- réduit le temps d'intégration et augmenté le taux de conversion KYC",
      "- connexion avec le contrat intelligent Web3 pour un service d'investissement",
    ],

    // LINKS
    "links.title": "** liens **",
    "links.x": "x",
    "links.linkedin": "linkedin",
    "links.github": "github",
    "links.bookCall": "réserver un appel",
    "links.email": "email",
  },
} as const;
