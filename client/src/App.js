import React, { Component } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import Personagens from './components/Personagens';
//import { ApolloProvider } from 'react-apollo';


import './App.css';
import logo from './rickandmortylogo.png';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_CONTENT_API,
  })

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>

    <div className="container">
      <img src={logo} alt="RickAndMorty" style={{width: 400, display: 'block', margin: 'auto'}}/>
    
    <Personagens />
    </div>
    </ApolloProvider>
  );
}

export default App;
