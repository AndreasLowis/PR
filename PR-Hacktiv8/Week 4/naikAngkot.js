function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here

  var result = [];  

  for( var i = 0; i < arrPenumpang.length; i++ ) {
    
    var obj = {
        penumpang : arrPenumpang[i][0],
        naikDari : arrPenumpang[i][1],
        tujuan : arrPenumpang[i][2],
        bayar : 0
    }

    
    // algoritma utk menghitung bayar -------------------------------------------------
    var stasiun = [];

    for( var j = 0; j < rute.length; j++ ){
        if( arrPenumpang[i][1] === rute[j] ){
            stasiun.push(j);
        }
        if ( arrPenumpang[i][2] === rute[j] ){
            stasiun.push(j);
        }
    }

    // console.log(stasiun)

    // console.log(stasiun[1] - stasiun[0])

    var jarak = 0;
    
    for( var l = 0; l < stasiun.length - 1; l++ ) {
        jarak = stasiun[l+1] - stasiun[l]
    }

    // console.log(jarak)

    var bayar = jarak *= 2000

    // console.log(bayar)

    // algoritma utk menghitung bayar selesai -------------------------------------------------



    obj.bayar = bayar

    result.push(obj);

  }  
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]