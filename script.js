function boardCtrl($scope) {
	$scope.boxes = ["","","","","","","","",""];
	$scope.turnCounter = 0;
	$scope.players = [{name: "Lola", image:"images/lola.jpg"}, {name: "Charlie", image: "images/charlie.jpg"}];
	$scope.xTurn = $scope.players[0].image;
	$scope.win = false;
	gameOver = false;
	$scope.message = "Ready...Go!";
	
	$scope.takeTurn = function (i) {
		document.getElementById('reset').style.display='inline';
		if ($scope.boxes[i] == "" && gameOver == false) {
			$scope.boxes[i] = $scope.xTurn;
			if ($scope.boxes[i] == $scope.players[0].image) {
				$scope.xTurn = $scope.players[1].image
				$scope.message = "Charlie's Turn"
			} else {
				$scope.xTurn = $scope.players[0].image
				$scope.message = "Lola's Turn"
			}
			$scope.turnCounter++;
		} else {
			$scope.message = "Oops! Already Taken!";
		};
		if ($scope.turnCounter >= 4) {
		 	$scope.checkWin();
		};
		console.log($scope.boxes);
	};

	$scope.resetBoard = function() {
		$scope.boxes = ["","","","","","","","",""];
		$scope.turnCounter = 0;
		$scope.win = false;
		gameOver = false;
		$scope.message = "Ready...Go!";
		document.getElementById('reset').style.display='none';
	};

	$scope.checkWin = function () {
		$scope.winAry = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
		for (var i = 0; i < 8; i++) {
			if ($scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][1]] && $scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][2]] && $scope.boxes[$scope.winAry[i][0]] != "") {
				$scope.message = $scope.players[0].name + ' wins!';
				$scope.win = true;
				gameOver = true;
				break;
				}
		};
			if (!$scope.win && $scope.turnCounter >= 9){
				$scope.message = "Cat's Game!";
				gameOver = true;
			};
	};
};


//what needs to be stored in the cloud?
//line 15-16, board and xturn

//read lola or charlie for message
//highlight winning row
//answer..look for even and odd. 

