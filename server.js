const express = require('express');
const { graphqlHTTP }  = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const app = express();

// Permite cross-origin
app.use(cors());


app.use('/graphql', graphqlHTTP({ //Endpoint padrão do GraphQL
    schema,
    graphiql: true
}));

app.use('/personagens', graphqlHTTP({ //Um endpoint
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor iniciando na porta ${PORT}`));