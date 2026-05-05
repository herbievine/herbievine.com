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
    "home.job": "software engineer",
    "home.about":
      "i partner up with startups, businesses, and entrepreneurs to create powerful, scalable, and user-friendly b2b applications. each project is unique, and i work closely with you to understand your goals and deliver a product that exceeds your expectations.",

    // WORK
    "work.title": "** work **",
    "work.helloleo.title": "helloleo",
    "work.helloleo.location": "2026 paris, france",
    "work.helloleo.items": [
      "- migrated our internal AI harness from Aider to OpenCode and the developement of custom plugins, leading to a better UX",
      "- improved the client's production deployement process by leveraging Cloudflare WfP, giving us better uptime and custom domains for our clients",
    ],
    "work.terros.title": "terros",
    "work.terros.location": "2025/26 paris, france",
    "work.terros.items": [
      "- led a 3-person engineering team, coordinating access, resolving blockers, and mentoring developers",
      "- engineered a custom sandboxed Python Code Interpreter for Open WebUI, enabling secure LLM execution on local CSV/XSLX data",
      "- improved PoS ticket processing from 7+ hours to less than 90 minutes by optimising SQL upserts/inserts",
    ],
    "work.univia.title": "univia",
    "work.univia.location": "2025 - paris, france",
    "work.univia.items": [
      "- decreased LCP by 77% and reduced CLS to 0",
      "- improved overall DX by implementing tRPC and nuqs",
    ],
    "work.inflow.title": "inflow",
    "work.inflow.location": "2024/25 - paris, france",
    "work.inflow.items": [
      "- developed checkout gateway which accepts 2 payment methods in 20+ countries",
      "- helped merchants receive multiple payments from a single URL",
    ],
    "work.payback.title": "payback (ex sesame)",
    "work.payback.location": "2023/24 - paris, france",
    "work.payback.items": [
      "- improved user onboarding leading to a reduction in churn",
      "- increased FCP to 500ms and CLS to 0",
    ],
    "work.wn.title": "whale nation",
    "work.wn.location": "2023 - paris, france",
    "work.wn.items": [
      "- reduced onboarding time and increased KYC conversion",
      "- connection with web3 smart contract for investment service",
    ],

    // LINKS
    "links.title": "** links **",
    "links.x": "x",
    "links.github": "github",
    "links.bookCall": "book a call",
    "links.email": "email",
  },
  fr: {
    // HOME
    "home.title": "herbie vine",
    "home.location": "paris, france",
    "home.job": "développeur",
    "home.about":
      "je m'associe avec des startups, des entreprises et des entrepreneurs pour créer des applications B2B puissantes, évolutives et conviviales. chaque projet est unique, et je travaille en étroite collaboration avec vous pour comprendre vos objectifs et livrer un produit qui dépasse vos attentes.",

    // WORK
    "work.title": "** travail **",
    "work.helloleo.title": "helloleo",
    "work.helloleo.location": "2026 paris, france",
    "work.helloleo.items": [
      "- migré notre harnais IA interne d'Aider vers OpenCode et développé des plugins personnalisés, améliorant l'expérience utilisateur",
      "- amélioré le processus de déploiement en production des clients en utilisant Cloudflare WfP, offrant une meilleure disponibilité et des domaines personnalisés",
    ],
    "work.terros.title": "terros",
    "work.terros.location": "2025/26 paris, france",
    "work.terros.items": [
      "- dirigé une équipe de 3 développeurs, coordonnant les accès, résolvant les blocages et accompagnant leur montée en compétences",
      "- conception d'un interpréteur de code Python sécurisé (sandbox) custom pour Open WebUI, permettant l'analyse de fichiers CSV/XSLX par LLM",
      "- optimisation du traitement des tickets de caisse de 7+ heures à moins de 90 minutes en optimisant les upserts/inserts SQL",
    ],
    "work.univia.title": "univia",
    "work.univia.location": "2025 - paris, france",
    "work.univia.items": [
      "- réduit le LCP de 77 % et abaissé le CLS à 0",
      "- amélioré l'expérience utilisateur globale en implémentant tRPC et nuqs",
    ],
    "work.inflow.title": "inflow",
    "work.inflow.location": "2024/25 - paris, france",
    "work.inflow.items": [
      "- développé une platform de paiement acceptant 2 méthodes de paiement dans 20+ pays",
      "- aidé les commerçants à recevoir plusieurs paiements à partir d'une seule URL",
    ],
    "work.payback.title": "payback (ex sesame)",
    "work.payback.location": "2023/24 - paris, france",
    "work.payback.items": [
      "- amélioré l'intégration des utilisateurs, réduisant ainsi le taux de désabonnement",
      "- augmenté la FCP à 500ms et le CLS à 0",
    ],
    "work.wn.title": "wn",
    "work.wn.location": "2023 - paris, france",
    "work.wn.items": [
      "- réduit le temps d'intégration et augmenté le taux de conversion KYC",
      "- connexion avec le contrat intelligent Web3 pour un service d'investissement",
    ],

    // LINKS
    "links.title": "** réseaux **",
    "links.x": "x",
    "links.github": "github",
    "links.bookCall": "réserver un appel",
    "links.email": "email",
  },
} as const;
