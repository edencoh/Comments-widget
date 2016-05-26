import validators from './validators';
var Comment = require('./models/comment');

function sendComments(resp) {
  Comment.find(function (err, comments) {
    if (err) {
      resp.send(err);
    }

    resp.json({comments: comments});
  });
}

module.exports = function routes(app) {
  /**
   * GET /comments
   * retrive all comments stored in the DB
   */
  app.get('/comments', (req, resp) => {
    sendComments(resp);
  });

  /**
   * POST /comments
   * Create a new comment in the DB
   */
  app.post('/comments', (req, resp) => {
    if (!validators.comment(req.body)) {
      resp.status(400).send('Bad request params');
    }

    var comment = new Comment(req.body);

    comment.save(function (err) {
      if (err) {
        resp.send(err);
      }

      sendComments(resp);
    });
  });
};