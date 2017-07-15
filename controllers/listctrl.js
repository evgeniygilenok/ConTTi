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
			done: false,
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
			done: false,
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
		$scope.addNewTask = function() {
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
		$scope.listOfCompliteTaskDelete = function(x, y) {
			for (var i=0; i<y.length; i++) {
				if (x.todoText === y[i].todoText) {
					y.splice(i, 1);
				}
			}
		}
		$scope.onDelete = function(task, x) {
			if (confirm("Are you sure?")) {
				$scope.taskList.splice(x, 1);
				$scope.listOfCompliteTaskDelete(task, $scope.listOfCompliteTask);
			}
		};

		$scope.listOfCompliteTask = [];
		$scope.onCompletedClick = function(task) {
			if (!task.done) {
				task.done = !task.done;
				$scope.listOfCompliteTask.push(task);
			} else if (task.done) {
				task.done = !task.done;
				$scope.listOfCompliteTaskDelete(task, $scope.listOfCompliteTask);
			}
		};

		$scope.onEdit = function(task) {
			task.isEditing = true;
			task.updatedTask = task.todoText;
			$scope.selectedPrioUpdate = task.priority;
		};

		$scope.onCansel = function(task) {
			task.isEditing = false;
		};

		$scope.updateTask = function(task) {
			task.todoText = task.updatedTask;
			task.priority = $scope.selectedPrioUpdate
			task.isEditing = false;
		};

// priority
		$scope.priorities = ['highest', 'high', 'middle', 'low', 'lowest'];
		$scope.selectedPrio = 'middle';
		$scope.dropBoxPrioSelected = function (item) {
      		$scope.selectedPrio = item;
    	};
    $scope.dropBoxPrioSelectedUpdate = function (item) {
    	$scope.selectedPrioUpdate = item;
    };

// groups
		$scope.groups = ['Inbox', 'Today', 'Tomorrow', 'Next week'];
		$scope.selectedGroup = 'Inbox';
		$scope.dropBoxGroupSelected = function (item) {
      		$scope.selectedGroup = item;
    	};
// add new group
		$scope.addGroup = function() {
			$scope.groups.push($scope.enterGroup);
			$scope.enterGroup = '';
		}
// filtering
		$scope.ffilter = 'all';
		$scope.onComplitedTasks = function() {
			$scope.ffilter = 'complited';
		}
		$scope.onAllTasks = function() {
			$scope.ffilter = 'all';
		}
		$scope.notComplited = function() {
			$scope.ffilter = 'notcomplited';
		}
		$scope.filteringButton = function(x) {
			$scope.ffilter = x;
		}

	


	});

contti.filter('taskFilter', function(){
	return function(taskList, ffilter){
		var list = [];
		switch(ffilter) {
			case 'complited':
				for (var i=0; i<taskList.length; i++) {
					if (taskList[i].done) {
						list.push(taskList[i]);
					} 
				}
				break;
			case 'notcomplited':
				for (var i=0; i<taskList.length; i++) {
					if (!taskList[i].done) {
						list.push(taskList[i]);
					} 
				}
				break;
			case 'all':
				for (i=0; i<taskList.length; i++) {
					list.push(taskList[i]);
				}
				break;
			default :
					for (var i=0; i<taskList.length; i++) {
						if (taskList[i].day === ffilter) {
							list.push(taskList[i]);
						} 
					}
			break;
		}
		return list;
	};
});
// smthn