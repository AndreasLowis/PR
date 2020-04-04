function targetTerdekat(arr) {
  // you can only write your code here!
  var jarakx = [];
  var jarako = 0;
  var xkurango = [];
  
  for( i = 0; i < arr.length; i++ ) {
    if( arr[i] === 'x' ) {
      jarakx.push(i);
        }
  }
 

  for( i = 0; i < arr.length; i++ ) {
    if( arr[i] === 'o' ) {
      jarako =+ [i];
    }
  }

  // console.log(jarakx);
  // console.log(jarako);

  for( i = 0; i < jarakx.length; i++ ) {
      var d = Math.abs(jarakx[i] - jarako);
      xkurango.push(d);
    } 

    // console.log(xkurango);
  
    // var min = Math.min(...xkurango);
    // if ( min !== Infinity ) {
    //   return min;
    // } else return 0;

    var x = Infinity;
    for( i = 0; i < xkurango.length; i++ ) {
      if( xkurango[i] < x ) {
        x = xkurango[i];
      } 
    }
    
    if ( x == Infinity ) {
      return 0;
    }

    return x;

    

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2