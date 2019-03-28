'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var React=require('react'),_require=require('react'),Component=_require.Component,Header=require('./../header'),Footer=require('./../footer'),Meta=require('./../meta'),Modal=require('./modal'),Error=require('./../error'),Post=function(a){var b=a.title,c=a.id;return React.createElement('div',{className:'container-content-item'},React.createElement('a',{className:'container-content-item-postlink',href:'/posts/'+c},React.createElement('h3',null,b)),React.createElement('div',{className:'container-content-item-options'},React.createElement('a',{className:'container-content-item-options-update',href:'/posts/edit/'+c},'Update'),React.createElement('form',{method:'POST',action:'/posts/?_method=DELETE'},React.createElement('input',{type:'hidden',name:'id',value:''+c}),React.createElement('button',{className:'container-content-item-options-delete',type:'submit',onClick:'return confirm(\'Do you want to delete?\');'},'Delete'))))},Category=function(a){var b=a.name,c=a.id;return React.createElement('div',{className:'container-content-item'},React.createElement('a',{className:'container-content-item-postlink',href:'/categories/'+c},React.createElement('h3',null,b)),React.createElement('div',{className:'container-content-item-options'},React.createElement('a',{className:'container-content-item-options-update',href:'/categories/edit/'+c},'Update'),React.createElement('form',{method:'POST',action:'/categories/?_method=DELETE'},React.createElement('input',{type:'hidden',name:'id',value:''+c}),React.createElement('button',{className:'container-content-item-options-delete',type:'submit',onClick:'return confirm(\'Do you want to delete?\');'},'Delete'))))},Admin=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.categoriesList=c.props.categories.map(function(a){return React.createElement(Category,_extends({},a,{key:a.id}))}),c.postsList=c.props.posts.map(function(a){return React.createElement(Post,_extends({},a,{key:a.id}))}),c.state={showModal:!1},c.openModal=c.openModal.bind(c),c.isAdmin=!0,c}return _inherits(b,a),_createClass(b,[{key:'openModal',value:function openModal(){this.setState(function(a){return{showModal:!a.showModal}})}},{key:'closeModal',value:function closeModal(){this.setState({showModal:!1})}},{key:'render',value:function render(){return React.createElement('html',{lang:'es'},React.createElement('head',null,React.createElement(Meta,null),React.createElement('link',{rel:'stylesheet',type:'text/css',href:'/public/blog/styles/admin.css'})),React.createElement('body',null,React.createElement(Header,{isAdmin:this.isAdmin}),this.state.showModal&&React.createElement(Modal,null),React.createElement('main',{className:'container'},React.createElement('section',{className:'container-common_header'},React.createElement('h2',{className:'container-common_header-name'},'Admin'),React.createElement('a',{href:'/posts/new',className:'container-common_header-link'},' Create post'),React.createElement('a',{href:'/categories/new',className:'container-common_header-link'},' Create category'),React.createElement('a',{href:'/logout',className:'container-common_header-link container-common_header-link_logout'},' Logout')),React.createElement('section',{className:'container-content'},this.props.errorObject&&React.createElement(Error,this.props.errorObject),React.createElement('h4',{className:'container-content-names'},'Posts'),this.postsList,React.createElement('h4',{className:'container-content-names'},'Categories'),this.categoriesList)),React.createElement(Footer,{isAdmin:this.isAdmin})))}}]),b}(Component);// const Admin = ({ posts, categories, auth }) => {
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
module.exports=Admin;