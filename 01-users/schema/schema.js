const grapql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = grapql;

const UserType = new GraphQLObjectType({
  name: "User",
  fileds: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});
