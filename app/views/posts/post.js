'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},React=require('react'),ReactMarkdown=require('react-markdown'),Category=function(a){var b=a.name,c=a.id;return React.createElement('a',{className:'container-content-category-link',href:'/categories/'+c},React.createElement('p',null,b))},Post=function(a){var b=a.created_at,c=a.title,d=a.slug,e=a.body,f=a.colors,g=a.categories,h=g.map(function(a){return React.createElement(Category,_extends({},a,{key:a.id}))}),i=f.first,j=f.second;return React.createElement('main',{className:'container'},React.createElement('div',{id:'fb-root'}),React.createElement('section',{className:'container-post_header',style:{background:'linear-gradient(120deg, '+i+', '+j+')'}},React.createElement('div',{className:'container-post_header-blur'},React.createElement('p',{className:'container-post_header-date'},b.toLocaleDateString('en',{year:'numeric',month:'long',day:'2-digit'})),React.createElement('h1',{className:'container-post_header-title'},c))),React.createElement('section',{className:'container-content'},React.createElement(ReactMarkdown,{source:e}),React.createElement('h4',null,'Categor\xEDas'),React.createElement('div',{className:'container-content-category'},h),React.createElement('div',{width:'100%',className:'fb-comments',"data-href":'https://vincentblog.me/posts/'+d,"data-numposts":'5',"data-order-by":'reverse_time'})))};module.exports=Post;