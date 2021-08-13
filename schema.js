const axios = require('axios');

const { 
    GraphQLObjectType, 
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema } = require('graphql');

//Personagens
const PersonagemType = new GraphQLObjectType({
    name: 'Character',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        origin: { type: OrigemType },
        location: { type: LocalizacaoType },
        image: { type: GraphQLString },
        episode: {
            type: new GraphQLList(EpisodioType),
            resolve(parent, args){
                return axios.get('https://rickandmortyapi.com/api/episode')
                .then(res => res.data.results);
            }
         },
        url: { type: GraphQLString },
    })
});


//Episodios
const EpisodioType = new GraphQLObjectType({
    name: 'Episode',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        air_date: { type: GraphQLString },
        characters: {
            type: new GraphQLList(PersonagemType),
            resolve(parent, args) {
                return axios.get('https://rickandmortyapi.com/api/episode')
                .then(res => res.data.results);
            }
        },
        url: { type: GraphQLString },

    })
});

//Origem
const OrigemType = new GraphQLObjectType({
    name: 'Origin',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        url: { type: GraphQLString },
    })
});

//Localização
const LocalizacaoType = new GraphQLObjectType({
    name: 'Location',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        url: { type: GraphQLString },
    })
});

//Root query
const RootQuery = new GraphQLObjectType ({
    name: 'RootQueryType',
    fields: {
        characters: {
            type: new GraphQLList(PersonagemType),
            resolve(parent, args) {
                return axios.get('https://rickandmortyapi.com/api/character') 
                .then(res => res.data.results);
            }
        },
        character: {
            type: PersonagemType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios.get(`https://rickandmortyapi.com/api/character/${args.id}`)
                .then(res => res.data);
            }
        },
        episode: {
            type: new GraphQLList(EpisodioType),
            resolve(parent, args) {
                return axios.get('https://rickandmortyapi.com/api/episode') 
                .then(res => res.data.results);
            }
        },
        episodes: {
            type: EpisodioType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios.get(`https://rickandmortyapi.com/api/episode/${args.id}`)
                .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema ({
    query: RootQuery
});