/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import Loader from 'react-loader';
import axios from 'axios';
import _ from 'lodash';

import Post from './post';

class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingData: false,
      posts: [],
    };
  }

  componentDidMount() {
    this.setState({ loadingData: true });
    setTimeout(() => {
      axios.get('/posts')
      .then((response) => {
        this.setState({
          loadingData: false,
          posts: _.take(response.data, 8),
        });
      });
    }, 2000);
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
          {this.state.posts.map(post => <Post key={post.id} {...post} />)}
        </div>
      )
    );
  }
}

export default MainContent;
