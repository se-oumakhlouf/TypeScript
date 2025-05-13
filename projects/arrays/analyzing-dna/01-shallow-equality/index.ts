export function shallowEquality(first: string[], second: string[]): boolean {
	if (first.length != second.length) {
		return false;
	}
	const arrayLength = first.length;
	for (let i = 0; i < arrayLength; i++) {
		if (first[i] !== second[i]) {
			return false;
		}
	}
	return true;
}
