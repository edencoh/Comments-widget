import alt from '../alt';
import CommentsActions from '../Actions/CommentsActions';

class CommentsStore {
  constructor() {
    this.initStore();

    this.bindListeners({
      handleLoadComments: CommentsActions.loadComments,
      handleLoadCommentsSuccess: CommentsActions.loadCommentsSuccess,
      handleLoadCommentsFailed: CommentsActions.loadCommentsFailed
    });
  }

  /**
   * Initializing the Store with empty default values
   */
  initStore() {
    this.isLoadingComments = false;
    this.isPosting = false;
    this.comments = [];
  }

  handleLoadComments() {
    this.setState({ isLoadingComments: true })
  }

  handleLoadCommentsSuccess(comments) {
    this.setState({
      comments,
      isLoadingComments: false
    });
  }

  handleLoadCommentsFailed() {
    this.setState({
      isLoadingComments: false
    });
  }
}

module.exports = alt.createStore(CommentsStore, 'CommentsStore');