angular.module('agendaTelefonica').controller('agendaContatoCtrl', function ($scope, $routeParams, Contato) {
	console.log('routeParams = ', $routeParams.contatoId);
	$scope.mensagem = {texto: ''};

	if($routeParams.contatoId){
		Contato.get({id: $routeParams.contatoId}, function (contato) {
			$scope.contato = contato;
		}, function (erro) {
			console.log(erro);
		});
	}else{
		$scope.contato =  new Contato();
	}

$scope.salva = function() {
		  $scope.contato.$save()
		  	.then(function() {
		  		$scope.mensagem = {texto: 'Salvo com sucesso'};
		  		// limpa o formulário
		  		$scope.contato = new Contato();
		  	})
		  	.catch(function(erro) {
		  		$scope.mensagem = {texto: 'Não foi possível salvar'};
		  	});
		};	

		Contato.query(function(contatos) {
			$scope.contatos = contatos;
    	});	

});


