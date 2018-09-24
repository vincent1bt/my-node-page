const colorsJson = { first: "#324e80", second: "#994c15"};

exports.seed = (knex, Promise) => {
  return knex('posts').del()
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
      })
    );
  })
  .catch((err) => { console.log(err); });
};
