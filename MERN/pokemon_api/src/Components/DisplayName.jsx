import React from "react";

const FetchDisplay = (props) => {
    const { pokemon } = props;
    return (
        <div>
            {pokemon.pokemon ? pokemon.pokemon.map((item, index) => {
                return (<div key={index}>{item.name}</div>)
            }) : null}
        </div>
    )
}

export default FetchDisplay;