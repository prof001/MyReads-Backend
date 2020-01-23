const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
  res.json('Hello from server');
});

app.listen(port, () => console.log(`listening on port ${port}`));
