export function formSupport() {
    const $select = document.getElementById("type"),
        $option = document.querySelectorAll("option"),
        $input = document.querySelector('input[name="enterprise"]');
    $select.selectedIndex = "0";
    $option.forEach(el => {
        el.addEventListener("click", (e) => {
            if ($select.selectedIndex === 4 || $select.selectedIndex === 5) {
                $input.name = "support number"       
                $input.placeholder = "Write the support number of your webpage...*"
                return null;
            }
            $input.name = "enterprise";
            $input.placeholder = "Write the name of your bussiness...*";

        })
    }) 
}