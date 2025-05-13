export function shallowDifferences(first: string[], second: string[]) {
	if (first.length !== second.length) {
		return undefined;
	}
	const arrayLength = first.length;
	const resultArray: (string | undefined)[] = [];
	for (let i = 0; i < arrayLength; i++) {
		if (first[i] === second[i]) {
			resultArray.push(first[i]);
		} else {
			resultArray.push(undefined);
		}
	}
	return resultArray;
}
