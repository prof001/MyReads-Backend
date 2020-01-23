const { Router } = require('express');

const pool = require('../db/index');

const router = Router();

router.get('/', (request, response) => {
  pool.query('SELECT * FROM books', (err, res) => {
    if (err) console.log(err);

    response.json(res.rows);
  });
});

module.exports = router;
