FROM node:10.11.0
RUN mkdir /nodeapp
WORKDIR /nodeapp

COPY ./package.json /nodeapp
COPY ./package-lock.json /nodeapp

RUN npm install nodemon -g
RUN npm install -g knex
RUN npm install --only=production

COPY ./ /nodeapp
