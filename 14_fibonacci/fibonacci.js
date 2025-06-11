const fibonacci = function (num) {
   let i;
   let number = Number(num);
   let fib = [0, 1];

   if (number < 0) {
      return 'OOPS'
   } else {
      for (i = 2; i <= number; i++) {
         fib[i] = fib[i - 2] + fib[i - 1];
      }
      return fib[number];
   }
};

fibonacci(-10);
// Do not edit below this line
module.exports = fibonacci;
