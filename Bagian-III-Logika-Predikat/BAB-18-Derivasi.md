# BAB 18: Derivasi (Deduction in FOL)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-17-Penafsiran-Validitas.md) | [➡️ BAB Selanjutnya](../Bagian-IV-Metode-Pembuktian-Predikat/BAB-19-Ekuivalen-Logis-Predikat.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami natural deduction untuk FOL
- ✅ Menerapkan quantifier introduction dan elimination rules
- ✅ Memahami equality rules dan substitution
- ✅ Membangun formal proofs dalam FOL
- ✅ Menggunakan derived rules untuk efisiensi

---

## 18.1 Pendahuluan

### Natural Deduction untuk FOL

**Recall**: Natural Deduction untuk propositional logic (BAB 12)
- Introduction dan Elimination rules
- ∧I, ∧E, →I, →E, dll.

**Extension to FOL**: Add rules untuk quantifiers!
- ∀I, ∀E (universal introduction/elimination)
- ∃I, ∃E (existential introduction/elimination)
- Equality rules (=I, =E)

---

## 18.2 Review: Propositional Rules

### Rules We Already Know

**Conjunction**:
```
  Γ ⊢ P    Γ ⊢ Q
  ─────────────── (∧I)
     Γ ⊢ P ∧ Q

  Γ ⊢ P ∧ Q          Γ ⊢ P ∧ Q
  ───────── (∧E₁)    ───────── (∧E₂)
    Γ ⊢ P              Γ ⊢ Q
```

**Implication**:
```
  Γ, P ⊢ Q
  ────────── (→I)
  Γ ⊢ P → Q

  Γ ⊢ P → Q    Γ ⊢ P
  ──────────────────── (→E)
       Γ ⊢ Q
```

**Negation**:
```
  Γ, P ⊢ ⊥
  ────────── (¬I)
  Γ ⊢ ¬P

  Γ ⊢ ¬P    Γ ⊢ P
  ──────────────── (¬E)
       Γ ⊢ ⊥
```

**These still apply in FOL!**

---

## 18.3 Universal Quantifier Rules

### Universal Elimination (∀E) - Instantiation

**Rule**:
```
  Γ ⊢ ∀x Φ(x)
  ─────────── (∀E)
   Γ ⊢ Φ(t)
```

**Meaning**: If Φ holds for **all** x, then it holds for **any specific term** t.

**Example 18.1**:
```
Given: ∀x Human(x)

Derive: Human(socrates)    by ∀E with t = socrates
        Human(father(john)) by ∀E with t = father(john)
```

**Important**: t can be **any term** (constant, variable, or complex term).

---

### Universal Introduction (∀I) - Generalization

**Rule**:
```
  Γ ⊢ Φ(a)
  ──────────── (∀I)  where a is "fresh" (arbitrary)
  Γ ⊢ ∀x Φ(x)
```

**Conditions**:
1. **a must be arbitrary** (not mentioned in Γ or in any undischarged assumptions)
2. a is called **eigenvariable** or **parameter**

**Intuition**: If Φ(a) holds for **arbitrary** a, then it holds for **all** x.

---

### Example 18.2: Using ∀I

**Prove**: `∀x (P(x) → P(x))`

```
Proof:
1. [a arbitrary]         (fresh parameter)
2. [P(a)]                (assumption for →I)
3.   P(a)                (copy of 2)
4. P(a) → P(a)           (→I, discharge 2)
5. ∀x (P(x) → P(x))      (∀I on 'a', since a arbitrary)
```

✓ **Proved!**

---

### Example 18.3: Invalid ∀I

**WRONG attempt**: Prove `P(socrates) ⊢ ∀x P(x)`

```
1. P(socrates)           (given)
2. ∀x P(x)               (∀I on socrates) ✗ INVALID!
```

**Why wrong?** 
- socrates is **not arbitrary**!
- socrates is **specific constant**
- Can't generalize from specific to all

**Counterexample**: P(x) = "x is Greek"
- P(socrates) might be true
- But ∀x P(x) (everyone is Greek) is false!

---

## 18.4 Existential Quantifier Rules

### Existential Introduction (∃I) - Witness

**Rule**:
```
   Γ ⊢ Φ(t)
  ────────── (∃I)
  Γ ⊢ ∃x Φ(x)
```

**Meaning**: If Φ holds for **specific term** t, then **there exists** x for which Φ holds.

**Example 18.4**:
```
Given: Prime(7)

Derive: ∃x Prime(x)      by ∃I with t = 7
        ∃y Prime(y)      by ∃I with t = 7 (variable name doesn't matter)
```

**Easy rule!** Can always weaken specific to existential.

---

### Existential Elimination (∃E) - Witness Extraction

**Rule**:
```
  Γ ⊢ ∃x Φ(x)    Γ, Φ(a) ⊢ Ψ
  ──────────────────────────── (∃E)  where a is fresh
          Γ ⊢ Ψ
```

**Conditions**:
1. **a must be fresh** (not in Γ, Ψ, or undischarged assumptions)
2. a represents the "witness" that exists

**Intuition**: 
- We know ∃x Φ(x) (something satisfies Φ)
- Let's call that thing 'a' (fresh name)
- If we can derive Ψ from Φ(a)
- Then Ψ must be true

---

### Example 18.5: Using ∃E

**Prove**: `∃x P(x), ∀x (P(x) → Q(x)) ⊢ ∃x Q(x)`

```
Proof:
1. ∃x P(x)               (given)
2. ∀x (P(x) → Q(x))      (given)
3. [P(a)]                (assumption for ∃E, a fresh)
4.   P(a) → Q(a)         (∀E from 2)
5.   Q(a)                (→E from 3, 4)
6.   ∃x Q(x)             (∃I from 5)
7. ∃x Q(x)               (∃E from 1, 3-6, discharge P(a))
```

**Explanation**:
- Line 1: Know something satisfies P
- Line 3: Call it 'a' (fresh witness)
- Lines 4-6: Show Q(a) holds, so ∃x Q(x)
- Line 7: Conclude ∃x Q(x) (by ∃E)

✓ **Proved!**

---

## 18.5 Equality Rules

### Equality Introduction (=I) - Reflexivity

**Rule**:
```
  ────────── (=I)
  Γ ⊢ t = t
```

**Meaning**: Every term equals itself.

**Examples**:
```
⊢ x = x
⊢ socrates = socrates
⊢ father(john) = father(john)
⊢ 2 + 3 = 2 + 3
```

**Always valid!**

---

### Equality Elimination (=E) - Substitution

**Rule (Leibniz's Law)**:
```
  Γ ⊢ s = t    Γ ⊢ Φ(s)
  ──────────────────── (=E)
       Γ ⊢ Φ(t)
```

**Meaning**: If s = t and Φ holds for s, then Φ holds for t.

**"Equals can be substituted for equals"**

---

### Example 18.6: Using =E

**Given**:
```
1. socrates = plato
2. Human(socrates)
```

**Derive**:
```
3. Human(plato)          (=E from 1, 2)
```

**Explanation**: Since socrates = plato, and socrates is human, then plato is human.

---

### Example 18.7: Transitivity of Equality

**Prove**: `a = b, b = c ⊢ a = c`

```
Proof:
1. a = b                 (given)
2. b = c                 (given)
3. a = a                 (=I)
4. a = c                 (=E from 1, 2, using Φ(x) = "a = x")
```

**Alternative**:
```
1. a = b                 (given)
2. b = c                 (given)
3. a = c                 (=E from 1, 2)
```

✓ **Transitivity proved!**

---

### Example 18.8: Symmetry of Equality

**Prove**: `a = b ⊢ b = a`

```
Proof:
1. a = b                 (given)
2. a = a                 (=I)
3. b = a                 (=E from 1, 2, using Φ(x) = "x = a")
```

✓ **Symmetry proved!**

---

## 18.6 Complete Example Proofs

### Example 18.9: Existential from Universal

**Prove**: `∀x P(x) ⊢ ∃x P(x)` (assuming non-empty domain)

```
Proof:
1. ∀x P(x)               (given)
2. P(a)                  (∀E from 1, for any term a)
3. ∃x P(x)               (∃I from 2)
```

**Note**: Need non-empty domain (so term 'a' exists).

✓ **Proved!**

---

### Example 18.10: Quantifier Exchange

**Prove**: `¬∀x P(x) ⊢ ∃x ¬P(x)` (classical logic)

```
Proof:
1. ¬∀x P(x)              (given)
2. [¬∃x ¬P(x)]           (assumption for ¬I)
3.   [¬P(a)]             (assumption for ¬I, a arbitrary)
4.     ∃x ¬P(x)          (∃I from 3)
5.     ⊥                 (¬E from 2, 4)
6.   P(a)                (¬I from 3-5, discharge ¬P(a))
7.   ∀x P(x)             (∀I from 6, since a arbitrary)
8.   ⊥                   (¬E from 1, 7)
9. ∃x ¬P(x)              (¬I from 2-8, discharge assumption)
                         (double negation elimination)
```

**Uses**: Classical logic (double negation elimination)

✓ **Proved!**

---

### Example 18.11: Distribution

**Prove**: `∀x (P(x) ∧ Q(x)) ⊢ (∀x P(x)) ∧ (∀x Q(x))`

```
Proof:
1. ∀x (P(x) ∧ Q(x))      (given)

  First part: ∀x P(x)
2. [a arbitrary]
3.   P(a) ∧ Q(a)         (∀E from 1)
4.   P(a)                (∧E₁ from 3)
5. ∀x P(x)               (∀I from 2-4)

  Second part: ∀x Q(x)
6. [b arbitrary]
7.   P(b) ∧ Q(b)         (∀E from 1)
8.   Q(b)                (∧E₂ from 7)
9. ∀x Q(x)               (∀I from 6-8)

10. (∀x P(x)) ∧ (∀x Q(x))   (∧I from 5, 9)
```

✓ **Proved!**

---

## 18.7 Derived Rules

### Useful Shortcuts

Once basic rules established, can derive **shortcuts**:

**∀ over conjunction**:
```
∀x (P(x) ∧ Q(x)) ⊣⊢ (∀x P(x)) ∧ (∀x Q(x))
```

**∃ over disjunction**:
```
∃x (P(x) ∨ Q(x)) ⊣⊢ (∃x P(x)) ∨ (∃x Q(x))
```

**Quantifier negation** (De Morgan):
```
¬∀x P(x) ⊣⊢ ∃x ¬P(x)
¬∃x P(x) ⊣⊢ ∀x ¬P(x)
```

**Can use these** as shortcuts in proofs!

---

## 18.8 Fitch-Style Notation

### Example 18.12: Fitch Diagram

**Prove**: `∀x (P(x) → Q(x)), P(a) ⊢ Q(a)`

```
1. ∀x (P(x) → Q(x))      [Given]
2. P(a)                  [Given]
   ──────────────────────
3. P(a) → Q(a)           [∀E: 1]
4. Q(a)                  [→E: 2, 3]
```

**With nested assumptions**:

**Prove**: `⊢ ∀x (P(x) → P(x))`

```
   ┌──────────────────
1. │ a                  [Arbitrary]
   │ ┌────────────────
2. │ │ P(a)            [Assume]
3. │ │ P(a)            [Copy: 2]
   │ └────────────────
4. │ P(a) → P(a)       [→I: 2-3]
   └──────────────────
5. ∀x (P(x) → P(x))    [∀I: 1-4]
```

---

## 18.9 Substitution and Unification

### Substitution Notation

**θ = {x₁/t₁, x₂/t₂, ...}** is substitution that:
- Replaces x₁ with t₁
- Replaces x₂ with t₂
- etc.

**Apply**: Φθ is formula Φ with substitution applied.

**Example**:
```
Φ = P(x, y)
θ = {x/a, y/f(b)}

Φθ = P(a, f(b))
```

---

### Unification

**Problem**: Find substitution θ such that s θ = t θ.

**Example**:
```
s = P(x, f(y))
t = P(a, f(b))

Unifier: θ = {x/a, y/b}

sθ = P(a, f(b))
tθ = P(a, f(b))
✓ Unified!
```

**Used in**: Resolution, Prolog, automated theorem proving.

---

## 18.10 Aplikasi: Theorem Provers

### Interactive Proof Assistants

**Coq example**:
```coq
Theorem forall_exists : forall (P : nat -> Prop),
  (forall x, P x) -> exists x, P x.
Proof.
  intros P H.           (* Introduce assumptions *)
  exists 0.             (* Choose witness x = 0 *)
  apply H.              (* Apply ∀x P(x) to get P(0) *)
Qed.
```

**Isabelle example**:
```isabelle
theorem "∀x. P x ⟹ ∃x. P x"
proof -
  assume "∀x. P x"
  then have "P a" by (rule allE)
  then show "∃x. P x" by (rule exI)
qed
```

---

### Automated Provers

**Vampire, E, Z3** use:
- **Resolution** (BAB 11 + unification)
- **Tableaux** (BAB 9 + instantiation)
- **SMT** (Satisfiability Modulo Theories)

**Example (Z3)**:
```python
from z3 import *

# Declare sorts and functions
Person = DeclareSort('Person')
socrates = Const('socrates', Person)
Human = Function('Human', Person, BoolSort())
Mortal = Function('Mortal', Person, BoolSort())

# Add axioms
x = Const('x', Person)
solver = Solver()
solver.add(ForAll(x, Implies(Human(x), Mortal(x))))
solver.add(Human(socrates))

# Query
solver.add(Not(Mortal(socrates)))

# Check
if solver.check() == unsat:
    print("Socrates is mortal! (contradiction found)")
else:
    print("Cannot prove")
```

---

## 18.11 Latihan dan Soal

### Latihan 1: Basic ∀E and ∃I

**Given**: `∀x (Human(x) → Mortal(x))`, `Human(socrates)`

**Prove**: `∃x Mortal(x)`

<details>
<summary>Lihat Solusi</summary>

```
1. ∀x (Human(x) → Mortal(x))     [Given]
2. Human(socrates)               [Given]
3. Human(socrates) → Mortal(socrates)  [∀E: 1]
4. Mortal(socrates)              [→E: 2, 3]
5. ∃x Mortal(x)                  [∃I: 4]
```

✓ **Proved!**
</details>

---

### Latihan 2: ∀I with Arbitrary Element

**Prove**: `∀x P(x), ∀x Q(x) ⊢ ∀x (P(x) ∧ Q(x))`

<details>
<summary>Lihat Solusi</summary>

```
1. ∀x P(x)                       [Given]
2. ∀x Q(x)                       [Given]
3. [a arbitrary]
4.   P(a)                        [∀E: 1]
5.   Q(a)                        [∀E: 2]
6.   P(a) ∧ Q(a)                 [∧I: 4, 5]
7. ∀x (P(x) ∧ Q(x))              [∀I: 3-6]
```

✓ **Proved!**
</details>

---

### Latihan 3: ∃E with Witness

**Prove**: `∃x (P(x) ∧ Q(x)) ⊢ (∃x P(x)) ∧ (∃x Q(x))`

<details>
<summary>Lihat Solusi</summary>

```
1. ∃x (P(x) ∧ Q(x))              [Given]
2. [P(a) ∧ Q(a)]                 [Assume, a fresh]
3.   P(a)                        [∧E₁: 2]
4.   Q(a)                        [∧E₂: 2]
5.   ∃x P(x)                     [∃I: 3]
6.   ∃x Q(x)                     [∃I: 4]
7.   (∃x P(x)) ∧ (∃x Q(x))       [∧I: 5, 6]
8. (∃x P(x)) ∧ (∃x Q(x))         [∃E: 1, 2-7]
```

✓ **Proved!**
</details>

---

### Latihan 4: Equality Reasoning

**Given**: `f(a) = b`, `P(f(a))`

**Prove**: `P(b)`

<details>
<summary>Lihat Solusi</summary>

```
1. f(a) = b                      [Given]
2. P(f(a))                       [Given]
3. P(b)                          [=E: 1, 2]
```

✓ **Proved!** (Substitution of equals)
</details>

---

### Latihan 5: Complex Proof

**Prove**: `∀x ∃y Loves(x, y) ⊢ ∃y ∃x Loves(x, y)`

<details>
<summary>Lihat Solusi</summary>

```
1. ∀x ∃y Loves(x, y)             [Given]
2. ∃y Loves(a, y)                [∀E: 1, for some term a]
3. [Loves(a, b)]                 [Assume, b fresh witness]
4.   ∃x Loves(x, b)              [∃I: 3]
5.   ∃y ∃x Loves(x, y)           [∃I: 4]
6. ∃y ∃x Loves(x, y)             [∃E: 2, 3-5]
```

✓ **Proved!**
</details>

---

## 18.12 Ringkasan

### Key Takeaways

✅ **Natural Deduction** extends to FOL dengan quantifier rules

✅ **∀E**: Instantiate universal with any term

✅ **∀I**: Generalize from arbitrary element

✅ **∃I**: Witness specific term

✅ **∃E**: Extract witness (must be fresh)

✅ **Equality**: Reflexivity (=I) and substitution (=E)

### Quantifier Rules Summary

```
∀-Elimination:
  ∀x Φ(x) ⊢ Φ(t)    (for any term t)

∀-Introduction:
  Φ(a) ⊢ ∀x Φ(x)    (if a arbitrary/fresh)

∃-Introduction:
  Φ(t) ⊢ ∃x Φ(x)    (for any term t)

∃-Elimination:
  ∃x Φ(x), Φ(a) ⊢ Ψ implies ∃x Φ(x) ⊢ Ψ
  (if a fresh, not in Ψ)

Equality:
  ⊢ t = t           (=I, reflexivity)
  s = t, Φ(s) ⊢ Φ(t)   (=E, substitution)
```

### Critical Conditions

**Fresh/Arbitrary**:
- **∀I**: Parameter must be arbitrary (not in assumptions)
- **∃E**: Witness must be fresh (not in goal or assumptions)

**Violations** lead to **invalid proofs**!

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 18
2. Gentzen, G. "Investigations into Logical Deduction" (1935)
3. van Dalen, D. "Logic and Structure" (2013)

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Penafsiran dan Validitas](BAB-17-Penafsiran-Validitas.md)
- [➡️ BAB Selanjutnya: Ekuivalen Logis Predikat](../Bagian-IV-Metode-Pembuktian-Predikat/BAB-19-Ekuivalen-Logis-Predikat.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Formal proofs - the art of rigorous reasoning!*

**🎉 Bagian III Selesai! Lanjut ke Metode Pembuktian Predikat!**

</div>
