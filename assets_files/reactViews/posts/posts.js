const React = require('react');
const PostContainer = require('./postContainer');

const PaginationComponent = ({pagination, page, lang}) => {
  let linkClassName = "container-content-pagination-list-item-link";
  if (pagination == page) linkClassName = linkClassName + " container-content-pagination-list-item-active";

  let postsLink = "/posts";
  let postsLinkName = "Main Page";

  if (lang) postsLink = `posts?lang=${lang}`;

  if (pagination > 0) {
    postsLinkName = `${pagination}`;
    if (lang) {
      postsLink = `posts?lang=${lang}&page=${pagination}`;
    } else {
      postsLink = `posts?page=${pagination}`;
    }
  }

  return (
    <li className="container-content-pagination-list-item">
      <a className={linkClassName} href={postsLink}>
        {postsLinkName}
      </a>
    </li>
  );
}

const Posts = ({posts, count, page, lang}) => {
  if(!page) page = 0;
  const postsList = posts.map(post => <PostContainer {...post} key={post.id} />);
  const paginationCount = [...Array(count + 1).keys()];
  const paginationList = paginationCount.map( pagination => <PaginationComponent pagination={pagination} page={page} lang={lang} key={page}/>);

  let postsButton;

  if (lang == 'es') {
    postsButton = <a className="container-posts_header-link" href='/posts'>
      You can see my posts in English here
    </a>;

  } else {
    postsButton = <a className="container-posts_header-link" href='/posts?lang=es'>
      Aqui puedes ver mis posts en español
    </a>;
  }

  return (
    <main className="container">
      <section className="container-common_header container-posts_header">
        <h1 className="container-posts_header-name">
          Vicente Rodríguez Blog
        </h1>
        <p className="container-posts_header-subname">
          Deep <strong>Learning</strong>, Machine <strong>Learning</strong>, and <strong>Learning</strong>
        </p>
        <form action="/posts/search" method="get" className="container-form">
          <input type="search" placeholder="Neural networks" name="term" autoComplete="off" className="container-form-search"/>
          <input type="submit" value="Search" className="container-form-button"/>
        </form>
      {postsButton}

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
