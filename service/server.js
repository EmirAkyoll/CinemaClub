const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers.js');
const dotenv = require('dotenv');
const dbConnect = require('./db/utils/dbConnect.js');

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

dbConnect();

async function run_server() {
  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
}

run_server();
