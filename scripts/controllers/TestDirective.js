'use strict';

var app=angular.module('mytodoApp');
app.directive('testDirective',function(){

return {
	restrict:'E',
	template:'<h2>This is comes from directive</h2>'

};

});

app.directive('hoverMe',function(){

return {
	restrict:'A',
	link:function(scope,element){

		element.bind('mouseover',function(){
			document.getElementById('SL').style.display = 'block';
			document.getElementById('SK').style.display = 'none';
			scope.$apply();
		});
		element.bind('mouseout',function(){
			document.getElementById('SK').style.display = 'block';
			document.getElementById('SL').style.display = 'none';
			scope.$apply();
		});

	}

};

});

app.directive('superman',function(){
return{
	restrict:'A',
	transclude:true,
	template:'<span> this template</span>',
	link:function(scope,element){
		element.bind('mouseenter',function(){
			scope.isUrb=true;
		});
	}

};

});


app.directive('clock',function(){
	return {
		restrict:'E',
		transclude:true,
		scope :{
				timezone:'@'
		},
		template:'<div > 11:00 pm {{timezone}} .</div>'
	};


});

app.directive('phone',function(){
	return {	
		scope:{
			dail:'&'
		},
		
		
		template:'<div class=\"buttto\" ng-click=\"dail()\">Phome div</div>'
	};

});











app.directive('panel',function(){
	return {
		restrict:'E',
		transclude:true,
		scope :{
				title:'@'
		},
		template:'<div style="border:3px solid #000000">{{title}}<div ng-transclude></div></div>'
	};


});
