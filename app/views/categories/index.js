'use strict';var React=require('react'),Header=require('./../header'),Footer=require('./../footer'),Categories=require('./categories'),Index=function(a){var b=a.categories,c=a.isAdmin;return React.createElement(React.Fragment,null,React.createElement(Header,{isAdmin:c}),React.createElement(Categories,{categories:b}),React.createElement(Footer,{isAdmin:c}))};module.exports=Index;