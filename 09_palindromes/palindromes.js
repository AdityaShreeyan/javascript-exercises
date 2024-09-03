const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/gi,'');
    let reversedString = '';
    for (let i = cleanString.length - 1; i >= 0; i--){
        reversedString += cleanString.charAt(i);
    }
    return reversedString === cleanString;
};

// Do not edit below this line
module.exports = palindromes;
