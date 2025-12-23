/**
 * MESPIC - Components Loader
 * Sistema profesional de carga de componentes reutilizables
 *
 * @version 1.0.0
 * @author MESPIC Development Team
 */

(function() {
    'use strict';

    // ============================================
    // CONFIGURATION
    // ============================================
    const CONFIG = {
        headerFile: 'header.html',
        footerFile: 'footer.html',
        headerPlaceholder: '#header-placeholder',
        footerPlaceholder: '#footer-placeholder',
        activeClass: 'active',
        headerSolidClass: 'header--solid',
        headerTransparentClass: 'header--transparent',
        scrollThreshold: 100
    };

    /**
     * Get the base path for components based on current page location
     */
    function getComponentsPath() {
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length - 1;

        // Check if we're in a subdirectory (like /servicios/)
        if (path.includes('/servicios/') || depth > 1) {
            return '../components/';
        }
        return 'components/';
    }

    /**
     * Get the base path for internal links
     */
    function getBasePath() {
        const path = window.location.pathname;
        if (path.includes('/servicios/')) {
            return '../';
        }
        return '';
    }

    // ============================================
    // COMPONENT LOADER
    // ============================================
    const ComponentLoader = {
        /**
         * Initialize the component loader
         */
        init: function() {
            this.loadComponents();
        },

        /**
         * Load all components
         */
        loadComponents: async function() {
            try {
                await Promise.all([
                    this.loadHeader(),
                    this.loadFooter()
                ]);

                // Adjust paths for subdirectories
                this.adjustPaths();

                // Initialize functionality after components are loaded
                this.initializeHeader();
                this.initializeFooter();
                this.setActiveNavLink();

            } catch (error) {
                // Error silenciado en producción
                // console.error('Error loading components:', error);
            }
        },

        /**
         * Load header component
         */
        loadHeader: function() {
            return this.fetchComponent(
                getComponentsPath() + CONFIG.headerFile,
                CONFIG.headerPlaceholder
            );
        },

        /**
         * Load footer component
         */
        loadFooter: function() {
            return this.fetchComponent(
                getComponentsPath() + CONFIG.footerFile,
                CONFIG.footerPlaceholder
            );
        },

        /**
         * Fetch and inject component HTML
         */
        fetchComponent: function(url, placeholder) {
            return new Promise((resolve, reject) => {
                const element = document.querySelector(placeholder);

                if (!element) {
                    // Placeholder no encontrado - silenciado en producción
                    resolve();
                    return;
                }

                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.text();
                    })
                    .then(html => {
                        element.innerHTML = html;
                        resolve();
                    })
                    .catch(error => {
                        // Error silenciado en producción
                        reject(error);
                    });
            });
        },

        /**
         * Initialize header functionality
         */
        initializeHeader: function() {
            const header = document.getElementById('main-header');
            const mobileToggle = document.getElementById('mobile-toggle');
            const navMenu = document.getElementById('nav-menu');
            const navOverlay = document.getElementById('nav-overlay');

            if (!header) return;

            // Header always solid and visible
            header.classList.add(CONFIG.headerSolidClass);
            header.classList.remove(CONFIG.headerTransparentClass);

            // Mobile menu toggle
            if (mobileToggle && navMenu) {
                mobileToggle.addEventListener('click', () => {
                    const isOpen = navMenu.classList.toggle('active');
                    mobileToggle.classList.toggle('active');
                    mobileToggle.setAttribute('aria-expanded', isOpen);

                    if (navOverlay) {
                        navOverlay.classList.toggle('active');
                    }

                    // Prevent body scroll when menu is open
                    document.body.style.overflow = isOpen ? 'hidden' : '';
                });
            }

            // Close menu on overlay click
            if (navOverlay) {
                navOverlay.addEventListener('click', () => {
                    this.closeMobileMenu(navMenu, mobileToggle, navOverlay);
                });
            }

            // Close menu on nav link click (except dropdown toggles)
            const navLinks = document.querySelectorAll('.nav-link:not(.nav-link-dropdown)');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu(navMenu, mobileToggle, navOverlay);
                });
            });

            // Handle dropdown toggle in mobile
            const dropdownToggles = document.querySelectorAll('.nav-link-dropdown');
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', (e) => {
                    // On mobile, toggle dropdown instead of navigating
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        const dropdown = toggle.closest('.nav-dropdown');
                        dropdown.classList.toggle('active');
                    }
                });
            });

            // Close menu when clicking dropdown menu links
            const dropdownLinks = document.querySelectorAll('.nav-dropdown-menu a');
            dropdownLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu(navMenu, mobileToggle, navOverlay);
                });
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    this.closeMobileMenu(navMenu, mobileToggle, navOverlay);
                }
            });
        },

        /**
         * Close mobile menu
         */
        closeMobileMenu: function(navMenu, mobileToggle, navOverlay) {
            if (navMenu) navMenu.classList.remove('active');
            if (mobileToggle) {
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
            if (navOverlay) navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        },

        /**
         * Initialize footer functionality
         */
        initializeFooter: function() {
            // Update current year
            const yearElement = document.getElementById('current-year');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear();
            }
        },

        /**
         * Adjust internal link paths for subdirectories
         */
        adjustPaths: function() {
            const basePath = getBasePath();
            if (!basePath) return; // No adjustment needed for root level pages

            // Select all internal links that need adjustment
            const internalLinks = document.querySelectorAll('#header-placeholder a[href], #footer-placeholder a[href]');

            internalLinks.forEach(link => {
                const href = link.getAttribute('href');

                // Skip external links, anchors, tel, mailto, and already adjusted paths
                if (!href ||
                    href.startsWith('http') ||
                    href.startsWith('//') ||
                    href.startsWith('#') ||
                    href.startsWith('tel:') ||
                    href.startsWith('mailto:') ||
                    href.startsWith('../')) {
                    return;
                }

                // Adjust the path
                link.setAttribute('href', basePath + href);
            });
        },

        /**
         * Set active navigation link based on current page
         */
        setActiveNavLink: function() {
            const currentPage = this.getCurrentPage();
            const navLinks = document.querySelectorAll('.nav-link[data-page]');

            navLinks.forEach(link => {
                const linkPage = link.getAttribute('data-page');
                if (linkPage === currentPage) {
                    link.classList.add(CONFIG.activeClass);
                } else {
                    link.classList.remove(CONFIG.activeClass);
                }
            });
        },

        /**
         * Get current page name from URL
         */
        getCurrentPage: function() {
            const path = window.location.pathname;
            const page = path.split('/').pop().replace('.html', '') || 'index';
            return page;
        }
    };

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            const targetId = link.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }
    });

    // ============================================
    // INITIALIZE ON DOM READY
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => ComponentLoader.init());
    } else {
        ComponentLoader.init();
    }

    // Expose to global scope if needed
    window.MESPICComponents = ComponentLoader;

})();
