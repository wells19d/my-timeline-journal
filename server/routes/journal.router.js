const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {

    console.log('req.user:', req.user);


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

// router.post('/', (req, res) => {
//     console.log(req.body);
//     const journalInsert = `
//     INSERT INTO "journal" ("user_id","date","entry")
//     VALUES ($1, $2, $3)
//     RETURNING "id";`;
//     pool.query(journalInsert, [
//         req.body.user_id,
//         req.body.date, 
//         req.body.entry,
//     ])
//     .then((result) => {
//         console.log(`New Journal Entry`, result.rows[0].id);
//         res.sendStatus(201);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.sendStatus(500);
//       });
// })

module.exports = router;