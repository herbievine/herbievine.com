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
    "home.about":
      "hi! i'm herbie, and i'm the lead developer at terros and a core engineer at helloleo. outside of that, i'm a passionate dev with a few side projects, some cool automations and a raspberry pi. i'm also an investor, runner, gym-goer and coffee lover!",

    // WORK
    "work.title": "** work **",
    "work.terros.title": "terros",
    "work.terros.description": "web, mobile & AI development agency",
    "work.terros.role": "lead developer",
    "work.terros.location": "2025-26 - paris, france",
    "work.terros.items": [
      "- recruited and mentored developers, growing the team to 3",
      "- ran code reviews and set the team's coding standards",
      "- built the team's AI environment with custom MCPs, skills and agents",
      "- automated internal dev workflows with AI to cut repetitive work",
    ],
    "work.helloleo.title": "helloleo",
    "work.helloleo.description": "AI platform that builds the apps your ERP doesn't have",
    "work.helloleo.role": "core engineer",
    "work.helloleo.location": "2026 - paris, france",
    "work.helloleo.items": [
      "- migrated our AI harness for better DX and perf",
      "- built a scaffold that bootstraps new projects, cutting setup and token use",
      "- built a custom runtime so preview and publish share the same storage code",
      "- made apps provider-agnostic: swap D1 for SQLite, KV for Redis, R2 for S3",
    ],
    "work.univia.title": "univia",
    "work.univia.description": "platform helping students discover international universities",
    "work.univia.role": "core engineer",
    "work.univia.location": "2025 - paris, france",
    "work.univia.items": [
      "- decreased LCP by 77% and reduced CLS to 0",
      "- improved overall DX by implementing tRPC and nuqs",
    ],
    "work.inflow.title": "inflow",
    "work.inflow.description": "global blockchain payment processor",
    "work.inflow.role": "lead front-end developer",
    "work.inflow.location": "2024/25 - paris, france",
    "work.inflow.items": [
      "- developed checkout gateway which accepts 2 payment methods in 20+ countries",
      "- helped merchants receive multiple payments from a single URL",
    ],
    "work.payback.title": "payback (ex sesame)",
    "work.payback.description": "employee benefits & smart perks platform",
    "work.payback.role": "front-end developer",
    "work.payback.location": "2023/24 - paris, france",
    "work.payback.items": [
      "- improved user onboarding leading to a reduction in drop-off",
      "- increased FCP to 500ms and CLS to 0",
    ],
    "work.wn.title": "whale nation",
    "work.wn.description": "pooled crypto investment platform",
    "work.wn.role": "full-stack developer",
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
    "home.about":
      "salut ! moi c'est herbie, lead développeur chez terros et ingénieur principal chez helloleo. à côté de ça, je suis un dev passionné avec quelques projets perso, des automatisations sympas et un raspberry pi. je suis aussi investisseur, coureur, adepte de la salle et amateur de café !",

    // WORK
    "work.title": "** travail **",
    "work.terros.title": "terros",
    "work.terros.description": "agence de développement web, mobile & IA",
    "work.terros.role": "lead développeur",
    "work.terros.location": "2025/26 - paris, france",
    "work.terros.items": [
      "- recruté et accompagné des développeurs, portant l'équipe à 3",
      "- animé les code reviews et défini les standards de code de l'équipe",
      "- conçu l'environnement IA de l'équipe avec des MCPs, skills et agents",
      "- automatisé les workflows de développement internes avec l'IA",
    ],
    "work.helloleo.title": "helloleo",
    "work.helloleo.description": "plateforme IA qui crée les apps que votre ERP n'a pas",
    "work.helloleo.role": "ingénieur principal",
    "work.helloleo.location": "2026 - paris, france",
    "work.helloleo.items": [
      "- migré notre harnais IA pour une meilleure DX et perf",
      "- conçu un scaffold d'initialisation, réduisant configuration et tokens",
      "- conçu un runtime pour partager le code de stockage entre preview et publish",
      "- rendu les apps agnostiques : D1 vers SQLite, KV vers Redis, R2 vers S3",
    ],
    "work.univia.title": "univia",
    "work.univia.description": "plateforme d'orientation vers les universités internationales",
    "work.univia.role": "ingénieur principal",
    "work.univia.location": "2025 - paris, france",
    "work.univia.items": [
      "- réduit le LCP de 77 % et abaissé le CLS à 0",
      "- amélioré l'expérience utilisateur globale en implémentant tRPC et nuqs",
    ],
    "work.inflow.title": "inflow",
    "work.inflow.description": "solution de paiement mondial",
    "work.inflow.role": "lead développeur front-end",
    "work.inflow.location": "2024/25 - paris, france",
    "work.inflow.items": [
      "- développé une platform de paiement acceptant 2 méthodes de paiement dans 20+ pays",
      "- aidé les commerçants à recevoir plusieurs paiements à partir d'une seule URL",
    ],
    "work.payback.title": "payback (ex sesame)",
    "work.payback.description": "plateforme d'avantages salariés",
    "work.payback.role": "développeur front-end",
    "work.payback.location": "2023/24 - paris, france",
    "work.payback.items": [
      "- amélioré l'onboarding des utilisateurs, réduisant ainsi le taux d'abandon",
      "- augmenté la FCP à 500ms et le CLS à 0",
    ],
    "work.wn.title": "whale nation",
    "work.wn.description": "plateforme d'investissement crypto mutualisé",
    "work.wn.role": "développeur full-stack",
    "work.wn.location": "2023 - paris, france",
    "work.wn.items": [
      "- réduit le temps d'onboarding et augmenté le taux de conversion KYC",
      "- connexion avec le contrat web3 pour un service d'investissement",
    ],

    // LINKS
    "links.title": "** réseaux **",
    "links.x": "x",
    "links.github": "github",
    "links.bookCall": "réserver un appel",
    "links.email": "email",
  },
} as const;
