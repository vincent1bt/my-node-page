import test from 'ava';
import request from 'supertest';
import { JSDOM } from 'jsdom';
import knex from './../db/databaseConfig';
import app from './../app/app';

test.before( async t => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  await knex.seed.run();

  t.token = "TOKEN";
});

test.after( t => {
  knex.migrate.rollback();
});

test('get posts', async t => {
  const response = await request(app)
    .get('/posts')

  const document = new JSDOM(response.text);
  const [firstTitle, secondTitle] = document.window.document.querySelectorAll(".title");
  const [firstBody, secondBody] = document.window.document.querySelectorAll(".body");

  t.is(response.status, 200);
  t.is(firstTitle.textContent, 'Post de prueba');
  t.is(firstBody.textContent, 'Cuerpo del post de prueba');
  t.is(secondTitle.textContent, 'Segundo Post de prueba');
  t.is(secondBody.textContent, 'Cuerpo del Segundo post de prueba');
});


test('show post', async t => {
  const response = await request(app)
    .get('/posts/1');

  t.is(response.status, 200);
  const document = new JSDOM(response.text);
  const title = document.window.document.querySelector(".title");
  t.is(title.textContent, "Post de prueba");
});

test('create post with correct params', async t => {
  const colorsJson = { first: "#324e80", second: "#994c15"};
  const postsParams = {
    title: "Titulo del post de test",
    body: "Cuerpo del post de test",
    image: "https://res.cloudinary.com/vincent1bt/image/upload/v1530231133/lamp-3489395_1280_kpa1u4.jpg",
    colors: JSON.stringify(colorsJson),
    categories: [1, 2]
  };

  const response = await request(app)
    .post('/posts')
    .set('Authorization', t.token)
    .send(postsParams);

  t.is(response.status, 201);
});

test('create post with incorrect params', async t => {
  const postsParams = { title: "Titulo" };
  const response = await request(app)
    .post('/posts')
    .set('Authorization', t.token)
    .send(postsParams);

  t.is(response.status, 400);

  const document = new JSDOM(response.text);
  const error = document.window.document.querySelector(".error");

  t.is(error.textContent, "Error al crear el post");
})

test('create post without authentication', async t => {
  const postsParams = { title: "Titulo" };
  const response = await request(app)
    .post('/posts')
    .send(postsParams);

  t.is(response.status, 401);
});

test('update post with correct params', async t => {
  const postsUpdateParams = { title: "Nuevo titulo del post" };

  const response = await request(app)
    .update('/posts/1')
    .set('Authorization', t.token)
    .send(postsUpdateParams);

  t.is(response.status, 200);

  const document = new JSDOM(response.text);
  const title = document.window.document.querySelector(".title");
  t.is(title.textContent, postsUpdateParams.title);
});

test('update post with incorrect params', async t => {
  const postsUpdateParams = {};
  const response = await request(app)
    .update('/posts/1')
    .set('Authorization', t.token)
    .send(postsUpdateParams);

  t.is(response.status, 400);
});

test('update post without authentication', async t => {
  const postsUpdateParams = {};
  const response = await request(app)
    .update('/posts/1')
    .send(postsUpdateParams);

  t.is(response.status, 401);
});
