FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types

RUN mkdir -p /usr/local/var/www/public

RUN mkdir -p /usr/local/var/www/projects/
RUN mkdir -p /usr/local/var/www/projects/alzheimer

COPY projects/alzheimer/assets /usr/local/var/www/projects/alzheimer
COPY public /usr/local/var/www/public

COPY certificates /etc/nginx/ssl/