# Toko Fafa - Modern E-Commerce

Proyek ini adalah halaman storefront sederhana untuk sebuah toko online fiksi bernama **Toko Fafa**. Aplikasi dibangun menggunakan HTML, CSS, dan JavaScript murni tanpa framework.

## Ringkasan

- `index.html` berisi markup halaman utama, tampilan produk, keranjang belanja, panel pembayaran, modal bukti pembayaran, dan tombol WhatsApp.
- `styles.css` berisi semua gaya visual, mulai dari tata letak hero, kartu produk, panel keranjang, sampai tampilan modal dan tombol bantuan.
- `script.js` berisi logika interaktif: menambahkan produk ke keranjang, menghitung total harga, memilih metode pembayaran, menampilkan bukti checkout, dan navigasi antar elemen.

## Fitur Utama

1. **Tampilan Produk Dinamis**
   - Setiap produk disimpan sebagai elemen `<article class="product-card">` dengan atribut `data-*` untuk ID, nama, harga, dan gambar.
   - Tombol `Tambah` menambahkan produk ke keranjang.

2. **Keranjang Belanja Interaktif**
   - Panel keranjang muncul saat pengguna menekan tombol `Keranjang` atau menambahkan produk.
   - Jumlah item dan total harga otomatis terupdate.
   - Jika keranjang kosong, ditampilkan pesan `Keranjang kosong. Tambahkan produk untuk memulai.`.

3. **Checkout dan Metode Pembayaran**
   - Pengguna dapat memilih antara `Kartu`, `Bank`, atau `E-Wallet`.
   - Form input yang relevan hanya muncul untuk metode yang dipilih.
   - Nilai `Nomor Rekening Tujuan` berubah otomatis sesuai metode pembayaran.

4. **Bukti Pembayaran**
   - Setelah pembayaran dikonfirmasi, modal bukti pembayaran muncul.
   - Modal menampilkan nama pemesan, metode pembayaran, nomor rekening tujuan, daftar item, total item, dan total bayar.
   - Tombol `Unduh Bukti` membuat file teks bukti checkout secara lokal.

6. **Tombol WhatsApp**
   - Ikon WhatsApp berada di pojok kanan bawah.
   - Mengarahkan pengguna ke `https://wa.me/6283838717756` untuk chat langsung.

7. **Google Analytics Dummy**
   - Termasuk snippet Google Analytics di `<head>` sebagai placeholder.

## Struktur File

### `index.html`
- Header dengan brand dan aksi utama.
- Section hero dengan judul, deskripsi, tombol promo, dan gambar preview.
- Daftar produk dengan informasi nama, harga, kategori, deskripsi, dan tombol `Tambah`.
- Panel keranjang yang berisi detail item, metode pembayaran, dan tombol checkout.
- Modal receipt untuk bukti checkout.
- Tombol WhatsApp fixed.

### `styles.css`
- Variabel CSS untuk warna, radius, shadow, dan tema gelap.
- Grid responsif untuk hero dan produk.
- Styling kartu produk, panel keranjang, modal, tombol, dan form pembayaran.
- Animasi ringan pada kartu dan tombol.
- Media query untuk tampilan lebih baik pada layar kecil.

### `script.js`
- Mengambil elemen DOM penting menggunakan `document.getElementById()` dan `querySelectorAll()`.
- `formatRupiah()` untuk format mata uang `IDR`.
- `updateCart()` untuk merender ulang isi keranjang dan total.
- `addToCart()` untuk menambah atau memperbarui jumlah produk.
- Event listener untuk tombol produk, buka/tutup keranjang, dan metode pembayaran.
- `updatePaymentFields()` untuk memperlihatkan form sesuai metode pembayaran.
- `showReceipt()` untuk menampilkan hasil checkout di modal.
- `downloadReceipt()` untuk mengekspor bukti pembayaran ke file `.txt`.
- `scrollToProducts()` untuk navigasi halus ke bagian produk.

## Cara Menjalankan

### Opsi 1: Buka langsung
1. Buka file `index.html` di browser.
2. Aplikasi akan berjalan tanpa server.

### Opsi 2: Jalankan dengan server lokal
Jika ingin menggunakan server lokal (opsional):
1. Pasang ekstensi Live Server di VS Code atau gunakan server sederhana.
2. Buka folder `toko fafa` dan jalankan `index.html`.

## Penyesuaian yang Bisa Dilakukan

- Tambahkan produk baru dengan menyalin blok `<article class="product-card">` di `index.html` dan mengganti atribut `data-id`, `data-name`, `data-price`, dan `data-image`.
- Ubah warna tema lewat variabel CSS di bagian `:root`.
- Tambahkan metode pembayaran baru pada `script.js` dan `index.html` bila diperlukan.
- Perbaiki atau perluas fitur checkout di `script.js` sesuai kebutuhan.

## Catatan Pengembangan

- Proyek ini tidak menggunakan backend; semua interaksi dilakukan di sisi klien.
- Keranjang dan checkout bersifat simulasi.
- File `README.md` ini menjelaskan struktur dan fitur aktual sesuai kode Anda.

---

**Toko Fafa** siap dikembangkan lebih lanjut sebagai konsep e-commerce modern sederhana berbasis HTML/CSS/JS.
