import i18next from 'i18next';

i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: require('../locales/en/' + getCurrentPage() + '.json'),
        },
        fr: {
            translation: require('../locales/fr/' + getCurrentPage() + '.json'),
        },
    },
}).then(() => {
    updateContent();
});

document.getElementById('language-select').addEventListener('change', (event) => {
    i18next.changeLanguage(event.target.value).then(() => {
        updateContent();
    });
});

function updateContent() {
    const page = getCurrentPage();
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.id;
        if (i18next.exists(key)) {
            element.textContent = i18next.t(key);
        }
    });
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
    return page;
}