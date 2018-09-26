const React = require('react');
const ReactGA = require('react-ga');
const Safe = require("react-safe");
const Header = require('./../header');
const Footer = require('./../footer');
const Post = require('./post');
const Meta = require('./../meta');

const Show = ({ post, categories, isAdmin }) => {
  return (
    <html lang="es">
      <head>
        <Meta {...post} />
        <link rel="stylesheet" type="text/css" href="/public/styles/post.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>
      </head>
      <Safe.script async src="https://www.googletagmanager.com/gtag/js?id=UA-69916304-2"></Safe.script>
      <Safe.script>
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push('js', new Date());
        window.dataLayer.push('config', 'UA-69916304-2');
      </Safe.script>
      <body>
        <Header isAdmin={isAdmin} />
        <Post {...post} categories={categories} />
        <Footer isAdmin={isAdmin} />
        <Safe.script src="/public/js/show.js"></Safe.script>
      </body>
    </html>
  );
}

module.exports = Show;
