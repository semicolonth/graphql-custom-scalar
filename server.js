require('dotenv').config();

const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

const app = express();

const listenIP = process.env.listenIP;
const listenPort = process.env.listenPort;

app.disable('x-powered-by');

// GraphQL
app.use('/graphql', 
  expressGraphQL(req => ({
      graphiql: true,
      schema
  }))
);

app.listen(listenPort, listenIP, function () {
  console.log('GraphQL server listening on ' + listenIP + ':' + listenPort);
});