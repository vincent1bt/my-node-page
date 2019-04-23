const React = require('react');
const PostContainer = require('./../posts/postContainer');

const CategoriesPosts = ({posts, category, lang}) => {
  const postsList = posts.map(post => <PostContainer {...post} key={post.id} />);
  const { first, second } = category.colors;
  const itemStyle = {
    background: `linear-gradient(120deg, ${first}, ${second})`,
  };

  let postsButton;

  if (lang == 'es') {
    postsButton = <a className="container-category_header-link" href={`/categories/${category.id}`}>
      You can see the {category.name} posts in English here.
    </a>;
  } else {
    postsButton = <a className="container-category_header-link" href={`/categories/${category.id}?lang=es`}>
      Aqui puedes ver los posts de {category.name} en español.
    </a>;
  }

  return (
    <main className="container">
      <section className="container-category_header" style={itemStyle}>
        <div className="container-category_header-blur">
          <h1 className="container-category_header-title">Posts about {category.name}</h1>
          {postsButton}
        </div>
      </section>
      <section className="container-content">
        {postsList}
      </section>
    </main>
  )
}

module.exports = CategoriesPosts;
