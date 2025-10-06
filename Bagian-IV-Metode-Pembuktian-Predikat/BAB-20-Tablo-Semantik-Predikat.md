# BAB 20: Tablo Semantik Predikat (Semantic Tableaux for FOL)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-19-Ekuivalen-Logis-Predikat.md) | [➡️ BAB Selanjutnya](BAB-21-Bentuk-Normal-Prenex.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami semantic tableaux untuk FOL
- ✅ Menerapkan quantifier expansion rules (γ dan δ rules)
- ✅ Memahami instantiation dan unification
- ✅ Membangun tableaux proofs untuk FOL formulas
- ✅ Menerapkan free variable tableaux

---

## 20.1 Pendahuluan

### Review: Propositional Tableaux

**Recall BAB 9**: Semantic tableaux untuk propositional logic
- α-rules (conjunction-like): expand to both branches
- β-rules (disjunction-like): split into two branches
- Close branch when find P and ¬P

**Extension to FOL**: Add rules untuk quantifiers!
- **γ-rules** (universal ∀): instantiate repeatedly
- **δ-rules** (existential ∃): instantiate once with fresh constant

---

### Key Difference: Quantifiers

**Propositional**: Finite formulas, **decidable**

**First-Order**: 
- Quantifiers can be instantiated **infinitely** many times
- **Semi-decidable** (may not terminate)
- Need strategy for instantiation

---

## 20.2 Review: α and β Rules

### α-Rules (Conjunction-Like)

**Same as propositional**:

| Formula | Type | Components |
|---------|------|------------|
| Φ ∧ Ψ | α | α₁ = Φ, α₂ = Ψ |
| ¬(Φ ∨ Ψ) | α | α₁ = ¬Φ, α₂ = ¬Ψ |
| ¬(Φ → Ψ) | α | α₁ = Φ, α₂ = ¬Ψ |

**Rule**: Add both α₁ and α₂ to **same branch**:
```
    Φ
    |
   α₁
   α₂
```

---

### β-Rules (Disjunction-Like)

**Same as propositional**:

| Formula | Type | Components |
|---------|------|------------|
| Φ ∨ Ψ | β | β₁ = Φ, β₂ = Ψ |
| ¬(Φ ∧ Ψ) | β | β₁ = ¬Φ, β₂ = ¬Ψ |
| Φ → Ψ | β | β₁ = ¬Φ, β₂ = Ψ |

**Rule**: Split into **two branches**:
```
    Φ
   / \
  β₁ β₂
```

---

## 20.3 γ-Rules (Universal Quantifier)

### Universal ∀ - Can Use Multiple Times

**γ-formulas**:

| Formula | Type | Instantiation |
|---------|------|---------------|
| ∀x Φ(x) | γ | γ(t) = Φ(t) for any term t |
| ¬∃x Φ(x) | γ | γ(t) = ¬Φ(t) for any term t |

**Rule**: Can instantiate **multiple times** dengan different terms:
```
  ∀x Φ(x)
     |
   Φ(t₁)    (for any term t₁)
   Φ(t₂)    (for any term t₂)
   Φ(t₃)    (for any term t₃)
   ...
```

**Key**: ∀x Φ(x) **stays on branch** (not checked off) - can use again!

---

### Example 20.1: γ-Rule Application

**Tableau for**: `∀x P(x), ¬P(a) ⊢ ⊥`

```
1. ∀x P(x)         [Premise, γ]
2. ¬P(a)           [Negated conclusion]
3. P(a)            [From 1, instantiate with x=a]
   ×               [Closure: 2 and 3 contradict]
```

**Explanation**:
- Line 1: Universal formula (can instantiate)
- Line 3: Instantiate ∀x P(x) with t=a to get P(a)
- Closes because ¬P(a) and P(a)

✓ **Proved!**

---

## 20.4 δ-Rules (Existential Quantifier)

### Existential ∃ - Use Once with Fresh Constant

**δ-formulas**:

| Formula | Type | Instantiation |
|---------|------|---------------|
| ∃x Φ(x) | δ | δ(c) = Φ(c) for **fresh** c |
| ¬∀x Φ(x) | δ | δ(c) = ¬Φ(c) for **fresh** c |

**Rule**: Instantiate **once** dengan **fresh constant** (Skolem constant):
```
  ∃x Φ(x)
     |
   Φ(c)     c is NEW (fresh, not used before)
   ✓        Check off (used)
```

**Key**: 
- Use ∃x Φ(x) **only once**
- c must be **fresh** (not appear anywhere before)
- Check off ∃x Φ(x) after use

---

### Example 20.2: δ-Rule Application

**Tableau for**: `∃x P(x), ∀x (P(x) → Q(x)) ⊢ ∃x Q(x)`

```
1. ∃x P(x)              [Premise, δ]
2. ∀x (P(x) → Q(x))     [Premise, γ]
3. ¬∃x Q(x)             [Negated conclusion]
4. ∀x ¬Q(x)             [From 3, ¬∃ = ∀¬]
5. P(c)                 [From 1, fresh constant c, ✓]
6. P(c) → Q(c)          [From 2, instantiate with c]
7. ¬Q(c)                [From 4, instantiate with c]
     /  \
8. ¬P(c)  Q(c)          [From 6, β-rule]
    ×      ×            [Left: 5,8; Right: 7,8]
```

**Both branches close** → **Proved!** ✓

---

## 20.5 Instantiation Strategy

### Which Terms to Use?

**Problem**: ∀x Φ(x) can be instantiated with **any** term - which ones?

**Strategy**:
1. **Start with constants** already in tableau
2. Use **Skolem constants** from δ-rules
3. If no constants, use **arbitrary fresh** constant
4. Try **function applications** if functions present

---

### Example 20.3: Strategic Instantiation

**Prove**: `∀x (P(x) → Q(x)), ∃x P(x) ⊢ ∃x Q(x)`

```
1. ∀x (P(x) → Q(x))     [Premise, γ]
2. ∃x P(x)              [Premise, δ]
3. ¬∃x Q(x)             [Negated conclusion]
4. ∀x ¬Q(x)             [From 3]
5. P(c)                 [From 2, fresh c, ✓]

Now instantiate universals with c:
6. P(c) → Q(c)          [From 1 with t=c]
7. ¬Q(c)                [From 4 with t=c]
     /  \
8. ¬P(c)  Q(c)          [From 6]
    ×      ×            [Close both branches]
```

**Key**: Instantiate with **c** (from existential) to find contradiction!

✓ **Proved!**

---

## 20.6 Complete Example Proofs

### Example 20.4: Nested Quantifiers

**Prove**: `∀x ∃y Loves(x, y) ⊢ ∃y ∃x Loves(x, y)`

```
1. ∀x ∃y Loves(x, y)         [Premise, γ]
2. ¬∃y ∃x Loves(x, y)        [Negated conclusion]
3. ∀y ¬∃x Loves(x, y)        [From 2]
4. ∀y ∀x ¬Loves(x, y)        [From 3]
5. ∃y Loves(a, y)            [From 1 with t=a (fresh), γ still usable]
6. Loves(a, b)               [From 5 with fresh b, ✓]
7. ∀x ¬Loves(x, b)           [From 4 with t=b]
8. ¬Loves(a, b)              [From 7 with t=a]
   ×                         [Closes: 6 and 8]
```

✓ **Proved!**

---

### Example 20.5: Function Symbols

**Prove**: `∀x P(x, f(x)), ∀x∀y (P(x,y) → Q(y)) ⊢ ∀x Q(f(x))`

```
1. ∀x P(x, f(x))             [Premise, γ]
2. ∀x∀y (P(x,y) → Q(y))      [Premise, γ]
3. ¬∀x Q(f(x))               [Negated conclusion]
4. ∃x ¬Q(f(x))               [From 3]
5. ¬Q(f(c))                  [From 4, fresh c, ✓]
6. P(c, f(c))                [From 1 with t=c]
7. ∀y (P(c,y) → Q(y))        [From 2 with x=c]
8. P(c, f(c)) → Q(f(c))      [From 7 with y=f(c)]
      /    \
9. ¬P(c,f(c))  Q(f(c))       [From 8]
     ×          ×             [Left: 6,9; Right: 5,9]
```

✓ **Proved!**

---

## 20.7 Free Variable Tableaux

### The Idea

**Problem**: Ground tableaux may need many instantiations.

**Solution**: Use **free variables** instead of constants, find **unifying substitution**.

**Free variable**: Placeholder that can be instantiated later.

---

### Unification

**Unifier** θ is substitution that makes terms equal:

**Example**:
```
t₁ = P(x, f(y))
t₂ = P(a, f(b))

Unifier: θ = {x/a, y/b}

t₁θ = P(a, f(b))
t₂θ = P(a, f(b))  ✓ Unified!
```

---

### Free Variable Tableau Rules

**Modified rules**:

**γ-rule**: `∀x Φ(x)` instantiate with **free variable** x (not bound)

**δ-rule**: `∃x Φ(x)` instantiate with **fresh free variable** or **Skolem function**

**Closure**: Close when have P(s) and ¬P(t) where s and t **unifiable**.

---

### Example 20.6: Free Variable Tableau

**Prove**: `∀x P(x) ⊢ ∃x P(x)`

**Traditional**:
```
1. ∀x P(x)
2. ¬∃x P(x)
3. ∀x ¬P(x)
4. P(a)          [From 1 with a]
5. ¬P(a)         [From 3 with a]
   ×
```

**Free variable**:
```
1. ∀x P(x)
2. ¬∃x P(x)
3. ∀x ¬P(x)
4. P(X)          [From 1 with free var X]
5. ¬P(Y)         [From 3 with free var Y]
   ×             [Unify X=Y, close]
```

**Advantage**: Don't need to guess instantiation - unification finds it!

---

## 20.8 Termination and Completeness

### Non-Termination in FOL

**FOL tableaux** may **not terminate**:

**Example**: `∀x ∃y R(x, y) ⊬ ∃y ∀x R(x, y)`

**Tableau** will keep instantiating forever trying to find proof (which doesn't exist).

**Semi-decidable**:
- If **valid**, tableau **will** close (eventually)
- If **invalid**, tableau may **not** terminate

---

### Fairness Condition

**Strategy for completeness**:

**Fair tableau**: Every formula eventually gets expanded on every open branch.

**Ensures**: If formula has closed tableau, fair strategy will find it.

**Implementation**:
- Systematic expansion (breadth-first)
- Don't ignore any formula indefinitely

---

## 20.9 Aplikasi: Automated Theorem Proving

### Tableau-Based Provers

**Modern provers** use tableaux variants:
- **Connection Tableaux** (more efficient)
- **Free Variable Tableaux** (with unification)
- **Hyper Tableaux** (optimized for Horn clauses)

**Examples**:
- **SETHEO** (Set of support + tableaux)
- **leanTAP** (Minimal Prolog tableaux prover)

---

### Implementation Sketch

```python
from dataclasses import dataclass
from typing import List, Set, Optional

@dataclass
class Formula:
    """Base class for formulas"""
    pass

@dataclass
class Atomic(Formula):
    pred: str
    args: List[str]
    
    def __str__(self):
        args_str = ",".join(self.args)
        return f"{self.pred}({args_str})"

@dataclass
class Not(Formula):
    formula: Formula
    
    def __str__(self):
        return f"¬{self.formula}"

@dataclass
class And(Formula):
    left: Formula
    right: Formula

@dataclass
class Forall(Formula):
    var: str
    formula: Formula
    
    def __str__(self):
        return f"∀{self.var} {self.formula}"

@dataclass
class Exists(Formula):
    var: str
    formula: Formula
    
    def __str__(self):
        return f"∃{self.var} {self.formula}"

class Branch:
    """Tableau branch"""
    def __init__(self):
        self.formulas: List[Formula] = []
        self.used_constants: Set[str] = set()
        self.fresh_counter = 0
    
    def add(self, formula: Formula):
        self.formulas.append(formula)
    
    def fresh_constant(self) -> str:
        """Generate fresh Skolem constant"""
        c = f"c{self.fresh_counter}"
        self.fresh_counter += 1
        self.used_constants.add(c)
        return c
    
    def is_closed(self) -> bool:
        """Check if branch has contradiction"""
        atomics = []
        negated_atomics = []
        
        for f in self.formulas:
            if isinstance(f, Atomic):
                atomics.append(f)
            elif isinstance(f, Not) and isinstance(f.formula, Atomic):
                negated_atomics.append(f.formula)
        
        # Check for P and ¬P
        for a in atomics:
            if any(self.atoms_equal(a, na) for na in negated_atomics):
                return True
        
        return False
    
    def atoms_equal(self, a1: Atomic, a2: Atomic) -> bool:
        """Simple equality check (no unification)"""
        return (a1.pred == a2.pred and 
                a1.args == a2.args)

def substitute(formula: Formula, var: str, term: str) -> Formula:
    """Substitute term for variable in formula"""
    if isinstance(formula, Atomic):
        new_args = [term if arg == var else arg for arg in formula.args]
        return Atomic(formula.pred, new_args)
    elif isinstance(formula, Not):
        return Not(substitute(formula.formula, var, term))
    # ... other cases
    return formula

def expand_tableau(branch: Branch, depth_limit: int = 10) -> bool:
    """
    Simple tableau expansion
    Returns True if branch closes
    """
    if branch.is_closed():
        return True
    
    if depth_limit <= 0:
        return False  # Give up (may be non-terminating)
    
    # Try to expand formulas
    for formula in branch.formulas:
        if isinstance(formula, And):
            # α-rule
            branch.add(formula.left)
            branch.add(formula.right)
            return expand_tableau(branch, depth_limit - 1)
        
        elif isinstance(formula, Exists):
            # δ-rule: instantiate with fresh constant
            c = branch.fresh_constant()
            instantiated = substitute(formula.formula, formula.var, c)
            branch.add(instantiated)
            return expand_tableau(branch, depth_limit - 1)
        
        elif isinstance(formula, Forall):
            # γ-rule: try instantiating with existing constants
            if not branch.used_constants:
                # No constants yet, use fresh one
                c = branch.fresh_constant()
                branch.used_constants.add(c)
            
            for c in branch.used_constants:
                instantiated = substitute(formula.formula, formula.var, c)
                branch.add(instantiated)
                if expand_tableau(branch, depth_limit - 1):
                    return True
            
            return False
    
    return False

# Example usage
if __name__ == "__main__":
    # Prove: ∀x P(x), ¬P(a) ⊢ ⊥
    branch = Branch()
    
    # Premises
    branch.add(Forall('x', Atomic('P', ['x'])))
    branch.add(Not(Atomic('P', ['a'])))
    branch.used_constants.add('a')
    
    print("Initial branch:")
    for f in branch.formulas:
        print(f"  {f}")
    
    closed = expand_tableau(branch, depth_limit=5)
    
    print(f"\nBranch closed: {closed}")
    print("\nExpanded formulas:")
    for f in branch.formulas:
        print(f"  {f}")
```

---

## 20.10 Latihan dan Soal

### Latihan 1: Simple Quantifier Proof

**Prove**: `∀x (P(x) → Q(x)), P(a) ⊢ Q(a)`

<details>
<summary>Lihat Solusi</summary>

```
1. ∀x (P(x) → Q(x))     [Premise, γ]
2. P(a)                  [Premise]
3. ¬Q(a)                 [Negated conclusion]
4. P(a) → Q(a)           [From 1, instantiate with a]
      /   \
5. ¬P(a)   Q(a)          [From 4, β-rule]
    ×       ×            [Left: 2,5; Right: 3,5]
```

✓ **Proved!**
</details>

---

### Latihan 2: Existential Quantifier

**Prove**: `∃x P(x), ∀x (P(x) → Q(x)) ⊢ ∃x Q(x)`

<details>
<summary>Lihat Solusi</summary>

```
1. ∃x P(x)               [Premise, δ]
2. ∀x (P(x) → Q(x))      [Premise, γ]
3. ¬∃x Q(x)              [Negated conclusion]
4. ∀x ¬Q(x)              [From 3, ¬∃=∀¬]
5. P(c)                  [From 1, fresh c, ✓]
6. P(c) → Q(c)           [From 2, instantiate with c]
7. ¬Q(c)                 [From 4, instantiate with c]
      /   \
8. ¬P(c)   Q(c)          [From 6]
    ×       ×            [Left: 5,8; Right: 7,8]
```

✓ **Proved!**
</details>

---

### Latihan 3: Nested Quantifiers

**Prove**: `∀x ∃y R(x,y), ∀x∀y (R(x,y) → S(y)) ⊢ ∀x ∃y S(y)`

<details>
<summary>Lihat Solusi</summary>

```
1. ∀x ∃y R(x,y)          [Premise, γ]
2. ∀x∀y (R(x,y) → S(y))  [Premise, γ]
3. ¬∀x ∃y S(y)           [Negated conclusion]
4. ∃x ∀y ¬S(y)           [From 3]
5. ∀y ¬S(y)              [From 4, with constant a, ✓]
6. ∃y R(a,y)             [From 1, instantiate with a]
7. R(a,b)                [From 6, fresh b, ✓]
8. ∀y (R(a,y) → S(y))    [From 2, instantiate with a]
9. R(a,b) → S(b)         [From 8, instantiate with b]
10. ¬S(b)                [From 5, instantiate with b]
       /   \
11. ¬R(a,b) S(b)         [From 9]
      ×      ×           [Left: 7,11; Right: 10,11]
```

✓ **Proved!**
</details>

---

### Latihan 4: Invalid Formula

**Can you close**: `∃x P(x) ⊢ ∀x P(x)`?

<details>
<summary>Lihat Solusi</summary>

```
1. ∃x P(x)               [Premise, δ]
2. ¬∀x P(x)              [Negated conclusion]
3. ∃x ¬P(x)              [From 2]
4. P(c)                  [From 1, fresh c, ✓]
5. ¬P(d)                 [From 3, fresh d, ✓]
   ?                     [Cannot close! c ≠ d]
```

**Cannot close!** This is **not valid**.

**Countermodel**:
- Domain: {1, 2}
- P(1) = TRUE
- P(2) = FALSE

Then ∃x P(x) is TRUE but ∀x P(x) is FALSE. ✗
</details>

---

## 20.11 Ringkasan

### Key Takeaways

✅ **α, β rules** same as propositional logic

✅ **γ-rule** (∀): Instantiate multiple times, formula stays on branch

✅ **δ-rule** (∃): Instantiate once with fresh constant, check off

✅ **Strategy**: Use Skolem constants from δ-rules for γ-instantiation

✅ **Semi-decidable**: May not terminate for invalid formulas

### Quantifier Rules Summary

```
γ-rules (Universal):
  ∀x Φ(x)  →  Φ(t)  for any term t
  ¬∃x Φ(x) →  ¬Φ(t) for any term t
  [Can use multiple times, stays on branch]

δ-rules (Existential):
  ∃x Φ(x)  →  Φ(c)  for FRESH c
  ¬∀x Φ(x) →  ¬Φ(c) for FRESH c
  [Use once, check off]
```

### Instantiation Strategy

1. Start with constants already present
2. Use Skolem constants from δ-rules
3. Try function applications
4. If needed, introduce fresh constant

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 20
2. Fitting, M. "First-Order Logic and Automated Theorem Proving"
3. Smullyan, R. "First-Order Logic" (1968)

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Ekuivalen Logis Predikat](BAB-19-Ekuivalen-Logis-Predikat.md)
- [➡️ BAB Selanjutnya: Bentuk Normal Prenex](BAB-21-Bentuk-Normal-Prenex.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Tableaux - systematic proof search for FOL!*

</div>
