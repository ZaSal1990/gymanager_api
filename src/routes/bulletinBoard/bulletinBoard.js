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
    db.query(`SELECT * FROM bulletin_board WHERE isActive = true;`)
      .then(data =>
        res.json({ stories: data.rows })
      )
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  //This route is not used in gymanager app. It is only for reference.
  router.get("/all", (req, res) => {
    db.query(`SELECT * FROM bulletin_board;`)
      .then(data =>
        res.json({ stories: data.rows })
      )
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    db.query(`INSERT INTO bulletin_board (title, description, isActive, created_at) VALUES ($1, $2, $3, $4) RETURNING *;`, [req.body.title, req.body.description, true, req.body.created_at])
      .then(data => {
        res.json({ stories: data.rows[0] })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.put("/", (req, res) => { //to deactivate a post
    db.query(`UPDATE bulletin_board SET isActive = false WHERE id = $1;`, [req.body.id])
      .then(res.json({ status: "success" })
      )
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;

};



