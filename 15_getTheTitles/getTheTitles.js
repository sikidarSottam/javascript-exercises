const getTheTitles = function(arr) {
    const ans = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        ans[i] = arr[i].title
    }
    return ans
};

// Do not edit below this line
module.exports = getTheTitles;
