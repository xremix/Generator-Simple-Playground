# Simple Playground
A super simple playground generator for Yeoman

## Installation


- Install [node.js](https://nodejs.org/en/)
- Install [yeoman](http://yeoman.io) using `npm install yeoman -g`
- Install the generator via `npm install generator-simple-playground -g`

![Sample Screenshot](https://raw.githubusercontent.com/xremix/Generator-Simple-Playground/master/Sample-Screenshot.png)

### Install local

To install the generator local (for development, etc.) do the following steps:

- Clone `git clone https://github.com/xremix/Generator-Simple-Playground.git`
- Change to folder `cd Generator-Simple-Playground`
- Link NPM repository `npm link`

## Usage

- Run the generator in current project folder using `yo simple-playground`
- Enter a filename for your HTML file

## Content

You get a super simple HTML file where you can start to develop right from scratch.
By default Bootstrap, FontAwesome and jQuery is included.

```HTML
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
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
	<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript">
		console.log("Here we go again!");
	</script>
</body>
</html>
```