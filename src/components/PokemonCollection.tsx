import React from "react";
import {PokemonDetail} from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css"

interface IProps {
    pokemons: PokemonDetail[],
}

const PokemonCollection:React.FC<IProps> = (props) => {
    const {pokemons} = props
    return (
        <div>
            <section className="collection-container">
                {
                    pokemons.map((pokemon, index) => {
                        return (
                            <div key={index}>
                                <PokemonList
                                    key={pokemon.id}
                                    name={pokemon.name}
                                    id={pokemon.id}
                                    abilities={pokemon.abilities}
                                    image={pokemon.sprites.front_default}/>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default PokemonCollection