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
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<style type="text/css">
		body{
			color:#333333;
		}
	</style>
</head>
<body>
	<div class="container">
		<h1 id="title">Hello World</h1>
	</div>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
	<script type="text/javascript">
		"use strict";
		$('#title').html('Hello Playground ' + '<i class="fa fa-globe" aria-hidden="true"></i>');
	</script>
</body>
</html>
```

You can also take a look at the demo file [here](https://github.com/xremix/Generator-Simple-Playground/blob/master/Demo-File.html)