import React, { useState } from 'react';
import axios from 'axios';
import DisplayName from './DisplayName';

const GetPokemon = () => {
    const [pokemonList, setPokemonList] = useState();



    const fetchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
            .then(response => {
                setPokemonList(response.data.results)
            })
    }

    return (
        <div>
            <button onClick={fetchPokemon}>Get Pokemon</button>
            {
                pokemonList ?
                    <DisplayName pokemonList={pokemonList} />
                    :
                    <h1>Click to get pokemon</h1>
            }
        </div>
    )
}



export default GetPokemon