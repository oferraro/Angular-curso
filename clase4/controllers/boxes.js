catalogApp.controller('boxesController', function ($http, $scope) {
	$scope.boxes = [];
	var productLists = [
		{id: 1,  titulo:"Titulo 1",  precio: "3",  categoria: "autos", img: "imgs/thumbnail.jpg"},
		{id: 2,  titulo:"Titulo 2",  precio: "12", categoria: "motos", img: "imgs/thumbnail.jpg"},
		{id: 3,  titulo:"Titulo 3",  precio: "24", categoria: "autos", img: "imgs/thumbnail.jpg"},
		{id: 4,  titulo:"Titulo 4",  precio: "56", categoria: "bicis", img: "imgs/thumbnail.jpg"},
		{id: 8,  titulo:"Titulo 8",  precio: "22", categoria: "rollers", img: "imgs/thumbnail.jpg"},
		{id: 11, titulo:"Titulo 11", precio: "1",  categoria: "motos", img: "imgs/thumbnail.jpg"}
		]; // listadoProducgtos
	$scope.productLists = productLists; 
	$scope.cotizacion = 1;

	$scope.categoriaElegida = "";

	$scope.selectCategory = function (categoria) {
		$scope.categoriaElegida = categoria;
	};

	$scope.filterByCategory = function (cat) {
		if (cat.categoria == $scope.categoriaElegida || $scope.categoriaElegida == '') {
			return cat;
		}
	};

	$scope.buscar = function (p) { // Filtro buscarProducto
		if ($scope.valB) {
			if(p.titulo.toLowerCase().indexOf($scope.valB) !== -1) {
				return true;
			} else {
				return false;
			}
		} else {
				return true;
		}
	};
	
	$scope.doBusqueda = function (criterio) {
		if (criterio !=="") {
			criterio = criterio.toLowerCase();
		}
		$scope.valB = criterio;
	};
	
	$scope.convert = function (criterio2) {
		if (isNaN(criterio2) || criterio2 <= 0) {
			$scope.cotizacion = 1;
		} else {
			$scope.cotizacion = criterio2;
		}
	};
	
/*$http.get('http://jsonplaceholder.typicode.com/photos').
  then(function(response) {							// productosCtrl
		var boxes = [];
		var indexToRemove = 0;
		var numberToRemove = 10;
		
		boxes = response.data;
		$scope.boxes = boxes;
		
	// this callback will be called asynchronously
    // when the response is available
  }, function(response) {
	  console.log('error');
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  }); 
	*/
});
