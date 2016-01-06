'use strict';
(function(angular){


/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # loginCtlr
 * Controller of the mytodoApp
 */
 /*jslint latedef:false*/
angular.module('mytodoApp').
 controller('logoutController',logoutController);

 function logoutController($location,localStorageService){
 	/*jshint validthis:true */
	
		 localStorageService.remove('user');
	
 }


})(window.angular);
