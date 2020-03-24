var a = "";

for (row = 0; row <= 5; row++) {
	for (j = 0; j<1; j++) {
	a += "*";
}

a +="\n"
}

console.log( a );

console.log( "\n" );

var b = "";

for ( row = 0; row <=5; row++ ) {
	for (k = 0; k < 5; k++ ) {
		b += "*";
	}
	 b += '\n'
}

console.log( b );

console.log( "\n" );

var c = "";

for ( row = 0; row <= 5; row++) {
	for ( l = 0; l <= row; l++ ) {
		c += "*";
	}
	c += '\n'
}

console.log( c );
