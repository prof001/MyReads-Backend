const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const books = require('./routes/books');

const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use('/v1/books', books);

app.get('/', (req, res) => {
  res.json('Hello from server');
});

app.listen(port, () => console.log(`listening on port ${port}`));
