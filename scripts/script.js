function mainCtrl($scope){
	$scope.gameBoard = [['','',''], ['','',''], ['','','']];
	$scope.currentPlayer = 'X'; 
	$scope.playerTurn = function(row, col) {
		if(!scope.gameBoard[row][col])
			$scope.gameBoard[][] = currentPlayer
			cp = currentPlayer == 'x', ? 'o' : 'x' ; 
	}
}