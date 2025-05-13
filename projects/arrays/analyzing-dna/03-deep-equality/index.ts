export function deepEquality(a: string[][], b: string[][]): boolean {
	if (a.length !== b.length) {
		return false;
	}

	const firstLayerLength = a.length;
	for (let i = 0; i < firstLayerLength; i++) {
		if (a[i].length !== b[i].length) {
			return false;
		}
		const secondLayerLength = a[i].length;
		for (let j = 0; j < secondLayerLength; j++) {
			if (a[i][j] !== b[i][j]) {
				return false;
			}
		}
	}
	return true;
}
