# RevoFun - Portal Game Browser Interaktif

Selamat datang di RevoFun! Ini adalah landing page interaktif yang menjadi portal untuk memainkan 10 game browser berbasis JavaScript. Proyek ini berfokus pada pengalaman UI/UX, manipulasi DOM, serta logika game sederhana yang menyenangkan.

**Demo Langsung:** [https://revou-fsse-jun25.github.io/milestone-1-whtrianto/]

## 📜 Gambaran Umum Proyek

RevoFun menyajikan etalase 10 game kasual dengan tampilan modern, animasi ringan, serta integrasi audio efek dan musik latar. Setiap kartu game pada halaman utama mengarah ke file HTML game masing-masing.

## ✨ Fitur Utama

- **Halaman Utama (Home Page)**

  - Branding RevoFun, judul, subtitle, dan ikon animasi.
  - Daftar 10 game dengan deskripsi ringkas dan tombol ajakan bermain.
  - Statistik singkat dan seksi "Coming Soon".

- **Daftar Game (10 Game)**

  1. **Tebak Angka** (`games/number-guessing.html`)
  2. **Batu, Kertas, Gunting** (`games/rock-paper-scissors.html`)
  3. **Memory Card** (`games/memory-game.html`)
  4. **Snake Game** (`games/snake-game.html`)
  5. **Tic Tac Toe** (`games/tic-tac-toe.html`)
  6. **Color Match** (`games/color-match.html`)
  7. **Cyber Bird (Flappy Bird)** (`games/flappy-bird.html`)
  8. **2048 Puzzle** (`games/2048-puzzle.html`)
  9. **Cyber Breakout** (`games/breakout.html`)
  10. **Balap Mobil** (`games/balap-mobil.html`)

- **Desain Responsif**

  - Mendukung layar desktop hingga perangkat mobile.

- **Integrasi Audio**
  - Efek suara untuk hover, klik, dan event di dalam game.
  - Musik latar per game, dapat dikontrol melalui komponen kontrol audio.
  - Pengaktifan audio dipicu interaksi user pertama untuk kompatibilitas browser.

## 🛠️ Teknologi yang Digunakan

- **HTML5** untuk struktur konten.
- **CSS3** untuk styling dan layout (menggunakan Flexbox/Grid, variabel CSS, Google Fonts).
- **JavaScript (ES6+)** untuk interaksi, logika game, dan penyimpanan sederhana (mis. `localStorage` pada beberapa game).

## 🚀 Menjalankan Secara Lokal

1. Buka folder proyek ini.
2. Jalankan langsung `index.html` di browser, atau gunakan ekstensi "Live Server" pada VS Code.

## 📁 Struktur Folder Singkat

- `index.html` — Halaman utama RevoFun.
- `games/` — Halaman HTML masing‑masing game.
- `js/` — Skrip utama dan skrip per game (termasuk integrasi audio dan logika game).
- `audio/` — Berkas musik latar dan efek suara.
- `style.css`, `audio-controls.css` — Gaya tampilan dan kontrol audio.

## 🎧 Catatan Audio

- Audio dikendalikan melalui skrip di `js/` (mis. `audio-manager-*.js`, `audio-integration-helper.js`).
- Suara akan aktif setelah interaksi pertama pengguna (klik/hover) agar kompatibel dengan kebijakan auto‑play browser.

## 🌐 Deploy

- Dapat di-deploy ke layanan statis seperti GitHub Pages, Netlify, atau Vercel.
- Pastikan seluruh aset (audio, CSS, JS) memiliki path relatif yang benar.
