// Kerjakan dahulu lalu bahas dengan buddy..
// note pastikan sudah kerjain soal den anchor ⚓️ duahulu ya!

function replayPlaylist(minutes) {
  var listSong = [
    ["No Time To Die", 4],
    ["Dance Monkey", 3],
    ["Stupid Love", 4],
    ["Adore You", 2],
    ["Don't Start Now", 3],
    ["Intentions", 2]
  ]
    // your code here

  var total = [];
  var sisa = minutes;

  while( sisa >= 0 ){
  for( i = 0; i < listSong.length; i++ ) {
    // console.log(listSong[i][0]);
      
      if( sisa >= 0 ) {
      total.push(listSong[i][0]);
      sisa -= listSong[i][1];
      
      }
      
  }
}
  console.log(sisa);
  return total;
  
}

console.log(replayPlaylist(27));
  /**
[
  'No Time To Die',
  'Dance Monkey',
  'Stupid Love',
  'Adore You',
  "Don't Start Now",
  'Intentions',
  'No Time To Die',
  'Dance Monkey',
  'Stupid Love'
]
 */