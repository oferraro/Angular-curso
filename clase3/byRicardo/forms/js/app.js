(function(){
var app = angular.module('misDatos',[]);
app.controller('formCtrl',function($scope){
	$scope.procesarDatos = function(datos){
		console.log(datos);
	}
})
})()