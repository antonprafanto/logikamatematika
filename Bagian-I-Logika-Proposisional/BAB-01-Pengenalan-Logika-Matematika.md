# BAB 1: Pengenalan Logika Matematika

[⬅️ Kembali ke Daftar Isi](../README.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami konsep dasar logika matematika
- ✅ Membedakan argumen valid dan tidak valid
- ✅ Mengenal berbagai sistem logika (klasik, modern, banyak nilai)
- ✅ Memahami pentingnya logika dalam ilmu komputer

---

## 1.1 Pendahuluan

### Apa itu Logika Matematika?

**Logika matematika** adalah studi formal tentang **penalaran yang benar** (valid reasoning). Logika memberikan aturan-aturan untuk menentukan apakah suatu argumen atau kesimpulan itu valid atau tidak.

### Mengapa Penting untuk Ilmu Komputer?

Logika matematika adalah **fondasi** dari hampir semua aspek ilmu komputer:

| Area | Aplikasi Logika |
|------|-----------------|
| 🔧 **Algoritma** | Design dan analisis algoritma, kompleksitas |
| ✅ **Verifikasi Program** | Membuktikan program benar secara formal |
| 📝 **Bahasa Pemrograman** | Semantik formal, type systems |
| 🤖 **Kecerdasan Buatan** | Knowledge representation, reasoning |
| 💾 **Database** | Query languages (SQL), query optimization |
| 🔐 **Security** | Protokol keamanan, access control |
| 🖥️ **Hardware Design** | Digital circuits, Boolean algebra |

### Contoh Sederhana

**Pertanyaan**: Apakah kesimpulan berikut benar?
```
Jika hujan, maka jalan basah
Jalan basah
─────────────────────────
Apakah pasti hujan?
```

**Jawaban**: **TIDAK!** Ini adalah kesalahan logika umum.
- Jalan bisa basah karena alasan lain (disiram, banjir, dll)
- Argumen ini **tidak valid**

**Argumen valid** seharusnya:
```
Jika hujan, maka jalan basah
Hujan
─────────────────────────
Jalan basah ✓
```

---

## 1.2 Argumen

### Definisi

> **Argumen** adalah sekumpulan pernyataan yang terdiri dari **premis-premis** (premises) dan **kesimpulan** (conclusion).

### Struktur Argumen

```
Premis 1: P₁
Premis 2: P₂
...
Premis n: Pₙ
─────────────
Kesimpulan: C
```

**Terminologi**:
- **Premis** (premises): Pernyataan-pernyataan yang dianggap benar
- **Kesimpulan** (conclusion): Pernyataan yang ingin dibuktikan
- **Inferensi** (inference): Proses menarik kesimpulan dari premis

### Contoh Argumen

#### Contoh 1: Argumen Klasik (Silogisme Aristoteles)
```
Premis 1: Semua manusia mortal
Premis 2: Socrates adalah manusia
─────────────────────────────────
Kesimpulan: Socrates mortal ✓
```

**Dalam notasi logika**:
```
∀x (Human(x) → Mortal(x))
Human(Socrates)
──────────────────────────
Mortal(Socrates)
```

#### Contoh 2: Argumen dalam Programming

```python
# Premis 1: Jika age >= 18, maka can_vote = True
# Premis 2: age = 20
# Kesimpulan: can_vote = True

def check_voting_eligibility(age):
    if age >= 18:        # Premis 1 (rule)
        can_vote = True
    # Given: age = 20   # Premis 2 (fact)
    # Therefore: can_vote = True  # Conclusion
    return can_vote
```

#### Contoh 3: Argumen dalam Database Query
```sql
-- Premis 1: Semua user dengan verified=true dapat login
-- Premis 2: John adalah user dengan verified=true
-- Kesimpulan: John dapat login

SELECT * FROM users 
WHERE name = 'John' AND verified = true;
```

### Jenis-Jenis Argumen

#### 1. Deductive Argument (Argumen Deduktif)
- Kesimpulan **pasti** benar jika premis benar
- Contoh: Matematika, logika formal

```
Semua bilangan genap habis dibagi 2
8 adalah bilangan genap
───────────────────────────
8 habis dibagi 2 ✓ (PASTI)
```

#### 2. Inductive Argument (Argumen Induktif)
- Kesimpulan **mungkin** benar berdasarkan pola
- Contoh: Statistik, machine learning

```
Matahari terbit setiap hari selama 1000 tahun terakhir
───────────────────────────────────────────────────────
Matahari akan terbit besok (KEMUNGKINAN BESAR)
```

#### 3. Abductive Argument (Argumen Abduktif)
- Mencari penjelasan terbaik
- Contoh: Diagnosis, debugging

```
Program crash setiap kali fungsi X dipanggil
────────────────────────────────────────────
Kemungkinan ada bug di fungsi X (HIPOTESIS TERBAIK)
```

**Fokus kuliah ini**: **Deductive reasoning** (penalaran deduktif)

---

## 1.3 Validitas Argumen

### Definisi Validitas

> Argumen dikatakan **valid** jika:  
> **Ketika semua premis bernilai benar, maka kesimpulan PASTI benar**

**Notasi**: `P₁, P₂, ..., Pₙ ⊨ C`  
(dibaca: "P₁, P₂, ..., Pₙ secara logis mengakibatkan C")

### Validitas vs Kebenaran

⚠️ **PENTING**: Argumen valid ≠ Kesimpulan benar!

| Argumen | Premis | Kesimpulan | Valid? | Sound? |
|---------|--------|------------|--------|--------|
| 1 | Benar | Benar | ✓ | ✓ |
| 2 | Benar | Salah | ✗ | ✗ |
| 3 | Salah | Benar | ✓ | ✗ |
| 4 | Salah | Salah | ✓ | ✗ |

**Definisi**:
- **Valid**: Struktur argumen benar (form is correct)
- **Sound**: Valid DAN premis benar (valid + true premises)

### Contoh: Argumen Valid tapi Kesimpulan Salah

```
Premis 1: Semua burung bisa terbang     (SALAH - pinguin tidak bisa)
Premis 2: Pinguin adalah burung         (BENAR)
────────────────────────────────────────
Kesimpulan: Pinguin bisa terbang        (SALAH)

Status: VALID tapi NOT SOUND
```

**Penjelasan**:
- Argumen ini **VALID** karena struktur argumen benar
- Tapi **NOT SOUND** karena premis 1 salah
- Kesimpulan salah karena premis salah, bukan struktur salah

### Contoh: Argumen Tidak Valid

```
Premis 1: Jika hujan, maka jalan basah
Premis 2: Jalan basah
─────────────────────────────────────
Kesimpulan: Hujan    ✗ TIDAK VALID

Counterexample: Jalan bisa basah karena disiram, bukan hujan
```

### Testing Validitas

**Metode 1: Truth Table**
- Buat tabel dengan semua kemungkinan nilai premis
- Check: Apakah ada kasus premis benar tapi kesimpulan salah?
- Jika ya → TIDAK VALID

**Metode 2: Counterexample**
- Cari satu kasus dimana premis benar tapi kesimpulan salah
- Jika ada → TIDAK VALID

**Metode 3: Formal Proof**
- Gunakan aturan inferensi untuk menurunkan kesimpulan dari premis
- Jika bisa → VALID

---

## 1.4 Logika Klasik

### Karakteristik Logika Klasik

**1. Principle of Bivalence (Prinsip Dua Nilai)**
> Setiap proposisi memiliki tepat satu dari dua nilai: **True** atau **False**

```python
is_raining = True   # bukan "mungkin" atau "50% hujan"
is_hot = False      # pasti salah satu: True atau False
```

**2. Law of Excluded Middle**
```
P ∨ ¬P  adalah selalu TRUE (tautologi)
```

Artinya: "P atau tidak-P" pasti benar. Tidak ada nilai tengah.

Contoh:
```
"Hujan ATAU tidak hujan"  → Pasti benar
"x > 5 ATAU x ≤ 5"        → Pasti benar
```

**3. Law of Non-Contradiction**
```
¬(P ∧ ¬P)  adalah selalu TRUE (tautologi)
```

Artinya: P dan tidak-P tidak bisa benar bersamaan.

Contoh:
```
¬("Hujan" DAN "Tidak hujan")  → Tidak mungkin keduanya benar
```

### Aksiom Logika Klasik

| Aksiom | Formula | Contoh |
|--------|---------|--------|
| **Identity** | P → P | Jika hujan, maka hujan |
| **Non-contradiction** | ¬(P ∧ ¬P) | Tidak mungkin hujan dan tidak hujan |
| **Excluded Middle** | P ∨ ¬P | Pasti hujan atau tidak hujan |
| **Double Negation** | ¬¬P ≡ P | "Tidak tidak hujan" = "Hujan" |

### Aplikasi dalam Programming

```python
# Law of Excluded Middle
def check_positive(x):
    if x > 0:
        return "positive"
    else:  # pasti x <= 0 (excluded middle)
        return "non-positive"

# Law of Non-Contradiction
if is_logged_in and not is_logged_in:  # Impossible!
    print("This will never execute")
```

---

## 1.5 Logika Modern

### Perkembangan dari Logika Klasik

Logika modern (abad 19-20) mengembangkan logika klasik dengan:

#### 1. Formalisasi yang Ketat
- **Syntax** (sintaks): Aturan pembentukan formula yang well-formed
- **Semantics** (semantik): Makna dari formula
- **Proof theory**: Sistem pembuktian formal

#### 2. Logika Proposisional
- Menggunakan variabel proposisi (P, Q, R)
- Operator logika (∧, ∨, ¬, →, ↔)
- Tabel kebenaran

#### 3. Logika Predikat (First-Order Logic)
- Quantifiers: ∀ (universal), ∃ (existential)
- Predicates: Human(x), Prime(n)
- Functions: father(x), +(a,b)

#### 4. Sistem Formal
- **Axioms**: Pernyataan yang diterima tanpa bukti
- **Inference rules**: Aturan menurunkan teorema
- **Theorems**: Pernyataan yang dapat dibuktikan

### Kontribusi Tokoh-Tokoh Penting

| Tokoh | Kontribusi |
|-------|------------|
| **George Boole** (1815-1864) | Boolean algebra |
| **Gottlob Frege** (1848-1925) | Logika predikat modern |
| **Bertrand Russell** (1872-1970) | Principia Mathematica |
| **Kurt Gödel** (1906-1978) | Teorema ketidaklengkapan |
| **Alan Turing** (1912-1954) | Komputabilitas, Turing machine |
| **Alonzo Church** (1903-1995) | Lambda calculus |

### Aplikasi Modern

```
Logika Proposisional → Boolean Algebra → Digital Circuits
Logika Predikat → Logic Programming → Prolog, Datalog
Type Theory → Functional Programming → Haskell, OCaml
Proof Theory → Theorem Provers → Coq, Isabelle, Lean
```

---

## 1.6 Logika Banyak Nilai

### Motivasi

Dalam dunia nyata, tidak semua pernyataan bisa dikategorikan sebagai "benar" atau "salah":

❓ Contoh:
- "John adalah orang tinggi" → Seberapa tinggi = tinggi?
- "Film ini bagus" → Subjektif, tidak ada nilai pasti
- "Email address valid" dalam database → Bisa NULL (unknown)

### Three-Valued Logic (Logika Tiga Nilai)

**Nilai kebenaran**: `True`, `False`, `Unknown`

#### Contoh: SQL NULL values

```sql
-- Jika email NULL, hasil comparison adalah NULL (unknown)
SELECT * FROM users WHERE email = 'test@example.com';

-- NULL handling
SELECT * FROM users WHERE email IS NULL;  -- Check for unknown
```

#### Truth Table untuk Three-Valued Logic

**AND (∧)**:
```
P     | Q     | P ∧ Q
------|-------|-------
T     | T     | T
T     | U     | U
T     | F     | F
U     | T     | U
U     | U     | U
U     | F     | F
F     | T     | F
F     | U     | F
F     | F     | F
```

**OR (∨)**:
```
P     | Q     | P ∨ Q
------|-------|-------
T     | T     | T
T     | U     | T
T     | F     | T
U     | T     | T
U     | U     | U
U     | F     | U
F     | T     | T
F     | U     | U
F     | F     | F
```

### Fuzzy Logic (Logika Fuzzy)

**Nilai kebenaran**: Kontinyu dalam rentang **[0, 1]**

#### Aplikasi Fuzzy Logic

1. **Control Systems** (AC, washing machine)
```
IF temperature is "hot" AND humidity is "high" 
THEN fan_speed is "very fast"

hot: [0.7, 1.0]
high: [0.6, 1.0]
very_fast: [0.8, 1.0]
```

2. **Decision Making**
```python
# Fuzzy membership function
def is_tall(height_cm):
    if height_cm < 150:
        return 0.0  # definitely not tall
    elif height_cm > 180:
        return 1.0  # definitely tall
    else:
        # gradually increase from 0 to 1
        return (height_cm - 150) / 30
        
print(is_tall(165))  # Output: 0.5 (somewhat tall)
```

### Perbandingan

| Logic Type | Values | Application |
|------------|--------|-------------|
| **Classical** | {True, False} | Mathematics, formal proofs |
| **Three-valued** | {True, False, Unknown} | Databases (NULL), incomplete info |
| **Fuzzy** | [0, 1] continuous | AI, control systems, gradual membership |
| **Many-valued** | {0, 0.25, 0.5, 0.75, 1} | Multi-level truth |

---

## 1.7 Mengenal Logika Lebih Dalam

### Jenis-Jenis Logika Lainnya

#### 1. Modal Logic (Logika Modal)
Menambahkan operator **necessity** (□) dan **possibility** (◇)

```
□P: "P necessarily true" (P harus benar)
◇P: "P possibly true" (P mungkin benar)
```

**Contoh**:
```
□(2 + 2 = 4)      → Necessarily true (mathematical truth)
◇(hujan besok)    → Possibly true (contingent fact)
```

**Aplikasi**: Formal verification, knowledge representation

#### 2. Temporal Logic (Logika Temporal)
Menambahkan operator waktu

```
◯P: "P is true in the next state"
◻P: "P is always true (in all future states)"
◊P: "P is eventually true (in some future state)"
```

**Aplikasi**: Model checking, concurrent systems

```
Property: ◻(request → ◊response)
"Setiap request akan eventually mendapat response"
```

#### 3. Intuitionistic Logic (Logika Intuisionis)
- Tidak menerima **Law of Excluded Middle**
- Bukti konstruktif diperlukan
- `P ∨ ¬P` tidak selalu benar

**Aplikasi**: Type theory, constructive mathematics, dependent types

```haskell
-- Haskell (berdasarkan intuitionistic logic via Curry-Howard)
data Either a b = Left a | Right b

-- P ∨ ¬P tidak otomatis benar,
-- harus konstruksi eksplisit: Left proof atau Right disproof
```

#### 4. Linear Logic (Logika Linear)
- Resource-aware logic
- "Resources" dikonsumsi saat digunakan

**Contoh**:
```
$5 ⊗ $3 → $8    (combining resources)
$10 ⊸ burger   (consuming resource to get burger)
```

**Aplikasi**: Programming languages (Rust ownership), concurrency

#### 5. Paraconsistent Logic (Logika Parakonsisten)
- Toleran terhadap kontradiksi
- `P ∧ ¬P` tidak menyebabkan "explosion" (segala sesuatu benar)

**Aplikasi**: Inconsistent databases, belief revision

---

## 💡 Ringkasan

### Key Takeaways

✅ **Logika matematika** adalah studi formal tentang penalaran yang benar

✅ **Argumen** terdiri dari premis-premis dan kesimpulan

✅ **Validitas** bergantung pada struktur, bukan kebenaran premis
- Valid + True premises = Sound argument

✅ **Logika klasik** menggunakan dua nilai: True/False
- Law of Excluded Middle: `P ∨ ¬P`
- Law of Non-Contradiction: `¬(P ∧ ¬P)`

✅ **Logika modern** mencakup logika proposisional dan predikat

✅ **Logika banyak nilai** untuk situasi dengan uncertainty
- Three-valued logic: True, False, Unknown
- Fuzzy logic: [0, 1]

✅ **Variasi logika** untuk aplikasi khusus
- Modal logic: necessity, possibility
- Temporal logic: time-based reasoning
- Intuitionistic logic: constructive proofs

### Hubungan dengan Ilmu Komputer

```
Logika Matematika
    │
    ├─→ Boolean Algebra → Digital Circuits → Hardware
    ├─→ Propositional Logic → SAT Solvers → Verification
    ├─→ Predicate Logic → Prolog → AI & Logic Programming
    ├─→ Type Theory → Type Systems → Programming Languages
    ├─→ Proof Theory → Theorem Provers → Formal Methods
    └─→ Temporal Logic → Model Checking → Software Verification
```

---

## 📝 Latihan

### Latihan 1: Identifikasi Argumen
Identifikasi premis dan kesimpulan dari argumen berikut:

a) "Semua programmer harus bisa logika. John adalah programmer. Jadi John harus bisa logika."

b) "Jika sistem down, maka user komplain. User tidak komplain. Jadi sistem tidak down."

### Latihan 2: Validitas
Apakah argumen berikut valid? Jelaskan!

a) 
```
Jika P maka Q
P
─────────
Q
```

b)
```
Jika P maka Q
Q
─────────
P
```

c)
```
P atau Q
Tidak P
─────────
Q
```

### Latihan 3: Aplikasi
Berikan contoh aplikasi logika matematika dalam:
- Database systems
- Network security
- Artificial Intelligence

### Latihan 4: Three-Valued Logic
Evaluasi ekspresi berikut jika P = True, Q = Unknown:
- P ∧ Q = ?
- P ∨ Q = ?
- ¬Q = ?

---

## 🔗 Navigasi

- [⬅️ Kembali ke Daftar Isi](../README.md)
- [➡️ BAB 2: Pengantar Logika Proposisional](BAB-02-Pengantar-Logika-Proposisional.md)
- [📚 Lihat Semua BAB di Bagian I](README.md)

---

## 📚 Referensi Bab Ini

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 1
2. Huth, M., & Ryan, M. "Logic in Computer Science" - Chapter 1
3. Enderton, H. "A Mathematical Introduction to Logic" - Chapter 0

---

<div align="center">

**Selamat Belajar! 🚀**

*Jika ada pertanyaan, silakan diskusikan dengan dosen atau teman sekelas*

</div>
