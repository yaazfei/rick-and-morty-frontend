import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const PERSONAGENS_QUERY = gql`
    query PersonagensQuery{
        personagens {
            id
            name
            origin
            location
            image
            episode
            url
    } 
}
`;

export class Personagens extends Component {
    render() {
        return (
            <div>
                <h1 classname="display-4 my-3"> Personagens </h1>
            </div>
        )
    }
}

export default Personagens
