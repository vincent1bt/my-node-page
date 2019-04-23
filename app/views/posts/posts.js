'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var React=require('react'),PostContainer=require('./postContainer'),PaginationComponent=function(a){var b=a.pagination,c=a.page,d=a.lang,e='container-content-pagination-list-item-link';b==c&&(e+=' container-content-pagination-list-item-active');var f='/posts',g='Main Page';return d&&(f='posts?lang='+d),0<b&&(g=''+b,f=d?'posts?lang='+d+'&page='+b:'posts?page='+b),React.createElement('li',{className:'container-content-pagination-list-item'},React.createElement('a',{className:e,href:f},g))},Posts=function(a){var b=a.posts,c=a.count,d=a.page,e=a.lang;d||(d=0);var f,g=b.map(function(a){return React.createElement(PostContainer,_extends({},a,{key:a.id}))}),h=[].concat(_toConsumableArray(Array(c+1).keys())),i=h.map(function(a){return React.createElement(PaginationComponent,{pagination:a,page:d,lang:e,key:d})});return f='es'==e?React.createElement('a',{className:'container-posts_header-link',href:'/posts'},'You can see my posts in English here'):React.createElement('a',{className:'container-posts_header-link',href:'/posts?lang=es'},'Aqui puedes ver mis posts en espa\xF1ol'),React.createElement('main',{className:'container'},React.createElement('section',{className:'container-common_header container-posts_header'},React.createElement('h1',{className:'container-posts_header-name'},'Vicente Rodr\xEDguez Blog'),React.createElement('p',{className:'container-posts_header-subname'},'Deep ',React.createElement('strong',null,'Learning'),', Machine ',React.createElement('strong',null,'Learning'),', and ',React.createElement('strong',null,'Learning')),React.createElement('form',{action:'/posts/search',method:'get',className:'container-form'},React.createElement('input',{type:'search',placeholder:'Neural networks',name:'term',autoComplete:'off',className:'container-form-search'}),React.createElement('input',{type:'submit',value:'Search',className:'container-form-button'})),f),React.createElement('section',{className:'container-content'},g,React.createElement('div',{className:'container-content-pagination'},React.createElement('ul',{className:'container-content-pagination-list'},i))))};module.exports=Posts;