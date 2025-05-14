export function zip<A, B>(a: A[], b: B[]): (A | B)[] {
	const zipArray: (A | B)[] = [];
	for (let i = 0; i < Math.max(a.length, b.length); i++) {
		a[i] !== undefined ? zipArray.push(a[i]) : a[i];
		b[i] !== undefined ? zipArray.push(b[i]) : b[i];
	}
	return zipArray;
}
