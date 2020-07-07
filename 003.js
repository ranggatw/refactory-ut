let arr = []
let total = 0;

for ( let i = 1; i <=100; i++) {
    arr.push(Math.floor(Math.random() *100 ) + 1)
}

for (let j = 0; j < arr.length; j++) {
    total += arr[j];
}

let rata = total/arr.length;

console.log(arr)
console.log('Nilai maksimal : ' + Math.max(...arr));
console.log('Nilai minimum : ' + Math.min(...arr));
console.log('Nilai rata-rata : ' + rata);