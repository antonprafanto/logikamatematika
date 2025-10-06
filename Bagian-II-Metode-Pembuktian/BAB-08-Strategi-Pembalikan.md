# BAB 8: Strategi Pembalikan (Proof by Contradiction)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](../Bagian-I-Logika-Proposisional/BAB-07-Penyederhanaan.md) | [➡️ BAB Selanjutnya](BAB-09-Tablo-Semantik.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami konsep proof by contradiction (reductio ad absurdum)
- ✅ Menerapkan strategi pembalikan untuk membuktikan teorema
- ✅ Memahami konsep konsistensi dan inkonsistensi
- ✅ Menggunakan model dan countermodel dalam pembuktian
- ✅ Menerapkan teknik ini dalam program verification

---

## 8.1 Pendahuluan

### Apa itu Proof by Contradiction?

> **Proof by Contradiction** (Bukti dengan Kontradiksi) adalah metode pembuktian yang bekerja dengan cara:
> 1. Asumsikan **negasi** dari yang ingin dibuktikan
> 2. Tunjukkan bahwa asumsi ini menghasilkan **kontradiksi**
> 3. Kesimpulan: Asumsi salah, jadi pernyataan asli **pasti benar**

**Nama lain**: 
- Reductio ad absurdum (Latin: "reduction to absurdity")
- Indirect proof
- Proof by refutation

### Struktur Umum

```
Goal: Prove P

1. Assume ¬P (negasi dari P)
2. Derive contradiction (⊥)
3. Conclude: ¬P is false
4. Therefore: P is true
```

### Mengapa Efektif?

Kadang lebih mudah membuktikan bahwa **negasi** pernyataan itu **mustahil**, daripada membuktikan pernyataan itu sendiri secara langsung.

**Analogi**: 
- Direct proof: "Tunjukkan pintu ini terbuka"
- Proof by contradiction: "Jika pintu ini tertutup, maka kita tidak bisa masuk. Tapi kita bisa masuk. Kontradiksi! Jadi pintu pasti terbuka."

---

## 8.2 Konsep Dasar

### Kontradiksi (Contradiction)

> **Kontradiksi** adalah pernyataan yang **selalu false**, contoh: `P ∧ ¬P`

**Notasi**: `⊥` (bottom/falsum)

**Karakteristik**:
```
P ∧ ¬P ≡ FALSE
```

### Hukum Excluded Middle

> Setiap proposisi **P atau ¬P** pasti benar (tidak ada yang ketiga)

```
P ∨ ¬P ≡ TRUE
```

**Implikasi**: Jika ¬P salah, maka P pasti benar.

### Hukum Non-Contradiction

> Tidak mungkin **P dan ¬P** keduanya benar

```
¬(P ∧ ¬P) ≡ TRUE
```

---

## 8.3 Cara Melakukan Proof by Contradiction

### Template Pembuktian

**Format formal**:
```
Theorem: P

Proof (by contradiction):
  Assume ¬P           [Assumption untuk kontradiksi]
  ...
  [Derive Q]
  ...
  [Derive ¬Q]         
  Contradiction! (Q ∧ ¬Q)
  
  Therefore, assumption ¬P is false.
  Hence, P is true. ∎
```

### Contoh 8.1: √2 adalah Irasional

**Klasik proof by contradiction!**

**Theorem**: √2 adalah bilangan irasional

**Proof**:
```
Assume (for contradiction): √2 is rational

Then: √2 = p/q where p,q ∈ ℤ, q ≠ 0, gcd(p,q) = 1 (lowest terms)

Square both sides:
  2 = p²/q²
  2q² = p²

This means p² is even.
Therefore p is even (karena square dari odd tetap odd).

Let p = 2k for some k ∈ ℤ.

Substitute:
  2q² = (2k)²
  2q² = 4k²
  q² = 2k²

This means q² is even.
Therefore q is even.

But wait! 
  - p is even
  - q is even
  - This means gcd(p,q) ≥ 2
  
CONTRADICTION! (karena kita assume gcd(p,q) = 1)

Therefore, assumption salah.
Hence, √2 is irrational. ∎
```

**Elegant!** 🎉

---

### Contoh 8.2: Infinitas Prima

**Theorem**: Ada tak hingga banyak bilangan prima

**Proof** (Euclid):
```
Assume (for contradiction): Ada hanya finitely many primes

Let p₁, p₂, ..., pₙ be ALL the primes.

Consider: N = (p₁ × p₂ × ... × pₙ) + 1

Now, N is either prime or composite.

Case 1: N is prime
  Then N is a prime not in our list (N > pᵢ for all i).
  CONTRADICTION! (karena kita bilang p₁,...,pₙ are ALL primes)

Case 2: N is composite
  Then N has a prime divisor p.
  
  If p is in our list (p = pᵢ for some i):
    Then p divides (p₁ × p₂ × ... × pₙ)
    And p divides N
    So p divides N - (p₁ × p₂ × ... × pₙ) = 1
    But no prime divides 1!
    CONTRADICTION!
  
  If p is not in our list:
    CONTRADICTION! (karena p is prime tapi not in complete list)

Either way, contradiction!

Therefore, assumption salah.
Hence, there are infinitely many primes. ∎
```

**Beautiful!** Salah satu proof paling elegan dalam matematika! 🌟

---

## 8.4 Konsistensi dan Inkonsistensi

### Definisi Konsistensi

> Sekumpulan formula **Γ** disebut **konsisten** jika tidak mungkin derive kontradiksi dari Γ.

**Formal**:
```
Γ is consistent ⟺ Γ ⊬ ⊥
```

> Γ **inkonsisten** jika bisa derive kontradiksi.

**Formal**:
```
Γ is inconsistent ⟺ Γ ⊢ ⊥
```

### Contoh 8.3: Checking Consistency

**Example 1**: `Γ₁ = {P, P → Q, Q}`

**Check**:
```
From P and P→Q, we derive Q (modus ponens).
This matches the third formula Q.
No contradiction.
```

**Conclusion**: Γ₁ is **CONSISTENT** ✓

---

**Example 2**: `Γ₂ = {P, P → Q, ¬Q}`

**Check**:
```
From P and P→Q, we derive Q (modus ponens).
But we also have ¬Q.
So we have Q ∧ ¬Q.
CONTRADICTION!
```

**Conclusion**: Γ₂ is **INCONSISTENT** ✗

---

### Teorema: Konsistensi dan Satisfiability

**Theorem**: Γ is consistent **if and only if** Γ is satisfiable.

**Proof idea**:
- (→) If Γ consistent, then no contradiction, so exists assignment making all formulas true
- (←) If Γ satisfiable, then there's a model, so no contradiction can be derived

---

## 8.5 Model dan Countermodel

### Model

> **Model** untuk formula Φ adalah assignment yang membuat Φ **true**.

**Notation**: M ⊨ Φ (M satisfies Φ)

### Countermodel

> **Countermodel** untuk formula Φ adalah assignment yang membuat Φ **false**.

**Notation**: M ⊭ Φ (M does not satisfy Φ)

### Contoh 8.4: Finding Models

**Formula**: `Φ = (P → Q) ∧ P`

**Find a model**:
```
Try M₁ = {P: true, Q: true}
  P → Q = true → true = true ✓
  P = true ✓
  Φ = true ∧ true = true ✓
  
M₁ is a MODEL! ✓
```

**Find a countermodel**:
```
Try M₂ = {P: true, Q: false}
  P → Q = true → false = false ✗
  P = true ✓
  Φ = false ∧ true = false ✗
  
M₂ is a COUNTERMODEL! ✓
```

---

## 8.6 Aplikasi dalam Ilmu Komputer

### 1. Program Verification - Proving Correctness

**Goal**: Prove program satisfies specification

**Approach**: Assume program is **incorrect**, derive contradiction.

**Example**:
```python
def absolute_value(x):
    if x >= 0:
        return x
    else:
        return -x

# Specification: ∀x, abs(x) ≥ 0
```

**Proof (by contradiction)**:
```
Assume: ∃x such that abs(x) < 0

Case 1: x ≥ 0
  Then abs(x) = x ≥ 0
  But we assumed abs(x) < 0
  CONTRADICTION!

Case 2: x < 0
  Then abs(x) = -x
  Since x < 0, we have -x > 0
  So abs(x) > 0
  But we assumed abs(x) < 0
  CONTRADICTION!

Therefore, ∀x, abs(x) ≥ 0 ∎
```

---

### 2. Deadlock Detection

**Problem**: Prove system is deadlock-free

**Approach**: Assume deadlock exists, derive contradiction.

**Example**:
```
System with 2 processes P1, P2 and 2 resources R1, R2

Deadlock scenario:
  P1 holds R1, waits for R2
  P2 holds R2, waits for R1

Prove: If processes acquire resources in fixed order, no deadlock

Proof (by contradiction):
  Assume: Deadlock occurs with fixed ordering (say R1 before R2)
  
  Then: Some process holds R2 while waiting for R1
  But: Fixed order requires acquiring R1 before R2
  So: Can't hold R2 without already holding R1
  CONTRADICTION!
  
  Hence: No deadlock with fixed ordering ∎
```

---

### 3. Consistency Checking in Databases

**Problem**: Check if constraints are consistent

**Example**:
```sql
-- Constraints
C1: age >= 18
C2: status = 'student' → age <= 25
C3: age = 30 AND status = 'student'
```

**Check consistency**:
```
From C3: age = 30 and status = 'student'
From C2 with status = 'student': age <= 25
But C3 says age = 30
So: 30 <= 25
CONTRADICTION!

Constraints are INCONSISTENT!
```

**Solution**: Remove C3 or modify constraints.

---

### 4. SAT Solving - Unsatisfiability Check

**Modern SAT solvers** use proof by contradiction!

**Example with Z3**:
```python
from z3 import *

P, Q, R = Bools('P Q R')

# Check if these formulas are consistent
formulas = [
    P,
    Implies(P, Q),
    Not(Q)
]

s = Solver()
for f in formulas:
    s.add(f)

if s.check() == unsat:
    print("INCONSISTENT! (Contradiction)")
else:
    print("Consistent, model:", s.model())
```

**Output**: `INCONSISTENT! (Contradiction)`

**Explanation**: From P and P→Q we get Q, but ¬Q contradicts this.

---

## 8.7 Proof by Contrapositive vs. Contradiction

### Perbedaan

| Aspect | Contrapositive | Contradiction |
|--------|----------------|---------------|
| **Goal** | Prove P → Q | Prove P |
| **Assume** | ¬Q | ¬P |
| **Derive** | ¬P | ⊥ (contradiction) |
| **Conclude** | P → Q ≡ ¬Q → ¬P | ¬¬P ≡ P |
| **Use case** | Implications | General statements |

### Contoh Perbandingan

**Statement**: If n² is even, then n is even.

**Method 1: Contrapositive**
```
Prove: n² even → n even
Equivalent: n odd → n² odd

Assume: n is odd
Then: n = 2k+1 for some k
So: n² = (2k+1)² = 4k²+4k+1 = 2(2k²+2k)+1
Therefore: n² is odd ∎
```

**Method 2: Contradiction**
```
Assume (for contradiction): n² is even AND n is odd

Since n is odd: n = 2k+1
So: n² = (2k+1)² = 4k²+4k+1 = odd

But we assumed n² is even!
CONTRADICTION!

Therefore: If n² is even, then n is even ∎
```

**Keduanya valid!** Pilih yang lebih natural untuk masalah tertentu.

---

## 8.8 Latihan dan Soal

### Latihan 1: Simple Proof by Contradiction

**Problem**: Prove that there is no largest integer.

<details>
<summary>Lihat Solusi</summary>

**Proof**:
```
Assume (for contradiction): There exists a largest integer N.

Consider: M = N + 1

Since N is an integer, N+1 is also an integer.
And clearly M > N.

So M is an integer larger than N.
But we assumed N is the LARGEST integer!

CONTRADICTION!

Therefore, there is no largest integer. ∎
```
</details>

---

### Latihan 2: Consistency Check

**Problem**: Apakah set formulas berikut konsisten?

`Γ = {P ∨ Q, P → ¬Q, Q → ¬P, P}`

<details>
<summary>Lihat Solusi</summary>

**Solution**:
```
From Γ: P is true (given)

From P → ¬Q with P true: ¬Q is true
So: Q is false

From P ∨ Q with P true: This is satisfied ✓

From Q → ¬P with Q false: true → ¬P is satisfied ✓

Check all formulas:
  P ∨ Q: true ∨ false = true ✓
  P → ¬Q: true → true = true ✓
  Q → ¬P: false → false = true ✓
  P: true ✓

No contradiction found.

Answer: CONSISTENT ✓

Model: M = {P: true, Q: false}
```
</details>

---

### Latihan 3: Program Verification

**Problem**: Prove this function always returns a non-negative result:

```python
def sum_of_squares(x, y):
    return x*x + y*y
```

<details>
<summary>Lihat Solusi</summary>

**Specification**: ∀x,y, sum_of_squares(x,y) ≥ 0

**Proof (by contradiction)**:
```
Assume: ∃x,y such that x² + y² < 0

Since squares are always non-negative:
  x² ≥ 0
  y² ≥ 0

Therefore:
  x² + y² ≥ 0 + 0 = 0

But we assumed x² + y² < 0

CONTRADICTION!

Therefore: ∀x,y, sum_of_squares(x,y) ≥ 0 ∎
```
</details>

---

### Latihan 4: Implementasi Consistency Checker

Implementasikan function untuk check consistency:

```python
def is_consistent(formulas):
    """
    Check if a set of formulas is consistent
    
    Args:
        formulas: List of Z3 formulas
    
    Returns:
        True if consistent, False if inconsistent
    """
    # TODO: Implement
    pass

# Test
from z3 import *
P, Q = Bools('P Q')

# Inconsistent set
f1 = [P, Implies(P, Q), Not(Q)]
print(is_consistent(f1))  # Should be False

# Consistent set
f2 = [P, Implies(P, Q), Q]
print(is_consistent(f2))  # Should be True
```

<details>
<summary>Lihat Solusi</summary>

```python
from z3 import *

def is_consistent(formulas):
    """Check if formulas are consistent"""
    s = Solver()
    
    # Add all formulas
    for f in formulas:
        s.add(f)
    
    # Check satisfiability
    result = s.check()
    
    if result == sat:
        return True
    else:  # unsat
        return False

# Test
P, Q = Bools('P Q')

# Inconsistent set
f1 = [P, Implies(P, Q), Not(Q)]
print("Set 1 consistent?", is_consistent(f1))  # False

# Consistent set
f2 = [P, Implies(P, Q), Q]
print("Set 2 consistent?", is_consistent(f2))  # True

# Get model if consistent
s = Solver()
s.add(f2[0])
s.add(f2[1])
s.add(f2[2])
if s.check() == sat:
    print("Model:", s.model())
```

**Output**:
```
Set 1 consistent? False
Set 2 consistent? True
Model: [Q = True, P = True]
```
</details>

---

## 8.9 Ringkasan

### Key Takeaways

✅ **Proof by Contradiction**: Assume ¬P, derive ⊥, conclude P

✅ **Konsistensi**: Set formula konsisten jika tidak derive kontradiksi

✅ **Model**: Assignment yang satisfy formula

✅ **Countermodel**: Assignment yang membuat formula false

✅ **Aplikasi**: Program verification, deadlock detection, SAT solving

### Formula Penting

| Konsep | Formula | Keterangan |
|--------|---------|------------|
| Contradiction | `P ∧ ¬P ≡ FALSE` | Always false |
| Excluded Middle | `P ∨ ¬P ≡ TRUE` | Always true |
| Non-contradiction | `¬(P ∧ ¬P) ≡ TRUE` | Can't both be true |
| Consistency | `Γ ⊬ ⊥` | No contradiction derivable |

### Kapan Menggunakan?

**Use Proof by Contradiction when**:
- Direct proof sulit
- Negasi lebih mudah di-reason
- Membuktikan "tidak ada" atau "infinitas"
- Checking consistency/satisfiability

**Classic examples**:
- √2 irasional
- Infinitas prima
- Halting problem undecidable

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 8
2. Velleman, D. J. "How to Prove It" - Chapter 3
3. Rosen, K. H. "Discrete Mathematics" - Proof Methods

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Penyederhanaan](../Bagian-I-Logika-Proposisional/BAB-07-Penyederhanaan.md)
- [➡️ BAB Selanjutnya: Tablo Semantik](BAB-09-Tablo-Semantik.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Proof by contradiction - when the indirect path is clearer!*

</div>
