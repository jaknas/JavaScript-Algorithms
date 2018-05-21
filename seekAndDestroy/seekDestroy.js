function destroyer(arr) {
	// Remove all the values
	var args = Array.prototype.slice.call(arguments);
	var newarr = arr.filter(function(val) {
		console.log(arguments);
		return val !== args[1] && val !== args[2] && val !== args[3];
	});

	return newarr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
