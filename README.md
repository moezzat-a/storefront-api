# Build A Storefront API Backend

Database schema and API endpoints can found in [Requirement.md]

## Setup database

1. create user:
   CREATE USER admin_user WITH ENCRYPTED PASSWORD 'password-admin';

2. create database:
   CREATE DATABASE store_db;
   CREATE DATABASE test_db;

3. Granting privileges on database:
   GRANT ALL PRiVILEGES ON DATABASE store_db TO admin_user;
   GRANT ALL PRiVILEGES ON DATABASE test_db TO admin_user;

## install dependencies

Here you'll find all packages that used through the app
run `yarn` or `npm install` to start install all dependencies that required for API

## Migrate Database

run this command on root directory `db-migrate up`

## Environment Variables setup

Here all variables that used on `.env` file

```
PORT=3000
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_USER=admin_user
POSTGRES_PASSWORD=password-admin
POSTGRES_DATABASE=store_db
POSTGRES_TEST_DATABASE=test_db
NODE_ENV=dev
BCRYPT_ROUNDS=10
BCRYPT_PASSWORD=!85gb^30@iENOq77kbyWg.yvzawu10e
JWT_SECRET=2b%30&gX0XTx7RfCNMA3N4kK7fcu
TOKEN_TEST=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6Ik1vaGFtZWQiLCJsYXN0X25hbWUiOiJFenphdCIsInBhc3N3b3JkIjoiJDJiJDEwJFRaSThrcFl4dFRPTVgxTmJCMGlnOU9EcDFJTjBBZnVHVHJCL21PRk1nVHgycFpCdVYyUE8yIiwiaWF0IjoxNjYzMDQxNzk0fQ.0X7nI5VmSTPtzLc07h4yp12GDV9aNtPOMmjN2kBsdY8
```

## start app

to start app use
`yarn watch` Or `npm run watch`

## Endpoints

All endpoints needed to run app you will find i `requirements.md`

## Token and Authentication

Tokens passed in http header as
`Authorization Bearer <TOKEN>`

## Testing

to test app run `yarn test` Or `nom run test`
