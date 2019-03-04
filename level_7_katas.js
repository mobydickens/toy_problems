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

// Count the number of times a letter is used and return IN ORDER
var orderedCount = function (text) {
  let arrayOfArrays = [];
  let myObj = {};
  for(let i = 0; i<text.length; i++) {
    if(myObj.hasOwnProperty(text[i])) {
      myObj[text[i]] += 1;
    } else {
      myObj[text[i]] = 1;
    } 
  }
  for(let i = 0; i<text.length; i++) {
    for(let key in myObj) {
      let array = [];
      if(key === text[i]) {
        array.push(key);
        array.push(myObj[key]);
        arrayOfArrays.push(array);
      }
    }
  }
  let unique = [];
  let usedLetters = [];
  
  for(let i = 0; i<arrayOfArrays.length;i++) {
    if(usedLetters.includes(arrayOfArrays[i][0])) {
      continue;
    } else {
      unique.push(arrayOfArrays[i]);
    }
    usedLetters.push(arrayOfArrays[i][0]);
  }
  return unique;
}

// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" <- example
function accum(s) {
	let split = s.split("");
  let newArray = split.map((letter, i) => {
    let stringArray = [];
    stringArray.push(letter.toUpperCase());
    if(i === 0) {
      return stringArray.join("");;
    } else {
      for(let iterations = 0; iterations < i ; iterations ++ ) {
        stringArray.push(letter.toLowerCase());
      }
      return stringArray.join("");;
    }
  });
    return newArray.join("-");
}

// Find min and max
function highAndLow(numbers){
  let arrNums = numbers.split(" ");
  let min = Math.min(...arrNums);
  let max = Math.max(...arrNums);
  let arr = [];
  arr.push(max,min);
  return arr.join(" ");
}

// return shortest word in sentence (no empty strings)
function findShort(s){
  let string = s.split(" ").map(word => word.length);
  return Math.min(...string);
}

// sort into descending order
function descendingOrder(number) {
  return Number(number.toString().split('').sort((a,b) => b-a).join(''));
}

// merge two arrays
function mergeArrays(a, b) {
  let mergedArray = [];
  if(a.length > b.length) {
    for(let i = 0; i<a.length; i++) {
      if(a[i] !== undefined) {
      mergedArray.push(a[i]);
      }
      if(b[i] !== undefined) {
        mergedArray.push(b[i])
      }
    }
  } else {
    for(let i = 0; i<b.length; i++) {
      if(a[i] !== undefined) {
      mergedArray.push(a[i]);
      }
      if(b[i] !== undefined) {
        mergedArray.push(b[i])
      }
    }
  }
  return mergedArray;
}

// square root
var isSquare = function(n){
  if(n%Math.sqrt(n)===0 || n === 0) return true
  else return false;
}