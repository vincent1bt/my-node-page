const React = require('react');
const Header = require('./../header');
const Footer = require('./../footer');
const Meta = require('./../meta');
const Error = require('./../error');

const Edit = ({ category, errorObject }) => {
  const { name, colors, id, description } = category;
  const { first, second } = colors;
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
            <h3>Edit category</h3>

            {errorObject &&
              <Error {...errorObject} />
            }

            <form className="container-content-form" action="/categories?_method=PUT" method="POST">

              <input type="hidden" name="id" value={id}/>
              <fieldset>
                <legend>Name</legend>
                <input className="container-content-form-input"  type="text" name="name" value={name} />
              </fieldset>

              <fieldset >
                <legend>Description</legend>
                <textarea name="description" className="container-content-form-description">
                  {description}
                </textarea>
              </fieldset>

              <fieldset className="container-content-form-colors">
                <legend>Colores</legend>
                <input type="text" name="colors[first]" autocomplete="none" className="firstColor" value={first} />
                <input type="text" name="colors[second]" autocomplete="none" className="secondColor" value={second} />
                <input type="submit" value="Checar" className="check"/>
             </fieldset>

             <input className="container-content-form-button" type="submit" value="Edit Category"/>
            </form>
          </section>
        </main>

        <Footer isAdmin={isAdmin} />
      </body>
    </html>
  );
}

module.exports = Edit;
