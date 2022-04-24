import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class PokemonListService {

    constructor(private http: HttpClient) { }

    getPokemonList(offset: number) {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
        return this.http.get(url);
    }
}