// multiples of 3 or 5 
// function solution(number){
//   let numberArray = [];
//   for(let i = number; i>0; i -= 1) {
//     if(i=== number) {
//     continue
//     } else if(i % 3 === 0) {
//     numberArray.push(i)
//     } else if (i% 5 === 0) {
//       numberArray.push(i)
//     }
//   }
//   if(numberArray.length > 1) {
//     return numberArray.reduce((a,b) => a + b); 
//   } else if (numberArray.length === 0) {
//     return 0;
//   } else {
//     return numberArray[0];
//   }
// }

// // Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// function persistence(num) {
//   let howMany = 0
//   let number = num;
//   while(number > 9) {
//     howMany += 1;
//     let split = number.toString().split("");
//     number = split.reduce((a,b) => a * b);
//   }
//   return howMany;
// }

// fibonnacci
// function fib(n){
//   let arr = [0, 1];
//   for (let i = 2; i < n + 1; i++){
//     arr.push(arr[i - 2] + arr[i -1])
//   }
//  return arr[n]
// }
// console.log(fib(4));

// Prime means no positive divisors other than 1 and itself
function isPrime(value) {
  for(var i = 2; i < value; i++) {
      if(value % i === 0) {
        return false;
      }
  }
  return true;
}
console.log(isPrime(3));