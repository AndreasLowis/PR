// Tugas 1, Menampilkan "Halo Function!" di console

function shoutOut () {
	return ("Halo Function!");
}

console.log(shoutOut()) 


// Tugas 2, Menampilkan angka 30



function calculateMultiply(a, b) {
	return a * b;
}

var hasilPerkalian = calculateMultiply(5, 6);

console.log(hasilPerkalian); 


// Tugas 3, Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"


function processSentence(name, age, address, hobby) {
	return ("Nama saya" + name + " , umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!");
}

var fullSentence = processSentence("Agus", 30, "Jln. Malioboro, Yogjakarta", "gaming");
console.log(fullSentence); 
