export function unique(...items: any[][]): any[] {
	const uniqueArray: any[] = [];
	for (const array of items) {
		for (const elem of array) {
			if (uniqueArray.includes(elem)) {
				continue;
			}
			uniqueArray.push(elem);
		}
	}
	return uniqueArray;
}

// should have done a Set
