export default function orderGithubProjects(list: any[]): any[] {
	if (list.length === 0) return [];
	if (list.length === 1) return list;
	if (list.length === 2) {
		if (new Date(list[0].pushed_at) < new Date(list[1].pushed_at)) {
			[list[0], list[1]] = [list[1], list[0]];
		}
		return list;
	}
	let right = orderGithubProjects(list.slice(0, list.length / 2));
	let left = orderGithubProjects(list.slice(list.length / 2, list.length));
	let lp = 0;
	let rp = 0;
	let result: any[] = [];
	while (lp < left.length || rp < right.length) {
		if (lp === left.length) {
			result.push(right[rp]);
			rp++;
			continue;
		}
		if (rp === right.length) {
			result.push(left[lp]);
			lp++;
			continue;
		}
		if (new Date(right[rp].pushed_at) > new Date(left[lp].pushed_at)) {
			result.push(right[rp]);
			rp++;
			continue;
		}
		result.push(left[lp]);
		lp++;
	}
	return result;
}
