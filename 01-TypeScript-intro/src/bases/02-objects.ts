export const pokemonIds = [1,20,30,34,66]

pokemonIds.push("pikachu") // this will throw an error because pokemonIds is an array of numbers

// with interface, we can force the object to have a specific structure

interface Pokemon {
    id: number;
    name: string;
    age?: number; // ? means this property is optional
}

export const pikachu: Pokemon = {
    id: 1,
    name: 'pikachu'
}

export const pokemons: Pokemon[] = [];

pokemons.push(pikachu)