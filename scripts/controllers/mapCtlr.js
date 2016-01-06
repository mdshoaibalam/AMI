'use strict';

angular.module('mytodoApp')
.controller('MapCtlr',function($scope,$routeParams){
$scope.modal={
message:'Address :'+$routeParams.country+','+$routeParams.state+','+$routeParams.city+''

};

});