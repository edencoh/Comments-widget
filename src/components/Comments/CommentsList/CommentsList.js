import React, { Component } from 'react';
import Comment from '../Comment/Comment';

import './CommentsList.scss';

const LOADING_TEXT = 'loading...';

const propTypes = {
  comments: React.PropTypes.array,
  isLoadingComments: React.PropTypes.boolean
};

/**
 * Renders a comments list view with a view filter
 */
export default class CommentsList extends Component {
  constructor() {
    super();

    this.state = { filterQuery: '' };
  }

  /**
   * Returns whether a comment should be displayed or not
   * @param comment {object}
   * @param filterQuery {string}
   * @returns {boolean}
   */
  isMatchFilter(comment, filterQuery) {
    return comment.message.indexOf(filterQuery) != -1 ||
      comment.email.indexOf(filterQuery) != -1;
  }

  renderComments(comments) {
    const { filterQuery } = this.state;

    return comments
      .filter(c => this.isMatchFilter(c, filterQuery))
      .map(c => <Comment email={c.email} message={c.message} />);
  }

  /**
   * Handles the controlled input value
   * @param e {object} onChange event
   */
  inputChangeHandler(e) {
    this.setState({ filterQuery: e.target.value });
  }

  render() {
    const { isLoadingComments, comments } = this.props;

    return (
      <div className="comments-list" >
        <div className="comments-list_filter">
          <figure className="fa fa-search comments-list_filter_icon" />
          <input
            type="text"
            value={this.state.filterQuery}
            placeholder="Filter"
            className="comments-list_filter_input"
            onChange={(e) => this.inputChangeHandler(e)}
          />
        </div>
        <ul className="comments-list_comments">
          { isLoadingComments ? LOADING_TEXT : this.renderComments(comments) }
        </ul>
      </div>
    );
  }
}

CommentsList.propTypes = propTypes;
