import React from 'react';

import MainContent from './mainContent';
import Sidebar from './sidebar';

const App = () => (
  <div className="container">
    <h1>Example application to demonstrate client side rendering after fetching data</h1>
    <div className="row align-items-center justify-content-md-center">
      <div className="col main-content">
        <MainContent />
      </div>
      <div className="col-3 offset-1 sidebar">
        <Sidebar />
      </div>
    </div>
  </div>
);

export default App;
