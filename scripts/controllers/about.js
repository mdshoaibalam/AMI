'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
var app=angular.module('mytodoApp');

  app.controller('AboutCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   
    	$http.get('http://localhost:2443/api/product').success(function(resp){

    		$scope.model=resp;
    	});
    

  });
