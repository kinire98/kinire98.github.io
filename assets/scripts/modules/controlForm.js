const d = document;
export function controlForm(form, checkbox) {
    const $form = d.querySelector(form),
        $button = $form.querySelector('input[type="submit"]'),
        $checkbox = d.querySelector(checkbox);
        check($checkbox, $button)
    d.addEventListener("click", (e) => {
        if (e.target.matches(checkbox)) {
            check($checkbox, $button)
        }
    });
}
function check($checkbox, $button) {
    if ($checkbox.checked) {
        $button.style.opacity = "1";
        $button.style.visibility = "visible";
    } else {
        $button.style.opacity = "0";
        $button.style.visibility = "hidden";
    }
}