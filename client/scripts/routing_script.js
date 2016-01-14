// Angular Routing
  DiscussionBoard.config(function($routeProvider)
  {
    $routeProvider
      .when('/', {templateUrl: 'partials/welcome_partial.html', controller: 'WelcomeController'})
      .when('/dashboard', {templateUrl: 'partials/dashboard_partial.html', controller: 'DashboardController'})
      .when('/profile/:name', {templateUrl: 'partials/profile_partial.html', controller: 'ProfileController'})
      .when('/topic/:name', {templateUrl: 'partials/topic_partial.html', controller: 'TopicController'})
      .otherwise({redirectTo: '/'});
  });