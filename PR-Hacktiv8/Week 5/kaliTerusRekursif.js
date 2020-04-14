function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var str = angka.toString()
  var arr = []
  var jumlah = 1

  for( var i = 0; i < str.length; i++ ) {
    arr.push(str[i])
  }

  for( var i = 0; i < arr.length; i++ ) {
    jumlah *= arr[i]
  }
  console.log(jumlah, typeof jumlah, typeof arr[0])

  if( jumlah < 10 ){
    return jumlah
  } else {
      return kaliTerusRekursif(jumlah)
  }
}


// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6