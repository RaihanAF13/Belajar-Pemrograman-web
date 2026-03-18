// =======================
// DATA TOKO (VARIABLE)
// =======================
let namaToko = "Toko Sederhana";

// =======================
// DATA BELANJA (ARRAY + OBJECT)
// =======================
let daftarBelanja = [
    { nama: "Beras", harga: 12000 },
    { nama: "Minyak Goreng", harga: 15000 },
    { nama: "Gula Pasir", harga: 13000 },
    { nama: "Telur Ayam", harga: 20000 },
    { nama: "Daging Sapi", harga: 50000 }
];

// =======================
// FUNCTION (BIAR JALAN SAAT DIKLIK)
// =======================
function tampilkanStruk() {

    // =======================
    // HITUNG TOTAL (MATH)
    // =======================
    let total = 0;

    for (let i = 0; i < daftarBelanja.length; i++) {
        total += daftarBelanja[i].harga;
    }

    // =======================
    // DISKON (BOOLEAN + IF)
    // =======================
    let diskon = 0;
    if (total > 100000) {
        diskon = total * 0.1; // 10%
    }

    let totalBayar = total - diskon;

    // =======================
    // STATUS PEMBAYARAN (BOOLEAN)
    // =======================
    let statusPembayaran = true;
    let statusText = statusPembayaran ? "LUNAS" : "BELUM BAYAR";

    // =======================
    // DATE
    // =======================
    let tanggal = new Date().toLocaleDateString();

    // =======================
    // STRING OUTPUT
    // =======================
    let hasil = `<h2>${namaToko.toUpperCase()}</h2>`;
    hasil += `<p>Tanggal: ${tanggal}</p>`;
    hasil += `<p><b>Daftar Belanja:</b></p>`;

    // =======================
    // LOOP TAMPILKAN BARANG
    // =======================
    for (let i = 0; i < daftarBelanja.length; i++) {
        hasil += `<p>- ${daftarBelanja[i].nama} (${daftarBelanja[i].harga})</p>`;
    }

    hasil += `<hr>`;
    hasil += `<p>Total: ${Math.floor(total)}</p>`;
    hasil += `<p>Diskon: ${Math.floor(diskon)}</p>`;
    hasil += `<p><b>Total Bayar: ${Math.floor(totalBayar)}</b></p>`;
    hasil += `<p>Status: ${statusText}</p>`;

    // =======================
    // TAMPILKAN KE HTML
    // =======================
    document.getElementById("output").innerHTML = hasil;
}