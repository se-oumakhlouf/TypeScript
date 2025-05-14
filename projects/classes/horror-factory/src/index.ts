interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

interface HorrorSettings {
	name: string;
	getPowerFrom: (consumed: Consumed) => number;
	isEvil: () => boolean;
}

export class Horror {
	#consumed: Consumed[] = [];

	readonly isEvil: () => boolean;
	readonly name: string;
	readonly #getPowerFrom: (consumed: Consumed) => number;

	constructor({ name, getPowerFrom, isEvil }: HorrorSettings) {
		this.isEvil = isEvil;
		this.name = name;
		this.#getPowerFrom = getPowerFrom;
	}

	#consume(opponent: Horror) {
		this.#consumed.push({
			evil: opponent.isEvil(),
			name: opponent.name,
			power: opponent.getPower(),
		});
	}

	getPower(): number {
		let power = 0;
		for (const entity of this.#consumed) {
			power += this.#getPowerFrom(entity);
		}
		return power + this.#consumed.length;
	}

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}
}

const demonSettings: HorrorSettings = {
	name: "Demon",
	getPowerFrom: (consumed: Consumed) => {
		return consumed.evil ? consumed.power / 2 : consumed.power * 2;
	},
	isEvil: () => true,
};

export function createDemon() {
	return new Horror(demonSettings);
}

export function createSorcerer(name: string, evil: boolean) {
	return new Horror({
		name,
		getPowerFrom: (consumed: Consumed) =>
			consumed.evil === evil ? consumed.power * 2 : consumed.power,
		isEvil: () => evil,
	});
}
