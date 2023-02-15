
export function openLink (url, element) {

    document.addEventListener("click", (e) => {
        if (!e.target.matches(element)) return null;
        open(url);
    })
}