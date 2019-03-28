const React = require('react');
const PostContainer = require('./../posts/postContainer');

const CategoriesPosts = ({posts, category}) => {
  const postsList = posts.map(post => <PostContainer {...post} key={post.id} />);
  const { first, second } = category.colors;
  const itemStyle = {
    background: `linear-gradient(120deg, ${first}, ${second})`,
  };

  return (
    <main className="container">
      <section className="container-category_header" style={itemStyle}>
        <div className="container-category_header-blur">
          <h1 className="container-category_header-title">Posts sobre {category.name}</h1>
        </div>
      </section>
      <section className="container-content">
        {postsList}
      </section>
    </main>
  )
}

module.exports = CategoriesPosts;
