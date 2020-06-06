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

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {},
    },
  },
});
