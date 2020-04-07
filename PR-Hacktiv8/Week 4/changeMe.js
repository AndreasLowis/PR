function changeMe(arr) {
  // you can only write your code here!
  var array = {};
  
  var nol = 1;

  for( i = 0; i < arr.length; i++ ) {
    var obj = {}


    obj.firstName = arr[i][0];
    obj.lastName = arr[i][1];
    obj.gender = arr[i][2];
    obj.age = arr[i][3];
    
    // console.log(obj);

    array[i+1 + ". " + arr[i][0] + " " + arr[i][1]] = obj;
  }
  return array;
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