<html data-ng-app='catalogApp'>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="css/bootstrap-theme.min.css">

<link rel="stylesheet" href="css/styles.css">

<script src="js/angular.min.js"></script>
<script src="js/app.js"></script>

<meta charset="utf-8" /> 

<link rel="icon" href="favicon.png" type="image/png">

<body>

<script>
	// http://jsonplaceholder.typicode.com/albums
	
</script>

<header>	
	<nav class="navbar navbar-inverse">
	   <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
	</nav>
</header>
	
<div class="cointainer">

	<div data-ng-controller="boxesController">
		<div class="row">
			<input type="text" name="buscar" 	data-ng-model="criterio"> 		<button data-ng-click="doBusqueda(criterio)">Buscar</button>
			<input type="text" name="convertir" data-ng-model="cotizacion1">	<button data-ng-click="convert(cotizacion1)">Buscar</button>
		</div>
		
		<div class="block" data-ng-repeat="prod in productLists | filter:buscar">
			<div class="thumbnail">
				<img src="{{prod.img}}" alt="...">
				<div class="caption">
				<h3>{{prod.titulo |uppercase}}</h3>
				<p>Precio {{prod.precio * cotizacion |currency:" u$s " }}</p>
				<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
				</div>
			</div>
		</div>
		
		<div class="row" data-ng-if="(productLists | filter:buscar).length <= 0">
			No se encontraron resultados
		</div>
		
		<div class="block" data-ng-repeat="box in boxes">
			<div class="thumbnail">
				<img src="{{box.thumbnailUrl}}" alt="...">
				<div class="caption">
				<h3>{{box.title}}</h3>
				<p>Precio u$s {{box.id |currency }}</p>
				<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
				</div>
			</div>
		</div>
	</div>
	
</div>

<script src="js/jquery-2.1.4.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="js/bootstrap.min.js"></script>

</body>

</html>
