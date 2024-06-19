const reverseString = function(string) {
    let reverseString = string.split("").reduce((acc,char) => char + acc,""); 
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
