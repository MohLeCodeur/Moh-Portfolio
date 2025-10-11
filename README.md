# 🚀 MohAgency - Site Web ÉPOUSTOUFLANT

Site web **ultra-premium et époustouflant** pour **MohAgency**, une agence digitale spécialisée dans la création de sites web, l'intégration IA et le branding digital.

## ✨ Caractéristiques EXCEPTIONNELLES

- **Design futuriste dark mode** avec effets glassmorphism
- **Animations 3D avancées** avec Framer Motion
- **Particules animées** et effets mesh gradient
- **Effets glow** et ombres lumineuses
- **Micro-interactions premium** sur tous les éléments
- **Scrollbar personnalisée** avec gradient animé
- **One Page fluide** avec navigation smooth
- **100% Responsive** - parfaitement adapté mobile et desktop
- **Performance optimisée** avec React + Vite
- **SEO friendly**

## 🎨 Technologies Utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **EmailJS** - Gestion des formulaires

## 📦 Installation

### Prérequis
- Node.js 16+ et npm/yarn

### Étapes d'installation

1. **Cloner le projet**
```bash
cd mohagency
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible sur `http://localhost:3000`

## 🏗️ Build pour Production

```bash
npm run build
# ou
yarn build
```

Les fichiers optimisés seront générés dans le dossier `dist/`

## 📂 Structure du Projet

```
mohagency/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Loader.jsx
│   ├── App.jsx          # Composant principal
│   ├── main.jsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Sections du Site

1. **Header** - Navigation fixe et transparente
2. **Hero** - Section d'accueil avec animations de particules
3. **À propos** - Présentation de l'agence avec points forts
4. **Services** - Cartes animées des services proposés
5. **Réalisations** - Portfolio avec lightbox
6. **Témoignages** - Avis clients avec étoiles
7. **Contact** - Formulaire de contact + infos
8. **Footer** - Liens et réseaux sociaux

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- **Primary** : `#0077FF` (Bleu électrique)
- **Dark** : `#1E2738` (Gris foncé)
- **Light** : `#ffffff` (Blanc pur)

### Polices
- **Montserrat** - Texte
- **Roboto** - Titres

## 📧 Configuration EmailJS (Optionnel)

Pour activer l'envoi de formulaires par email :

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer un service email
3. Créer un template
4. Ajouter les clés dans `Contact.jsx`

## 🚀 Déploiement

### Netlify
```bash
npm run build
# Glisser-déposer le dossier dist/ sur Netlify
```

### Vercel
```bash
vercel
```

### GitHub Pages
```bash
npm run build
# Configurer GitHub Pages pour servir le dossier dist/
```

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## ⚡ Performance

- Lazy loading des images
- Code splitting automatique
- Animations optimisées
- CSS minifié
- Bundle optimisé avec Vite

## 🤝 Support

Pour toute question ou support :
- Email : contact@mohagency.com
- WhatsApp : +33 6 12 34 56 78

## 📄 Licence

© 2025 MohAgency - Tous droits réservés

---

**Développé avec ❤️ par MohAgency**
