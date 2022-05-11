import React, {useState} from 'react';

const CreateBox = (props) => {
    const [box, setBox] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(box)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" name="box" value={box}
                    onChange={e=>setBox(e.target.value)}
                    placeholder="Please choose a color." />
                </p>
                <button type='submit'>Create box</button>
            </form>
        </div>
    )
}

export default CreateBox