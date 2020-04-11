// Bahas bersama buddy / atau kerjakan dahulu lalu bahas dengan buddy okeey?
// note pastikan sudah kerjain soal den anchor ⚓️ duahulu ya!

function getUnique(votes) {
    // your code here
    var tampung = [];


    for( i = 0; i < votes.length; i++ ) {
        var check = false;
        
        for( var j = 0; j < tampung.length; j++ ){
            if( votes[i] == tampung[j] ){
                check = true     
            }
 
            if( check == false ){
                tampung.push(votes[i])
            }
        }


    }
        
    return tampung;
}

var femaleArtists = [
    "Billie Eilish",
    "Billie Eilish",
    "Selena Gomez",
    "Taylor Swift",
    "Taylor Swift",
    "Lady Gaga",
    "Taylor Swift",
    "Billie Eilish",
    "Selena Gomez"
]
console.log(getUnique(femaleArtists))

// [
//     "Billie Eilish",
//     "Selena Gomez",
//     "Taylor Swift",
//     "Lady Gaga",
// ]
