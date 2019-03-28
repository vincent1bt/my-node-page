function showTemplate(body, meta) {
  return `
    <html lang="es">
      <script>
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        ga('create', 'UA-69916304-2', 'auto');
        ga('send', 'pageview');
      </script>
      <script async src='https://www.google-analytics.com/analytics.js'></script>
      <head>
        ${meta}
        <link rel="stylesheet" type="text/css" href="/public/blog/styles/post.css" />
        <script async src="/public/blog/js/show.js"></script>
        <script async src="/public/blog/js/highlight.pack.js"></script>
      </head>
      <body>
        ${body}
      </body>
    </html>
  `
}

module.exports = showTemplate;
