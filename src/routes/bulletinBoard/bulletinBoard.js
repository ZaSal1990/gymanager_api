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
        res.json({stories: data.rows})
      )
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    db.query(`INSERT INTO bulletin_board (title, description, isActive) VALUES ($1, $2, $3);`, [req.body.title, req.body.description, true])
      .then(
        res.redirect('/') //refreshing to all posts
      )
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.put("/:id", (req, res) => { //to deactivate a post
    db.query(`UPDATE bulletin_board SET isActive = false WHERE id = $1;`, [req.params.id])
      .then(
        res.redirect('/') //refreshing to all posts
      )
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
 
};



