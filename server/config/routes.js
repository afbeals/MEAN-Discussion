var topics = require('../controllers/topics.js');
var users = require('../controllers/users.js');

module.exports = function(app)
{

  // app.get('/', function(req,res)
  // {
  // }),

  app.get('/user', function(req,res)
  {
    users.get_users(req,res);
  }),

  app.post('/user/new', function(req,res)
  {
    users.add_users(req,res);
  }),

  app.post('/user/update', function(req,res)
  {
    users.update_users(req,res);
  }),

  app.get('/user/:name', function(req,res)
  {
    users.view_user(req,res);
  }),

  app.get('/topic', function(req,res)
  {
    topics.get_topics(req,res);
  }),

  app.get('/topic/:id', function(req,res)
  {
    topics.get_topic(req,res);
  }),

  app.post('/topic/new', function(req,res)
  {
    topics.add_topics(req,res);
  }),

  app.post('/topic/new/answer', function(req,res)
  {
    topics.add_topics_answer(req,res);
  }),

  app.get('/topic/answer/:id', function(req,res)
  {
    topics.get_answer(req,res);
  })

  app.post('/topic/addanswer/like', function(req,res)
  {
    topics.update_answer_likes(req,res);
  })

  app.post('/topic/addanswer/dislike', function(req,res)
  {
    topics.update_answer_dislikes(req,res);
  })

  app.post('/topic/addcomment', function(req,res)
  {
    topics.add_comment(req,res);
  })
}