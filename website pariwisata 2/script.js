// Menampilkan bagian yang dipilih
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Menangani formulir pemesanan
document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Menampilkan pop-up konfirmasi
    document.getElementById('popup').style.display = 'flex';

    // Menyembunyikan bagian pemesanan
    document.getElementById('confirmation').style.display = 'block';
});

// Menutup pop-up dengan tombol "OK"
document.getElementById('ok-button').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});

// Menutup pop-up dengan klik pada icon 'x'
document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});