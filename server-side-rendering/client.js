import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/app';
import './styles/app.scss';

setTimeout(() => {
  ReactDOM.render(<App posts={window.__APP_INITIAL_STATE__.posts} />, document.getElementById('main'));
}, 5000);
