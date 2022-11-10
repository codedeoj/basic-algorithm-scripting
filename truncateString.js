//Truncate a String
function truncateString(myStr, myNum) {

  if(myNum >= myStr.length) {
    return myStr;
  }

  return myStr.slice(0, myNum) + '...';
}
console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11));