function targetTerdekat(arr) {
  // you can only write your code here!
  var jarakx = [];
  var jarako = 0;
  var c = [];
  
  for( i = 0; i < arr.length; i++ ) {
    if( arr[i] === 'x' ) {
      jarakx.push(i);
        }
  }
  // console.log(a);

  for( i = 0; i < arr.length; i++ ) {
    if( arr[i] === 'o' ) {
      jarako =+ [i];
    }
  }
  // console.log(b);

  for( i = 0; i < jarakx.length; i++ ) {
      var d = Math.abs(jarakx[i] - jarako);
      c.push(d);
    } 
    // console.log(c);
  
    // var min = Math.min(...c);
    // if ( min !== Infinity ) {
    //   return min;
    // } else return 0;

    var x = Infinity;
    for( i = 0; i < c.length; i++ ) {
      if( c[i] < x ) {
        x = c[i];
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