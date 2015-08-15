(function(){
var clase3App = angular.module('clase3App', []); 
	clase3App.controller('formCtrl', function ($scope) {
	$scope.procesarDatos = function(datos) {
		console.log(datos);
	}
});
	
})()


