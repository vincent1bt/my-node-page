const metaTemplate = require("./metaTemplate");

function aboutTemplate(body) {
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
        <link rel="stylesheet" type="text/css" href="/public/blog/styles/application.css" />
        <link rel="stylesheet" type="text/css" href="/public/blog/styles/about.css" />
      </head>
      <body>
        ${body}
      </body>
    </html>
  `
}

module.exports = aboutTemplate;
