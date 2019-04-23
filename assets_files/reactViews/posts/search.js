const React = require('react');
const Header = require('./../header');
const Footer = require('./../footer');
const PostContainer = require('./postContainer');

const DefaultResponse = () => (
  <p className="container-content-default_response">There are not posts</p>
)

const Search = ({ posts, term, isAdmin }) => {
  const postsList = posts.map(post => <PostContainer {...post} key={post.id} />);

  return (
    <React.Fragment>
      <Header isAdmin={isAdmin} />
      <main className="container">
        <section className="container-common_header container-posts_header">
          <h3 className="container-posts_header-name">
            Posts about: {term}
          </h3>
          <form action="/posts/search" method="get" className="container-form">
            <input type="search" placeholder="Deep learning" name="term" autoComplete="off" className="container-form-search"/>
            <input type="submit" value="search" className="container-form-button"/>
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
