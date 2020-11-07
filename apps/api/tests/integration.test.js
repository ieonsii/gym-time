require('dotenv').config();
const mongoose = require('mongoose');
const app = require('../src/app');
const { MongoMemoryServer } = require('mongodb-memory-server');
const supertest = require('supertest');
const faker = require('faker');
let mongod, server, request;

beforeAll(async () => {
  mongod = new MongoMemoryServer();
  const uri = await mongod.getUri();

  mongoose.Promise = global.Promise;
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

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

describe('CUSTOMER MODULE', () => {
  const fakeFullName = faker.name.firstName() + ' ' + faker.name.lastName();
  const fakeEmail = faker.internet.email();
  const fakePassword = faker.random.words(4);

  test('Create Customer', (done) => {
    return request
      .post('/customers')
      .send({
        name: fakeFullName,
        email: fakeEmail,
        password: fakePassword,
      })
      .then((res) => {
        const { success, payload } = res.body;

        expect(res.statusCode).toBe(200);
        expect(success).toBe(true);

        expect(payload.name).toBe(fakeFullName);
        expect(payload.email).toBe(fakeEmail);
        expect(payload.password).toBe(fakePassword);

        done();
      });
  });
});
