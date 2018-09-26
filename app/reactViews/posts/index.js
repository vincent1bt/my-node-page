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
      <Safe.script async src="https://www.googletagmanager.com/gtag/js?id=UA-69916304-2"></Safe.script>
      <Safe.script>
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push('js', new Date());
        window.dataLayer.push('config', 'UA-69916304-2');
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
