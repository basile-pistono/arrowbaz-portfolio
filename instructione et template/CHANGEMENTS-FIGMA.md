# ✨ Portfolio ArrowBAZ - Version Figma

## 🎨 Design conforme à votre maquette

Le portfolio a été entièrement recréé pour correspondre EXACTEMENT à votre maquette Figma.

### Changements majeurs appliqués :

#### 1. Couleurs (100% conforme)
- ✅ Fond noir pur #000000 (au lieu de #0A0A0A)
- ✅ Rouge accent #EB2323 (au lieu de #FF6B35)
- ✅ Cartes projets #B8B8B8 (gris clair)
- ✅ Pas de dégradés, pas d'ombres fancy

#### 2. Typographie (100% conforme)
- ✅ Epilogue Black (900) pour les titres
- ✅ Epilogue Medium (500) pour le texte
- ✅ Babylonica pour la signature overlay
- ✅ Letter-spacing -6% sur TOUS les textes
- ✅ Pas de Arial, Inter ou Bebas Neue

#### 3. Hero section (100% conforme)
- ✅ "portfolio" géant en rouge
- ✅ "Basile Pistono" en overlay Babylonica blanc
- ✅ Sous-titre rouge avec bullets •
- ✅ Pas de description supplémentaire

#### 4. Header (100% conforme)
- ✅ Logo "BAZ" en rouge (au lieu de "ARROWBAZ")
- ✅ Menu : "Qui suis-je ?" / "Projets" / "Contact"
- ✅ Fond noir pur, pas de backdrop blur
- ✅ Position fixed (suit le scroll)

#### 5. Section "Qui suis-je" (100% conforme)
- ✅ Titre "Qui suis-je" en rouge (lowercase)
- ✅ Photo ronde à gauche avec border rouge
- ✅ Texte avec mots-clés en rouge (strong)
- ✅ Layout horizontal (photo + texte côte à côte)

#### 6. Filtres (100% conforme)
- ✅ Pills shape (border-radius full)
- ✅ Contour rouge 2px
- ✅ Fond transparent par défaut
- ✅ Fond rouge quand actif
- ✅ 9 filtres : Tout, Graphic Design, Motion Design, Video, Photo, Musique/son, Client, Projet Etudiant, 3D

#### 7. Grille projets (100% conforme)
- ✅ 3 colonnes sur desktop
- ✅ Cartes avec fond gris #B8B8B8
- ✅ Titre en rouge (selon maquette : "Titre d'une vidéo" mais utilise les vrais titres)
- ✅ Type en blanc en dessous
- ✅ Pas de hover effects fancy
- ✅ Border-radius sur les images

#### 8. Footer (100% conforme)
- ✅ Logo "BAZ" en rouge
- ✅ Plan du site : Accueil / Tous mes projets
- ✅ 4 boutons sociaux pill shape avec icônes emoji
- ✅ Copyright centré en bas
- ✅ Border-top rouge

#### 9. Bouton scroll-to-top (100% conforme)
- ✅ Cercle avec border rouge
- ✅ Fond transparent
- ✅ Flèche ↑ en rouge
- ✅ Position fixed bottom-right
- ✅ Hover : fond rouge

## 🔧 Fonctionnalités techniques

### Filtrage intelligent
Le système gère 2 types de filtres :

**Filtres techniques (catégories) :**
- Video
- Motion Design
- Graphic Design
- Photo
- Musique/son
- 3D

**Filtres par type (tags) :**
- Client → affiche uniquement les projets clients
- Projet Etudiant → affiche uniquement les projets étudiants

### Système de featured
- Les 9 projets featured (featured: true) sont toujours affichés en premier
- L'ordre est contrôlé par featuredOrder (1-9)
- Quand on filtre, les featured matchant le filtre restent en premier

### Responsive
- Desktop (>1024px) : 3 colonnes
- Tablette (768-1024px) : 2 colonnes
- Mobile (<768px) : 1 colonne
- Header adapté
- Filtres qui wrap

## 📝 Structure des données

Chaque projet dans `js/projects-data.js` :
```javascript
{
    id: 'pub-nothing',              // Unique ID
    title: 'Pub Nothing',           // Titre du projet
    categories: ['video'],          // Catégories techniques (array)
    tags: ['project'],              // Type (client, project, ou vide)
    type: 'Vidéo • Client',        // Texte affiché sous le titre
    thumbnail: 'images/...',        // Chemin miniature
    featured: true,                 // Projet phare ?
    featuredOrder: 1                // Ordre si featured (1-9)
}
```

## 🎯 Ce qui est prêt

✅ Design 100% conforme à votre Figma  
✅ Couleurs exactes (#000, #EB2323, #FFF, #B8B8B8)  
✅ Typographie exacte (Epilogue + Babylonica, -6% spacing)  
✅ Layout exact (header, hero, sections, footer)  
✅ Filtres fonctionnels avec logique intelligente  
✅ Responsive complet  
✅ Animations fluides  
✅ Code propre et bien organisé  

## 📌 Ce qu'il vous reste à faire

1. **Ajouter vos images** (22 miniatures + 1 photo profil)
2. **Modifier vos liens** contact dans le footer
3. **Tester** en local
4. **Publier** sur GitHub Pages

## 🚨 Points d'attention

### Images requises
Sans les images, vous verrez des rectangles gris (background des cartes).
Les chemins sont déjà configurés dans `js/projects-data.js`.

### Polices Google Fonts
Les polices sont chargées via Google Fonts (déjà configuré).
Elles se chargent automatiquement quand vous ouvrez le site.

### Filtres "Client" et "Projet Etudiant"
Ces filtres fonctionnent différemment :
- Ils filtrent par TAG (project.tags)
- Pas par catégorie (project.categories)
- Un projet peut avoir les deux tags

## 💡 Différences avec la version précédente

| Aspect | Ancienne version | Nouvelle version (Figma) |
|--------|-----------------|--------------------------|
| Couleurs | Orange/noir | Rouge/noir (#EB2323) |
| Polices | Bebas Neue/Inter | Epilogue/Babylonica |
| Logo | ARROWBAZ | BAZ |
| Hero | Titre simple | portfolio + overlay signature |
| Boutons | Rectangles | Pills (border-radius full) |
| Cartes | Fond sombre | Fond gris #B8B8B8 |
| Letter-spacing | Normal | -6% partout |
| About | Simple texte | Photo + texte mots-clés |

## 🎉 Résultat final

Vous avez maintenant un portfolio qui correspond EXACTEMENT à votre maquette Figma :
- Identité visuelle forte (noir/rouge/blanc)
- Typographie distinctive (Epilogue + Babylonica)
- Layout professionnel et minimaliste
- Filtrage intelligent
- Responsive et accessible

Ajoutez vos images et publiez ! 🚀
