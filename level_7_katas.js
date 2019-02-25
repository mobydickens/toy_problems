// LEVEL 7
// check if passed in number is -0. New ES2015 feature allows this check with Object.is
// function isNegativeZero(n) {
//   return Object.is(-0, n)
// }

// count how many times the sign changes
// const catchSignChange = arr => {
//   let count = 0;
//   if(arr.length === 0) { 
//     return 0;
//   }
  
//   for(let i = 1; i < arr.length; i++) {
//     let one = Math.sign(arr[i]);
//     let two = Math.sign(arr[i-1]);
  
//     if(  one !== two) {
//       if(one === 0 && two === 1 || one === 1 && two === 0) {
//         continue;
//       } else {
//         count += 1;
//       }
//     } 
//   }
//   return count;
// }

// how many friday the 13th in a given year?
// function unluckyDays(year){
//   let count = 0;
//   for(let month=0; month<12; month++) {
//    let d = new Date(year,month,13);
//    if(d.getDay() === 5) {
//      count ++;
//    }
//   }
//   return count;
// }

// how many squares fit in a rectangle suitcase?
// function fit_in(a, b, m, n) {
//   if(a > m || a > n || b > m || b > n) {
//     return false;
//   } else if ( m >= a + b || n >= a + b) {
//     return true;
//   } else if (m - a < b || n - b < a) {
//     return false;
//   }
//   return true;
// }
// could definitely refactor the function above

// return sum as specified by parameters
// const sequenceSum = (begin, end, step) => {
//   // May the Force be with you
//   let count = 0;
//   if(begin > end) return 0;
//   for(let i = begin; i <= end; i += step) {
//     count += i; 
//   }
//   return count;
// };


var orderedCount = function (text) {
  // Implement me!
  console.log(text);
  let arrayOfArrays = [];
  let myObj = {};
  for(let i = 0; i<text.length; i++) {
    console.log(text[i])
    if(myObj.hasOwnProperty(text[i])) {
      myObj[text[i]] += 1;
    } else {
      myObj[text[i]] = 1;
    }  
  }
  console.log(myObj);
  for(let key in myObj) {
    let array = [];
    array.push(key);
    array.push(myObj[key]);
    arrayOfArrays.push(array);
  }
  console.log(arrayOfArrays);
  return arrayOfArrays;
}

console.log(orderedCount("212"));