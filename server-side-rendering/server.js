import express from 'express';

import template from './templates';
import posts from './data/posts';
import users from './data/users';

const app = express();

app.use('/public', express.static('public'));

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/', (req, res) => {
  res.send(template({
    body: 'Hello world'
  }));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
