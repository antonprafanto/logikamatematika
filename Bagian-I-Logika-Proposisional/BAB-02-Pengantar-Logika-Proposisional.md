# BAB 2: Pengantar Logika Proposisional

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB 1](BAB-01-Pengenalan-Logika-Matematika.md) | [➡️ BAB 3](BAB-03-Tabel-Kebenaran.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Mendefinisikan proposisi dan membedakan proposisi dari non-proposisi
- ✅ Mengenali dan menerapkan bentuk-bentuk argumen valid
- ✅ Memahami proposisi atomik dan majemuk
- ✅ Memberikan nilai kebenaran pada proposisi

---

## 2.1 Pendahuluan

### Apa itu Proposisi?

> **Proposisi** adalah pernyataan deklaratif yang memiliki nilai kebenaran: **benar** (True) atau **salah** (False), tetapi tidak keduanya.

**Karakteristik Proposisi**:
1. Berbentuk **pernyataan** (bukan pertanyaan, perintah, atau seruan)
2. Memiliki **nilai kebenaran** yang jelas (True atau False)
3. **Tidak ambigu** (tidak bermakna ganda)

### Contoh Proposisi ✅

| Pernyataan | Nilai | Proposisi? |
|------------|-------|------------|
| "2 + 2 = 4" | True | ✅ Ya |
| "Jakarta adalah ibukota Indonesia" | True | ✅ Ya |
| "10 < 5" | False | ✅ Ya |
| "Semua bilangan genap habis dibagi 2" | True | ✅ Ya |
| "Langit berwarna merah" | False | ✅ Ya |

### Contoh Non-Proposisi ❌

| Pernyataan | Mengapa Bukan Proposisi? |
|------------|--------------------------|
| "Tutup pintu!" | Perintah, tidak ada nilai kebenaran |
| "Apakah hujan?" | Pertanyaan, bukan pernyataan |
| "Halo!" | Salam/seruan |
| "x > 5" | Bergantung pada nilai x (bukan fixed) |
| "Kalimat ini salah" | Paradoks (tidak bisa ditentukan T/F) |

### Proposisi dalam Programming

```python
# PROPOSISI (memiliki nilai True/False)
is_logged_in = True
age_valid = (age >= 18)
email_exists = check_email_in_database(email)

# BUKAN PROPOSISI
name = input("Enter name: ")  # Input, bukan pernyataan
print("Hello")                # Perintah
# x > 5  # Expression, nilai tergantung x
```

---

## 2.2 Argumen-argumen

### Bentuk-Bentuk Argumen Valid

#### 1. **Modus Ponens** (Affirming the Antecedent)

**Bentuk**:
```
P → Q    (Jika P maka Q)
P        (P benar)
─────
∴ Q      (Jadi Q benar)
```

**Contoh**:
```
Jika hujan, maka jalan basah
Hujan
─────────────────────────
Jadi, jalan basah ✓
```

**Dalam Code**:
```python
def modus_ponens(P, Q, P_true):
    # P → Q: if P then Q
    # P is True
    # Therefore: Q is True
    if P_true:
        return Q
    return None  # Cannot conclude
    
# Example
def rule(is_raining):
    return "road_wet"

is_raining = True
conclusion = modus_ponens(is_raining, rule(is_raining), is_raining)
print(conclusion)  # Output: "road_wet"
```

#### 2. **Modus Tollens** (Denying the Consequent)

**Bentuk**:
```
P → Q    (Jika P maka Q)
¬Q       (Q salah)
─────
∴ ¬P     (Jadi P salah)
```

**Contoh**:
```
Jika hujan, maka jalan basah
Jalan TIDAK basah
─────────────────────────
Jadi, TIDAK hujan ✓
```

**Aplikasi - Debugging**:
```python
# Jika bug di fungsi X, maka test Y gagal
# Test Y TIDAK gagal
# Jadi, TIDAK ada bug di fungsi X

def modus_tollens(condition, result):
    if not result:  # ¬Q
        return not condition  # ∴ ¬P
    return None
```

#### 3. **Silogisme Hipotesis** (Hypothetical Syllogism)

**Bentuk**:
```
P → Q    (Jika P maka Q)
Q → R    (Jika Q maka R)
─────
∴ P → R  (Jadi, jika P maka R)
```

**Contoh**:
```
Jika belajar, maka lulus
Jika lulus, maka bahagia
─────────────────────────
Jadi, jika belajar, maka bahagia ✓
```

**Chain of Reasoning**:
```python
# P → Q → R
def study():
    return "pass"

def pass_exam(status):
    if status == "pass":
        return "happy"
    
# Chaining
result = pass_exam(study())  # study → pass → happy
```

#### 4. **Silogisme Disjunktif** (Disjunctive Syllogism)

**Bentuk**:
```
P ∨ Q    (P atau Q)
¬P       (Bukan P)
─────
∴ Q      (Jadi Q)
```

**Contoh**:
```
Hari ini cerah atau hujan
Hari ini TIDAK cerah
──────────────────────
Jadi, hari ini hujan ✓
```

**Aplikasi**:
```python
# Either network error OR server error
network_ok = check_network()
if network_ok:  # ¬P (tidak ada network error)
    # Jadi, server error
    print("Server error detected")
```

#### 5. **Dilema Konstruktif** (Constructive Dilemma)

**Bentuk**:
```
P → Q
R → S
P ∨ R
─────
∴ Q ∨ S
```

**Contoh**:
```
Jika hujan, bawa payung
Jika panas, bawa topi
Hujan atau panas
──────────────────
Jadi, bawa payung atau topi ✓
```

#### 6. **Simplifikasi** (Simplification)

**Bentuk**:
```
P ∧ Q
─────
∴ P
```

**Contoh**:
```
Hari ini hujan DAN dingin
─────────────────────────
Jadi, hari ini hujan ✓
```

**Dalam Code**:
```python
conditions = {"is_raining": True, "is_cold": True}

# From P ∧ Q, we can conclude P
if conditions["is_raining"] and conditions["is_cold"]:
    print("It's raining")  # Simplification
```

#### 7. **Konjungsi** (Conjunction)

**Bentuk**:
```
P
Q
─────
∴ P ∧ Q
```

**Contoh**:
```
Hari ini hujan
Hari ini dingin
─────────────────
Jadi, hari ini hujan DAN dingin ✓
```

#### 8. **Adisi** (Addition)

**Bentuk**:
```
P
─────
∴ P ∨ Q
```

**Contoh**:
```
Hari ini hujan
─────────────────
Jadi, hari ini hujan ATAU cerah ✓
```

**Catatan**: Ini terlihat aneh, tapi valid. Jika P benar, maka "P atau apapun" pasti benar.

---

## 2.3 Proposisi-proposisi

### Jenis Proposisi

#### 1. **Proposisi Atomik** (Atomic Proposition)

> Proposisi yang **tidak dapat dipecah** menjadi proposisi yang lebih sederhana.

**Contoh**:
- "Hujan" → tidak bisa dipecah lagi
- "P" → variabel proposisi tunggal
- "Jakarta adalah ibukota" → atomik (satu pernyataan utuh)

**Notasi**: Biasanya menggunakan huruf kapital: `P`, `Q`, `R`, `S`, ...

```python
# Atomic propositions
P = True   # "It's raining"
Q = False  # "It's hot"
R = True   # "It's Monday"
```

#### 2. **Proposisi Majemuk** (Compound Proposition)

> Proposisi yang dibentuk dari kombinasi proposisi atomik menggunakan **operator logika**.

**Contoh**:
- "Hujan **DAN** dingin" → `P ∧ Q`
- "Hujan **ATAU** cerah" → `P ∨ Q`
- "**TIDAK** hujan" → `¬P`
- "**JIKA** hujan **MAKA** basah" → `P → Q`

**Struktur**:
```
Proposisi Atomik: P, Q, R
Operator: ∧, ∨, ¬, →, ↔
Proposisi Majemuk: P ∧ Q, ¬P ∨ R, (P → Q) ∧ (Q → R)
```

### Contoh Lengkap

**Atomik**:
- P: "Saya belajar"
- Q: "Saya lulus"
- R: "Saya bahagia"

**Majemuk**:
- `P ∧ Q`: "Saya belajar DAN lulus"
- `P → Q`: "Jika saya belajar, maka saya lulus"
- `(P → Q) ∧ (Q → R)`: "Jika saya belajar maka lulus, dan jika lulus maka bahagia"

---

## 2.4 Pemberian Nilai

### Assignment (Penugasan Nilai)

**Assignment** adalah pemberian nilai kebenaran (`True` atau `False`) pada variabel proposisi.

**Contoh**:
```
Assignment 1:
P = True
Q = False
R = True

Assignment 2:
P = False
Q = True
R = False
```

### Evaluasi Proposisi Majemuk

Setelah assignment, kita bisa evaluasi proposisi majemuk:

**Contoh**:
```
Given:
P = True
Q = False

Evaluate:
P ∧ Q = True ∧ False = False
P ∨ Q = True ∨ False = True
¬P = ¬True = False
P → Q = True → False = False
```

### Truth Valuation (Penilaian Kebenaran)

**Truth valuation** adalah fungsi yang memetakan setiap proposisi atomik ke nilai kebenaran.

**Formal Definition**:
```
v: {P, Q, R, ...} → {True, False}

Example:
v(P) = True
v(Q) = False
v(R) = True
```

**Kemudian extend ke compound propositions**:
```
v(P ∧ Q) = v(P) ∧ v(Q) = True ∧ False = False
v(P ∨ R) = v(P) ∨ v(R) = True ∨ True = True
```

### Implementasi dalam Python

```python
class PropositionEvaluator:
    def __init__(self, assignment):
        """
        assignment: dict mapping variable name to bool
        Example: {'P': True, 'Q': False, 'R': True}
        """
        self.assignment = assignment
    
    def evaluate_and(self, p, q):
        return self.assignment[p] and self.assignment[q]
    
    def evaluate_or(self, p, q):
        return self.assignment[p] or self.assignment[q]
    
    def evaluate_not(self, p):
        return not self.assignment[p]
    
    def evaluate_implies(self, p, q):
        # P → Q ≡ ¬P ∨ Q
        return (not self.assignment[p]) or self.assignment[q]

# Usage
assignment = {'P': True, 'Q': False, 'R': True}
evaluator = PropositionEvaluator(assignment)

print("P ∧ Q =", evaluator.evaluate_and('P', 'Q'))      # False
print("P ∨ Q =", evaluator.evaluate_or('P', 'Q'))       # True
print("¬P =", evaluator.evaluate_not('P'))              # False
print("P → Q =", evaluator.evaluate_implies('P', 'Q'))  # False
print("P → R =", evaluator.evaluate_implies('P', 'R'))  # True
```

---

## 💡 Ringkasan

### Key Takeaways

✅ **Proposisi** adalah pernyataan dengan nilai kebenaran (True/False)
- Bukan pertanyaan, perintah, atau ekspresi dengan variabel bebas

✅ **8 Bentuk Argumen Valid** yang umum:
1. **Modus Ponens**: `P → Q, P ∴ Q`
2. **Modus Tollens**: `P → Q, ¬Q ∴ ¬P`
3. **Silogisme Hipotesis**: `P → Q, Q → R ∴ P → R`
4. **Silogisme Disjunktif**: `P ∨ Q, ¬P ∴ Q`
5. **Dilema Konstruktif**: `P → Q, R → S, P ∨ R ∴ Q ∨ S`
6. **Simplifikasi**: `P ∧ Q ∴ P`
7. **Konjungsi**: `P, Q ∴ P ∧ Q`
8. **Adisi**: `P ∴ P ∨ Q`

✅ **Proposisi Atomik** tidak dapat dipecah lagi

✅ **Proposisi Majemuk** dibentuk dari atomik + operator

✅ **Assignment** memberikan nilai pada variabel proposisi

✅ **Evaluasi** menggunakan assignment untuk menghitung nilai compound proposition

---

## 📝 Latihan

### Latihan 1: Identifikasi Proposisi
Mana yang merupakan proposisi? Jelaskan!

a) "Python adalah bahasa pemrograman"  
b) "Berapa umurmu?"  
c) "x² = 4"  
d) "Buka file tersebut!"  
e) "5 + 3 = 8"  

<details>
<summary>Lihat Jawaban</summary>

a) ✅ Proposisi (True)  
b) ❌ Bukan proposisi (pertanyaan)  
c) ❌ Bukan proposisi (bergantung pada x)  
d) ❌ Bukan proposisi (perintah)  
e) ✅ Proposisi (True)  
</details>

### Latihan 2: Argumen Valid
Tentukan bentuk argumen berikut:

a)
```
Jika sistem crash, maka log error
Sistem crash
─────────────────────────
Log error
```

b)
```
Jika bug di database, maka query lambat
Query TIDAK lambat
──────────────────────────────────────
TIDAK ada bug di database
```

<details>
<summary>Lihat Jawaban</summary>

a) **Modus Ponens** (`P → Q, P ∴ Q`)  
b) **Modus Tollens** (`P → Q, ¬Q ∴ ¬P`)  
</details>

### Latihan 3: Evaluasi
Given: `P = True, Q = False, R = True`

Evaluasi:
a) `P ∧ Q`  
b) `P ∨ Q`  
c) `(P → Q) ∨ R`  
d) `¬P ∧ (Q ∨ R)`  

<details>
<summary>Lihat Jawaban</summary>

a) `True ∧ False = False`  
b) `True ∨ False = True`  
c) `(True → False) ∨ True = False ∨ True = True`  
d) `¬True ∧ (False ∨ True) = False ∧ True = False`  
</details>

### Latihan 4: Implementasi
Implementasikan evaluator untuk XOR (⊕):

```python
def evaluate_xor(p, q):
    # P ⊕ Q: True jika P dan Q berbeda
    # Your code here
    pass

# Test
print(evaluate_xor(True, True))   # Should print: False
print(evaluate_xor(True, False))  # Should print: True
print(evaluate_xor(False, True))  # Should print: True
print(evaluate_xor(False, False)) # Should print: False
```

<details>
<summary>Lihat Jawaban</summary>

```python
def evaluate_xor(p, q):
    return p != q  # XOR is True when p and q differ

# Alternative
def evaluate_xor_v2(p, q):
    return (p or q) and not (p and q)

# Alternative using formula: P ⊕ Q ≡ (P ∨ Q) ∧ ¬(P ∧ Q)
def evaluate_xor_v3(p, q):
    return (p | q) & ~(p & q)  # Using bitwise operators
```
</details>

---

## 🔗 Navigasi

- [⬅️ Kembali ke Daftar Isi](../README.md)
- [⬅️ BAB 1: Pengenalan Logika Matematika](BAB-01-Pengenalan-Logika-Matematika.md)
- [➡️ BAB 3: Tabel Kebenaran](BAB-03-Tabel-Kebenaran.md)
- [📚 Lihat Semua BAB di Bagian I](README.md)

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 2
2. Rosen, K. "Discrete Mathematics and Its Applications" - Chapter 1.1
3. Epp, S. "Discrete Mathematics with Applications" - Chapter 2.1

---

<div align="center">

**Selamat Belajar! 🚀**

*Pahami 8 bentuk argumen valid - ini akan sering digunakan!*

</div>
