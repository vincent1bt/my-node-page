const React = require('react');
const Header = require('./../header');
const Footer = require('./../footer');
const PostContainer = require('./postContainer');

const DefaultResponse = () => (
  <p className="container-content-default_response">No hay resultados sobre tu busqueda</p>
)

const Search = ({ posts, term, isAdmin }) => {
  const postsList = posts.map(post => <PostContainer {...post} key={post.id} />);

  return (
    <React.Fragment>
      <Header isAdmin={isAdmin} />
      <main className="container">
        <section className="container-common_header container-posts_header">
          <h3 className="container-posts_header-name">
            Busqueda sobre: {term}
          </h3>
          <form action="/posts/buscar" method="get" className="container-form">
            <input type="search" placeholder="Busca algo que quieras aprender" name="term" autoComplete="off" className="container-form-search"/>
            <input type="submit" value="Buscar" className="container-form-button"/>
          </form>
        </section>
        <section className="container-content">
          {postsList.length > 0 ?  postsList : <DefaultResponse/>}
        </section>
        </main>
        <Footer isAdmin={isAdmin} />
    </React.Fragment>
  );
}

module.exports = Search;
