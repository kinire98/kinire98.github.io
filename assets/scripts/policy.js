import { appear, hamburger } from "./header.js";
import { getYear } from "./modules/getYear.js"


document.addEventListener("DOMContentLoaded", () => {
    getYear();
    appear();
    hamburger();
})