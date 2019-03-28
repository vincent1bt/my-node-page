const colorsJson = { first: "#324e80", second: "#994c15"};

exports.seed = (knex, Promise) => {
  return Promise.join(
    knex('post_categories').del(),
    knex('posts').del(),
    knex('categories').del()
  )
  .then(() => {
    return Promise.join(
      knex('posts').insert({
        title: "Post de prueba",
        body: "Cuerpo del post de prueba",
        image: "https://res.cloudinary.com/vincent1bt/image/upload/v1530231133/lamp-3489395_1280_kpa1u4.jpg",
        colors: JSON.stringify(colorsJson),
      }),
      knex('posts').insert({
        title: "Segundo Post de prueba",
        body: "Cuerpo del Segundo post de prueba",
        image: "https://res.cloudinary.com/vincent1bt/image/upload/v1530231133/lamp-3489395_1280_kpa1u4.jpg",
        colors: JSON.stringify(colorsJson),
      }),
      knex('categories').insert({
        name: "Javascript",
        body: "Lenguaje de programación web",
        colors: JSON.stringify(colorsJson),
      }),
      knex('categories').insert({
        name: "Ruby",
        body: "Lenguaje de programación multi usos",
        colors: JSON.stringify(colorsJson),
      }),
      knex('post_categories').insert({
        post_id: "2",
        category_id: "2",
      }),
      knex('post_categories').insert({
        post_id: "1",
        category_id: "1",
      })
    );
  })
  .catch((err) => { console.log(err); });
};
