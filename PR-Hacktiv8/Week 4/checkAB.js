function checkAB(num) {
  // you can only write your code here!
    var ja = [];
    var jb = [];


    for( i = 0; i < num.length; i++ ) {
        if( num[i] == 'a' ){
            ja.push(i);
        } else if( num[i] == 'b' ){
            jb.push(i);
        }
    }
    
    var jbmin = Infinity;
    for( i = 0; i < jb.length; i++ ) {
        if( jb[i] < jbmin ){
            jbmin = jb[i];
        } 
    } 
    if( jbmin == Infinity ){
        jbmin = 0;
    }
    
    var jamax = 0;
    for( i = 0; i < ja.length; i++ ) {
        if( ja[i] > jamax ){
            jamax = ja[i];
        }
    }

    var mindistance = Math.abs(jamax - jbmin);

    // console.log(ja);
    // console.log(jb);
    // console.log(jamax);
    // console.log(jbmin);
    // console.log(mindistance);

    if( mindistance >= 3 ) {
        return true;
    } else return false;

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false