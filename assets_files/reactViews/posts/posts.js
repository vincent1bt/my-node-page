const React = require('react');
const PostContainer = require('./postContainer');

const Pagination = ({page, pageNumber}) => {
  let linkClassName = "container-content-pagination-list-item-link";
  let postsLink = `/posts?page=${page}`;
  let postsLinkName = page;
  
  if (page == 0) {
    postsLink = '/posts';
    postsLinkName = 'Principal';
  }

  if (page == pageNumber) linkClassName = linkClassName + " container-content-pagination-list-item-active";

  return (
    <li className="container-content-pagination-list-item">
      <a className={linkClassName} href={postsLink}>
        {postsLinkName}
      </a>
    </li>
  );
}

const Posts = ({posts, count, pageNumber}) => {
  const postsList = posts.map(post => <PostContainer {...post} key={post.id} />);
  const paginationCount = [...Array(count + 1).keys()];
  const paginationList = paginationCount.map( page => <Pagination page={page} pageNumber={pageNumber} key={page}/>);

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
          <input type="search" placeholder="Busca algo" name="term" autoComplete="off" className="container-form-search"/>
          <input type="submit" value="Buscar" className="container-form-button"/>
        </form>
      </section>
      <section className="container-content">
        {postsList}
        <div className="container-content-pagination">
          <ul className="container-content-pagination-list">
            {paginationList}
          </ul>
        </div>
      </section>
    </main>
  )
}

module.exports = Posts;
