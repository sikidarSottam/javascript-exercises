const palindromes = function (abc) {
    let str = abc.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    for (let i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
