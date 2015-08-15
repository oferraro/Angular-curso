<html data-ng-app="clase3App">
	
<head>
	<meta charset="utf-8"/>
	<title></title>
	<link rel="stylesheet" href="../clase2/css/bootstrap.min.css"/>
	<script src="../clase2/js/angular.min.js"></script>
	<script src="js/app.js"></script>
</head>

<style>
	.ng-valid.ng-dirty {
		border-color: green;
	}
	.ng-invalid.ng-dirty {
		border-color: red;
	}
	.ng-pristine {
		border-color: blue;
	}
</style>

<body>
	<div class="container" ng-controller='formCtrl'>
		<form name="datosForm" ng-submit="procesarDatos(misDatos)" novalidate>
			<label>Numero:</label><p><input type="number" min=5 max=20 ng-model="misDatos.numero" required></label></p>
			<label>Numero2:</label><p><input type="text" required ng-model="misDatos.card" pattern="(\+?\d[- .]*){7,13}" title="international, national or local phone number"/></p>
			<label>Telefono:</label><p><input type="tel" ng-model="misDatos.tel" required></p>
			<label>Url:</label><p><input type="url" ng-model="misDatos.url" required></p>
			<label>Hora:</label><p><input type="datetime-local" ng-model="misDatos.fecha" required></p>
			<label>Archivo:</label><p><input type="file" accept="image/*" required></p>
			<p>El formulario es valido {{datosForm.$valid}}</p>
			<p><input type="submit" class="btn btn-warning" ng-disabled="datosForm.$invalid" value="Enviar"></p>
		</form>
	</div>
</body>
	
</html>
