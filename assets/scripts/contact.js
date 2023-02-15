import { cardText } from "./modules/cardText.js"
import { email } from "./modules/email.js";
import { getYear } from "./modules/getYear.js"
import env from "./modules/env.js"
import { revealEverything, reveals } from "./modules/reveals.js"
import { controlForm } from "./modules/controlForm.js";
import { openCardLinks } from "./modules/openCardLinks.js";
import { formSupport } from "./modules/formSupport.js";
import { appear, hamburger } from "./header.js";
let regexp = /android|iphone|kindle|ipad|webOS|iPhone|iPod|BlackBerry|WindowsPhone/i,
     isMobileDevice = regexp.test(navigator.userAgent);


document.addEventListener("DOMContentLoaded", () => {
    cardText();
    getYear();
    email(env.email);
    if (!isMobileDevice) {reveals();} else {revealEverything();}
    controlForm("form", 'form input[type="checkbox"]');
    openCardLinks(".card-content");
    openCardLinks(".card");
    openCardLinks(".card-title");
    openCardLinks(".card-subtitle");
    openCardLinks(".card-subtitle *")
    openCardLinks(".card-icon");
    formSupport();
    appear();
    hamburger();
});
if(!isMobileDevice) window.addEventListener("scroll", reveals)