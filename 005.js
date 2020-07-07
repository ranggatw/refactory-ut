// program yang memiliki dua input berupa tahun. Output dari fungsi tersebut adalah list dari tahun-tahun kabisat diantara dua input tahun tersebut.
// leapYear(1600,2020)

let from = 1600;
let to = 2020;

let i = to - from;
for (; from <= to; from++) {
    if ( (0 === from %4) && (0 != from % 100 ) || (0 == from % 400) ) {
        console.log(from + ' adalah tahun kabisat');
        } else {
        console.log(from + ' bukan tahun kabisat');
    }
}