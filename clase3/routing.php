<html data-ng-app="clase3App">
	
<head>
	<meta charset="utf-8"/>
	<title></title>
	<link rel="stylesheet" href="../clase2/css/bootstrap.min.css"/>
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
	Instalar angular ng-inspector
	<div class='navbar navbar-inverse'>
		<ul class="nav 	navbar-nav">
			<li><a ui-sref="home">Productos</a></li>
			<li><a ui-sref="carrito">Carrito</a></li>
			<li><a href="#">Categoria 3</a></li>
		</ul>
	</div>
	
	<div class="container" ng-controller='tiendaCtrl'>
		<div ui-view></div>
		
	</div>
</body>

<script src="../clase2/js/angular.min.js"></script>
<script src="js/tienda.js"></script>
<script src="js/listadoProductos.js"></script>
<script src="js/angular-ui-router.min.js"></script>
	
</html>
