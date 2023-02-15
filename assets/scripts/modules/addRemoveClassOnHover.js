


export function addRemoveClassOnHover (element, otherElement, ...pseudoclass) {
    const el = document.querySelector(element);

    document.querySelector(otherElement).addEventListener("mouseover", () => {
        el.classList.remove(pseudoclass[0]);
        el.classList.add(pseudoclass[1]);
    })
    document.querySelector(otherElement).addEventListener("mouseleave", () => {
        el.classList.remove(pseudoclass[1]);
        if (otherElement != 'img[alt="A relaxed man"]') el.classList.add(pseudoclass[0]);
    })
}