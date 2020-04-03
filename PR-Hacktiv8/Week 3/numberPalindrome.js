/**
 * READ num AS INTEGER
 * LOOP
 *  INCREMENT num
 *  SET numString AS STRING CONVERT FROM num
 *  SET numStringReverse AS STRING
 *  FOR EACH CHARACTER IN numString do 
 *    ... numStringReverse ...
 *  END FOR
 *  IF numString EQUALS numStringReverse
 *    DISPLAY num // 118
 *  END IF
 * END LOOP
 */

 function angkaPalindrome(num) {
    while(true) {
        num++;
        var numString = num.toString();
        var numStringReverse = '';

        for( i = numString.length - 1; i >= 0; i-- ){
            numStringReverse += numString[i];
         }
    
         if(numStringReverse === numString) {
             return num;
         } 
    }
 }

  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001