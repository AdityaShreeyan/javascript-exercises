const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/gi,'');
    let reverse = '';
    for (let i = cleanString.length - 1; i >= 0; i--){
        reverse += cleanString.charAt(i);
    }
    if (cleanString === reverse){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
