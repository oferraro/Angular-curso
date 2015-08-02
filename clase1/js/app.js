var miApp = angular.module('misTareas',[]);

miApp.controller('nombreCtrl',function($scope){
    var fecha = new Date();
	$scope.nombre = 'Ricardo';
	$scope.listadoTareas = [
		{
			descripcion:'Instalar AngularJS',
			completado:false,
            fecha: fecha
		},
		{
			descripcion:'Bindear los datos',
			completado:false,
            fecha: fecha
		},
		{
			descripcion:'Agregar Tareas Automaticamente',
			completado:false,
            fecha: fecha
		}
	]
	
	$scope.agregarTarea = function(tarea){
		var objTarea = {
			descripcion:tarea,
			completado:false,
            fecha: fecha
		}
		$scope.listadoTareas.push(objTarea);
		$scope.nuevaTarea = '';

	}
    $scope.updateDate = function (tarea) {
        if(tarea.completado) {
            tarea.fecha = new Date();
        }
    }

	$scope.contarIncompletos = function(){
		var cantidadTareas = $scope.listadoTareas.length;
		var incompletos = 0;
		for(var i = 0;i<cantidadTareas;i++){
			if(!$scope.listadoTareas[i].completado){
				incompletos++;
			}
		}
		
		return incompletos;
	}

	$scope.estoyAlHorno = function(){
		if($scope.contarIncompletos()>3){
			return 'label-danger';
		}
		else {
			return 'label-success';
		}
	}	
})
	
