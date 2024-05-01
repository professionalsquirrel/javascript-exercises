const repeatString = function(str, n) {
    if (n<0) { return 'ERROR' } 
    let rslt = '';
    for (let i = 0; i<n; i++){
        rslt+=str;
        }
return rslt;
};

// Do not edit below this line
module.exports = repeatString;
