const sumAll = function(first, second) {
   let start = first < second ? first : second;
   let end = first > second ? first : second;
   let sum = 0

   if (typeof first !== "number" || typeof second !== "number" || first < 0 || second < 0) {
    return "ERROR";
   }

   for(i = start; i <= end; i++) {
    sum += i;
   }

   return sum;
};

// Do not edit below this line
module.exports = sumAll;


// write the first number at top, second number at bottom
// fill in all numbers in between and sum them all