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

		contti.controller('indexctrl', function($scope) {

		});

		contti.controller('listCtrl', function($scope) {
		$scope.taskList = [
		{
			todoText:'first task', 
			done: false,
			priority: 'middle'
		},
		{
			todoText: 'second task', 
			done: false,
			priority: 'middle'
		},
		{
			todoText: 'third task', 
			done: false,
			priority: 'middle'
		}
		];

		$scope.addNew = function(){
			$scope.taskList.push({todoText:$scope.enterTask, done:false});
        	$scope.enterTask = "";
        }
		
		$scope.remove = function(x){
			$scope.taskList.splice(x, 1);
		
		}
	});