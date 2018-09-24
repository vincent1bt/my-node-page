'use strict';var React=require('react'),Header=require('./../header'),Footer=require('./../footer'),Meta=require('./../meta'),Error=require('./../error'),Login=function(a){var b=a.auth,c=a.errorObject;return React.createElement('html',{lang:'es'},React.createElement('head',null,React.createElement(Meta,null),React.createElement('link',{rel:'stylesheet',type:'text/css',href:'/public/styles/new.css'})),React.createElement('body',null,React.createElement(Header,{auth:b}),React.createElement('main',{className:'container'},React.createElement('section',{className:'container-content'},React.createElement('h3',null,'Login'),c&&React.createElement(Error,c),React.createElement('form',{className:'container-content-form',action:'/login',method:'POST'},React.createElement('fieldset',null,React.createElement('legend',null,'Username'),React.createElement('input',{className:'container-content-form-input',type:'text',name:'username'})),React.createElement('fieldset',null,React.createElement('legend',null,'Password'),React.createElement('input',{className:'container-content-form-input',type:'password',name:'password'})),React.createElement('input',{className:'container-content-form-button',type:'submit',value:'Login'})))),React.createElement(Footer,{auth:b})))};module.exports=Login;