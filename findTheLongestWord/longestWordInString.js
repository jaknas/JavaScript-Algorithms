function findLongestWord(str) {
	var splited = str.split(" ");
	var maxLength = 0;

	for (var i = 0; i < splited.length; i++) {
		if (splited[i].length > maxLength) {
			maxLength = splited[i].length;
		}
	}

	return maxLength;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
