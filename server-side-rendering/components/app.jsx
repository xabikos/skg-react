import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import MainContent from './mainContent';
import Sidebar from './sidebar';

const App = props => (
  <div className="container">
    <h1>Example application to demonstrate client side rendering after fetching data</h1>
    <div className="row align-items-center justify-content-md-center">
      <div className="col main-content">
        <MainContent posts={props.posts} />
      </div>
      <div className="col-3 offset-1 sidebar">
        <Sidebar users={props.users} />
      </div>
    </div>
  </div>
);

App.propTypes = {
  posts: PropTypes.array,
  users: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(App);
