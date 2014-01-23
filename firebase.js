angular.module("MyTicTacToe", ["firebase"])
	.controller("boardCtrl", function($scope, $firebase) {

	var tictacRef = new Firebase("https://issuessample.firebaseio.com/")
	$scope.arr = $firebase(tictacRef);

	$scope.boxes = ["","","","","","","","",""];
	$scope.turnCounter = 1;
	$scope.boardActive = true;
	$scope.players = [{name: "Charlie", image: "images/heart.jpg"}, {name: "Lola", image:"images/lola.jpg"}];
	$scope.xTurn = $scope.players[0].image;
	
	$scope.takeTurn = function (i) {
		if ($scope.boxes[i] == "") {
			$scope.boxes[i] = $scope.xTurn;
			if ($scope.boxes[i] == $scope.players[0].image) {
				$scope.xTurn = $scope.players[1].image
			} else {
				$scope.xTurn = $scope.players[0].image
			};
		} else {
			alert('taken!')
		};
		if ($scope.turnCounter >= 5) {
		 	$scope.checkWin();
		};
		$scope.turnCounter++;
	};

	$scope.resetBoard = function() {
		$scope.boxes = ["","","","","","","","",""];
		$scope.winner = "";
	}

	$scope.checkWin = function () {
		$scope.winAry = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
		for (var i = 0; i < 8; i++) {
			if($scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][1]] && $scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][2]] && $scope.boxes[$scope.winAry[i][0]] !== "") {
					$scope.winner = "winner!";
					$scope.boardActive = false;
					resetBoard();
					win = true;
					break;
				}
			// else {
			// 		// alert("im checking winAry position:  "+ i)
			// };
		};
			if(!win == true){
				alert('cats game!');
			}

	}
});
// };

