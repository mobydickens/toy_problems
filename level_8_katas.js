// does function contain the word "English". Upper and lower case do not matter when passed in. 
function spEng(sentence){
  if(sentence.toLowerCase().includes('english')) {
    return true;
  } else {
    return false;
  }
}

//does passed in date == today's date?
function isToday(date) {
  let passedIn = new Date(date);
  let today = new Date();
  if(passedIn.setHours(0,0,0,0) == today.setHours(0,0,0,0)) {
    return true;
  } else { 
    return false;
  }
}

//filter out specific geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let keep = [];
  for(let i = 0; i<birds.length; i++) {
    if( birds[i].includes(geese[0])
      || birds[i].includes(geese[1]) 
      || birds[i].includes(geese[2])
      || birds[i].includes(geese[3])
      || birds[i].includes(geese[4]) ) {
        continue
      } else {
        keep.push(birds[i]);
      }
  }
  return keep;
  // return an array containing all of the strings in the input array except those that match strings in geese
};

//FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
function isLockNessMonster(s) {
  if(s.includes("tree fiddy") || s.includes(3.50) || s.includes("three fifty")) {
    return true;
  }
}

// Create a function that finds the integral of the expression passed.
function integrate(coefficient, exponent) {
  let newExponent = exponent + 1;
  let newCo = coefficient / newExponent;
  return newCo + "x^" + newExponent;
}

// Sum a mixed array of strings and numbers
function sumMix(x){
  if(x.length === 1) {
    return Number(x);
  }
  return x.reduce((a,b) => +a + +b);
}


