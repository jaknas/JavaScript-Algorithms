function getIndexToIns(arr, num) {
	// Find my place in this sorted array.
	var sorted = arr.sort(function(a, b) {
		return a > b;
	});
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= num) {
			return arr.indexOf(arr[i]);
		}
	}
	return arr.length;
}
getIndexToIns([40, 60], 50);
