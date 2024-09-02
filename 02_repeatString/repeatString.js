const repeatString = function(string, num) {
    let sameString = '';
    for (i = 0; i<num; i++){
        sameString +=`${string}`;
    }
    return sameString;
}
repeatString('hey',3);
// Do not edit below this line
module.exports = repeatString;
