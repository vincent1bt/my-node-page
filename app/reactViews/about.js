const React = require('react');
const ReactGA = require('react-ga');
const Safe = require("react-safe");
const Header = require('./header');
const Footer = require('./footer');
const Meta = require('./meta');

const About = ({ isAdmin }) => {
  return (
    <html lang="es">
      <head>
        <Meta />
        <link rel="stylesheet" type="text/css" href="/public/styles/application.css" />
        <link rel="stylesheet" type="text/css" href="/public/styles/about.css" />
      </head>
      <Safe.script>
        `
        ReactGA.initialize('UA-69916304-2');
        ReactGA.pageview('/about');
        `
      </Safe.script>
      <body>
        <Header isAdmin={isAdmin} />
        <main className="container">
          <section className="container-common_header">
            <h3 className="container-title">Sobre mí</h3>
            <p className="container-text">
              Hola, mi nombre es <strong>vicente</strong> y esta es mi pagina web donde comparto tutoriales de lo que voy aprendiendo.
              Si necesitas algún tipo de ayuda puedes preguntar en mi <a href="https://twitter.com/vincent1bt">twitter</a> y con gusto te ayudare.
            </p>
            <p>Las tecnologias que domino son:</p>
            <ul className="container-list">
              <li>Ruby, Rails</li>
              <li>Swift</li>
              <li>Go</li>
              <li>Git</li>
              <li>Javascript (React, Redux, Jquery, Node, Webpack, Gulp)</li>
              <li>Html (Css, Sass, Responsive Design)</li>
              <li>PostgreSQL, Mysql, MongoDB</li>
              <li>Linux (Servidores, Nginx)</li>
              <li>SEO (Google Analytics)</li>
            </ul>
            <h3 className="container-subtitle">Mis proyectos</h3>

          </section>

          <section className="container-content" >
            <h4 className="container-content-h4">
              Wake me up app
            </h4>
            <div className="container-content-gif">
              <img src="https://res.cloudinary.com/vincent1bt/image/upload/v1467842308/wakemeup2_gvy7sl.gif" alt="wakemeup Demo"/>
            </div>
            <p>
              App de iOS hecha en <strong>swift</strong>. Te muestra las ultimas noticias y tus utimos tweets,
              puedes agregar recordatorios, ver el clima y buscar lugares cerca para desayunar.
            </p>
            <a href="https://github.com/vincent1bt/wake-me-up-2" target="_blank">Link al repositiorio de github.</a>


            <h4 className="container-content-h4">
              Twitter search
            </h4>
            <div className="container-content-gif">
              <img src="https://res.cloudinary.com/vincent1bt/image/upload/v1462492838/ezgif.com-video-to-gif_1_suk0z4.gif" alt="twitter Demo"/>
            </div>
            <p>
              App de iOS hecha en <strong>swift</strong>. Puedes buscar la ubicación de los tweets de un usuario en particular
              que tenga activada la opción.
            </p>
            <a href="https://github.com/vincent1bt/searchTwitter" target="_blank">Link al repositiorio de github.</a>


            <h4 className="container-content-h4">
              Calendar App
            </h4>
            <a href="https://arcane-castle-68306.herokuapp.com">Link a la página</a>
            <p>
              App hecha con <strong>go</strong> en el backend y con <strong>react y redux</strong> en el front-end. Puedes ver los eventos proximos en un calendario y agregar recordatorios.
            </p>
            <a href="https://github.com/vincent1bt/calendar-app" target="_blank">Link al repositiorio de github.</a>

            <h4 className="container-content-h4">
              Front-end Pages
            </h4>
            <div className="container-content-img">
              <img src="https://res.cloudinary.com/vincent1bt/image/upload/v1478293589/Screenshot_2016-11-04_15.02.41_fzktju.png" alt="page 1"/>
              <img src="https://res.cloudinary.com/vincent1bt/image/upload/v1478293590/Screenshot_2016-11-04_15.00.40_kvma47.png" alt="page 2"/>
            </div>
            <p>
              Paginas de Facebook y 3Djuegos con diseños mas amigables al usuario y con mejor-front end que las originales
            </p>
            <a href="https://github.com/vincent1bt/front-end-pages" target="_blank">Link al repositiorio de github.</a>

            <h4 className="container-content-h4">
              YourPosts, Api y App
            </h4>
            <p>
              Api en <strong>rails</strong> para recibir las peticiones, con mongo como base de datos y App para iOS hecha con <strong>swift</strong> para consumir el Api.
            </p>
            <p>
              Maneja sesión de usuarios por tokens, puedes crear posts, editarlos y eliminarlos.
            </p>
            <a href="https://github.com/vincent1bt/swift-app" target="_blank">App en swift</a>
            <a href="https://github.com/vincent1bt/rails-api" target="_blank">API en rails</a>

            <h4 className="container-content-h4">
              News App
            </h4>
              <div className="container-content-gif">
              <img src="http://res.cloudinary.com/vincent1bt/image/upload/v1462570588/newsApp_c6twv6.gif" alt="twitter Demo"/>
            </div>
            <p>
              App para iOS, hecha en <strong>swift</strong> donde puedes buscar noticias en twitter o the new york times.
            </p>
            <a href="https://github.com/vincent1bt/news-app" target="_blank">Link al repositiorio de github.</a>
          </section>
        </main>
        <Footer isAdmin={isAdmin} />
      </body>
    </html>
  );
}

module.exports = About;
