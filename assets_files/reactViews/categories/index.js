const React = require('react');
const Header = require('./../header');
const Footer = require('./../footer');
const Categories = require('./categories');

const Index = ({ categories, isAdmin }) => {
  return (
    <React.Fragment>
      <Header isAdmin={isAdmin} />
      <Categories categories={categories} />
      <Footer isAdmin={isAdmin} />
    </React.Fragment>
  );
}

module.exports = Index;
