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
// actions with task
		$scope.onDelete = function(x){
			if (confirm("Are you sure?")) {
				$scope.taskList.splice(x, 1);
			}
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
		$scope.dropBoxPrioSelected = function (item) {
      $scope.selectedPrio = item;
    };

// groups
		$scope.groups = ['Inbox', 'Today', 'Tomorrow', 'Next week'];
		$scope.selectedGroup = 'Inbox';
		$scope.dropBoxGroupSelected = function (item) {
      $scope.selectedGroup = item;
    };
		

// add new group
		$scope.addGroup = function(){
			$scope.groups.push($scope.enterGroup);
			$scope.enterGroup = '';
			}
// filtering
		// $scope.filteringButton = function(filter) {
		// 	$scope.filterByGroup = filter;
		// }

	});

contti.filter('taskFilter', function(){
	return function(taskList){
			var list = [];
			for (i=0; i<taskList.length; i++) {
				if (taskList[i].done) {
					list += taskList[i];
					console.log(i);

				} 
			}
			// $scope.filteringButton = function(filter) {
			// $scope.filterByGroup = filter;
			// console.log($scope.filterByGroup);
		// }
		return list;

	};
});