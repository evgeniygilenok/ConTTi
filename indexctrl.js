var contti = angular.module('contti', ['ngRoute']);
	contti.config(function($routeProvider, $locationProvider) {
			$locationProvider.html5Mode(true);
	    $routeProvider
	    .when("/", {
	        template : '<div>view/main.html</div>'
	    })
	    .when("/ToDoList", {
	        template : '<div>view/todolist.html</div>'
	    })
	    .when("/Economy", {
	        template : "view/economy.html"
	    })
	    .when("/Projects", {
	        template : "view/projects.html"
	    })
	    .when("/Contacts", {
	        template : "view/contacts.html"
	    })
	});

	
		
		
