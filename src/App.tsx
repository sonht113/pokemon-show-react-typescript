import React, {useEffect, useState} from 'react';
import "./App.css"
import axios from "axios";
import {Pokemons, Pokemon} from "./interface";
import PokemonCollection from "./components/PokemonCollection";

const App:React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
            setNextUrl(res.data.next)
            res.data.results.forEach( async (pokemon:Pokemons) => {
                const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                setPokemons((p) => [...p, poke.data])
                setLoading(false)
            })
        }
        getPokemon()
    }, [])

    const handleLoadMore = async () => {
        setLoading(true)
        const res = await axios.get(nextUrl)
        setNextUrl(res.data.next)
        res.data.results.forEach(async (pokemon:Pokemons) => {
            const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            setPokemons(p => [...p, poke.data])
            setLoading(false)
        })
    }
  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">
          Pokemon
        </header>
        <PokemonCollection pokemons={pokemons} />
          <div className="btn" onClick={handleLoadMore}>
              <button>{
                  !loading ? "Load more" : "Loading..."
              }</button>
          </div>
      </div>
    </div>
  );
}

export default App;
