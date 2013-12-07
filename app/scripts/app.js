'use strict';

angular.module('brainJellyApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/questions',
        controller: 'TodaysQuestionCtrl'
      })
      .when('/question', {
        templateUrl: 'partials/questions',
        controller: 'TodaysQuestionCtrl'
      })
      .when('/random_question', {
        templateUrl: 'partials/questions',
        controller: 'RandomQuestionCtrl'
      })
      .when('/answers/:id', {
        templateUrl: 'partials/answers',
        controller: 'AnswersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
