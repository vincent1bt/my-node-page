'use strict';var React=require('react'),Header=require('./../header'),Footer=require('./../footer'),Posts=require('./posts'),Index=function(a){var b=a.posts,c=a.count,d=a.isAdmin;return React.createElement(React.Fragment,null,React.createElement(Header,{isAdmin:d}),React.createElement(Posts,{posts:b,count:c}),React.createElement(Footer,{isAdmin:d}))};module.exports=Index;