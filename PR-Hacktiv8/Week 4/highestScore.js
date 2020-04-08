function highestScore (students) {
  // Code disini
  if( students.length == 0 ){
    return {};
  }

  var hasil = {}
    
  for( var i = 0; i < students.length; i++ ) {
    var student = students[i];
    var obj = {}
    obj.name = student.name
    obj.score = student.score
    if( hasil[student.class] === undefined ){
      hasil[student.class] = obj
    } else if( student.score > hasil[student.class].score ){
      hasil[student.class].score = student.score
      hasil[student.class].name = student.name
    }
  }
  return hasil;
}

console.log(highestScore([
  {
    name: 'William',
    score: 70,
    class: 'wolves'
  },
  {
    name: 'Henry',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 90,
    class: 'wolves'
  },
]));
// {
//   wolves: { name: 'Alisa', score: 90 },
//   foxes: { name: 'Henry', score: 100 }
// }

console.log(highestScore([])); //{}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


