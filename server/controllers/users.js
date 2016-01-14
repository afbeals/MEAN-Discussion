var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports =
{
  get_users : function(req,res)
  {
    
  },

  add_users : function(req,res)
  {
    console.log(req.body);
    var user = new User({_id: req.body.author, topics: 1, answers: 0, comments: 0});
    user.save(function(err)
    {
      if(err)
      {
        console.log("add_users err:");
        console.log(err);
      }
      else
      {
        res.redirect('/');
      }
    })
  },

  update_users : function(req,res)
  {
    
  },

  view_user : function(req,res)
  {
    User.find({_id: req.params.name}, function(err, user)
    {
      if(err)
      {
        console.log(err)
      }
      else
      {
        res.json(user);
      }
    })
  },

}