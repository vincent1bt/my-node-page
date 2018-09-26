const metaTemplate = require("./../metaTemplate");

function indexTemplate(body) {
  return `
    <html lang="es">
      <script>
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        ga('create', 'UA-69916304-2', 'auto');
        ga('send', 'pageview');
      </script>
      <script async src='https://www.google-analytics.com/analytics.js'></script>
      <head>
        ${metaTemplate}
        <link rel="canonical" href="https://vincentblog.xyz/posts" />
        <link rel="stylesheet" type="text/css" href="/public/styles/application.css" />
      </head>
      <body>
        ${body}
      </body>
    </html>
  `
}

module.exports = indexTemplate;
