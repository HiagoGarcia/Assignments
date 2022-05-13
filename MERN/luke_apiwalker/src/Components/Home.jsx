import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [ item, setItem ] = useState();
    const [ id, setId ] = useState();
    const navigate = useNavigate();

    const sendInfo = (e) => {
        e.preventDefault();
        navigate(`/${item}/${id}`)
        clearForm()
    }

    const clearForm = () => {
        setItem("");
        setId("");
    }

    return (
        <div>
            <form onSubmit={sendInfo}>
                <p>
                    Search for:
                    <select name="item" value={item} onChange = {e => setItem(e.target.value)}>
                        <option hidden>Choose a category</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    ID:
                    <input type="text" name="id" value={id} onChange = {e => setId(e.target.value)}/>
                    <button type="submit">Search</button>
                </p>

            </form>
        </div>
    );
}

export default Home;