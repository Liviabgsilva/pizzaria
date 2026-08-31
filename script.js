document.addEventListener('DOMContentLoaded', () => {
    // Window & Navigator
    const languageElement = document.getElementById("demo-language");
    if (languageElement) {
        languageElement.textContent = window.navigator.language;
    }

    // Screen
    const screenElement = document.getElementById("demo-screen");
    if (screenElement) {
        screenElement.textContent = screen.colorDepth + " bits por pixel";
    }

    // Location
    const originElement = document.getElementById("demo-origin");
    if (originElement) {
        originElement.textContent = location.origin;
    }

    const heroElement = document.getElementById("demo-hero");
    if (heroElement) {
        heroElement.textContent = location.hostname;
    }

    // History
    const historyElement = document.getElementById("demo-history");
    if (historyElement) {
        historyElement.textContent = history.length + " páginas no histórico";
    }
});