# BAB 11: Resolusi (Resolution)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-10-Bentuk-Normal.md) | [➡️ BAB Selanjutnya](BAB-12-Deduksi-Alami.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami resolution rule dan prinsip kerjanya
- ✅ Menerapkan resolution untuk theorem proving
- ✅ Melakukan resolution refutation
- ✅ Memahami basis dari Prolog dan logic programming
- ✅ Mengimplementasikan simple resolution prover

---

## 11.1 Pendahuluan

### Apa itu Resolution?

> **Resolution** adalah aturan inferensi yang bekerja pada **clausal form** (CNF) untuk automated theorem proving.

**Resolution Rule**:
```
From:  (P ∨ α)  and  (¬P ∨ β)
Derive: (α ∨ β)
```

Di mana:
- P adalah literal
- α, β adalah disjunction of literals (bisa kosong)
- (α ∨ β) disebut **resolvent**

### Mengapa Resolution Penting?

**Resolution adalah**:
1. 🎯 **Complete**: Dapat prove semua valid formulas
2. 🤖 **Mechanical**: Mudah diautomasi
3. ⚡ **Efficient**: Basis dari modern theorem provers
4. 💻 **Practical**: Digunakan di Prolog, SAT solvers, AI

**Aplikasi utama**:
- **Automated theorem proving**
- **Logic programming** (Prolog)
- **Answer set programming**
- **SAT/SMT solving**

---

## 11.2 Resolution Rule

### Bentuk Dasar

**Binary Resolution**:
```
C₁ = (L ∨ α)
C₂ = (¬L ∨ β)
─────────────
R = (α ∨ β)
```

**Terminology**:
- **C₁, C₂**: Parent clauses
- **L, ¬L**: Complementary literals (literal yang di-resolve)
- **R**: Resolvent
- **α, β**: Remaining literals

### Contoh 11.1: Simple Resolution

**Given**:
```
C₁ = (P ∨ Q)
C₂ = (¬P ∨ R)
```

**Resolution on P**:
```
(P ∨ Q)  and  (¬P ∨ R)
───────────────────────
(Q ∨ R)
```

**Explanation**: 
- P dari C₁ dan ¬P dari C₂ saling "cancel out"
- Sisanya: Q ∨ R

✓ **Valid inference!**

---

### Contoh 11.2: Resolution dengan Unit Clause

**Given**:
```
C₁ = P
C₂ = (¬P ∨ Q ∨ R)
```

**Resolution**:
```
P  and  (¬P ∨ Q ∨ R)
─────────────────────
(Q ∨ R)
```

**Note**: α = ∅ (empty), β = Q ∨ R

---

### Contoh 11.3: Deriving Empty Clause

**Given**:
```
C₁ = P
C₂ = ¬P
```

**Resolution**:
```
P  and  ¬P
───────────
⊥ (empty clause)
```

**Empty clause (⊥)** = **contradiction**!

**Significance**: Jika derive ⊥, maka original set of clauses **inconsistent**.

---

## 11.3 Resolution Refutation

### Proof by Refutation

> **Resolution refutation**: Untuk prove Φ, tunjukkan bahwa {¬Φ} ∪ KB menghasilkan **empty clause**.

**Steps**:
1. Convert ¬Φ dan KB ke CNF
2. Combine into one set of clauses
3. Apply resolution repeatedly
4. If derive ⊥ → Φ is **provable** from KB
5. If can't derive ⊥ → Φ is **not provable**

### Contoh 11.4: Proving Modus Ponens

**Prove**: {P, P → Q} ⊢ Q

**Step 1**: Convert to CNF
```
KB:
  P           → {P}
  P → Q       → {¬P, Q}

Goal: Q       → Negate: ¬Q
```

**Step 2**: Combine clauses
```
{P}, {¬P, Q}, {¬Q}
```

**Step 3**: Apply resolution
```
1. {P}           (given)
2. {¬P, Q}       (given)
3. {¬Q}          (negated goal)
4. {Q}           (from 1, 2 - resolve on P)
5. ⊥             (from 3, 4 - resolve on Q)
```

**Derive empty clause!** ✓

**Conclusion**: {P, P → Q} ⊢ Q is **valid**! 🎉

---

### Contoh 11.5: Classical Syllogism

**Prove**: {All humans mortal, Socrates human} ⊢ Socrates mortal

**In propositional approximation**:
```
H: Socrates is human
M: Socrates is mortal
Rule: H → M
```

**CNF**:
```
1. {H}
2. {¬H, M}
Negate goal ¬M:
3. {¬M}
```

**Resolution**:
```
4. {M}    (from 1, 2 - resolve on H)
5. ⊥      (from 3, 4 - resolve on M)
```

✓ **Proved!**

---

## 11.4 Resolution Strategy

### Strategy 1: Linear Resolution

**Idea**: Each resolvent must involve at least one clause from previous step.

**Benefits**:
- More focused search
- Easier to track proof

### Strategy 2: Unit Resolution

**Idea**: Always resolve with unit clauses first.

**Benefits**:
- Unit propagation (very efficient)
- Reduces search space

**Example**:
```
Clauses: {P}, {¬P, Q, R}, {¬Q, S}

Use unit {P} first:
→ {Q, R}  (resolve with clause 2)

Now use unit {¬Q, S}... wait, not unit. Skip for now.
```

### Strategy 3: Set-of-Support

**Idea**: At least one parent clause must be from "goal" set.

**Benefits**:
- Prevents irrelevant inferences
- Focuses on goal

---

## 11.5 Completeness dan Soundness

### Soundness

> If resolution derives ⊥, then original clauses are **unsatisfiable**.

**Proof sketch**: Each resolution step preserves satisfiability. If derive contradiction, input must be inconsistent.

### Completeness (Resolution Theorem)

> If clauses are unsatisfiable, resolution **will** derive ⊥.

**Formulated by J.A. Robinson (1965)**.

**Significance**: Resolution is **complete** for propositional logic!

### Limitations

**Resolution is**:
- ✅ Complete for propositional logic
- ✅ Semi-decidable for first-order logic
- ❌ Not a decision procedure for FOL (may not terminate)

---

## 11.6 Resolution vs Other Methods

### Comparison Table

| Method | Input | Proof Style | Automation |
|--------|-------|-------------|------------|
| **Resolution** | CNF | Refutation | High |
| **Tableaux** | Any formula | Direct/Refutation | High |
| **Natural Deduction** | Any formula | Direct | Medium |
| **Hilbert System** | Any formula | Direct | Low |

### When to Use Resolution?

**Use resolution when**:
- Input already in CNF
- Want fully automated proving
- Building logic programming system
- Need refutation proof

**Avoid when**:
- Human-readable proofs needed
- Direct proof more natural
- Formula conversion expensive

---

## 11.7 Aplikasi: Prolog

### Prolog = Programming in Logic

**Prolog** uses **resolution** as its inference engine!

**Prolog clause**:
```prolog
mortal(X) :- human(X).
human(socrates).
```

**In clausal form**:
```
{¬human(X), mortal(X)}
{human(socrates)}
```

**Query**: `?- mortal(socrates).`

**Resolution**:
```
Negate goal: {¬mortal(socrates)}

Resolve with clause 1 (substitute X=socrates):
{¬human(socrates), mortal(socrates)} and {¬mortal(socrates)}
→ {¬human(socrates)}

Resolve with clause 2:
{¬human(socrates)} and {human(socrates)}
→ ⊥

Success! socrates is mortal.
```

---

### SLD Resolution (Prolog's Engine)

**SLD** = **S**elective **L**inear **D**efinite clause resolution

**Strategy**:
1. Start with negated goal
2. Select literal from current clause
3. Find matching clause in KB
4. Resolve (with unification for FOL)
5. Repeat until empty clause

**Example Prolog Execution**:
```prolog
% Facts
parent(tom, bob).
parent(bob, ann).

% Rule
grandparent(X, Z) :- parent(X, Y), parent(Y, Z).

% Query
?- grandparent(tom, ann).
```

**Resolution trace**:
```
Goal: ¬grandparent(tom, ann)

1. Resolve with grandparent rule (X=tom, Z=ann):
   → ¬parent(tom, Y), ¬parent(Y, ann)

2. Resolve with parent(tom, bob) (Y=bob):
   → ¬parent(bob, ann)

3. Resolve with parent(bob, ann):
   → ⊥

Success!
```

---

## 11.8 Optimisasi Resolution

### Optimization 1: Subsumption

**Definition**: Clause C₁ **subsumes** C₂ if C₁ ⊆ C₂.

**Example**:
```
C₁ = {P}
C₂ = {P, Q}

C₁ subsumes C₂ because C₁ ⊆ C₂.
```

**Optimization**: Delete subsumed clauses (C₂ is weaker).

**Benefit**: Reduces clause set size.

---

### Optimization 2: Tautology Elimination

**Definition**: Tautology = clause with both L and ¬L.

**Example**: `{P, ¬P, Q}` is tautology (always true, useless).

**Optimization**: Delete tautologies.

---

### Optimization 3: Pure Literal Elimination

**Definition**: Pure literal = appears with only one polarity.

**Example**: 
```
Clauses: {P, Q}, {P, R}, {Q, S}
P appears only positive (pure positive)
```

**Optimization**: Assign pure literals to satisfy clauses.

---

## 11.9 Implementasi

### Python Implementation

```python
class Literal:
    def __init__(self, var, negated=False):
        self.var = var
        self.negated = negated
    
    def negate(self):
        return Literal(self.var, not self.negated)
    
    def __eq__(self, other):
        return self.var == other.var and self.negated == other.negated
    
    def __hash__(self):
        return hash((self.var, self.negated))
    
    def __str__(self):
        return f"¬{self.var}" if self.negated else str(self.var)

class Clause:
    def __init__(self, literals):
        self.literals = frozenset(literals)
    
    def is_empty(self):
        return len(self.literals) == 0
    
    def __str__(self):
        if self.is_empty():
            return "⊥"
        return " ∨ ".join(str(l) for l in self.literals)
    
    def __eq__(self, other):
        return self.literals == other.literals
    
    def __hash__(self):
        return hash(self.literals)

def resolve(c1, c2):
    """
    Apply resolution rule
    Returns: Set of resolvents (possibly empty)
    """
    resolvents = set()
    
    # Find complementary literals
    for lit1 in c1.literals:
        lit1_neg = lit1.negate()
        if lit1_neg in c2.literals:
            # Can resolve!
            remaining1 = c1.literals - {lit1}
            remaining2 = c2.literals - {lit1_neg}
            resolvent = Clause(remaining1 | remaining2)
            resolvents.add(resolvent)
    
    return resolvents

def resolution_refutation(clauses):
    """
    Resolution refutation algorithm
    Returns: True if unsatisfiable (proved), False otherwise
    """
    clauses = set(clauses)
    new_clauses = set()
    
    while True:
        # Try all pairs
        clause_list = list(clauses)
        n = len(clause_list)
        
        for i in range(n):
            for j in range(i+1, n):
                resolvents = resolve(clause_list[i], clause_list[j])
                
                for resolvent in resolvents:
                    if resolvent.is_empty():
                        print("Derived empty clause! ⊥")
                        return True  # UNSAT
                    
                    new_clauses.add(resolvent)
        
        # Check if made progress
        if new_clauses.issubset(clauses):
            print("No new clauses. Cannot prove.")
            return False  # SAT (or unknown)
        
        clauses.update(new_clauses)
        print(f"Generated {len(new_clauses)} new clauses")

# Example usage
if __name__ == "__main__":
    # Prove: {P, P→Q} ⊢ Q
    # CNF: {P}, {¬P, Q}, {¬Q}
    
    P = Literal('P')
    Q = Literal('Q')
    
    clauses = [
        Clause([P]),
        Clause([P.negate(), Q]),
        Clause([Q.negate()])  # negated goal
    ]
    
    print("Clauses:")
    for c in clauses:
        print(f"  {c}")
    
    print("\nRunning resolution...")
    result = resolution_refutation(clauses)
    
    if result:
        print("\n✓ Proved! (unsatisfiable)")
    else:
        print("\n✗ Cannot prove")
```

**Output**:
```
Clauses:
  P
  ¬P ∨ Q
  ¬Q

Running resolution...
Derived empty clause! ⊥

✓ Proved! (unsatisfiable)
```

---

## 11.10 Latihan dan Soal

### Latihan 1: Basic Resolution

**Problem**: Resolve these clauses:

```
C₁ = {P, Q, R}
C₂ = {¬Q, S}
```

<details>
<summary>Lihat Solusi</summary>

**Resolution on Q**:
```
{P, Q, R}  and  {¬Q, S}
────────────────────────
{P, R, S}
```

**Explanation**: Q and ¬Q cancel out, combine remaining literals.

✓ **Resolvent**: {P, R, S}
</details>

---

### Latihan 2: Resolution Refutation

**Problem**: Prove using resolution:

{P ∨ Q, ¬P ∨ R, ¬Q ∨ R} ⊢ R

<details>
<summary>Lihat Solusi</summary>

**Step 1**: Convert to CNF (already done)

**Step 2**: Negate goal
```
Clauses:
1. {P, Q}
2. {¬P, R}
3. {¬Q, R}
4. {¬R}       (negated goal)
```

**Step 3**: Apply resolution
```
5. {Q, R}     (resolve 1 & 2 on P)
6. {R}        (resolve 1 & 3 on Q)  OR  {P, R} (resolve 3 & 5 on Q)
7. ⊥          (resolve 4 & 6 on R)
```

**Alternative path**:
```
5. {Q, R}     (resolve 1 & 2 on P)
6. {R}        (resolve 3 & 5 on Q)
7. ⊥          (resolve 4 & 6 on R)
```

✓ **Proved!** Empty clause derived.
</details>

---

### Latihan 3: Identifying Invalid Inference

**Problem**: Can we prove Q from {P, P → Q, ¬R}?

<details>
<summary>Lihat Solusi</summary>

**CNF**:
```
1. {P}
2. {¬P, Q}
3. {¬R}
Goal: Q → Negate: {¬Q}
4. {¬Q}
```

**Resolution**:
```
5. {Q}        (resolve 1 & 2 on P)
6. ⊥          (resolve 4 & 5 on Q)
```

✓ **Yes, we can prove Q!**

**Note**: ¬R is irrelevant (doesn't participate in proof).
</details>

---

### Latihan 4: Resolution with Multiple Steps

**Problem**: Prove the transitivity of implication:

{P → Q, Q → R} ⊢ P → R

<details>
<summary>Lihat Solusi</summary>

**Step 1**: Convert to CNF
```
P → Q  →  {¬P, Q}
Q → R  →  {¬Q, R}
P → R  →  {¬P, R}  (goal)

Negate goal: ¬(¬P ∨ R) → {P, ¬R}
```

**Clauses**:
```
1. {¬P, Q}
2. {¬Q, R}
3. {P}         (from negated goal)
4. {¬R}        (from negated goal)
```

**Resolution**:
```
5. {Q}         (resolve 1 & 3 on P)
6. {R}         (resolve 2 & 5 on Q)
7. ⊥           (resolve 4 & 6 on R)
```

✓ **Proved!**
</details>

---

### Latihan 5: Implementation Challenge

**Problem**: Extend the resolution implementation to track proofs.

```python
class ProofNode:
    def __init__(self, clause, parent1=None, parent2=None):
        self.clause = clause
        self.parent1 = parent1
        self.parent2 = parent2
    
    def print_proof(self, indent=0):
        # TODO: Implement recursive proof printing
        pass

def resolution_with_proof(clauses):
    """
    Resolution that tracks proof tree
    Returns: ProofNode for empty clause if found
    """
    # TODO: Implement
    pass
```

<details>
<summary>Lihat Solusi</summary>

```python
class ProofNode:
    def __init__(self, clause, parent1=None, parent2=None, rule="Given"):
        self.clause = clause
        self.parent1 = parent1
        self.parent2 = parent2
        self.rule = rule
    
    def print_proof(self, indent=0):
        prefix = "  " * indent
        if self.rule == "Given":
            print(f"{prefix}{self.clause} (Given)")
        else:
            print(f"{prefix}{self.clause} (Resolve)")
            if self.parent1:
                self.parent1.print_proof(indent + 1)
            if self.parent2:
                self.parent2.print_proof(indent + 1)

def resolution_with_proof(clauses):
    """Resolution with proof tracking"""
    # Create initial nodes
    nodes = {c: ProofNode(c, rule="Given") for c in clauses}
    clause_set = set(clauses)
    
    while True:
        clause_list = list(clause_set)
        n = len(clause_list)
        new_found = False
        
        for i in range(n):
            for j in range(i+1, n):
                c1, c2 = clause_list[i], clause_list[j]
                resolvents = resolve(c1, c2)
                
                for res in resolvents:
                    if res.is_empty():
                        # Found proof!
                        return ProofNode(res, nodes[c1], nodes[c2], "Resolve")
                    
                    if res not in clause_set:
                        clause_set.add(res)
                        nodes[res] = ProofNode(res, nodes[c1], nodes[c2], "Resolve")
                        new_found = True
        
        if not new_found:
            return None  # Cannot prove

# Test
P = Literal('P')
Q = Literal('Q')

clauses = [
    Clause([P]),
    Clause([P.negate(), Q]),
    Clause([Q.negate()])
]

proof = resolution_with_proof(clauses)
if proof:
    print("Proof found:")
    proof.print_proof()
```
</details>

---

## 11.11 Ringkasan

### Key Takeaways

✅ **Resolution Rule**: From `(P ∨ α)` and `(¬P ∨ β)` derive `(α ∨ β)`

✅ **Refutation**: Prove Φ by showing {¬Φ} ∪ KB derives ⊥

✅ **Complete**: For propositional logic, resolution is complete

✅ **Sound**: If derive ⊥, original is unsatisfiable

✅ **Prolog**: Uses SLD resolution for logic programming

### Resolution Steps

```
1. Convert to CNF
2. Negate goal
3. Combine into clause set
4. Apply resolution repeatedly
5. If derive ⊥ → Proved!
6. If no progress → Cannot prove
```

### Applications

| Application | How Resolution Used |
|-------------|---------------------|
| **Theorem Proving** | Automated refutation proofs |
| **Prolog** | SLD resolution with unification |
| **SAT Solving** | Conflict-driven clause learning |
| **Answer Set Programming** | Stable model computation |

### Optimizations

- **Subsumption**: Remove subsumed clauses
- **Tautology elimination**: Remove trivial clauses
- **Pure literals**: Simplify by assignment
- **Unit propagation**: Resolve with unit clauses first

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 11
2. Robinson, J. A. "A Machine-Oriented Logic Based on the Resolution Principle" (1965)
3. Bratko, I. "Prolog Programming for Artificial Intelligence"

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Bentuk Normal](BAB-10-Bentuk-Normal.md)
- [➡️ BAB Selanjutnya: Deduksi Alami](BAB-12-Deduksi-Alami.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Resolution - the engine of automated reasoning and Prolog!*

</div>
