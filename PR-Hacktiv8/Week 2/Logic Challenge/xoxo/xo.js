function xo(string) {
var counterA = 0;
var counterB = 0;
  for ( i = 0; i < string.length; i++ ) {
    if ( string[i] === 'x' ) {
    counterA += 1;
  } else if ( string[i] === 'o' ) {
    counterB += 1;
  } 
} 
  console.log(counterA, counterB);

  if ( counterA == counterB ) {
    return true;
  } else {
    return false;
  }

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
