var catalogApp = angular.module('catalogApp', ['ui.router', 'filtros-utiles']); // misProductos

catalogApp.config(function ($stateProvider, $urlRouterProvider){
	$stateProvider.state('list', {
		url: '/listado',
		templateUrl: 'views/listadoProductos.html'
	});
	$stateProvider.state('home',{
		url:'/home',
		cache:false,
		templateUrl:'views/home.html'
	});
	$stateProvider.state('producto',{
		url:'/producto/:prodId',
		templateUrl:'views/producto.html',
		controller: 'detalleProducto'
	});
	$urlRouterProvider.otherwise('/home');
});
