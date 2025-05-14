interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	abstract readonly name: string;
	#consumed: Consumed[] = [];

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
			power += this.getPowerFrom(entity);
		}
		return power + this.#consumed.length;
	}

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}

	protected abstract getPowerFrom(consumed: Consumed): number;
	protected abstract isEvil(): boolean;
}

export class Demon extends Horror {
	name: string = "Demon";

	protected getPowerFrom(consumed: Consumed): number {
		return consumed.evil ? consumed.power / 2 : consumed.power * 2;
	}
	protected isEvil(): boolean {
		return true;
	}
}

export class Sorcerer extends Horror {
	name: string;
	#evil: boolean;

	constructor(name: string, evil: boolean) {
		super();
		this.name = name;
		this.#evil = evil;
	}

	getPowerFrom(consumed: Consumed): number {
		return consumed.evil === this.#evil ? consumed.power * 2 : consumed.power;
	}

	isEvil(): boolean {
		return this.#evil;
	}
}
