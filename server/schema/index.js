const graphql = require('graphql');

const User = require('./user.js');
const Unit = require('./unit.js');

const {GraphQLObjectType, GraphQLSchema, GraphQLString} = graphql;


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: User,
        unit: Unit,
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});