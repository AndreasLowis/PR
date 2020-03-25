var counterA = 0;
var counterB = 0;

function x(string) {
  for ( i = 0; i < string.length; i++ ) {
  	if ( string[i] === 'x' ) {
  	counterA += 1;
  } 
} 
  return counterA;
}

function o(string) {
  for ( i = 0; i < string.length; i++ ) {
  	if ( string[i] === 'o' ) {
  	counterB += 1;
  } 
} 
  return counterB;
}

function xo(string) {
  	if ( counterA = counterB ) {
  	true;
  } else {
  	false;
  }
}

  console.log(xo("xxxooxxxoxxx"));

/*
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

  if ( a = b ) {
  	console.log("true")
  } else {
  	console.log("false")
  }
*/