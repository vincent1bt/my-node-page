const React = require('react');

const Header = ({ isAdmin }) => (
  <header className="header">
    <div className="header-logo">
        <h2 className="header-logo-title">
          Vicente Rodriguez
        </h2>
    </div>
    <nav className="header-nav">
      <ul className="header-nav-list">
        <li className="header-nav-list-item">
          <a href="/posts" className="header-nav-list-item-link">
            <p>
              Posts
            </p>
          </a>
        </li>
        <li className="header-nav-list-item">
          <a href="/categories" className="header-nav-list-item-link">
            <p>
              Categorías
            </p>
          </a>
        </li>
        <li className="header-nav-list-item">
          <a href="/sobre" className="header-nav-list-item-link">
            <p>
              About Me
            </p>
          </a>
        </li>
        {isAdmin &&
          <li className="header-nav-list-item">
            <a href="/admin" className="header-nav-list-item-link">
              <p>
                Admin
              </p>
            </a>
          </li>
        }
      </ul>
    </nav>
  </header>
);

module.exports = Header;
