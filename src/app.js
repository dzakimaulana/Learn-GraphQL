const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { sequelize } = require('./config/db');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

require('dotenv').config();

const startServer = async () => {
  // Authenticate the connection
  try {
    await sequelize.authenticate();
    console.log('🚀 Connection has been established successfully.');
  } catch (error) {
    console.error('💩 Unable to connect to the database:', error);
  }

  // Sync the database
  await sequelize.sync();
  console.log('✅ Database synced successfully.');

  // Express
  const app = express();
  app.use(express.json());

  // Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,  // Enable introspection
    playground: true 
  });
  await server.start();
  server.applyMiddleware({ app });

  // Get the port from environment variables
  const PORT = process.env.APP_PORT || 4000;

  // Start Express
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  });
}

startServer();