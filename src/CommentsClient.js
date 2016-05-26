import request from 'superagent';

function onError(err) {
  console.log('Somehting bad happend:', err);
}

function getComments(onSuccess, onFailed) {
  request
    .get('/comments')
    .end((err, resp) => {
      if (err) {
        onError(err);
        if (onFailed) { onFailed(); }
      } else {
        if (onSuccess) {
          onSuccess(resp.body.comments);
        }
      }
    });
}

function postComment(message, onSuccess, onFailed) {
  request
    .post('/comments')
    .send(message)
    .end((err, resp) => {
      if (err) {
        onError(err);
        if (onFailed) { onFailed(); }
      } else {
        if (onSuccess) {
          onSuccess(resp.body.comments);
        }
      }
    });
}

export default {
  getComments,
  postComment
}