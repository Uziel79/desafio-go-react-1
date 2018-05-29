import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="postHeader">
    <div className="image">
      <img src={props.data.imageUser} alt="" />
    </div>
    <div className="infoUserHour">
      <h5>{props.data.nameUser}</h5>
      <p>
        <small>{props.data.hourPost}</small>
      </p>
    </div>
  </div>
);

PostHeader.propTypes = {
  data: PropTypes.shape({
    imageUser: PropTypes.string,
    nameUser: PropTypes.string,
    hourPost: PropTypes.string,
  }).isRequired,
};

export default PostHeader;
