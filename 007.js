// program untuk membalikkan "semua kata-kata" yang terdapat dalam kalimat.
function reverseString(str) {
	let splitString = str.split("");
	let reverseArray = splitString.reverse();
	let joinArray = reverseArray.join("");
	return joinArray;
}
console.log(reverseString("semua kata kata"));