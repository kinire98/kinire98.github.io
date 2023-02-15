import { appear, hamburger } from "./header.js";
import { getYear } from "./modules/getYear.js"
import { reveals,revealEverything } from "./modules/reveals.js";
let regexp = /android|iphone|kindle|ipad|webOS|iPhone|iPod|BlackBerry|WindowsPhone/i,
     isMobileDevice = regexp.test(navigator.userAgent);


document.addEventListener("DOMContentLoaded", () => {
    getYear();
    if (!isMobileDevice) {reveals();} else {revealEverything();}
    appear();
    hamburger();
})
if(!isMobileDevice) window.addEventListener("scroll", reveals)