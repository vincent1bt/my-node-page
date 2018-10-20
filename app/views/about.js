'use strict';var React=require('react'),ReactGA=require('react-ga'),Safe=require('react-safe'),Header=require('./header'),Footer=require('./footer'),Meta=require('./meta'),About=function(a){var b=a.isAdmin;return React.createElement(React.Fragment,null,React.createElement(Header,{isAdmin:b}),React.createElement('main',{className:'container'},React.createElement('section',{className:'container-common_header'},React.createElement('h3',{className:'container-title'},'About me'),React.createElement('p',{className:'container-text'},'Hello, my name is Vicente and this is my blog. It\'s built with Node.js. I didn\'t use any framework because I wanted to code it from scratch and learn in the process. I write tutorials about programing and artificial intelligence. I really enjoy learning these topics and I like helping people so, if you have a doubt or a problem, you can send me a message.'),React.createElement('a',{className:'container-networks',href:'https://twitter.com/vincent1bt',target:'_blank'},React.createElement('img',{className:'container-networks-img',src:'/public/images/twitter.png',alt:'twitter'}),React.createElement('p',{className:'container-networks-text'},'Twitter')),React.createElement('a',{className:'container-networks',href:'https://github.com/vincent1bt',target:'_blank'},React.createElement('img',{className:'container-networks-img',src:'/public/images/github.png',alt:'github'}),React.createElement('p',{className:'container-networks-text'},'Github')),React.createElement('p',null,'I love to work with: '),React.createElement('ul',{className:'container-list'},React.createElement('li',null,'Javascript (React, Redux, Node, Webpack, Gulp)'),React.createElement('li',null,'Neuronal Networks, Convolutional Neural Networks (CNN), Decision Trees'),React.createElement('li',null,'Tensorflow, Keras, Pandas'),React.createElement('li',null,'Swift'),React.createElement('li',null,'Ruby, Rails'),React.createElement('li',null,'Git'),React.createElement('li',null,'Html (Css, Sass, Responsive Design)'),React.createElement('li',null,'PostgreSQL, Mysql, MongoDB'),React.createElement('li',null,'SEO (Google Analytics)')),React.createElement('h3',{className:'container-subtitle'},'Some of my projects')),React.createElement('section',{className:'container-content'},React.createElement('h4',{className:'container-content-h4'},'Wake me up app'),React.createElement('div',{className:'container-content-gif'},React.createElement('img',{src:'https://res.cloudinary.com/vincent1bt/image/upload/v1467842308/wakemeup2_gvy7sl.gif',alt:'wakemeup Demo'})),React.createElement('p',null,'App de iOS hecha en ',React.createElement('strong',null,'swift'),'. Te muestra las ultimas noticias y tus utimos tweets, puedes agregar recordatorios, ver el clima y buscar lugares cerca para desayunar.'),React.createElement('a',{href:'https://github.com/vincent1bt/wake-me-up-2',target:'_blank'},'Link al repositiorio de github.'),React.createElement('h4',{className:'container-content-h4'},'Twitter search'),React.createElement('div',{className:'container-content-gif'},React.createElement('img',{src:'https://res.cloudinary.com/vincent1bt/image/upload/v1462492838/ezgif.com-video-to-gif_1_suk0z4.gif',alt:'twitter Demo'})),React.createElement('p',null,'App de iOS hecha en ',React.createElement('strong',null,'swift'),'. Puedes buscar la ubicaci\xF3n de los tweets de un usuario en particular que tenga activada la opci\xF3n.'),React.createElement('a',{href:'https://github.com/vincent1bt/searchTwitter',target:'_blank'},'Link al repositiorio de github.'),React.createElement('h4',{className:'container-content-h4'},'Calendar App'),React.createElement('a',{href:'https://arcane-castle-68306.herokuapp.com'},'Link a la p\xE1gina'),React.createElement('p',null,'App hecha con ',React.createElement('strong',null,'go'),' en el backend y con ',React.createElement('strong',null,'react y redux'),' en el front-end. Puedes ver los eventos proximos en un calendario y agregar recordatorios.'),React.createElement('a',{href:'https://github.com/vincent1bt/calendar-app',target:'_blank'},'Link al repositiorio de github.'),React.createElement('h4',{className:'container-content-h4'},'Front-end Pages'),React.createElement('div',{className:'container-content-img'},React.createElement('img',{src:'https://res.cloudinary.com/vincent1bt/image/upload/v1478293589/Screenshot_2016-11-04_15.02.41_fzktju.jpg',alt:'page 1'}),React.createElement('img',{src:'https://res.cloudinary.com/vincent1bt/image/upload/v1478293590/Screenshot_2016-11-04_15.00.40_kvma47.jpg',alt:'page 2'})),React.createElement('p',null,'Paginas de Facebook y 3Djuegos con dise\xF1os mas amigables al usuario y con mejor-front end que las originales'),React.createElement('a',{href:'https://github.com/vincent1bt/front-end-pages',target:'_blank'},'Link al repositiorio de github.'),React.createElement('h4',{className:'container-content-h4'},'YourPosts, Api y App'),React.createElement('p',null,'Api en ',React.createElement('strong',null,'rails'),' para recibir las peticiones, con mongo como base de datos y App para iOS hecha con ',React.createElement('strong',null,'swift'),' para consumir el Api.'),React.createElement('p',null,'Maneja sesi\xF3n de usuarios por tokens, puedes crear posts, editarlos y eliminarlos.'),React.createElement('a',{href:'https://github.com/vincent1bt/swift-app',target:'_blank'},'App en swift'),React.createElement('a',{href:'https://github.com/vincent1bt/rails-api',target:'_blank'},'API en rails'),React.createElement('h4',{className:'container-content-h4'},'News App'),React.createElement('div',{className:'container-content-gif'},React.createElement('img',{src:'https://res.cloudinary.com/vincent1bt/image/upload/v1462570588/newsApp_c6twv6.gif',alt:'twitter Demo'})),React.createElement('p',null,'App para iOS, hecha en ',React.createElement('strong',null,'swift'),' donde puedes buscar noticias en twitter o the new york times.'),React.createElement('a',{href:'https://github.com/vincent1bt/news-app',target:'_blank'},'Link al repositiorio de github.'))),React.createElement(Footer,{isAdmin:b}))};module.exports=About;