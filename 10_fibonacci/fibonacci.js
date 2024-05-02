const fibonacci = function(rank) {
    if (rank<0) return "OOPS";
    //initialize an array with first two Fibonacci numbers
    const f = [0,1];
    //generate the rest of the Fibonacci sequence up to element 'rank'
    for (let i = 2; i <= rank; i++){
        f[i] = f[i-1] + f[i-2];
    }
    //return the number the user is asking for
    return f[rank];
};

// Do not edit below this line
module.exports = fibonacci;
