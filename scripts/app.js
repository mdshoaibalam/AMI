'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
var app= angular.module('mytodoApp',['ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ]);


  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
       .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'


      })
      .when('/gallery', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
  

      })
      .when('/service',{
        templateUrl:'views/services.html',
        controller:'serviceCtlr',
        controllerAs:'serviceCtlr'
      })
      .when('/mission',{
        templateUrl:'views/mission.html',
        controller:'serviceCtlr',
        controllerAs:'serviceCtlr'
      })
      .when('/contact',{
        templateUrl:'views/contact-us.html',
        controller:'serviceCtlr',
        controllerAs:'serviceCtlr'
      })  
      //.otherwise({
      //  templateUrl:'404.html'
      // });   
       .otherwise({
         redirectTo: '/'
       });
  });



// app.run(function($rootScope, $route, $location) {
//   $rootScope.$on('$routeChangeSuccess', function(ev, next, current) {
//     // We need the path component of `next`. We can either process `next` and 
//     // spit out its path component, or simply use $location.path(). I go with
//     // the latter.
//     console.log(ev);
//     console.log(next);
//     console.log(current);


//   //  console.log(nextRoute.access); // There you go!
//   });
// });


