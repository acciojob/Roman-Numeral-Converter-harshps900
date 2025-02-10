function convertToRoman(num) {
    if (num < 1 || num > 100000) return "Out of range";

   const numeralPairs = [
    [1000, "M"],
    [900,  "CM"],
    [500,  "D"],
    [400,  "CD"],
    [100,  "C"],
    [90,   "XC"],
    [50,   "L"],
    [40,   "XL"],
    [10,   "X"],
    [9,    "IX"],
    [5,    "V"],
    [4,    "IV"],
    [1,    "I"]
  ];

    let result = '';

    for (let [value, symbol] of numeralPairs) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Test cases

// Do not edit below this line
module.exports = convertToRoman;
