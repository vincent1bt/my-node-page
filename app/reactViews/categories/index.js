const React = require('react');
const ReactGA = require('react-ga');
const Safe = require("react-safe");
const Header = require('./../header');
const Footer = require('./../footer');
const Categories = require('./categories');
const Meta = require('./../meta');

const Index = ({ categories, isAdmin }) => {
  return (
    <html lang="es">
      <head>
        <Meta />
        <link rel="stylesheet" type="text/css" href="/public/styles/application.css" />
      </head>
      <Safe.script>
        `
        ReactGA.initialize('UA-69916304-2');
        ReactGA.pageview('/categories');
        `
      </Safe.script>
      <body>
        <Header isAdmin={isAdmin} />
        <Categories categories={categories} />
        <Footer isAdmin={isAdmin} />
      </body>
    </html>
  );
}

module.exports = Index;
