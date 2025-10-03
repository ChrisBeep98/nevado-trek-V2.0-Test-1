// Component Loader - Loads shared components into pages
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'components/header.html');
    loadComponent('footer-placeholder', 'components/footer.html');
});

async function loadComponent(placeholderId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        const placeholder = document.getElementById(placeholderId);
        
        if (placeholder) {
            placeholder.innerHTML = html;
            
            // Re-initialize Webflow components after loading
            if (typeof Webflow !== 'undefined') {
                Webflow.require('ix2').init();
            }
        }
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Enhanced Language Switcher for Multi-Page
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageLinks = document.querySelectorAll('.language-link');

    const setLanguage = async (lang) => {
        try {
            const response = await fetch(`${lang}.json`);
            const translations = await response.json();

            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[key]) {
                    element.innerHTML = translations[key];
                }
            });

            localStorage.setItem('language', lang);

            languageLinks.forEach(link => {
                if (link.getAttribute('data-lang') === lang) {
                    link.style.fontWeight = 'bold';
                } else {
                    link.style.fontWeight = 'normal';
                }
            });
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    };

    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', (e) => {
            e.preventDefault();
            const link = e.target.closest('.language-link');
            if (link) {
                const lang = link.getAttribute('data-lang');
                setLanguage(lang);
            }
        });
    }

    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
});
