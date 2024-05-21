export default function openLink($el: HTMLElement, url: string) {
	$el.style.cursor = "pointer";
	const $a = document.createElement("a");
	$a.style.display = "none";
	$a.href = url;
	$a.target = "_blank";
	document.body.appendChild($a);
	$el.addEventListener("click", () => {
		$a.click();
	});
}
