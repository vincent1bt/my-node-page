'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},React=require('react'),PostContainer=require('./../posts/postContainer'),CategoriesPosts=function(a){var b=a.posts,c=a.category,d=b.map(function(a){return React.createElement(PostContainer,_extends({},a,{key:a.id}))}),e=c.colors,f=e.first,g=e.second;return React.createElement('main',{className:'container'},React.createElement('section',{className:'container-category_header',style:{background:'linear-gradient(120deg, '+f+', '+g+')'}},React.createElement('div',{className:'container-category_header-blur'},React.createElement('h1',{className:'container-category_header-title'},'Posts sobre ',c.name))),React.createElement('section',{className:'container-content'},d))};module.exports=CategoriesPosts;