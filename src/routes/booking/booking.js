/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */



const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/days", (req, res) => {
    db.query(`SELECT * FROM days;`)
      .then(({ rows: days }) => {
        res.json(
          days.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/", (req, res) => {
    db.query(`SELECT room_bookings.id, room_bookings.time, rooms.name AS room, room_bookings.username AS user, days.name AS day FROM room_bookings 
    JOIN rooms ON room_bookings.room_id = rooms.id
    JOIN users ON room_bookings.user_id = users.id
    JOIN days ON room_bookings.day_id = days.id;`)
      .then(({ rows: bookings }) => {
        res.json(
          bookings.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  router.delete("/delete/:id", (req, res) => {
    console.log('Atleast I was here');
    const bookingId = parseInt(req.params.id);
    console.log('bookingId', bookingId);
    db.query(`DELETE FROM room_bookings WHERE id = $1 RETURNING *;`, [bookingId]) //hard code params
      .then(data => {
        console.log('data', data);
        res.send("delete successful");
      }
      )
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  router.post("/create", (req, res) => {
    console.log('req.body as received', req.body);
    const dayId = Number(req.body.day);
    const roomId = Number(req.body.room);

    db.query(`INSERT INTO room_bookings (room_id, username, user_id, day_id, time) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [roomId, req.body.user, 1, dayId, req.body.time]); //hard code params userID since no validation or login taking place
    
    return db.query(`SELECT room_bookings.id, room_bookings.time, rooms.name AS room, room_bookings.username AS user, days.name AS day 
    FROM room_bookings 
    JOIN rooms ON room_bookings.room_id = rooms.id
    JOIN users ON room_bookings.user_id = users.id
    JOIN days ON room_bookings.day_id = days.id
    ORDER BY id DESC LIMIT 1; 
  `)
      .then(({ rows: newBooking }) => {
        console.log(newBooking)
        res.json(
          newBooking.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};


  
