import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
  <div id={props.id} className="post">
    <h4>
      Title: <b>{props.title}</b>
    </h4>
    <p>
      {props.body}
    </p>
    <span>
      user Id: {props.userId}
    </span>
  </div>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
