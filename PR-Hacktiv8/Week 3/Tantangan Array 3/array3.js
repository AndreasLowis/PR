var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

var input2 = ["0002", "Romansddsf asdasd", "Bandarasdasd Lamasdpung", "21/05/1990", "Membasdasdaca"];

function dataHandling2(array){
    array.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");

console.log(array);

var a = array[3];

console.log(a);

var b = a.split("/");

console.log(b);

var c = b[1];

console.log(c);

switch(c) {
    case "01" :
        console.log("Januari");
        break;   
    case "02" :
        console.log("Februari");
        break;   
    case "03" :
        console.log("Maret");
        break;   
    case "04" :
        console.log("April");
        break;   
    case '05' :
        console.log("Mei");
        break;   
    case '06' :
        console.log("Juni");
        break;   
    case '07' :
        console.log("Juli");
        break;   
    case '08' :
        console.log("August");
        break;   
    case '09' :
        console.log("September");
        break;   
    case '10' :
        console.log("Oktober");
        break;   
    case '11' :
        console.log("November");
        break;   
    case '12' :
        console.log("Desember");
    break;    
}

var d = b.sort(function(a, b) {
    return b-a;
});

console.log(d);

var e = array[1].split("");

console.log(e);

e.splice(15, 10 );

console.log(e.join(""));
}

dataHandling2(input);