import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import skgReact from './reducers';
import App from './components/app';
import './styles/app.scss';

const store = createStore(skgReact, window.__APP_INITIAL_STATE__);

setTimeout(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('main'),
  );
}, 5000);
