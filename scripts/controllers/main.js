'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
var app=angular.module('mytodoApp');
 app.controller('MainCtrl', function ($scope) {
  $scope.Urb='';
 	$scope.toggle = false;
  $scope.isUrb=false;
  $scope.checkUrb=function(){
    var reg=/^00[0-9][0-9][0-9]$/g;
    $scope.isUrb=reg.test($scope.Urb);
  };




 	var MyClass=false;
var  MyDate = '27/08/2015'.split('/');
console.log(MyDate);
var NewFormat=MyDate[1]+'/'+ MyDate[0]+'/'+ MyDate[2];
console.log(NewFormat);


 	$scope.dateFormat= new Date(NewFormat);
 	console.log($scope.dateFormat);

 	$scope.directory = [{name:'The Handsome Heifer', cuisine:'BBQ'},
	{name:'Greens Green Greens', cuisine:'Salads'},
	{name:'House of Fine Fish', cuisine:'Seafood'}];
	$scope.selectRestaurant = function(row) {
	$scope.selectedRow = row;
	};

	$scope.showError = function() {
	$scope.messageText = 'This is an error!';
	$scope.isError = true;
	$scope.isWarning = false;
	};
	$scope.showWarning = function() {
	$scope.messageText = 'Just a warning. Please carry on.';
	$scope.isWarning = true;
	$scope.isError = false;
	};

 // var Obj=angular.fromJson({'test':'abc','test1':'def'});
 //onsole.log(Obj);
 //onsole.log( angular.toJson($scope) );

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.example = {
        value: new Date(2010, 11, 28, 14, 57)
      };

    $scope.callHome=$scope.awesomeThings[0];
    $scope.condition=false;
    $scope.dataText='OLD';
    $scope.goHide=function(){
    	if($scope.dataText==='SHOAIB')
    	{
    		$scope.condition=true;
    	}
    	else
    	{
    		$scope.condition=false;
    	}
    };

    $scope.openClass=function(){
	MyClass=true;
    };
       $scope.n='6.0';
     //  var n=2.99;
      // $scope.n=n.toFixed(1);
     //  $scope.n=$scope.n/10;
       $scope.whole=$scope.n*100;
        $scope.n = Math.floor($scope.n)*100;
        $scope.decimal = $scope.whole-$scope.n;
        $scope.n=$scope.n/100;
        if( $scope.decimal >0){
          $scope.halfstar=1;
        }
        else
        {
          $scope.halfstar=0;
        }

  });
  
