var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/agenda-telefonica');

var db = mongoose.connection;

db.on('error', function(err) {
	console.log('Erro de conexao.', err)
});
db.on('open', function() {
	console.log('Conexao aberta.')
});
db.on('connected',function(err) {
	console.log('Conectado')
});
db.on('desconnected', function(err) {
	console.log('Desconecitado.')
});

process.on('SIGINT', function () {
	mongoose.connection.close(function () {
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});

require('../models/index');