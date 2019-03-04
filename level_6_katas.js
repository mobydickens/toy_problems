// multiples of 3 or 5 
function solution(number){
  let numberArray = [];
  for(let i = number; i>0; i -= 1) {
    if(i=== number) {
    continue
    } else if(i % 3 === 0) {
    numberArray.push(i)
    } else if (i% 5 === 0) {
      numberArray.push(i)
    }
  }
  if(numberArray.length > 1) {
    return numberArray.reduce((a,b) => a + b); 
  } else if (numberArray.length === 0) {
    return 0;
  } else {
    return numberArray[0];
  }
}

