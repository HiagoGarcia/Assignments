import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Planets = () => {
    const { id } = useParams()
    const [planets, setPlanetes] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data);
                setPlanetes(response.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                planets?
                <div>
                <h1>{planets.name}</h1>
                <h3>Climate: {planets.climate}</h3>
                <h3>Terrain: {planets.terrain}</h3>
                <h3>Surface Water: {planets.surface_water}</h3>
                <h3>Population: {planets.population}</h3>
                </div>
                :
                <div>
                <h1>These aren't the droids you're looking for.</h1>
                <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg" alt="Obi-Wan in episode 4" />
                </div>
            }
        </div>
    );
}

export default Planets;