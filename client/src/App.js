import React, { Component } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
//import { ApolloProvider } from 'react-apollo';


import './App.css';
import logo from './rickandmortylogo.png';

const client = new ApolloClient({
  uri: 'http//localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>

    <div className="container">
      <img src={logo} alt="RickAndMorty" style={{width: 400, display: 'block', margin: 'auto'}}/>
    </div>

    </ApolloProvider>
  );
}

export default App;
