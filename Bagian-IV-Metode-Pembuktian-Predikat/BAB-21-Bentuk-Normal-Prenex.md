# BAB 21: Bentuk Normal Prenex (Prenex Normal Form)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-20-Tablo-Semantik-Predikat.md) | [➡️ BAB Selanjutnya](BAB-22-Resolusi-Predikat.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami Prenex Normal Form (PNF) secara detail
- ✅ Mengkonversi formula FOL ke PNF
- ✅ Menerapkan miniscoping untuk optimisasi
- ✅ Memahami hubungan PNF dengan Skolemization
- ✅ Menggunakan PNF untuk automated theorem proving

---

## 21.1 Pendahuluan

### Apa itu Prenex Normal Form?

> **Prenex Normal Form** (PNF): Formula dimana **semua quantifiers** berada di depan (prefix), diikuti **quantifier-free matrix**.

**General form**:
```
Q₁x₁ Q₂x₂ Q₃x₃ ... Qₙxₙ M
```

Where:
- **Qᵢ** ∈ {∀, ∃} (quantifier)
- **xᵢ** adalah variable
- **M** adalah **matrix** (quantifier-free formula)

---

### Examples

**PNF** ✓:
```
∀x ∃y ∀z (P(x,y) → Q(y,z))
∃x ∀y (R(x) ∧ S(y))
∀x (P(x) ∨ Q(x))
```

**NOT PNF** ✗:
```
∀x P(x) → ∃y Q(y)           (quantifiers not all in front)
∀x (P(x) → ∃y R(x,y))       (∃y inside)
(∃x P(x)) ∧ (∀y Q(y))       (quantifiers separated)
```

---

### Why PNF?

**Applications**:
1. **Automated theorem proving**: Simplifies quantifier handling
2. **Resolution**: Need clausal form (from PNF + Skolemization)
3. **Herbrand's theorem**: Works on quantifier-free formulas
4. **Unification**: Easier without nested quantifiers

**Theoretical importance**: Every FOL formula can be converted to equivalent PNF!

---

## 21.2 PNF Conversion Algorithm

### Overview

**Steps**:
1. **Eliminate → and ↔** (use ¬, ∨, ∧)
2. **Move ¬ inward** (push to atoms using De Morgan)
3. **Standardize variables** (rename to avoid conflicts)
4. **Move quantifiers outward** (pull to front)

---

### Step 1: Eliminate Implications

**Equivalences**:
```
P → Q  ≡  ¬P ∨ Q
P ↔ Q  ≡  (P → Q) ∧ (Q → P)
       ≡  (¬P ∨ Q) ∧ (¬Q ∨ P)
```

**Example 21.1**:
```
∀x (P(x) → Q(x))
≡ ∀x (¬P(x) ∨ Q(x))
```

---

### Step 2: Move Negations Inward

**Equivalences**:
```
¬¬Φ ≡ Φ
¬(Φ ∧ Ψ) ≡ ¬Φ ∨ ¬Ψ
¬(Φ ∨ Ψ) ≡ ¬Φ ∧ ¬Ψ
¬∀x Φ ≡ ∃x ¬Φ
¬∃x Φ ≡ ∀x ¬Φ
```

**Goal**: Negations only in front of **atoms**.

**Example 21.2**:
```
¬∀x (P(x) ∧ Q(x))
≡ ∃x ¬(P(x) ∧ Q(x))
≡ ∃x (¬P(x) ∨ ¬Q(x))
```

---

### Step 3: Standardize Variables Apart

**Problem**: Variable name conflicts.

**Example conflict**:
```
(∀x P(x)) ∧ (∀x Q(x))
```

**Solution**: Rename bound variables to be unique:
```
≡ (∀x P(x)) ∧ (∀y Q(y))
```

**Rule**: Each quantifier binds **different** variable.

**Example 21.3**:
```
∀x (P(x) ∨ ∃x Q(x))         Confusing! (x used twice)
≡ ∀x (P(x) ∨ ∃y Q(y))      Better! (renamed inner x to y)
```

---

### Step 4: Move Quantifiers Outward

**Pulling rules**:

**From conjunction**:
```
(∀x Φ) ∧ Ψ  ≡  ∀x (Φ ∧ Ψ)    [if x not free in Ψ]
Φ ∧ (∀x Ψ)  ≡  ∀x (Φ ∧ Ψ)    [if x not free in Φ]
(∃x Φ) ∧ Ψ  ≡  ∃x (Φ ∧ Ψ)    [if x not free in Ψ]
Φ ∧ (∃x Ψ)  ≡  ∃x (Φ ∧ Ψ)    [if x not free in Φ]
```

**From disjunction**:
```
(∀x Φ) ∨ Ψ  ≡  ∀x (Φ ∨ Ψ)    [if x not free in Ψ]
Φ ∨ (∀x Ψ)  ≡  ∀x (Φ ∨ Ψ)    [if x not free in Φ]
(∃x Φ) ∨ Ψ  ≡  ∃x (Φ ∨ Ψ)    [if x not free in Ψ]
Φ ∨ (∃x Ψ)  ≡  ∃x (Φ ∨ Ψ)    [if x not free in Φ]
```

**Key**: Must standardize variables first to ensure "not free in" condition!

---

## 21.3 Complete Examples

### Example 21.4: Simple PNF

**Convert**: `∀x P(x) → ∃y Q(y)`

**Step 1**: Eliminate →
```
≡ ¬∀x P(x) ∨ ∃y Q(y)
```

**Step 2**: Move ¬ inward
```
≡ ∃x ¬P(x) ∨ ∃y Q(y)
```

**Step 3**: Standardize (already OK, different variables)

**Step 4**: Pull quantifiers out
```
≡ ∃x (¬P(x) ∨ ∃y Q(y))
≡ ∃x ∃y (¬P(x) ∨ Q(y))
```

**PNF**: `∃x ∃y (¬P(x) ∨ Q(y))` ✓

---

### Example 21.5: With Conjunction

**Convert**: `(∀x P(x)) ∧ (∀x Q(x))`

**Step 1**: No implications

**Step 2**: No negations to move

**Step 3**: Standardize variables
```
≡ (∀x P(x)) ∧ (∀y Q(y))     (rename second x to y)
```

**Step 4**: Pull quantifiers
```
≡ ∀x (P(x) ∧ ∀y Q(y))
≡ ∀x ∀y (P(x) ∧ Q(y))
```

**PNF**: `∀x ∀y (P(x) ∧ Q(y))` ✓

---

### Example 21.6: Complex Formula

**Convert**: `∀x (P(x) → ∃y R(x,y)) ∧ ∃z Q(z)`

**Step 1**: Eliminate →
```
≡ ∀x (¬P(x) ∨ ∃y R(x,y)) ∧ ∃z Q(z)
```

**Step 2**: No further negations

**Step 3**: Standardize (already OK)

**Step 4**: Pull quantifiers
```
≡ ∀x (¬P(x) ∨ ∃y R(x,y)) ∧ ∃z Q(z)
≡ ∀x ((¬P(x) ∨ ∃y R(x,y)) ∧ ∃z Q(z))    (pull ∀x over ∧)
≡ ∀x ∃y ((¬P(x) ∨ R(x,y)) ∧ ∃z Q(z))    (pull ∃y)
≡ ∀x ∃y ∃w ((¬P(x) ∨ R(x,y)) ∧ Q(w))    (rename z to w, pull out)
```

**PNF**: `∀x ∃y ∃w ((¬P(x) ∨ R(x,y)) ∧ Q(w))` ✓

---

### Example 21.7: Nested Quantifiers

**Convert**: `¬∀x (P(x) → ∀y (Q(y) → R(x,y)))`

**Step 1**: Eliminate →
```
≡ ¬∀x (¬P(x) ∨ ∀y (¬Q(y) ∨ R(x,y)))
```

**Step 2**: Move ¬ inward
```
≡ ∃x ¬(¬P(x) ∨ ∀y (¬Q(y) ∨ R(x,y)))
≡ ∃x (P(x) ∧ ¬∀y (¬Q(y) ∨ R(x,y)))
≡ ∃x (P(x) ∧ ∃y ¬(¬Q(y) ∨ R(x,y)))
≡ ∃x (P(x) ∧ ∃y (Q(y) ∧ ¬R(x,y)))
```

**Step 3**: Standardize (already OK)

**Step 4**: Pull quantifiers
```
≡ ∃x (P(x) ∧ ∃y (Q(y) ∧ ¬R(x,y)))
≡ ∃x ∃y (P(x) ∧ Q(y) ∧ ¬R(x,y))
```

**PNF**: `∃x ∃y (P(x) ∧ Q(y) ∧ ¬R(x,y))` ✓

---

## 21.4 Miniscoping

### The Idea

**Problem**: PNF may introduce **unnecessary** quantifier scope.

**Example**:
```
P ∧ (∀x Q(x))
```

**Naive PNF**:
```
∀x (P ∧ Q(x))    [x doesn't appear in P!]
```

**Better** (miniscoping):
```
P ∧ (∀x Q(x))    [Keep quantifier scope minimal]
```

---

### Miniscoping Principle

> **Miniscoping**: Keep quantifier **scope as small as possible**.

**Benefits**:
- **Smaller scope** = easier to reason
- **Fewer instantiations** needed
- **More efficient** automated proving

**Trade-off**: May not be full PNF, but often better!

---

### Example 21.8: Miniscoping Application

**Formula**: `(∃x P(x)) ∧ Q`

**Full PNF** (unnecessary):
```
∃x (P(x) ∧ Q)    [Q doesn't need x!]
```

**Miniscoped** (better):
```
(∃x P(x)) ∧ Q    [Keep Q outside]
```

**Advantage**: Q doesn't get duplicated in instantiations.

---

### Example 21.9: When to Use Miniscoping

**Formula**: `∀x (P(x) → Q) ∨ R`

**Full PNF**:
```
∀x ((P(x) → Q) ∨ R)
≡ ∀x ((¬P(x) ∨ Q) ∨ R)
```

**Miniscoped**:
```
(∀x (P(x) → Q)) ∨ R
```

**Even better** (factor out Q, R):
```
(∀x ¬P(x)) ∨ Q ∨ R    [if we simplify further]
```

**Choice depends on**: What's better for your prover!

---

## 21.5 Skolemization (Revisited)

### From PNF to Skolem Form

**Once in PNF**, easy to Skolemize!

**PNF**: `∀x₁ ∃y₁ ∀x₂ ∃y₂ M(x₁,y₁,x₂,y₂)`

**Skolemize**:
1. y₁ depends on x₁ → replace with f(x₁)
2. y₂ depends on x₁, x₂ → replace with g(x₁, x₂)

**Result**: `∀x₁ ∀x₂ M(x₁, f(x₁), x₂, g(x₁,x₂))`

---

### Example 21.10: Complete Skolemization

**Start**: `∀x ∃y ∀z ∃w P(x,y,z,w)`

**Already in PNF!**

**Skolemize**:
- y depends on x → f(x)
- w depends on x, z → g(x, z)

**Result**: `∀x ∀z P(x, f(x), z, g(x,z))`

**All ∃ removed!** Ready for resolution. ✓

---

### Example 21.11: PNF + Skolemization Pipeline

**Original**: `(∀x P(x)) → (∃y Q(y))`

**Step 1: Convert to PNF** (from Example 21.4):
```
∃x ∃y (¬P(x) ∨ Q(y))
```

**Step 2: Skolemize**:
- x doesn't depend on anything → constant a
- y doesn't depend on anything → constant b

**Result**: `¬P(a) ∨ Q(b)`

**Quantifier-free!** ✓

---

## 21.6 Applications in Automated Proving

### Resolution Theorem Proving

**Resolution** requires:
1. Convert to PNF
2. Skolemize (remove ∃)
3. Convert to CNF
4. Apply resolution

**Example workflow**:
```
∀x (P(x) → Q(x)), ∃x P(x) ⊢ ∃x Q(x)

1. Negate conclusion: ¬∃x Q(x) ≡ ∀x ¬Q(x)

2. Combine: ∀x (P(x) → Q(x)), ∃x P(x), ∀x ¬Q(x)

3. PNF: ∃y ∀x ((¬P(x) ∨ Q(x)) ∧ P(y) ∧ ¬Q(x))

4. Skolemize: ∀x ((¬P(x) ∨ Q(x)) ∧ P(a) ∧ ¬Q(x))

5. CNF: {¬P(x), Q(x)}, {P(a)}, {¬Q(x)}

6. Resolution: Derive ⊥
```

---

### Herbrand's Theorem

**Herbrand's Theorem**: FOL validity reducible to propositional validity on **Herbrand universe**.

**Requires**: Formula in PNF + Skolem form (only ∀ quantifiers).

**Herbrand Universe**: All ground terms constructible from constants and functions.

**Example**:
```
Signature: {a, f(·)}
Herbrand Universe: {a, f(a), f(f(a)), f(f(f(a))), ...}
```

**Instantiate** universal quantifiers with Herbrand terms → propositional formulas!

---

## 21.7 Implementasi

### Python: PNF Converter

```python
from dataclasses import dataclass
from typing import Union, Set

@dataclass
class Var:
    name: str

@dataclass
class Pred:
    name: str
    args: list

@dataclass
class Not:
    formula: 'Formula'

@dataclass
class And:
    left: 'Formula'
    right: 'Formula'

@dataclass
class Or:
    left: 'Formula'
    right: 'Formula'

@dataclass
class Implies:
    left: 'Formula'
    right: 'Formula'

@dataclass
class Forall:
    var: Var
    formula: 'Formula'

@dataclass
class Exists:
    var: Var
    formula: 'Formula'

Formula = Union[Pred, Not, And, Or, Implies, Forall, Exists]

def eliminate_implications(formula: Formula) -> Formula:
    """Step 1: Eliminate → and ↔"""
    if isinstance(formula, Implies):
        # P → Q ≡ ¬P ∨ Q
        left = eliminate_implications(formula.left)
        right = eliminate_implications(formula.right)
        return Or(Not(left), right)
    
    elif isinstance(formula, And):
        return And(
            eliminate_implications(formula.left),
            eliminate_implications(formula.right)
        )
    
    elif isinstance(formula, Or):
        return Or(
            eliminate_implications(formula.left),
            eliminate_implications(formula.right)
        )
    
    elif isinstance(formula, Not):
        return Not(eliminate_implications(formula.formula))
    
    elif isinstance(formula, Forall):
        return Forall(formula.var, eliminate_implications(formula.formula))
    
    elif isinstance(formula, Exists):
        return Exists(formula.var, eliminate_implications(formula.formula))
    
    else:
        return formula

def move_negations_inward(formula: Formula) -> Formula:
    """Step 2: Push ¬ to atoms"""
    if isinstance(formula, Not):
        inner = formula.formula
        
        if isinstance(inner, Not):
            # ¬¬Φ ≡ Φ
            return move_negations_inward(inner.formula)
        
        elif isinstance(inner, And):
            # ¬(Φ ∧ Ψ) ≡ ¬Φ ∨ ¬Ψ
            return Or(
                move_negations_inward(Not(inner.left)),
                move_negations_inward(Not(inner.right))
            )
        
        elif isinstance(inner, Or):
            # ¬(Φ ∨ Ψ) ≡ ¬Φ ∧ ¬Ψ
            return And(
                move_negations_inward(Not(inner.left)),
                move_negations_inward(Not(inner.right))
            )
        
        elif isinstance(inner, Forall):
            # ¬∀x Φ ≡ ∃x ¬Φ
            return Exists(
                inner.var,
                move_negations_inward(Not(inner.formula))
            )
        
        elif isinstance(inner, Exists):
            # ¬∃x Φ ≡ ∀x ¬Φ
            return Forall(
                inner.var,
                move_negations_inward(Not(inner.formula))
            )
        
        else:
            # Atomic, keep negation
            return formula
    
    elif isinstance(formula, And):
        return And(
            move_negations_inward(formula.left),
            move_negations_inward(formula.right)
        )
    
    elif isinstance(formula, Or):
        return Or(
            move_negations_inward(formula.left),
            move_negations_inward(formula.right)
        )
    
    elif isinstance(formula, Forall):
        return Forall(formula.var, move_negations_inward(formula.formula))
    
    elif isinstance(formula, Exists):
        return Exists(formula.var, move_negations_inward(formula.formula))
    
    else:
        return formula

def get_free_vars(formula: Formula) -> Set[str]:
    """Get free variables in formula"""
    if isinstance(formula, Pred):
        return {arg for arg in formula.args if isinstance(arg, str) and arg.islower()}
    elif isinstance(formula, Not):
        return get_free_vars(formula.formula)
    elif isinstance(formula, (And, Or)):
        return get_free_vars(formula.left) | get_free_vars(formula.right)
    elif isinstance(formula, (Forall, Exists)):
        inner_vars = get_free_vars(formula.formula)
        inner_vars.discard(formula.var.name)
        return inner_vars
    else:
        return set()

def pull_quantifiers(formula: Formula) -> Formula:
    """Step 4: Pull quantifiers to front (simplified)"""
    # Simplified version - would need full implementation for production
    
    if isinstance(formula, And):
        left = pull_quantifiers(formula.left)
        right = pull_quantifiers(formula.right)
        
        # Try to pull quantifiers from left
        if isinstance(left, Forall) and left.var.name not in get_free_vars(right):
            # ∀x Φ ∧ Ψ ≡ ∀x (Φ ∧ Ψ)
            return Forall(left.var, pull_quantifiers(And(left.formula, right)))
        
        elif isinstance(left, Exists) and left.var.name not in get_free_vars(right):
            # ∃x Φ ∧ Ψ ≡ ∃x (Φ ∧ Ψ)
            return Exists(left.var, pull_quantifiers(And(left.formula, right)))
        
        # Similarly for right side...
        
        return And(left, right)
    
    elif isinstance(formula, Or):
        # Similar to And case
        left = pull_quantifiers(formula.left)
        right = pull_quantifiers(formula.right)
        return Or(left, right)
    
    else:
        return formula

def to_pnf(formula: Formula) -> Formula:
    """Convert formula to Prenex Normal Form"""
    # Step 1: Eliminate implications
    formula = eliminate_implications(formula)
    
    # Step 2: Move negations inward
    formula = move_negations_inward(formula)
    
    # Step 3: Standardize variables (simplified - skip for now)
    
    # Step 4: Pull quantifiers outward
    formula = pull_quantifiers(formula)
    
    return formula

# Example usage
if __name__ == "__main__":
    # Build: ∀x P(x) → ∃y Q(y)
    x = Var('x')
    y = Var('y')
    
    formula = Implies(
        Forall(x, Pred('P', ['x'])),
        Exists(y, Pred('Q', ['y']))
    )
    
    print("Original:", formula)
    
    pnf = to_pnf(formula)
    print("PNF:", pnf)
```

---

## 21.8 Latihan dan Soal

### Latihan 1: Simple PNF

Convert to PNF: `(∃x P(x)) → (∀y Q(y))`

<details>
<summary>Lihat Solusi</summary>

**Step 1**: Eliminate →
```
≡ ¬(∃x P(x)) ∨ (∀y Q(y))
```

**Step 2**: Move ¬ inward
```
≡ (∀x ¬P(x)) ∨ (∀y Q(y))
```

**Step 3**: Standardize (already different)

**Step 4**: Pull quantifiers
```
≡ ∀x (¬P(x) ∨ ∀y Q(y))
≡ ∀x ∀y (¬P(x) ∨ Q(y))
```

**PNF**: `∀x ∀y (¬P(x) ∨ Q(y))` ✓
</details>

---

### Latihan 2: Negation First

Convert to PNF: `¬(∀x P(x) ∧ ∃y Q(y))`

<details>
<summary>Lihat Solusi</summary>

**Step 1**: No implications

**Step 2**: Move ¬ inward
```
¬(∀x P(x) ∧ ∃y Q(y))
≡ ¬∀x P(x) ∨ ¬∃y Q(y)
≡ ∃x ¬P(x) ∨ ∀y ¬Q(y)
```

**Step 3**: Standardize (already OK)

**Step 4**: Pull quantifiers
```
≡ ∃x (¬P(x) ∨ ∀y ¬Q(y))
≡ ∃x ∀y (¬P(x) ∨ ¬Q(y))
```

**PNF**: `∃x ∀y (¬P(x) ∨ ¬Q(y))` ✓
</details>

---

### Latihan 3: Standardization Needed

Convert to PNF: `(∀x P(x)) ∨ (∃x Q(x))`

<details>
<summary>Lihat Solusi</summary>

**Step 1**: No implications

**Step 2**: No negations to move

**Step 3**: Standardize (CRITICAL!)
```
≡ (∀x P(x)) ∨ (∃y Q(y))    [Rename second x to y]
```

**Step 4**: Pull quantifiers
```
≡ ∀x (P(x) ∨ ∃y Q(y))
≡ ∀x ∃y (P(x) ∨ Q(y))
```

**PNF**: `∀x ∃y (P(x) ∨ Q(y))` ✓

**Note**: Without standardization, would have name conflict!
</details>

---

### Latihan 4: Complex Formula

Convert to PNF: `∀x (P(x) → ∃y (Q(y) ∧ R(x,y))) → ∃z S(z)`

<details>
<summary>Lihat Solusi</summary>

**Step 1**: Eliminate →
```
≡ ¬∀x (¬P(x) ∨ ∃y (Q(y) ∧ R(x,y))) ∨ ∃z S(z)
```

**Step 2**: Move ¬ inward
```
≡ ∃x ¬(¬P(x) ∨ ∃y (Q(y) ∧ R(x,y))) ∨ ∃z S(z)
≡ ∃x (P(x) ∧ ¬∃y (Q(y) ∧ R(x,y))) ∨ ∃z S(z)
≡ ∃x (P(x) ∧ ∀y ¬(Q(y) ∧ R(x,y))) ∨ ∃z S(z)
≡ ∃x (P(x) ∧ ∀y (¬Q(y) ∨ ¬R(x,y))) ∨ ∃z S(z)
```

**Step 3**: Standardize (rename if needed)

**Step 4**: Pull quantifiers
```
≡ ∃x ∀y (P(x) ∧ (¬Q(y) ∨ ¬R(x,y))) ∨ ∃z S(z)
≡ ∃x ∀y ∃w ((P(x) ∧ (¬Q(y) ∨ ¬R(x,y))) ∨ S(w))
```

**PNF**: `∃x ∀y ∃w ((P(x) ∧ (¬Q(y) ∨ ¬R(x,y))) ∨ S(w))` ✓
</details>

---

## 21.9 Ringkasan

### Key Takeaways

✅ **PNF**: All quantifiers at front, quantifier-free matrix

✅ **Conversion**: Eliminate →, move ¬, standardize, pull quantifiers

✅ **Miniscoping**: Keep quantifier scope minimal for efficiency

✅ **Skolemization**: Easy from PNF - replace ∃ with functions

✅ **Applications**: Resolution, Herbrand's theorem, automated proving

### PNF Algorithm

```
1. Eliminate →, ↔:
   P → Q  ≡  ¬P ∨ Q

2. Move ¬ inward:
   ¬∀x Φ ≡ ∃x ¬Φ
   ¬∃x Φ ≡ ∀x ¬Φ
   ¬(Φ ∧ Ψ) ≡ ¬Φ ∨ ¬Ψ
   ¬(Φ ∨ Ψ) ≡ ¬Φ ∧ ¬Ψ

3. Standardize variables:
   Rename to avoid conflicts

4. Pull quantifiers out:
   (∀x Φ) ∧ Ψ ≡ ∀x (Φ ∧ Ψ)  [if x ∉ FV(Ψ)]
   (∃x Φ) ∨ Ψ ≡ ∃x (Φ ∨ Ψ)  [if x ∉ FV(Ψ)]
```

### When to Use PNF

**Use PNF when**:
- Preparing for resolution
- Applying Herbrand's theorem
- Skolemization needed
- Standardized quantifier handling

**Consider miniscoping when**:
- Efficiency matters
- Scope reduction helps
- Interactive proving

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 21
2. Enderton, H. "A Mathematical Introduction to Logic"
3. Fitting, M. "First-Order Logic and Automated Theorem Proving"

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Tablo Semantik Predikat](BAB-20-Tablo-Semantik-Predikat.md)
- [➡️ BAB Selanjutnya: Resolusi Predikat](BAB-22-Resolusi-Predikat.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Prenex Normal Form - standardization for automation!*

</div>
