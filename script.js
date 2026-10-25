
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");


function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");
    
    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}



function tampilkanTabelPerkalian7() {
    const container = document.getElementById("tabelPerkalian");
    container.innerHTML = ""; // Bersihkan list sebelumnya

    for (let i = 1; i <= 10; i++) {
        const itemLi = document.createElement("li");
        itemLi.textContent = `7 x ${i} = ${7 * i}`;
        container.appendChild(itemLi);
    }
}


function cekGenap(angka) {
    return angka % 2 === 0;
}
console.log("Cek genap angka 4:", cekGenap(4)); // true
console.log("Cek genap angka 7:", cekGenap(7)); // false


const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotalMenu);
});

function hitungTotalMenu() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

function validasiDanPesanMenu() {
    let adaYangDipilih = false;
    daftarMenu.forEach((item) => {
        if (item.checked) {
            adaYangDipilih = true;
        }
    });

    const pesanError = document.getElementById("pesanErrorMenu");
    
    if (!adaYangDipilih) {
        pesanError.textContent = "Validasi Gagal: Silakan pilih minimal satu menu makanan atau minuman!";
    } else {
        pesanError.textContent = "";
        alert("Pesanan berhasil diproses! Terima kasih.");
    }
}


function toggleElemen() {
    const kotak = document.getElementById("kotakTarget");
    if (kotak.style.display === "none") {
        kotak.style.display = "block";
    } else {
        kotak.style.display = "none";
    }
}


function prosesHitungNilai() {
    const tVal = document.getElementById("nilaiTugas").value;
    const uVal = document.getElementById("nilaiUts").value;
    const sVal = document.getElementById("nilaiUas").value;
    const out = document.getElementById("hasilNilaiAkhir");

    const tugas = Number(tVal);
    const uts = Number(uVal);
    const uas = Number(sVal);

    if (tVal.trim() === "" || uVal.trim() === "" || sVal.trim() === "" ||
        Number.isNaN(tugas) || Number.isNaN(uts) || Number.isNaN(uas) ||
        tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        out.innerHTML = "<span style='color:red;'>Validasi Gagal: Semua komponen nilai wajib diisi angka antara 0 sampai 100!</span>";
        return;
    }

    const akhir = (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
    let predikat = "E";
    if (akhir >= 85) predikat = "A";
    else if (akhir >= 75) predikat = "B";
    else if (akhir >= 60) predikat = "C";
    else if (akhir >= 50) predikat = "D";

    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    out.innerHTML = `<strong>Nilai Akhir:</strong> ${akhir.toFixed(2)}<br>` +
                    `<strong>Predikat:</strong> ${predikat}<br>` +
                    `<strong>Status:</strong> ${status}`;
}