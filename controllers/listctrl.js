var tdApp = angular.module('todoApp', []);
	tdApp.controller('listCtrl', function($scope) {
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