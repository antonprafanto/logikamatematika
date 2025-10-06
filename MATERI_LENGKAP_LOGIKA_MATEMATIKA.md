# 📚 Logika Matematika untuk Ilmu Komputer

<div align="center">

![Logic](https://img.shields.io/badge/Logika-Matematika-blue?style=for-the-badge)
![Computer Science](https://img.shields.io/badge/Ilmu-Komputer-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-Educational-orange?style=for-the-badge)

**Materi Pembelajaran Lengkap**

📖 **Sumber**: Buku "Logika Matematika untuk Ilmu Komputer"  
✍️ **Penulis**: F. Soesianto & Djoni Dwijono  
🏢 **Penerbit**: Penerbit ANDI

[🏠 Home](#-logika-matematika-untuk-ilmu-komputer) • [📋 Daftar Isi](#-daftar-isi) • [🚀 Mulai Belajar](#bagian-i-logika-proposisional) • [💡 Aplikasi](#-aplikasi-dalam-ilmu-komputer)

</div>

---

## 📋 Daftar Isi

### BAGIAN I: LOGIKA PROPOSISIONAL
- [BAB 1: Pengenalan Logika Matematika](#bab-1-pengenalan-logika-matematika)
- [BAB 2: Pengantar Logika Proposisional](#bab-2-pengantar-logika-proposisional)
- [BAB 3: Tabel Kebenaran](#bab-3-tabel-kebenaran)
- [BAB 4: Proposisi Majemuk](#bab-4-proposisi-majemuk)
- [BAB 5: Tautologi](#bab-5-tautologi)
- [BAB 6: Ekuivalen Logis](#bab-6-ekuivalen-logis)
- [BAB 7: Penyederhanaan](#bab-7-penyederhanaan)

### BAGIAN II: METODE PEMBUKTIAN LOGIKA PROPOSISIONAL
- [BAB 8: Strategi Pembalikan](#bab-8-strategi-pembalikan)
- [BAB 9: Tablo Semantik](#bab-9-tablo-semantik)
- [BAB 10: Bentuk Normal](#bab-10-bentuk-normal)
- [BAB 11: Resolusi](#bab-11-resolusi)
- [BAB 12: Deduksi Alami](#bab-12-deduksi-alami)
- [BAB 13: Kalkulus Deret](#bab-13-kalkulus-deret)

### BAGIAN III: LOGIKA PREDIKAT
- [BAB 14: Pengantar Logika Predikat](#bab-14-pengantar-logika-predikat)
- [BAB 15: Komponen-komponen Sintaktik](#bab-15-komponen-komponen-sintaktik)
- [BAB 16: Kuantor-kuantor](#bab-16-kuantor-kuantor)
- [BAB 17: Penafsiran dan Validitas](#bab-17-penafsiran-dan-validitas)
- [BAB 18: Derivasi](#bab-18-derivasi)

### BAGIAN IV: METODE PEMBUKTIAN LOGIKA PREDIKAT
- [BAB 19: Ekuivalen Logis untuk Logika Predikat](#bab-19-ekuivalen-logis-untuk-logika-predikat)
- [BAB 20: Tablo Semantik untuk Logika Predikat](#bab-20-tablo-semantik-untuk-logika-predikat)
- [BAB 21: Bentuk Normal Prenex](#bab-21-bentuk-normal-prenex)
- [BAB 22: Resolusi untuk Logika Predikat](#bab-22-resolusi-untuk-logika-predikat)

---

## BAGIAN I: LOGIKA PROPOSISIONAL

### BAB 1: Pengenalan Logika Matematika

#### 1.1 Pendahuluan
Logika matematika adalah studi formal tentang penalaran yang benar (valid reasoning). Dalam ilmu komputer, logika matematika menjadi fondasi untuk:
- Desain algoritma
- Verifikasi program
- Desain bahasa pemrograman
- Kecerdasan buatan
- Database query

#### 1.2 Argumen
**Definisi**: Argumen adalah sekumpulan pernyataan yang terdiri dari premis-premis dan kesimpulan.

**Struktur Argumen**:
```
Premis 1: P₁
Premis 2: P₂
...
Premis n: Pₙ
─────────────
Kesimpulan: C
```

**Contoh**:
```
Premis 1: Semua manusia mortal
Premis 2: Socrates adalah manusia
─────────────────────────────────
Kesimpulan: Socrates mortal
```

#### 1.3 Validitas Argumen
Argumen dikatakan **valid** jika:
- Ketika semua premis bernilai benar, maka kesimpulan pasti benar
- Struktur argumen menjamin kebenaran kesimpulan

**Argumen Valid ≠ Kesimpulan Benar**
- Argumen valid hanya menjamin: premis benar → kesimpulan benar
- Argumen bisa valid tapi kesimpulannya salah (jika premisnya salah)

#### 1.4 Logika Klasik
Karakteristik logika klasik:
- **Bivalensi**: Setiap proposisi bernilai benar (True) atau salah (False)
- **Law of Excluded Middle**: P ∨ ¬P selalu benar
- **Law of Non-contradiction**: ¬(P ∧ ¬P) selalu benar

#### 1.5 Logika Modern
Perkembangan dari logika klasik dengan:
- Formalisasi yang lebih ketat
- Sistem aksiomatik
- Kalkulus proposisional dan predikat
- Teori model dan bukti

#### 1.6 Logika Banyak Nilai
Sistem logika dengan lebih dari dua nilai kebenaran:
- **Three-valued logic**: True, False, Unknown
- **Fuzzy logic**: Nilai kebenaran dalam rentang [0, 1]
- **Aplikasi**: Database (NULL values), AI (uncertainty)

#### 1.7 Mengenal Logika Lebih Dalam
Eksplorasi berbagai sistem logika:
- Modal logic (necessity, possibility)
- Temporal logic (time-based reasoning)
- Intuitionistic logic (constructive mathematics)

---

### BAB 2: Pengantar Logika Proposisional

#### 2.1 Pendahuluan
**Proposisi** adalah pernyataan yang memiliki nilai kebenaran (benar atau salah).

**Contoh Proposisi**:
- ✓ "2 + 2 = 4" (proposisi, benar)
- ✓ "Jakarta adalah ibukota Indonesia" (proposisi, benar)
- ✗ "Tutup pintu!" (bukan proposisi, perintah)
- ✗ "x > 5" (bukan proposisi, bergantung pada x)

#### 2.2 Argumen-argumen
Berbagai bentuk argumen dalam logika proposisional:

**Modus Ponens**:
```
P → Q
P
─────
Q
```

**Modus Tollens**:
```
P → Q
¬Q
─────
¬P
```

**Silogisme Hipotesis**:
```
P → Q
Q → R
─────
P → R
```

#### 2.3 Proposisi-proposisi
Jenis-jenis proposisi:
- **Proposisi atomik**: Proposisi sederhana yang tidak dapat dipecah
- **Proposisi majemuk**: Kombinasi dari proposisi atomik dengan operator logika

#### 2.4 Pemberian Nilai
Cara memberikan nilai kebenaran pada proposisi:
- Assignment (penugasan nilai)
- Truth valuation
- Interpretation

---

### BAB 3: Tabel Kebenaran

#### 3.1 Pendahuluan
**Tabel kebenaran** adalah tabel yang menunjukkan nilai kebenaran dari proposisi majemuk untuk semua kemungkinan nilai proposisi atomiknya.

#### 3.2 Tabel Kebenaran
Untuk n variabel proposisi, tabel kebenaran memiliki 2ⁿ baris.

**Contoh** (2 variabel):
```
P | Q | (hasil operasi)
--|---|----------------
T | T | ...
T | F | ...
F | T | ...
F | F | ...
```

#### 3.3 Perangkai Logika atau Operator

##### 3.3.1 Konjungsi (AND / ∧)
P ∧ Q benar hanya jika P dan Q keduanya benar.

```
P | Q | P ∧ Q
--|---|------
T | T |   T
T | F |   F
F | T |   F
F | F |   F
```

**Aplikasi**: 
- Kondisi if dengan multiple conditions: `if (x > 0 && y > 0)`
- Gerbang AND dalam sirkuit digital

##### 3.3.2 Disjungsi (OR / ∨)
P ∨ Q benar jika setidaknya satu dari P atau Q benar.

```
P | Q | P ∨ Q
--|---|------
T | T |   T
T | F |   T
F | T |   T
F | F |   F
```

**Aplikasi**:
- Kondisi if dengan alternatif: `if (x < 0 || y < 0)`
- Gerbang OR dalam sirkuit digital

##### 3.3.3 Negasi (NOT / ¬)
¬P adalah kebalikan dari P.

```
P | ¬P
--|---
T | F
F | T
```

**Aplikasi**:
- Inversi kondisi: `if (!isValid)`
- Gerbang NOT dalam sirkuit digital

##### 3.3.4 Implikasi (→)
P → Q benar kecuali P benar dan Q salah.

```
P | Q | P → Q
--|---|------
T | T |   T
T | F |   F
F | T |   T
F | F |   T
```

**Catatan Penting**: "False implies anything" - jika premis salah, implikasi selalu benar.

**Aplikasi**:
- Kondisi if-then
- Aturan produksi dalam AI
- Invariant dalam program verification

##### 3.3.5 Ekuivalensi (↔)
P ↔ Q benar jika P dan Q memiliki nilai kebenaran yang sama.

```
P | Q | P ↔ Q
--|---|------
T | T |   T
T | F |   F
F | T |   F
F | F |   T
```

**Aplikasi**:
- Equivalence checking
- Biconditional dalam matematika

#### 3.4 Perangkai Logika atau Operator Lainnya

##### 3.4.1 Perangkai "tidak dan" (NAND / ↑ / |)
P ↑ Q adalah negasi dari konjungsi.

```
P | Q | P ↑ Q
--|---|------
T | T |   F
T | F |   T
F | T |   T
F | F |   T
```

**Penting**: NAND adalah **universal gate** - semua gerbang logika bisa dibuat dari NAND.

##### 3.4.2 Perangkai "tidak atau" (NOR / ↓)
P ↓ Q adalah negasi dari disjungsi.

```
P | Q | P ↓ Q
--|---|------
T | T |   F
T | F |   F
F | T |   F
F | F |   T
```

**Penting**: NOR juga adalah **universal gate**.

##### 3.4.3 Perangkai XOR (⊕)
P ⊕ Q benar jika P dan Q memiliki nilai berbeda (exclusive or).

```
P | Q | P ⊕ Q
--|---|------
T | T |   F
T | F |   T
F | T |   T
F | F |   F
```

**Aplikasi**:
- Enkripsi sederhana (XOR cipher)
- Parity checking
- Operasi bitwise dalam programming

---

### BAB 4: Proposisi Majemuk

#### 4.1 Pendahuluan
Proposisi majemuk adalah kombinasi dari proposisi atomik menggunakan operator logika.

#### 4.2 Ekspresi Logika
Bentuk umum: kombinasi variabel proposisi dengan operator.

**Contoh**: `(P ∧ Q) ∨ (¬R → S)`

#### 4.3 Skema
Template atau pola proposisi dengan variabel yang dapat diinstansiasi.

#### 4.4 Menganalisis Proposisi Majemuk
Teknik untuk memahami struktur dan nilai kebenaran proposisi kompleks:
1. Identifikasi operator utama
2. Parse struktur secara hierarkis
3. Evaluasi dari dalam ke luar

#### 4.5 Aturan Pengurutan
**Precedence (dari tertinggi ke terendah)**:
1. ¬ (Negasi)
2. ∧ (Konjungsi)
3. ∨ (Disjungsi)
4. → (Implikasi)
5. ↔ (Ekuivalensi)

**Contoh**: `P ∨ Q ∧ R` dibaca sebagai `P ∨ (Q ∧ R)`

---

### BAB 5: Tautologi

#### 5.1 Pendahuluan
Klasifikasi proposisi berdasarkan nilai kebenarannya.

#### 5.2 Mengevaluasi Validitas Argumen
Argumen valid jika: (P₁ ∧ P₂ ∧ ... ∧ Pₙ) → C adalah tautologi.

#### 5.3 Tautologi
**Definisi**: Proposisi yang selalu bernilai benar untuk semua kemungkinan nilai variabelnya.

**Contoh Tautologi**:
- `P ∨ ¬P` (Law of Excluded Middle)
- `¬(P ∧ ¬P)` (Law of Non-contradiction)
- `P → P` (Identity)
- `(P → Q) ↔ (¬Q → ¬P)` (Contrapositive)

**Aplikasi**:
- Verifikasi program: kondisi yang harus selalu benar
- Compiler optimization: dead code elimination
- Hardware verification: properties yang harus terpenuhi

#### 5.4 Kontradiksi
**Definisi**: Proposisi yang selalu bernilai salah untuk semua kemungkinan nilai variabelnya.

**Contoh Kontradiksi**:
- `P ∧ ¬P`
- `¬(P ∨ ¬P)`

**Aplikasi**:
- Proof by contradiction: membuktikan P dengan menunjukkan ¬P adalah kontradiksi
- SAT solving: mencari kontradiksi dalam sistem

#### 5.5 Contingent
**Definisi**: Proposisi yang bisa benar atau salah tergantung nilai variabelnya.

**Contoh**: `P ∧ Q`, `P → Q`

Sebagian besar proposisi dalam praktik adalah contingent.

#### 5.6 Pemanfaatan Tautologi
Tautologi berguna untuk:
- Membuktikan ekuivalensi
- Menyederhanakan ekspresi
- Verifikasi formal

---

### BAB 6: Ekuivalen Logis

#### 6.1 Pendahuluan
**Ekuivalen logis** adalah dua proposisi yang memiliki nilai kebenaran sama untuk semua kemungkinan nilai variabel.

**Notasi**: P ≡ Q atau P ⇔ Q

#### 6.2 Ekuivalen Logis
P ≡ Q jika dan hanya jika P ↔ Q adalah tautologi.

**Metode verifikasi**:
1. Tabel kebenaran
2. Transformasi menggunakan hukum-hukum logika

#### 6.3 Komutatif
```
P ∧ Q ≡ Q ∧ P
P ∨ Q ≡ Q ∨ P
P ↔ Q ≡ Q ↔ P
```

#### 6.4 Asosiatif
```
(P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)
(P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R)
```

#### 6.5 Hukum-hukum Logika

##### Hukum Identitas
```
P ∧ T ≡ P
P ∨ F ≡ P
```

##### Hukum Dominasi
```
P ∨ T ≡ T
P ∧ F ≡ F
```

##### Hukum Idempoten
```
P ∧ P ≡ P
P ∨ P ≡ P
```

##### Hukum Double Negation
```
¬¬P ≡ P
```

##### Hukum Komplemen
```
P ∧ ¬P ≡ F
P ∨ ¬P ≡ T
```

##### Hukum De Morgan
```
¬(P ∧ Q) ≡ ¬P ∨ ¬Q
¬(P ∨ Q) ≡ ¬P ∧ ¬Q
```

**Aplikasi**: Inversi kondisi kompleks dalam programming.

##### Hukum Distributif
```
P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)
P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)
```

##### Hukum Absorpsi
```
P ∧ (P ∨ Q) ≡ P
P ∨ (P ∧ Q) ≡ P
```

##### Hukum Implikasi
```
P → Q ≡ ¬P ∨ Q
```

##### Hukum Contrapositive
```
P → Q ≡ ¬Q → ¬P
```

##### Hukum Ekuivalensi
```
P ↔ Q ≡ (P → Q) ∧ (Q → P)
P ↔ Q ≡ (P ∧ Q) ∨ (¬P ∧ ¬Q)
```

---

### BAB 7: Penyederhanaan

#### 7.1 Pendahuluan
Tujuan penyederhanaan:
- Membuat ekspresi lebih ringkas
- Mengurangi kompleksitas komputasi
- Optimisasi hardware (fewer gates)
- Optimisasi software (simpler conditions)

#### 7.2 Operasi Penyederhanaan
Menggunakan hukum-hukum ekuivalen logis untuk menyederhanakan.

**Contoh**:
```
Simplify: (P ∧ Q) ∨ (P ∧ ¬Q)
= P ∧ (Q ∨ ¬Q)      [Distributive]
= P ∧ T              [Complement]
= P                  [Identity]
```

#### 7.3 Menghilangkan Perangkai → dan ↔
Mengubah ke bentuk yang hanya menggunakan ∧, ∨, ¬.

**Transformasi**:
```
P → Q  ⟹  ¬P ∨ Q
P ↔ Q  ⟹  (P ∧ Q) ∨ (¬P ∧ ¬Q)
```

**Manfaat**: Memudahkan analisis dan konversi ke bentuk normal.

#### 7.4 Perangkai Dasar
Mengkonversi semua operator ke set minimal (functional completeness):
- Set {¬, ∧}
- Set {¬, ∨}
- Set {↑} (NAND saja)
- Set {↓} (NOR saja)

**Aplikasi**: Hardware design dengan gerbang standar tertentu.

---

## BAGIAN II: METODE PEMBUKTIAN LOGIKA PROPOSISIONAL

### BAB 8: Strategi Pembalikan

#### 8.1 Pendahuluan
**Proof by refutation** (pembuktian dengan pembalikan) adalah teknik membuktikan P dengan menunjukkan ¬P menghasilkan kontradiksi.

#### 8.2 Konsistensi
**Definisi**: Himpunan proposisi {P₁, P₂, ..., Pₙ} konsisten jika ada interpretasi yang membuat semua proposisi bernilai benar.

**Inkonsisten**: Tidak ada interpretasi yang membuat semua benar (terdapat kontradiksi).

#### 8.3 Operasi Strategi Pembalikan
**Langkah-langkah**:
1. Untuk membuktikan P, asumsikan ¬P
2. Turunkan konsekuensi dari ¬P
3. Jika menemukan kontradiksi, maka P terbukti benar

**Contoh**:
```
Buktikan: √2 adalah irasional
Proof:
1. Asumsikan √2 rasional
2. Maka √2 = p/q dengan p,q coprime
3. ...derivasi...
4. Kontradiksi: p dan q punya faktor persekutuan
5. Jadi √2 irasional
```

#### 8.4 Model dan Countermodel
- **Model**: Interpretasi yang membuat proposisi/argumen benar
- **Countermodel**: Interpretasi yang membuat argumen tidak valid

**Aplikasi**:
- Testing: counterexample adalah test case yang gagal
- Debugging: mencari input yang menyebabkan bug
- Formal verification: model checking

---

### BAB 9: Tablo Semantik

#### 9.1 Pendahuluan
**Tablo semantik** (semantic tableaux) adalah metode pohon untuk menganalisis proposisi dan argumen secara sistematis.

#### 9.2 Tablo Semantik
Representasi visual dalam bentuk pohon yang mendekomposisi proposisi.

#### 9.3 Aturan-aturan Tablo Semantik

##### Aturan Non-Branching (α-rules)
Untuk operator konjungtif:
```
P ∧ Q          ¬(P ∨ Q)        ¬(P → Q)
  |               |                |
  P              ¬P                P
  |               |                |
  Q              ¬Q               ¬Q
```

##### Aturan Branching (β-rules)
Untuk operator disjungtif:
```
P ∨ Q          ¬(P ∧ Q)        P → Q
  |               |              |
 / \             / \            / \
P   Q          ¬P  ¬Q         ¬P   Q
```

##### Aturan Negasi
```
¬¬P
 |
 P
```

#### 9.4 Tablo Semantik pada Suatu Himpunan Ekspresi Logika
Menguji konsistensi dari kumpulan proposisi:
1. Tulis semua proposisi di root
2. Apply rules systematically
3. **Closed branch** (✗): mengandung P dan ¬P
4. **Open branch** (○): tidak ada kontradiksi

**Hasil**:
- Semua branch closed → Inkonsisten
- Ada branch open → Konsisten (model ada di branch tersebut)

#### 9.5 Pembenaran Aturan Tablo Semantik
Bukti **soundness** dan **completeness**:
- **Soundness**: Metode tidak menghasilkan kesimpulan salah
- **Completeness**: Metode dapat membuktikan semua kebenaran yang valid

#### 9.6 Tablo Semantik pada Argumen
Untuk menguji validitas argumen:
```
Premis₁
Premis₂
...
Premisₙ
¬Kesimpulan
```

Jika **semua branch closed**, argumen **valid**.

#### 9.7 Catatan Penting
Tips praktis:
- Apply non-branching rules dulu (mengurangi pencabangan)
- Close branches sesegera mungkin
- Strategi heuristik untuk efisiensi

**Aplikasi dalam CS**:
- DPLL algorithm (basis SAT solvers)
- Prolog dengan SLD resolution
- Model checking tools

---

### BAB 10: Bentuk Normal

#### 10.1 Pendahuluan
**Bentuk normal** adalah representasi standar dari formula logika yang memudahkan manipulasi dan analisis.

#### 10.2 Bentuk Normal
Dua jenis utama:
- **CNF** (Conjunctive Normal Form)
- **DNF** (Disjunctive Normal Form)

#### 10.3 Bentuk Normal Konjungtif (CNF)
**Definisi**: Konjungsi dari klausa-klausa (konjungsi dari disjungsi).

**Bentuk umum**:
```
(L₁₁ ∨ L₁₂ ∨ ... ∨ L₁ₘ) ∧
(L₂₁ ∨ L₂₂ ∨ ... ∨ L₂ₙ) ∧
...
```

dimana Lᵢⱼ adalah literal (variabel atau negasinya).

**Contoh**: `(P ∨ Q) ∧ (¬P ∨ R) ∧ (¬Q ∨ ¬R)`

#### 10.4 Bentuk Normal Disjungtif (DNF)
**Definisi**: Disjungsi dari term-term (disjungsi dari konjungsi).

**Bentuk umum**:
```
(L₁₁ ∧ L₁₂ ∧ ... ∧ L₁ₘ) ∨
(L₂₁ ∧ L₂₂ ∧ ... ∧ L₂ₙ) ∨
...
```

**Contoh**: `(P ∧ Q) ∨ (¬P ∧ R) ∨ (Q ∧ ¬R)`

#### 10.5 Bentuk Normal dan Tabel Kebenaran
Konversi dari tabel kebenaran:
- **DNF**: Ambil baris dengan output True
- **CNF**: Ambil baris dengan output False (lalu negate)

**Contoh**:
```
P | Q | F
--|---|---
T | T | T  ← DNF: (P ∧ Q) ∨
T | F | F
F | T | T  ← DNF: (¬P ∧ Q) ∨
F | F | T  ← DNF: (¬P ∧ ¬Q)

DNF: (P ∧ Q) ∨ (¬P ∧ Q) ∨ (¬P ∧ ¬Q)
```

#### 10.6 Klausa
**Definisi**: Disjungsi dari literal.

**Jenis klausa**:
- **Unit clause**: Klausa dengan satu literal, contoh: `P` atau `¬Q`
- **Horn clause**: Maksimal satu literal positif, contoh: `¬P ∨ ¬Q ∨ R`
- **Empty clause** (□): Klausa kosong, merepresentasikan kontradiksi

**Horn clauses** penting untuk Prolog dan logic programming.

#### 10.7 Mengubah ke Bentuk Normal Konjungtif
**Algoritma konversi ke CNF**:
1. Eliminasi ↔ dan →
   - `P ↔ Q` → `(P → Q) ∧ (Q → P)`
   - `P → Q` → `¬P ∨ Q`

2. Push negation inward (De Morgan)
   - `¬(P ∧ Q)` → `¬P ∨ ¬Q`
   - `¬(P ∨ Q)` → `¬P ∧ ¬Q`
   - `¬¬P` → `P`

3. Distribute ∨ over ∧
   - `P ∨ (Q ∧ R)` → `(P ∨ Q) ∧ (P ∨ R)`

**Contoh**:
```
Convert: P → (Q ∧ R)
Step 1: ¬P ∨ (Q ∧ R)
Step 2: -
Step 3: (¬P ∨ Q) ∧ (¬P ∨ R)
```

#### 10.8 Bentuk Normal Konjungtif dan Complementation
Hubungan dengan dual:
- CNF dari P = DNF dari ¬P (dengan negasi)
- Duality principle dalam Boolean algebra

**Aplikasi**:
- **SAT solving**: Input harus dalam CNF
- **Logic synthesis**: CNF untuk POS circuits
- **Model checking**: Property specification

---

### BAB 11: Resolusi

#### 11.1 Pendahuluan
**Resolusi** adalah aturan inferensi yang menjadi basis untuk automated theorem proving dan SAT solving.

#### 11.2 Resolving Argument
**Prinsip dasar**:
Dari dua klausa dengan literal yang berkomplemen, hasilkan klausa baru.

**Aturan**:
```
(A ∨ P)    (¬P ∨ B)
─────────────────────
      (A ∨ B)
```

**Contoh**:
```
(P ∨ Q)    (¬P ∨ R)
───────────────────
     (Q ∨ R)
```

#### 11.3 Himpunan Klausa
Knowledge base direpresentasikan sebagai set of clauses dalam CNF.

**Contoh**:
```
S = {
  P ∨ Q,
  ¬P ∨ R,
  ¬Q ∨ S,
  ¬R ∨ ¬S
}
```

#### 11.4 Resolvent
**Resolvent** adalah hasil dari operasi resolusi.

**Properties**:
- Resolvent adalah konsekuensi logis dari parent clauses
- Binary resolution: tepat satu pasang literal komplemen
- Factoring: menghilangkan literal duplikat

#### 11.5 Resolusi
**Algoritma Resolusi Lengkap**:
```
Input: Set of clauses S, Goal G
1. Convert S ∪ {¬G} to CNF
2. Repeat:
   a. Select two clauses with complementary literals
   b. Generate resolvent
   c. Add resolvent to clause set
   d. If empty clause (□) derived: return "PROVEN"
   e. If no new resolvents: return "NOT PROVEN"
```

**Resolution Closure**: Set semua klausa yang bisa diturunkan dari S.

#### 11.6 Contoh Validitas Argumen
**Contoh**:
```
Premis:
1. P → Q
2. Q → R
3. P
Goal: R

Proof:
CNF:
1. ¬P ∨ Q
2. ¬Q ∨ R
3. P
4. ¬R  (negasi goal)

Resolusi:
5. Q      (1 + 3)
6. R      (2 + 5)
7. □      (4 + 6)  ← Empty clause!

Kesimpulan: Argumen VALID
```

**Aplikasi**:
- **SAT solvers**: MiniSat, CryptoMiniSat
- **SMT solvers**: Z3, CVC4
- **Theorem provers**: Prover9, Vampire
- **Logic programming**: Prolog (SLD resolution)

---

### BAB 12: Deduksi Alami

#### 12.1 Pendahuluan
**Natural Deduction** adalah sistem proof yang lebih natural dan human-readable dibanding resolution.

**Karakteristik**:
- Struktur proof yang jelas
- Introduction/Elimination rules untuk setiap operator
- Subproofs dengan assumptions
- Lebih dekat dengan mathematical reasoning

#### 12.2 Falsum
**Symbol**: ⊥ (bottom, falsum)

**Interpretasi**:
- Kontradiksi
- Proposisi yang selalu salah
- Bottom element dalam lattice

**Principle**: Ex falso quodlibet (dari falsum, anything follows)
```
⊥
─
P  (untuk sembarang P)
```

#### 12.3 Aturan-aturan Deduksi Alami

##### Introduction Rules

**∧I (Conjunction Introduction)**:
```
P    Q
──────
P ∧ Q
```

**∨I (Disjunction Introduction)**:
```
P           Q
────   atau  ────
P ∨ Q       P ∨ Q
```

**→I (Implication Introduction / Conditional Proof)**:
```
[P]
 ⋮
 Q
────
P → Q
```
Jika dari asumsi P kita bisa derive Q, maka P → Q terbukti.

**¬I (Negation Introduction / Reductio ad Absurdum)**:
```
[P]
 ⋮
 ⊥
────
¬P
```

**⊥I (Falsum Introduction)**:
```
P    ¬P
───────
   ⊥
```

##### Elimination Rules

**∧E (Conjunction Elimination)**:
```
P ∧ Q         P ∧ Q
─────   atau  ─────
  P             Q
```

**∨E (Disjunction Elimination / Proof by Cases)**:
```
      [P]  [Q]
       ⋮    ⋮
P ∨ Q  R    R
─────────────
      R
```

**→E (Implication Elimination / Modus Ponens)**:
```
P → Q    P
──────────
    Q
```

**¬E (Negation Elimination)**:
```
¬¬P
───
 P
```
(dalam logika klasik)

**⊥E (Falsum Elimination / Explosion)**:
```
⊥
─
P  (untuk sembarang P)
```

#### 12.4 Pembuktian Teorema
**Struktur Proof**:
```
1. Premis₁             (Given)
2. Premis₂             (Given)
   [3. Assumption]     (Assumption)
   4. ...              (Derived)
5. Result              (Rule, lines)
```

**Contoh Proof**:
```
Buktikan: P → Q, Q → R ⊢ P → R

1. P → Q               (Premis)
2. Q → R               (Premis)
   [3. P]              (Assumption for →I)
   4. Q                (→E, 1, 3)
   5. R                (→E, 2, 4)
6. P → R               (→I, 3-5)
```

**Types of Proofs**:
- **Direct proof**: Langsung dari premis ke goal
- **Indirect proof**: Proof by contradiction (asumsikan ¬Goal, derive ⊥)
- **Proof by cases**: Gunakan ∨E

#### 12.5 Sistem Derivasi
**Formal Proof System**:
- Set of axioms
- Set of inference rules
- Derivation rules

**Properties**:
- **Soundness**: Tidak bisa prove false statements
- **Completeness**: Bisa prove semua true statements

**Curry-Howard Correspondence**:
```
Propositions  ↔  Types
Proofs        ↔  Programs
Proof checking ↔ Type checking
```

**Aplikasi**:
- **Proof assistants**: Coq, Isabelle, Lean, Agda
- **Dependent types**: Proofs as first-class values
- **Program verification**: Hoare logic
- **Certified software**: CompCert, seL4

---

### BAB 13: Kalkulus Deret

#### 13.1 Pendahuluan
Kalkulus deret (sequent calculus) adalah sistem formal lain untuk logical reasoning.

#### 13.2 Skemata Deret
**Sequent** memiliki bentuk:
```
Γ ⊢ Δ
```
dimana:
- Γ (gamma): Set of assumptions (antecedent)
- Δ (delta): Set of conclusions (consequent)
- ⊢ (turnstile): "derives" atau "entails"

**Interpretasi**: 
- Dari Γ, kita bisa derive salah satu dari Δ
- Logika klasik: (∧Γ) → (∨Δ)

#### 13.3 Aturan Kalkulus Deret
Aturan struktural dan logical rules untuk manipulasi sequent.

**Structural Rules**:
- Weakening: Menambah formula di Γ atau Δ
- Contraction: Menggabungkan formula duplikat
- Exchange: Mengubah urutan

**Logical Rules**: Rules untuk setiap operator

#### 13.4 Pembuktian Menggunakan Kalkulus Deret
Konstruksi proof dalam sequent calculus.

**Aplikasi**:
- Linear logic
- Substructural logics
- Automated theorem proving

---

## BAGIAN III: LOGIKA PREDIKAT

### BAB 14: Pengantar Logika Predikat

#### 14.1 Pendahuluan
**Logika Predikat** (First-Order Logic / FOL) memperluas logika proposisional dengan:
- **Variabel**: x, y, z, ...
- **Kuantor**: ∀ (universal), ∃ (existential)
- **Predikat**: Properti atau relasi
- **Fungsi**: Operasi pada objek

**Mengapa perlu FOL?**
Logika proposisional terbatas:
```
Proposisional: "Socrates mortal", "Plato mortal", ...
(harus tulis satu per satu)

Predikat: ∀x (Human(x) → Mortal(x))
(satu formula untuk semua)
```

#### 14.2 Argumen pada Logika Predikat
Argumen dengan kuantor dan variabel.

**Contoh**:
```
Premis:
1. ∀x (Human(x) → Mortal(x))
2. Human(Socrates)

Kesimpulan: Mortal(Socrates)
```

**Validitas**: Tergantung pada interpretasi domain dan predikat.

---

### BAB 15: Komponen-komponen Sintaktik

#### 15.1 Pendahuluan
Sintaks formal logika predikat.

#### 15.2 Komponen-komponen Sintaktik
**Alphabet**:
- **Constants**: a, b, c, Socrates, ...
- **Variables**: x, y, z, ...
- **Function symbols**: f, g, h, +, ×, ...
- **Predicate symbols**: P, Q, Human, >, ...
- **Logical symbols**: ∀, ∃, ∧, ∨, ¬, →, ↔
- **Auxiliary symbols**: (, ), ,

#### 15.3 Universe of Discourse
**Domain of discourse** (universe): Set semua objek yang dibicarakan.

**Contoh**:
- Domain ℕ: bilangan natural
- Domain ℤ: bilangan integer
- Domain String: semua string
- Domain People: semua orang

**Penting**: Interpretasi bergantung pada domain.

#### 15.4 Predikat
**Predicate**: Properti dari objek atau relasi antar objek.

**Contoh**:
- **Unary predicate**: `Human(x)`, `Prime(n)`
- **Binary predicate**: `Loves(x, y)`, `x > y`
- **Ternary predicate**: `Between(x, y, z)`
- **n-ary predicate**: `R(x₁, x₂, ..., xₙ)`

#### 15.5 Fungsi Proposisional
**Propositional Function**: Predikat dengan variabel bebas.

**Contoh**:
- `P(x)`: Bukan proposisi (nilai bergantung pada x)
- `P(5)`: Proposisi (nilai definit)
- `∀x P(x)`: Proposisi (kuantor mengikat x)

#### 15.6 Variabel dan Instansiasi
**Instantiation**: Mengganti variabel dengan nilai konkret.

**Contoh**:
```
P(x, y): x > y
P(5, 3): 5 > 3  (True)
P(2, 7): 2 > 7  (False)
```

---

### BAB 16: Kuantor-kuantor

#### 16.1 Pendahuluan
**Quantifiers** mengikat variabel dan membuat pernyataan tentang kumpulan objek.

#### 16.2 Kuantor Universal (∀)
**Notasi**: ∀x P(x) (dibaca: "untuk semua x, P(x)")

**Interpretasi**: P(x) benar untuk setiap objek x dalam domain.

**Contoh**:
```
∀x (x + 0 = x)       "Semua bilangan ditambah 0 hasilnya dirinya sendiri"
∀x (Even(x) ∨ Odd(x)) "Setiap bilangan genap atau ganjil"
```

**Truth value**:
- ∀x P(x) benar jika P(a) benar untuk semua a di domain
- ∀x P(x) salah jika ada counterexample (satu a dimana P(a) salah)

#### 16.3 Kuantor Eksistensial (∃)
**Notasi**: ∃x P(x) (dibaca: "ada x sedemikian sehingga P(x)")

**Interpretasi**: P(x) benar untuk setidaknya satu objek x dalam domain.

**Contoh**:
```
∃x (x² = 4)          "Ada bilangan yang kuadratnya 4"
∃x (Prime(x) ∧ Even(x)) "Ada bilangan prima yang genap"
```

**Truth value**:
- ∃x P(x) benar jika P(a) benar untuk setidaknya satu a di domain
- ∃x P(x) salah jika P(a) salah untuk semua a di domain

#### 16.4 Mempredikatkan Satu dan N-aritas Objek
Predikat dengan berbagai aritas (arity = jumlah argumen).

**Contoh**:
- **Arity 1**: `Student(x)`
- **Arity 2**: `FriendOf(x, y)`
- **Arity 3**: `Between(x, y, z)`

#### 16.5 Domain Penafsiran Kuantor dan Kuantor Ganda
**Multiple quantifiers**:
```
∀x ∀y P(x, y)       "Untuk semua x dan semua y, P(x,y)"
∃x ∃y P(x, y)       "Ada x dan ada y, dimana P(x,y)"
∀x ∃y P(x, y)       "Untuk setiap x, ada y dimana P(x,y)"
∃x ∀y P(x, y)       "Ada x, dimana untuk semua y, P(x,y)"
```

**Perhatian**: Urutan kuantor penting!
```
∀x ∃y (x < y)  ≠  ∃y ∀x (x < y)

∀x ∃y (x < y): "Untuk setiap x, ada y yang lebih besar"  (TRUE untuk ℕ)
∃y ∀x (x < y): "Ada y yang lebih besar dari semua x"     (FALSE untuk ℕ)
```

#### 16.6 Hubungan Antarkuantor
Hubungan antara ∀ dan ∃:
```
∀x P(x)  ⟷  ¬∃x ¬P(x)    "Semua P"  ⟷  "Tidak ada yang tidak P"
∃x P(x)  ⟷  ¬∀x ¬P(x)    "Ada P"    ⟷  "Tidak benar semua tidak P"
```

#### 16.7 Menegasi Kuantor
**Hukum De Morgan untuk kuantor**:
```
¬∀x P(x)  ≡  ∃x ¬P(x)    "Tidak semua P"  =  "Ada yang tidak P"
¬∃x P(x)  ≡  ∀x ¬P(x)    "Tidak ada P"    =  "Semua tidak P"
```

**Contoh**:
```
¬∀x (x > 0)  ≡  ∃x (x ≤ 0)
"Tidak semua positif" = "Ada yang non-positif"
```

**Multiple quantifiers**:
```
¬∀x ∃y P(x,y)  ≡  ∃x ∀y ¬P(x,y)
¬∃x ∀y P(x,y)  ≡  ∀x ∃y ¬P(x,y)
```

#### 16.8 Hubungan ∀ dengan ∧ dan ∃ dengan ∨
Untuk domain finite {a, b, c}:
```
∀x P(x)  ≡  P(a) ∧ P(b) ∧ P(c)
∃x P(x)  ≡  P(a) ∨ P(b) ∨ P(c)
```

**Aplikasi**: Algoritma grounding untuk SAT solving.

#### 16.9 Batasan Kuantor
**Bounded quantifiers**:
```
∀x ∈ S, P(x)  ≡  ∀x (x ∈ S → P(x))
∃x ∈ S, P(x)  ≡  ∃x (x ∈ S ∧ P(x))
```

**Contoh**:
```
∀x ∈ ℕ, x ≥ 0   ≡   ∀x (x ∈ ℕ → x ≥ 0)
∃x ∈ ℕ, Prime(x) ≡   ∃x (x ∈ ℕ ∧ Prime(x))
```

#### 16.10 Mengubah Pernyataan ke Logika Predikat
Translasi dari natural language ke FOL.

**Contoh**:
```
"Semua mahasiswa rajin"
∀x (Student(x) → Diligent(x))

"Ada dosen yang baik"
∃x (Professor(x) ∧ Kind(x))

"Setiap bilangan memiliki successor"
∀x ∃y (y = x + 1)

"Tidak ada bilangan terbesar"
¬∃x ∀y (y ≤ x)
atau
∀x ∃y (y > x)
```

#### 16.11 Pengembangan Fungsi Proposisional
Transformasi dan manipulasi fungsi proposisional.

#### 16.12 Variabel Terikat dan Bebas
**Free variable**: Variabel yang tidak dikuantifikasi.
**Bound variable**: Variabel yang dikuantifikasi.

**Contoh**:
```
∀x (P(x, y) → Q(x))
     ^  ^      ^
  bound free  bound
```

**Closed formula** (sentence): Tidak ada variabel bebas.
**Open formula**: Ada variabel bebas.

**Penting**: Hanya closed formulas yang bisa dievaluasi sebagai true/false tanpa assignment.

---

### BAB 17: Penafsiran dan Validitas

#### 17.1 Pendahuluan
**Interpretation** memberikan makna konkret pada simbol-simbol logika.

#### 17.2 Penafsiran
**Interpretation I** terdiri dari:
1. **Domain D**: Universe of discourse
2. **Assignment** untuk constants: I(c) ∈ D
3. **Assignment** untuk function symbols: I(f): Dⁿ → D
4. **Assignment** untuk predicate symbols: I(P) ⊆ Dⁿ

**Contoh**:
```
Formula: ∀x ∃y (x < y)

Interpretation I₁:
- Domain: ℕ (natural numbers)
- <: less-than relation
Result: TRUE (setiap bilangan punya yang lebih besar)

Interpretation I₂:
- Domain: {1, 2, 3}
- <: less-than relation
Result: FALSE (3 tidak punya yang lebih besar)
```

#### 17.3 Validitas Argumen
Argumen **valid** jika: untuk setiap interpretasi dimana semua premis benar, kesimpulan juga benar.

**Notasi**: Γ ⊨ φ (Γ logically entails φ)

**Contoh Valid**:
```
∀x (P(x) → Q(x))
P(a)
───────────────
Q(a)
```

#### 17.4 Ekspresi-ekspresi Tidak Valid
Argumen **tidak valid** jika ada countermodel (interpretasi dimana premis benar tapi kesimpulan salah).

**Contoh Invalid**:
```
∃x P(x)
───────
P(a)      ← INVALID! (counterexample: P benar untuk b≠a)
```

#### 17.5 Contoh Pembuktian Validitas
Demonstrasi validitas dengan interpretasi atau proof.

---

### BAB 18: Derivasi

#### 18.1 Pendahuluan
Aturan inferensi untuk logika predikat.

#### 18.2 Universal Instantiation (∀E)
**Aturan**: Dari ∀x P(x), kita bisa derive P(t) untuk term t apapun.

```
∀x P(x)
───────
P(t)
```

**Contoh**:
```
∀x (Human(x) → Mortal(x))
────────────────────────────
Human(Socrates) → Mortal(Socrates)
```

#### 18.3 Universal Generalization (∀I)
**Aturan**: Jika P(a) terbukti untuk arbitrary a, maka ∀x P(x).

```
P(a)  (a arbitrary)
──────────────────
∀x P(x)
```

**Restrictions**: a harus arbitrary (tidak ada asumsi khusus tentang a).

#### 18.4 Teorema Deduksi dan Universal Generalization
Hubungan antara conditional proof dan universal generalization.

#### 18.5 Existential Generalization (∃I)
**Aturan**: Dari P(t), kita bisa derive ∃x P(x).

```
P(t)
──────
∃x P(x)
```

**Contoh**:
```
Prime(7)
────────────
∃x Prime(x)  "Ada bilangan prima"
```

#### 18.6 Existential Instantiation (∃E)
**Aturan**: Dari ∃x P(x), kita bisa asumsikan P(c) untuk fresh constant c.

```
      [P(c)]
       ⋮
∃x P(x)  Q
──────────
    Q
```

**Restrictions**: c harus fresh (belum digunakan), dan tidak boleh muncul di Q.

#### 18.7 Unification
Proses menemukan substitusi yang membuat dua term sama.

**Contoh**:
```
P(x, f(y))  dan  P(a, f(b))
Unifier: {x/a, y/b}
```

**Aplikasi**:
- Prolog: pattern matching
- Resolution: combining clauses
- Type inference: unifying types

---

## BAGIAN IV: METODE PEMBUKTIAN LOGIKA PREDIKAT

### BAB 19: Ekuivalen Logis untuk Logika Predikat

#### 19.1 Pendahuluan
Hukum-hukum ekuivalensi yang valid dalam logika predikat.

#### 19.2 Rumus-rumus Ekuivalen Logis
**Semua hukum dari logika proposisional** masih berlaku.

**Hukum Kuantor**:
```
∀x (P(x) ∧ Q(x))  ≡  ∀x P(x) ∧ ∀x Q(x)
∃x (P(x) ∨ Q(x))  ≡  ∃x P(x) ∨ ∃x Q(x)
```

**Tetapi**:
```
∀x (P(x) ∨ Q(x))  ≢  ∀x P(x) ∨ ∀x Q(x)  (NOT equivalent!)
∃x (P(x) ∧ Q(x))  ≢  ∃x P(x) ∧ ∃x Q(x)  (NOT equivalent!)
```

#### 19.3 Ekuivalen Logis Penting Lainnya
**Distribusi kuantor**:
```
∀x P(x) ∨ Q  ≡  ∀x (P(x) ∨ Q)    (jika x tidak bebas di Q)
∃x P(x) ∧ Q  ≡  ∃x (P(x) ∧ Q)    (jika x tidak bebas di Q)
```

**Pertukaran kuantor sejenis**:
```
∀x ∀y P(x,y)  ≡  ∀y ∀x P(x,y)
∃x ∃y P(x,y)  ≡  ∃y ∃x P(x,y)
```

**Tetapi kuantor berbeda TIDAK bisa ditukar**:
```
∀x ∃y P(x,y)  ≢  ∃y ∀x P(x,y)
```

#### 19.4 Ekualitas
Hukum untuk equality (=):
```
x = x                           (Reflexive)
x = y → y = x                   (Symmetric)
x = y ∧ y = z → x = z          (Transitive)
x = y → (P(x) ↔ P(y))          (Substitution)
```

---

### BAB 20: Tablo Semantik untuk Logika Predikat

#### 20.1 Pendahuluan
Ekstension dari tablo semantik ke logika predikat.

#### 20.2 Aturan-aturan Tablo Semantik
**Tambahan untuk kuantor**:

**Universal Instantiation** (γ-rule):
```
∀x P(x)
   |
 P(t)    (untuk term t apapun)
```
Bisa diapply berkali-kali dengan term berbeda.

**Existential Instantiation** (δ-rule):
```
∃x P(x)
   |
 P(c)    (c fresh constant)
```
Hanya sekali per existential.

#### 20.3 Pemakaian Aturan-aturan Tablo Semantik
Strategi untuk FOL tableau:
1. Apply propositional rules
2. Apply δ-rules (existential) sekali
3. Apply γ-rules (universal) dengan term yang relevan
4. Check for closure
5. Repeat dengan instansiasi baru jika perlu

#### 20.4 Aturan Tablo Semantik pada Validitas Argumen
Testing validity dengan tableau method.

#### 20.5 Teorema dengan Aturan-aturan Tablo Semantik
Proving theorems menggunakan tableau.

**Challenges**:
- FOL tableau tidak selalu terminate (semi-decidable)
- Perlu heuristik untuk memilih instansiasi

---

### BAB 21: Bentuk Normal Prenex

#### 21.1 Pendahuluan
**Prenex Normal Form** (PNF): Semua kuantor di depan formula.

**Bentuk umum**:
```
Q₁x₁ Q₂x₂ ... Qₙxₙ M
```
dimana Qᵢ ∈ {∀, ∃} dan M adalah quantifier-free matrix.

#### 21.2 Complementation
Proses negasi dan simplikasi.

#### 21.3 Bentuk Normal Prenex
**Contoh**:
```
Original: ∀x P(x) → ∃y Q(y)
PNF:      ∃x ∃y (¬P(x) ∨ Q(y))
```

**Properties**:
- Setiap formula ekuivalen dengan PNF-nya
- Memudahkan analisis struktur kuantor

#### 21.4 Mengubah ke Bentuk Normal Prenex
**Algoritma**:
1. Eliminasi → dan ↔
2. Push negation inward (hingga atomic)
3. Rename bound variables (jika perlu)
4. Move quantifiers outward

**Contoh**:
```
Convert: ∀x P(x) → ∃y Q(y)

Step 1: ¬∀x P(x) ∨ ∃y Q(y)
Step 2: ∃x ¬P(x) ∨ ∃y Q(y)
Step 3: (rename jika perlu)
Step 4: ∃x ∃y (¬P(x) ∨ Q(y))
```

---

### BAB 22: Resolusi untuk Logika Predikat

#### 22.1 Pendahuluan
Ekstension resolution ke FOL.

#### 22.2 Skolemisasi
**Skolemization**: Menghilangkan kuantor eksistensial dengan fungsi Skolem.

**Process**:
```
∀x ∃y P(x,y)  →  ∀x P(x, f(x))
```

dimana f adalah fungsi Skolem baru.

**Intuisi**: y bergantung pada x, jadi y = f(x).

**Contoh**:
```
∀x ∃y (x < y)  →  ∀x (x < f(x))

"Setiap x punya successor" → "x < successor(x)"
```

**Important**: Skolemisasi mempertahankan satisfiability, bukan equivalence.

#### 22.3 Himpunan Klausa
Konversi ke clausal form (CNF tanpa kuantor):
1. Convert to PNF
2. Skolemize (hapus ∃)
3. Drop universal quantifiers (implicit ∀)
4. Convert matrix to CNF
5. Extract clauses

**Contoh**:
```
∀x (P(x) → ∃y Q(x,y))

PNF: ∀x ∃y (¬P(x) ∨ Q(x,y))
Skolemize: ∀x (¬P(x) ∨ Q(x, f(x)))
Drop ∀: ¬P(x) ∨ Q(x, f(x))
Clause: {¬P(x), Q(x, f(x))}
```

#### 22.4 Resolusi
**Resolution with Unification**:
```
C₁ = {L₁, ..., Lₘ, A}
C₂ = {M₁, ..., Mₙ, ¬B}

jika A dan B unifiable dengan σ
────────────────────────────────────────
(C₁ ∪ C₂ - {A, ¬B})σ
```

**Algoritma**:
1. Convert to clausal form
2. Negate goal
3. Apply resolution dengan unification
4. Jika □ derived: PROVEN
5. Jika saturated: NOT PROVEN

**Contoh**:
```
Prove: ∀x (P(x) → Q(x)), P(a) ⊢ Q(a)

Clauses:
1. ¬P(x) ∨ Q(x)
2. P(a)
3. ¬Q(a)        (negated goal)

Resolution:
4. Q(a)         (1 + 2, σ={x/a})
5. □            (3 + 4)

PROVEN!
```

**Aplikasi Modern**:
- **Automated Theorem Provers**: Vampire, E, Prover9
- **SMT Solvers**: Z3, CVC4 (untuk theories)
- **Logic Programming**: Prolog, Datalog
- **AI Planning**: STRIPS, PDDL planners

---

## LAMPIRAN DAN APLIKASI

### Lampiran A: Aplikasi Logika untuk Merancang Rangkaian Elektronika

**Boolean Gates Implementation**:
```
AND gate: P ∧ Q
OR gate:  P ∨ Q
NOT gate: ¬P
NAND:     ¬(P ∧ Q)
NOR:      ¬(P ∨ Q)
XOR:      P ⊕ Q
```

**Applications**:
- Combinational circuits
- Sequential circuits (dengan memory)
- ALU design
- CPU control logic

**Optimization**:
- Karnaugh Maps
- Quine-McCluskey
- Logic synthesis tools

### Lampiran B: Aplikasi Logika Mesin Pencari di Internet

**Boolean Search**:
```
cats AND dogs       ∧
cats OR dogs        ∨
cats NOT dogs       ∧ ¬
"exact phrase"      string matching
site:domain.com     domain filter
```

**Applications**:
- Search engine indexing
- Query optimization
- Ranking algorithms
- Information retrieval

### Lampiran C & D: Argumen & Validitas

Analisis mendalam tentang:
- Struktur argumen
- Fallacies (logical errors)
- Valid vs sound arguments
- Informal logic

---

## APLIKASI DALAM ILMU KOMPUTER

### 1. Programming Languages

**Type Systems**:
```
Curry-Howard Correspondence:
P → Q  ↔  Function type: P → Q
P ∧ Q  ↔  Product type: P × Q
P ∨ Q  ↔  Sum type: P + Q
⊥      ↔  Empty type
```

**Dependent Types**: Coq, Agda, Idris, Lean

### 2. Formal Verification

**Tools**:
- **Model Checkers**: SPIN, NuSMV
- **Theorem Provers**: Coq, Isabelle
- **SMT Solvers**: Z3, CVC4
- **SAT Solvers**: MiniSat, CryptoMiniSat

**Applications**:
- Hardware verification
- Software verification
- Protocol verification
- Compiler correctness

### 3. Databases

**SQL Queries** menggunakan logika:
```sql
SELECT * FROM users WHERE age > 18 AND verified = true
        ↓
∃u (User(u) ∧ age(u) > 18 ∧ verified(u))
```

**Query Optimization**: Boolean simplification

### 4. Artificial Intelligence

**Knowledge Representation**:
- First-order logic
- Description logics
- Semantic web (RDF, OWL)

**Reasoning**:
- Expert systems
- Planning (STRIPS)
- Natural language processing

### 5. Computer Security

**Cryptography**:
- XOR dalam stream ciphers
- Boolean functions dalam block ciphers

**Access Control**:
- Logic-based policies
- Datalog untuk authorization

### 6. Software Engineering

**Design by Contract**:
- Preconditions
- Postconditions
- Invariants

**Testing**:
- Property-based testing
- Formal specifications

---

## RINGKASAN ALUR PEMBELAJARAN

### Level 1: Foundation (BAB 1-7)
Membangun fondasi logika proposisional:
- Konsep dasar
- Operator logika
- Manipulasi formula
- Ekuivalensi

### Level 2: Proof Methods (BAB 8-13)
Metode pembuktian:
- Refutation
- Tableaux
- Resolution (automated)
- Natural deduction (interactive)

### Level 3: First-Order Logic (BAB 14-18)
Logika predikat:
- Quantifiers
- Interpretation
- Validity
- Derivation rules

### Level 4: Advanced Proof Methods (BAB 19-22)
Pembuktian tingkat lanjut:
- FOL equivalences
- FOL tableaux
- Prenex normal form
- FOL resolution

---

## TIPS BELAJAR

### 1. Praktek Aktif
- Buat tabel kebenaran untuk formula kompleks
- Buktikan teorema dengan berbagai metode
- Implementasikan algoritma (tableau, resolution)

### 2. Visualisasi
- Gambar proof trees
- Buat diagram Venn untuk quantifiers
- Visualisasikan resolution graphs

### 3. Hubungkan dengan Programming
- Setiap konsep logika punya analog di programming
- Implementasikan dalam kode favorit Anda
- Gunakan proof assistants (Lean, Coq online)

### 4. Latihan Soal
- Selesaikan latihan di setiap bab
- Cari soal tambahan online
- Diskusi dengan teman

### 5. Tools
- **Online tools**:
  - Truth table generators
  - Resolution provers
  - Natural deduction checkers
- **Software**:
  - Prover9
  - Z3 (SMT solver)
  - Lean/Coq (proof assistants)

---

## REFERENSI TAMBAHAN

### Buku Teks
- "Logic in Computer Science" - Huth & Ryan
- "Mathematical Logic for Computer Science" - Ben-Ari
- "Introduction to Logic" - Harry Gensler
- "A Mathematical Introduction to Logic" - Herbert Enderton

### Online Resources
- Stanford Encyclopedia of Philosophy
- Logic courses on Coursera/edX
- Lean theorem prover tutorial
- Z3 SMT solver documentation

### Papers
- "A Machine-Oriented Logic Based on Resolution" - Robinson
- "A Computational Logic" - Boyer & Moore

---

## KESIMPULAN

Logika matematika adalah fondasi dari ilmu komputer modern. Dari desain hardware (gates) hingga software verification (proof assistants), dari databases (query optimization) hingga AI (reasoning systems), logika ada di mana-mana.

Materi ini memberikan toolkit lengkap untuk:
- **Bernalar secara formal**
- **Membuktikan correctness**
- **Mengoptimalkan sistem**
- **Membangun software yang reliable**

Selamat belajar! 🎓

---

**Disusun berdasarkan**:
- Buku: "Logika Matematika untuk Ilmu Komputer"
- Penulis: F. Soesianto & Djoni Dwijono
- Penerbit: Penerbit ANDI
