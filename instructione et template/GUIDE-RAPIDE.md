# 🚀 Démarrage Ultra-Rapide - Portfolio ArrowBAZ

## 📥 Étape 1 : Extraire l'archive

Décompressez `portfolio-arrowbaz.zip` dans votre dossier de travail.

## 📸 Étape 2 : Ajouter vos images (IMPORTANT !)

### Photo de profil
Ajoutez votre photo dans :
```
images/profile.jpg
```
**Format :** carré, 400x400px minimum, JPG

### Miniatures des projets
Ajoutez 22 images dans `images/projects/` avec ces noms EXACTS :

```
images/projects/
├── pub-nothing.jpg
├── beige-bloop.jpg
├── best-of-gfx.jpg
├── la-rif-nos-men.jpg
├── camby-video.jpg
├── camby-graphisme.jpg
├── besoin-album-cover.jpg
├── portfolio-insta.jpg
├── printemps-iut.jpg
├── entre-feu-foi.jpg
├── infographie-dnb.jpg
├── hologramme-motion.jpg
├── mixtigri.jpg
├── boom-nade.jpg
├── radio-pirate.jpg
├── ophanim-3d.jpg
├── decathlon-pate.jpg
├── scarabee-jingle.jpg
├── hyperlapse-italie.jpg
├── photos-persos.jpg
├── photo-frammi.jpg
└── arrowbaz-music.jpg
```

**Format :** 16:9 (par ex. 1200x675px), JPG optimisé

💡 **Astuce :** Utilisez TinyPNG pour compresser vos images avant de les ajouter.

## 🔗 Étape 3 : Modifier vos liens

Ouvrez `index.html` et `projets.html`, cherchez la section footer et modifiez :

```html
<!-- Ligne ~105 dans index.html -->
<a href="https://instagram.com/arrowbaz">📷 Insta</a>
<a href="https://linktr.ee/arrowbaz">🎵 Music Linktree</a>
<a href="https://linkedin.com/in/basilepistono">💼 Linkedin</a>
<a href="mailto:basile.pistono@exemple.com">📧 Email</a>
```

Remplacez par VOS liens :
```html
<a href="https://instagram.com/VOTRE_COMPTE">📷 Insta</a>
<a href="https://linktr.ee/VOTRE_LINKTREE">🎵 Music Linktree</a>
<a href="https://linkedin.com/in/VOTRE_PROFIL">💼 Linkedin</a>
<a href="mailto:VOTRE@EMAIL.com">📧 Email</a>
```

## 🧪 Étape 4 : Tester

### Option simple
Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur.

### Option pro (recommandé)
```bash
# Depuis le dossier du portfolio
python -m http.server 8000
```
Puis ouvrez http://localhost:8000

## ✅ Vérification rapide

À ce stade, vous devriez voir :
- ✅ Header avec logo "BAZ" en rouge
- ✅ Hero avec "portfolio" géant + signature
- ✅ Section "Qui suis-je" avec votre photo
- ✅ 9 projets affichés (ou placeholders gris si pas d'images)
- ✅ Filtres fonctionnels
- ✅ Footer avec liens sociaux
- ✅ Bouton scroll-to-top (cercle rouge)

## 🎨 Personnalisation (Optionnel)

### Modifier les couleurs
Si vous voulez changer le rouge #EB2323, éditez `css/style.css` (ligne 11) :
```css
--color-accent: #EB2323; /* Votre couleur ici */
```

### Modifier les projets
Éditez `js/projects-data.js` pour :
- Changer les titres
- Ajouter/supprimer des projets
- Modifier les catégories
- Changer l'ordre des projets featured

## 📤 Publier sur GitHub Pages (Gratuit !)

```bash
# 1. Créer un repo sur GitHub
# 2. Depuis votre dossier portfolio :

git init
git add .
git commit -m "Mon portfolio ArrowBAZ"
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
git branch -M main
git push -u origin main

# 3. Sur GitHub : Settings → Pages → Source : main branch → Save
```

Votre site sera en ligne sur : `https://VOTRE_USERNAME.github.io/VOTRE_REPO/`

## 🆘 Problèmes courants

### Les images ne s'affichent pas
→ Vérifiez que les noms de fichiers correspondent EXACTEMENT à ceux dans `js/projects-data.js`

### Les filtres ne fonctionnent pas
→ Ouvrez la console (F12) et vérifiez qu'il n'y a pas d'erreurs JavaScript

### Le design ne ressemble pas au Figma
→ Toutes les couleurs et polices sont déjà configurées. Si vous voyez du bleu ou du violet, videz le cache (Ctrl+Shift+R)

### Le bouton scroll ne monte pas
→ Normal ! Il n'apparaît qu'après avoir scrollé un peu vers le bas.

## 📋 Checklist finale

Avant de publier :
- [ ] Photo de profil ajoutée (`images/profile.jpg`)
- [ ] 22 miniatures de projets ajoutées
- [ ] Liens sociaux modifiés
- [ ] Email modifié
- [ ] Test sur Chrome
- [ ] Test sur mobile (mode responsive F12)
- [ ] Images optimisées/compressées

## 🎯 Prochaines étapes

1. ✅ **Ajouter vos images** (c'est le plus important !)
2. 📝 **Modifier vos liens** contact
3. 🧪 **Tester en local**
4. 📤 **Publier sur GitHub**
5. 📄 **Créer les pages projets individuelles** (utilisez `template-projet.html`)

---

**Temps estimé de configuration : 15-30 minutes**

Le portfolio est prêt à l'emploi avec le design exact de votre maquette Figma :
- Couleurs noir/rouge/blanc ✅
- Typographie Epilogue + Babylonica ✅
- Letter-spacing -6% ✅
- Filtrage intelligent ✅
- Responsive ✅

**Bon courage ! 🚀**

Si vous avez des questions, consultez le `README.md` pour plus de détails.
