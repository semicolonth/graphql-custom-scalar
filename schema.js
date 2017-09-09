require('dotenv').config();

const {
    GraphQLScalarType
} = require('graphql');

const int53CustomScalarType = new GraphQLScalarType({
    name: 'Int53',
    description: 'Implmentation of Int53',
    serialize(value) {
        return value;
    },
    parseValue(value) {
        return value;
    },
    parseLiteral(ast) {
        return ast.value;
    }
});

const typeDefs = `

  scalar Int53

  type Document {
      id: Int
      amount: Int53
  }

  # the schema allows the following query:
  type Query {
    # One document query
    document (
      id: Int
    ): Document    
  }

`;

const resolvers = {
  Query: {
    document: (_, {id}) => {
      return ({id: 1, amount: 9007199254740992});
    },
  },
  Int53: int53CustomScalarType
};

const {
    makeExecutableSchema
 } = require('graphql-tools');

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});