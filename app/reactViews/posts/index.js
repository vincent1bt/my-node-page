const React = require('react');
const ReactGA = require('react-ga');
const Safe = require("react-safe");
const Header = require('./../header');
const Footer = require('./../footer');
const Posts = require('./posts');
const Meta = require('./../meta');

const Index = ({ posts, count, isAdmin }) => {
  return (
    <html lang="es">
      <head>
        <Meta />
        <link rel="canonical" href="https://vincentblog.xyz/posts" />
        <link rel="stylesheet" type="text/css" href="/public/styles/application.css" />
      </head>
      <Safe.script>
        `
        ReactGA.initialize('UA-69916304-2');
        ReactGA.pageview('/posts');
        `
      </Safe.script>
      <body>
        <Header isAdmin={isAdmin} />
        <Posts posts={posts} count={count} />
        <Footer isAdmin={isAdmin} />
      </body>
    </html>
  );
}

module.exports = Index;
