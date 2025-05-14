export type Cipher = (character: string) => string;

export function createCipher(cipher: Cipher) {
	return (text: string) => {
		let res = "";
		for (const char of text) {
			res += cipher(char);
		}
		return res;
	};
}
