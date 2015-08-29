(function () {
	var misFiltros = angular.module('filtros-utiles', []);
	
	misFiltros.filter ('distintos', function () {
		return function (arrDatos, propiedad) {
			if (angular.isArray(arrDatos) && angular.isString(propiedad)) {
				var resultado = [];
				var keys = {};
				angular.forEach (arrDatos, function (obj, index) {
					if (angular.isUndefined(keys[obj[propiedad]])) {
						keys[obj[propiedad]] = true;
						resultado.push(obj[propiedad]);
					}
				});
				return resultado;
			} else {
				return arrDatos;
			}
		}
	});
	
})()
