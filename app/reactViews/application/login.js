const React = require('react');
const Header = require('./../header');
const Footer = require('./../footer');
const Meta = require('./../meta');
const Error = require('./../error');

const Login = ({ auth, errorObject }) => {
  return (
    <html lang="es">
      <head>
        <Meta />
        <link rel="stylesheet" type="text/css" href="/public/styles/new.css"/>
      </head>
      <body>
        <Header {...{auth}} />
        <main className="container">
          <section className="container-content">
            <h3>Login</h3>
            {errorObject &&
              <Error {...errorObject} />
            }

            <form className="container-content-form" action="/login" method="POST">
              <fieldset>
                <legend>Username</legend>
                <input className="container-content-form-input"  type="text" name="username" />
              </fieldset>

              <fieldset>
                <legend>Password</legend>
                <input className="container-content-form-input"  type="password" name="password" />
              </fieldset>

             <input className="container-content-form-button" type="submit" value="Login"/>
            </form>
          </section>
        </main>
        <Footer {...{auth}} />
      </body>
    </html>
  );
}

module.exports = Login;
