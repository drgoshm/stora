const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLID} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString}
    })
});

module.exports = {
    type: UserType,
    args: { id: {type: GraphQLID}},
    resolve(parent, args){
    }
};


