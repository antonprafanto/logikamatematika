# BAB 6: Ekuivalen Logis (Logical Equivalence)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-05-Tautologi.md) | [➡️ BAB Selanjutnya](BAB-07-Penyederhanaan.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami konsep ekuivalen logis dan cara membuktikannya
- ✅ Menguasai 14 hukum logika utama (De Morgan, Distributive, dll)
- ✅ Menggunakan hukum logika untuk transformasi formula
- ✅ Menerapkan ekuivalen logis dalam simplifikasi kode dan circuit design

---

## 6.1 Pendahuluan

### Apa itu Ekuivalen Logis?

> **Ekuivalen Logis**: Dua formula P dan Q dikatakan **ekuivalen logis** (ditulis `P ≡ Q` atau `P ⇔ Q`) jika keduanya memiliki **nilai kebenaran yang sama** untuk **setiap** kemungkinan assignment variabel.

**Secara formal**:
```
P ≡ Q  ⟺  P ↔ Q adalah tautologi
```

### Mengapa Penting?

Ekuivalen logis memungkinkan kita:
1. **Transformasi formula** - ubah ke bentuk lebih sederhana
2. **Simplifikasi** - reduce complexity
3. **Optimisasi** - compiler optimization, circuit minimization
4. **Pembuktian** - show two approaches are equivalent

### Contoh Sederhana

**Pertanyaan**: Apakah `P → Q` ekuivalen dengan `¬P ∨ Q`?

**Jawaban**: YA! Mari buktikan dengan tabel kebenaran:

```
P | Q | P→Q | ¬P | ¬P∨Q
--|---|-----|----| -----
T | T |  T  | F  |  T
T | F |  F  | F  |  F
F | T |  T  | T  |  T
F | F |  T  | T  |  T
```

**Kesimpulan**: Kolom `P→Q` **identik** dengan `¬P∨Q` → **EKUIVALEN** ✓

**Formula**: `P → Q ≡ ¬P ∨ Q`

---

## 6.2 Cara Membuktikan Ekuivalen Logis

### Metode 1: Tabel Kebenaran

**Langkah**:
1. Buat tabel kebenaran untuk kedua formula
2. Bandingkan kolom hasil
3. Jika identik → ekuivalen

**Contoh**: Buktikan `¬(P ∧ Q) ≡ ¬P ∨ ¬Q` (De Morgan's Law)

```
P | Q | P∧Q | ¬(P∧Q) | ¬P | ¬Q | ¬P∨¬Q
--|---|-----|--------|----|----|-------
T | T |  T  |   F    | F  | F  |   F
T | F |  F  |   T    | F  | T  |   T
F | T |  F  |   T    | T  | F  |   T
F | F |  F  |   T    | T  | T  |   T
```

**Hasil**: Kolom `¬(P∧Q)` = kolom `¬P∨¬Q` → **EKUIVALEN** ✓

---

### Metode 2: Menggunakan Hukum Logika

**Cara**: Transform step-by-step menggunakan hukum yang sudah diketahui.

**Contoh**: Buktikan `(P → Q) ∧ (Q → P) ≡ P ↔ Q`

```
(P → Q) ∧ (Q → P)
≡ (¬P ∨ Q) ∧ (¬Q ∨ P)        [Implication Law]
≡ ((¬P ∨ Q) ∧ ¬Q) ∨ ((¬P ∨ Q) ∧ P)  [Distributive]
≡ (¬P ∧ ¬Q) ∨ (Q ∧ ¬Q) ∨ (¬P ∧ P) ∨ (Q ∧ P)  [Distributive]
≡ (¬P ∧ ¬Q) ∨ FALSE ∨ FALSE ∨ (P ∧ Q)  [Contradiction]
≡ (¬P ∧ ¬Q) ∨ (P ∧ Q)         [Identity]
≡ P ↔ Q                        [Definition of biconditional]
```

✓ **TERBUKTI**

---

### Metode 3: SAT Solver (Modern Approach)

**Idea**: Cek apakah `(P → Q) ∧ ¬(Q → P)` adalah **kontradiksi**.

```python
from z3 import *

P, Q = Bools('P Q')

# Check if P → Q ≡ ¬P ∨ Q
left = Implies(P, Q)
right = Or(Not(P), Q)

# They are equivalent if (left ↔ right) is tautology
# Or equivalently, (left ⊕ right) is contradiction

s = Solver()
s.add(Xor(left, right))  # XOR: true if different

if s.check() == unsat:
    print("EQUIVALENT!")
else:
    print("NOT equivalent")
    print("Counterexample:", s.model())
```

**Output**: `EQUIVALENT!` ✓

---

## 6.3 Hukum-Hukum Logika Utama

### Tabel Hukum Lengkap

| No | Nama Hukum | Formula | Keterangan |
|----|------------|---------|------------|
| 1 | **Identity Laws** | `P ∧ T ≡ P`<br>`P ∨ F ≡ P` | TRUE/FALSE tidak berpengaruh |
| 2 | **Domination Laws** | `P ∨ T ≡ T`<br>`P ∧ F ≡ F` | TRUE dominates OR<br>FALSE dominates AND |
| 3 | **Idempotent Laws** | `P ∨ P ≡ P`<br>`P ∧ P ≡ P` | Duplikasi tidak berpengaruh |
| 4 | **Double Negation** | `¬¬P ≡ P` | Negasi ganda cancel out |
| 5 | **Commutative Laws** | `P ∨ Q ≡ Q ∨ P`<br>`P ∧ Q ≡ Q ∧ P` | Urutan tidak penting |
| 6 | **Associative Laws** | `(P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R)`<br>`(P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)` | Grouping tidak penting |
| 7 | **Distributive Laws** | `P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)`<br>`P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)` | OR distributes over AND<br>AND distributes over OR |
| 8 | **De Morgan's Laws** | `¬(P ∧ Q) ≡ ¬P ∨ ¬Q`<br>`¬(P ∨ Q) ≡ ¬P ∧ ¬Q` | Negate conjunction/disjunction |
| 9 | **Absorption Laws** | `P ∨ (P ∧ Q) ≡ P`<br>`P ∧ (P ∨ Q) ≡ P` | Absorb redundant terms |
| 10 | **Negation Laws** | `P ∨ ¬P ≡ T`<br>`P ∧ ¬P ≡ F` | Excluded middle<br>Non-contradiction |
| 11 | **Implication Law** | `P → Q ≡ ¬P ∨ Q` | Convert implication |
| 12 | **Contrapositive** | `P → Q ≡ ¬Q → ¬P` | Equivalent implication |
| 13 | **Biconditional** | `P ↔ Q ≡ (P → Q) ∧ (Q → P)`<br>`P ↔ Q ≡ (P ∧ Q) ∨ (¬P ∧ ¬Q)` | Two-way implication |
| 14 | **Exportation** | `(P ∧ Q) → R ≡ P → (Q → R)` | Curry/uncurry |

---

## 6.4 Hukum De Morgan (Detail)

### Hukum De Morgan adalah SANGAT PENTING!

**Hukum De Morgan** adalah dua aturan untuk mendistribusikan negasi:

1. **De Morgan 1**: `¬(P ∧ Q) ≡ ¬P ∨ ¬Q`
   - Negasi dari AND = OR dari negasi-negasi
   
2. **De Morgan 2**: `¬(P ∨ Q) ≡ ¬P ∧ ¬Q`
   - Negasi dari OR = AND dari negasi-negasi

### Visualisasi

```
BEFORE negation:        AFTER negation:
P ∧ Q                   ¬P ∨ ¬Q
P ∨ Q                   ¬P ∧ ¬Q

Rule: Flip ∧⇔∨, negate each term
```

### Contoh Praktis

**Problem**: Simplify `¬(x > 5 ∧ y < 10)`

**Solution**:
```
¬(x > 5 ∧ y < 10)
≡ ¬(x > 5) ∨ ¬(y < 10)    [De Morgan]
≡ (x ≤ 5) ∨ (y ≥ 10)       [Negation of comparisons]
```

**Interpretasi**: "TIDAK (x > 5 DAN y < 10)" = "x ≤ 5 ATAU y ≥ 10"

### Generalisasi De Morgan

Untuk **n terms**:
```
¬(P₁ ∧ P₂ ∧ ... ∧ Pₙ) ≡ ¬P₁ ∨ ¬P₂ ∨ ... ∨ ¬Pₙ
¬(P₁ ∨ P₂ ∨ ... ∨ Pₙ) ≡ ¬P₁ ∧ ¬P₂ ∧ ... ∧ ¬Pₙ
```

**Contoh**:
```
¬(A ∧ B ∧ C) ≡ ¬A ∨ ¬B ∨ ¬C
```

---

## 6.5 Hukum Distributive (Detail)

### Dua Bentuk Distributive

1. **OR over AND**: `P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)`
2. **AND over OR**: `P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)`

### Mirip dengan Aljabar Biasa

Aljabar: `a × (b + c) = (a × b) + (a × c)`

Logika: `P ∧ (Q ∨ R) = (P ∧ Q) ∨ (P ∧ R)`

**Perbedaan**: Logika juga punya OR over AND!

### Pembuktian (Tabel Kebenaran)

**Buktikan**: `P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)`

```
P | Q | R | Q∧R | P∨(Q∧R) | P∨Q | P∨R | (P∨Q)∧(P∨R)
--|---|---|-----|---------|-----|-----|-------------
T | T | T |  T  |    T    |  T  |  T  |      T
T | T | F |  F  |    T    |  T  |  T  |      T
T | F | T |  F  |    T    |  T  |  T  |      T
T | F | F |  F  |    T    |  T  |  T  |      T
F | T | T |  T  |    T    |  T  |  T  |      T
F | T | F |  F  |    F    |  T  |  F  |      F
F | F | T |  F  |    F    |  F  |  T  |      F
F | F | F |  F  |    F    |  F  |  F  |      F
```

**Hasil**: Kolom `P∨(Q∧R)` = kolom `(P∨Q)∧(P∨R)` → **EKUIVALEN** ✓

### Aplikasi: CNF dan DNF

Distributive laws digunakan untuk convert formula ke:
- **CNF** (Conjunctive Normal Form): `(P∨Q) ∧ (R∨S) ∧ ...`
- **DNF** (Disjunctive Normal Form): `(P∧Q) ∨ (R∧S) ∨ ...`

---

## 6.6 Aplikasi dalam Ilmu Komputer

### 1. Code Optimization - Conditional Simplification

**Compiler** menggunakan logical equivalence untuk simplify conditions.

**Contoh**:
```python
# Original code
if not (x > 5 and y < 10):
    do_something()

# Optimized (using De Morgan)
if x <= 5 or y >= 10:
    do_something()
```

**Benefit**: Lebih mudah dibaca, potentially faster execution.

---

### 2. Boolean Circuit Minimization

**Hardware design** menggunakan equivalence untuk minimize gates.

**Contoh**: Minimize `(A ∧ B) ∨ (A ∧ ¬B)`

```
(A ∧ B) ∨ (A ∧ ¬B)
≡ A ∧ (B ∨ ¬B)         [Distributive]
≡ A ∧ T                 [Excluded middle]
≡ A                     [Identity]
```

**Result**: 
- **Before**: 4 gates (2 AND, 1 OR, 1 NOT)
- **After**: 0 gates (just wire A)
- **Saving**: 100%! 🎉

---

### 3. Query Optimization (Database)

**SQL optimizer** menggunakan equivalence untuk rewrite queries.

**Contoh**:
```sql
-- Original query
SELECT * FROM users 
WHERE NOT (age > 18 AND status = 'active');

-- Optimized (De Morgan)
SELECT * FROM users 
WHERE age <= 18 OR status != 'active';
```

**Benefit**: Different execution plan, potentially faster.

---

### 4. Satisfiability Checking (SAT Solver)

**SAT solvers** menggunakan equivalence untuk preprocessing.

**Contoh**:
```python
from z3 import *

x, y, z = Bools('x y z')

# Original formula
formula = Or(And(x, y), And(x, Not(y)))

# Simplified using distributive law
simplified = x  # Equivalent!

s = Solver()
s.add(simplified)
print(s.check())  # sat
print(s.model())  # [x = True]
```

---

### 5. Formal Verification

**Model checkers** menggunakan equivalence untuk prove properties.

**Contoh**: Verify that two implementations are equivalent

```python
def impl1(P, Q):
    return P implies Q

def impl2(P, Q):
    return (not P) or Q

# Prove equivalence
def are_equivalent(impl1, impl2):
    for P in [True, False]:
        for Q in [True, False]:
            if impl1(P, Q) != impl2(P, Q):
                return False
    return True

print(are_equivalent(impl1, impl2))  # True
```

---

## 6.7 Latihan dan Soal

### Latihan 1: Pembuktian Ekuivalen

Buktikan ekuivalen logis berikut menggunakan tabel kebenaran:

**a)** `P → (Q → R) ≡ (P ∧ Q) → R` (Exportation)

<details>
<summary>Lihat Solusi</summary>

```
P | Q | R | Q→R | P→(Q→R) | P∧Q | (P∧Q)→R
--|---|---|-----|---------|-----|--------
T | T | T |  T  |    T    |  T  |   T
T | T | F |  F  |    F    |  T  |   F
T | F | T |  T  |    T    |  F  |   T
T | F | F |  T  |    T    |  F  |   T
F | T | T |  T  |    T    |  F  |   T
F | T | F |  F  |    T    |  F  |   T
F | F | T |  T  |    T    |  F  |   T
F | F | F |  T  |    T    |  F  |   T
```

**Kesimpulan**: Kolom identik → **EKUIVALEN** ✓
</details>

---

**b)** `P ↔ Q ≡ (P ∧ Q) ∨ (¬P ∧ ¬Q)`

<details>
<summary>Lihat Solusi</summary>

```
P | Q | P↔Q | P∧Q | ¬P | ¬Q | ¬P∧¬Q | (P∧Q)∨(¬P∧¬Q)
--|---|-----|-----|----|----| ------|---------------
T | T |  T  |  T  | F  | F  |   F   |       T
T | F |  F  |  F  | F  | T  |   F   |       F
F | T |  F  |  F  | T  | F  |   F   |       F
F | F |  T  |  F  | T  | T  |   T   |       T
```

**Kesimpulan**: Kolom identik → **EKUIVALEN** ✓
</details>

---

### Latihan 2: Simplifikasi Menggunakan Hukum Logika

Simplify formula berikut menggunakan hukum-hukum logika:

**a)** `(P ∨ Q) ∧ (P ∨ ¬Q)`

<details>
<summary>Lihat Solusi</summary>

```
(P ∨ Q) ∧ (P ∨ ¬Q)
≡ P ∨ (Q ∧ ¬Q)          [Distributive]
≡ P ∨ F                 [Contradiction]
≡ P                     [Identity]
```

**Jawaban**: `P` ✓
</details>

---

**b)** `¬(¬P ∨ Q) ∨ (P ∧ ¬Q)`

<details>
<summary>Lihat Solusi</summary>

```
¬(¬P ∨ Q) ∨ (P ∧ ¬Q)
≡ (¬¬P ∧ ¬Q) ∨ (P ∧ ¬Q)    [De Morgan]
≡ (P ∧ ¬Q) ∨ (P ∧ ¬Q)       [Double Negation]
≡ P ∧ ¬Q                    [Idempotent]
```

**Jawaban**: `P ∧ ¬Q` ✓
</details>

---

### Latihan 3: Aplikasi Praktis

**a)** Simplify kode berikut menggunakan De Morgan:

```python
if not (age >= 18 and has_license):
    print("Cannot drive")
```

<details>
<summary>Lihat Solusi</summary>

```python
# Using De Morgan: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q
if age < 18 or not has_license:
    print("Cannot drive")
```
</details>

---

**b)** Minimize Boolean circuit: `(A ∧ ¬B) ∨ (¬A ∧ B)`

<details>
<summary>Lihat Solusi</summary>

Ini adalah **XOR** (exclusive OR):
```
(A ∧ ¬B) ∨ (¬A ∧ B) ≡ A ⊕ B
```

**Circuit**: Replace dengan single XOR gate! ✓
</details>

---

### Latihan 4: Implementasi Python

Implementasikan fungsi untuk verify logical equivalence:

```python
def are_equivalent(formula1, formula2, variables):
    """
    Check if two formulas are logically equivalent
    
    Args:
        formula1, formula2: Functions that take variable assignments
        variables: List of variable names
    
    Returns:
        True if equivalent, False otherwise
    """
    # TODO: Implement this
    pass

# Test
def f1(P, Q):
    return P or Q

def f2(P, Q):
    return not (not P and not Q)  # De Morgan

print(are_equivalent(f1, f2, ['P', 'Q']))  # Should be True
```

<details>
<summary>Lihat Solusi</summary>

```python
def are_equivalent(formula1, formula2, variables):
    n = len(variables)
    
    # Test all 2^n combinations
    for i in range(2**n):
        # Generate assignment
        assignment = {}
        for j, var in enumerate(variables):
            assignment[var] = bool((i >> j) & 1)
        
        # Evaluate both formulas
        result1 = formula1(**assignment)
        result2 = formula2(**assignment)
        
        # If different, not equivalent
        if result1 != result2:
            print(f"Counterexample: {assignment}")
            return False
    
    return True

# Test
def f1(P, Q):
    return P or Q

def f2(P, Q):
    return not (not P and not Q)

print(are_equivalent(f1, f2, ['P', 'Q']))  # True ✓
```
</details>

---

## 6.8 Ringkasan

### Key Takeaways

✅ **Ekuivalen Logis**: `P ≡ Q` jika nilai kebenaran sama untuk semua assignment  

✅ **14 Hukum Utama**: Identity, Domination, Idempotent, Double Negation, Commutative, Associative, Distributive, De Morgan, Absorption, Negation, Implication, Contrapositive, Biconditional, Exportation

✅ **De Morgan**: `¬(P ∧ Q) ≡ ¬P ∨ ¬Q` dan `¬(P ∨ Q) ≡ ¬P ∧ ¬Q` - SANGAT PENTING!

✅ **Distributive**: `P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)` - untuk CNF/DNF conversion

### Aplikasi Penting

| Area | Penggunaan |
|------|------------|
| 🔧 **Compiler** | Conditional simplification, dead code elimination |
| 🖥️ **Hardware** | Circuit minimization, gate reduction |
| 💾 **Database** | Query optimization, index selection |
| ✅ **Verification** | Equivalence checking, model checking |
| 🤖 **AI** | Knowledge base simplification, reasoning |

### Formula Penting yang Harus Dihafal

```
1. P → Q ≡ ¬P ∨ Q (Implication)
2. ¬(P ∧ Q) ≡ ¬P ∨ ¬Q (De Morgan 1)
3. ¬(P ∨ Q) ≡ ¬P ∧ ¬Q (De Morgan 2)
4. P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R) (Distributive)
5. P → Q ≡ ¬Q → ¬P (Contrapositive)
```

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 6
2. Rosen, K. "Discrete Mathematics and Its Applications" - Chapter 1.3
3. Huth, M., & Ryan, M. "Logic in Computer Science" - Chapter 1.4

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Tautologi](BAB-05-Tautologi.md)
- [➡️ BAB Selanjutnya: Penyederhanaan](BAB-07-Penyederhanaan.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Ekuivalen logis adalah fondasi transformasi formula!*

</div>
