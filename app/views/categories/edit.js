'use strict';var React=require('react'),Header=require('./../header'),Footer=require('./../footer'),Meta=require('./../meta'),Error=require('./../error'),Edit=function(a){var b=a.category,c=a.errorObject,d=b.name,e=b.colors,f=b.id,g=b.description,h=e.first,i=e.second;return React.createElement('html',{lang:'es'},React.createElement('head',null,React.createElement(Meta,null),React.createElement('link',{rel:'stylesheet',type:'text/css',href:'/public/blog/styles/new.css'}),React.createElement('script',{src:'/public/blog/js/categoryEdit.js'})),React.createElement('body',null,React.createElement(Header,{isAdmin:!0}),React.createElement('main',{className:'container'},React.createElement('section',{className:'container-headertitle'}),React.createElement('section',{className:'container-content'},React.createElement('h3',null,'Edit category'),c&&React.createElement(Error,c),React.createElement('form',{className:'container-content-form',action:'/categories?_method=PUT',method:'POST'},React.createElement('input',{type:'hidden',name:'id',value:f}),React.createElement('fieldset',null,React.createElement('legend',null,'Name'),React.createElement('input',{className:'container-content-form-input',type:'text',name:'name',value:d})),React.createElement('fieldset',null,React.createElement('legend',null,'Description'),React.createElement('textarea',{name:'description',className:'container-content-form-description'},g)),React.createElement('fieldset',{className:'container-content-form-colors'},React.createElement('legend',null,'Colores'),React.createElement('input',{type:'text',name:'colors[first]',autocomplete:'none',className:'firstColor',value:h}),React.createElement('input',{type:'text',name:'colors[second]',autocomplete:'none',className:'secondColor',value:i}),React.createElement('input',{type:'submit',value:'Checar',className:'check'})),React.createElement('input',{className:'container-content-form-button',type:'submit',value:'Edit Category'})))),React.createElement(Footer,{isAdmin:!0})))};module.exports=Edit;