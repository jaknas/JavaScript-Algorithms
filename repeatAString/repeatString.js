function repeatStringNumTimes(str, num) {
	// repeat after me
	if (num < 0) {
		return "";
	}
	str = str.repeat(num);
	return str;
}

repeatStringNumTimes("abc", 3);
