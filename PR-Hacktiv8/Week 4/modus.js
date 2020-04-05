function cariModus(arr) {
  // you can only write your code here!
  var tampung = [];

  for( i = 0; i < arr.length; i++ ) {
    var check = false;
    for( j = 0; j < tampung.length; j++ ) {
      if( arr[i] == tampung[j][0] ){
        tampung[j].push(arr[i]);
        check = true;
      }

    }
    if( check == false ){
      tampung.push([arr[i]]);
    }
  }

  console.log(tampung); // awal
  
  for( i = 0; i < tampung.length; i++ ) {
    for( k = 0; k < tampung.length -1 ; k++ ) {
      if( tampung[k].length < tampung[k+1].length ){
        var temp = tampung[k];
        tampung[k] = tampung[k+1];
        tampung[k+1] = temp;
      }
    }
  }

  console.log(tampung); // sudah di urutkan


  if( tampung[0].length == 1 || tampung.length == 1){
    return "-1"
  } else return(tampung[0][0]);

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1