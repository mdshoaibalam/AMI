'use strict';
(function(angular) {

 /*jslint latedef:false*/

 angular.module('mytodoApp').
controller('browseController',browseController);
function browseController($scope,$http){
	/*jshint validthis:true */
var self=this;
$scope.Images='';
$http.get('http://localhost:7397/api/product').success(function(data){
		self.Images=data;

		 
	});
self.LoadDevice=function(){
	
    

};

}

})(window.angular);