# GyManager API

## Setup

Install dependencies with `npm install`.

## Creating The DB



## Seeding



## Run The Server

Running the server normally
```sh
npm start
```

Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities
```sh
npm run error
```

## Api

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

### Booking

