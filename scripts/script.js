function mainCtrl($scope){
	$scope.gameBoard = [['','',''],['','',''],['','','']];
	$scope.currentPlayer = 'Lola'; 
	$scope.resetBoard = function() {
		$scope.gameBoard = [['','',''],['','',''],['','','']];		
	}
	$scope.playerTurn = function(row, col) {
		if(!$scope.gameBoard[row][col])
			{
				$scope.gameBoard[row][col] = $scope.currentPlayer;
				$scope.currentPlayer = ($scope.currentPlayer == 'Lola' ? 'Charlie' : 'Lola');
			}	
	};
};


