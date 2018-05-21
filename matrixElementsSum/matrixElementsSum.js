function matrixElementsSum(matrix) {
	//matrix = [[1,1,1,0], [0,5,0,1],[2,1,3,10]]
	//its basically an array with 3 nested arrays inside
	//if matrix[0] has an 0 inside with index x, I need to ignore the matrixes below with the same index (x)
	//need to do a loop through matrixes and check.

	var sumCount = 0;
	var bannedIndex = [];

	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				bannedIndex.push(j);
			} else if (bannedIndex.indexOf(j) === -1) {
				sumCount += matrix[i][j];
			}
		}
	}
	return sumCount;
}
