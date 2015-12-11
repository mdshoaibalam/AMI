'use strict';
(function(angular){


/**
 * @ngdoc function
 * @name mytodoApp.service
 * @description
 * # CommonService of the mytodoApp
 */
 /*jslint latedef:false*/
angular.module('mytodoApp').
 service('CommonService',CommonService);

 function CommonService(localStorageService){
 	/*jshint validthis:true */
	var self=this;
	self.message='Test';

	self.Mylogin=function(username,password){
		var user={};
		if(username==='mdshoaib.alam22@gmail.com' && password==='1234')
		{
		user.Name=username;
		user.password=password;
		localStorageService.set('user',user);
		}
		return 'OK service';
	};
 }


})(window.angular);
