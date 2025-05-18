export class PokemonA {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class PokemonB {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.png`;
    }

    constructor(
        // @ts-ignore
        public readonly id: number,
        // @ts-ignore
        public name: string
    ) {}

    //methods

    public scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    public speak() {
        console.log(`${this.name}, ${this.name}`);
    }
}

export const charmander = new PokemonA(4, 'Charmander');
export const pikachu = new PokemonB(5, 'Pikachu');

pikachu.scream();
pikachu.speak();