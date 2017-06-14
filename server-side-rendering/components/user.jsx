import React from 'react';
import PropTypes from 'prop-types';

const User = props => (
  <div className="user">
    <p>
      Id: {props.id} Username: <b>{props.username}</b>
    </p>
    <p>
      Name: <b>{props.name}</b> Mail: {props.email}
    </p>
  </div>
);

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default User;
