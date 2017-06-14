const express = require('express');

const posts = require('./data/posts');
const users = require('./data/users');

const app = express();

app.use(express.static('public'));

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
