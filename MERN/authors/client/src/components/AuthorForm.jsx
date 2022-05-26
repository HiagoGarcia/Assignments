import React, { useState } from "react";
// import axios from 'axios'
// eslint-disable-next-line
export default props => {
    const { initialFirstName, initialLastName, initialRating, onSubmitProp, errors, options } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [rating, setRating] = useState(initialRating);
    const Dropdown = ({ label, value, options, onChange }) => {
        return (
            <label>
                {label}
                <select value={value} onChange={onChange}>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        );
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ firstName, lastName, rating })
    }

    return (
        <div>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))
            }
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br />
                    <input type="text"
                        name="firstName" value={firstName}
                        onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" name="lastName" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                </p>
                <Dropdown
                    label="Rating"
                    options={options}
                    value={rating}
                    onChange={(e) => { setRating(e.target.value) }}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

