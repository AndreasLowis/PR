// Kerjakan dahulu lalu bahas dengan buddy..
// note pastikan sudah kerjain soal den anchor ⚓️ duahulu ya!

function getMaximum(nums) {
    // your code here 
    var max = 0
    for( i = 0; i < nums.length; i++ ) {
        if( nums[i] > max ) {
            max = nums[i];
        }
    }
    return max;
}

console.log(getMaximum([100, 50, 9, 98, 110, 5, 3])); // 110
console.log(getMaximum([0, 0, 9, -8, 22, 15, 32])); // 32
console.log(getMaximum([1, 1, 1, -1, 11, 111, -11])); // 111
console.log("------------------------------------------------------------");
// Ga Tau
// // Apa perbedaan dari console.log(sebuahFunction(input)) 
// // dengan sebuahFunction(input)  ??

function sortManualAscending(numbers) {
    // your code here 
    for( i = 0; i < numbers.length; i++ ) {
        for( j = 0; j < numbers.length; j++ ) {
            if ( numbers[j] > numbers[j+1] ){
                var temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
    return numbers;
}

console.log(sortManualAscending([1, 2, 3, 4, 0, 7, 6, 5, 1])) // [0, 1, 1, 2, 3, 4, 5, 6, 7]
console.log(sortManualAscending([100, 2, -90])) // [-90, 2, 100]