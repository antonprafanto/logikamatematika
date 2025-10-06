# BAB 7: Penyederhanaan Formula Logika

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-06-Ekuivalen-Logis.md) | [➡️ BAB Selanjutnya](../Bagian-II-Metode-Pembuktian/BAB-08-Strategi-Pembalikan.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Menerapkan teknik-teknik penyederhanaan formula logika
- ✅ Menggunakan hukum Absorption, Elimination, dan Simplification
- ✅ Meminimalkan Boolean expressions untuk hardware dan software
- ✅ Menggunakan Karnaugh Maps untuk optimisasi

---

## 7.1 Pendahuluan

### Mengapa Penyederhanaan Penting?

**Penyederhanaan** adalah proses mereduksi formula logika ke bentuk yang lebih sederhana (minimal) **tanpa mengubah semantiknya** (tetap ekuivalen).

**Manfaat**:
1. 🔧 **Hardware**: Reduce number of gates → cheaper, faster circuits
2. 💻 **Software**: Simplify conditions → readable, maintainable code
3. ⚡ **Performance**: Fewer operations → faster execution
4. 📊 **Database**: Simpler queries → better optimization

###

 Contoh Sederhana

**Problem**: Simplify `(x > 5 ∧ y < 10) ∨ (x > 5 ∧ y ≥ 10)`

**Solution**:
```
(x > 5 ∧ y < 10) ∨ (x > 5 ∧ y ≥ 10)
≡ x > 5 ∧ (y < 10 ∨ y ≥ 10)      [Distributive]
≡ x > 5 ∧ TRUE                     [y pasti < 10 atau ≥ 10]
≡ x > 5                            [Identity]
```

**Benefit**: 
- **Before**: 5 operations (2 AND, 1 OR, 2 comparisons dup)
- **After**: 1 operation (1 comparison)
- **Reduction**: 80%! 🎉

---

## 7.2 Teknik-Teknik Penyederhanaan

### Teknik 1: Absorption (Penyerapan)

> **Absorption**: Menghilangkan term yang "diserap" oleh term lain.

**Hukum**:
```
P ∨ (P ∧ Q) ≡ P
P ∧ (P ∨ Q) ≡ P
```

**Intuisi**: 
- Jika `P` true, maka `P ∧ Q` irrelevant
- Jika `P` false, maka `P ∨ (P ∧ Q)` tetap false

#### Contoh 7.1: Absorption Sederhana

**Simplify**: `P ∨ (P ∧ Q)`

**Solution**:
```
P ∨ (P ∧ Q)
≡ P            [Absorption]
```

**Pembuktian (Truth Table)**:
```
P | Q | P∧Q | P∨(P∧Q)
--|---|-----|--------
T | T |  T  |   T     ← Same as P
T | F |  F  |   T     ← Same as P
F | T |  F  |   F     ← Same as P
F | F |  F  |   F     ← Same as P
```

✓ **TERBUKTI**

#### Contoh 7.2: Absorption Kompleks

**Simplify**: `(A ∨ B) ∧ (A ∨ B ∨ C)`

**Solution**:
```
(A ∨ B) ∧ (A ∨ B ∨ C)
≡ (A ∨ B) ∧ ((A ∨ B) ∨ C)     [Associative]
≡ A ∨ B                        [Absorption: X ∧ (X ∨ Y) ≡ X]
```

---

### Teknik 2: Elimination (Penghapusan Redundansi)

> **Elimination**: Menghapus term yang duplikat atau redundant.

**Hukum**:
```
P ∨ P ≡ P          [Idempotent]
P ∧ P ≡ P          [Idempotent]
P ∨ ¬P ≡ TRUE      [Excluded Middle]
P ∧ ¬P ≡ FALSE     [Contradiction]
```

#### Contoh 7.3: Idempotent

**Simplify**: `(A ∨ B) ∨ A`

**Solution**:
```
(A ∨ B) ∨ A
≡ A ∨ B ∨ A        [Associative]
≡ A ∨ A ∨ B        [Commutative]
≡ A ∨ B            [Idempotent]
```

#### Contoh 7.4: Contradiction Elimination

**Simplify**: `(P ∧ Q) ∨ (P ∧ ¬Q)`

**Solution**:
```
(P ∧ Q) ∨ (P ∧ ¬Q)
≡ P ∧ (Q ∨ ¬Q)      [Distributive]
≡ P ∧ TRUE          [Excluded Middle]
≡ P                 [Identity]
```

---

### Teknik 3: Algebraic Manipulation

Menggunakan hukum-hukum logika (De Morgan, Distributive, dll) untuk transform.

#### Contoh 7.5: De Morgan Application

**Simplify**: `¬(A ∨ B) ∨ (A ∧ B)`

**Solution**:
```
¬(A ∨ B) ∨ (A ∧ B)
≡ (¬A ∧ ¬B) ∨ (A ∧ B)         [De Morgan]
≡ (¬A ∧ ¬B) ∨ (A ∧ B)         [This is A ⊕ B negated]
```

**Alternatif**: Check dengan truth table untuk verify.

---

## 7.3 Karnaugh Maps (K-Maps)

### Apa itu Karnaugh Map?

> **Karnaugh Map** adalah metode grafis untuk penyederhanaan Boolean expressions, terutama untuk 2-4 variabel.

**Benefit**:
- Visual and intuitive
- Systematic approach
- Finds minimal sum-of-products (SOP) atau product-of-sums (POS)

### K-Map untuk 2 Variabel

**Template**:
```
      B
    0   1
A 0 [0] [1]
  1 [2] [3]
```

**Cell numbering**: berdasarkan A dan B values.

#### Contoh 7.6: K-Map 2 Variabel

**Problem**: Simplify `F(A, B) = ∑(1, 3)` (minterms 1 dan 3)

**Truth Table**:
```
A | B | F
--|---|---
0 | 0 | 0
0 | 1 | 1  ← minterm 1
1 | 0 | 0
1 | 1 | 1  ← minterm 3
```

**K-Map**:
```
      B
    0   1
A 0 [0] [1]  ← B column has 1s
  1 [0] [1]
```

**Grouping**: Group 2 cells dengan 1 secara vertical → kolom B = 1

**Result**: `F = B` ✓

---

### K-Map untuk 3 Variabel

**Template**:
```
        BC
      00  01  11  10
A  0  [0] [1] [3] [2]
   1  [4] [5] [7] [6]
```

**Note**: Gray code ordering (00, 01, 11, 10) untuk adjacent cells differ by 1 bit only.

#### Contoh 7.7: K-Map 3 Variabel

**Problem**: Simplify `F(A, B, C) = ∑(0, 2, 5, 7)`

**K-Map**:
```
        BC
      00  01  11  10
A  0  [1] [0] [0] [1]  ← Row 0: cells 0, 2
   1  [0] [1] [1] [0]  ← Row 1: cells 5, 7
```

**Grouping**:
1. Group (0, 2): A=0, C=0 → `¬A ∧ ¬C`
2. Group (5, 7): A=1, C=1 → `A ∧ C`

**Result**: `F = (¬A ∧ ¬C) ∨ (A ∧ C)` ✓

---

### K-Map untuk 4 Variabel

**Template**:
```
          CD
        00  01  11  10
AB  00  [0] [1] [3] [2]
    01  [4] [5] [7] [6]
    11  [12][13][15][14]
    10  [8] [9] [11][10]
```

#### Contoh 7.8: K-Map 4 Variabel

**Problem**: Simplify `F(A,B,C,D) = ∑(0, 1, 2, 5, 8, 9, 10)`

**K-Map**:
```
          CD
        00  01  11  10
AB  00  [1] [1] [0] [1]  ← Group: row 00
    01  [0] [1] [0] [0]
    11  [0] [0] [0] [0]
    10  [1] [1] [0] [1]  ← Group: row 10
```

**Grouping**:
1. Row AB=00 (cells 0,1,2): `¬A ∧ ¬B ∧ ¬D` (3 cells) → Actually need to check
2. Row AB=10 (cells 8,9,10): `A ∧ ¬B ∧ ¬D`
3. Column CD=01 (cells 1,5,9): `¬C ∧ D`

**Better grouping** (find larger groups):
- Group (0, 1, 8, 9): 4 cells, CD=00,01, D varies → B=0, D=varies... Actually `¬B ∧ ¬D`
- Group (0, 2, 8, 10): 4 cells → `¬B ∧ ¬C`
- Cell 5 alone: `¬A ∧ B ∧ ¬C ∧ D`

**Optimized**: `F = ¬B ∧ ¬D ∨ ¬A ∧ B ∧ ¬C ∧ D` (or other minimal forms)

---

## 7.4 Aplikasi dalam Ilmu Komputer

### 1. Digital Circuit Design

**Problem**: Design circuit untuk `F = A ∧ B ∧ C ∨ A ∧ B ∧ ¬C ∨ A ∧ ¬B ∧ C`

**Without Simplification**:
- Gates: 9 AND, 3 OR, 1 NOT
- Cost: High

**With Simplification**:
```
F = A ∧ B ∧ C ∨ A ∧ B ∧ ¬C ∨ A ∧ ¬B ∧ C
  = A ∧ B ∧ (C ∨ ¬C) ∨ A ∧ ¬B ∧ C     [Distributive on first 2 terms]
  = A ∧ B ∧ TRUE ∨ A ∧ ¬B ∧ C         [Excluded middle]
  = A ∧ B ∨ A ∧ ¬B ∧ C                [Identity]
  = A ∧ (B ∨ ¬B ∧ C)                  [Distributive]
  = A ∧ (B ∨ C)                        [Absorption: B ∨ ¬B∧C = B∨C]
```

**Simplified Circuit**:
- Gates: 1 AND, 1 OR
- Cost: Much lower! 🎉

---

### 2. Compiler Optimization

**Code**:
```python
if (x > 10 and y < 5) or (x > 10 and y >= 5):
    do_something()
```

**Simplified**:
```python
if x > 10:
    do_something()
```

**Compiler** automatically does this with SSA (Static Single Assignment) and constant propagation.

---

### 3. Database Query Optimization

**Query**:
```sql
SELECT * FROM orders
WHERE (customer_id = 123 AND status = 'pending')
   OR (customer_id = 123 AND status = 'shipped');
```

**Optimizer** rewrites to:
```sql
SELECT * FROM orders
WHERE customer_id = 123 
  AND (status = 'pending' OR status = 'shipped');
```

**Benefit**: 
- Single index lookup on `customer_id`
- Filter on status in memory (cheaper)

---

### 4. SAT Solver Preprocessing

**SAT solvers** simplify CNF before solving:

**Original CNF**:
```
(A ∨ B) ∧ (A ∨ ¬B) ∧ (¬A ∨ C)
```

**Simplified**:
```
(A ∨ B) ∧ (A ∨ ¬B) ∧ (¬A ∨ C)
= A ∧ (¬A ∨ C)              [First two clauses simplify to A]
= (A ∧ ¬A) ∨ (A ∧ C)        [Distributive]
= FALSE ∨ (A ∧ C)           [Contradiction]
= A ∧ C                     [Identity]
```

**Result**: Formula reduced from 3 clauses to 2 literals! Much faster to solve.

---

## 7.5 Algoritma Penyederhanaan

### Algoritma 1: Repeated Application of Laws

**Pseudocode**:
```
function simplify(formula):
    repeat:
        old_formula = formula
        
        # Apply each law
        formula = apply_absorption(formula)
        formula = apply_idempotent(formula)
        formula = apply_distributive(formula)
        formula = apply_demorgan(formula)
        # ... other laws
        
    until formula == old_formula
    
    return formula
```

**Pro**: Systematic  
**Con**: May not find global minimum

---

### Algoritma 2: Quine-McCluskey (for SOP)

**Steps**:
1. List all minterms
2. Group by number of 1s
3. Combine pairs differing by 1 bit
4. Repeat until no more combines
5. Find prime implicants
6. Select essential prime implicants
7. Cover remaining with minimal set

**Pro**: Guaranteed minimal SOP  
**Con**: Exponential complexity for many variables

---

### Algoritma 3: Espresso (Heuristic)

Modern tool for multi-level logic minimization.

**Used in**: Hardware synthesis tools (Synopsys, Cadence)

---

## 7.6 Latihan dan Soal

### Latihan 1: Absorption

Simplify menggunakan absorption:

**a)** `(A ∧ B) ∨ A`

<details>
<summary>Lihat Solusi</summary>

```
(A ∧ B) ∨ A
= A ∨ (A ∧ B)           [Commutative]
= A                      [Absorption: A ∨ (A ∧ B) ≡ A]
```
</details>

---

**b)** `(P ∨ Q ∨ R) ∧ (P ∨ Q)`

<details>
<summary>Lihat Solusi</summary>

```
(P ∨ Q ∨ R) ∧ (P ∨ Q)
= (P ∨ Q) ∧ (P ∨ Q ∨ R)     [Commutative]
= P ∨ Q                      [Absorption: X ∧ (X ∨ Y) ≡ X]
```
</details>

---

### Latihan 2: Algebraic Simplification

Simplify:

**a)** `¬(A ∧ B) ∧ (A ∨ B)`

<details>
<summary>Lihat Solusi</summary>

```
¬(A ∧ B) ∧ (A ∨ B)
= (¬A ∨ ¬B) ∧ (A ∨ B)        [De Morgan]
= (¬A ∧ A) ∨ (¬A ∧ B) ∨ (¬B ∧ A) ∨ (¬B ∧ B)  [Distributive]
= FALSE ∨ (¬A ∧ B) ∨ (A ∧ ¬B) ∨ FALSE       [Contradiction]
= (¬A ∧ B) ∨ (A ∧ ¬B)        [Identity]
= A ⊕ B                       [Definition of XOR]
```
</details>

---

**b)** `(A ∧ B) ∨ (A ∧ ¬B) ∨ (¬A ∧ B)`

<details>
<summary>Lihat Solusi</summary>

```
(A ∧ B) ∨ (A ∧ ¬B) ∨ (¬A ∧ B)
= A ∧ (B ∨ ¬B) ∨ (¬A ∧ B)    [Distributive on first two]
= A ∧ TRUE ∨ (¬A ∧ B)        [Excluded middle]
= A ∨ (¬A ∧ B)                [Identity]
= (A ∨ ¬A) ∧ (A ∨ B)         [Distributive]
= TRUE ∧ (A ∨ B)              [Excluded middle]
= A ∨ B                       [Identity]
```
</details>

---

### Latihan 3: Karnaugh Map

Use K-Map to simplify:

**a)** `F(A,B,C) = ∑(0, 1, 2, 3, 7)`

<details>
<summary>Lihat Solusi</summary>

**K-Map**:
```
        BC
      00  01  11  10
A  0  [1] [1] [0] [1]
   1  [0] [0] [1] [0]
```

**Grouping**:
1. Top row (0,1,2,3): A=0 → `¬A`... Wait, only 0,1,2 are consecutive
2. Group (0,1,2): A=0, C varies, need to check...

Actually, minterms are: 0(000), 1(001), 2(010), 3(011), 7(111)

Correct K-Map:
```
        BC
      00  01  11  10
A  0  [1] [1] [1] [1]  ← Row A=0, all 1s!
   1  [0] [0] [1] [0]  ← Only cell 7 (BC=11)
```

**Grouping**:
1. Entire row A=0: `¬A`
2. Cell 7: `A ∧ B ∧ C`

**Result**: `F = ¬A ∨ (A ∧ B ∧ C)` ✓
</details>

---

### Latihan 4: Implementasi

Implementasikan fungsi simplify sederhana:

```python
def simplify_absorption(formula):
    """
    Simplify formula using absorption law
    Input: string representation
    Output: simplified string
    """
    # TODO: Implement
    pass

# Test
print(simplify_absorption("(A and B) or A"))  # Should return "A"
```

<details>
<summary>Lihat Solusi</summary>

```python
def simplify_absorption(formula):
    # Simple pattern matching approach
    # This is simplified - real implementation needs AST parsing
    
    import re
    
    # Pattern: (X and Y) or X → X
    pattern1 = r'\((\w+) and \w+\) or \1'
    formula = re.sub(pattern1, r'\1', formula)
    
    # Pattern: X or (X and Y) → X
    pattern2 = r'(\w+) or \(\1 and \w+\)'
    formula = re.sub(pattern2, r'\1', formula)
    
    return formula

# Test
print(simplify_absorption("(A and B) or A"))  # "A"
print(simplify_absorption("A or (A and B)"))  # "A"
```

**Note**: Real implementation needs proper parsing (AST)!
</details>

---

## 7.7 Ringkasan

### Key Takeaways

✅ **Absorption**: `P ∨ (P ∧ Q) ≡ P` dan `P ∧ (P ∨ Q) ≡ P`

✅ **Elimination**: Hapus redundant terms (idempotent, contradiction)

✅ **Algebraic Manipulation**: Gunakan hukum-hukum logika untuk transform

✅ **Karnaugh Maps**: Visual method untuk minimisasi (2-4 variables)

✅ **Applications**: Circuit design, compiler optimization, database queries

### Teknik Penting

| Teknik | Formula | Penggunaan |
|--------|---------|------------|
| Absorption | `P∨(P∧Q) ≡ P` | Eliminate redundant terms |
| Distributive | `P∧(Q∨R) ≡ (P∧Q)∨(P∧R)` | Factor common terms |
| K-Map | Visual grouping | Systematic minimization |
| Quine-McCluskey | Algorithmic | Guaranteed minimal SOP |

### Kapan Menggunakan?

- **Absorption**: Ketika ada nested terms
- **K-Map**: 2-4 variables, need visual approach
- **Algebraic**: Complex formulas, step-by-step
- **Quine-McCluskey**: Programmatic, guaranteed minimal

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 7
2. Mano, M. M. "Digital Design" - Chapter 3: Gate-Level Minimization
3. Roth, C. H. "Fundamentals of Logic Design" - Karnaugh Maps

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Ekuivalen Logis](BAB-06-Ekuivalen-Logis.md)
- [➡️ BAB Selanjutnya: Strategi Pembalikan](../Bagian-II-Metode-Pembuktian/BAB-08-Strategi-Pembalikan.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Simplification is the key to efficient design!*

</div>
