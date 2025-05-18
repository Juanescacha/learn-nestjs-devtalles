export class PokemonA {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class PokemonB {
    constructor(public readonly id: number, public name: string) {}
}

export const charmander = new PokemonA(4, 'Charmander');