// Angular Factories
// Users Factory
  DiscussionBoard.factory('UsersFactory', function($http)
  {
    var users = [];
    var SingUser = "";
    var currentUser = "";
    var factory = {};

    factory.getUsers = function(callback)
    {
      $http.get('/user').success(function(data)
      {
        Users= data;
        callback(Users);
      })
    }

    factory.addSingleUser = function(user)
    { 
      SingUser = user;
    }

    factory.getSingleUser = function(SingUsers, callback)
    {
      $http.get('/user/'+SingUser).success(function(data)
      {
        SingUser = data;
        callback(SingUser);
      })
    }

    factory.addUser = function(info, callback)
    {
      $http.post('/user/new', info).success(function(data)
      {
        callback(users);
      })
    }

    factory.getCurrentUser = function(callback)
    {
      callback(currentUser);
    }

    factory.addCurrentUser = function(info, callback)
    {
      currentUser = info;
      callback(currentUser);
    }

    factory.logoutUser = function(callback)
    {
      currentUser = '';
      callback(currentUser);
    }

    return factory
  });

// Topics Factory
  DiscussionBoard.factory('TopicsFactory', function($http)
  {
    var topics = [];
    var topicID = "";
    var topicIDobj = {topicID};
    var factory = {};

    factory.getTopics = function(callback)
    {
      $http.get('/topic').success(function(data)
      {
        topics = data;
        callback(topics);
      })
    }

    factory.addTopicID = function(info, callback)
    {
      topicID = info;
    }

    factory.getTopic = function(info, callback)
    {
      $http.get('/topic/'+topicID).success(function(data)
      {
        topics = data;
        callback(topics);
      })
    }

    factory.addTopic = function(info, callback)
    { 
      $http.post('/topic/new', info).success(function()
      {
        callback(topics);
      })
    }

    factory.addAnswer = function(info, callback)
    {
      $http.post('/topic/new/answer', info).success(function(data)
      {
        topics = data;
        callback(topics);
      })
    }

    factory.getAnswer = function(other, callback)
    {
      $http.get('/topic/answer/'+ topicID).success(function(data)
      {
        callback(data);
      })
    }

    factory.addLike = function(answerid, callback)
    {
      $http.post('/topic/addanswer/like/', answerid).success(function(data)
      { 
        callback(data);
      })
    }

    factory.addDislike = function(answerid, callback)
    {
      $http.post('/topic/addanswer/dislike/', answerid).success(function(data)
      { 
        callback(data);
      })
    }

    factory.addComment = function(answer, callback)
    {
      $http.post('/topic/addcomment', answer).success(function(data)
      {
        callback(data);
      })
    }

    return factory
  });