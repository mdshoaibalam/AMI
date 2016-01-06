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
 controller('serviceCtlr',serviceCtlr);

 function serviceCtlr($location,CommonService,localStorageService){
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

  }


})(window.angular);

