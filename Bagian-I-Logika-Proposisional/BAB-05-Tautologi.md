# BAB 5: Tautologi, Kontradiksi, dan Kontingensi

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-04-Proposisi-Majemuk.md) | [➡️ BAB Selanjutnya](BAB-06-Ekuivalen-Logis.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami konsep tautologi, kontradiksi, dan kontingensi
- ✅ Mengidentifikasi tipe proposisi menggunakan tabel kebenaran
- ✅ Menerapkan konsep dalam pemrograman dan verifikasi
- ✅ Memahami pentingnya tautologi dalam pembuktian

---

## 5.1 Pengenalan

### Definisi

Dalam logika proposisional, setiap formula dapat diklasifikasikan menjadi tiga kategori berdasarkan nilai kebenarannya:

| Tipe | Definisi | Nilai Kebenaran |
|------|----------|-----------------|
| **Tautologi** | Selalu **BENAR** untuk semua kemungkinan nilai | T pada semua baris |
| **Kontradiksi** | Selalu **SALAH** untuk semua kemungkinan nilai | F pada semua baris |
| **Kontingensi** | **KADANG** benar, **KADANG** salah | Campuran T dan F |

---

## 5.2 Tautologi (Tautology)

### Definisi Formal

> **Tautologi** adalah proposisi majemuk yang **selalu bernilai BENAR** terlepas dari nilai kebenaran proposisi-proposisi penyusunnya.

### Contoh Tautologi

#### Contoh 5.1: Law of Excluded Middle
**Formula**: `P ∨ ¬P`

**Tabel Kebenaran**:
```
P | ¬P | P ∨ ¬P
--|----|---------
T | F  | T
F | T  | T
```

**Kesimpulan**: Selalu TRUE → **TAUTOLOGI** ✓

**Interpretasi**: "P atau bukan P" - pasti salah satunya benar!
- Contoh: "Hari ini hujan ATAU hari ini tidak hujan" → pasti benar

---

#### Contoh 5.2: Law of Identity
**Formula**: `P → P`

**Tabel Kebenaran**:
```
P | P → P
--|-------
T | T
F | T
```

**Kesimpulan**: Selalu TRUE → **TAUTOLOGI** ✓

**Interpretasi**: "Jika P, maka P" - selalu benar (trivial truth)

---

#### Contoh 5.3: Modus Ponens (Implication)
**Formula**: `((P → Q) ∧ P) → Q`

**Tabel Kebenaran**:
```
P | Q | P→Q | (P→Q)∧P | ((P→Q)∧P)→Q
--|---|-----|---------|-------------
T | T |  T  |    T    |     T
T | F |  F  |    F    |     T
F | T |  T  |    F    |     T
F | F |  T  |    F    |     T
```

**Kesimpulan**: Selalu TRUE → **TAUTOLOGI** ✓

**Interpretasi**: Aturan inferensi yang valid!

---

### Tautologi Penting (Hukum-hukum Logika)

| Nama | Formula | Keterangan |
|------|---------|------------|
| **Excluded Middle** | `P ∨ ¬P` | Pasti salah satu benar |
| **Non-Contradiction** | `¬(P ∧ ¬P)` | Tidak bisa keduanya benar |
| **Identity** | `P → P` | P implies P |
| **Implication** | `(P → Q) ↔ (¬P ∨ Q)` | Definisi implikasi |
| **Contrapositive** | `(P → Q) ↔ (¬Q → ¬P)` | Kontraposisi |
| **Double Negation** | `¬¬P ↔ P` | Negasi ganda |
| **De Morgan 1** | `¬(P ∧ Q) ↔ (¬P ∨ ¬Q)` | Distribusi negasi |
| **De Morgan 2** | `¬(P ∨ Q) ↔ (¬P ∧ ¬Q)` | Distribusi negasi |

---

## 5.3 Kontradiksi (Contradiction)

### Definisi Formal

> **Kontradiksi** adalah proposisi majemuk yang **selalu bernilai SALAH** terlepas dari nilai kebenaran proposisi-proposisi penyusunnya.

### Contoh Kontradiksi

#### Contoh 5.4: Law of Non-Contradiction
**Formula**: `P ∧ ¬P`

**Tabel Kebenaran**:
```
P | ¬P | P ∧ ¬P
--|----|---------
T | F  | F
F | T  | F
```

**Kesimpulan**: Selalu FALSE → **KONTRADIKSI** ✓

**Interpretasi**: "P dan bukan P" - tidak mungkin keduanya benar!
- Contoh: "Hari ini hujan DAN hari ini tidak hujan" → pasti salah

---

#### Contoh 5.5: Negasi Tautologi
**Formula**: `¬(P ∨ ¬P)`

**Tabel Kebenaran**:
```
P | ¬P | P∨¬P | ¬(P∨¬P)
--|----| -----|----------
T | F  |  T   |    F
F | T  |  T   |    F
```

**Kesimpulan**: Selalu FALSE → **KONTRADIKSI** ✓

---

### Hubungan Tautologi dan Kontradiksi

**Teorema**: 
- Jika `P` adalah **tautologi**, maka `¬P` adalah **kontradiksi**
- Jika `P` adalah **kontradiksi**, maka `¬P` adalah **tautologi**

**Contoh**:
- `P ∨ ¬P` adalah tautologi
- `¬(P ∨ ¬P)` = `P ∧ ¬P` adalah kontradiksi

---

## 5.4 Kontingensi (Contingency)

### Definisi Formal

> **Kontingensi** adalah proposisi majemuk yang **kadang benar, kadang salah**, tergantung nilai kebenaran proposisi-proposisi penyusunnya.

### Contoh Kontingensi

#### Contoh 5.6: Simple Contingency
**Formula**: `P ∧ Q`

**Tabel Kebenaran**:
```
P | Q | P ∧ Q
--|---|-------
T | T |   T   ← TRUE
T | F |   F   ← FALSE
F | T |   F   ← FALSE
F | F |   F   ← FALSE
```

**Kesimpulan**: Ada TRUE dan FALSE → **KONTINGENSI** ✓

---

#### Contoh 5.7: Implication with Variables
**Formula**: `P → Q`

**Tabel Kebenaran**:
```
P | Q | P → Q
--|---|-------
T | T |   T   ← TRUE
T | F |   F   ← FALSE
F | T |   T   ← TRUE
F | F |   T   ← TRUE
```

**Kesimpulan**: Ada TRUE dan FALSE → **KONTINGENSI** ✓

**Catatan**: Meskipun `P → Q` adalah kontingensi, **`((P → Q) ∧ P) → Q`** adalah tautologi!

---

## 5.5 Cara Mengidentifikasi Tipe Proposisi

### Algoritma Identifikasi

```
1. Buat tabel kebenaran lengkap
2. Lihat kolom hasil akhir:
   
   IF semua TRUE:
       → TAUTOLOGI
   ELSE IF semua FALSE:
       → KONTRADIKSI
   ELSE:
       → KONTINGENSI
```

### Contoh Lengkap: Analisis Formula

**Formula**: `(P → Q) ∨ (Q → P)`

**Pertanyaan**: Tautologi, kontradiksi, atau kontingensi?

**Tabel Kebenaran**:
```
P | Q | P→Q | Q→P | (P→Q)∨(Q→P)
--|---|-----|-----|-------------
T | T |  T  |  T  |     T
T | F |  F  |  T  |     T
F | T |  T  |  F  |     T
F | F |  T  |  T  |     T
```

**Analisis**:
- Semua baris = TRUE
- **Kesimpulan**: TAUTOLOGI ✓

**Interpretasi**: "Jika P maka Q, ATAU jika Q maka P" - selalu benar!

---

## 5.6 Aplikasi dalam Ilmu Komputer

### 1. Verifikasi Program

**Tautologi** digunakan untuk membuktikan **correctness** program.

**Contoh**: Verifikasi bahwa suatu kondisi selalu benar
```python
def safe_divide(a, b):
    """
    Tautologi: (b != 0) OR (result is error)
    Artinya: Selalu aman!
    """
    if b != 0:
        return a / b
    else:
        return "Error: Division by zero"

# Formula: (b≠0 → return_value) ∨ (b=0 → error)
# Ini adalah TAUTOLOGI - selalu ada hasil yang valid
```

---

### 2. Optimisasi Compiler

**Compiler** dapat menghapus kode yang merupakan **kontradiksi**.

**Contoh**:
```python
# Kode original
if x > 10 and x < 5:  # Kontradiksi!
    print("Impossible!")
    expensive_computation()

# Compiler optimization:
# Kode ini DIHAPUS karena kontradiksi
# (x > 10) ∧ (x < 5) = FALSE (kontradiksi)
```

---

### 3. Conditional Simplification

**Kontingensi** dapat disederhanakan dengan memeriksa kondisi runtime.

**Contoh**:
```python
# Formula: (user_logged_in) → (show_dashboard)
# Ini KONTINGENSI - tergantung runtime

if user_logged_in:
    show_dashboard()
else:
    show_login_page()
```

---

### 4. Boolean Algebra Optimization

**Hardware design** menggunakan tautologi untuk simplifikasi sirkuit.

**Contoh**:
```
Original circuit: (A ∧ B) ∨ (A ∧ ¬B)
Simplified: A  (karena distribusi)

Proof:
(A ∧ B) ∨ (A ∧ ¬B)
= A ∧ (B ∨ ¬B)    [Distributive]
= A ∧ TRUE        [B ∨ ¬B is tautology]
= A               [Identity]
```

---

## 5.7 Testing untuk Tautologi

### Metode 1: Truth Table (Complete)

**Langkah**:
1. List semua variabel
2. Buat 2ⁿ baris (n = jumlah variabel)
3. Hitung nilai setiap subformula
4. Check kolom final

**Kompleksitas**: O(2ⁿ) - exponential!

---

### Metode 2: Short-Circuit Evaluation

**Optimisasi**: Berhenti early jika ditemukan counterexample.

**Contoh**:
```python
def is_tautology(formula, variables):
    """
    Check if formula is tautology
    Return: True if tautology, False otherwise
    """
    n = len(variables)
    
    # Test all 2^n combinations
    for i in range(2**n):
        # Generate truth assignment
        assignment = {}
        for j, var in enumerate(variables):
            assignment[var] = bool((i >> j) & 1)
        
        # Evaluate formula
        if not evaluate(formula, assignment):
            # Found FALSE - not tautology!
            return False
    
    # All TRUE - it's a tautology!
    return True

# Test
formula = lambda P, Q: (P or not P)
print(is_tautology(formula, ['P']))  # True
```

---

### Metode 3: SAT Solver (Modern Approach)

**Idea**: Gunakan SAT solver untuk cek `¬formula`.
- Jika `¬formula` **UNSAT** → formula adalah **tautologi**
- Jika `¬formula` **SAT** → formula **bukan tautologi**

**Contoh dengan Z3** (Python):
```python
from z3 import *

P, Q = Bools('P Q')

# Test: P ∨ ¬P
formula = Or(P, Not(P))

# Create solver
s = Solver()

# Add negation of formula
s.add(Not(formula))

# Check
if s.check() == unsat:
    print("TAUTOLOGY!")
else:
    print("NOT tautology")
    print("Counterexample:", s.model())
```

---

## 5.8 Latihan

### Latihan 1: Identifikasi Tipe

Tentukan apakah formula berikut tautologi, kontradiksi, atau kontingensi:

**a)** `(P → Q) → ((¬P) ∨ Q)`

<details>
<summary>Lihat Solusi</summary>

**Tabel Kebenaran**:
```
P | Q | P→Q | ¬P | ¬P∨Q | (P→Q)→(¬P∨Q)
--|---|-----|----| -----|-------------
T | T |  T  | F  |  T   |     T
T | F |  F  | F  |  F   |     T
F | T |  T  | T  |  T   |     T
F | F |  T  | T  |  T   |     T
```

**Jawaban**: **TAUTOLOGI** ✓
</details>

---

**b)** `(P ∧ Q) ∧ ¬(P ∨ Q)`

<details>
<summary>Lihat Solusi</summary>

**Analisis**:
- `P ∧ Q` benar hanya jika P dan Q benar
- `¬(P ∨ Q)` benar hanya jika P dan Q salah
- Tidak mungkin keduanya benar!

**Jawaban**: **KONTRADIKSI** ✓
</details>

---

**c)** `(P ∧ Q) → P`

<details>
<summary>Lihat Solusi</summary>

**Tabel Kebenaran**:
```
P | Q | P∧Q | (P∧Q)→P
--|---|-----|--------
T | T |  T  |   T
T | F |  F  |   T
F | T |  F  |   T
F | F |  F  |   T
```

**Jawaban**: **TAUTOLOGI** ✓ (Simplification rule)
</details>

---

### Latihan 2: Pembuktian

Buktikan bahwa `(P → Q) ↔ (¬Q → ¬P)` adalah tautologi (Law of Contrapositive).

<details>
<summary>Lihat Solusi</summary>

**Tabel Kebenaran**:
```
P | Q | P→Q | ¬Q | ¬P | ¬Q→¬P | (P→Q)↔(¬Q→¬P)
--|---|-----|----|----|-------|---------------
T | T |  T  | F  | F  |   T   |      T
T | F |  F  | T  | F  |   F   |      T
F | T |  T  | F  | T  |   T   |      T
F | F |  T  | T  | T  |   T   |      T
```

**Kesimpulan**: Semua TRUE → **TAUTOLOGI** ✓
</details>

---

### Latihan 3: Implementasi

Implementasikan fungsi Python untuk mengecek apakah formula adalah kontradiksi.

<details>
<summary>Lihat Solusi</summary>

```python
def is_contradiction(formula, variables):
    """
    Check if formula is contradiction
    Return: True if contradiction, False otherwise
    """
    n = len(variables)
    
    for i in range(2**n):
        assignment = {}
        for j, var in enumerate(variables):
            assignment[var] = bool((i >> j) & 1)
        
        if evaluate(formula, assignment):
            # Found TRUE - not contradiction!
            return False
    
    # All FALSE - it's a contradiction!
    return True

# Test
def formula(P, Q):
    return P and (not P)  # P ∧ ¬P

print(is_contradiction(formula, ['P']))  # True
```
</details>

---

## 5.9 Ringkasan

### Key Takeaways

| Konsep | Karakteristik | Contoh |
|--------|---------------|--------|
| **Tautologi** | Selalu TRUE | `P ∨ ¬P` |
| **Kontradiksi** | Selalu FALSE | `P ∧ ¬P` |
| **Kontingensi** | Kadang TRUE/FALSE | `P ∧ Q` |

### Pentingnya dalam CS

✅ **Verifikasi**: Memastikan program correctness  
✅ **Optimisasi**: Compiler dapat simplifikasi kode  
✅ **Hardware**: Boolean circuit optimization  
✅ **AI**: Knowledge representation dan reasoning  

### Formula Penting

- **Excluded Middle**: `P ∨ ¬P` ← Tautologi
- **Non-Contradiction**: `¬(P ∧ ¬P)` ← Tautologi
- **Contrapositive**: `(P → Q) ↔ (¬Q → ¬P)` ← Tautologi

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 5
2. Rosen, K. "Discrete Mathematics and Its Applications" - Chapter 1.3
3. Huth, M., & Ryan, M. "Logic in Computer Science" - Chapter 1

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Proposisi Majemuk](BAB-04-Proposisi-Majemuk.md)
- [➡️ BAB Selanjutnya: Ekuivalen Logis](BAB-06-Ekuivalen-Logis.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Tautologi adalah fondasi pembuktian matematis!*

</div>
