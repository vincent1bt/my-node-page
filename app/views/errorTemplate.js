function errorTemplate(text, error = null) {
  return `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="/public/blog/styles/style.css" />
        <link rel="stylesheet" type="text/css" href="/public/blog/styles/application.css" />
        <title>Error page</title>
      </head>
      <body>
        <header class="header">
          <div class="header-logo">
              <h2 class="header-logo-title">
                Vicente Rodriguez
              </h2>
          </div>
          <nav class="header-nav">
            <ul class="header-nav-list">
              <li class="header-nav-list-item">
                <a href="/posts" class="header-nav-list-item-link">
                  <p>
                    Posts
                  </p>
                </a>
              </li>
              <li class="header-nav-list-item">
                <a href="/categories" class="header-nav-list-item-link">
                  <p>
                    Categories
                  </p>
                </a>
              </li>
              <li class="header-nav-list-item">
                <a href="/sobre" class="header-nav-list-item-link">
                  <p>
                    About Me
                  </p>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main class="container">
          <section class="container-common_header container-posts_header">
            <h4 class="container-posts_header-name">
              ${text}
            </h4>
            <p class="container-posts_header-subname">
              Try again.
            </p>
            <a class="container-common_header-main_link" href="/">Main page</a>
          </section>
          <section class="container-content">
            ${error || ""}
          </section>
        </main>
      </body>
    </html>
  `
}

module.exports = errorTemplate;
