# BAB 19: Ekuivalen Logis Predikat (Logical Equivalence in FOL)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](../Bagian-III-Logika-Predikat/BAB-18-Derivasi.md) | [➡️ BAB Selanjutnya](BAB-20-Tablo-Semantik-Predikat.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami logical equivalence dalam FOL
- ✅ Menerapkan quantifier equivalences dan transformations
- ✅ Menggunakan prenex normal form
- ✅ Melakukan formula simplification
- ✅ Memahami skolemization

---

## 19.1 Pendahuluan

### Logical Equivalence di FOL

**Recall**: Propositional equivalence (BAB 6)
- P ∧ Q ≡ Q ∧ P (commutativity)
- P ∨ (Q ∨ R) ≡ (P ∨ Q) ∨ R (associativity)
- dll.

**Extension to FOL**: Add equivalences untuk quantifiers!
- ∀x ∀y Φ ≡ ∀y ∀x Φ
- ¬∀x Φ ≡ ∃x ¬Φ
- dll.

---

### Definisi

> **Φ ≡ Ψ** (Φ is logically equivalent to Ψ) iff:
> 
> For **every** interpretation 𝓜 and assignment α:  
> 𝓜 ⊨ Φ[α] ⟺ 𝓜 ⊨ Ψ[α]

**In other words**: Same truth value in **all** models.

**Notation**: Φ ≡ Ψ or Φ ⟺ Ψ

---

## 19.2 Propositional Equivalences (Still Valid!)

### All Propositional Laws Apply

**Commutative**:
```
P ∧ Q ≡ Q ∧ P
P ∨ Q ≡ Q ∨ P
```

**Associative**:
```
(P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)
(P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R)
```

**Distributive**:
```
P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)
P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)
```

**De Morgan**:
```
¬(P ∧ Q) ≡ ¬P ∨ ¬Q
¬(P ∨ Q) ≡ ¬P ∧ ¬Q
```

**Implication**:
```
P → Q ≡ ¬P ∨ Q
```

**All these work in FOL too!**

---

## 19.3 Quantifier Equivalences

### Same Quantifier - Commutative

**Universal**:
```
∀x ∀y Φ(x,y) ≡ ∀y ∀x Φ(x,y)
```

**Existential**:
```
∃x ∃y Φ(x,y) ≡ ∃y ∃x Φ(x,y)
```

**Example 19.1**:
```
∀x ∀y Loves(x, y) ≡ ∀y ∀x Loves(x, y)

Both mean: "Everyone loves everyone"
Order doesn't matter for same quantifier! ✓
```

---

### Mixed Quantifiers - NOT Commutative!

**⚠️ NOT equivalent**:
```
∀x ∃y Φ(x,y) ≢ ∃y ∀x Φ(x,y)  (generally)
```

**Example 19.2**:
```
∀x ∃y Loves(x, y)  "Everyone loves someone"
∃y ∀x Loves(x, y)  "Someone is loved by everyone"

DIFFERENT meanings! ✗
```

**But ONE direction holds**:
```
∃y ∀x Φ(x,y) → ∀x ∃y Φ(x,y)  (valid implication)
```

---

## 19.4 Quantifier Negation (De Morgan)

### Negation Rules

**Universal negation**:
```
¬∀x Φ(x) ≡ ∃x ¬Φ(x)
```

**Existential negation**:
```
¬∃x Φ(x) ≡ ∀x ¬Φ(x)
```

**These are CRITICAL for formula manipulation!**

---

### Example 19.3: Negating Quantifiers

**Start**: `∀x (P(x) → Q(x))`

**Negate**:
```
¬∀x (P(x) → Q(x))
≡ ∃x ¬(P(x) → Q(x))           [¬∀ ≡ ∃¬]
≡ ∃x ¬(¬P(x) ∨ Q(x))          [→ equivalence]
≡ ∃x (P(x) ∧ ¬Q(x))           [De Morgan]
```

**Result**: "There exists x such that P(x) but not Q(x)"

---

### Example 19.4: Multiple Quantifiers

**Start**: `∀x ∃y Loves(x, y)`

**Negate**:
```
¬∀x ∃y Loves(x, y)
≡ ∃x ¬∃y Loves(x, y)          [¬∀ ≡ ∃¬]
≡ ∃x ∀y ¬Loves(x, y)          [¬∃ ≡ ∀¬]
```

**Result**: "Someone loves no one"

**Pattern**: Each quantifier **flips** (∀↔∃) and negation **moves inside**.

---

## 19.5 Distribution Laws

### Universal over Conjunction

**Valid**:
```
∀x (Φ(x) ∧ Ψ(x)) ≡ (∀x Φ(x)) ∧ (∀x Ψ(x))
```

**Example 19.5**:
```
∀x (Even(x) ∧ Prime(x))
≡ (∀x Even(x)) ∧ (∀x Prime(x))

"Everything is even and prime"
≡ "Everything is even AND everything is prime"
✓ Equivalent!
```

---

### Existential over Disjunction

**Valid**:
```
∃x (Φ(x) ∨ Ψ(x)) ≡ (∃x Φ(x)) ∨ (∃x Ψ(x))
```

**Example 19.6**:
```
∃x (Even(x) ∨ Prime(x))
≡ (∃x Even(x)) ∨ (∃x Prime(x))

"Something is even or prime"
≡ "Something is even OR something is prime"
✓ Equivalent!
```

---

### ⚠️ NON-Distribution

**NOT valid**:
```
∀x (Φ(x) ∨ Ψ(x)) ≢ (∀x Φ(x)) ∨ (∀x Ψ(x))
∃x (Φ(x) ∧ Ψ(x)) ≢ (∃x Φ(x)) ∧ (∃x Ψ(x))
```

**Counterexample**:
```
Domain: {1, 2}
Even(1) = F, Even(2) = T
Odd(1) = T, Odd(2) = F

∀x (Even(x) ∨ Odd(x)) = T  (every number is even or odd)
(∀x Even(x)) ∨ (∀x Odd(x)) = F ∨ F = F  (not all even, not all odd)

NOT equivalent! ✗
```

---

## 19.6 Vacuous Quantification

### When Variable Doesn't Appear

**If x doesn't appear free in Φ**:

```
∀x Φ ≡ Φ
∃x Φ ≡ Φ
```

**Example 19.7**:
```
∀x (P ∨ Q) ≡ P ∨ Q
∃y (2 + 2 = 4) ≡ (2 + 2 = 4)
```

**Quantifier is useless!** Can remove it.

---

### Pulling Out Constants

**If Φ doesn't contain x free**:

```
∀x (Φ ∧ Ψ(x)) ≡ Φ ∧ (∀x Ψ(x))
∀x (Φ ∨ Ψ(x)) ≡ Φ ∨ (∀x Ψ(x))
∃x (Φ ∧ Ψ(x)) ≡ Φ ∧ (∃x Ψ(x))
∃x (Φ ∨ Ψ(x)) ≡ Φ ∨ (∃x Ψ(x))
```

**Example 19.8**:
```
∀x (P ∧ Q(x)) ≡ P ∧ (∀x Q(x))

"For all x, P and Q(x)"
≡ "P and (for all x, Q(x))"
✓ Can factor out P!
```

---

## 19.7 Renaming Bound Variables

### α-Conversion

**Bound variables** can be renamed (if no capture):

```
∀x Φ(x) ≡ ∀y Φ(y)    [if y not free in Φ]
∃x Φ(x) ≡ ∃z Φ(z)    [if z not free in Φ]
```

**Example 19.9**:
```
∀x Human(x) ≡ ∀y Human(y) ≡ ∀person Human(person)

All equivalent! Variable name is just placeholder.
```

---

### Variable Capture (⚠️ Be Careful!)

**WRONG**:
```
∀x ∃y Loves(x, y) ≢ ∀y ∃y Loves(y, y)  ✗
```

**Why wrong?** 
- Renaming x to y **captures** the bound y!
- Second formula meaningless (y bound twice)

**Must choose fresh name**:
```
∀x ∃y Loves(x, y) ≡ ∀z ∃y Loves(z, y)  ✓
```

---

## 19.8 Prenex Normal Form

### Definisi

> **Prenex Normal Form** (PNF): All quantifiers at front.
> 
> Form: Q₁x₁ Q₂x₂ ... Qₙxₙ Φ
> 
> Where Qᵢ ∈ {∀, ∃} and Φ is **quantifier-free**.

**Examples**:
```
∀x ∃y ∀z (P(x) ∧ Q(y,z) → R(x,z))     PNF ✓
∀x (P(x) → ∃y Q(x,y))                  NOT PNF ✗
```

---

### Converting to PNF

**Algorithm**:
1. Eliminate → and ↔ (use ¬, ∨, ∧)
2. Move ¬ inward (De Morgan, quantifier negation)
3. Rename bound variables (avoid conflicts)
4. Move quantifiers outward

---

### Example 19.10: PNF Conversion

**Formula**: `∀x P(x) → ∃y Q(y)`

**Step 1**: Eliminate →
```
∀x P(x) → ∃y Q(y)
≡ ¬∀x P(x) ∨ ∃y Q(y)
```

**Step 2**: Move ¬ inward
```
≡ ∃x ¬P(x) ∨ ∃y Q(y)
```

**Step 3**: Rename (y already different from x, OK)

**Step 4**: Move quantifiers out
```
≡ ∃x (¬P(x) ∨ ∃y Q(y))
≡ ∃x ∃y (¬P(x) ∨ Q(y))
```

**Result**: `∃x ∃y (¬P(x) ∨ Q(y))` ✓ (PNF)

---

### Example 19.11: Complex PNF

**Formula**: `∀x (P(x) → ∃y R(x,y)) ∧ ∃z Q(z)`

**Step 1**: Eliminate →
```
≡ ∀x (¬P(x) ∨ ∃y R(x,y)) ∧ ∃z Q(z)
```

**Step 2**: Already no negations to move

**Step 3**: Rename z to avoid conflicts (say w)
```
≡ ∀x (¬P(x) ∨ ∃y R(x,y)) ∧ ∃w Q(w)
```

**Step 4**: Move quantifiers out
```
≡ ∀x ∃y (¬P(x) ∨ R(x,y)) ∧ ∃w Q(w)
≡ ∀x ∃y ∃w ((¬P(x) ∨ R(x,y)) ∧ Q(w))
```

**Result**: `∀x ∃y ∃w ((¬P(x) ∨ R(x,y)) ∧ Q(w))` ✓ (PNF)

---

## 19.9 Skolemization

### The Idea

**Problem**: ∃ quantifiers complicate automated reasoning.

**Solution**: Replace ∃x with **Skolem function** that "picks" witness.

**Skolemization** converts formula to **equisatisfiable** form (not equivalent!) without ∃.

---

### Skolem Functions

**If**: `∀x₁ ... ∀xₙ ∃y Φ(x₁,...,xₙ,y)`

**Replace y with**: `f(x₁,...,xₙ)` (Skolem function)

**Result**: `∀x₁ ... ∀xₙ Φ(x₁,...,xₙ,f(x₁,...,xₙ))`

**f** is **new function symbol** (fresh).

---

### Example 19.12: Simple Skolemization

**Formula**: `∃y P(y)`

**No ∀ before ∃, so y doesn't depend on anything**:

**Replace y with**: constant c (Skolem constant)

**Result**: `P(c)`

---

### Example 19.13: Skolemization with Dependencies

**Formula**: `∀x ∃y Loves(x, y)`

**y depends on x** (for each x, different y)

**Replace y with**: `f(x)` (Skolem function)

**Result**: `∀x Loves(x, f(x))`

**Meaning**: "For each x, x loves f(x)" (f picks who x loves)

---

### Example 19.14: Multiple Quantifiers

**Formula**: `∀x ∃y ∀z ∃w P(x,y,z,w)`

**Process left-to-right**:

**∃y depends on**: x  
**Replace with**: `f(x)`

**∃w depends on**: x, z (∀z comes between)  
**Replace with**: `g(x, z)`

**Result**: `∀x ∀z P(x, f(x), z, g(x,z))`

---

### Skolemization Properties

**⚠️ NOT equivalent**, but **equisatisfiable**:
```
Φ is satisfiable ⟺ Skolem(Φ) is satisfiable
```

**But**:
```
Φ ⊨ Ψ  ≠  Skolem(Φ) ⊨ Skolem(Ψ)  (generally)
```

**Used for**: Automated theorem proving (resolution, tableaux).

---

## 19.10 Aplikasi: Formula Simplification

### Example 19.15: Simplify Complex Formula

**Start**: `¬∀x (P(x) → ∃y (Q(y) ∧ R(x,y)))`

**Step 1**: Move ¬ inward
```
≡ ∃x ¬(P(x) → ∃y (Q(y) ∧ R(x,y)))
≡ ∃x ¬(¬P(x) ∨ ∃y (Q(y) ∧ R(x,y)))
≡ ∃x (P(x) ∧ ¬∃y (Q(y) ∧ R(x,y)))
≡ ∃x (P(x) ∧ ∀y ¬(Q(y) ∧ R(x,y)))
≡ ∃x (P(x) ∧ ∀y (¬Q(y) ∨ ¬R(x,y)))
```

**Step 2**: PNF
```
≡ ∃x ∀y (P(x) ∧ (¬Q(y) ∨ ¬R(x,y)))
```

**Step 3**: Skolemize (if needed)
```
Replace x with constant c:
∀y (P(c) ∧ (¬Q(y) ∨ ¬R(c,y)))
```

**Simplified and ready for automated proving!** ✓

---

## 19.11 Implementasi

### Python: Formula Normalization

```python
from dataclasses import dataclass
from typing import Union

@dataclass
class Var:
    name: str

@dataclass
class Const:
    name: str

@dataclass
class Func:
    name: str
    args: list

Term = Union[Var, Const, Func]

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
class Forall:
    var: Var
    formula: 'Formula'

@dataclass
class Exists:
    var: Var
    formula: 'Formula'

Formula = Union[Pred, Not, And, Or, Forall, Exists]

def negate_quantifiers(formula):
    """
    Push negation through quantifiers
    ¬∀x Φ → ∃x ¬Φ
    ¬∃x Φ → ∀x ¬Φ
    """
    if isinstance(formula, Not):
        inner = formula.formula
        
        if isinstance(inner, Forall):
            # ¬∀x Φ → ∃x ¬Φ
            return Exists(inner.var, negate_quantifiers(Not(inner.formula)))
        
        elif isinstance(inner, Exists):
            # ¬∃x Φ → ∀x ¬Φ
            return Forall(inner.var, negate_quantifiers(Not(inner.formula)))
        
        elif isinstance(inner, Not):
            # ¬¬Φ → Φ
            return negate_quantifiers(inner.formula)
        
        elif isinstance(inner, And):
            # ¬(Φ ∧ Ψ) → ¬Φ ∨ ¬Ψ
            return Or(
                negate_quantifiers(Not(inner.left)),
                negate_quantifiers(Not(inner.right))
            )
        
        elif isinstance(inner, Or):
            # ¬(Φ ∨ Ψ) → ¬Φ ∧ ¬Ψ
            return And(
                negate_quantifiers(Not(inner.left)),
                negate_quantifiers(Not(inner.right))
            )
        
        else:
            return formula
    
    elif isinstance(formula, And):
        return And(
            negate_quantifiers(formula.left),
            negate_quantifiers(formula.right)
        )
    
    elif isinstance(formula, Or):
        return Or(
            negate_quantifiers(formula.left),
            negate_quantifiers(formula.right)
        )
    
    elif isinstance(formula, Forall):
        return Forall(formula.var, negate_quantifiers(formula.formula))
    
    elif isinstance(formula, Exists):
        return Exists(formula.var, negate_quantifiers(formula.formula))
    
    else:
        return formula

# Example usage
if __name__ == "__main__":
    x = Var('x')
    
    # ¬∀x P(x)
    formula = Not(Forall(x, Pred('P', [x])))
    
    print("Original:", formula)
    
    normalized = negate_quantifiers(formula)
    print("Normalized:", normalized)
    # Should be: ∃x ¬P(x)
```

---

## 19.12 Latihan dan Soal

### Latihan 1: Quantifier Negation

Negate: `∀x ∃y (P(x) → Q(y))`

<details>
<summary>Lihat Solusi</summary>

```
¬∀x ∃y (P(x) → Q(y))
≡ ∃x ¬∃y (P(x) → Q(y))          [¬∀ ≡ ∃¬]
≡ ∃x ∀y ¬(P(x) → Q(y))          [¬∃ ≡ ∀¬]
≡ ∃x ∀y ¬(¬P(x) ∨ Q(y))         [→ equivalence]
≡ ∃x ∀y (P(x) ∧ ¬Q(y))          [De Morgan]
```

**Result**: `∃x ∀y (P(x) ∧ ¬Q(y))`
</details>

---

### Latihan 2: PNF Conversion

Convert to PNF: `(∀x P(x)) → (∃y Q(y))`

<details>
<summary>Lihat Solusi</summary>

**Step 1**: Eliminate →
```
(∀x P(x)) → (∃y Q(y))
≡ ¬(∀x P(x)) ∨ (∃y Q(y))
```

**Step 2**: Move ¬ inward
```
≡ (∃x ¬P(x)) ∨ (∃y Q(y))
```

**Step 3**: Rename (optional, already different)

**Step 4**: Move quantifiers out
```
≡ ∃x (¬P(x) ∨ ∃y Q(y))
≡ ∃x ∃y (¬P(x) ∨ Q(y))
```

**PNF**: `∃x ∃y (¬P(x) ∨ Q(y))` ✓
</details>

---

### Latihan 3: Skolemization

Skolemize: `∀x ∃y ∀z ∃w R(x,y,z,w)`

<details>
<summary>Lihat Solusi</summary>

**Process left-to-right**:

**∃y** after **∀x**:
- y depends on x
- Replace with f(x)

**∃w** after **∀x ∀z**:
- w depends on x and z
- Replace with g(x, z)

**Result**: `∀x ∀z R(x, f(x), z, g(x,z))`

**All ∃ removed!** ✓
</details>

---

### Latihan 4: Distribution Check

Are these equivalent?

**a)** `∃x (P(x) ∧ Q(x))`  
**b)** `(∃x P(x)) ∧ (∃x Q(x))`

<details>
<summary>Lihat Solusi</summary>

**NO, not equivalent!**

**Direction**: (a) → (b) is VALID
- If ∃x (P(x) ∧ Q(x)), then some d has both P and Q
- So ∃x P(x) (that d) and ∃x Q(x) (that d)

**Reverse**: (b) → (a) is NOT VALID

**Counterexample**:
- Domain: {1, 2}
- P(1) = T, P(2) = F
- Q(1) = F, Q(2) = T

**(b)**: ∃x P(x) = T (x=1), ∃x Q(x) = T (x=2)  
So (b) = T ∧ T = T

**(a)**: ∃x (P(x) ∧ Q(x))  
- P(1) ∧ Q(1) = T ∧ F = F
- P(2) ∧ Q(2) = F ∧ T = F  
So (a) = F

**Not equivalent!** (b) doesn't imply (a). ✗
</details>

---

## 19.13 Ringkasan

### Key Takeaways

✅ **Propositional laws** still apply in FOL

✅ **Quantifier negation**: ¬∀x ≡ ∃x ¬, and ¬∃x ≡ ∀x ¬

✅ **Same quantifiers commute**: ∀x ∀y ≡ ∀y ∀x

✅ **Mixed quantifiers DON'T commute**: ∀x ∃y ≢ ∃y ∀x

✅ **Prenex Normal Form**: All quantifiers at front

✅ **Skolemization**: Replace ∃ with functions (equisatisfiable)

### Important Equivalences

```
Quantifier Negation:
  ¬∀x Φ ≡ ∃x ¬Φ
  ¬∃x Φ ≡ ∀x ¬Φ

Distribution:
  ∀x (Φ ∧ Ψ) ≡ (∀x Φ) ∧ (∀x Ψ)
  ∃x (Φ ∨ Ψ) ≡ (∃x Φ) ∨ (∃x Ψ)

Vacuous:
  ∀x Φ ≡ Φ  [if x not free in Φ]
  ∃x Φ ≡ Φ  [if x not free in Φ]

Renaming:
  ∀x Φ(x) ≡ ∀y Φ(y)  [if y fresh]
```

### Skolemization Rules

```
∀x₁...∀xₙ ∃y Φ(x₁,...,xₙ,y)
→ ∀x₁...∀xₙ Φ(x₁,...,xₙ,f(x₁,...,xₙ))

Where f is fresh Skolem function
```

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 19
2. Enderton, H. "A Mathematical Introduction to Logic"
3. Fitting, M. "First-Order Logic and Automated Theorem Proving"

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Derivasi](../Bagian-III-Logika-Predikat/BAB-18-Derivasi.md)
- [➡️ BAB Selanjutnya: Tablo Semantik Predikat](BAB-20-Tablo-Semantik-Predikat.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Equivalences - the tools for formula transformation!*

</div>
