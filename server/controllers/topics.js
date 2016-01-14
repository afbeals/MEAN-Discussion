var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Answer = mongoose.model('Answer');
var Comment = mongoose.model('Comment');

module.exports =
{
  get_topics : function(req,res)
  {
    Topic.find({}, function(err, topic)
    {
      if(err)
      {
        console.log(err);
      }
      else
      {
        res.json(topic);
      }
    })
  },

  get_topic : function(req,res)
  {
    Topic.findOne({_id: req.params.id}, function(err, topic)
    {
      if(err)
      {
        console.log(err)
      }
      else
      {
        res.json(topic);
      }
    })
  },

  get_answer : function(req, res)
  {
    Topic.findOne({_id: req.params.id}).populate('answer').exec(function(err,topic)
    {
      var comments = {
        path: 'answer.comment',
        model: 'Comment'
      };
      Answer.populate(topic, comments, function(err, topics)
      {
        res.json(topics);
      })

    });
  },

  //  get_answer : function(req, res)
  // {
  //   Topic.findOne({_id: req.params.id}).populate('answer').populate({path: 'answer.comment', populate: {path: 'comment'}}).exec(function(err,topic)
  //   {
  //     console.log(topic);
  //     res.json(topic);
  //   });
  // },

  add_topics : function(req,res)
  {
    var topic = new Topic({title: req.body.title, _user:{_id: req.body.author},description: req.body.description, category: req.body.category});
    topic.save(function(err)
    {
      if(err)
      {
        console.log("add_topics err:");
        console.log(err);
      }
      else
      {
        res.redirect('/');
      }
    })
  },

  add_topics_answer : function(req,res)
  {
    Topic.findOne({_id: req.body.topicid}, function(err, topic)
    {
      var answer = new Answer({likes: 0, dislikes: 0, content: req.body.content});
      answer._topic = topic.id;
      answer._user = req.body.currentUser;
      topic.answer.push(answer._id);
      answer.save(function(err)
      {
        topic.save(function(err)
        {
          if(err)
          {
            console.log(err)
          }
          else
          {
            res.json(topic);
          }
        })
      })
    })
  },

  update_answer_likes: function(req, res)
  {
    Answer.update({_id: req.body._id}, {$inc: {likes: 1}}, function (err)
    {
      if(err)
      {
        console.log(err);
      }
      else
      {
      res.redirect('/');
      }
    })
  },

  update_answer_dislikes: function(req, res)
  {
    Answer.update({_id: req.body._id}, {$inc: {dislikes: 1}}, function (err)
    {
      if(err)
      {
        console.log(err);
      }
      else
      {
      res.redirect('/');
      }
    })
  },

  add_comment : function(req,res)
  {
    Answer.findOne({_id: req.body.answerid}, function(err, answer)
    {
      var comment = new Comment({content: req.body.content});
      comment._answer = req.body.answerid;
      comment._user = req.body.currentUser;
      answer.comment.push(comment._id);
      answer.save(function(err)
      {
        comment.save(function(err)
        {
          if(err)
          {
            console.log(err)
          }
          else
          {
            res.json(answer);
          }
        })
      })
    })
  },

}
