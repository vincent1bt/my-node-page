const React = require('react');
const { Component } = require('react');
const Header = require('./../header');
const Footer = require('./../footer');
const Meta = require('./../meta');
const Modal = require('./modal');
const Error = require('./../error');

const Post = ({title, id}) => (
  <div className="container-content-item">
    <a className="container-content-item-postlink" href={`/posts/${id}`}>
      <h3>
        {title}
      </h3>
    </a>
    <div className="container-content-item-options">
      <a className="container-content-item-options-update" href={`/posts/edit/${id}`}>Update</a>
      <form method="POST" action="/posts/?_method=DELETE">
        <input type="hidden" name="id" value={`${id}`}/>
        <button className="container-content-item-options-delete" type="submit" onClick="return confirm('Do you want to delete?');">Delete</button>
      </form>
    </div>
  </div>
)

const Category = ({name, id}) => (
  <div className="container-content-item">
    <a className="container-content-item-postlink" href={`/categories/${id}`}>
      <h3>
        {name}
      </h3>
    </a>
    <div className="container-content-item-options">
      <a className="container-content-item-options-update" href={`/categories/edit/${id}`}>Update</a>
      <form method="POST" action="/categories/?_method=DELETE">
        <input type="hidden" name="id" value={`${id}`}/>
        <button className="container-content-item-options-delete" type="submit" onClick="return confirm('Do you want to delete?');">Delete</button>
      </form>
    </div>
  </div>
)

class Admin extends Component {
  constructor(props) {
    super(props);
    this.categoriesList = this.props.categories.map(category => <Category {...category} key={category.id} />);
    this.postsList = this.props.posts.map(post => <Post {...post} key={post.id} />);

    this.state = {
      showModal: false
    }

    this.openModal = this.openModal.bind(this);
    this.isAdmin = true;
  }

  openModal() {
    this.setState(state => ({
      showModal: !state.showModal
    }));
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <html lang="es">
        <head>
          <Meta />
          <link rel="stylesheet" type="text/css" href="/public/styles/admin.css" />
        </head>
        <body>
          <Header isAdmin={this.isAdmin} />

          {this.state.showModal &&
            <Modal/>
          }
          
          <main className="container">
            <section className="container-common_header">
              <h2 className="container-common_header-name">
                Admin
              </h2>
              <a href="/posts/new" className="container-common_header-link"> Create post</a>
              <a href="/categories/new" className="container-common_header-link"> Create category</a>
              <a href="/logout" className="container-common_header-link container-common_header-link_logout"> Logout</a>
            </section>
            <section className="container-content">
              {this.props.errorObject &&
                <Error {...this.props.errorObject} />
              }

              <h4 className="container-content-names">
                Posts
              </h4>
              {this.postsList}

              <h4 className="container-content-names">
                Categories
              </h4>
              {this.categoriesList}
            </section>
          </main>
          <Footer isAdmin={this.isAdmin} />
        </body>
      </html>
    )
  }
}

// const Admin = ({ posts, categories, auth }) => {
//   const categoriesList = categories.map(category => <Category {...category} key={category.id} />);
//   const postsList = posts.map(post => <Post {...post} key={post.id} />);
//
//   return (
//     <html lang="es">
//       <head>
//         <Meta />
//         <link rel="stylesheet" type="text/css" href="/public/styles/admin.css" />
//       </head>
//       <body>
//         <Header {...{auth}} />
//         <main className="container">
//           <section className="container-headertitle">
//             <h2 className="container-headertitle-name">
//               Admin
//             </h2>
//             <a href="/posts/new" className="container-headertitle-link"> Create post</a>
//             <a href="/categories/new" className="container-headertitle-link"> Create Category</a>
//           </section>
//
//           <section className="container-content">
//             <h4 className="container-content-names">
//               Posts
//             </h4>
//             {postsList}
//
//             <h4 className="container-content-names">
//               Categories
//             </h4>
//             {categoriesList}
//           </section>
//         </main>
//         <p>Pa saber que estoy en el componente</p>
//         <Footer {...{auth}} />
//       </body>
//     </html>
//   );
// }

module.exports = Admin;
