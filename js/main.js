// Gestion du portfolio ArrowBAZ

class PortfolioManager {
    constructor(maxProjects = null) {
        this.maxProjects = maxProjects; // null pour page projets, 9 pour accueil
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderProjects();
        this.setupFilters();
        this.setupScrollButton();
        this.setupSmoothScroll();
        this.setupCustomCursor(); // Initialisation du curseur
    }

    // Filtrer et trier les projets
    getFilteredProjects(filter) {
        let filtered = projectsData;

        // Filtrer selon le type
        if (filter === 'client') {
            filtered = filtered.filter(project => project.tags.includes('client'));
        } else if (filter === 'project') {
            filtered = filtered.filter(project => project.tags.includes('project'));
        } else if (filter !== 'all') {
            filtered = filtered.filter(project => 
                project.categories.includes(filter)
            );
        }

        // Trier : featured en premier
        filtered.sort((a, b) => {
            if (a.featured && b.featured) {
                return a.featuredOrder - b.featuredOrder;
            }
            if (a.featured) return -1;
            if (b.featured) return 1;
            return 0;
        });

        if (this.maxProjects) {
            filtered = filtered.slice(0, this.maxProjects);
        }

        return filtered;
    }

    // Afficher les projets
    renderProjects() {
        const grid = document.getElementById('projects-grid');
        if (!grid) return;

        const projects = this.getFilteredProjects(this.currentFilter);
        
        grid.style.opacity = '0';
        
        setTimeout(() => {
            grid.innerHTML = projects.map(project => this.createProjectCard(project)).join('');
            
            setTimeout(() => {
                grid.style.opacity = '1';
                
                const cards = grid.querySelectorAll('.project-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('fade-in');
                    }, index * 50);
                });
            }, 50);
        }, 300);
    }

    // Créer une carte de projet (Modifiée pour être un lien vers la page individuelle)
    createProjectCard(project) {
        // On utilise project.url qui doit être défini dans projects-data.js
        return `
            <a href="${project.url || '#'}" target="_blank" class="project-card" data-id="${project.id}">
                <div class="project-image">
                    <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-type">${project.type}</p>
                </div>
            </a>
        `;
    }

    // Configurer les filtres
    setupFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                this.currentFilter = e.target.dataset.category;
                this.renderProjects();
            });
        });
    }

    // Curseur personnalisé qui suit la souris
    setupCustomCursor() {
        const cursor = document.getElementById('custom-cursor');
        if (!cursor) return;

        // Suivi de la souris
        window.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            // On l'affiche dès qu'il bouge
            if (cursor.style.opacity === "0" || cursor.style.opacity === "") {
                cursor.style.opacity = "1";
            }
        });

        // Zones qui font réagir le curseur (agrandissement)
        const clickableSelector = 'a, button, .filter-btn, .project-card, .hero-cta, .social-btn';

        document.addEventListener('mouseover', (e) => {
            if (e.target.closest(clickableSelector)) {
                cursor.classList.add('active');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest(clickableSelector)) {
                cursor.classList.remove('active');
            }
        });

        // Cacher le curseur si la souris sort de la fenêtre
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = "0";
        });
    }

    // Bouton scroll to top
    setupScrollButton() {
        const scrollBtn = document.getElementById('scroll-top');
        if (!scrollBtn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Navigation fluide vers les sections
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || href.startsWith('projet-')) return; // Ne pas bloquer les liens vers les pages projets
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const isHomepage = document.body.classList.contains('homepage');
    const maxProjects = isHomepage ? 9 : null;
    
    new PortfolioManager(maxProjects);
});





