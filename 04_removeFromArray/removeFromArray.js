const removeFromArray = function(array, ...params) {
    
    let removed = array.filter(element => !params.includes(element));
    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
