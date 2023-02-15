const d = document;

export function openCardLinks(cardSelector) {
    d.addEventListener("click", (e) => {
        if (!e.target.matches(cardSelector)) {return null;}
        if (e.target.dataset.href) {return open(e.target.dataset.href, "_blank")}
        open(e.target.parentElement.dataset.href, "_blank")
    });
}