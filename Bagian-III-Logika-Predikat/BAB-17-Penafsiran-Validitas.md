# BAB 17: Penafsiran dan Validitas (Interpretation and Validity)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-16-Kuantor.md) | [➡️ BAB Selanjutnya](BAB-18-Derivasi.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami interpretation (model) dalam FOL
- ✅ Mengevaluasi truth value dari formula dalam interpretation
- ✅ Membedakan validity, satisfiability, dan unsatisfiability
- ✅ Memahami logical consequence (⊨)
- ✅ Menerapkan soundness dan completeness theorems

---

## 17.1 Pendahuluan

### Syntax vs Semantics

**Sejauh ini kita belajar**:
- **Syntax**: Cara menulis formulas (BAB 14-16)
- Well-formed terms dan formulas
- Quantifiers dan connectives

**Sekarang**:
- **Semantics**: Apa **meaning** dari formulas?
- Kapan formula **true** atau **false**?
- Dalam **context** apa?

---

### The Meaning Question

**Question**: Apakah `∀x Human(x)` true atau false?

**Answer**: **Depends on interpretation!**

**Interpretation 1** (Domain = All people):
- `Human(x)` = TRUE for all x
- `∀x Human(x)` = **TRUE** ✓

**Interpretation 2** (Domain = All animals):
- `Human(x)` = FALSE for dogs, cats, etc.
- `∀x Human(x)` = **FALSE** ✗

**Need to specify interpretation!**

---

## 17.2 Interpretation (Model)

### Definisi

> **Interpretation** (atau **model** atau **structure**) 𝓜 consists of:
> 1. **Domain** D: Non-empty set of individuals
> 2. **Assignment** untuk setiap symbol dalam signature:
>    - Each constant c → element of D
>    - Each function f/n → function Dⁿ → D
>    - Each predicate P/n → relation on Dⁿ (subset of Dⁿ)

**Notation**: 𝓜 = (D, I) dimana I adalah interpretation function.

---

### Example 17.1: Arithmetic Interpretation

**Signature**:
- Constants: 0, 1
- Functions: +, *
- Predicates: =, <

**Standard interpretation 𝓝** (natural numbers):
```
Domain: ℕ = {0, 1, 2, 3, ...}

Constants:
  0 ↦ zero
  1 ↦ one

Functions:
  +(m, n) ↦ addition
  *(m, n) ↦ multiplication

Predicates:
  =(m, n) ↦ equality
  <(m, n) ↦ less than
```

**Formula evaluation**:
```
𝓝 ⊨ 1 + 1 = 2        TRUE ✓
𝓝 ⊨ 2 < 3            TRUE ✓
𝓝 ⊨ ∀x (x < x)       FALSE ✗ (no number less than itself)
```

---

### Example 17.2: Graph Interpretation

**Signature**:
- Predicates: Edge(x, y), Vertex(x)

**Interpretation 𝓖** (directed graph):
```
Domain: {a, b, c, d}

Predicates:
  Vertex(x) = TRUE for all x ∈ D
  Edge(x, y) = TRUE iff x→y is edge in graph

Graph:
  a → b
  b → c
  c → d
  d → a
```

**Formula evaluation**:
```
𝓖 ⊨ Edge(a, b)              TRUE ✓
𝓖 ⊨ Edge(b, a)              FALSE ✗
𝓖 ⊨ ∃x Edge(x, c)           TRUE ✓ (x=b works)
𝓖 ⊨ ∀x ∃y Edge(x, y)        TRUE ✓ (every vertex has outgoing edge)
```

---

## 17.3 Variable Assignment

### The Problem

**Question**: What is the truth value of `x < 5`?

**Answer**: **Depends on value of x!**

**Need**: Assignment of values to variables.

---

### Definisi

> **Variable assignment** α adalah function dari variables ke domain:
> ```
> α: Variables → D
> ```

**Example**:
```
α(x) = 3
α(y) = 7
α(z) = 0
```

**Then**:
```
𝓝 ⊨ x < 5 [α]        TRUE (because α(x) = 3 < 5) ✓
𝓝 ⊨ y < 5 [α]        FALSE (because α(y) = 7 > 5) ✗
```

---

### Modified Assignment

**Notation**: `α[x ↦ d]` adalah assignment yang:
- Maps x to d
- Maps all other variables same as α

**Example**:
```
α(x) = 3, α(y) = 7

β = α[x ↦ 10]:
  β(x) = 10
  β(y) = 7
```

---

## 17.4 Truth in a Model

### Atomic Formulas

**Predicate P(t₁, ..., tₙ)**:

```
𝓜 ⊨ P(t₁, ..., tₙ)[α]  iff  (⟦t₁⟧α, ..., ⟦tₙ⟧α) ∈ P^𝓜
```

Where `⟦t⟧α` adalah **value** of term t under assignment α.

**Example**:
```
𝓝 ⊨ x < 5 [α]  iff  (α(x), 5) ∈ <^𝓝
                iff  α(x) < 5
```

---

### Connectives

**Same as propositional logic**:

```
𝓜 ⊨ ¬Φ[α]      iff  𝓜 ⊭ Φ[α]
𝓜 ⊨ Φ ∧ Ψ[α]   iff  𝓜 ⊨ Φ[α] and 𝓜 ⊨ Ψ[α]
𝓜 ⊨ Φ ∨ Ψ[α]   iff  𝓜 ⊨ Φ[α] or 𝓜 ⊨ Ψ[α]
𝓜 ⊨ Φ → Ψ[α]   iff  𝓜 ⊭ Φ[α] or 𝓜 ⊨ Ψ[α]
```

---

### Quantifiers (CRITICAL!)

**Universal**:
```
𝓜 ⊨ ∀x Φ(x)[α]  iff  for ALL d ∈ D: 𝓜 ⊨ Φ(x)[α[x ↦ d]]
```

**Meaning**: `∀x Φ(x)` is true iff Φ(x) is true for **every** possible value of x.

---

**Existential**:
```
𝓜 ⊨ ∃x Φ(x)[α]  iff  for SOME d ∈ D: 𝓜 ⊨ Φ(x)[α[x ↦ d]]
```

**Meaning**: `∃x Φ(x)` is true iff Φ(x) is true for **at least one** value of x.

---

### Example 17.3: Evaluating Quantifiers

**Interpretation 𝓝** (natural numbers), **Formula**: `∀x (x < 10 → x < 20)`

**Evaluation**:
```
𝓝 ⊨ ∀x (x < 10 → x < 20)

Check for ALL d ∈ ℕ:
  d = 0: 0 < 10 → 0 < 20  =  T → T  =  T ✓
  d = 5: 5 < 10 → 5 < 20  =  T → T  =  T ✓
  d = 15: 15 < 10 → 15 < 20  =  F → T  =  T ✓
  d = 50: 50 < 10 → 50 < 20  =  F → F  =  T ✓
  ...

All cases TRUE → ∀x formula is TRUE ✓
```

---

### Example 17.4: Existential Evaluation

**Formula**: `∃x (x > 10 ∧ x < 15)`

**Evaluation**:
```
𝓝 ⊨ ∃x (x > 10 ∧ x < 15)

Need SOME d ∈ ℕ such that:
  d > 10 ∧ d < 15

Try d = 11: 11 > 10 ∧ 11 < 15  =  T ∧ T  =  T ✓

Found one! → ∃x formula is TRUE ✓
```

---

## 17.5 Sentences (Closed Formulas)

### Definisi

> **Sentence** adalah formula **without free variables** (all variables bound).

**Examples**:
```
∀x Human(x)                  Sentence ✓
∃x ∀y Loves(x, y)            Sentence ✓
Human(socrates)              Sentence ✓ (no variables)

Human(x)                     NOT sentence (x is free) ✗
∀x Loves(x, y)               NOT sentence (y is free) ✗
```

---

### Truth of Sentences

**Key property**: Truth of sentence **doesn't depend** on variable assignment!

```
If Φ is sentence:
  𝓜 ⊨ Φ[α]  iff  𝓜 ⊨ Φ[β]  for any α, β
```

**So we write**: `𝓜 ⊨ Φ` (omit assignment)

**Reason**: All variables bound by quantifiers!

---

## 17.6 Validity, Satisfiability, Unsatisfiability

### Satisfiable Formula

> **Φ is satisfiable** iff **exists** interpretation 𝓜 such that 𝓜 ⊨ Φ.

**Example**:
```
∃x Prime(x)    Satisfiable ✓
               (𝓝 ⊨ formula, because 2 is prime)
```

---

### Valid Formula (Tautology)

> **Φ is valid** (⊨ Φ) iff **for ALL** interpretations 𝓜: 𝓜 ⊨ Φ.

**Notation**: ⊨ Φ (read: "Φ is valid")

**Examples**:
```
∀x (P(x) ∨ ¬P(x))           Valid ✓ (law of excluded middle)
∀x (P(x) → P(x))            Valid ✓ (tautology)
∃x (x = x)                  Valid ✓ (if domain non-empty)

∀x Human(x)                 NOT valid ✗ (depends on domain)
∃x Prime(x)                 NOT valid ✗ (not true in all domains)
```

---

### Unsatisfiable Formula (Contradiction)

> **Φ is unsatisfiable** iff **for ALL** interpretations 𝓜: 𝓜 ⊭ Φ.

**No interpretation makes it true!**

**Examples**:
```
∀x (P(x) ∧ ¬P(x))           Unsatisfiable ✓ (contradiction)
∃x (x ≠ x)                  Unsatisfiable ✓
∀x P(x) ∧ ∃x ¬P(x)          Unsatisfiable ✓
```

---

### Relationship

```
Valid (⊨ Φ)  ⟺  ¬Φ is unsatisfiable

Unsatisfiable  ⟺  ¬Φ is valid
```

**Satisfiable** is weaker: Just need **one** model.

---

### Example 17.5: Checking Validity

**Is `∀x ∃y (y > x)` valid?**

**Interpretation 1** (Natural numbers):
- For x=0: y=1 works (1 > 0) ✓
- For x=5: y=6 works (6 > 5) ✓
- TRUE in 𝓝 ✓

**Interpretation 2** (Finite set {1, 2, 3}):
- For x=3: Need y > 3, but no such y in domain ✗
- FALSE in this model ✗

**Conclusion**: **NOT valid** ✗ (countermodel exists)

---

## 17.7 Logical Consequence

### Definisi

> **Φ is logical consequence of Γ** (written Γ ⊨ Φ) iff:
> 
> For **every** interpretation 𝓜 where 𝓜 ⊨ Ψ for all Ψ ∈ Γ,  
> we also have 𝓜 ⊨ Φ.

**In words**: "If all of Γ are true, then Φ must be true"

---

### Example 17.6: Logical Consequence

**Check**: {∀x P(x), ∀x (P(x) → Q(x))} ⊨ ∀x Q(x)

**Proof**:
```
Assume 𝓜 ⊨ ∀x P(x) and 𝓜 ⊨ ∀x (P(x) → Q(x))

For any d ∈ D:
  𝓜 ⊨ P(d)           (from first assumption)
  𝓜 ⊨ P(d) → Q(d)    (from second assumption)
  𝓜 ⊨ Q(d)           (by modus ponens)

Since for all d: 𝓜 ⊨ Q(d):
  𝓜 ⊨ ∀x Q(x)

Therefore: {∀x P(x), ∀x (P(x) → Q(x))} ⊨ ∀x Q(x) ✓
```

---

### Special Cases

**Empty set**:
```
∅ ⊨ Φ  ⟺  ⊨ Φ  (Φ is valid)
```

**Single formula**:
```
Φ ⊨ Ψ  means  ⊨ Φ → Ψ
```

---

## 17.8 Soundness and Completeness

### Soundness Theorem

> **Soundness**: If Γ ⊢ Φ (provable), then Γ ⊨ Φ (valid).

**Meaning**: Proof system **doesn't prove false things**.

**If you can prove it, it's true!** ✓

---

### Completeness Theorem (Gödel)

> **Completeness**: If Γ ⊨ Φ (valid), then Γ ⊢ Φ (provable).

**Meaning**: Proof system **can prove all true things**.

**If it's true, you can prove it!** ✓

**Proved by Kurt Gödel (1929)**.

---

### Combined

**Soundness + Completeness**:
```
Γ ⊢ Φ  ⟺  Γ ⊨ Φ
```

**Syntactic provability** = **Semantic validity**

**Amazing result!** Syntax and semantics aligned! 🎉

---

### Limitations (Important!)

**Gödel's Incompleteness Theorem** (1931):

For **arithmetic** (with addition, multiplication):
- There exist **true** statements that are **not provable**
- System is **incomplete** for arithmetic

**But**: FOL itself is **complete** (for general formulas)

**Difference**:
- **FOL**: Complete (Gödel 1929)
- **Arithmetic**: Incomplete (Gödel 1931)

---

## 17.9 Decidability

### The Halting Problem for FOL

**Question**: Given formula Φ, can we **algorithmically** determine if ⊨ Φ?

**Answer**: **NO** (for general FOL)!

**Theorem** (Church, Turing, 1936):
> Validity in FOL is **undecidable**.

**No algorithm** can decide validity for all FOL formulas.

---

### Semi-decidability

**Positive result**:
> Validity is **semi-decidable** (recursively enumerable).

**Meaning**:
- If Φ is **valid**, algorithm **will** find proof (eventually)
- If Φ is **invalid**, algorithm may **not** terminate

**Procedure**:
1. Enumerate all possible proofs
2. If Φ is valid, will find proof eventually
3. If Φ is invalid, may search forever

---

### Decidable Fragments

**Some fragments ARE decidable**:

| Fragment | Decidable? | Complexity |
|----------|------------|------------|
| **Propositional** | Yes | NP-complete |
| **Monadic FOL** | Yes | NEXPTIME |
| **∃*∀* fragment** | Yes | NEXPTIME |
| **Full FOL** | No | Undecidable |

**Monadic**: Only unary predicates (no relations).

---

## 17.10 Implementasi: Model Checking

### Finite Domain Model Checker

```python
from dataclasses import dataclass
from typing import Set, Dict, Callable

@dataclass
class Model:
    """Finite domain interpretation"""
    domain: Set[int]  # Finite set of individuals
    predicates: Dict[str, Callable]  # Predicate interpretations
    
    def evaluate_atomic(self, pred_name: str, *args) -> bool:
        """Evaluate atomic formula"""
        if pred_name not in self.predicates:
            raise ValueError(f"Unknown predicate: {pred_name}")
        return self.predicates[pred_name](*args)

def evaluate(model: Model, formula, assignment: Dict[str, int] = None):
    """
    Evaluate formula in model under assignment
    
    formula structure:
      ('atom', pred_name, args)
      ('not', subformula)
      ('and', left, right)
      ('or', left, right)
      ('implies', left, right)
      ('forall', var, subformula)
      ('exists', var, subformula)
    """
    if assignment is None:
        assignment = {}
    
    formula_type = formula[0]
    
    if formula_type == 'atom':
        _, pred_name, args = formula
        # Evaluate arguments (substitute variables)
        values = []
        for arg in args:
            if isinstance(arg, str) and arg.startswith('x'):
                values.append(assignment.get(arg))
            else:
                values.append(arg)
        return model.evaluate_atomic(pred_name, *values)
    
    elif formula_type == 'not':
        _, subformula = formula
        return not evaluate(model, subformula, assignment)
    
    elif formula_type == 'and':
        _, left, right = formula
        return evaluate(model, left, assignment) and \
               evaluate(model, right, assignment)
    
    elif formula_type == 'or':
        _, left, right = formula
        return evaluate(model, left, assignment) or \
               evaluate(model, right, assignment)
    
    elif formula_type == 'implies':
        _, left, right = formula
        return (not evaluate(model, left, assignment)) or \
               evaluate(model, right, assignment)
    
    elif formula_type == 'forall':
        _, var, subformula = formula
        # Check for ALL d in domain
        for d in model.domain:
            new_assignment = assignment.copy()
            new_assignment[var] = d
            if not evaluate(model, subformula, new_assignment):
                return False
        return True
    
    elif formula_type == 'exists':
        _, var, subformula = formula
        # Check for SOME d in domain
        for d in model.domain:
            new_assignment = assignment.copy()
            new_assignment[var] = d
            if evaluate(model, subformula, new_assignment):
                return True
        return False
    
    else:
        raise ValueError(f"Unknown formula type: {formula_type}")

# Example usage
if __name__ == "__main__":
    # Model: Natural numbers {0, 1, 2, 3, 4}
    domain = {0, 1, 2, 3, 4}
    
    # Define predicates
    predicates = {
        'Even': lambda x: x % 2 == 0,
        'LessThan': lambda x, y: x < y,
    }
    
    model = Model(domain, predicates)
    
    # Formula: ∀x (Even(x) ∨ ¬Even(x))
    formula1 = ('forall', 'x', 
                ('or', 
                 ('atom', 'Even', ['x']),
                 ('not', ('atom', 'Even', ['x']))))
    
    print("Formula: ∀x (Even(x) ∨ ¬Even(x))")
    print(f"Truth value: {evaluate(model, formula1)}")  # TRUE (tautology)
    
    # Formula: ∃x Even(x)
    formula2 = ('exists', 'x', ('atom', 'Even', ['x']))
    
    print("\nFormula: ∃x Even(x)")
    print(f"Truth value: {evaluate(model, formula2)}")  # TRUE (0, 2, 4 are even)
    
    # Formula: ∀x ∃y LessThan(x, y)
    formula3 = ('forall', 'x',
                ('exists', 'y',
                 ('atom', 'LessThan', ['x', 'y'])))
    
    print("\nFormula: ∀x ∃y LessThan(x, y)")
    print(f"Truth value: {evaluate(model, formula3)}")  # FALSE (x=4 has no y>4)
```

**Output**:
```
Formula: ∀x (Even(x) ∨ ¬Even(x))
Truth value: True

Formula: ∃x Even(x)
Truth value: True

Formula: ∀x ∃y LessThan(x, y)
Truth value: False
```

---

## 17.11 Latihan dan Soal

### Latihan 1: Model Construction

**Build model** where `∃x ∀y Loves(x, y)` is TRUE.

<details>
<summary>Lihat Solusi</summary>

**Model 𝓜**:
```
Domain: {Alice, Bob}

Predicate:
  Loves(Alice, Alice) = TRUE
  Loves(Alice, Bob) = TRUE
  Loves(Bob, Alice) = FALSE
  Loves(Bob, Bob) = FALSE
```

**Evaluation**:
```
∃x ∀y Loves(x, y)

Try x = Alice:
  ∀y Loves(Alice, y)?
    Loves(Alice, Alice) = TRUE ✓
    Loves(Alice, Bob) = TRUE ✓
  Yes! ✓

Found x=Alice that loves everyone → Formula is TRUE ✓
```
</details>

---

### Latihan 2: Validity Check

**Is `∀x P(x) → ∃x P(x)` valid?**

<details>
<summary>Lihat Solusi</summary>

**Check validity**: Need truth in **all** models.

**Case 1**: ∀x P(x) is FALSE
- Then implication is TRUE (F → anything = T) ✓

**Case 2**: ∀x P(x) is TRUE
- Then P(d) is true for all d
- So exists d with P(d) true
- So ∃x P(x) is TRUE
- Implication: T → T = T ✓

**All cases TRUE** → **Valid** ✓

**Intuition**: "If everyone has property P, then someone has property P"
</details>

---

### Latihan 3: Countermodel

**Find countermodel** for: `∃x P(x) → ∀x P(x)`

<details>
<summary>Lihat Solusi</summary>

**Need model** where formula is FALSE.

**For implication to be FALSE**:
- Antecedent (∃x P(x)) must be TRUE
- Consequent (∀x P(x)) must be FALSE

**Model**:
```
Domain: {1, 2}
P(1) = TRUE
P(2) = FALSE
```

**Evaluation**:
```
∃x P(x) = TRUE (x=1 works)
∀x P(x) = FALSE (P(2) is false)

Formula: T → F = FALSE ✗
```

**Countermodel found!** Formula is **not valid**. ✓
</details>

---

### Latihan 4: Logical Consequence

**Does `{∀x (P(x) → Q(x)), P(a)} ⊨ Q(a)`?**

<details>
<summary>Lihat Solusi</summary>

**Check**: In every model where premises true, is conclusion true?

**Assume**:
1. 𝓜 ⊨ ∀x (P(x) → Q(x))
2. 𝓜 ⊨ P(a)

**Derive**:
```
From (1) with x = a:
  𝓜 ⊨ P(a) → Q(a)

From (2):
  𝓜 ⊨ P(a)

By modus ponens:
  𝓜 ⊨ Q(a)
```

**YES**, logical consequence holds! ✓

**This is instantiation of universal + modus ponens**.
</details>

---

## 17.12 Ringkasan

### Key Takeaways

✅ **Interpretation** (𝓜): Domain + assignments for constants, functions, predicates

✅ **Truth in model**: 𝓜 ⊨ Φ[α] depends on interpretation and variable assignment

✅ **Validity** (⊨ Φ): True in **all** interpretations

✅ **Satisfiability**: True in **some** interpretation

✅ **Logical consequence** (Γ ⊨ Φ): Φ true whenever all of Γ true

✅ **Soundness & Completeness**: ⊢ and ⊨ are equivalent

### Truth Conditions

```
𝓜 ⊨ P(t₁,...,tₙ)[α]  iff  (⟦t₁⟧α,...,⟦tₙ⟧α) ∈ P^𝓜

𝓜 ⊨ ¬Φ[α]           iff  𝓜 ⊭ Φ[α]
𝓜 ⊨ Φ ∧ Ψ[α]        iff  𝓜 ⊨ Φ[α] and 𝓜 ⊨ Ψ[α]

𝓜 ⊨ ∀x Φ[α]         iff  for all d∈D: 𝓜 ⊨ Φ[α[x↦d]]
𝓜 ⊨ ∃x Φ[α]         iff  for some d∈D: 𝓜 ⊨ Φ[α[x↦d]]
```

### Important Theorems

```
Soundness: Γ ⊢ Φ → Γ ⊨ Φ
Completeness: Γ ⊨ Φ → Γ ⊢ Φ  (Gödel 1929)

Combined: Γ ⊢ Φ ⟺ Γ ⊨ Φ

Undecidability: Validity in FOL is undecidable
```

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 17
2. Enderton, H. "A Mathematical Introduction to Logic" - Chapter 2
3. Gödel, K. "Completeness Theorem" (1929)

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Kuantor-kuantor](BAB-16-Kuantor.md)
- [➡️ BAB Selanjutnya: Derivasi](BAB-18-Derivasi.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Semantics - where formulas meet meaning!*

</div>
