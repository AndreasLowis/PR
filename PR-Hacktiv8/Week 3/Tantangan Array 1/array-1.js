var input = "hello world";

function balikString(str) {
    var katabaru = "";
    for( i = str.length - 1; i >= 0; i--) {
        katabaru += str[i];
    }
    return katabaru;
}

console.log(balikString(input));