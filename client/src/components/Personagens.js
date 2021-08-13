import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from '@apollo/client/react/components';


const PERSONAGENS_QUERY = gql`
    query PersonagensQuery{
        Character {
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
                <h1 className="display-4 my-3"> Personagens </h1>

                <Query query={PERSONAGENS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4> Carregando... </h4>;
                        if (error) console.log(error);
                        console.log(data);

                        return <h1> Teste </h1>;
                    }}
                </Query>

            </div>
        )
    }
}

export default Personagens
