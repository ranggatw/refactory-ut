// Masukkan nilai pada variabel di bawah
let nilai= 90;

// 
function grade() {
	if (nilai >= 90 && nilai <= 100) {
		hasil = "grade Anda : A";
	} else if (nilai >= 80 && nilai <= 89) {
		hasil = "grade Anda : B";
	} else if (nilai >= 70 && nilai <= 79) {
		hasil = "grade Anda : C";
	} else if (nilai >= 60 && nilai <= 69) {
		hasil = "grade Anda : D";
	} else if(nilai <60 >=0){
		hasil = "grade Anda : E";
    } else {
        hasil = 'Masukkan nilai antara 0 sampai 100'
    }
	return hasil;
}

console.log(grade())