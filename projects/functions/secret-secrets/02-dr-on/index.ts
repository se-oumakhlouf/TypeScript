export type onVowel = (character: string) => string; // 'y' is considered a consonant
export type onConsonant = (character: string) => string;
export type onPunction = (character: string) => string;

export function createAdvancedCipher(
	vowel: onVowel,
	consonant: onConsonant,
	punctuation: onPunction,
) {
	return (text: string) => {
		let res = "";
		for (const char of text) {
			if (char.match(/[aeiou]/i)) {
				res += vowel(char);
			} else if (char.match(/[bcdfghjklmnpqrstvwxyz]/i)) {
				res += consonant(char);
			} else {
				res += punctuation(char);
			}
		}
		return res;
	};
}
