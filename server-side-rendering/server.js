import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import _ from 'lodash';

import template from './templates';
import posts from './data/posts';
import users from './data/users';
import App from './components/app';

const app = express();

app.use('/public', express.static('public'));

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/', (req, res) => {
  const initialState = { posts: _.take(posts, 8) };
  const appString = renderToString(<App posts={initialState.posts} />);
  res.send(template({
    body: appString,
    initialState: JSON.stringify(initialState),
  }));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
