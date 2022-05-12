import React from 'react';

const DisplayName = (props) => {
    const { pokemonList } = props;

    return (
        <div>
            {pokemonList.map( (pokemon, i) => <p key = {i}>{pokemon.name}</p>)}
        </div>
    )
}

export default DisplayName;