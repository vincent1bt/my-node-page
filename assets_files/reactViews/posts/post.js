const React = require('react');
const ReactMarkdown = require('react-markdown')

const Category = ({name, id}) => (
  <a className="container-content-category-link" href={`/categories/${id}`}>
    <p>
      {name}
    </p>
  </a>
);

const Post = ({created_at, title, slug, body, colors, categories}) => {
  const categoriesList = categories.map(category => <Category {...category} key={category.id} />);
  const { first, second } = colors;
  const itemStyle = {
    background: `linear-gradient(120deg, ${first}, ${second})`,
  };

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };

  return (
    <main className="container">
      <div id="fb-root"></div>
      <section className="container-post_header" style={itemStyle}>
        <div className="container-post_header-blur">
          <p className="container-post_header-date">
            {created_at.toLocaleDateString("en", dateOptions)}
          </p>
          <h1 className="container-post_header-title">
            {title}
          </h1>
        </div>
      </section>

      <section className="container-content" >
        <ReactMarkdown source={body} />

        <h4>Categories</h4>
        <div className="container-content-category">
          {categoriesList}
        </div>

        <div width="100%" className="fb-comments" data-href={`https://vincentblog.me/posts/${slug}`} data-numposts="5" data-order-by="reverse_time"></div>
      </section>
    </main>
  )
}

module.exports = Post;
