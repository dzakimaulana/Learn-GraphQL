const express = require('express');

const startServer = async () => {
  const app = express();

  app.use(express.json());

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`)
  })
}

startServer();