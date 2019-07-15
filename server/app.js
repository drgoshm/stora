const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const graphqlShemas = require('./schema/index');

const PORT = 3005;


app.use('/gql', graphqlHTTP({
    schema: graphqlShemas,
    graphiql: true
}));

app.listen(PORT, error => {
    error ? console.log(error) : console.log('Server started!');
});