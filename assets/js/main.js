// ===============================
// Inisialisasi AOS (Animate On Scroll)
// Library ini digunakan untuk memberikan animasi pada elemen saat user melakukan scroll.
// Pengaturan: animasi berdurasi 800ms, hanya terjadi sekali, dan mulai 50px sebelum elemen masuk viewport.
// ===============================
AOS.init({ 
    duration: 800, 
    once: true, 
    offset: 50 
});

// ===============================
// HAMBURGER MENU UNTUK MOBILE
// ===============================
// Fitur ini memungkinkan menu navigasi dapat dibuka/tutup pada tampilan mobile.
// Saat hamburger diklik, class 'active' ditambahkan/di-remove untuk menampilkan/menyembunyikan menu.
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle menu mobile saat hamburger diklik
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Ubah tampilan hamburger (animasi X)
    navMenu.classList.toggle('active');   // Tampilkan/sembunyikan menu
});

// Tutup menu mobile saat salah satu link diklik
// Tujuannya agar menu otomatis menutup setelah user memilih menu di mobile
// (UX lebih baik, tidak perlu klik hamburger lagi)
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// ===============================
// THEME SWITCH (DARK/LIGHT MODE)
// ===============================
// Fitur ini memungkinkan user mengganti tampilan website antara mode gelap dan terang.
// Pilihan theme disimpan di localStorage agar tetap konsisten saat reload.
const themeToggle = document.getElementById('checkbox');
const body = document.body;

// Konfigurasi partikel untuk mode gelap (warna putih, jumlah lebih banyak)
const darkParticlesConfig = { 
    fpsLimit: 60, // Batasi FPS agar animasi tetap smooth tanpa membebani CPU
    particles: { 
        number: { value: 60, density: { enable: true, value_area: 800 } }, // Banyak partikel
        color: { value: "#ffffff" }, // Warna partikel putih
        shape: { type: "circle" },   // Bentuk partikel lingkaran
        opacity: { value: 0.5, random: true }, // Opacity acak agar efek lebih hidup
        size: { value: 3, random: true },      // Ukuran acak
        links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.4, width: 1 }, // Garis penghubung antar partikel
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false },
    },
    interactivity: { 
        detectsOn: "canvas", 
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } },
    },
    retina_detect: true // Deteksi layar retina untuk tampilan lebih tajam
};

// Konfigurasi partikel untuk mode terang (warna oranye, jumlah lebih sedikit, garis lebih tebal)
const lightParticlesConfig = {
    ...darkParticlesConfig,
    particles: {
        ...darkParticlesConfig.particles,
        number: { value: 50 }, // Lebih sedikit agar tidak terlalu ramai di background terang
        color: { value: "#fd990d" }, // Warna oranye agar kontras di background terang
        links: {
            ...darkParticlesConfig.particles.links,
            color: "#6c757d", // Garis abu-abu
            opacity: 0.8,      // Garis lebih tebal
            width: 2,          // Garis lebih tebal
        },
    },
};

// Fungsi untuk memuat partikel sesuai konfigurasi (mode terang/gelap)
function loadParticles(config) { 
    tsParticles.load("particles-js", config); // Menginisialisasi partikel di elemen #particles-js
}

// Fungsi untuk mengubah theme dan partikel sesuai pilihan user
// - Menambah/menghapus class 'light-mode' di body
// - Menyimpan preferensi di localStorage
// - Memuat partikel sesuai mode
function handleThemeChange(isLight) { 
    if (isLight) { 
        body.classList.add('light-mode'); 
        localStorage.setItem('theme', 'light-mode'); 
        loadParticles(lightParticlesConfig); 
    } else { 
        body.classList.remove('light-mode'); 
        localStorage.setItem('theme', 'dark-mode'); 
        loadParticles(darkParticlesConfig); 
    } 
}

// Saat halaman dimuat, cek preferensi theme di localStorage
// Jika ada, terapkan theme dan partikel sesuai preferensi
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light-mode') { 
    themeToggle.checked = true; 
    handleThemeChange(true); 
} else { 
    handleThemeChange(false); 
}

// Event listener untuk toggle theme (checkbox)
// Setiap kali user mengubah switch, theme dan partikel akan berubah
themeToggle.addEventListener('change', () => { 
    handleThemeChange(themeToggle.checked); 
});

// ===============================
// NAVIGASI AKTIF SAAT SCROLL
// ===============================
// Fitur ini menandai menu navigasi yang aktif sesuai section yang sedang dilihat user.
// UX: User tahu sedang berada di section mana.
const sections = document.querySelectorAll('main > section');
const navLinks = document.querySelectorAll('.nav-menu a');

// Event klik pada link navigasi untuk menandai link yang aktif
navLinks.forEach(link => { 
    link.addEventListener('click', function() { 
        navLinks.forEach(nav => nav.classList.remove('active')); // Hapus semua active
        this.classList.add('active'); // Tambahkan active ke link yang diklik
    }); 
});

// Saat user scroll, update link navigasi yang aktif sesuai posisi scroll
window.addEventListener('scroll', () => { 
    let current = 'home'; // Default section
    sections.forEach(section => { 
        const sectionTop = section.offsetTop; 
        // Jika posisi scroll sudah melewati section, jadikan section itu aktif
        if (pageYOffset >= sectionTop - 150) { 
            current = section.getAttribute('id'); 
        } 
    }); 
    navLinks.forEach(link => { 
        link.classList.remove('active'); 
        if (link.getAttribute('href').includes(current)) { 
            link.classList.add('active'); 
        } 
    }); 
});

// ===============================
// FORM KONTAK KIRIM KE WHATSAPP
// ===============================
// Fitur ini memungkinkan user mengirim pesan langsung ke WhatsApp melalui form kontak.
// Pesan akan dibuka di aplikasi WhatsApp (atau web) dengan format otomatis.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah reload halaman
        const nameInput = contactForm.querySelector('input[name="name"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        const name = nameInput ? nameInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';
        // Validasi: nama dan pesan wajib diisi
        if (name.length === 0 || message.length === 0) {
            alert('Nama dan pesan harus diisi!');
            return;
        }
        // Format pesan WhatsApp
        const phoneNumber = '6289666077720'; // Nomor tujuan WhatsApp
        const text = `Halo, saya ${name} ingin mengirim pesan: ${message}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank'); // Buka WhatsApp di tab baru
    });
}