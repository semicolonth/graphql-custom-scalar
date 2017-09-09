require('dotenv').config();

const typeDefs = `

  type Document {
      id: Int
      amount: Int
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
      return ({id: 1, amount: 2147483647});
    },
  }
};

const {
    makeExecutableSchema
 } = require('graphql-tools');

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});