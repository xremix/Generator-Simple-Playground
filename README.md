#Simple Playground
A super simple playground generator for Yeoman

##Installation


- Install [node.js](https://nodejs.org/en/)
- Install [yeoman](http://yeoman.io) using `npm install yeoman -g`
- Install the generator via `npm install generator-simple-playground -g`

![Sample Screenshot](https://raw.githubusercontent.com/xremix/Generator-Simple-Playground/master/Sample-Screenshot.png)

##Usage

- Run the generator in current project folder using `yo simple-playground`
- Enter the filename you want to 

##Content

You get a super simple HTML file where you can start to develop right from scratch.
By default Bootstrap and jQuery is included.

```HTML
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
	<style type="text/css">
		body{
			color:#333333;
		}
	</style>
</head>
<body>
	<div class="container">
		<h1>Hello Playground</h1>
	</div>
	<script type="text/javascript">
		console.log("Here we go again!");
	</script>
	<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</body>
</html>
```