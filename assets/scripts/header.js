export function appear() {
    if (window.scrollY <= 150) {document.querySelector("header").classList.remove("is-active")}
    if (window.scrollY > 150) {document.querySelector("header").classList.add("is-active")}
    window.addEventListener("scroll", (e) => {
        if (window.scrollY <= 150) {document.querySelector("header").classList.remove("is-active")}
        if (window.scrollY > 150) {document.querySelector("header").classList.add("is-active")}
    })
}
export function hamburger() {
    document.addEventListener("click", (e) => {
        if (!e.target.matches(".hamburger") && !e.target.matches(".hamburger *")) {return null;}
        const $ham = document.querySelector(".hamburger"),
            $ul = document.querySelector("header > nav > ul"),
            $header = document.querySelector("header");
        $ham.classList.toggle("is-active")
        $header.classList.toggle("show")
        $ul.classList.toggle("show")
    })
}