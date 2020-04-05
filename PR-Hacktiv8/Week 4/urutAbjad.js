function urutkanAbjad(str) {
  // you can only write your code here!
  
  var kamus = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10],
    ['k', 11],
    ['l', 12],
    ['m', 13],
    ['n', 14],
    ['o', 15],
    ['p', 16],
    ['q', 17],
    ['r', 18],
    ['s', 19],
    ['t', 20],
    ['u', 21],
    ['v', 22],
    ['w', 23],
    ['x', 24],
    ['y', 25],
    ['z', 26]    
  ];

  var hasil = [];

    for( i = 0; i < str.length; i++ ) {
        for( j = 0; j < kamus.length; j++ ){
            if( str[i] == kamus[j][0] ){
               hasil.push(kamus[j][1]); 
            }
        }
        
    }

    // console.log(hasil);

    for( i = 0; i < hasil.length; i++ ) {
        for( j = 0; j < hasil.length; j++ ){
            if( hasil[j] > hasil[j+1] ){
                var temp = hasil[j];
                hasil [j] = hasil[j+1];
                hasil[j+1] = temp;
            }
        }
    }
    
    // console.log(hasil);

    var tampung = '';

    for( i = 0; i < hasil.length; i++ ) {
        for( j = 0; j < kamus.length; j++ ){
            if( hasil[i] == kamus[j][1] ){
                tampung += kamus[j][0];
            }
        }
    }

    return tampung;
}

//cara 2

function urutkanAbjad(str) {
    // you can only write your code here!
    var array = [];

    for( i = 0; i < str.length; i++ ) {
        array.push(str[i]);
    }

    // console.log(array);

      for( i = 0; i < array.length; i++ ) {
          for( j = 0; j < array.length; j++ ){
              if( array[j] > array[j+1] ){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
              }
          }
      }
      return array.join('');
  }

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'