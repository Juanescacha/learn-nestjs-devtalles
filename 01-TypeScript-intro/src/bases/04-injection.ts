import type {Move, PokeapiResponse} from '../interfaces/pokeapi-response.interface';
import {type HttpAdapter, PokeApiFetchAdapter} from "../api/pokeApi.adapter.ts";

export class Pokemon {

    public readonly id: number;
    public name: string;
    public readonly http: HttpAdapter;

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor(id: number, name: string, http: HttpAdapter) {
        this.id = id;
        this.name = name;
        this.http = http;
    }

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        return data.moves;
    }

}

// const pokeApiAxios = new PokeApiAdapter()
const pokeApiFetch = new PokeApiFetchAdapter()

export const pokemonA = new Pokemon( 4, 'Charmander', pokeApiFetch);

await pokemonA.getMoves();