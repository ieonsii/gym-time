require('dotenv').config();
const mongoose = require('mongoose');
const app = require('../src/app');
const { MongoMemoryServer } = require('mongodb-memory-server');
const supertest = require('supertest');

let mongod, server, request;

beforeAll(async () => {
  mongod = new MongoMemoryServer();
  const uri = await mongod.getUri();

  mongoose.Promise = global.Promise;
  await mongoose.connect(uri, { useNewUrlParser: true });

  server = app.listen(8080);
  request = supertest.agent(server);
});

afterAll(async () => {
  await server.close();
  await mongoose.disconnect();
  await mongod.stop();
});

test('Test root path', (done) => {
  return request.get('/').expect(200, done);
});
