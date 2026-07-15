# Toko Fafa - Modern E-Commerce

## 📖 Business Overview

### Nama Bisnis & Deskripsi
**Nama Bisnis:** Toko Fafa  
**Deskripsi:** Toko Fafa adalah platform e-commerce sederhana yang menawarkan produk lokal berkualitas dengan harga terjangkau. Website ini dirancang untuk memberikan pengalaman belanja online yang mudah, cepat, dan aman.
Proyek ini adalah halaman storefront sederhana untuk sebuah toko online fiksi bernama **Toko Fafa**. Aplikasi dibangun menggunakan HTML, CSS, dan JavaScript murni tanpa framework.

### Value Proposition
- ✅ **Produk Berkualitas:** Semua produk dipilih dengan standar kualitas tinggi.
- ✅ **Harga Terjangkau:** Harga kompetitif dengan diskon menarik.
- ✅ **Pengalaman Belanja Mudah:** Interface modern, checkout cepat, dan dukungan WhatsApp.
- ✅ **Lokal & Terpercaya:** Mendukung produk lokal Indonesia.

  ### 🎯 Target Market & Segmentasi Pelanggan
 **Usia**: 18–35 tahun (mahasiswa, young professional) 
 **Lokasi**: Bandung & sekitarnya (Jabodetabek) 
 **Minat** : Produk lokal, fashion, lifestyle, belanja online 
 **Perilaku**: Aktif di media sosial, suka diskon & promo, mobile-first 

### 📊 Analisis Pasar Singkat

**Tren E-Commerce Indonesia:**
- Pertumbuhan e-commerce Indonesia mencapai **20% per tahun** (2024–2026).
- **60% transaksi** berasal dari mobile device.
- Konsumen semakin percaya belanja online dengan metode pembayaran beragam.

**Kompetitor:**
1. **Tokopedia** - Marketplace besar dengan variasi produk lengkap.
2. **Shopee** - Fokus pada harga murah & promo flash sale.
3. **UMKM Lokal** - Toko online kecil dengan produk serupa di Instagram/Tokopedia.

**Keunggulan Toko Fafa:**
- Fokus pada **produk kurasi** (bukan marketplace massal).
- **Layanan personal** via WhatsApp.
- **Checkout sederhana** tanpa perlu registrasi.

### 📦 Strategi Manajemen Produk & Katalog
| Fashion : Kaos, hoodie, aksesoris = 3 produk 
| Lifestyle : Tumbler, tote bag = 3 produk 
| Aksesoris : Gelang, kalung, topi = 2–4 produk 
| **Total** : **8–10 produk** 

### 💰 Model Bisnis & Revenue Stream

**Model Bisnis:** B2C (Business-to-Consumer) - Penjualan langsung ke konsumen akhir.

**Revenue Stream:**
- Penjualan produk fisik (margin **30–50%** per produk).
- Bundling (beli 2 gratis 1, paket hemat).
- Promo flash sale mingguan.

### 💳 Strategi Harga, Promosi, dan Diskon

| Strategi | Detail |
|----------|--------|
| **Harga Normal** | Rp79.000–Rp199.000 |
| **Diskon Pertama** | 10% untuk pembelian pertama |
| **Free Shipping** | Minimal belanja Rp150.000 |
| **Bundling** | Beli 2 produk, diskon 15% |

### 🔒 Rencana SEO, Keamanan, dan Pemeliharaan

**SEO:**
- Meta tags: `<title>`, `<meta name="description">`, `<meta name="keywords">`.
- Keyword targeting: "toko online Bandung", "produk lokal murah".

**Keamanan:**
- Validasi form di sisi klien (JavaScript).
- HTTPS via GitHub Pages (otomatis).

**Pemeliharaan:**
- Update produk setiap minggu.
- Monitoring Google Analytics untuk traffic.

### 📈 Rencana Penggunaan Data Analytics

**Metrik yang Dipantau (Google Analytics):**

| Metrik | Target | Cara Meningkatkan |
| **Bounce Rate**  < 50% = Optimasi loading speed 
| **Conversion Rate** > 2% = CTA jelas, checkout sederhana 
| **Average Order Value**  > Rp150.000 = Upselling, bundling 
| **Session Duration**  > 2 menit = Konten menarik 

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
