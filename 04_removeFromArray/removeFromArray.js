const removeFromArray = function(a, ...args) {
    return a.filter((x) => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
