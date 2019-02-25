// LEVEL 5 KATAS SOLVED


// Move zeros to the end of the Array, keep all other elements in order
var moveZeros = function (arr) {
  // TODO: Program me
  let zeros = [];
  let nonZeros = [];
   for(let i = 0; i<arr.length; i++) {
     if(arr[i] === 0) {
       zeros.push(arr[i]);
     } else {
       nonZeros.push(arr[i]);
     }
  }
  let newArray = nonZeros.concat(zeros);
  return newArray;
}