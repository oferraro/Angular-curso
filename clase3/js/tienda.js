(function(){
var clase3App = angular.module('clase3App', ['ui.router']);
	clase3App.factory('carritoSrv', function () {
		return {
			productos: [],
			agregar: function(producto) {
				this.productos.push(producto);
			},
			listar: function() {
				return this.productos;
			},
			checkout: function() {
				
			},
			borrar: function (id) {
				var posicion;
				angular.forEach(this.productos, function(value, index) {
					if(value.id==id) {
						posicion = index;
					}
				});
				if (posicion!==false) {
					this.productos.splice(posicion,1);
				}
			}
		}
	});
	clase3App.controller('tiendaCtrl', function ($scope) {
		$scope.listadoProductos = [
		{
			id:1,
			nombre:'p1',
			categoria:'autos',
			precio:100
		},
		{
			id:3,
			nombre:'p3',
			categoria:'camioneta',
			precio:300
		},
		{
			id:4,
			nombre:'p4',
			categoria:'autos',
			precio:200
		}];
		$scope.agregar = function(producto) {
			// Para comunicar entre Scopes podemos usar servicios, los servicios estan disponibles en todo el clousure y si lo necesito en otro modulo, al injectar esta clousure estará disponible
		}
	});

	clase3App.config(function($stateProvider,$urlRouterProvider) {
		$stateProvider.state('home', {
			url:'/home',
			cache:false,
			templateUrl:'views/productos.html'
		});
		$stateProvider.state('carrito', {
			url:'/cart',
			templateUrl:'views/carrito.html'
		});
		
		$urlRouterProvider.otherwise('/home');
		//$rooteScope // Scope global (recomendado no usar)
	});
	
	clase3App.controller('carritoCtrl', function ($scope) {
		
	});
	
})()

// Probar ng-progress y ngResource

