
export default function openLinks() {
    let $els = document.querySelectorAll('button[data-path]');
    $els?.forEach(element => {
        element.addEventListener('click', () => {
        const $a = document.createElement('a');
        if (element instanceof HTMLElement) {
            $a.href = element.dataset.path!;
        }
        $a.style.display = 'none';
        document.body.appendChild($a);
        $a.click();
    })

    });
}