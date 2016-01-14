var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new Schema(
{
  _answer: {type: Schema.Types.ObjectId, ref: 'Answer'},
  _user: {type: Schema.Types.String, ref: 'User'},
  content: String
});

var Comment = mongoose.model('Comment', CommentSchema);