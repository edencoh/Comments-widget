import alt from '../alt';

import CommentsClient from "../CommentsClient";

class CommentsActions {
  loadComments() {
    CommentsClient.getComments(
      this.loadCommentsSuccess,
      this.loadCommentsFailed
    );

    // will trigger an event saying
    // loadComments is in progress
    return null;
  }

  loadCommentsSuccess(comments) {
    return comments;
  }

  loadCommentsFailed() {
    return null;
  }

  postComment(comment) {
    CommentsClient.postComment(comment, this.loadCommentsSuccess);
  }
}

module.exports = alt.createActions(CommentsActions);