/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  
 
  router.get("/", (req, res) => { //route to all
    console.log("I was here again!");
    db.query(`SELECT gym_capacity.* FROM gym_capacity;`)
      .then(data => {
        res.json({lastUpdate: data.rows});
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err });
      });
  });

  router.get("/lastupdate", (req, res) => { //NOT WORKING
    console.log("I was here!");
    db.query(`SELECT gym_capacity.number_of_people FROM gym_capacity ORDER BY id DESC LIMIT 1;`)
      .then(data => {
        res.json(data.rows[0].number_of_people);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err });
      });
  });

  router.get("/:date", (req, res) => { //route to get entery from the database
    console.log("hello!");
    db.query(`SELECT * FROM gym_capacity WHERE date = $1;`, [req.params.date])
      .then(data => {
        res.json({ gymCapacity : data.rows });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err });
      });
  });


  router.post("/", (req, res) => { //route for admin to post to database
    console.log("post");
    db.query(`INSERT INTO gym_capacity (day, date, time, number_of_people)
    VALUES ($1, $2, $3, $4) RETURNING number_of_people;`, [req.body.day, req.body.date, req.body.time, req.body.number_of_people])
      .then(data => {
        res.json({ gymCapacity : data.rows[0].number_of_people});
      })
        
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;

};



