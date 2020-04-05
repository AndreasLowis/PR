function digitPerkalianMinimum(angka) {
  // you can only write your code here!

    var tampung = [];

    for( i = 0; i <= angka; i++ ) {
      if( angka % i == 0 ){
        tampung.push(i);
      }
    }

    // console.log(tampung);

    var tampung2 = tampung;

    // console.log(tampung2);

    var pasangan = [];

    for( i = 0; i < tampung.length; i++ ) {
       for( j = 0; j < tampung2.length; j++ ){
        if( tampung[i] * tampung2[j] == angka){
          pasangan.push([tampung[i], tampung[j]]);
        }
      }
    }
    // console.log(pasangan);

    var panjang = [];

    for( i = 0; i < pasangan.length; i++ ) {
      panjang.push([pasangan[i][0].toString().length, pasangan[i][1].toString().length] );
    }

    // console.log(panjang);

    var total = [];

    for( i = 0; i < panjang.length; i++ ) {
      total.push(Number(panjang[i][0]) + Number(panjang[i][1]));
    }

    // console.log(total);

    var min = Infinity;

    for( i = 0; i < total.length; i++ ) {
      if( total[i] < min ){
        min = total[i];
      }
    }

    return min;
  }


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2