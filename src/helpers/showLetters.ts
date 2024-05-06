// It is supposed to be an inline element. It has text
export default function showLetters($el: HTMLElement, intervalLength: number)  {
    $el.style.display = 'inline';
    let i = 0;
    const addLetters = setInterval(() => {
        if(i === $el.dataset.content!.length - 1) clearInterval(addLetters);
        $el.innerHTML += $el.dataset.content![i];
        i++;
    }, (intervalLength / 6) / $el.dataset.content!.length)
}