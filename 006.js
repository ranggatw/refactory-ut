// Buatlah program rekursif. Anda bebas menentukan input dan output dari fungsi tersebut, tetapi harus rekursif.

function sum(num){
    if (num === 0) {
        return 0;
    } else {
        return num + sum(--num)
    }
}
console.log(sum(4));