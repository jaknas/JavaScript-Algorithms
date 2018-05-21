function factorialize(num) {
	var retval = 1;
	for (var i = 2; i <= num; i++) retval = retval * i;
	return retval;
}
factorialize(5);
