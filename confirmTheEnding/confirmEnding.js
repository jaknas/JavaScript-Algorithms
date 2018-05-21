function confirmEnding(str, target) {
	// "Never give up and good luck will find you."
	// -- Falcor
	// if str.substr(last-1, last) == target, then ending confirms
	if (target.length === 1) {
		if (str.substring(str.length - 1) === target) {
			return true;
		} else {
			return false;
		}
	}

	if (str.substr(str.length - target.length) === target) {
		return true;
	} else {
		return false;
	}
	return str;
}
confirmEnding("Bastian", "n");
