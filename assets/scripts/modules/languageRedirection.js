export default function languageRedirection() {
    const ls = localStorage;
    if (!ls.getItem("language") || ls.getItem("language") == "es") {
        ls.setItem("language", "es");
        generateButton("es");
    }
    if(ls.getItem("language") == "en") {
        ls.setItem("language", "en");
        generateButton("en");
    }
}
function generateButton(lan) {
    const $button = document.createElement("a");
    $button.href = "./" + lan;
    $button.style.display = "none";
    document.body.appendChild($button);
    $button.click();
}