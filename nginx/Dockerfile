FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /usr/local/var/www/public
COPY public /usr/local/var/www/public
COPY certificates /etc/nginx/ssl/
