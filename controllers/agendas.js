var mongoose = require('mongoose')
 ,  Agenda = mongoose.model('Agenda')
 ,  msn = ''
 ; 

 module.exports = {
 	create: function (req, res) {
		var dados = req.body
		  , model = new Agenda(dados)
		  ;

		model.save(function (err, data) {
			if(err){
				console.log('Erro ', err);
				msn = 'Erro: ' + err;
			}else{
				console.log('Contato inserida ', data);
				msn = data;
		}
		
		res.json(msn);

	});  
 	},

 	retrieve: function (req, res) {
 		var query = {};
 		Agenda.find(query, function (err, data) {
 			if (err) {
 				console.log('Erro ', err);
 				msn = 'Erro ' + err;
 			} else{
 				console.log('Listagem: ', data);
 				msn = data;
 			}
 			res.json(msn);
 		});
 		
 	},

 	findOne: function (req, res) {
 		var query = {_id: req.params.id};
 		Agenda.findOne(query, function (err, data) {
 			if (err) {
 				console.log('Erro ', err);
 			} else{
 				console.log('Listagem do contato: ', data);
 				msn = data;
 			}
 			res.json(msn);
 		});
 	},

  	update: function (req, res) {
		var query = { _id: req.params.id };

		var mod = req.body;

		var optional = {
			upsert: false,
			multi: true
		};

		Agenda.update(query, mod, function (err, data) {
			if(err){
				console.log('Erro ', err);
			}else{
				console.log('Agenda atualizada com sucesso: ', data);
					msn = data;
			}

			res.json(msn);
		});  		
  	},

 	delete: function (req, res) {
 		var query = {_id: req.params.id};

 		Agenda.remove(query, function (err, data) {
 			if (err) {
 				console.log('Erro', err);
 			} else{
 				console.log('Contato deletado com sucesso, quantidade', data);
 				msn = data;
 			}

 			res.json(msn);
 		});
 	},

 	salvaContato: function(req, res){
 		var _id = req.body._id;
 		if (_id) {
 			Agenda.findByIdAndUpdate(_id, req.body).exec()
 			.then(function (contato) {
 				res.json(contato);
 			}, function  (erro) {
 				console.error(erro);
 				res.status(500).json(erro);
 			});
 		} else{
 			Agenda.create(req.body)
 			.then(
 				function (contato) {
 					res.status(201).json(contato);
 				},
 				function (erro) {
 					console.log(erro);
 					res.status(500).json(erro);
 				}
 			);
 		};
 	}
 }