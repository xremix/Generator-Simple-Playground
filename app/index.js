var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	constructor: function(){
		//Calling super constructor
		generators.Base.apply(this, arguments);
	},
	promting: function(){
		var done = this.async();
		this.projectVersion = "0.0.1";

		var promts = [{
			type    : 'input',
			name    : 'sourceFilename',
			message : 'Filename',
			default : 'index.html'
		}];

		this.prompt(promts, function (answers) {
			this.sourceFilename = answers.sourceFilename;
			done();
		}.bind(this));
	},
	writing: function () {
		this.template('_index.html', this.sourceFilename, this);
	}
});