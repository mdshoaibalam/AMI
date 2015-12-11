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
 controller('loginCtlr',loginCtlr);

 function loginCtlr($location,CommonService,localStorageService){
 	/*jshint validthis:true */
	var self=this;
	self.username='';
	self.password='';

	self.Mylogin=function(){
		self.message=CommonService.Mylogin(self.username,self.password);
		$location.path('/browseDevice');
	};


	self.Mylogout=function(){
		console.log(localStorageService.get('user'));
		 localStorageService.remove('user');
		 console.log(localStorageService.get('user'));
	};

	// self.fbLog=function(){
	// 	FB.login(function(response){
 //  // Handle the response object, like in statusChangeCallback() in our demo
 //  // code.
 //  console.log(response);
	// 	});
	// };
 }


})(window.angular);

