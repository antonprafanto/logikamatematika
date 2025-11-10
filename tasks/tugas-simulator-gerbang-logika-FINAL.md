# 🎮 Tugas Praktikum: Eksplorasi Simulator Gerbang Logika

## 📋 Informasi Umum

**Materi:** Gerbang Logika (Bab 11-13)
**Format:** Kelompok (2-3 orang)
**Waktu:** 1 Minggu
**Pengumpulan:** Screenshot + Penjelasan Singkat

---

## 🛠️ Pilih Simulator (Salah Satu)

**Rekomendasi untuk Pemula:**

1. **Academo Logic Gate Simulator** ⭐ PALING MUDAH
   - Link: https://academo.org/demos/logic-gate-simulator/
   - Kelebihan: Simpel, langsung bisa pakai, tidak perlu daftar
   - Cocok untuk: Pemula yang baru pertama kali

2. **CircuitVerse** ⭐ PALING LENGKAP
   - Link: https://circuitverse.org/
   - Kelebihan: Fitur lengkap, bisa save project, ada tutorial
   - Cocok untuk: Yang mau eksplorasi lebih dalam

3. **Logic.ly Demo** ⭐ PALING BAGUS TAMPILANNYA
   - Link: https://logic.ly/demo/
   - Cocok untuk: Presentasi dan dokumentasi

**Tips:** Coba dulu 5 menit di Academo, kalau suka bisa lanjut atau pindah ke yang lain!

---

## 📚 Tugas Dibagi 3 Bagian

### 🟢 **BAGIAN 1: Kenalan dengan Gerbang Dasar** (25 poin)

#### Task 1.1: Gerbang NOT, AND, OR (15 poin)

**Yang Harus Dilakukan:**
1. Buat 3 rangkaian terpisah: NOT, AND, dan OR
2. Test dengan SEMUA kombinasi input yang mungkin
3. Screenshot hasilnya dengan jelas

**Deliverable yang Dibutuhkan:**

**📌 Untuk NOT Gate:**
- Screenshot dengan **2 test case**: A=0 dan A=1
- Tabel kebenaran NOT
- Penjelasan 1 kalimat: Apa fungsi NOT?

**📌 Untuk AND Gate:**
- Screenshot dengan **4 test case**: (A=0,B=0), (A=0,B=1), (A=1,B=0), (A=1,B=1)
- Tabel kebenaran AND
- Penjelasan 1 kalimat: Kapan AND menghasilkan output 1?

**📌 Untuk OR Gate:**
- Screenshot dengan **4 test case**: (A=0,B=0), (A=0,B=1), (A=1,B=0), (A=1,B=1)
- Tabel kebenaran OR
- Penjelasan 1 kalimat: Kapan OR menghasilkan output 0?

**Contoh Format Tabel Kebenaran:**
```
Tabel Kebenaran NOT:
| A | Y = NOT A |
|---|-----------|
| 0 |     1     |
| 1 |     0     |

Penjelasan: Gerbang NOT membalik nilai input. 0 menjadi 1, dan 1 menjadi 0.
```

**Kriteria Nilai:**
- Screenshot jelas (HD, terlabel, terlihat nilai 0/1): **6 poin**
- Tabel kebenaran lengkap dan benar: **4 poin**
- Penjelasan benar dan mudah dipahami: **5 poin**

---

#### Task 1.2: Rangkaian Sederhana (10 poin)

**Soal:**
Buat rangkaian untuk: **F = (A AND B) OR C**

**Cara Mengerjakan:**
1. Buat AND gate, hubungkan input A dan B
2. Buat OR gate
3. Hubungkan output AND dan input C ke OR gate
4. Test dengan minimal 4 kombinasi input berbeda

**Contoh Format Jawaban:**
```
[Screenshot rangkaian lengkap]

Testing:
✓ A=0, B=0, C=0  →  F=0  (karena (0 AND 0)=0, (0 OR 0)=0)
✓ A=1, B=1, C=0  →  F=1  (karena (1 AND 1)=1, (1 OR 0)=1)
✓ A=0, B=0, C=1  →  F=1  (karena (0 AND 0)=0, (0 OR 1)=1)
✓ A=1, B=0, C=1  →  F=1  (karena (1 AND 0)=0, (0 OR 1)=1)

Kesimpulan: Output jadi 1 kalau (A DAN B keduanya 1) ATAU (C = 1)
```

**Deliverable:**
- Screenshot rangkaian
- Minimal 4 test case dengan hasil dan penjelasan
- Kesimpulan 1-2 kalimat

**Kriteria Nilai:**
- Rangkaian benar (struktur AND→OR): **5 poin**
- Test case lengkap dengan penjelasan: **4 poin**
- Kesimpulan jelas: **1 poin**

---

### 🔵 **BAGIAN 2: Gerbang Spesial** (40 poin)

#### Task 2.1: Eksplorasi XOR, NAND, dan NOR (15 poin)

**Yang Harus Dilakukan:**

**Part A: XOR Gate (6 poin)**
1. Buat rangkaian XOR gate
2. Test dengan 4 kombinasi input (00, 01, 10, 11)
3. Jawab pertanyaan: **"Kapan XOR menghasilkan output 1?"**

**Part B: NAND Gate (6 poin)**
4. Buat rangkaian NAND gate
5. Test dengan 4 kombinasi input
6. Jawab pertanyaan: **"Apa bedanya NAND dengan AND?"**

**Part C: NOR Gate (3 poin) - BONUS**
7. Buat rangkaian NOR gate
8. Test dengan 4 kombinasi input
9. Jawab pertanyaan: **"Kapan NOR menghasilkan output 1?"**

**Deliverable:**
- Screenshot XOR dengan tabel hasil (wajib)
- Screenshot NAND dengan tabel hasil (wajib)
- Screenshot NOR dengan tabel hasil (bonus)
- Jawaban untuk setiap pertanyaan (1-2 kalimat)

**Kriteria Nilai:**
- Screenshot + testing XOR & NAND: **8 poin**
- Jawaban 2 pertanyaan (XOR & NAND): **4 poin**
- Penjelasan konsep: **3 poin**
- Bonus NOR: **+3 poin ekstra**

**Tips:**
- XOR = "Exclusive OR" → output 1 kalau input BERBEDA
- NAND = "NOT AND" → kebalikan dari AND
- NOR = "NOT OR" → kebalikan dari OR

---

#### Task 2.2: Half Adder (25 poin)

**Konsep:** Half Adder adalah rangkaian yang menjumlahkan 2 bit (angka biner).

**Spesifikasi:**
- **Input:** A, B (2 bit yang mau dijumlahkan)
- **Output:**
  - **Sum** = hasil penjumlahan (bit satuan)
  - **Carry** = "simpanan" (bit puluhan, kayak "nyimpen" pas 1+1=2)

**Rumus:**
- **Sum = A XOR B** (pakai XOR gate)
- **Carry = A AND B** (pakai AND gate)

**Contoh Perhitungan:**
```
Contoh 1:
1 + 1 = 10 (dalam biner)
       ↑↑
    Carry=1, Sum=0

Contoh 2:
1 + 0 = 01 (dalam biner)
       ↑↑
    Carry=0, Sum=1

Contoh 3:
0 + 0 = 00 (dalam biner)
       ↑↑
    Carry=0, Sum=0
```

**Deliverable:**
- Screenshot rangkaian Half Adder lengkap (harus terlihat XOR dan AND gate)
- Tabel testing dengan 4 kombinasi input:

| A | B | Sum (A⊕B) | Carry (A·B) | Desimal |
|---|---|-----------|-------------|---------|
| 0 | 0 |     ?     |      ?      | 0 + 0 = 0 |
| 0 | 1 |     ?     |      ?      | 0 + 1 = 1 |
| 1 | 0 |     ?     |      ?      | 1 + 0 = 1 |
| 1 | 1 |     ?     |      ?      | 1 + 1 = 2 |

- Penjelasan: **Kenapa Sum pakai XOR dan Carry pakai AND?** (2-3 kalimat)

**Kriteria Nilai:**
- Rangkaian benar (XOR untuk Sum + AND untuk Carry): **12 poin**
- Tabel testing lengkap dan benar: **8 poin**
- Penjelasan konsep yang baik: **5 poin**

**Hint untuk Penjelasan:**
- Sum pakai XOR karena... (pikirkan kapan hasil penjumlahan ganjil/genap)
- Carry pakai AND karena... (pikirkan kapan ada "simpanan")

---

### 🟡 **BAGIAN 3: Project Mini - Sistem Voting** (35 poin)

#### Task 3: Sistem Voting 3 Sensor

**Cerita:**
Sebuah sistem keamanan canggih punya **3 sensor** (Sensor A, Sensor B, Sensor C).
Alarm akan berbunyi (Output = 1) jika **MINIMAL 2 dari 3 sensor** mendeteksi bahaya.

Ini disebut **"Majority Voter"** - keputusan berdasarkan suara mayoritas!

**Kenapa perlu 3 sensor?**
- Kalau cuma 1 sensor, bisa false alarm
- Kalau 2 sensor berbeda pendapat, perlu yang ketiga untuk "pemecah suara"
- Sistem ini lebih reliable!

**Tugas:**
1. Tulis rumus Boolean untuk sistem ini
2. Buat rangkaiannya di simulator
3. Test dengan SEMUA 8 kombinasi input

---

**Panduan Mengerjakan:**

**Step 1: Tulis Rumus Boolean**

Alarm berbunyi kalau:
- (A DAN B aktif) ATAU
- (B DAN C aktif) ATAU
- (A DAN C aktif)

```
Rumus: F = (A·B) + (B·C) + (A·C)
Atau bisa ditulis: F = AB + BC + AC
```

---

**Step 2: Buat Rangkaian**

Rangkaian membutuhkan:
- **3 AND gates** untuk: (A·B), (B·C), (A·C)
- **1 OR gate dengan 3 input** (atau 2 OR gate jika simulator tidak punya 3-input OR)

**Struktur:**
```
Input A ──┐
          ├─ AND1 ──┐
Input B ──┘          │
                     ├─ OR ──→ Output F
Input B ──┐          │
          ├─ AND2 ──┤
Input C ──┘          │
                     │
Input A ──┐          │
          ├─ AND3 ──┘
Input C ──┘
```

**Tips:** Kalau simulator tidak ada OR dengan 3 input, pakai 2 OR gate:
- OR1: menggabungkan output AND1 dan AND2
- OR2: menggabungkan output OR1 dan AND3

---

**Step 3: Test dengan SEMUA Skenario**

Lengkapi tabel ini:

| A | B | C | A·B | B·C | A·C | F | Sensor Aktif | Alarm? |
|---|---|---|-----|-----|-----|---|--------------|--------|
| 0 | 0 | 0 |  0  |  0  |  0  | 0 | 0 sensor     | ❌ Tidak |
| 0 | 0 | 1 |  0  |  0  |  0  | 0 | 1 sensor     | ❌ Tidak |
| 0 | 1 | 0 |  0  |  0  |  0  | 0 | 1 sensor     | ❌ Tidak |
| 0 | 1 | 1 |  0  |  ?  |  0  | ? | 2 sensor     | ✅ YA! |
| 1 | 0 | 0 |  0  |  0  |  0  | 0 | 1 sensor     | ❌ Tidak |
| 1 | 0 | 1 |  0  |  0  |  ?  | ? | 2 sensor     | ✅ YA! |
| 1 | 1 | 0 |  ?  |  0  |  0  | ? | 2 sensor     | ✅ YA! |
| 1 | 1 | 1 |  1  |  1  |  1  | 1 | 3 sensor     | ✅ YA! |

---

**Deliverable:**

1. **Rumus Boolean** (tulis dengan jelas, pakai notasi · untuk AND dan + untuk OR)
2. **Screenshot rangkaian lengkap** (harus terlihat 3 AND gates dan OR gate)
3. **Tabel testing lengkap** (8 kombinasi, isi semua kolom)
4. **Analisis** (jawab 2 pertanyaan):
   - "Kapan alarm TIDAK berbunyi?" (dalam kondisi apa saja?)
   - "Kenapa sistem ini lebih reliable daripada pakai 1 sensor saja?"

---

**Kriteria Nilai:**
- Rumus Boolean benar (AB + BC + AC): **5 poin**
- Rangkaian benar (3 AND gates + OR gates): **15 poin**
- Tabel testing lengkap (8 kombinasi, semua benar): **10 poin**
- Analisis kedua pertanyaan: **5 poin**

---

**Bonus Challenge (+5 poin):**

Bisa menjelaskan dalam bentuk **SOP (Sum of Products)**?

Tuliskan:
- Minterm mana saja yang menghasilkan F=1?
- Tulis dalam notasi: F = Σm(...)

Contoh format:
```
F = 1 untuk kombinasi: m₃, m₅, m₆, m₇
F = Σm(3, 5, 6, 7)

Dimana:
m₃ = A'BC (baris 011)
m₅ = AB'C (baris 101)
m₆ = ABC' (baris 110)
m₇ = ABC (baris 111)
```

Ini adalah **soft introduction** ke materi Bab 13! 😊

---

## 📊 Rekapitulasi Penilaian

| Bagian | Task | Poin | Total |
|--------|------|------|-------|
| **BAGIAN 1** | Task 1.1: Gerbang Dasar (NOT, AND, OR) | 15 | **25** |
| (Gerbang Dasar) | Task 1.2: Rangkaian Sederhana | 10 |  |
| **BAGIAN 2** | Task 2.1: XOR, NAND, NOR | 15 | **40** |
| (Gerbang Spesial) | Task 2.2: Half Adder | 25 |  |
| **BAGIAN 3** | Task 3: Sistem Voting (Majority Voter) | 35 | **35** |
| (Project Mini) |  |  |  |
| **TOTAL** |  |  | **100** |
| **BONUS** | NOR Gate (Task 2.1C) | +3 | **Max +8** |
|  | SOP Analysis (Task 3 Bonus) | +5 |  |

**Nilai Maksimum:** 108/100 (bonus tidak menambah lebih dari 100)

---

## 📦 Format Pengumpulan

### File yang Dikumpulkan:

**1. File Presentasi (PPT/Google Slides/PDF)** - Pilih yang paling mudah!

**Struktur slide yang direkomendasikan:**

```
📄 Slide 1: Cover
- Judul: Tugas Praktikum Gerbang Logika
- Nama Kelompok: [Nama Kelompok]
- Anggota:
  • [Nama 1] - [NIM]
  • [Nama 2] - [NIM]
  • [Nama 3] - [NIM]
- Simulator yang dipakai: [Nama Simulator]

📄 Slide 2: Bagian 1 - Gerbang Dasar (NOT, AND, OR)
- Screenshot 3 gerbang
- Tabel kebenaran
- Penjelasan masing-masing

📄 Slide 3: Bagian 1 - Rangkaian Sederhana
- Screenshot rangkaian F = (A·B) + C
- Testing 4 kombinasi
- Kesimpulan

📄 Slide 4: Bagian 2 - XOR, NAND, (NOR)
- Screenshot gerbang
- Tabel testing
- Jawaban pertanyaan

📄 Slide 5: Bagian 2 - Half Adder
- Screenshot rangkaian
- Tabel testing 4 kombinasi
- Penjelasan konsep

📄 Slide 6-7: Bagian 3 - Sistem Voting
- Rumus Boolean
- Screenshot rangkaian (3 AND + OR)
- Tabel testing 8 kombinasi
- Analisis

📄 Slide 8: Bonus (jika ada)
- NOR gate testing
- SOP Analysis

📄 Slide 9: Kesimpulan & Kontribusi
- Apa yang dipelajari?
- Apa yang paling menarik/challenging?
- Kontribusi masing-masing anggota:
  • [Nama 1]: Bagian 1 + koordinasi
  • [Nama 2]: Bagian 2 + dokumentasi
  • [Nama 3]: Bagian 3 + finalisasi
```

---

**2. Nama File:**
```
Format: LogMat_Simulator_Kelompok[X]_[NamaAnggota].pdf

Contoh:
- LogMat_Simulator_Kelompok5_Budi-Ani-Citra.pdf
- LogMat_Simulator_KelA_JohnDoe-JaneSmith.pdf
```

**3. Platform Pengumpulan:** [Sesuai LMS/instruksi dosen]

**4. File Size:** Maksimal 10 MB (compress gambar jika perlu)

---

## 🎯 Tips Sukses

### ✅ Strategi Mengerjakan (Timeline 7 Hari):

**Hari 1-2: Bagian 1 (Gerbang Dasar)**
- Kenalan dengan simulator (30 menit)
- Buat dan test NOT, AND, OR (1 jam)
- Buat rangkaian sederhana (45 menit)
- Screenshot dan dokumentasi (30 menit)
- **Estimasi: 2.5-3 jam**

**Hari 3-4: Bagian 2 (Gerbang Spesial & Half Adder)**
- Eksplorasi XOR, NAND (1 jam)
- (Bonus) NOR gate (30 menit)
- Buat Half Adder (1.5 jam)
- Testing dan dokumentasi (1 jam)
- **Estimasi: 3-4 jam**

**Hari 5-6: Bagian 3 (Project Mini)**
- Pahami konsep Majority Voter (30 menit)
- Tulis rumus Boolean (15 menit)
- Buat rangkaian (3 AND + OR) (1.5 jam)
- Testing 8 kombinasi (45 menit)
- Analisis dan dokumentasi (45 menit)
- **Estimasi: 3-3.5 jam**

**Hari 7: Finalisasi**
- Rapikan semua slide (1 jam)
- Review kelengkapan (30 menit)
- Cek checklist pre-submit (15 menit)
- Submit! (15 menit)
- **Estimasi: 2 jam**

**Total Workload: ~10-12 jam untuk kelompok (3-4 jam per orang)**

---

### 💡 Tips Screenshot yang Bagus:

**DO ✅**
1. **Resolusi tinggi** - Jangan buram, minimal 1280x720
2. **Lighting baik** - Kontras jelas, warna terlihat
3. **Zoom appropriate** - Tidak terlalu kecil, tidak terpotong
4. **Label jelas** - Tulis "Input A", "Output F", dll
5. **Show values** - Angka 0 atau 1 terlihat jelas
6. **Clean wiring** - Wire tidak berantakan atau overlap

**DON'T ❌**
1. Jangan screenshot pakai HP dengan angle miring
2. Jangan ada watermark besar di tengah
3. Jangan terlalu banyak white space kosong
4. Jangan campurkan multiple circuits dalam 1 screenshot (kecuali purposely)

**Tool Screenshot Recommended:**
- **Windows:** Win + Shift + S (Snipping Tool)
- **Mac:** Cmd + Shift + 4
- **Browser Extension:** Awesome Screenshot, Lightshot
- **Built-in Simulator:** Kebanyakan simulator punya tombol "Export Image"

---

### 🤝 Pembagian Tugas Kelompok (Saran):

**Untuk Kelompok 3 Orang:**

**👤 Anggota 1 - Koordinator:**
- Bagian 1 (Gerbang Dasar)
- Koordinasi timeline
- Review final sebelum submit

**👤 Anggota 2 - Technical Lead:**
- Bagian 2 (Gerbang Spesial & Half Adder)
- Help troubleshoot kalau ada issue
- Quality control rangkaian

**👤 Anggota 3 - Documentation Lead:**
- Bagian 3 (Project Mini)
- Compile semua ke slide
- Formatting dan finalisasi

**PENTING:** Tetap **diskusi bareng** untuk semua bagian! Pembagian tugas bukan berarti kerja sendiri-sendiri. Tujuannya agar semua paham konsepnya.

---

**Untuk Kelompok 2 Orang:**

**👤 Anggota 1:**
- Bagian 1 + Bagian 2.1 (XOR, NAND, NOR)
- Dokumentasi Bagian 1

**👤 Anggota 2:**
- Bagian 2.2 (Half Adder) + Bagian 3
- Dokumentasi Bagian 2 & 3
- Finalisasi slide

---

### 🏆 Cara Dapat Nilai Maksimal:

**Target 100+ (dengan Bonus):**

1. **Kerjakan semua task dengan lengkap** (100 poin)
2. **Bonus NOR gate** (+3 poin)
3. **Bonus SOP Analysis** (+5 poin)
4. **Screenshot berkualitas tinggi** (impression bonus dari dosen)
5. **Analisis mendalam** (bukan cuma jawab singkat)
6. **Kreativitas dalam presentasi** (layout slide menarik)

**Jangan Lupakan:**
- Setiap screenshot harus ada **label**
- Setiap test case harus ada **penjelasan** (bukan cuma angka)
- Kesimpulan harus **insight**, bukan cuma mengulang
- Kontribusi anggota harus **jujur dan fair**

---

## 🏆 Bonus Points (Opsional, Max +10 poin)

Mau nilai lebih? Coba challenge ini:

### Bonus 1: NOR Gate (+3 poin)
- Sudah dijelaskan di Task 2.1C
- Buat, test, dan explain NOR gate

### Bonus 2: SOP Analysis (+5 poin)
- Sudah dijelaskan di Task 3 Bonus
- Identifikasi minterm dan tulis notasi Σm(...)

### Bonus 3: Video Demonstrasi (+5 poin)
**Requirements:**
- Durasi: 2-3 menit
- Pilih 1 rangkaian (Half Adder atau Majority Voter)
- Demo cara kerja sambil menjelaskan
- Upload ke YouTube (bisa unlisted/private)
- Cantumkan link di slide

**Tips Video:**
- Tidak perlu editing fancy
- Screen recording + voice over sudah cukup
- Fokus pada penjelasan yang jelas
- Tools: OBS Studio, ShareX (free)

### Bonus 4: Rangkaian Kreatif (+2 poin)
**Requirements:**
- Buat 1 rangkaian sendiri (selain yang diminta)
- Harus punya aplikasi/fungsi real-world yang jelas
- Minimal 3 gate
- Screenshot + penjelasan

**Ide Rangkaian Kreatif:**
1. **Full Adder** (upgrade dari Half Adder)
2. **Lampu Lalu Lintas Sederhana** (3 output: Red, Yellow, Green)
3. **Priority Encoder** (4 input, output priority tertinggi)
4. **Comparator** (bandingkan 2 angka 2-bit)
5. **Multiplexer 2-to-1** (selector circuit)

**Total Bonus Maksimal:** +15 poin (tapi nilai tidak lebih dari 100)

---

## ❓ FAQ (Frequently Asked Questions)

### Tentang Simulator

**Q: Apakah harus pakai simulator yang sama untuk semua anggota?**
A: Tidak wajib, tapi **sangat direkomendasikan** untuk konsistensi. Kalau pakai simulator berbeda, pastikan format screenshot konsisten.

**Q: Simulator tidak bisa diakses / error, gimana?**
A:
1. Coba simulator alternatif (Academo paling jarang error)
2. Clear browser cache
3. Coba browser lain (Chrome/Firefox)
4. Kalau masih error, hubungi dosen

**Q: Apakah boleh pakai simulator offline?**
A: Boleh, asal bisa screenshot dengan jelas dan fungsionalitas sama.

---

### Tentang Pengerjaan

**Q: Boleh lihat punya teman kelompok lain?**
A: Boleh **diskusi konsep**, tapi rangkaian dan screenshot harus buat sendiri. Plagiarisme akan kena sanksi.

**Q: Kalau rangkaian error terus, apa yang harus dilakukan?**
A:
1. **Cek koneksi wire** - Pastikan semua tersambung
2. **Cek nilai input** - Pastikan 0 atau 1, bukan floating
3. **Cek jenis gate** - Pastikan tidak salah pilih (misal AND vs NAND)
4. **Simplify** - Coba buat lebih sederhana dulu
5. **Tanya dosen/asisten** saat jam konsultasi

**Q: Berapa lama rata-rata mengerjakan ini?**
A: Untuk kelompok 3 orang: **10-12 jam total** (~3-4 jam per orang). Kalau sudah terbiasa dengan simulator, bisa lebih cepat.

**Q: Apakah wajib mengerjakan bonus?**
A: **Tidak wajib**. Bonus hanya untuk yang mau nilai ekstra atau challenge lebih.

---

### Tentang Dokumentasi

**Q: Screenshot harus pakai aplikasi apa?**
A: Bebas! Bisa:
- Windows: Win + Shift + S (built-in)
- Mac: Cmd + Shift + 4
- Tool: Snipping Tool, Lightshot, ShareX
- Atau pakai fitur export dari simulator (biasanya ada)

**Q: Format slide harus PowerPoint?**
A: Tidak harus! Bisa:
- PowerPoint (.pptx)
- Google Slides (download PDF atau share link)
- Canva
- PDF biasa
- Keynote (Mac)

Yang penting: **Jelas, terstruktur, dan mudah dibaca**

**Q: Boleh pakai template slide yang fancy?**
A: Boleh! Asal tidak mengalihkan fokus dari konten. Content > Style.

---

### Tentang Kelompok

**Q: Kalau anggota kelompok tidak ikut ngerjain, gimana?**
A:
1. Komunikasi dulu dengan anggota tersebut
2. Kalau tetap tidak responsif, lapor ke dosen
3. Akan ada mekanisme penilaian individual
4. Cantumkan kontribusi masing-masing di slide

**Q: Boleh kelompok 1 orang (individual)?**
A: Sebaiknya kelompok, tapi kalau ada alasan khusus, konsultasi dengan dosen.

**Q: Boleh kelompok 4 orang?**
A: Maksimal 3 orang. Kalau ada sisa, bisa diatur oleh dosen.

---

### Tentang Penilaian

**Q: Bagaimana cara dosen menilai tugas ini?**
A: Berdasarkan rubrik yang sudah dijelaskan di setiap task. Fokus pada:
- Correctness (apakah rangkaian benar?)
- Completeness (apakah semua deliverable ada?)
- Understanding (apakah penjelasan menunjukkan pemahaman?)
- Quality (apakah screenshot dan dokumentasi berkualitas?)

**Q: Apakah ada tolerance untuk kesalahan kecil?**
A: Ya, selama konsep dasarnya benar. Misal typo di penjelasan tidak masalah besar, tapi rangkaian yang salah total akan kehilangan poin.

**Q: Kalau terlambat submit, penalty-nya berapa?**
A:
- 1-24 jam: -10 poin
- 25-48 jam: -20 poin
- 49-72 jam: -50 poin
- >72 jam: tidak diterima

**Jadi submit tepat waktu!** Set reminder 2 jam sebelum deadline.

---

## 📞 Kontak & Bantuan

**Jam Konsultasi:**
[Diisi dosen - misal: Setiap Rabu 13:00-15:00]

**Forum Diskusi:**
[Link grup WhatsApp/Telegram/Discord/LMS Forum]

**Email Dosen:**
[Email dosen]

**Response Time:**
- Weekday: Maksimal 1x24 jam
- Weekend: Maksimal 2x24 jam

**Tips Bertanya yang Baik:**
1. Jelaskan apa yang sudah dicoba
2. Cantumkan screenshot error (jika ada)
3. Spesifik tentang masalahnya
4. Sopan dan sabar menunggu respons

**Contoh Pertanyaan Baik:**
> "Pak/Bu, saya sudah coba buat Half Adder di CircuitVerse, tapi output Sum selalu 0.
> Saya sudah cek wire-nya tersambung semua. Ini screenshot-nya: [link].
> Kira-kira masalahnya dimana ya?"

**Contoh Pertanyaan Kurang Baik:**
> "Pak/Bu, error. Gimana?"

---

## 📅 Timeline

| Kegiatan | Deadline |
|----------|----------|
| **Release Tugas** | [Tanggal] |
| **Konsultasi Terbuka (Opsional)** | [Tanggal] |
| **Deadline Pengumpulan** | [Tanggal] ⏰ 23:59 WIB |
| **Pengumuman Nilai** | [Tanggal] |

**Keterlambatan:**
- 1-24 jam: -10 poin
- 25-48 jam: -20 poin
- 49-72 jam: -50 poin
- >72 jam: tidak diterima (nilai 0)

**IMPORTANT:** Deadline adalah **hard deadline**. Plan ahead dan jangan last minute!

---

## 🎓 Tujuan Pembelajaran

Setelah menyelesaikan tugas ini, kalian diharapkan dapat:

✅ **Memahami cara kerja gerbang logika dasar** (NOT, AND, OR)
- Bisa jelaskan fungsi masing-masing
- Tau kapan output 1 atau 0
- Bisa baca tabel kebenaran

✅ **Menggunakan gerbang logika lanjutan** (XOR, NAND, NOR)
- Paham perbedaan XOR vs OR
- Tau konsep universal gate (NAND, NOR)
- Bisa identifikasi kapan pakai gate apa

✅ **Membuat rangkaian kombinasional sederhana**
- Bisa implementasikan rumus Boolean ke rangkaian
- Bisa breakdown problem jadi kombinasi gate
- Bisa verifikasi rangkaian dengan testing

✅ **Memahami aplikasi praktis gerbang logika**
- Half Adder untuk penjumlahan biner
- Majority Voter untuk decision making
- Bisa relate konsep teori ke real-world

✅ **Membaca dan menulis ekspresi Boolean**
- Notasi AND (·), OR (+), NOT (')
- Bisa konversi cerita → rumus Boolean
- (Bonus) Pengenalan SOP dan minterm

✅ **Skill teknis tambahan**
- Menggunakan simulator digital
- Dokumentasi teknis
- Bekerja dalam tim
- Problem solving

---

## 📌 Checklist Sebelum Submit

**Sebelum mengumpulkan, pastikan:**

### Kelengkapan Konten
- [ ] Bagian 1: Task 1.1 lengkap (NOT, AND, OR dengan tabel dan penjelasan)
- [ ] Bagian 1: Task 1.2 lengkap (rangkaian sederhana dengan testing)
- [ ] Bagian 2: Task 2.1 lengkap (XOR dan NAND dengan jawaban pertanyaan)
- [ ] Bagian 2: Task 2.2 lengkap (Half Adder dengan penjelasan)
- [ ] Bagian 3: Task 3 lengkap (Majority Voter dengan 8 test case)
- [ ] (Opsional) Bonus: NOR gate
- [ ] (Opsional) Bonus: SOP analysis

### Kualitas Screenshot
- [ ] Semua screenshot jelas dan HD
- [ ] Setiap screenshot ada label input/output
- [ ] Nilai 0/1 terlihat jelas
- [ ] Tidak ada screenshot yang buram atau terpotong

### Dokumentasi
- [ ] Slide cover ada (nama kelompok, anggota, NIM)
- [ ] Setiap bagian terstruktur dengan baik
- [ ] Tabel testing lengkap untuk semua task
- [ ] Penjelasan/analisis ada untuk setiap task yang require
- [ ] Slide kesimpulan ada
- [ ] Kontribusi anggota tercantum

### Format & Teknis
- [ ] Format file: PDF atau PPT
- [ ] Nama file sesuai format: `LogMat_Simulator_Kelompok[X]_[Nama].pdf`
- [ ] File size < 10 MB
- [ ] Tidak ada typo besar atau kesalahan fatal
- [ ] Link (jika ada video bonus) berfungsi

### Final Check
- [ ] Sudah direview oleh semua anggota kelompok
- [ ] Sudah dicek di komputer lain (pastikan file tidak corrupt)
- [ ] Sudah siap submit ke platform yang ditentukan

**Kalau sudah ✅ semua, SUBMIT!** 🚀

---

## 🎉 Penutup

### Kata Penutup

**Tugas ini bukan tentang "nilai sempurna", tapi tentang PROSES BELAJAR!**

Yang penting:
- ✅ **Coba dan eksperimen** - Jangan takut salah!
- ✅ **Pahami konsepnya** - Bukan cuma copy-paste
- ✅ **Enjoy the process** - Gerbang logika itu fun!
- ✅ **Kolaborasi** - Belajar bareng lebih asik
- ✅ **Tanya kalau bingung** - Better ask than guess wrong!

### Fun Facts

🎮 **Tahukah kamu?**

1. **Semua game yang kamu main** - Dari Minecraft sampai Call of Duty, semuanya dibangun dari jutaan gerbang logika ini!

2. **Processor di laptop/HP kamu** - Punya MILIARAN transistor yang membentuk gerbang-gerbang logika. Intel Core i7 punya ~2 MILIAR transistor!

3. **Half Adder yang kamu buat** - Adalah building block dasar untuk kalkulator dan semua operasi matematika di komputer.

4. **Majority Voter** - Dipakai di SpaceX dan NASA untuk sistem redundansi spacecraft! Kalau 1 sensor error, masih ada 2 sensor lain untuk backup.

5. **XOR gate** - Dipakai dalam enkripsi data. Setiap kali kamu browsing dengan HTTPS, ada jutaan operasi XOR yang terjadi!

### Mindset yang Benar

❌ **Mindset Salah:**
- "Pokoknya yang penting beres"
- "Copy dari teman terus edit dikit"
- "Yang penting screenshot lengkap"

✅ **Mindset Benar:**
- "Saya mau PAHAM, bukan cuma dapet nilai"
- "Saya mau bisa JELASIN ke orang lain"
- "Saya mau bisa APPLY ini ke project lain"

### Next Steps

Setelah tugas ini, kalian akan lebih siap untuk:
- Materi berikutnya: Karnaugh Maps dan circuit optimization
- Project embedded systems (Arduino, Raspberry Pi)
- Digital design courses (FPGA, Verilog)
- Understanding how computers actually work!

---

**SELAMAT MENGERJAKAN! 🚀💻**

*Remember: Every expert was once a beginner. Take your time, learn the concepts, and don't hesitate to ask for help!*

---

## 📄 Metadata

**Dibuat oleh:** [Nama Dosen]
**Mata Kuliah:** Logika Matematika
**Semester:** [Semester/Tahun]
**Versi Dokumen:** FINAL v1.0
**Tanggal Revisi Terakhir:** [Tanggal]

---

**© [Tahun] [Nama Institusi]**
**Dokumen ini untuk keperluan edukasi.**

---

## 🔖 Lampiran

### Lampiran A: Quick Reference Gerbang Logika

| Gate | Symbol | Truth Table (A,B→Y) | Formula | Kata Kunci |
|------|--------|---------------------|---------|------------|
| **NOT** | ─┤>o─ | 0→1, 1→0 | Y = A' | Membalik |
| **AND** | ─┤ ╱╲ ├─ | (1,1)→1, others→0 | Y = A·B | Semua 1 |
| **OR** | ─┤/‾‾\├─ | (0,0)→0, others→1 | Y = A+B | Min. satu 1 |
| **NAND** | ─┤ ╱╲ ├o─ | (1,1)→0, others→1 | Y = (A·B)' | Kebalikan AND |
| **NOR** | ─┤/‾‾\├o─ | (0,0)→1, others→0 | Y = (A+B)' | Kebalikan OR |
| **XOR** | ─┤) )├─ | Different→1, same→0 | Y = A⊕B | Berbeda |
| **XNOR** | ─┤) )├o─ | Same→1, different→0 | Y = (A⊕B)' | Sama |

### Lampiran B: Troubleshooting Guide

| Problem | Possible Cause | Solution |
|---------|----------------|----------|
| Output selalu 0 | Wire tidak tersambung | Cek semua koneksi |
| Output selalu 1 | Short circuit atau gate salah | Cek jenis gate |
| Output random | Input floating (tidak defined) | Set input ke 0 atau 1 |
| Simulator crash | Browser/memory issue | Refresh, atau pakai simulator lain |
| Tidak bisa save | Platform tidak support | Export manual atau screenshot |

### Lampiran C: Resources Tambahan

**Tutorial Simulator:**
- CircuitVerse Docs: https://docs.circuitverse.org/
- Logic.ly Tutorials: https://logic.ly/lessons/
- Academo Guide: Built-in (hover on components)

**Belajar Lebih Lanjut:**
- Khan Academy: Digital Circuits
- YouTube: "Neso Academy" channel
- Book: "Digital Design" by Morris Mano

**Practice More:**
- https://learn.circuitverse.org/ (interactive lessons)
- https://simulator.io/board (more circuits)

---

**END OF DOCUMENT**

✨ **Good luck and have fun with logic gates!** ✨
