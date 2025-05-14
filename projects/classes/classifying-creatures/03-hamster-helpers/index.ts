export type SmallPetFood =
	| "bugs"
	| "fruits"
	| "insects"
	| "plants"
	| "seeds"
	| "vegetables";

export abstract class SmallFuryPet {
	readonly species: string;
	protected happiness: number = 0;

	constructor(species: string) {
		this.species = species;
	}

	abstract eats(food: SmallPetFood): boolean;

	isHappy(): boolean {
		return this.happiness > 0;
	}
}

export class Gerbil extends SmallFuryPet {
	constructor() {
		super("Gerbil");
	}

	dig(): void {
		this.happiness++;
	}

	eats(food: SmallPetFood): boolean {
		return ["insects", "plants", "seeds", "vegetables"].includes(food);
	}
}

export class Hamster extends SmallFuryPet {
	constructor() {
		super("Hamster");
	}

	run(): void {
		this.happiness++;
	}

	eats(): boolean {
		return true;
	}
}
