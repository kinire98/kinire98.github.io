export function positionRemoveClass(element, maxHeight, minHeight) {
        if (window.scrollY <= maxHeight && window.scrollY >= minHeight) {element.style.display = "block"}
        else {element.style.display = "none";}
};