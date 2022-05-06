import React, {Component} from "react";

export class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        };
    }

    addCount = () => {
        this.setState({age: this.state.age + 1})}

    happyBirthday = () => {
        alert(`Happy Birthday!`)
    }

    render() {
        const{firstName, lastName, age, hairColor} = this.props;
        return (
            <fieldset>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = {() => this.addCount()}>Birthday for {firstName} {lastName}</button>
            </fieldset>
        );
    }
}

export default PersonCard;