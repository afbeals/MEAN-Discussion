var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TopicSchema = new Schema(
{
  title: String,
  _user: {type: Schema.Types.String, ref: 'User'},
  description: String,
  category: String,
  created_at: {type: Date, default: new Date},
  answer:[{type: Schema.Types.ObjectId, ref: 'Answer'}]
});


var Topic = mongoose.model('Topic', TopicSchema);