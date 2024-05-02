
export default function openLink($el: HTMLElement, url: string) {
    $el.style.cursor = 'pointer';
    $el.addEventListener('click', () => {
        const $a = document.createElement('a');
        $a.style.display = 'none';
        $a.href = url;
        document.body.appendChild($a);
        $a.click();
    })
}