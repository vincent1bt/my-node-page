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

test('get categories', async t => {
  const response = await request(app)
    .get('/categories')

  t.is(response.status, 200);

});
