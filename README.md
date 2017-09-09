## .env sample
```
listenIP = localhost
listenPort = 4001
```

## Preparation before start GraphQL server
```
$ npm install -g nodemon
$ npm install
```

## How to start GraphQL server
* .env file must be created in the root directory of the project
* start server.js by this command
```
$ nodemon server.js --watch server.js --watch schema.js
```
