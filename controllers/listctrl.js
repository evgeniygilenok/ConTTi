var contti = angular.module('contti', []);
	contti.controller('listCtrl', function($scope) {
// taskList data
		$scope.taskList = [
		{
			todoText:'first task', 
			done: false,
			priority: 'low',
			day: 'Today',
			isEditing: false
		},
		{
			todoText: 'second task', 
			done: true,
			priority: 'high',
			day: 'Tomorrow',
			isEditing: false
		},
		{
			todoText: 'third task', 
			done: false,
			priority: 'high',
			day: 'Today',
			isEditing: false
		},
		{
			todoText: 'fourth task', 
			done: true,
			priority: 'low',
			day: 'Tomorrow',
			isEditing: false
		},
		{
			todoText: 'fifth task', 
			done: false,
			priority: 'highest',
			day: 'Today',
			isEditing: false
		},
		{
			todoText: 'sixth task', 
			done: false,
			priority: 'lowest',
			day: 'Tomorrow',
			isEditing: false
		}
		];

// priority data
		// $scope.priorities = [
		// 	{id: '1', name: 'very high'},
		// 	{id: '2', name: 'high'},
		// 	{id: '3', name: 'middle'},
		// 	{id: '4', name: 'low'},
		// 	{id: '5', name: 'very low'}
		// 	];
		// $scope.onPriority = false;
		// $scope.selectedPriority = {id: '3', name: 'middle'};

// days data
		$scope.days = [
			{id: '1', name: 'Inbox'},
			{id: '2', name: 'Today'},
			{id: '3', name: 'Tomorrow'},
			{id: '4', name: 'Next week'},
		];
		$scope.selectedDay = {id: '1', name: 'Inbox'};
// add new task in taskList
		$scope.addNewTask = function(){
					$scope.taskList.unshift({
						todoText:$scope.enterTask, 
						done:false, 
						priority: $scope.selectedPrio,
						day: $scope.selectedGroup,
						isEditing: false
					});
        	$scope.enterTask = "";
        	$scope.selectedPrio = 'middle';
        	$scope.selectedGroup = 'Inbox';
        };
		
		$scope.onDelet = function(x){
			$scope.taskList.splice(x, 1);
		};

		$scope.onCompletedClick = function(task){
					task.done = !task.done;
				};

		$scope.onEdit = function(task){
			task.isEditing = true;
			task.updatedTask = task.todoText;
		};

		$scope.onCansel = function(task) {
			task.isEditing = false;
		};

		$scope.updateTask = function(task) {
			task.todoText = task.updatedTask;
			task.isEditing = false;
		};

// priority
		$scope.priorities = ['highest', 'high', 'middle', 'low', 'lowest'];
		$scope.selectedPrio = 'middle';
		$scope.prioClass = 'middle';
		$scope.dropBoxPrioSelected = function (item) {
      $scope.selectedPrio = item;
      $scope.prioClass = item;
      console.log($scope.prioClass);
    };

// groups
		$scope.groups = ['Inbox', 'Today', 'Tomorrow', 'Next week'];
		$scope.selectedGroup = 'Inbox';
		$scope.dropBoxGroupSelected = function (item) {
      $scope.selectedGroup = item;
    };
		

// add new group
		$scope.addGroup = function(){
			$scope.days.push({id: '5', name: $scope.enterGroup});
			$scope.groups.push($scope.enterGroup);
			$scope.enterGroup = '';
			}

/////////////////////////////

		
				
		
	});

