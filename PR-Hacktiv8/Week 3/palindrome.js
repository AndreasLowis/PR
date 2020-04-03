
function palindrome(kata) {
//   you can only write your code here!

var str = '';

for( i = kata.length - 1; i >= 0; i-- ) {
    str += kata[i];
}

 if( kata === str ) {
     return true;
 } else {
     return false;
 }

// var a = kata.split('').reverse().join("");

// return kata === a; // hasil sdh boolean
// // if( kata === a) {
// //       return true;
// //   } else {
// //       return false;
// //   }

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('mistem')); // false