import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const People = () => {
    const { id } = useParams()
    const [people, setPeople] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data);
                setPeople(response.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                people?
                <div>
                <h1>{people.name}</h1>
                <h3>Height {people.height}</h3>
                <h3>Mass: {people.mass}</h3>
                <h3>Hair Color: {people.hair_color}</h3>
                <h3>Skin Color: {people.skin_color}</h3>
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

export default People;