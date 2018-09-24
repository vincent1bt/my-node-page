import test from 'ava';
import request from 'supertest';
import knex from './../db/databaseConfig';
import app from './../app/app';

test.before( async t => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  await knex.seed.run();
});

test.after( t => {
  knex.migrate.rollback();
});

test('login user', async t => {
  const userParams = {
    "email": "mario@hotmail.com",
    "password": "password",
  };

  const response = await request(app)
    .post('/login')
    .send(userParams);

  t.is(response.status, 200);
});

test('login user with bad params', async t => {
  const userParams = {
    "email": "mario@hotmail.com",
  };

  const response = await request(app)
    .post('/login')
    .send(userParams);

  t.is(response.status, 400);
});

test('login user with different password', async t => {
  const userParams = {
    "username": "monica",
    "email": "monica@hotmail.com",
    "password": "password456",
    "passwordConfirmation": "password"
  };

  const response = await request(app)
    .post('/login')
    .send(userParams);

  t.is(response.status, 401);
});
