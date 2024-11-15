// Menambahkan event listener pada semua anchor link yang memiliki href yang diawali dengan '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Mencegah aksi default link yang akan membawa ke halaman lain

        // Mengambil elemen yang dituju dengan menggunakan nilai href (id dari elemen yang ingin dipindahkan)
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'  // Menggerakkan halaman ke elemen tersebut dengan animasi smooth scroll
        });
    });
});

// Dark mode toggle
const toggleSwitch = document.getElementById('dark-mode-toggle');  // Mengambil elemen toggle switch
const body = document.body;  // Mengambil elemen body dari halaman

// Event listener untuk toggle dark mode
toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');  // Menambahkan atau menghapus kelas 'dark-mode' pada body
});