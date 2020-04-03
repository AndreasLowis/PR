var tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = "Desember" ; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = '2000' ; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal > 31 || tanggal < 1) {
	console.log("tanggal salah");
} else if (tahun < 1900 || tahun > 2200) {
	console.log("tahun salah");
} else {

switch (bulan) {
	case "Januari":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;
	case "Februari":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;
	case "Maret":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;
	case "April":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;
	case "Mei":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;
	case "Juni":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;
	case "Juli":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;
	case "Agustus":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;
	case "September":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;
	case "Oktober":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;
	case "November":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;
	case "Desember":
		console.log(tanggal + " " + bulan + " " + tahun);
		break;

	default:
		console.log('bulan salah');
		break;
}

}
