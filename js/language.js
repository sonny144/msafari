import i18next from 'i18next';

i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: require(`../locales/en/${getCurrentPage()}.json`),
        },
        fr: {
            translation: require(`../locales/fr/${getCurrentPage()}.json`),
        },
    },
}).then(() => {
    updateContent();
});

// Listen for language change
document.getElementById('language-select').addEventListener('change', (event) => {
    i18next.changeLanguage(event.target.value).then(() => {
        updateContent();
    });
});

// Update page content dynamically
function updateContent() {
    const elements = document.querySelectorAll('[id]');
    
    elements.forEach(element => {
        const key = element.id;
        if (i18next.exists(key)) {
            if (element.tagName === 'TITLE') {
                document.title = i18next.t(key); // Update the <title> tag
            } else {
                element.innerHTML = i18next.t(key); // Update text, including <a> elements
            }
        }
    });
}

// Get the current page name from URL
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return filename.split('.')[0]; // Extract the page name without extension
}
