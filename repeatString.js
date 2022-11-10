// Repeat a String Repeat a String
function repeatStringNumTimes(strng, numbr) {
  if(numbr < 0) return '';

  let result = '';
  for(let i = 0; i < numbr; i++) {
    result += strng;
  }
  return result;
}
console.log(repeatStringNumTimes('abc', 4));