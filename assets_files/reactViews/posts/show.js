const React = require('react');
const Header = require('./../header');
const Footer = require('./../footer');
const Post = require('./post');

const Show = ({ post, categories, isAdmin }) => {
  return (
    <React.Fragment>
      <Header isAdmin={isAdmin} />
      <Post {...post} categories={categories} />
      <Footer isAdmin={isAdmin} />
    </React.Fragment>
  );
}

module.exports = Show;
