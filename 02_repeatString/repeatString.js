const repeatString = function(string, num) {
    let sameString = '';
    for (i = 0; i<num; i++){
        sameString +=`${string}`;
    }
    if (num<0){
        return 'ERROR'
    }
    else{
    return sameString;
    }
}
// Do not edit below this line
module.exports = repeatString;
