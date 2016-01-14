// Angular Controller
// Dashboard Controller
  DiscussionBoard.controller('DashboardController', function($scope, UsersFactory, TopicsFactory)
  {
    // add some jquery to populate category dropdown

    var topics = [];
    var users = [];
    var currentUser = ''; 

    UsersFactory.getCurrentUser(function(data)
    {
      $scope.currentUser = data;
      currentUser = data;
    })

    UsersFactory.getUsers(function(data)
    {
      $scope.users = data;
    })

    TopicsFactory.getTopics(function(data)
    {
      $scope.topics = data;
      console.log(data);
    })


    $scope.addTopic = function()
    {
      $scope.add_topic.author = currentUser.name;
      TopicsFactory.addTopic($scope.add_topic, function()
      {
        TopicsFactory.getTopics(function(data)
        {
          $scope.topics = data;
        })
      })
      UsersFactory.addUser($scope.add_topic, function()
        {
        });
      $scope.add_topic={};
    }

    $scope.addSingleUser = function(user)
    {
      UsersFactory.addSingleUser(user, function()
      {})
    }

    $scope.requestTopic = function(topicId)
    {
      TopicsFactory.addTopicID(topicId, function()
      {})
    }

  });

// Welcome Controller
  DiscussionBoard.controller('WelcomeController', function($scope, UsersFactory)
  {
    $scope.loginUser = function()
    {
      UsersFactory.addCurrentUser($scope.login_user, function()
      {})
    }
  });

// Profile Controller
  DiscussionBoard.controller('ProfileController', function($scope, UsersFactory)
  {
  
    var user = "";

    var currentUser = "";

    UsersFactory.getCurrentUser(function(data)
    {
      $scope.currentUser = data;
      currentUser = data;
    })

    UsersFactory.getSingleUser(user, function(data)
    {
      $scope.user = data;
      user = data;
    })

    $scope.logoutUser = function()
    {
      UsersFactory.logoutUser(function()
      {

      })
    }

    
  });

// Topic Controller
  DiscussionBoard.controller('TopicController', function($scope, UsersFactory, TopicsFactory)
  {
    $scope.add_comment = {};
    var users = [];
    var topics = [];
    var answer = [];
    var comment = [];
    var currentUser = ''; 

    UsersFactory.getCurrentUser(function(data)
    {
      $scope.currentUser = data;
      currentUser = data;
    })

    TopicsFactory.getTopic(topics, function(data)
    {
      $scope.topics = data;
      topics = data;
    })

    TopicsFactory.getAnswer(topics, function(data)
    {
      answer = data.answer;
      $scope.answer = data.answer;
    })

    $scope.addAnswer = function(topicid)
    {
      $scope.add_answer.currentUser = currentUser.name;
      $scope.add_answer.topicid = topicid;
      TopicsFactory.addAnswer($scope.add_answer, function(data)
      {
        TopicsFactory.getAnswer(topics, function(data)
        {
          answer = data.answer;
          $scope.answer = data.answer;
        })
      })
      $scope.add_answer = {};
    }

    $scope.addLike = function(answerid)
    { 
      TopicsFactory.addLike(answerid, function()
      {
        TopicsFactory.getAnswer(topics, function(data)
        {
          answer = data.answer;
          $scope.answer = data.answer;
        })
      })
    }

    $scope.addDislike = function(answerid)
    {
      TopicsFactory.addDislike(answerid, function()
      {
        TopicsFactory.getAnswer(topics, function(data)
        {
          answer = data.answer;
          $scope.answer = data.answer;
        })
      })
    }

    $scope.addComment = function(answer)
    {
      
      $scope.add_comment.answerid = answer._id;
      $scope.add_comment.currentUser = currentUser.name;
      console.log($scope.add_comment);
      TopicsFactory.addComment($scope.add_comment, function()
      {
        TopicsFactory.getAnswer(topics, function(data)
        {
          answer = data.answer;
          $scope.answer = data.answer;
        })
      })
      $scope.add_answer = {};
    }

    $scope.logoutUser = function()
    {
      UsersFactory.logoutUser(function()
      {

      })
    }

    $scope.addSingleUser = function(userinfo)
    {
      UsersFactory.addSingleUser(userinfo, function()
      {})
    }
  });
