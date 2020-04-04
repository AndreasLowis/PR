function ubahHuruf(kata) {
  // you can only write your code here!
  var tampung = [];
  var kamus = "abcdefghijklmnopqrstuvwxyz";
  var hasil = [];

  for( i = 0; i < kata.length; i++ ) {
    tampung.push(kata[i]);
  }

  for( i = 0; i < tampung.length; i++ ) {
    for( j = 0; j < kamus.length; j++ ) {
      if( tampung[i] == kamus[j] ){
      hasil.push(kamus[j + 1]);
      }
    }
  }

  return hasil.join("");

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu