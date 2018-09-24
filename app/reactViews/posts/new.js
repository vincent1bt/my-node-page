const React = require('react');
const Header = require('./../header');
const Footer = require('./../footer');
const Meta = require('./../meta');
const Error = require('./../error');

const Category = ({id, name}) => (
  <option value={id}>{name}</option>
)

const New = ({categories, errorObject}) => {
  const categoryList = categories.map(category => <Category {...category} key={category.id} />);
  const isAdmin = true;

  return (
    <html lang="es">
      <head>
        <Meta />
        <link rel="stylesheet" type="text/css" href="/public/styles/new.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css"/>
        <script src="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js"></script>
        <script src="/public/js/postEdit.js"></script>
      </head>
      <body>
        <Header isAdmin={isAdmin} />

        <main className="container">
          <section className="container-headertitle">
          </section>
          <section className="container-content">
            <h3>Create post</h3>

            {errorObject &&
              <Error {...errorObject} />
            }

            <form className="container-content-form" action="/posts" method="POST">
              <fieldset>
                <legend>Title</legend>
                <input className="container-content-form-input"  type="text" name="post[title]" />
              </fieldset>

              <fieldset className="container-content-form-colors">
                <legend>Colors</legend>
                <input type="text" name="colors[first]" autocomplete="none" className="firstColor"/>
                <input type="text" name="colors[second]" autocomplete="none" className="secondColor"/>
                <input type="submit" value="Checar" className="check"/>
             </fieldset>

             <fieldset >
               <legend>Description</legend>
               <textarea name="post[description]" className="container-content-form-description">
               </textarea>
             </fieldset>

            <fieldset>
              <legend>Body</legend>
              <textarea name="post[body]" id="bodyArea">
              </textarea>
            </fieldset>

            <fieldset>
              <legend>Date</legend>
              <input className="container-content-form-input" placeholder="month/day/year" type="text" name="date" />
            </fieldset>

             <fieldset>
               <legend>Image</legend>
               <input type="text" name="post[image]" className="container-content-form-input"/>
             </fieldset>

            <fieldset>
                <legend>Categories</legend>
                <select className="container-content-form-select" name="categories" multiple>
                  {categoryList}
                </select>
             </fieldset>

             <input className="container-content-form-button" type="submit" value="Crear Post"/>
            </form>
          </section>
        </main>

        <Footer isAdmin={isAdmin} />
      </body>
    </html>
  );
}

module.exports = New;
