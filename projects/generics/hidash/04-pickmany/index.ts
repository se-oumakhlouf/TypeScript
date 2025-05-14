export function pickMany<T, K extends keyof T>(container: T, keys: K[]) {
	const picks: T[K][] = [];
	for (const key of keys) {
		picks.push(container[key]);
	}
	return picks;
}
