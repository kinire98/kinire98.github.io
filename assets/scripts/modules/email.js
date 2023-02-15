import { ajaxHelper } from "./ajaxHelper.js";

export function email(eMail) {

    const $loader = document.querySelector("#email-form img"),
        $submit = document.querySelector('#email-form input[type="submit"]'),
        $formElements = document.querySelectorAll("input, textarea, select, #email-form span");
    



    document.addEventListener("submit",  (e) => {
        if (e.target != document.getElementById("email")) return null;
        e.preventDefault();
        e.target.querySelector('[type="hidden"]').value = "Reply to " + e.target.querySelector('[type="hidden"]').value + ":";
        $loader.style.display = "block";
        $submit.style.display = "none";
        $formElements.forEach(el => el.classList.add("blank"));
        ajaxHelper({
            URL: eMail,
            method: "POST",
            options: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: new FormData(e.target),
            success: (json) => {
                document.querySelector("legend").innerHTML = "Thank you for you submission!"
                $loader.style.display = "none";
                $formElements.forEach(el => el.classList.remove("blank"));
                $formElements.forEach(el => el.style.display = "none");
            },
            error: (err) => {
                document.querySelector("legend").innerHTML = "Sorry! There was an error"
                $loader.style.display = "none";
                $formElements.forEach(el => el.classList.remove("blank"));
                $formElements.forEach(el => el.style.display = "none");
            }
        })
    })
}