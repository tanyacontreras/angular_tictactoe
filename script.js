function boardCtrl($scope) {
	$scope.boxes = ["","","","","","","","",""];
	$scope.turnCounter = 0;
	$scope.players = [{name: "Charlie", image: "images/charlie.jpg"}, {name: "Lola", image:"images/lola.jpg"}];
	$scope.xTurn = $scope.players[0].image;
	$scope.win = false;
	
	$scope.takeTurn = function (i) {
		if ($scope.boxes[i] == "") {
			$scope.boxes[i] = $scope.xTurn;
			if ($scope.boxes[i] == $scope.players[0].image) {
				$scope.xTurn = $scope.players[1].image
			} else {
				$scope.xTurn = $scope.players[0].image
			}
			$scope.turnCounter++;
		} else {
			$scope.message = "Taken!";
		};
		if ($scope.turnCounter >= 4) {
		 	$scope.checkWin();
		};
	};

	$scope.resetBoard = function() {
		$scope.boxes = ["","","","","","","","",""];
		$scope.message = "";
		$scope.win = false;
		$scope.turnCounter = 0;
	};

	$scope.checkWin = function () {
		$scope.winAry = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
		for (var i = 0; i < 8; i++) {
			if ($scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][1]] && $scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][2]] && $scope.boxes[$scope.winAry[i][0]] != "") {
				alert('do something!');
				$scope.message = "Winner!";
				$scope.win = true;
				break;
				}
		};
			if (!$scope.win && $scope.turnCounter >= 9){
				$scope.message = "Cat's Game!";
			};
	};
};

