export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function alignTexts(texts: string[], options: AlignmentOptions) {
	const resultLines: string[][] = [];

	for (const text of texts) {
		const lines: string[] = splitLines(text, options.width);
		const align: string[] = alignLines(lines, options);
		resultLines.push(align);
	}
	return resultLines;
}

function splitLines(text: string, width: number): string[] {
	const result: string[] = [];

	let chain: string = "";
	const splitText = text.split(" ");
	let separator = "";
	let isModified: boolean = false;

	for (const word of splitText) {
		if (isModified && chain.length + word.length + separator.length > width) {
			result.push(chain);
			chain = "";
			separator = "";
			isModified = false;
		}
		chain += separator + word;
		isModified = true;
		if (separator === "") {
			separator += " ";
		}
	}
	if (isModified) {
		result.push(chain);
	}
	return result;
}

function alignLines(
	lines: string[],
	{ align = "left", width }: AlignmentOptions,
): string[] {
	const result: string[] = [];
	for (let line of lines) {
		if (line.length === width) {
			result.push(line);
			continue;
		}
		switch (align) {
			case "left":
				line = line.padEnd(width, " ");
				break;
			case "right":
				line = line.padStart(width, " ");
				break;
			case "middle":
				const remaining = width - line.length;
				const startPad = Math.floor(remaining / 2);
				const endPad = startPad + (remaining % 2);
				line = " ".repeat(startPad) + line + " ".repeat(endPad);
				break;
		}
		result.push(line);
	}
	return result;
}
