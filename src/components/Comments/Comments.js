import React, { Component } from 'react';

import CommentsForm from './CommentsForm/CommentsForm';
import CommentsList from './CommentsList/CommentsList';

import CommentsActions from '../../Actions/CommentsActions';
import CommentsStore from '../../Store/CommentsStore';

import './Comments.scss';

/**
 * A stateful Component that renders the Comments module
 * which is combined of a form and a list view
 * This component state is synced with the CommentsStore
 */
export default class Comments extends Component {
  constructor(props){
    super(props);

    this.state = CommentsStore.getState();
    this.boundOnChange = this.onChange.bind(this);
  }

  componentDidMount() {
    CommentsStore.listen(this.boundOnChange);

    // retrieve comments from backend
    CommentsActions.loadComments();
  }

  componentWillUnmount() {
    CommentsStore.unlisten(this.boundOnChange);
  }

  onChange(storeState) {
    this.setState(storeState);
  }

  render() {
    const { isPosting, comments, isLoadingComments } = this.state;

    return (
      <div className="comments">
        <CommentsForm isPosting={isPosting} />
        <CommentsList
          comments={comments}
          isLoadingComments={isLoadingComments}
        />
      </div>
    );
  }
}
