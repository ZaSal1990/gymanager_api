/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    db.query(`SELECT room_bookings.*, rooms.name, users.name, days.name FROM room_bookings 
    JOIN rooms ON room_bookings.room_id = rooms.id
    JOIN users ON room_bookings.user_id = users.id
    JOIN days ON room_bookings.day_id = days.id;`)
      .then(data =>
        res.json({admin: data.rows[0]})
      )
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.post("/", (req, res) => {
    db.query(``)
      .then(data =>
        res.json({admin: data.rows[0]})
      )
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};



