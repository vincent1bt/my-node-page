const React = require('react');

const Category = ({id, name, colors}) => {
  const { first, second } = colors;
  const itemStyle = {
    background: `linear-gradient(120deg, ${first}, ${second})`,
  };

  return (
    <div className="container-content-item" style={itemStyle}>
      <div className="container-content-item-blur">
        <a className="container-content-item-link" href={`/categories/${id}`}>
          <h3>
            {name}
          </h3>
          <p className="container-content-item-categories-text">
          </p>
        </a>
      </div>
    </div>
  );
}

const Categories = ({categories}) => {
  const categoriesList = categories.map(category => <Category {...category} key={category.id} />);

  return (
    <main className="container">
      <section className="container-common_header container-categories_header">
        <h2 className="container-categories_header-name">
          Categorias
        </h2>
        <form action="/posts/buscar" method="get" className="container-form">
          <input type="search" placeholder="Busca algo que quieras aprender" name="term" autoComplete="off" className="container-form-search"/>
          <input type="submit" value="Buscar" className="container-form-button"/>
        </form>
      </section>
      <section className="container-content">
        {categoriesList}
      </section>
    </main>
  )
}

module.exports = Categories;
