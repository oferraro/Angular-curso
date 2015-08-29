(function(){
	var app = angular.module('cart',[]);
	app.factory('carrito',function(){
		return {
			productos:[],
			agregar:function(producto){
				this.productos.push(producto);
			},
			listar:function(){
				return this.productos;
			},
			checkout:function(){
				//lo mando al servidor
			},
			borrar:function(id){
		
				var posicion;
				angular.forEach(this.productos,function(value,index){
					if(value.id == id){
						console.log(value);
						posicion = index;

					}

				});
		
				if(posicion!==false){

					this.productos.splice(posicion,1);
				}
			
			}
		}
	})
			app.controller('listadoProductosCtrl',function($scope,$rootScope,carrito){
				$scope.carrito = carrito;
				$scope.listadoProductos = [
			{
				id:1,
				nombre:'P1',
				categoria:'autos',
				precio:100
			},
				{
				id:2,
				nombre:'Prod2',
				categoria:'electrodomesticos',
				precio:3000
			},
				{
				id:3,
				nombre:'prod3',
				categoria:'autos',
				precio:20000
			}
			];
			$scope.agregar = function(producto){
				carrito.agregar(producto);
			}
		});
			app.controller('carritoCtrl',function($scope,$rootScope,carrito){
				$scope.carrito = carrito;
				
				$scope.listadoCarrito = $scope.carrito.listar();
				
			})

})();