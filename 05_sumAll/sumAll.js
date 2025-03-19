const sumAll = function (num1, num2) {
   if ((typeof num1 !== 'number' || typeof num2 !== 'number') ||
      (num1 <= 0 || num2 <= 0) ||
      (!Number.isInteger(num1) || !Number.isInteger(num2))) {
      return "ERROR"
   } else {
      if (num1 > num2) {
         let smallNumber = num2;
         let largeNumber = num1;
         return calculate(smallNumber, largeNumber);
      } else {
         let smallNumber = num1;
         let largeNumber = num2;
         return calculate(smallNumber, largeNumber);
      }
   }
};

const calculate = function (num1, num2) {
   let sum = num1;
   let i = num1 + 1;
   while (i <= num2) {
      sum += i;
      i++;
   }
   return sum;
}

// Do not edit below this line
module.exports = sumAll;
