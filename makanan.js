function sembunyikanSemua() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('nasi').style.display = 'none';
    document.getElementById('mie').style.display = 'none';
    document.getElementById('minuman').style.display = 'none';
    document.getElementById('snack').style.display = 'none';
    document.getElementById('dessert').style.display = 'none';
    document.getElementById('register').style.display = 'none';
}


function bukaHalaman(namaHalaman) {

    sembunyikanSemua();

    document.getElementById(namaHalaman).style.display = 'block';
}


function gantiSub(menuUtama, namaSub) {

    
    if (menuUtama == 'nasi') {
        document.getElementById('nasi-spesial').style.display = 'none';
        document.getElementById('nasi-seafood').style.display = 'none';
        document.getElementById('nasi-' + namaSub).style.display = 'block';
    } 
    else if (menuUtama == 'mie') {
        document.getElementById('mie-jawa').style.display = 'none';
        document.getElementById('mie-pedas').style.display = 'none';
        document.getElementById('mie-' + namaSub).style.display = 'block';
    }
    else if (menuUtama == 'minuman') {
        document.getElementById('minuman-dingin').style.display = 'none';
        document.getElementById('minuman-hangat').style.display = 'none';
        document.getElementById('minuman-' + namaSub).style.display = 'block';
    }
    else if (menuUtama == 'snack') {
        document.getElementById('snack-gorengan').style.display = 'none';
        document.getElementById('snack-kue').style.display = 'none';
        document.getElementById('snack-' + namaSub).style.display = 'block';
    }
    else if (menuUtama == 'dessert') {
        document.getElementById('dessert-es').style.display = 'none';
        document.getElementById('dessert-puding').style.display = 'none';
        document.getElementById('dessert-' + namaSub).style.display = 'block';
    }
}


function beli(namaBarang) {
    alert("Sukses! " + namaBarang + " sudah masuk keranjang.");
}


function cekRegister() {
    var nama = document.getElementById('inputNama').value;
    var email = document.getElementById('inputEmail').value;
    var pass = document.getElementById('inputPass').value;
    var pesan = document.getElementById('pesanReg');

    if (nama == "" || email == "" || pass == "") {
        pesan.style.color = "red";
        pesan.innerHTML = "Isi semua kolom dong!";
        return false; 
    }



    if (pass.length < 6) {
        pesan.style.color = "red";
        pesan.innerHTML = "Password kependekan (min 6 huruf)!";
        return false; 
    }


    pesan.style.color = "green";
    pesan.innerHTML = "Berhasil daftar atas nama: " + nama;
    

    document.getElementById('inputNama').value = "";
    document.getElementById('inputEmail').value = "";
    document.getElementById('inputPass').value = "";
    
    return false;
}





var popupBaru = document.createElement('div');
popupBaru.id = 'popupBerhasil';
popupBaru.textContent = 'Kamu telah berhasil mendaftar';
document.body.appendChild(popupBaru);


document.getElementById('formDaftar').addEventListener('submit', function(e) {
    e.preventDefault();
    cekRegister();
    var cekPesan = document.getElementById('pesanReg');
    if (cekPesan.innerHTML.indexOf('Berhasil daftar') !== -1) {
        popupBaru.style.display = 'block';
        setTimeout(function() {
            popupBaru.style.display = 'none';
        }, 3000);
    }
});