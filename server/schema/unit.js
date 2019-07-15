const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLID} = graphql;


const UnitType = new GraphQLObjectType({
    name: 'Unit',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},

    })
});

module.exports = {
    type: UnitType,
    args: { id: {type: GraphQLID}},
    resolve(parent, args){

    }
};


