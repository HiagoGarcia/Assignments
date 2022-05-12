import React, { useState } from 'react'
import FetchDisplay from './DisplayName';

const GetPokemon = (props) => {
    const [pokemon, setPokemon] = useState(0);

    const fetchPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setPokemon({
                    pokemon: response.results
                })
            })
    }

    return (

        <div>
            <p>Pokemon:</p>
            <button onClick={fetchPokemon}>Show Pokemon</button>
            {
                pokemon ?
                    <FetchDisplay pokemon={pokemon} />
                    :
                    <h1>Click to get pokemon</h1>
            }
        </div>
    );
}

export default GetPokemon;