angular.module('agendaTelefonica', ['ngRoute','ngResource']).config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/retrieve.html',
		controller: 'agendaContatosCtrl'
	})
	.when('/contato/:contatoId',{
		templateUrl: 'partials/contato.html',
		controller: 'agendaContatoCtrl'
	})
	.when('/contato',{
		templateUrl: 'partials/contato.html',
		controller: 'agendaContatoCtrl'
	});
});


// Height dinamic nav
// var alturaDinamica = function (obj, sty) {
// 	var altura = window.getComputedStyle(obj).height;
// 	sty.setAttribute('style','min-height:' + altura);
// 	return sty;
// }

// var body = document.getElementsByTagName('body')[0]
//   , nav = document.querySelector('.navbar-static-side')
//   , page = document.querySelector('#page-wrapper')
//   , height = window.getComputedStyle(body).height;
//   ;

// alturaDinamica( body, nav );
// alturaDinamica( body, page );


