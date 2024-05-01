const sumAll = function(n,m) {
    if (!Number.isInteger(n) || !Number.isInteger(m)) return "ERROR";
    if (n<0 || m<0) return "ERROR";
    if (n > m) [n, m] = [m, n];
    let sum = 0;
    for (let i=n; i<=m; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
