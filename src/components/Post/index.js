import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from '../PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader data={props.data.userData} />
    <div className="postText">
      <p>{props.data.postText}</p>
    </div>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    userData: PropTypes.object,
    postText: PropTypes.string,
  }).isRequired,
};

export default Post;
