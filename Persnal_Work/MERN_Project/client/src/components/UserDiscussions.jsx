import React from "react";
import { Container } from "react-bootstrap";

const UserDiscussions = (props) => {
    const { discussions } = props


    return (
        <Container>
            <div className="row border border-dark border-2">
                <div className="border-bottom border-dark bg-secondary bg-opacity-7">
                    <header className="text-white">Recent Discussions</header>
                </div>
                <table className="border-bottom">
                    <thead>Title 1</thead>
                    <tr>
                        <td className="align-text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                    </tr>
                </table>
                <table className="border-bottom">
                    <thead>Title 2</thead>
                    <tr>
                        <td className="align-text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                    </tr>
                </table>
                <table className="border-bottom">
                    <thead>Title 3</thead>
                    <tr>
                        <td className="align-text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                    </tr>
                </table>
            </div>
        </Container>
    )
}

export default UserDiscussions