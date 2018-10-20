"use strict";var React=require("react"),Footer=function(a){var b=a.isAdmin,c=b?"admin":"normal";return React.createElement("footer",{className:"footer"},React.createElement("nav",{className:"footer-nav"},React.createElement("ul",{className:"footer-nav-list"},React.createElement("li",{className:"footer-nav-list-item footer-nav-list-item-"+c},React.createElement("a",{href:"/posts",className:"footer-nav-list-item-link"},React.createElement("figure",{className:"footer-nav-list-item-link-icon"},React.createElement("img",{src:"/public/images/posts.png",alt:"",className:"footer-nav-list-item-link-icon-image"}),React.createElement("figcaption",{className:"footer-nav-list-item-link-icon-text"},"Posts")))),React.createElement("li",{className:"footer-nav-list-item footer-nav-list-item-"+c},React.createElement("a",{href:"/categories",className:"footer-nav-list-item-link"},React.createElement("figure",{className:"footer-nav-list-item-link-icon"},React.createElement("img",{src:"/public/images/categories.png",alt:"",className:"footer-nav-list-item-link-icon-image"}),React.createElement("figcaption",{className:"footer-nav-list-item-link-icon-text"},"Categorias")))),React.createElement("li",{className:"footer-nav-list-item footer-nav-list-item-"+c},React.createElement("a",{href:"/sobre",className:"footer-nav-list-item-link"},React.createElement("figure",{className:"footer-nav-list-item-link-icon"},React.createElement("img",{src:"/public/images/about.png",alt:"",className:"footer-nav-list-item-link-icon-image"}),React.createElement("figcaption",{className:"footer-nav-list-item-link-icon-text"},"Me")))),b&&React.createElement("li",{className:"footer-nav-list-item footer-nav-list-item-admin"},React.createElement("a",{href:"/admin",className:"footer-nav-list-item-link"},React.createElement("figure",{className:"footer-nav-list-item-link-icon"},React.createElement("img",{src:"/public/images/admin.png",alt:"",className:"footer-nav-list-item-link-icon-image"}),React.createElement("figcaption",{className:"footer-nav-list-item-link-icon-text"},"Admin")))))))};module.exports=Footer;