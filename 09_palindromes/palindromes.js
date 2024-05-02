const palindromes = function (str) {
    let simplifiedString = str.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversedString = simplifiedString.split('').reverse().join('');
    return simplifiedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
