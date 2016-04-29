var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://benmier:bluebird@ds021701.mlab.com:21701/heroku_cx9bk3wr');
var models_path = __dirname + '/../models'

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') > 0) {
    	require(models_path + '/' + file);
	}
});