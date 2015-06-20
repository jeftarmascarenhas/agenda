angular.module('agendaTelefonica').factory('Contato', function ($resource) {
	return $resource('/api/agenda/:id');
})