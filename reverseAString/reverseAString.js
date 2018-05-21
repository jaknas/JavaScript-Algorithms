function reverseString(str) {
  var splited = str.split("");
  str = splited.reverse().join("");
  return str;
}
reverseString("hello");