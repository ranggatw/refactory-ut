function palindromeCheck (str) {
    let tidak = "Bukan merupakan kalimat Palindrome.";
    let iya = "Merupakan kalimat Palindrome.";

    let pstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    let ccount = 0;

        if (pstr==="") {
            console.log("Tidak ditemukan apa apa!");
            return false;
        }

        if ((pstr.length) % 2 === 0) {
            ccount = (pstr.length) / 2;
        } else {
            if (pstr.length === 1) {
                console.log(iya);
                return true;
            } else {
                ccount = (pstr.length - 1) / 2;
            }
        }

        for (let i = 0; i < ccount; i++) {
            if (pstr[i] != pstr.slice(-1-i)[0]) {
                console.log(tidak);
                return false;
            }
        }
    console.log(iya);
    return true;
}

palindromeCheck("Cigar? Toss it in a can. It is so tragic") // output true
palindromeCheck("I did, did I?") // output true
palindromeCheck("Red rum, sir, is murder") // output true
palindromeCheck("Eva, can I see bees in a cave?") // output true
palindromeCheck("Hello World") // output false