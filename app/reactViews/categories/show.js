const React = require('react');
const ReactGA = require('react-ga');
const Safe = require("react-safe");
const Header = require('./../header');
const Footer = require('./../footer');
const CategoriesPosts = require('./categoriesPosts');
const Meta = require('./../meta');

const Index = ({ posts, category, isAdmin }) => {
  return (
    <html lang="es">
      <head>
        <Meta />
        <link rel="stylesheet" type="text/css" href="/public/styles/application.css" />
        <link rel="stylesheet" type="text/css" href="/public/styles/category.css" />
      </head>
      <Safe.script>
        `
        ReactGA.initialize('UA-69916304-2');
        ReactGA.pageview('/posts${category.id}');
        `
      </Safe.script>
      <body>
        <Header isAdmin={isAdmin} />
        <CategoriesPosts posts={posts} category={category} />
        <Footer isAdmin={isAdmin} />
      </body>
    </html>
  );
}

module.exports = Index;
