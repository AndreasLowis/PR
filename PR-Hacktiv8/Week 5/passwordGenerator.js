// Problem
// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga



function changeVocals(str){
  


  var vocals = "aeiouAEIOU"
  var nextLetters = "bfjpvBFJPV"
  var strTemp = ""

  for( var i = 0; i < str.length; i++ ) {
    var available = false
      for( var j = 0; j < vocals.length; j++ ){
        if( str[i] == vocals[j] ){
          strTemp += nextLetters[j]
          available = true
        }
      }
      if( available == false ){
        strTemp += str[i]
      }
  }
return strTemp;
}

// console.log(changeVocals('Alexei'))

function reverseWord (str) {
  //code di sini
  var reversed = ""
  for( var i = str.length - 1; i >= 0; i-- ) {
    reversed += str[i]
  }
  return reversed
}

// console.log(reverseWord('Alexei')) 
// OK

function setLowerUpperCase (str) {
  //code di sini
  var besarKecil = ""
  for( var i = 0; i < str.length; i++ ) {
    if( str[i] == str[i].toUpperCase() ){
      besarKecil += str[i].toLowerCase()
    } else {
      besarKecil += str[i].toUpperCase()
    }
  }
  return besarKecil
}

// console.log(setLowerUpperCase('Alexei')) 
// OK

function removeSpaces (str) {
  //code di sini
  var spasi = ""
  for( var i = 0; i < str.length; i++ ) {
    if( str[i] !== " " ){
      spasi += str[i]
    }
  }
  return spasi
}

// console.log(removeSpaces('Alexei'))
// OK

function passwordGenerator (name) {
  //code di sini
  if( name.length < 5 ){
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  }
  var changed = changeVocals(name);
  var reversed = reverseWord(changed);
  var uplow = setLowerUpperCase(reversed);
  var space = removeSpaces(uplow);

  return space
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'