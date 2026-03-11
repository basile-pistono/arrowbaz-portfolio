// Données des projets ArrowBAZ
// Catégories techniques: video, motion-design, graphic-design, photo, music, 3d
// Tags: client, project (pour filtrage)

const projectsData = [
    {
        id: 'entre-feu-foi',
        title: 'Entre Feu et Foi',
        categories: ['video'],
        tags: ['project'],
        type: 'Vidéo • Projet étudiant',
        thumbnail: 'images/projects/entre-feu-foi.jpg',
        featured: false,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer

    },
    {
        id: 'printemps-iut',
        title: 'Printemps des IUT',
        categories: ['video'],
        tags: ['client'],
        type: 'Vidéo • Client',
        thumbnail: 'images/projects/printemps-iut.jpg',
        featured: true,
        featuredOrder: 9,
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7212150244002705411/' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'infographie-dnb',
        title: 'Infographie DNB',
        categories: ['motion-design'],
        tags: ['project'],
        type: 'Motion Design • Projet étudiant',
        thumbnail: 'images/projects/infographie-dnb.jpg',
        featured: false,
        url: 'https://drive.google.com/file/d/1Wh40awoBbiDIgEN7g83aTKqH45nbtM5Z/view?usp=sharing' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'hologramme-motion',
        title: 'Hologramme motion design',
        categories: ['motion-design'],
        tags: ['project'],
        type: 'Motion Design • Projet étudiant',
        thumbnail: 'images/projects/hologramme-motion.jpg',
        featured: false,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'mixtigri',
        title: 'Mixtigri',
        categories: ['graphic-design'],
        tags: ['project'],
        type: 'Graphic Design • Projet étudiant',
        thumbnail: 'images/projects/mixtigri.jpg',
        featured: false,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'beige-bloop',
        title: 'Beige - BLOOP',
        categories: ['video'],
        tags: ['project'],
        type: 'Vidéo • Projet étudiant',
        thumbnail: 'images/projects/beige-bloop.gif',
        featured: true,
        featuredOrder: 2,
        url: 'https://youtube.com/shorts/cXvFpUf2FWA' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'boom-nade',
        title: 'BOOM Nade',
        categories: ['motion-design', '3d'],
        tags: ['project'],
        type: 'Motion Design • 3D • Projet étudiant',
        thumbnail: 'images/projects/boom-nade.gif',
        featured: false,
        url: 'https://youtube.com/shorts/cXvFpUf2FWA' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'radio-pirate',
        title: 'Radio Pirate',
        categories: ['music'],
        tags: ['project'],
        type: 'Musique/son • Projet étudiant',
        thumbnail: 'images/projects/radio-pirate.jpg',
        featured: false,
        url: 'https://www.instagram.com/reel/DH79LngvF3n/' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'ophanim-3d',
        title: 'Ophanim 3D',
        categories: ['3d'],
        tags: ['project'],
        type: '3D • Projet étudiant',
        thumbnail: 'images/projects/ophanim-3d.jpg',
        featured: false,
        url: 'https://www.linkedin.com/posts/basile-pistono_on-vous-montre-le-r%C3%A9sultat-dune-semaine-activity-7426218143964102656-B_xJ/' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'pub-nothing',
        title: 'Pub Nothing',
        categories: ['video'],
        tags: ['project'],
        type: 'Vidéo • Projet étudiant',
        thumbnail: 'images/projects/pub-nothing.jpg',
        featured: true,
        featuredOrder: 1,
        url: 'https://youtube.com/shorts/-xfQ1_B3ezI' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'decathlon-pate',
        title: 'Decathlon Pate de fruit',
        categories: ['photo'],
        tags: ['project'],
        type: 'Photo • Projet étudiant',
        thumbnail: 'images/projects/decathlon-pate.jpg',
        featured: false,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer

    },
    {
        id: 'scarabee-jingle',
        title: 'Scarabée Jingle et minia',
        categories: ['motion-design', 'graphic-design'],
        tags: ['client', 'project'],
        type: 'Motion Design • Graphic Design • Client • Projet étudiant',
        thumbnail: 'images/projects/scarabee-jingle.jpg',
        featured: false,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'camby-video',
        title: 'Camby Video',
        categories: ['video'],
        tags: ['client'],
        type: 'Vidéo • Client',
        thumbnail: 'images/projects/camby-video.jpg',
        featured: true,
        featuredOrder: 5,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'camby-graphisme',
        title: 'Camby Graphisme',
        categories: ['graphic-design'],
        tags: ['client'],
        type: 'Graphic Design • Client',
        thumbnail: 'images/projects/camby-graphisme.jpg',
        featured: true,
        featuredOrder: 6,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'best-of-gfx',
        title: 'Best Of GFX',
        categories: ['graphic-design'],
        tags: [],
        type: 'Graphic Design',
        thumbnail: 'images/projects/best-of-gfx.jpg',
        featured: true,
        featuredOrder: 3,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'hyperlapse-italie',
        title: 'Hyperlapse Italie',
        categories: ['video'],
        tags: [],
        type: 'Vidéo',
        thumbnail: 'images/projects/hyperlapse-italie.jpg',
        featured: false,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'portfolio-insta',
        title: 'Portfolio Insta',
        categories: ['video', 'motion-design'],
        tags: [],
        type: 'Vidéo • Motion Design',
        thumbnail: 'images/projects/portfolio-insta.jpg',
        featured: true,
        featuredOrder: 8,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'photos-persos',
        title: 'Photos Persos',
        categories: ['photo'],
        tags: [],
        type: 'Photo',
        thumbnail: 'images/projects/photos-persos.jpg',
        featured: false,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'photo-frammi',
        title: 'Photo Frammi (+Redbull)',
        categories: ['photo'],
        tags: ['client'],
        type: 'Photo • Client',
        thumbnail: 'images/projects/photo-frammi.jpg',
        featured: false,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'la-rif-nos-men',
        title: 'La Rif et Nos Men Brule Boemia',
        categories: ['graphic-design'],
        tags: ['client'],
        type: 'Graphic Design • Client',
        thumbnail: 'images/projects/la-rif-nos-men.jpg',
        featured: true,
        featuredOrder: 4,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    },
    {
        id: 'arrowbaz-music',
        title: 'ArrowBAZ Music',
        categories: ['music'],
        tags: [],
        type: 'Musique/son',
        thumbnail: 'images/projects/arrowbaz-music.jpg',
        featured: false,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer METTRE LE LINKTREE
    },
    {
        id: 'besoin-album-cover',
        title: 'Besoin d’une album cover ?',
        categories: ['motion-design', 'graphic-design'],
        tags: ['project'],
        type: 'Motion Design • Graphic Design • Projet étudiant',
        thumbnail: 'images/projects/besoin-album-cover.jpg',
        featured: true,
        featuredOrder: 7,
        url: 'projet-printemps.html' // Le nom du fichier HTML que tu vas créer
    }
];