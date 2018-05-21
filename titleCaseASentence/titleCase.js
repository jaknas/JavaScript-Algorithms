function titleCase(str) {
	var array = str.split(" ");
	for (var i = 0; i < array.length; i++) {
		array[i] =
			array[i]
				.toLowerCase()
				.charAt(0)
				.toUpperCase() + array[i].toLowerCase().slice(1);
		str = array.join(" ");
	}
	return str;
}

titleCase("I'm a little tea pot");
