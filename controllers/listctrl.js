var contti = angular.module('contti', []);
	contti.controller('listCtrl', function($scope) {
// taskList data
		$scope.taskList = [
		{
			todoText:'first task', 
			done: false,
			priority: 'low',
			day: 'Today'
		},
		{
			todoText: 'second task', 
			done: true,
			priority: 'high',
			day: 'Tomorrow'
		},
		{
			todoText: 'third task', 
			done: false,
			priority: 'high',
			day: 'Today'
		},
		{
			todoText: 'fourth task', 
			done: true,
			priority: 'low',
			day: 'Tomorrow'
		},
		{
			todoText: 'fifth task', 
			done: false,
			priority: 'very high',
			day: 'Today'
		},
		{
			todoText: 'sixth task', 
			done: false,
			priority: 'very low',
			day: 'Tomorrow'
		}
		];

// priority data
		$scope.priorities = [
			{id: '1', name: 'very high'},
			{id: '2', name: 'high'},
			{id: '3', name: 'middle'},
			{id: '4', name: 'low'},
			{id: '5', name: 'very low'}
			];
		$scope.selectedPriority = {id: '3', name: 'middle'};

// days data
		$scope.days = [
			{id: '1', name: 'Inbox'},
			{id: '2', name: 'Today'},
			{id: '3', name: 'Tomorrow'},
			{id: '4', name: 'Next week'},
		];
		$scope.selectedDay = {id: '1', name: 'Inbox'};
// add new task in taskList
		$scope.addNew = function(){
					$scope.taskList.unshift({
						todoText:$scope.enterTask, 
						done:false, 
						priority: $scope.selectedPriority.name,
						day: $scope.selectedDay.name
					});
        	$scope.enterTask = "";
        };
		
		$scope.remove = function(x){
			$scope.taskList.splice(x, 1);
		};

// add new group
		$scope.addGroup = function(){
			$scope.days.push({id: '5', name: $scope.enterGroup});
			$scope.enterGroup = '';
			}

/////////////////////////////

		$scope.onCompletedClick = function(task){
			task.done = !task.done;
		};
				
		
	});

