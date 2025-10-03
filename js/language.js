document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageLinks = document.querySelectorAll('.language-link');

    const setLanguage = async (lang) => {
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
    };

    languageSwitcher.addEventListener('click', (e) => {
        e.preventDefault();
        const link = e.target.closest('.language-link');
        if (link) {
            const lang = link.getAttribute('data-lang');
            setLanguage(lang);
        }
    });

    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
});
