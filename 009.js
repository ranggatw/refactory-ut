// program untuk menghilangkan data ganda dari JSON berikut ini

let data = [
	"Jakarta",
	"Aceh",
	"Malang",
	"Medan",
	"Bontang",
	"Jogja",
	"Jakarta",
	"Bandung",
	"Malang",
	"Solo",
	"Palembang",
	"Bandung",
];

let del = [];
let arr = data.filter(function(e) {

    if (del.indexOf(e) == -1) {
        del.push(e);
        return true;
    }
    return false;
});

console.log(arr)