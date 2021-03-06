const React = require('react');
const Header = require('./../header');
const Footer = require('./../footer');
const CategoriesPosts = require('./categoriesPosts');

const Show = ({ posts, category, lang, isAdmin }) => {
  return (
    <React.Fragment>
      <Header isAdmin={isAdmin} />
      <CategoriesPosts posts={posts} category={category} lang={lang} />
      <Footer isAdmin={isAdmin} />
    </React.Fragment>
  );
}

module.exports = Show;
