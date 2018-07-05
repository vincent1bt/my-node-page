FROM node
RUN mkdir /nodeapp
WORKDIR /nodeapp

COPY ./package.json /nodeapp
COPY ./package-lock.json /nodeapp

RUN npm install -g nodemon
RUN npm install

COPY ./ /nodeapp
