/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {//admin
    db.query(`SELECT * FROM users WHERE isAdmin = true;`)
      .then(data =>
        res.json(data.rows[0])
      )
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {//regsiter admin
    db.query(`INSERT INTO users(name, email, password, isAdmin) VALUES ($1, $2, $3, $4) RETURNING id;`, [req.body.username, req.body.email, req.body.password, true])
      .then(newUser =>
        console.log(`New user ${newUser.rows[0].id} has been created!`)
      )
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};



