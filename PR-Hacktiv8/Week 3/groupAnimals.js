function groupAnimals(animals) {
  // you can only write your code here!
  var tampung = [];
  for( i = 0; i < animals.length; i++ ) {
    var check = false;
    
    for( j = 0; j < tampung.length; j++ ) {
      
        if( animals[i][0] === tampung[j][0][0] ) {
          tampung[j].push(animals[i]);
          check = true;
        } 
    }
    if ( check === false ) {
      tampung.push([animals[i]]);
    }
  }

  for( i = 0; i < tampung.length; i++ ) {
    if( tampung[i] > tampung[i+1] ){
      var temp = tampung[i];
      tampung[i] = tampung[i+1];
      tampung[i+1] = temp;
    }
  }
  return(tampung);
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]