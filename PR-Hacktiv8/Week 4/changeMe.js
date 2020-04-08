function changeMe(arr) {
  // you can only write your code here!
  var hasil = {};
  

  for( i = 0; i < arr.length; i++ ) {
    var obj = {}
    obj.firstName = arr[i][0];
    obj.lastName = arr[i][1];
    obj.gender = arr[i][2];
    if( arr[i][3] == undefined ){
      obj.age = 'Invalid Birth Year';
    } else obj.age = Math.abs(arr[i][3] - 2020);
    
    hasil[i+1 + ". " + arr[i][0] + " " + arr[i][1]] = obj;
  }
  return hasil;
}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// ""