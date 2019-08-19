# Código de mi página web

[Link](https://vincentblog.xyz) a mi página

# MyPage Variables
export PAGE_PG_USER=dbuser
export MYPAGE_PG_PASSWORD=dbpassword
export DATABASE_DEV_URL=postgres://dbuser:dbpassword@mypage-db-service:5432/mypage_dev
export DATABASE_TEST_URL=postgres://dbuser:dbpassword@mypage-db-service:5432/mypage_test
export DATABASE_PROD_URL=postgres://dbuser:dbpassword@mypage-db-service:5432/mypage_prod

# Add certificates for https
/nginx/certificates

## Build container
docker-compose build

## Run migrations
docker-compose run mypage-app-service knex migrate:latest --knexfile ./db/knexfile.js

## Give createUser file permissions
chmod 755 app/utils/createUser.js

## create an user and password
docker-compose run mypage-app-service app/utils/createUser.js bloguser blogpassword

## Add posts
docker-compose run mypage-app-service knex seed:run --knexfile ./db/knexfile.js

## Database connection
docker exec -it mypage-db-service psql -U dbuser