# 🚀 Installation Rapide - MohAgency

## Prérequis
- Node.js 16+ installé
- npm ou yarn

## Installation en 3 étapes

### 1️⃣ Installer les dépendances
```bash
cd mohagency
npm install
```

### 2️⃣ Lancer le serveur de développement
```bash
npm run dev
```

Le site s'ouvrira automatiquement sur **http://localhost:3000**

### 3️⃣ Build pour production
```bash
npm run build
```

## 🎨 Personnalisation

### Modifier les couleurs
Éditez `tailwind.config.js` :
```javascript
colors: {
  primary: '#0077FF',    // Bleu principal
  secondary: '#00D9FF',  // Cyan
  accent: '#FF3D71',     // Rose/Rouge
  dark: '#0A0E27',       // Fond sombre
  darker: '#050816',     // Fond très sombre
}
```

### Modifier le contenu
- **Hero** : `src/components/Hero.jsx`
- **Services** : `src/components/Services.jsx`
- **Portfolio** : `src/components/Portfolio.jsx`
- **Contact** : `src/components/Contact.jsx`

## 🔥 Effets Visuels Inclus

✅ **Glassmorphism** - Effets de verre translucide
✅ **Glow Effects** - Ombres lumineuses animées
✅ **Mesh Gradients** - Dégradés mesh complexes
✅ **Particules animées** - 50+ particules en mouvement
✅ **Animations 3D** - Rotations et transformations 3D
✅ **Micro-interactions** - Hover effects premium
✅ **Scrollbar custom** - Barre de défilement stylisée

## 📱 Responsive

Le site est 100% responsive :
- 📱 Mobile : < 768px
- 📱 Tablet : 768px - 1024px
- 💻 Desktop : > 1024px

## ⚡ Performance

- ⚡ Vite pour un build ultra-rapide
- 🎯 Code splitting automatique
- 🖼️ Lazy loading des images
- 🎨 CSS optimisé avec Tailwind
- 📦 Bundle size optimisé

## 🆘 Problèmes courants

### Le site ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
npm install
npm run dev
```

### Erreurs de build
```bash
# Vider le cache
npm run build -- --force
```

## 🎯 Prochaines étapes

1. Personnalisez le contenu
2. Ajoutez vos propres images
3. Configurez EmailJS pour le formulaire
4. Déployez sur Netlify/Vercel

---

**Besoin d'aide ?** Contactez MohAgency 🚀
