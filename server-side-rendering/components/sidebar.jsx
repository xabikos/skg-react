/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import Loader from 'react-loader';
import axios from 'axios';

import User from './user';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingData: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loadingData: true });
    setTimeout(() => {
      axios.get('/users')
      .then((response) => {
        this.setState({
          loadingData: false,
          users: response.data,
        });
      });
    }, 4000);
  }

  render() {
    return (
      this.state.loadingData ?
      (
        <div>
          <h5>Loading data...</h5>
          <Loader loaded={!this.state.loadingData} />
        </div>
      ) :
      (
        <div>
          {this.state.users.map(user => <User key={user.id} {...user} />)}
        </div>
      )
    );
  }
}

export default Sidebar;
