var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
{
  _id: String,
  topics: Number,
  answers: Number,
  comments: Number
});

var User = mongoose.model('User', UserSchema);