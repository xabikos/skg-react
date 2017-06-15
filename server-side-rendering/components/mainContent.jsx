/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import axios from 'axios';
import _ from 'lodash';

import Post from './post';

class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingData: false,
      posts: props.posts,
    };
  }

  componentDidMount() {
    this.setState({ loadingData: true });
    axios.get('/posts')
    .then((response) => {
      this.setState({
        loadingData: false,
        posts: _.take(response.data, 12),
      });
    });
  }

  render() {
    return (
      this.state.loadingData ?
      (
        <div>
          <h3>Loading data...</h3>
          <Loader loaded={!this.state.loadingData} />
        </div>
      ) :
      (
        <div>
          {this.state.posts && this.state.posts.map(post => <Post key={post.id} {...post} />)}
        </div>
      )
    );
  }
}

MainContent.propTypes = {
  posts: PropTypes.array,
};

export default MainContent;
