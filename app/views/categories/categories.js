"use strict";var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},React=require("react"),Category=function(a){var b=a.id,c=a.name,d=a.colors,e=d.first,f=d.second;return React.createElement("div",{className:"container-content-item",style:{background:"linear-gradient(120deg, "+e+", "+f+")"}},React.createElement("div",{className:"container-content-item-blur"},React.createElement("a",{className:"container-content-item-link",href:"/categories/"+b},React.createElement("h3",null,c),React.createElement("p",{className:"container-content-item-categories-text"}))))},Categories=function(a){var b=a.categories,c=b.map(function(a){return React.createElement(Category,_extends({},a,{key:a.id}))});return React.createElement("main",{className:"container"},React.createElement("section",{className:"container-common_header container-categories_header"},React.createElement("h2",{className:"container-categories_header-name"},"Categorias"),React.createElement("form",{action:"/posts/buscar",method:"get",className:"container-form"},React.createElement("input",{type:"search",placeholder:"Busca algo que quieras aprender",name:"term",autoComplete:"off",className:"container-form-search"}),React.createElement("input",{type:"submit",value:"Buscar",className:"container-form-button"}))),React.createElement("section",{className:"container-content"},c))};module.exports=Categories;