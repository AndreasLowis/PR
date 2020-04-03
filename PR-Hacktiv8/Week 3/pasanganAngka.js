function pasanganTerbesar(num) {
    // you can only write your code here!
    var tampung = 0;
    var numString = num.toString();

    for( i = 0; i < numString.length -1; i++) {
        var a = numString[i] + numString[1 + i];
        var b = Number(a);

        if( b > tampung ) {
            tampung = b;
        }
    }

    return tampung;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99