'use strict';

/**
 * @ngdoc overview
 * @name angNews2App
 * @description
 * # angNews2App
 *
 * Main module of the application.
 */
/*global app:true */
var app = angular.module('angNews2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);

  app.constant('FIREBASE_URL','https://glowing-fire-2491.firebaseio.com/');

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
