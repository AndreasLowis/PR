var counterA = 0;
var counterB = 0;

function xo(string) {
  for ( i = 0; i < string.length; i++ ) {
  	if ( string[i] === 'x' ) {
  	counterA += 1;
  } else if ( string[i] === 'o' ) {
  	counterB += 1;
  } 
} 

function xx (counterA, counterB) {
	if ( counterA > counterB) {
		true;
	} else {
		false;
	}

  return xx;
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