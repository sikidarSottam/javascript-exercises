const sumAll = function (n1, n2) {


    if ((n1 > 0 && n2 > 0) && typeof n1 === "number" && Number.isInteger(n1) && typeof n2 === "number" && Number.isInteger(n2)) {
        let s = 0;
        if (n1 < n2) {
            for (let x = n1; x <= n2; x++) {
                s += x;
            }
        } else {
            for (let x = n2; x <= n1; x++) {
                s += x;
            }
        }
        return s
    };
    return 'ERROR'
}

// Do not edit below this line
module.exports = sumAll;
