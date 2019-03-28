const React = require('react');

const Footer = ({ isAdmin }) => {
  const footerClass = isAdmin ? "admin" : "normal";

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-nav-list">
          <li className={`footer-nav-list-item footer-nav-list-item-${footerClass}`}>
            <a href="/posts" className="footer-nav-list-item-link">
              <figure className="footer-nav-list-item-link-icon">
                <img src="/public/blog/images/posts.png" alt="posts" className="footer-nav-list-item-link-icon-image"/>
                <figcaption className="footer-nav-list-item-link-icon-text">
                  Posts
                </figcaption>
              </figure>
            </a>
          </li>
          <li className={`footer-nav-list-item footer-nav-list-item-${footerClass}`}>
            <a href="/categories" className="footer-nav-list-item-link">
              <figure className="footer-nav-list-item-link-icon">
                <img src="/public/blog/images/categories.png" alt="categories" className="footer-nav-list-item-link-icon-image"/>
                <figcaption className="footer-nav-list-item-link-icon-text">
                  Categorías
                </figcaption>
              </figure>
            </a>
          </li>
        <li className={`footer-nav-list-item footer-nav-list-item-${footerClass}`}>
            <a href="/sobre" className="footer-nav-list-item-link">
              <figure className="footer-nav-list-item-link-icon">
                <img src="/public/blog/images/about.png" alt="Me"className="footer-nav-list-item-link-icon-image"/>
                <figcaption className="footer-nav-list-item-link-icon-text">
                  About Me
                </figcaption>
              </figure>
            </a>
          </li>
          {isAdmin &&
            <li className="footer-nav-list-item footer-nav-list-item-admin">
              <a href="/admin" className="footer-nav-list-item-link">
                <figure className="footer-nav-list-item-link-icon">
                  <img src="/public/blog/images/admin.png" alt="admin" className="footer-nav-list-item-link-icon-image"/>
                  <figcaption className="footer-nav-list-item-link-icon-text">
                    Admin
                  </figcaption>
                </figure>
              </a>
            </li>
          }
        </ul>
      </nav>
    </footer>
  );
}

module.exports = Footer;
