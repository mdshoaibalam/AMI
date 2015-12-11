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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
  

      })
      .when('/login',{
        templateUrl:'views/login.html',
        controller:'loginCtlr',
        controllerAs:'loginCtlr'
      })
       .when('/logout',{
        resolve:{
          'check':function(localStorageService){
            localStorageService.remove('user');
          }
        },
        templateUrl:'views/logout.html',
        controller:'logoutontroller',
        controllerAs:'logoutCtlr'
      })

      .when('/browseDevice',{
          resolve:{
          'check':function($location,localStorageService){
            var temp= localStorageService.get('user');
            if(temp===null){
              $location.path('/login');
            }            
          }
        },
        templateUrl:'views/browseDevice.html',
        controller:'browseController',
        controllerAs:'browseCtlr',
      
      })
      .when('/map/:country/:state/:city',{
        templateUrl:'views/mapping.html',
        controller:'MapCtlr'
      })
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


