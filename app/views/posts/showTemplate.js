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
        <link rel="stylesheet" type="text/css" href="/public/styles/post.css" />
        <link rel="canonical" href="https://vincentblog.xyz/posts" />
        <link rel="stylesheet" type="text/css" href="/public/styles/application.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>
      </head>
      <body>
        ${body}
        <script src="/public/js/show.js"></script>
      </body>
    </html>
  `
}

module.exports = showTemplate;
