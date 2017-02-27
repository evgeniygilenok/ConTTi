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

		$scope.addNew = function(){
					$scope.taskList.push({
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

		$scope.addGroup = function(){
			$scope.days.push({id: '5', name: 'new group'});	
		};
	});

