# BAB 9: Tablo Semantik (Semantic Tableaux)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-08-Strategi-Pembalikan.md) | [➡️ BAB Selanjutnya](BAB-10-Bentuk-Normal.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami metode tablo semantik untuk checking validity
- ✅ Menerapkan aturan α (non-branching) dan β (branching)
- ✅ Membangun tableau tree untuk membuktikan teorema
- ✅ Menentukan apakah formula valid, satisfiable, atau unsatisfiable
- ✅ Memahami basis dari SAT solvers modern (DPLL algorithm)

---

## 9.1 Pendahuluan

### Apa itu Semantic Tableaux?

> **Semantic Tableaux** (atau Truth Trees) adalah metode **tree-based** untuk checking:
> - **Validity**: Apakah formula selalu benar?
> - **Satisfiability**: Apakah ada assignment yang membuat formula benar?
> - **Consistency**: Apakah set formulas konsisten?

**Ide dasar**: Cari **countermodel** (assignment yang membuat formula false). Jika tidak ada, maka formula **valid**.

### Keunggulan Metode Tableau

| Keunggulan | Penjelasan |
|------------|------------|
| 🌳 **Visual** | Tree structure mudah dipahami |
| ✅ **Systematic** | Aturan jelas dan mekanis |
| 🤖 **Automatable** | Mudah diimplementasikan |
| 🎯 **Efficient** | Basis untuk modern SAT solvers |
| 📊 **Complete** | Guaranteed to find answer (for propositional logic) |

### Aplikasi

- **Automated theorem proving**
- **SAT solving** (DPLL algorithm)
- **Model checking**
- **Logic programming**
- **Program verification**

---

## 9.2 Konsep Dasar

### Signed Formulas

Dalam tableau, kita bekerja dengan **signed formulas**:

- **T Φ**: Φ is **true**
- **F Φ**: Φ is **false**

**Intuisi**: T dan F adalah "labels" yang menunjukkan truth value yang kita assume.

### Closure (Penutupan)

> **Branch tertutup** (closed) jika mengandung **T Φ dan F Φ** untuk formula Φ yang sama.

**Notasi**: ✗ (mark closed branch)

**Intuisi**: Kontradiksi! Φ tidak bisa true DAN false sekaligus.

### Open Branch

> **Branch terbuka** (open) jika tidak tertutup setelah semua aturan diterapkan.

**Arti**: Branch ini memberikan **model** (countermodel untuk validity check).

---

## 9.3 Aturan Tableau

### Aturan α (Non-Branching)

**Aturan α** untuk formulas yang **konjungtif** (AND-like):

| Formula | Sign | Nama | Ekspansi |
|---------|------|------|----------|
| `Φ ∧ Ψ` | T | T∧ | T Φ<br>T Ψ |
| `Φ ∧ Ψ` | F | F∧ | Branch: F Φ \| F Ψ |
| `Φ ∨ Ψ` | T | T∨ | Branch: T Φ \| T Ψ |
| `Φ ∨ Ψ` | F | F∨ | F Φ<br>F Ψ |
| `Φ → Ψ` | T | T→ | Branch: F Φ \| T Ψ |
| `Φ → Ψ` | F | F→ | T Φ<br>F Ψ |
| `¬Φ` | T | T¬ | F Φ |
| `¬Φ` | F | F¬ | T Φ |

**Mnemonik**: 
- **T∧**: Both must be true → add both
- **F∨**: Both must be false → add both
- **F→**: P→Q false means P true and Q false

---

### Aturan β (Branching)

**Aturan β** untuk formulas yang **disjunktif** (OR-like):

**Format**:
```
    β
   / \
  β₁  β₂
```

**Examples**:
- **T∨**: T(Φ∨Ψ) → branch into TΦ | TΨ
- **F∧**: F(Φ∧Ψ) → branch into FΦ | FΨ
- **T→**: T(Φ→Ψ) → branch into FΦ | TΨ

---

### Tabel Lengkap Aturan

```
┌─────────────┬────────────────────┐
│   Formula   │   Expansion        │
├─────────────┼────────────────────┤
│  T (Φ ∧ Ψ)  │  T Φ               │
│             │  T Ψ               │
├─────────────┼────────────────────┤
│  F (Φ ∧ Ψ)  │  F Φ  |  F Ψ      │
│             │ (branch)           │
├─────────────┼────────────────────┤
│  T (Φ ∨ Ψ)  │  T Φ  |  T Ψ      │
│             │ (branch)           │
├─────────────┼────────────────────┤
│  F (Φ ∨ Ψ)  │  F Φ               │
│             │  F Ψ               │
├─────────────┼────────────────────┤
│  T (Φ → Ψ)  │  F Φ  |  T Ψ      │
│             │ (branch)           │
├─────────────┼────────────────────┤
│  F (Φ → Ψ)  │  T Φ               │
│             │  F Ψ               │
├─────────────┼────────────────────┤
│   T (¬Φ)    │  F Φ               │
├─────────────┼────────────────────┤
│   F (¬Φ)    │  T Φ               │
└─────────────┴────────────────────┘
```

---

## 9.4 Cara Menggunakan Tableau

### Algoritma Umum

```
1. Start with signed formula(s)
2. Apply rules to expand formulas
3. Check for closure after each step
4. If all branches close → VALID (or UNSAT)
5. If some branch stays open → INVALID (or SAT)
6. Extract model from open branch
```

### Contoh 9.1: Checking Validity

**Problem**: Apakah `(P → Q) → ((Q → R) → (P → R))` valid?

**Method**: Coba buktikan **negasi** adalah unsatisfiable.

**Tableau**:
```
F ((P → Q) → ((Q → R) → (P → R)))
│
├─ T (P → Q)                    [dari F→]
├─ F ((Q → R) → (P → R))        [dari F→]
│
├─ T (Q → R)                    [dari F→ pada line 2]
├─ F (P → R)                    [dari F→ pada line 2]
│
├─ T P                          [dari F→ pada line 4]
├─ F R                          [dari F→ pada line 4]
│
├─ Branch from T(P→Q):
│  ├─ F P | T Q
│  │
│  Left branch (F P):
│  ├─ F P (contradiction dengan T P di line 5)
│  └─ ✗ CLOSED
│  
│  Right branch (T Q):
│  ├─ T Q
│  ├─ Branch from T(Q→R):
│  │  ├─ F Q | T R
│  │  │
│  │  Left (F Q):
│  │  ├─ F Q (contradiction dengan T Q)
│  │  └─ ✗ CLOSED
│  │  
│  │  Right (T R):
│  │  ├─ T R (contradiction dengan F R di line 6)
│  │  └─ ✗ CLOSED
```

**Semua branch CLOSED!**

**Kesimpulan**: Negasi unsatisfiable → formula asli **VALID** ✓

---

### Contoh 9.2: Finding Model

**Problem**: Apakah `(P ∨ Q) ∧ ¬P` satisfiable?

**Tableau**:
```
T ((P ∨ Q) ∧ ¬P)
│
├─ T (P ∨ Q)          [dari T∧]
├─ T (¬P)             [dari T∧]
│
├─ F P                [dari T¬]
│
├─ Branch from T(P∨Q):
│  ├─ T P | T Q
│  │
│  Left (T P):
│  ├─ T P (contradiction dengan F P)
│  └─ ✗ CLOSED
│  
│  Right (T Q):
│  ├─ T Q
│  └─ ✅ OPEN!
```

**Branch kanan OPEN!**

**Extract model dari open branch**:
- F P → P = false
- T Q → Q = true

**Model**: `M = {P: false, Q: true}` ✓

**Verify**:
```
(P ∨ Q) ∧ ¬P
= (false ∨ true) ∧ ¬false
= true ∧ true
= true ✓
```

**Kesimpulan**: Formula **SATISFIABLE** dengan model M.

---

### Contoh 9.3: Consistency Check

**Problem**: Apakah `{P → Q, P, ¬Q}` konsisten?

**Tableau**:
```
T (P → Q)
T P
T (¬Q)
│
├─ F Q              [dari T¬]
│
├─ Branch from T(P→Q):
│  ├─ F P | T Q
│  │
│  Left (F P):
│  ├─ F P (contradiction dengan T P)
│  └─ ✗ CLOSED
│  
│  Right (T Q):
│  ├─ T Q (contradiction dengan F Q)
│  └─ ✗ CLOSED
```

**Semua branch CLOSED!**

**Kesimpulan**: Set **INCONSISTENT** (tidak ada model) ✗

---

## 9.5 Properti Tableau

### Soundness (Kebenaran)

> Jika tableau untuk ¬Φ closes, maka Φ adalah **valid**.

**Proof idea**: Closed tree berarti tidak ada model untuk ¬Φ, jadi Φ true di semua model.

### Completeness (Kelengkapan)

> Jika Φ adalah valid, maka tableau untuk ¬Φ akan **close**.

**Proof idea**: Jika Φ valid, ¬Φ unsatisfiable, jadi tidak ada model, tree must close.

### Termination (Terminasi)

> Untuk propositional logic, tableau **selalu terminates** (berhenti).

**Alasan**: Formula makin sederhana, jumlah subformulas terbatas.

---

## 9.6 Optimisasi Tableau

### Strategy 1: Apply α-rules First

**Reason**: α-rules tidak branch → lebih efisien.

**Order**:
1. Process all α-formulas
2. Then process β-formulas

### Strategy 2: Literal First

**Reason**: Check closure early.

**Order**:
1. Process literals (T P, F P)
2. Then compound formulas

### Strategy 3: Pure Literal Elimination

**Definition**: Literal yang hanya muncul dengan satu sign.

**Example**: Jika hanya ada T P (tidak ada F P), assign P = true.

---

## 9.7 Aplikasi: DPLL Algorithm

### DPLL = Davis-Putnam-Logemann-Loveland

**DPLL** adalah SAT solver algorithm based on semantic tableaux!

**Enhancements**:
1. **Unit Propagation**: If clause has 1 unassigned literal, assign it
2. **Pure Literal Elimination**: Assign pure literals
3. **Backtracking**: Smart search strategy

### Pseudocode

```python
def DPLL(formula, assignment):
    # Check if all clauses satisfied
    if all_satisfied(formula, assignment):
        return assignment  # SAT!
    
    # Check if any clause falsified
    if any_falsified(formula, assignment):
        return None  # UNSAT on this branch
    
    # Unit propagation
    while has_unit_clause(formula, assignment):
        literal = get_unit_literal(formula, assignment)
        assignment = assign(literal, assignment)
    
    # Pure literal elimination
    for literal in get_pure_literals(formula, assignment):
        assignment = assign(literal, assignment)
    
    # Choose variable and branch
    var = choose_variable(formula, assignment)
    
    # Try var = true
    result = DPLL(formula, assignment ∪ {var: true})
    if result is not None:
        return result
    
    # Try var = false
    return DPLL(formula, assignment ∪ {var: false})
```

### Contoh DPLL

**Formula (CNF)**: `(P ∨ Q) ∧ (¬P ∨ R) ∧ (¬Q ∨ ¬R)`

**DPLL execution**:
```
1. Choose P = true
   Simplify: (true ∨ Q) ∧ (¬true ∨ R) ∧ (¬Q ∨ ¬R)
           = true ∧ R ∧ (¬Q ∨ ¬R)
           = R ∧ (¬Q ∨ ¬R)
   
2. Unit clause: R must be true
   Assign R = true
   Simplify: true ∧ (¬Q ∨ ¬true)
           = ¬Q ∨ false
           = ¬Q
   
3. Unit clause: ¬Q must be true
   Assign Q = false
   Simplify: true
   
✓ SAT! Model: {P: true, Q: false, R: true}
```

---

## 9.8 Implementasi

### Implementation in Python

```python
class TableauNode:
    def __init__(self, formulas):
        self.formulas = formulas  # List of (sign, formula) pairs
        self.children = []
        self.closed = False
    
    def is_closed(self):
        """Check if this branch has contradiction"""
        true_atoms = set()
        false_atoms = set()
        
        for sign, formula in self.formulas:
            if is_atom(formula):
                if sign == 'T':
                    true_atoms.add(formula)
                else:
                    false_atoms.add(formula)
        
        # Check for contradiction
        return len(true_atoms & false_atoms) > 0
    
    def expand(self):
        """Apply tableau rules"""
        for sign, formula in self.formulas:
            if is_compound(formula):
                rule = get_rule(sign, formula)
                return rule.apply(self)
        
        return None  # Fully expanded

def build_tableau(initial_formulas):
    """Build complete tableau"""
    root = TableauNode(initial_formulas)
    queue = [root]
    
    while queue:
        node = queue.pop(0)
        
        if node.is_closed():
            node.closed = True
            continue
        
        expansion = node.expand()
        if expansion:
            for child_formulas in expansion:
                child = TableauNode(child_formulas)
                node.children.append(child)
                queue.append(child)
    
    return root

def is_valid(formula):
    """Check if formula is valid using tableau"""
    # Check if negation is unsatisfiable
    initial = [('F', formula)]
    tableau = build_tableau(initial)
    
    # If all branches close, formula is valid
    return all_closed(tableau)
```

---

## 9.9 Latihan dan Soal

### Latihan 1: Basic Tableau

**Problem**: Gunakan tableau untuk cek validity: `P → (Q → P)`

<details>
<summary>Lihat Solusi</summary>

```
F (P → (Q → P))
│
├─ T P            [dari F→]
├─ F (Q → P)      [dari F→]
│
├─ T Q            [dari F→]
├─ F P            [dari F→]
│
└─ ✗ CLOSED (T P dan F P kontradiksi)
```

**Kesimpulan**: VALID ✓
</details>

---

### Latihan 2: Satisfiability

**Problem**: Apakah `(P ∨ Q) ∧ (¬P ∨ R) ∧ (¬Q ∨ ¬R)` satisfiable?

<details>
<summary>Lihat Solusi</summary>

```
T ((P∨Q) ∧ (¬P∨R) ∧ (¬Q∨¬R))
│
├─ T (P ∨ Q)
├─ T (¬P ∨ R)
├─ T (¬Q ∨ ¬R)
│
Branch dari T(P∨Q):
├─ T P | T Q
   │
   Left (T P):
   ├─ T P
   ├─ Branch dari T(¬P∨R):
   │  ├─ T (¬P) | T R
   │  │
   │  Left (F P): contradiction → ✗
   │  Right (T R):
   │     ├─ T R
   │     ├─ Branch dari T(¬Q∨¬R):
   │     │  ├─ T (¬Q) | T (¬R)
   │     │  │
   │     │  Left (F Q): 
   │     │  │  ✅ OPEN! Model: {P: T, R: T, Q: F}
   │     │  │
   │     │  Right (F R): contradiction → ✗
```

**Model**: {P: true, Q: false, R: true} ✓

**Kesimpulan**: SATISFIABLE
</details>

---

### Latihan 3: Consistency

**Problem**: Apakah `{P ∨ Q, P → R, Q → R, ¬R}` konsisten?

<details>
<summary>Lihat Solusi</summary>

```
T (P ∨ Q)
T (P → R)
T (Q → R)
T (¬R)
│
├─ F R         [dari T¬]
│
Branch dari T(P∨Q):
├─ T P | T Q
   │
   Left (T P):
   ├─ Branch dari T(P→R):
   │  ├─ F P | T R
   │  │
   │  Left: contradiction (T P, F P) → ✗
   │  Right: contradiction (T R, F R) → ✗
   │
   Right (T Q):
   ├─ Branch dari T(Q→R):
   │  ├─ F Q | T R
   │  │
   │  Left: contradiction (T Q, F Q) → ✗
   │  Right: contradiction (T R, F R) → ✗
```

**Semua branch CLOSED!**

**Kesimpulan**: INCONSISTENT ✗
</details>

---

### Latihan 4: Implementation

Implementasikan simple tableau checker:

```python
def check_validity(formula):
    """
    Check if formula is valid using tableau
    Return: (is_valid, model_if_invalid)
    """
    # TODO: Implement
    pass

# Test
formula = "P -> (Q -> P)"
is_valid, model = check_validity(formula)
print(f"Valid: {is_valid}")
if not is_valid:
    print(f"Countermodel: {model}")
```

<details>
<summary>Lihat Solusi (Simplified)</summary>

```python
from z3 import *

def check_validity(formula_str):
    """Simplified using Z3"""
    # Parse formula (simplified - actual needs parser)
    P, Q = Bools('P Q')
    
    # For demo: P -> (Q -> P)
    formula = Implies(P, Implies(Q, P))
    
    # Check if negation is UNSAT
    s = Solver()
    s.add(Not(formula))
    
    if s.check() == unsat:
        return (True, None)  # Valid
    else:
        model = s.model()
        return (False, model)  # Invalid with countermodel

# Test
is_valid, model = check_validity("P -> (Q -> P)")
print(f"Valid: {is_valid}")  # True

# Another test
P, Q = Bools('P Q')
formula2 = And(P, Q)
s = Solver()
s.add(Not(formula2))
if s.check() == sat:
    print("Not valid, countermodel:", s.model())
```
</details>

---

## 9.10 Ringkasan

### Key Takeaways

✅ **Semantic Tableau**: Tree-based method untuk checking validity/satisfiability

✅ **Aturan α**: Non-branching (AND-like formulas)

✅ **Aturan β**: Branching (OR-like formulas)

✅ **Closure**: Branch tertutup jika ada T Φ dan F Φ

✅ **Complete**: Untuk propositional logic, tableau selalu terminates

✅ **DPLL**: Modern SAT solver based on tableau + optimizations

### Kapan Menggunakan?

| Use Case | Method |
|----------|--------|
| **Validity checking** | Tableau for ¬formula |
| **Satisfiability** | Tableau for formula |
| **Consistency** | Tableau for set of formulas |
| **Model finding** | Extract from open branch |
| **Large formulas** | DPLL with optimizations |

### Aturan Penting

```
T (P ∧ Q) → T P, T Q              (no branch)
F (P ∨ Q) → F P, F Q              (no branch)
T (P ∨ Q) → branch: T P | T Q    (branch)
F (P ∧ Q) → branch: F P | F Q    (branch)
T (P → Q) → branch: F P | T Q    (branch)
F (P → Q) → T P, F Q              (no branch)
```

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 9
2. Smullyan, R. "First-Order Logic" - Tableaux Method
3. Ben-Ari, M. "Mathematical Logic for Computer Science" - Chapter 4

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Strategi Pembalikan](BAB-08-Strategi-Pembalikan.md)
- [➡️ BAB Selanjutnya: Bentuk Normal](BAB-10-Bentuk-Normal.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Semantic tableaux - the foundation of modern SAT solvers!*

</div>
