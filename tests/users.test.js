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

test('signup user', async t => {
  const userParams = {
    "username": "monica",
    "email": "monica@hotmail.com",
    "password": "password",
    "passwordConfirmation": "password"
  };

  const response = await request(app)
    .post('/signup')
    .send(userParams);
  t.is(response.status, 201);
});

test('signup user with bad params', async t => {
  const userParams = {
    "username": "monica",
  };

  const response = await request(app)
    .post('/signup')
    .send(userParams);

  t.is(response.status, 400);
});

test('signup user with different password', async t => {
  const userParams = {
    "username": "monica",
    "email": "monica@hotmail.com",
    "password": "password456",
    "passwordConfirmation": "password"
  };

  const response = await request(app)
    .post('/signup')
    .send(userParams);

  t.is(response.status, 401);
});
