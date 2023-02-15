import { appear, hamburger } from "./header.js";
import { getYear } from "./modules/getYear.js"
import { positionRemoveClass } from "./modules/positionRemoveClass.js";
import { reveals, revealEverything } from "./modules/reveals.js"

let regexp = /android|iphone|kindle|ipad|webOS|iPhone|iPod|BlackBerry|WindowsPhone/i,
     isMobileDevice = regexp.test(navigator.userAgent);


document.addEventListener("DOMContentLoaded", () => {
    getYear();
    if (!isMobileDevice) {reveals();} else {revealEverything();}
    appear();
    hamburger();
    positionRemoveClass(document.getElementById("points"), 1000, 0);
    positionRemoveClass(document.getElementById("back"), 1000, 0);
});
window.addEventListener("scroll", () => {
    if (!isMobileDevice) {reveals();} 
       positionRemoveClass(document.getElementById("points"), 1000, 0);
    positionRemoveClass(document.getElementById("back"), 1000, 0);


});