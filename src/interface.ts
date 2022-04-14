export interface Pokemons {
    name: string;
    url: string;
}

export interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string
    }
}


export interface PokemonDetail extends Pokemon {
    abilities?: {
        ability: {
            name: string;
            url: string;
        },
        name: string
    }[]
}