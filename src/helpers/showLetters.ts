// It is supposed to be an inline element. It has text
export default function showLetters($el: HTMLElement, intervalLength: number) {
	$el.style.display = "inline";
	$el.innerHTML = "";
	let i = 0;
	const addLetters = setInterval(() => {
		if (i === $el.dataset.content!.length - 1) clearInterval(addLetters);
		$el.innerHTML = "";
		$el.innerHTML = $el.dataset.content!.substring(0, i + 1);
		i++;
	}, intervalLength / 9 / $el.dataset.content!.length);
}
