import React, { Component } from 'react';
import gravatar from 'gravatar';

import './Comment.scss';

const propTypes = {
  email: React.PropTypes.string,
  message: React.PropTypes.string
};

export default
class Comment extends Component {
  render() {
    const { message, email } = this.props;
    const gravatarImgUrl = gravatar.url(email);

    return (
      <li className="comment">
        <img className="comment_img" src={gravatarImgUrl} />
        <div className="comment_content">
          <div className="comment_content_user" title={email}>
            { email }
          </div>
          <div className="comment_content_text" title={message} >
            { message }
          </div>
        </div>
      </li>
    );
  }
}

Comment.propTypes = propTypes;
