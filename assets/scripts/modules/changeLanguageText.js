export function changeLanguageText(element, englishText, spanishText) {
    let el = document.querySelector(element);
    const ls = localStorage;
    if (ls.getItem("language") == "es") {
        el.innerHTML = spanishText;
    }
    if (ls.getItem("language") == "en") {
        el.innerHTML = englishText;
    }
    
}