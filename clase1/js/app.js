var miApp = angular.module('misTareas',[]);

miApp.controller('nombreCtrl',function($scope){
	$scope.nombre = 'Ricardo';
	$scope.listadoTareas = [
		{
			descripcion:'Instalar AngularJS',
			completado:false
		},
		{
			descripcion:'Bindear los datos',
			completado:false
		},
		{
			descripcion:'Agregar Tareas Automaticamente',
			completado:false
		}
	]
	$scope.fecha = new Date();
	$scope.agregarTarea = function(tarea){
		var objTarea = {
			descripcion:tarea,
			completado:false
		}
		$scope.listadoTareas.push(objTarea);
		$scope.nuevaTarea = '';

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
	