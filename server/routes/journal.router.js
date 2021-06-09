const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('req.user:', req.user);

  // This is grabbing the entry and date from the journal, only for the person logged in.
  const queryText = `
  SELECT "id", "date", "photo", "entry" 
  FROM "journal" 
  WHERE "user_id" = $1 
  ORDER BY "date" ASC;`;
  pool
    .query(queryText, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`ERROR: Unable to get Journal Entries`, err);
      res.sendStatus(500);
    });
});

// This is posting entries to the journal for only the person logged in.
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  const queryText = `
    INSERT INTO "journal" ("user_id", "date", "photo", "entry") 
    VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      req.user.id,
      req.body.journal.date,
      req.body.journal.photo,
      req.body.journal.entry,
    ])
    .then((result) => {
      console.log('New Entry:', result.rows);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in adding entry', error);
      res.sendStatus(500);
    });
});

// -- Put Router -- //

// This is deleting only the journal entries for the user logged in
router.delete('/:id', rejectUnauthenticated, (req, res) => {

  console.log(req.params.id);
  console.log('is authenticated?', req.isAuthenticated());
  console.log('user', req.user);

  const queryText = `DELETE FROM "journal" WHERE "id" = $1
    AND "user_id" = $2;
    `;
    pool.query(queryText, [req.params.id, req.user.id])
        .then(() => res.sendStatus(201))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        }
    );
})

module.exports = router;
