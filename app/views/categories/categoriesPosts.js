'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},React=require('react'),PostContainer=require('./../posts/postContainer'),CategoriesPosts=function(a){var b=a.posts,c=a.category,d=a.lang,e=b.map(function(a){return React.createElement(PostContainer,_extends({},a,{key:a.id}))}),f=c.colors,g=f.first,h=f.second,i=void 0;return i='es'==d?React.createElement('a',{className:'container-category_header-link',href:'/categories/'+c.id},'You can see the ',c.name,' posts in English here.'):React.createElement('a',{className:'container-category_header-link',href:'/categories/'+c.id+'?lang=es'},'Aqui puedes ver los posts de ',c.name,' en espa\xF1ol.'),React.createElement('main',{className:'container'},React.createElement('section',{className:'container-category_header',style:{background:'linear-gradient(120deg, '+g+', '+h+')'}},React.createElement('div',{className:'container-category_header-blur'},React.createElement('h1',{className:'container-category_header-title'},'Posts about ',c.name),i)),React.createElement('section',{className:'container-content'},e))};module.exports=CategoriesPosts;