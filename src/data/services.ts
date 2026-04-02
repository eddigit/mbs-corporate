export interface Service {
  slug: string;
  icon: string;
  titleFr: string;
  titleEn: string;
  shortDescFr: string;
  shortDescEn: string;
  descriptionFr: string;
  descriptionEn: string;
  featuresFr: string[];
  featuresEn: string[];
}

export const services: Service[] = [
  {
    slug: "creation-societe",
    icon: "🏢",
    titleFr: "Création de société à l'étranger",
    titleEn: "Company Formation Abroad",
    shortDescFr: "Créez votre entreprise dans l'une de nos 28 juridictions partenaires",
    shortDescEn: "Create your company in one of our 28 partner jurisdictions",
    descriptionFr: "Nous vous accompagnons dans la création de votre société à l'étranger, de la sélection de la juridiction optimale à l'immatriculation complète. Notre expertise couvre 28 juridictions et tous les types de structures juridiques.",
    descriptionEn: "We guide you through the creation of your company abroad, from selecting the optimal jurisdiction to complete registration. Our expertise covers 28 jurisdictions and all types of legal structures.",
    featuresFr: ["Analyse de vos besoins et objectifs", "Sélection de la juridiction optimale", "Constitution et immatriculation", "Obtention des documents officiels", "Accompagnement post-création"],
    featuresEn: ["Analysis of your needs and objectives", "Selection of optimal jurisdiction", "Constitution and registration", "Obtaining official documents", "Post-creation support"],
  },
  {
    slug: "compte-bancaire",
    icon: "🏦",
    titleFr: "Ouverture de compte bancaire",
    titleEn: "Bank Account Opening",
    shortDescFr: "Ouvrez votre compte bancaire professionnel à distance en 4 jours",
    shortDescEn: "Open your professional bank account remotely in 4 days",
    descriptionFr: "Grâce à nos partenariats bancaires exclusifs, nous vous ouvrons un compte bancaire professionnel à distance, avec accès multi-devises, Internet Banking et cartes de paiement internationales.",
    descriptionEn: "Thanks to our exclusive banking partnerships, we open a professional bank account for you remotely, with multi-currency access, Internet Banking, and international payment cards.",
    featuresFr: ["Ouverture à distance", "Délai garanti 4 jours", "Compte multi-devises", "Internet Banking", "Cartes Visa/Mastercard"],
    featuresEn: ["Remote opening", "Guaranteed 4-day timeline", "Multi-currency account", "Internet Banking", "Visa/Mastercard cards"],
  },
  {
    slug: "tup",
    icon: "📋",
    titleFr: "Transmission Universelle de Patrimoine",
    titleEn: "Universal Transfer of Assets",
    shortDescFr: "Transférez le patrimoine de votre société via la TUP (Art. 1844-5)",
    shortDescEn: "Transfer your company's assets via TUP (Art. 1844-5)",
    descriptionFr: "La Transmission Universelle de Patrimoine (TUP) permet la dissolution d'une filiale détenue à 100% sans liquidation. Une procédure rapide et économique prévue par l'article 1844-5 du Code civil.",
    descriptionEn: "The Universal Transfer of Assets (TUP) allows the dissolution of a 100%-owned subsidiary without liquidation. A quick and economical procedure provided by Article 1844-5 of the Civil Code.",
    featuresFr: ["Alternative à la liquidation classique", "Procédure simplifiée", "Transmission automatique du patrimoine", "Délai réduit (30 jours d'opposition)", "Économie de coûts significative"],
    featuresEn: ["Alternative to standard liquidation", "Simplified procedure", "Automatic asset transfer", "Reduced timeline (30-day opposition period)", "Significant cost savings"],
  },
  {
    slug: "expatriation-dubai",
    icon: "✈️",
    titleFr: "Expatriation à Dubaï",
    titleEn: "Dubai Expatriation",
    shortDescFr: "Accompagnement complet pour votre installation à Dubaï",
    shortDescEn: "Complete support for your relocation to Dubai",
    descriptionFr: "Nous vous accompagnons dans toutes les étapes de votre expatriation à Dubaï : création de société, visa de résidence, ouverture de compte bancaire, recherche de logement et installation.",
    descriptionEn: "We support you in all stages of your expatriation to Dubai: company creation, residence visa, bank account opening, housing search, and settlement.",
    featuresFr: ["Création de société à Dubaï", "Visa de résidence UAE", "Ouverture de compte bancaire local", "Accompagnement installation", "Assistance administrative complète"],
    featuresEn: ["Dubai company creation", "UAE residence visa", "Local bank account opening", "Settlement support", "Complete administrative assistance"],
  },
  {
    slug: "ready-made",
    icon: "⚡",
    titleFr: "Ready Made Company",
    titleEn: "Ready Made Company",
    shortDescFr: "Sociétés pré-constituées disponibles immédiatement",
    shortDescEn: "Pre-incorporated companies available immediately",
    descriptionFr: "Obtenez une société déjà constituée et prête à opérer immédiatement. Idéal pour les projets urgents nécessitant une structure juridique opérationnelle sans délai.",
    descriptionEn: "Get a pre-incorporated company ready to operate immediately. Ideal for urgent projects requiring an operational legal structure without delay.",
    featuresFr: ["Disponibilité immédiate", "Historique d'entreprise", "Transfert de propriété rapide", "Documents prêts à l'emploi"],
    featuresEn: ["Immediate availability", "Company history", "Quick ownership transfer", "Ready-to-use documents"],
  },
  {
    slug: "nominee",
    icon: "👤",
    titleFr: "Nominee Director & Shareholder",
    titleEn: "Nominee Director & Shareholder",
    shortDescFr: "Protection de votre identité avec des services de nominee",
    shortDescEn: "Identity protection with nominee services",
    descriptionFr: "Nos services de Nominee Director et Nominee Shareholder vous permettent de protéger votre identité dans les registres publics tout en conservant le contrôle effectif de votre société.",
    descriptionEn: "Our Nominee Director and Nominee Shareholder services allow you to protect your identity in public registers while maintaining effective control of your company.",
    featuresFr: ["Confidentialité renforcée", "Contrôle effectif maintenu", "Professionnels qualifiés", "Conformité légale garantie"],
    featuresEn: ["Enhanced confidentiality", "Effective control maintained", "Qualified professionals", "Guaranteed legal compliance"],
  },
  {
    slug: "domiciliation",
    icon: "📍",
    titleFr: "Domiciliation & Bureau virtuel",
    titleEn: "Registered Address & Virtual Office",
    shortDescFr: "Adresse de prestige et services de bureau virtuel",
    shortDescEn: "Prestigious address and virtual office services",
    descriptionFr: "Disposez d'une adresse de domiciliation prestigieuse et de services de bureau virtuel complets : réception de courrier, ligne téléphonique dédiée et salle de réunion sur demande.",
    descriptionEn: "Get a prestigious registered address and comprehensive virtual office services: mail reception, dedicated phone line, and meeting room on demand.",
    featuresFr: ["Adresse de prestige", "Réception et scan du courrier", "Ligne téléphonique dédiée", "Salle de réunion sur demande"],
    featuresEn: ["Prestigious address", "Mail reception and scanning", "Dedicated phone line", "Meeting room on demand"],
  },
  {
    slug: "comptabilite",
    icon: "📊",
    titleFr: "Comptabilité & Audit",
    titleEn: "Accounting & Audit",
    shortDescFr: "Services comptables et d'audit pour votre société internationale",
    shortDescEn: "Accounting and audit services for your international company",
    descriptionFr: "Nos experts-comptables et auditeurs assurent la tenue de votre comptabilité, la préparation de vos états financiers et la conformité fiscale de votre société dans toutes nos juridictions.",
    descriptionEn: "Our accountants and auditors handle your bookkeeping, preparation of financial statements, and tax compliance of your company in all our jurisdictions.",
    featuresFr: ["Tenue de comptabilité", "États financiers annuels", "Déclarations fiscales", "Audit et certification"],
    featuresEn: ["Bookkeeping", "Annual financial statements", "Tax declarations", "Audit and certification"],
  },
];
