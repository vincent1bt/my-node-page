const React = require('react');
const Header = require('./../header');
const Footer = require('./../footer');
const Meta = require('./../meta');
const Error = require('./../error');

const New = ({ errorObject }) => {
  const isAdmin = true;
  
  return (
    <html lang="es">
      <head>
        <Meta />
        <link rel="stylesheet" type="text/css" href="/public/styles/new.css"/>
        <script src="/public/js/categoryEdit.js"></script>
      </head>
      <body>
        <Header isAdmin={isAdmin} />

        <main className="container">
          <section className="container-headertitle">
          </section>
          <section className="container-content">
            <h3>Create category</h3>

            {errorObject &&
              <Error {...errorObject} />
            }

            <form className="container-content-form" action="/categories" method="POST">
              <fieldset>
                <legend>Name</legend>
                <input className="container-content-form-input"  type="text" name="name" />
              </fieldset>

              <fieldset >
                <legend>Description</legend>
                <textarea name="description" className="container-content-form-description">
                </textarea>
              </fieldset>

              <fieldset className="container-content-form-colors">
                <legend>Colores</legend>
                <input type="text" name="colors[first]" autocomplete="none" className="firstColor"/>
                <input type="text" name="colors[second]" autocomplete="none" className="secondColor"/>
                <input type="submit" value="Checar" className="check"/>
             </fieldset>

             <input className="container-content-form-button" type="submit" value="Create Category"/>
            </form>
          </section>
        </main>
        <Footer isAdmin={isAdmin} />
      </body>
    </html>
  );
}

module.exports = New;
