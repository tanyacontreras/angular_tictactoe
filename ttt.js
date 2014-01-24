angular.module('TicTacToe', ['firebase'])
	.controller('TicTacToeCtrl', function($scope, $firebase) {
		var numRows = 6;
		var numColumns = 7;
		var ticTacRef = new Firebase(''); //https://intense-fire-XXXX.firebaseio.com
		$scope.fbRoot = $firebase(ticTacRef);

		$scope.fbRoot.$on('loaded', function() {
			var IDs = $scope.fbRoot.$getIndex();
			if(IDs.length == 0) {
				$scope.fbRoot.$add({ 
					board: [],
					xTurn: true
				});
				$scope.fbRoot.$on('change', function() {
					IDs = $scope.fbRoot.$getIndex();
					$scope.obj = $scope.fbRoot.$child(IDs[0]);
				});
			} else {
				$scope.obj = $scope.fbRoot.$child(IDs[0]);
			}
		}

		$scope.makeMove = function(i, j) {  // or function(i) if using one dimensional board
		}
	}