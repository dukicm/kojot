var kojotApp = angular.module("kojotApp", ["ngRoute"])
.config(function($routeProvider){
	$routeProvider
		.when("/",{
			templateUrl : "views/rostilj-na-porcije.html"
		})
		.when("/rostilj-na-porcije",{
			templateUrl : "views/rostilj-na-porcije.html"
		})
		.when("/rostilj-na-kilo",{
			templateUrl : "views/rostilj-na-kilo.html"
		})
		.when("/gladni-kojot",{
			templateUrl : "views/gladni-kojot.html"
		})
		.when("/dostava",{
			templateUrl : "views/dostava.html"
		})
		.when("/kontakt",{
			templateUrl : "views/kontakt.html"
		})
		.when("/onama",{
			templateUrl : "views/onama.html"
		})
});



