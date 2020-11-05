require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log(`connected to ${process.env.MONGO_URI}`);

    const httpServer = http.createServer(app);

    return httpServer.listen(8080);
  })
  .then(() => {
    console.log('server started');
  });
