// program yang dapat melakukan inputan angka tanpa batas menggunakan prompt. Semua inputan tersebut akan dijumlahkan. Tetapi jika inputan adalah =, maka proses akan berakhir dan hasil penjumlahan akan keluar.

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

let angka = 0;
let jawab = 0;

function prompInput(prompt, handler) {
	rl.question(prompt, (input) => {
		if (handler(input) != false) {
			prompInput(prompt, handler);
		} else {
			rl.close();
		}
	});
}

prompInput("Masukkan angka : ", (input) => {
	if (isFinite(input)) {
		angka = Number(input);
		jawab += angka;
		console.log(jawab);
	} else if (input === "=") {
		console.log("Hasil akhir adalah : " + jawab);
		return false;
	} else {
		console.log("Masukkan angka saja");
	}
});
