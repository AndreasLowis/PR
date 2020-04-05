function urutkanAbjad(str) {
  // you can only write your code here!
  


    for( i = 0; i < str.length; i++ ) {
        for( k = 0; k < str.length; k++ ) {
            if( str[k] > str[k+1] ){
                var a = str[k];
                str[k] = str[k+1];
                str[k+1] = a;
            }
        }
    }


    return str;
}


// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'