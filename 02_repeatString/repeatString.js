const repeatString = function(str, n) {
    let rslt = '';

    if (n<0) { rslt= 'ERROR'} else {
    for (let i = 0; i<n; i++){
        rslt+=str;
        }
    }
return rslt;
};

// Do not edit below this line
module.exports = repeatString;
