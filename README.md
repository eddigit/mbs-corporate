# Brief — Site Corporate Services (clone MBS)

## Contexte
Reproduire le site https://mbscorporateservices.com/ en version moderne Next.js/React, déployable sur Vercel.
C'est un site de création de sociétés à l'étranger dans 28 juridictions.
Le client (Nargis) est un collaborateur qui fait le même métier que MBS sur Dubaï.

## Design & Branding
- **Couleur principale : Vert Malachite** (#0BDA51 ou similaire — vert émeraude profond)
- **Couleur secondaire** : blanc, gris foncé pour le texte
- **Style** : corporate, professionnel, moderne, clean
- **Typographie** : Inter ou Poppins (Google Fonts)
- **Responsive** : mobile-first
- **PAS de logo pour l'instant** — mettre un placeholder texte "Corporate Services"

## Stack technique
- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Bilingue FR/EN** avec next-intl ou similaire (français par défaut)
- **Static export** compatible Vercel
- **Formulaire de contact** : simple (Nom, Prénom, Téléphone, Email, Message)

## Pages à créer

### 1. Accueil (/)
- Hero section plein écran avec titre "CRÉEZ VOTRE ENTREPRISE DANS L'UNE DES 28 JURIDICTIONS"
- Formulaire "Recevez une consultation gratuite"
- Section services (4 cartes) :
  - Création de société à l'étranger
  - Ouverture de compte bancaire
  - Transmission Universelle de Patrimoine (TUP)
  - Service d'expatriation à Dubaï
- Section "Pourquoi nous choisir" (confiance, rapidité, expertise)
- Footer avec liens et coordonnées

### 2. Nos Juridictions (/juridictions)
- Page listing des 28 pays avec drapeaux et infos clés
- Les 28 pays :
  Belgique, Belize, Bulgarie, BVI, Canada, Chypre, Delaware, République Tchèque,
  Dubaï, France, Géorgie, Gibraltar, Hong Kong, Irlande, Lituanie, Luxembourg,
  Madère, Malte, Île Maurice, Pays-Bas, Panama, Pologne, Ras Al Khaimah,
  Roumanie, Seychelles, Singapour, Suisse, Royaume-Uni
- Chaque pays = une carte cliquable avec : drapeau emoji, nom, taux d'imposition, prix à partir de
- Page individuelle par pays (/juridictions/[slug]) avec détails

### 3. Compte bancaire (/compte-bancaire)
- Ouverture de compte à distance
- Délai garanti 4 jours
- Multi-devises, Internet Banking, Cartes Visa/MC
- Section partenaires bancaires

### 4. TUP (/tup)
- Explication de la Transmission Universelle de Patrimoine
- Article 1488-5 du code civil
- Avantages vs liquidation classique
- Formulaire de vérification d'éligibilité

### 5. Services (/services)
- Ready Made Company (société pré-constituée)
- Nominee Director / Nominee Shareholder
- Adresse de domiciliation / Bureau virtuel
- Comptabilité et audit
- Expatriation à Dubaï

### 6. Contact (/contact)
- Formulaire complet (même structure que l'accueil)
- Coordonnées, téléphone, email
- Map ou adresse

## Données juridictions (exemples de tarifs du site original)
```
Royaume-Uni: taux 19%, à partir de 799€
Dubaï: taux 0%, prix sur demande
Chypre: taux 13%, à partir de 2560€
Hong Kong: taux 0%, à partir de 1899€
```
Pour les autres pays, mettre des tarifs placeholder "Nous consulter".

## Structure du projet
```
/src
  /app
    /[locale]
      /page.tsx (accueil)
      /juridictions/page.tsx
      /juridictions/[slug]/page.tsx
      /compte-bancaire/page.tsx
      /tup/page.tsx
      /services/page.tsx
      /contact/page.tsx
  /components
    /Header.tsx
    /Footer.tsx
    /HeroSection.tsx
    /ContactForm.tsx
    /JurisdictionCard.tsx
    /ServiceCard.tsx
  /data
    /jurisdictions.ts (données des 28 pays)
    /services.ts
  /messages
    /fr.json
    /en.json
```

## Instructions de déploiement
1. Créer le repo `eddigit/mbs-corporate` sur GitHub
2. Git config : user.name="Gilles KORZEC", user.email="gilleskorzec@gmail.com"
3. Push sur main
4. Le déploiement Vercel sera configuré après

## Important
- Le contenu doit être professionnel et crédible
- Les textes juridictions peuvent être inspirés de l'original mais réécrits
- Mettre un cookie banner simple (RGPD)
- SEO : meta titles et descriptions pour chaque page
- Performance : optimiser les images, lazy loading

## Commande de notification
Quand c'est terminé :
```bash
openclaw system event --text "Done: Site MBS Corporate créé et pushé sur eddigit/mbs-corporate" --mode now
```
