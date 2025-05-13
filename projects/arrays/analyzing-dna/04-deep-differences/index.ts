export function deepDifferences(a: string[][], b: string[][]) {
	if (a.length !== b.length) {
		return undefined;
	}

	const firstLayer = a.length;
	const resultArray: ((string | undefined)[] | undefined)[] = [];

	for (let i = 0; i < firstLayer; i++) {
		if (a[i].length !== b[i].length) {
			resultArray.push(undefined);
			continue;
		}
		const secondLayer = a[i].length;
		const interResult: (string | undefined)[] = [];

		for (let j = 0; j < secondLayer; j++) {
			if (a[i][j] !== b[i][j]) {
				interResult.push(undefined);
			} else {
				interResult.push(a[i][j]);
			}
		}
		resultArray.push(interResult);
	}
	return resultArray;
}
