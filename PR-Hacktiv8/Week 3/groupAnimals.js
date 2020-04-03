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
  var sort = tampung.sort()
  return(sort);
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]