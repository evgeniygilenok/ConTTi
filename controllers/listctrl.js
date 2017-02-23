var contti = angular.module('contti', []);
	contti.controller('listCtrl', function($scope) {
		$scope.taskList = [
		{
			todoText:'first task', 
			done: false,
			priority: 'low',
			day: 'Today'
		},
		{
			todoText: 'second task', 
			done: false,
			priority: 'high',
			day: 'Tomorrow'
		},
		{
			todoText: 'third task', 
			done: false,
			priority: 'middle',
			day: 'Today'
		}
		];

		// $scope.priorities = ['very high', 'high', 'middle', 'low', 'very low'];
		$scope.days = ['Inbox', 'Today', 'Tomorrow', 'Next week'];

		$scope.addNew = function(){
			// add logic for priority
			$scope.taskList.push({todoText:$scope.enterTask, done:false, priority: $scope.selectedPriority});
        	$scope.enterTask = "";
        }
		
		$scope.remove = function(x){
			$scope.taskList.splice(x, 1);
		}

		
	});