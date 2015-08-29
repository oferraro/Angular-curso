(function(){
var app = angular.module('miTienda',['cart','ui.router']);
app.controller('tiendaCtrl',function($scope){
	
});
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home',{
		url:'/home',
		cache:false,
		templateUrl:'views/listadoProductos.html'
	});
	$stateProvider.state('carrito',{
		url:'/cart',
		templateUrl:'views/carrito.html'
	});
	$urlRouterProvider.otherwise('/home')
})
})();