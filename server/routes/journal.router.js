const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {

    console.log('req.user:', req.user);

    // This is grabbing the entry and date from the journal, only for the person logged in.
    const queryText = `SELECT "entry", "date" FROM "journal" WHERE "user_id" = $1;`;
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

module.exports = router;