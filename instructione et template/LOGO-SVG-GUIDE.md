# 🎨 Guide d'intégration du logo SVG

## 📁 Placement du fichier

Placez votre logo SVG dans :
```
images/BAZ_logo.svg
```

## 🎨 Coloration du logo

### Option 1 : Modifier le SVG directement (RECOMMANDÉ)

Ouvrez votre fichier `BAZ_logo.svg` dans un éditeur de texte et modifiez la couleur :

**Si votre SVG contient :**
```xml
<svg>
    <path fill="#000000" d="..."/>
</svg>
```

**Remplacez par :**
```xml
<svg>
    <path fill="#EB2323" d="..."/>
</svg>
```

Changez tous les `fill="#000000"` ou `fill="black"` par `fill="#EB2323"`.

### Option 2 : Utiliser un filtre CSS (déjà configuré)

Le CSS est déjà configuré pour colorer votre logo noir en rouge #EB2323 automatiquement.

Si votre logo est noir, il sera automatiquement coloré en rouge grâce au filtre CSS :
```css
filter: brightness(0) saturate(100%) invert(25%) sepia(95%) saturate(3500%) hue-rotate(345deg) brightness(95%) contrast(95%);
```

**Ce filtre est appliqué sur :**
- Le logo du header (`.logo img`)
- Le logo du footer (inline style)

### Option 3 : Logo déjà rouge

Si votre logo est déjà en rouge #EB2323 dans le SVG, supprimez le filtre CSS.

Dans `css/style.css`, remplacez :
```css
.logo img {
    height: 2rem;
    width: auto;
    filter: brightness(0) saturate(100%) invert(25%) sepia(95%) saturate(3500%) hue-rotate(345deg) brightness(95%) contrast(95%);
}
```

Par :
```css
.logo img {
    height: 2rem;
    width: auto;
}
```

Et dans `index.html` et `projets.html`, footer, supprimez le style inline :
```html
<!-- AVANT -->
<img src="images/BAZ_logo.svg" alt="BAZ" style="height: 3rem; width: auto; filter: brightness(0) saturate(100%) invert(25%) sepia(95%) saturate(3500%) hue-rotate(345deg) brightness(95%) contrast(95%);">

<!-- APRÈS -->
<img src="images/BAZ_logo.svg" alt="BAZ" style="height: 3rem; width: auto;">
```

## 📏 Taille du logo

La taille du logo est définie dans le CSS :

**Header :**
```css
.logo img {
    height: 2rem;  /* Modifiez cette valeur pour ajuster la taille */
}
```

**Footer :**
```html
<img ... style="height: 3rem; ...">
```

## ✅ Vérification

Après avoir ajouté votre logo :
1. Ouvrez `index.html` dans votre navigateur
2. Le logo doit apparaître en rouge dans le header
3. Le logo doit apparaître en rouge dans le footer
4. Au hover, le logo doit devenir légèrement plus clair

## 🔍 Dépannage

### Le logo n'apparaît pas
- Vérifiez que le fichier est bien dans `images/BAZ_logo.svg`
- Vérifiez que le nom du fichier est exact (sensible à la casse)

### Le logo est noir au lieu de rouge
- Option 1 : Modifiez le SVG pour utiliser `fill="#EB2323"`
- Option 2 : Le filtre CSS devrait le colorer automatiquement

### Le logo est trop petit/grand
- Modifiez `height: 2rem` dans le CSS pour le header
- Modifiez `height: 3rem` dans le HTML pour le footer

### Le logo est déformé
- Assurez-vous que votre SVG a les bonnes proportions
- Le `width: auto` préserve le ratio, ne le changez pas

## 💡 Recommandation

Pour les meilleurs résultats, utilisez l'**Option 1** : modifiez directement la couleur dans le fichier SVG en remplaçant toutes les couleurs par `#EB2323`.

Cela garantit une compatibilité maximale et évite les filtres CSS complexes.
