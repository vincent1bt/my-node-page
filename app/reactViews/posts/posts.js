const React = require('react');
const PostContainer = require('./postContainer');

const Pagination = ({page}) => (
  <li className="container-content-pagination-list-item">
    <a className="container-content-pagination-list-item-link" href={`/posts?page=${page + 1}`}>
      {page + 1}
    </a>
  </li>
);

const Posts = ({posts, count}) => {
  const postsList = posts.map(post => <PostContainer {...post} key={post.id} />);
  const paginationCount = [...Array(count).keys()];
  const paginationList = paginationCount.map( page => <Pagination page={page} key={page}/>);

  return (
    <main className="container">
      <section className="container-common_header container-posts_header">
        <h1 className="container-posts_header-name">
          Vicente Rodríguez blog
        </h1>
        <p className="container-posts_header-subname">
          Programación, desarrollo web y más.
        </p>
        <form action="/posts/buscar" method="get" className="container-form">
          <input type="search" placeholder="Busca algo que quieras aprender" name="term" autoComplete="off" className="container-form-search"/>
          <input type="submit" value="Buscar" className="container-form-button"/>
        </form>
      </section>
      <section className="container-content">
        {postsList}
        <div className="container-content-pagination">
          <ul className="container-content-pagination-list">
            <li className="container-content-pagination-list-item" key={0}>
              <a className="container-content-pagination-list-item-link" href="/posts">
                Principal
              </a>
            </li>
            {paginationList}
          </ul>
        </div>
      </section>
    </main>
  )
}

module.exports = Posts;
