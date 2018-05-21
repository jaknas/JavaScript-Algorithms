function allLongestStrings(inputArray) {
	// initialize largest length to the first array item for now
	var largestLength = inputArray[0].length;
	// iterate through all array items
	for (var i = 1; i < inputArray.length; i++) {
		// check if item's length is greater than largestLength
		if (largestLength < inputArray[i].length) {
			// set new largestlength
			largestLength = inputArray[i].length;
		}
	}
	// filter the array with ONLY ELEMENTS which length is equal to largestLength
	inputArray = inputArray.filter(function(el) {
		return el.length === largestLength;
	});
	// return filtered array
	return inputArray;
}
