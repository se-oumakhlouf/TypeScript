type MakeGuess = (text: string, attempt: number) => string;
type ValidateGuess = (guess: string) => boolean;

export type CodeCrackerOptions = {
	attempts: number;
	makeGuess: MakeGuess;
	validateGuess: ValidateGuess;
};

export function createCodeCracker({
	attempts,
	makeGuess,
	validateGuess,
}: CodeCrackerOptions) {
	return (text: string) => {
		for (let i = 0; i < attempts; i++) {
			const guess = makeGuess(text, i);
			if (validateGuess(guess)) {
				return guess;
			}
		}
		return undefined;
	};
}
