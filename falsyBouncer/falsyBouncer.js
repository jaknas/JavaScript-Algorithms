function bouncer(arr) {
	// Don't show a false ID to this bouncer.
	var jabko = arr.filter(function(val) {
		if (val) {
			return true;
		}
	});

	return jabko;
}

bouncer([7, "ate", "", false, 9]);
