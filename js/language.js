import i18next from 'i18next';

async function loadTranslations() {
    const page = getCurrentPage();

    try {
        // Fetch JSON files using absolute paths
        const enResponse = await fetch(`/locales/en/${page}.json`);
        const frResponse = await fetch(`/locales/fr/${page}.json`);

        console.log("enResponse:", enResponse); // Debugging
        console.log("frResponse:", frResponse); // Debugging

        if (!enResponse.ok || !frResponse.ok) {
            throw new Error(`Failed to load translation files: en: ${enResponse.status} ${enResponse.statusText}, fr: ${frResponse.status} ${frResponse.statusText}`);
        }

        const enText = await enResponse.text();
        const frText = await frResponse.text();

        console.log("enText:", enText); // Debugging
        console.log("frText:", frText); // Debugging

        const enTranslation = JSON.parse(enText);
        const frTranslation = JSON.parse(frText);

        i18next.init({
            lng: 'en',
            resources: {
                en: { translation: enTranslation },
                fr: { translation: frTranslation },
            },
        }).then(() => {
            updateContent();
        });
    } catch (error) {
        console.error("Error loading translations:", error);
    }
}

loadTranslations();

document.getElementById('language-select').addEventListener('change', async (event) => {
    await i18next.changeLanguage(event.target.value);
    updateContent();
});

function updateContent() {
    document.querySelectorAll('[id]').forEach(element => {
        if (i18next.exists(element.id)) {
            element.tagName === 'TITLE'
                ? document.title = i18next.t(element.id)
                : element.innerHTML = i18next.t(element.id);
        }
    });
}

function getCurrentPage() {
    const filename = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    const pageName = filename.split('.')[0] || 'index';
    console.log("Current Page Name:", pageName);
    return pageName;
}