const React = require('react');
const Header = require('./../header');
const Footer = require('./../footer');
const Posts = require('./posts');

const Index = ({ posts, count, isAdmin }) => {
  return (
    <React.Fragment>
      <Header isAdmin={isAdmin} />
      <Posts posts={posts} count={count} />
      <Footer isAdmin={isAdmin} />
    </React.Fragment>
  );
}

module.exports = Index;
