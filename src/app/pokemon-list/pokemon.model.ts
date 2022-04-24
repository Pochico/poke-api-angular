export interface PokemonResult{
    next: string;
    prev: string;
    results: Pokemon[];
}

export interface Pokemon{
    id: string;
    name: string;
}