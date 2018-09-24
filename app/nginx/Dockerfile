FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
RUN mkdir -p /usr/local/var/www/public
COPY public /usr/local/var/www/public
COPY ~/certificates /etc/nginx/ssl/
