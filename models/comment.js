var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  email: String,
  message: String
});

module.exports = mongoose.model('Comment', CommentSchema);