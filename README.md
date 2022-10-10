# GyManager API
GyManager is a RESTful API hosting data and responds to requests from GyManagers front-end in JSON format.

 clone front-end from: [`https://github.com/harwindersidhu/gymanager`]

Gymanager makes use of the follwing tech stack:

Front-end: React, Bootstrap
Back-end: NodeJS, Express
Database: PostgreSQL
Additional: CORS, XSS, helmet, cookie-parser, morgan


## Setup
Install dependencies with `npm install`.

## Creating The DB

Connect with local Postgres on terminal using the procedure below:
Run `psql postgres` on terminal
Create DB with name 'gymanager_api' using `CREATE DATABASE gymanager_api`
Copy .env.axample file with a new name as .env with the following information:

PGHOST=localhost
PGUSER=<postgresusername>
PGDATABASE=gymanager_api
PGPASSWORD=<postgrespassword>
PGPORT=5432

Connect to database using `\c gymanager_api`
Create database using `\i src/db/schema/create.sql`

## Seeding
Seed database using `\i src/db/schema/seeds.sql`


## Run The Server
Running the server normally
```sh
npm start
```

Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities
```sh
npm run error
```

## API Endpoints

### User

`GET /api/user`

Response

```json

  {
"id": 1,
"name": "user",
"email": "abc@user.com",
"password": "user",
"isadmin": false
}

```

`GET /api/booking`

Response

```json

{
"36": {
"id": 36,
"time": "1pm",
"room": "Multi-purpose Room",
"user": "John Smith",
"day": "Monday"
},
"37": {
"id": 37,
"time": "1pm",
"room": "Multi-purpose Room",
"user": "John Smith",
"day": "Monday"
}
}

```

Other endpoints are:
`/api/user`
`/api/admin`
`/api/bulletinboard`
`/api/capacity`
`/api/booking`



