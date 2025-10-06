# BAB 10: Bentuk Normal (Normal Forms)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-09-Tablo-Semantik.md) | [➡️ BAB Selanjutnya](BAB-11-Resolusi.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami CNF (Conjunctive Normal Form) dan DNF (Disjunctive Normal Form)
- ✅ Mengkonversi formula ke CNF dan DNF
- ✅ Memahami clausal form untuk resolution
- ✅ Menggunakan Tseitin transformation untuk CNF conversion
- ✅ Menerapkan normal forms dalam SAT solving

---

## 10.1 Pendahuluan

### Apa itu Normal Forms?

> **Normal Form** adalah bentuk standar (canonical form) untuk merepresentasikan formula logika.

**Mengapa penting?**
- 🎯 **Standardisasi**: Easier to compare formulas
- 🤖 **Automation**: Required input format untuk SAT solvers
- ✅ **Algorithms**: Many proof methods require normal forms
- 📊 **Analysis**: Easier to reason about

### Dua Bentuk Normal Utama

| Form | Structure | Use Case |
|------|-----------|----------|
| **CNF** | AND of ORs | SAT solvers, Resolution |
| **DNF** | OR of ANDs | Database queries, Case analysis |

---

## 10.2 Literal dan Clause

### Definisi Dasar

**Literal**: 
> Variable atau negasinya
- **Positive literal**: P
- **Negative literal**: ¬P

**Clause**:
> Disjunction (OR) dari literals

**Examples**:
```
P ∨ Q ∨ ¬R        ← clause dengan 3 literals
¬P ∨ Q            ← clause dengan 2 literals
P                 ← unit clause (1 literal)
```

### Jenis-Jenis Clause

| Type | Definition | Example |
|------|------------|---------|
| **Unit clause** | 1 literal | `P` |
| **Binary clause** | 2 literals | `P ∨ Q` |
| **Horn clause** | ≤ 1 positive literal | `¬P ∨ ¬Q ∨ R` |
| **Empty clause** | No literals | `⊥` (contradiction) |

---

## 10.3 CNF (Conjunctive Normal Form)

### Definisi

> **CNF** adalah formula berbentuk **AND dari ORs** (conjunction of clauses).

**Format**:
```
(L₁₁ ∨ L₁₂ ∨ ... ∨ L₁ₙ) ∧
(L₂₁ ∨ L₂₂ ∨ ... ∨ L₂ₘ) ∧
...
(Lₖ₁ ∨ Lₖ₂ ∨ ... ∨ Lₖₚ)
```

Di mana setiap Lᵢⱼ adalah literal.

### Contoh CNF

**Example 1**: `(P ∨ Q) ∧ (¬P ∨ R) ∧ (Q ∨ ¬R)`
- ✅ CNF
- 3 clauses
- Each clause is disjunction of literals

**Example 2**: `P ∧ (Q ∨ ¬R)`
- ✅ CNF
- 2 clauses: `P` and `(Q ∨ ¬R)`

**Example 3**: `(P ∧ Q) ∨ R`
- ❌ NOT CNF (top level is OR, not AND)

---

### Mengapa CNF Penting?

**CNF adalah input standard untuk**:
1. **SAT Solvers** (DPLL, CDCL)
2. **Resolution theorem proving**
3. **Model checking tools**
4. **SMT solvers**

**DIMACS Format** (standard SAT solver input):
```
c Example CNF in DIMACS format
c Variables: P=1, Q=2, R=3
p cnf 3 3
1 2 0      (P ∨ Q)
-1 3 0     (¬P ∨ R)
2 -3 0     (Q ∨ ¬R)
```

---

## 10.4 DNF (Disjunctive Normal Form)

### Definisi

> **DNF** adalah formula berbentuk **OR dari ANDs** (disjunction of conjunctions).

**Format**:
```
(L₁₁ ∧ L₁₂ ∧ ... ∧ L₁ₙ) ∨
(L₂₁ ∧ L₂₂ ∧ ... ∧ L₂ₘ) ∨
...
(Lₖ₁ ∧ Lₖ₂ ∧ ... ∧ Lₖₚ)
```

### Contoh DNF

**Example 1**: `(P ∧ Q) ∨ (¬P ∧ R) ∨ (Q ∧ ¬R)`
- ✅ DNF
- 3 terms
- Each term is conjunction of literals

**Example 2**: `P ∨ (Q ∧ ¬R)`
- ✅ DNF
- 2 terms: `P` and `(Q ∧ ¬R)`

**Example 3**: `(P ∨ Q) ∧ R`
- ❌ NOT DNF (top level is AND, not OR)

---

### Mengapa DNF Berguna?

**DNF useful untuk**:
1. **Database queries** (disjunctive conditions)
2. **Case analysis** (enumerate models)
3. **Boolean function representation**
4. **Circuit design** (sum-of-products)

**Example - Database Query**:
```sql
SELECT * FROM users 
WHERE (age > 18 AND status = 'active')
   OR (vip = true AND age > 13);
```

This is DNF form! ✓

---

## 10.5 Konversi ke CNF

### Metode 1: Truth Table Method

**Steps**:
1. Build truth table
2. For each row where formula is **FALSE**, create clause
3. Clause contains negation of assignment
4. Conjoin all clauses

**Example**: Convert `P → Q` to CNF

**Truth Table**:
```
P | Q | P→Q | FALSE rows
--|---|-----|------------
T | T |  T  |
T | F |  F  | ← Row 2
F | T |  T  |
F | F |  T  |
```

**Clause from row 2** (P=T, Q=F, result=F):
- Negate assignment: ¬P ∨ Q
- (If P true and Q false, then P→Q false, so we need ¬P ∨ Q)

**CNF**: `¬P ∨ Q` ✓

**Verify**: `P → Q ≡ ¬P ∨ Q` ✓

---

### Metode 2: Algebraic Method

**Steps**:
1. Eliminate implications: `P → Q` becomes `¬P ∨ Q`
2. Move negations inward (De Morgan)
3. Distribute ∨ over ∧

**Example 10.1**: Convert `¬(P → Q)` to CNF

```
¬(P → Q)
≡ ¬(¬P ∨ Q)              [Eliminate →]
≡ ¬¬P ∧ ¬Q               [De Morgan]
≡ P ∧ ¬Q                 [Double negation]
```

**Result**: `P ∧ ¬Q` (already in CNF) ✓

---

**Example 10.2**: Convert `(P ∨ Q) → R` to CNF

```
(P ∨ Q) → R
≡ ¬(P ∨ Q) ∨ R           [Eliminate →]
≡ (¬P ∧ ¬Q) ∨ R          [De Morgan]
≡ (¬P ∨ R) ∧ (¬Q ∨ R)   [Distributive]
```

**Result**: `(¬P ∨ R) ∧ (¬Q ∨ R)` ✓

---

**Example 10.3**: Convert `(P ∧ Q) ∨ (R ∧ S)` to CNF

```
(P ∧ Q) ∨ (R ∧ S)
≡ (P ∨ (R ∧ S)) ∧ (Q ∨ (R ∧ S))     [Distributive: OR over AND]
≡ (P ∨ R) ∧ (P ∨ S) ∧ (Q ∨ R) ∧ (Q ∨ S)  [Distributive again]
```

**Result**: `(P ∨ R) ∧ (P ∨ S) ∧ (Q ∨ R) ∧ (Q ∨ S)` ✓

**Note**: Formula exploded from 2 clauses to 4! This is exponential in worst case.

---

### Metode 3: Tseitin Transformation

**Problem**: Algebraic method can cause **exponential blowup**.

**Solution**: **Tseitin transformation** - introduce auxiliary variables.

**Idea**: 
- For each subformula, introduce new variable
- Add equivalences as constraints
- Result: Linear size CNF!

**Example 10.4**: Tseitin for `(P ∧ Q) ∨ (R ∧ S)`

**Step 1**: Introduce auxiliary variables
```
Let:
  X₁ ≡ P ∧ Q
  X₂ ≡ R ∧ S
  X₃ ≡ X₁ ∨ X₂
```

**Step 2**: Convert equivalences to CNF
```
X₁ ↔ (P ∧ Q):
  (X₁ → (P ∧ Q)) ∧ ((P ∧ Q) → X₁)
  ≡ (¬X₁ ∨ (P ∧ Q)) ∧ (¬(P ∧ Q) ∨ X₁)
  ≡ (¬X₁ ∨ P) ∧ (¬X₁ ∨ Q) ∧ (¬P ∨ ¬Q ∨ X₁)

X₂ ↔ (R ∧ S):
  (¬X₂ ∨ R) ∧ (¬X₂ ∨ S) ∧ (¬R ∨ ¬S ∨ X₂)

X₃ ↔ (X₁ ∨ X₂):
  (¬X₃ ∨ X₁ ∨ X₂) ∧ (¬X₁ ∨ X₃) ∧ (¬X₂ ∨ X₃)
```

**Step 3**: Add X₃ (top-level variable)
```
X₃
```

**Final CNF** (7 clauses vs 4 with algebraic method, but linear!):
```
X₃ ∧
(¬X₁ ∨ P) ∧ (¬X₁ ∨ Q) ∧ (¬P ∨ ¬Q ∨ X₁) ∧
(¬X₂ ∨ R) ∧ (¬X₂ ∨ S) ∧ (¬R ∨ ¬S ∨ X₂) ∧
(¬X₃ ∨ X₁ ∨ X₂) ∧ (¬X₁ ∨ X₃) ∧ (¬X₂ ∨ X₃)
```

**Benefit**: Size O(n) instead of O(2ⁿ)! 🎉

---

## 10.6 Konversi ke DNF

### Metode: Truth Table

**Steps**:
1. Build truth table
2. For each row where formula is **TRUE**, create term
3. Term is conjunction of assignment
4. Disjoin all terms

**Example**: Convert `P → Q` to DNF

**Truth Table**:
```
P | Q | P→Q | TRUE rows
--|---|-----|------------
T | T |  T  | ← Row 1
T | F |  F  |
F | T |  T  | ← Row 3
F | F |  T  | ← Row 4
```

**Terms**:
- Row 1 (P=T, Q=T): `P ∧ Q`
- Row 3 (P=F, Q=T): `¬P ∧ Q`
- Row 4 (P=F, Q=F): `¬P ∧ ¬Q`

**DNF**: `(P ∧ Q) ∨ (¬P ∧ Q) ∨ (¬P ∧ ¬Q)`

**Simplify**:
```
(P ∧ Q) ∨ (¬P ∧ Q) ∨ (¬P ∧ ¬Q)
≡ (P ∧ Q) ∨ ¬P ∧ (Q ∨ ¬Q)    [Factor ¬P]
≡ (P ∧ Q) ∨ ¬P                 [Q ∨ ¬Q = TRUE]
≡ Q ∨ ¬P                       [Absorption-like]
≡ ¬P ∨ Q                       [Commutative]
```

**Final DNF**: `¬P ∨ Q` (which is also CNF!) ✓

---

## 10.7 Clausal Form

### Definition

> **Clausal form** adalah representasi CNF sebagai **set of clauses** (tanpa ∧).

**CNF**: `(P ∨ Q) ∧ (¬P ∨ R) ∧ (Q ∨ ¬R)`

**Clausal form**: `{{P, Q}, {¬P, R}, {Q, ¬R}}`

### Mengapa Set of Sets?

**Benefits**:
1. **No redundancy**: Set semantics eliminates duplicates
2. **Order-independent**: Easy to manipulate
3. **Resolution-friendly**: Direct input for resolution algorithm

**Example**:
```
CNF: (P ∨ P ∨ Q) ∧ (Q ∨ P)
Clausal: {{P, Q}, {Q, P}}
Simplified: {{P, Q}}     (set removes duplicates and order)
```

---

## 10.8 Aplikasi Normal Forms

### 1. SAT Solving

**Modern SAT solvers** require CNF input!

**Example with PySAT**:
```python
from pysat.solvers import Glucose3

# CNF: (P ∨ Q) ∧ (¬P ∨ R) ∧ (Q ∨ ¬R)
# Variables: P=1, Q=2, R=3

cnf = [
    [1, 2],      # P ∨ Q
    [-1, 3],     # ¬P ∨ R
    [2, -3]      # Q ∨ ¬R
]

solver = Glucose3()
for clause in cnf:
    solver.add_clause(clause)

if solver.solve():
    print("SAT!")
    print("Model:", solver.get_model())
else:
    print("UNSAT!")
```

---

### 2. Resolution Theorem Proving

**Resolution** requires clausal form!

**Example**:
```
Prove: {P ∨ Q, ¬P ∨ R} ⊢ Q ∨ R

Clausal form:
1. {P, Q}
2. {¬P, R}

Resolve on P:
3. {Q, R}    ← Derived! ✓
```

---

### 3. Database Query Optimization

**DNF useful** for query optimization.

**Query in DNF**:
```sql
SELECT * FROM products
WHERE (category = 'electronics' AND price < 100)
   OR (category = 'books' AND discount > 0.2)
   OR (featured = true);
```

**Optimizer** can:
- Use index on `category` for first two terms
- Use index on `featured` for third term
- Union results

---

### 4. Circuit Design

**Sum-of-Products** (DNF) for circuit implementation.

**Example**: `F = (A ∧ B) ∨ (C ∧ D)`

**Circuit**:
```
A ──┐
    AND₁ ──┐
B ──┘      │
           OR ── F
C ──┐      │
    AND₂ ──┘
D ──┘
```

**CNF would need more complex circuit** (OR gates feeding AND gates).

---

## 10.9 Kompleksitas Konversi

### CNF Conversion

| Method | Size | Time |
|--------|------|------|
| Truth table | O(2ⁿ) | O(2ⁿ) |
| Algebraic | O(2ⁿ) worst | O(?) |
| Tseitin | O(n) | O(n) |

**Recommendation**: Use **Tseitin** for large formulas!

### DNF Conversion

| Method | Size | Time |
|--------|------|------|
| Truth table | O(2ⁿ) | O(2ⁿ) |

**Note**: No linear method for DNF (unlike CNF with Tseitin).

**Reason**: DNF conversion is harder than CNF!

---

## 10.10 Implementasi

### Python Implementation

```python
class Formula:
    pass

class Literal(Formula):
    def __init__(self, var, negated=False):
        self.var = var
        self.negated = negated
    
    def __str__(self):
        return f"¬{self.var}" if self.negated else str(self.var)

class Clause:
    def __init__(self, literals):
        self.literals = set(literals)  # Set of Literal objects
    
    def __str__(self):
        return " ∨ ".join(str(l) for l in self.literals)

class CNF:
    def __init__(self, clauses):
        self.clauses = clauses  # List of Clause objects
    
    def __str__(self):
        return " ∧ ".join(f"({c})" for c in self.clauses)
    
    def to_dimacs(self):
        """Convert to DIMACS format"""
        # Map variables to integers
        var_map = {}
        next_id = 1
        
        for clause in self.clauses:
            for lit in clause.literals:
                if lit.var not in var_map:
                    var_map[lit.var] = next_id
                    next_id += 1
        
        # Build DIMACS
        lines = []
        lines.append(f"p cnf {len(var_map)} {len(self.clauses)}")
        
        for clause in self.clauses:
            dimacs_clause = []
            for lit in clause.literals:
                var_id = var_map[lit.var]
                if lit.negated:
                    dimacs_clause.append(f"-{var_id}")
                else:
                    dimacs_clause.append(str(var_id))
            lines.append(" ".join(dimacs_clause) + " 0")
        
        return "\n".join(lines)

# Example usage
P = Literal('P')
Q = Literal('Q')
R = Literal('R')

cnf = CNF([
    Clause([P, Q]),
    Clause([Literal('P', negated=True), R]),
    Clause([Q, Literal('R', negated=True)])
])

print("CNF:", cnf)
print("\nDIMACS:")
print(cnf.to_dimacs())
```

**Output**:
```
CNF: (P ∨ Q) ∧ (¬P ∨ R) ∧ (Q ∨ ¬R)

DIMACS:
p cnf 3 3
1 2 0
-1 3 0
2 -3 0
```

---

## 10.11 Latihan dan Soal

### Latihan 1: Identifikasi Normal Form

Tentukan apakah formula berikut CNF, DNF, both, atau neither:

**a)** `(P ∨ Q) ∧ R`

<details>
<summary>Lihat Solusi</summary>

**Analysis**:
- Top level: ∧ (AND)
- Components: `(P ∨ Q)` (OR of literals), `R` (literal)
- Structure: AND of clauses

**Answer**: **CNF** ✓

Also DNF? No, karena `(P ∨ Q)` bukan conjunction.
</details>

---

**b)** `(P ∧ Q) ∨ (R ∧ S)`

<details>
<summary>Lihat Solusi</summary>

**Analysis**:
- Top level: ∨ (OR)
- Components: `(P ∧ Q)`, `(R ∧ S)` (AND of literals)
- Structure: OR of terms

**Answer**: **DNF** ✓

Also CNF? No, karena top level adalah OR of ANDs.
</details>

---

**c)** `P ∨ Q ∨ R`

<details>
<summary>Lihat Solusi</summary>

**Analysis**:
- Single clause (OR of literals)
- Can be viewed as: CNF with 1 clause, or DNF with 3 terms

**Answer**: **Both CNF and DNF** ✓
</details>

---

### Latihan 2: Konversi ke CNF

Convert ke CNF menggunakan algebraic method:

**a)** `P → (Q → R)`

<details>
<summary>Lihat Solusi</summary>

```
P → (Q → R)
≡ P → (¬Q ∨ R)           [Eliminate inner →]
≡ ¬P ∨ (¬Q ∨ R)          [Eliminate outer →]
≡ ¬P ∨ ¬Q ∨ R            [Associative]
```

**CNF**: `¬P ∨ ¬Q ∨ R` ✓ (single clause)
</details>

---

**b)** `(P ∧ Q) → R`

<details>
<summary>Lihat Solusi</summary>

```
(P ∧ Q) → R
≡ ¬(P ∧ Q) ∨ R           [Eliminate →]
≡ (¬P ∨ ¬Q) ∨ R          [De Morgan]
≡ ¬P ∨ ¬Q ∨ R            [Associative]
```

**CNF**: `¬P ∨ ¬Q ∨ R` ✓
</details>

---

**c)** `¬((P ∨ Q) → (R ∧ S))`

<details>
<summary>Lihat Solusi</summary>

```
¬((P ∨ Q) → (R ∧ S))
≡ ¬(¬(P ∨ Q) ∨ (R ∧ S))      [Eliminate →]
≡ ¬¬(P ∨ Q) ∧ ¬(R ∧ S)       [De Morgan]
≡ (P ∨ Q) ∧ (¬R ∨ ¬S)        [Double negation, De Morgan]
```

**CNF**: `(P ∨ Q) ∧ (¬R ∨ ¬S)` ✓ (already CNF!)
</details>

---

### Latihan 3: Konversi ke DNF

Convert ke DNF menggunakan truth table:

**Problem**: Convert `P ↔ Q` to DNF

<details>
<summary>Lihat Solusi</summary>

**Truth Table**:
```
P | Q | P↔Q | TRUE rows
--|---|-----|----------
T | T |  T  | ← Row 1
T | F |  F  |
F | T |  F  |
F | F |  T  | ← Row 4
```

**Terms from TRUE rows**:
- Row 1: `P ∧ Q`
- Row 4: `¬P ∧ ¬Q`

**DNF**: `(P ∧ Q) ∨ (¬P ∧ ¬Q)` ✓
</details>

---

### Latihan 4: Implementasi

Implementasikan CNF converter:

```python
def to_cnf(formula):
    """
    Convert formula to CNF
    Input: Formula object
    Output: CNF object
    """
    # TODO: Implement
    pass

# Test
formula = Implies(And(P, Q), R)
cnf = to_cnf(formula)
print(cnf)  # Should output: (¬P ∨ ¬Q ∨ R)
```

<details>
<summary>Lihat Solusi (Simplified with Z3)</summary>

```python
from z3 import *

def to_cnf_z3(formula):
    """Convert formula to CNF using Z3"""
    # Z3's Tactic for CNF conversion
    goal = Goal()
    goal.add(formula)
    
    # Apply Tseitin transformation
    tactic = Tactic('tseitin-cnf')
    result = tactic(goal)
    
    return result

# Example
P, Q, R = Bools('P Q R')
formula = Implies(And(P, Q), R)

cnf = to_cnf_z3(formula)
print("CNF:", cnf)

# Alternative: Manual
# (P ∧ Q) → R
# ≡ ¬(P ∧ Q) ∨ R
# ≡ ¬P ∨ ¬Q ∨ R
manual_cnf = Or(Not(P), Not(Q), R)
print("Manual CNF:", manual_cnf)
```
</details>

---

## 10.12 Ringkasan

### Key Takeaways

✅ **CNF**: AND of ORs - `(P ∨ Q) ∧ (¬P ∨ R)`

✅ **DNF**: OR of ANDs - `(P ∧ Q) ∨ (¬P ∧ R)`

✅ **Clausal Form**: Set of clauses - `{{P, Q}, {¬P, R}}`

✅ **Tseitin**: Linear CNF conversion with auxiliary variables

✅ **Applications**: SAT solving, Resolution, Database queries

### Conversion Methods

| Goal | Method | Complexity |
|------|--------|------------|
| **CNF** | Truth table | O(2ⁿ) |
| **CNF** | Algebraic | O(2ⁿ) worst |
| **CNF** | Tseitin | O(n) |
| **DNF** | Truth table | O(2ⁿ) |

### When to Use?

- **CNF**: SAT solving, Resolution, most automated reasoning
- **DNF**: Database queries, Case analysis, Boolean functions
- **Tseitin**: Large formulas that need CNF

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 10
2. Biere, A. et al. "Handbook of Satisfiability" - Chapter 2
3. Harrison, J. "Handbook of Practical Logic and Automated Reasoning" - Chapter 3

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Tablo Semantik](BAB-09-Tablo-Semantik.md)
- [➡️ BAB Selanjutnya: Resolusi](BAB-11-Resolusi.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Normal forms - the standard representation for automated reasoning!*

</div>
