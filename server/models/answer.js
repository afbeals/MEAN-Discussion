var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = new Schema(
{
  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
  _user: {type: Schema.Types.String, ref: 'User'},
  likes: Number,
  dislikes: Number,
  content: String,
  created_at: {type: Date, default: new Date},
  comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]

});

var Answer = mongoose.model('Answer', AnswerSchema);