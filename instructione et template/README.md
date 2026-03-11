# Portfolio ArrowBAZ - Basile Pistono

Portfolio créé selon la maquette Figma avec design noir/rouge/blanc minimaliste.

## 🎨 Design

**Typographie :**
- Epilogue (Black 900 pour titres, Medium 500 pour texte)
- Babylonica (signature overlay)
- Letter-spacing : -6% sur tous les textes

**Couleurs :**
- Noir : #000000 (fond)
- Rouge : #EB2323 (accent)
- Blanc : #FFFFFF (texte)
- Gris : #B8B8B8 (cartes projets)

**Style unique :**
- Effet "portfolio" + "Basile Pistono" en overlay signature
- Boutons pill shape avec contours rouges
- Header sticky minimaliste
- Footer avec plan du site + réseaux sociaux

## 📁 Structure

```
portfolio-arrowbaz/
├── index.html              # Page d'accueil (9 projets featured)
├── projets.html            # Tous les projets
├── template-projet.html    # Template pour pages individuelles
├── css/
│   └── style.css          # Design complet avec variables CSS
├── js/
│   ├── projects-data.js   # Données des projets
│   └── main.js            # Logique de filtrage
└── images/
    ├── profile.jpg        # Photo de profil (à ajouter)
    └── projects/          # Miniatures (à ajouter)
```

## ✨ Fonctionnalités

### Filtrage intelligent
- **Filtres techniques** : Video, Motion Design, Graphic Design, Photo, Musique/son, 3D
- **Filtres par type** : Client, Projet Etudiant
- **Priorisation** : Les 9 projets featured apparaissent toujours en premier

### Navigation
- Logo "BAZ" cliquable → retour accueil
- Header sticky qui suit le scroll
- Menu : Qui suis-je ?, Projets, Contact
- Bouton scroll-to-top ancré (cercle rouge)
- Smooth scroll vers les sections

### Layout
- Grille responsive 3 colonnes (desktop) → 1 colonne (mobile)
- Cartes projets avec fond gris placeholder
- Titres en rouge, sous-titres en blanc
- Animations fade-in échelonnées

## 🚀 Installation

### 1. Télécharger et extraire
Décompressez l'archive ZIP dans votre dossier de travail.

### 2. Ajouter vos images

**Photo de profil :**
```
images/profile.jpg
```
Format : carré, 400x400px minimum, JPG

**Miniatures de projets :**
```
images/projects/
├── pub-nothing.jpg
├── beige-bloop.jpg
├── best-of-gfx.jpg
└── ... (22 projets au total)
```
Format : 16:9, ~1200x675px, JPG optimisé

### 3. Tester en local

**Option A : Navigateur**
Double-cliquez sur `index.html`

**Option B : Serveur local (recommandé)**
```bash
python -m http.server 8000
# Puis ouvrez http://localhost:8000
```

## 🎯 Personnalisation

### Couleurs
Modifiez dans `css/style.css` (lignes 1-15) :
```css
:root {
    --color-bg: #000000;
    --color-text: #FFFFFF;
    --color-accent: #EB2323;
    --color-card-bg: #B8B8B8;
}
```

### Polices
Déjà configurées avec Epilogue + Babylonica via Google Fonts.

### Liens contact
Dans `index.html` et `projets.html`, section footer :
```html
<a href="https://instagram.com/VOTRECOMPTE">📷 Insta</a>
<a href="https://linktr.ee/VOTRECOMPTE">🎵 Music Linktree</a>
<a href="https://linkedin.com/in/VOTREPROFIL">💼 Linkedin</a>
<a href="mailto:VOTRE@EMAIL.com">📧 Email</a>
```

## 📝 Gérer les projets

Éditez `js/projects-data.js` :

```javascript
{
    id: 'nom-unique',
    title: 'Nom du Projet',
    categories: ['video', 'motion-design'],  // Techniques
    tags: ['client'],                         // Type (client ou project)
    type: 'Vidéo • Motion Design • Client',  // Affichage
    thumbnail: 'images/projects/nom.jpg',
    featured: true,                           // Projet phare ?
    featuredOrder: 1                          // Ordre (1-9)
}
```

### Catégories disponibles :
- `video` - Vidéo
- `motion-design` - Motion Design
- `graphic-design` - Graphic Design
- `photo` - Photo
- `music` - Musique/son
- `3d` - 3D

### Tags disponibles :
- `client` - Projet client
- `project` - Projet étudiant

## 📤 Publier sur GitHub Pages

```bash
# Initialiser le repo
git init
git add .
git commit -m "Portfolio ArrowBAZ - Design Figma"

# Pousser sur GitHub
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main

# Activer GitHub Pages
# Settings → Pages → Source: main branch
```

Votre site sera accessible sur : `https://USERNAME.github.io/REPO/`

## 🎨 Pages projets individuelles

Utilisez `template-projet.html` comme base pour créer des pages détaillées.

**Structure recommandée :**
```
projets/
├── pub-nothing.html
├── beige-bloop.html
└── ...
```

**Pour chaque page :**
- Vidéo YouTube (embed)
- Galerie d'images
- Description détaillée
- Informations techniques
- Navigation vers autres projets

## 💡 Conseils

### Optimisation images
- Utilisez TinyPNG ou Squoosh
- Format WebP recommandé (avec fallback JPG)
- Max 1200px de largeur pour les miniatures

### SEO
Ajoutez dans `<head>` :
```html
<meta property="og:title" content="ArrowBAZ - Portfolio">
<meta property="og:description" content="...">
<meta property="og:image" content="images/og-image.jpg">
<meta property="og:url" content="https://votresite.com">
```

### Performance
- Images déjà lazy-loaded
- CSS optimisé sans frameworks lourds
- JavaScript vanilla (pas de dépendances)

## 🔧 Responsive

Le site est déjà responsive avec breakpoints :
- Desktop : >1024px (3 colonnes)
- Tablette : 768-1024px (2 colonnes)
- Mobile : <768px (1 colonne)

## ✅ Checklist avant publication

- [ ] Photo de profil ajoutée
- [ ] 22 miniatures de projets ajoutées
- [ ] Liens réseaux sociaux mis à jour
- [ ] Email de contact modifié
- [ ] Test sur mobile/tablette
- [ ] Images optimisées
- [ ] Métadonnées SEO complétées

## 📞 Support

Le portfolio est maintenant conforme à votre maquette Figma avec :
- ✅ Design noir/rouge/blanc exact
- ✅ Typographie Epilogue + Babylonica
- ✅ Letter-spacing -6%
- ✅ Boutons pill shape
- ✅ Layout et espacements corrects
- ✅ Filtrage intelligent
- ✅ Animations fluides

**Bon lancement ! 🚀**
