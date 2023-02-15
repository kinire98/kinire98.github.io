import { appear, hamburger } from "./header.js";
import { addRemoveClassOnHover } from "./modules/addRemoveClassOnHover.js";
import { getYear } from "./modules/getYear.js";
import { revealEverything, reveals } from "./modules/reveals.js"
let regexp = /android|iphone|kindle|ipad|webOS|iPhone|iPod|BlackBerry|WindowsPhone/i,
     isMobileDevice = regexp.test(navigator.userAgent);


document.addEventListener("DOMContentLoaded", () => {
    getYear();
    addRemoveClassOnHover(".you", "#relax img", "hover", "hover");
    if (!isMobileDevice) {reveals();} else {revealEverything();}
    appear();
    hamburger();
});
if(!isMobileDevice) window.addEventListener("scroll", reveals)