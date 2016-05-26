import React, { Component } from 'react';
import CommentsActions from '../../../Actions/CommentsActions';

import './CommentsForm.scss';

const propTypes = {
  // whether submit action is in progress
  isPosting: React.PropTypes.bool
};

const defaultProps = {
  isPosting: false
};

/**
 * This Component Renders a comments form containing an
 * email input, message textrea and submit button.
 */
export default
class CommentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const { email, message } = this.state;

    // preventing button click abuse or submitting invalid params
    if (this.props.isPosting || !email || !message) {
      return;
    }

    CommentsActions.postComment({ email, message });

    // clearing the form's inputs
    this.setState({
      email: '',
      message: ''
    });
  }

  /**
   * Handles the controlled input values
   * @param e {object} onChange event
   * @param stateName {string} name of the changed state variable
   */
  inputChangeHandler(e, stateName) {
    this.setState({[stateName]: e.target.value});
  }

  render() {
    const { isPosting } = this.props;
    const { email, message } = this.state;

    return (
      <form className="comments-form" onSubmit={(e) => {
        this.onSubmit(e)
      }}>
        <input
          value={email}
          placeholder="Email"
          className="comments-form_email"
          onChange={(e) => this.inputChangeHandler(e, 'email')}
        />
        <textarea
          value={message}
          rows="2"
          placeholder="Message"
          className="comments-form_message"
          onChange={(e) => this.inputChangeHandler(e, 'message')}
        />
        <input
          title="Add A new comment"
          type="submit"
          disabled={isPosting}
          className="comments-form_submit"
          value="Submit"
        />
      </form>
    );
  }
}

CommentsForm.propTypes = propTypes;
CommentsForm.defaultProps = defaultProps;
