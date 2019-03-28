const React = require('react');

const PostContainer = ({ slug, title, created_at, colors, description }) => {
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
    <div className="container-content-item" style={itemStyle}>
      <div className="container-content-item-blur">
        <a className="container-content-item-link" href={`/posts/${slug}`}>
          <h3>
            {title}
          </h3>
          <p className="container-content-item-link-text">
            {description}
          </p>
          <p className="container-content-item-link-date">
           {created_at.toLocaleDateString('en', dateOptions)}
         </p>
        </a>
      </div>
    </div>
  );
}

module.exports = PostContainer;
