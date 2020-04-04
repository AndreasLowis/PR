function cariMedian(arr) {
  // you can only write your code here!
  if ( arr.length % 2 != 0 ){
    var a = arr.length;
    var b = Math.floor(a / 2);   
    for( i = 0; i < arr.length; i++ ) {
    }
    return(arr[b]);
  } else if ( arr.length %2 == 0 ) {
      var a = arr.length;
      var b = Math.ceil((a / 2 -1));
      var c = Math.ceil(a / 2);
      for( i = 0; i < arr.length; i++ ) {
        var d = (arr[b] + arr[c]) / 2;
        
      }
      return d;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5