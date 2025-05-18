import axios from "axios";
import type {PokeapiResponse} from "../interfaces/pokeapi-response.interface.ts";

export class PokeApiAdapter {

    private readonly axios = axios;

    async get(url: string) {
        const { data } = await this.axios.get<PokeapiResponse>(url);
        return data;
    }
}