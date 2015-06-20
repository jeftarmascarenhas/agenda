angular.module('agendaTelefonica').controller('agendaContatosCtrl', function ($scope, Contato) {
	$scope.app = 'Agenda Telefonica';

	$scope.contatos = [];

	$scope.menssage = '';

	function buscaContato() {
		Contato.query(
			function (contatos) {
				$scope.contatos = contatos;
			},

			function (error) {
				$scope.menssage ={
					text: 'Não foi possível encontrar o contato'
				};
				console.log(error)
			}			


		);
	}

	buscaContato();

	$scope.remove = function (contato) {
		Contato.delete({id: contato._id},
		buscaContato,
		function (erro) {
				console.log(error);
		});
	}

});