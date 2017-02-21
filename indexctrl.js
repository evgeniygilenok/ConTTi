var contti = angular.module('contti', ["ngRoute"]);
	contti.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "view/main.html"
	    })
	    .when("/todolist", {
	        templateUrl : "view/todolist.html",
	        controller : "listctrl"
	    })
	    .when("/economy", {
	        templateUrl : "view/economy.html"
	    })
	    .when("/projects", {
	        templateUrl : "view/projects.html"
	    })
	    .when("/contacts", {
	        templateUrl : "view/contacts.html"
	    })
	    .otherwise({
	    		templateUrl : "main.html"
	    });
	});

	
		
		
