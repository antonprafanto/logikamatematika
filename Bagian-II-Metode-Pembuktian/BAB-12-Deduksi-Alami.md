# BAB 12: Deduksi Alami (Natural Deduction)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-11-Resolusi.md) | [➡️ BAB Selanjutnya](BAB-13-Kalkulus-Deret.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami sistem Natural Deduction dan aturan-aturannya
- ✅ Menerapkan introduction dan elimination rules
- ✅ Membangun proof trees untuk teorema
- ✅ Memahami hubungan dengan type systems (Curry-Howard)
- ✅ Menggunakan proof assistants seperti Coq dan Isabelle

---

## 12.1 Pendahuluan

### Apa itu Natural Deduction?

> **Natural Deduction** adalah sistem pembuktian yang dirancang untuk meniru **cara manusia** melakukan reasoning secara natural.

**Dikembangkan oleh**:
- **Gerhard Gentzen** (1935)
- **Dag Prawitz** (1965)

**Karakteristik**:
- 📝 **Human-readable**: Proofs mudah dibaca
- 🎯 **Structured**: Clear inference steps
- 🔗 **Compositional**: Build complex proofs dari simple ones
- 🤖 **Formalizable**: Dapat diotomasi

### Perbedaan dengan Resolution

| Aspect | Natural Deduction | Resolution |
|--------|-------------------|------------|
| **Style** | Direct proof | Refutation |
| **Input** | Any formula | CNF only |
| **Readability** | High (human) | Low (machine) |
| **Automation** | Medium | High |
| **Use case** | Interactive proving | Automated proving |

---

## 12.2 Struktur Natural Deduction

### Judgment (Penilaian)

**Format**:
```
Γ ⊢ Φ
```

Di mana:
- **Γ** = Set of assumptions (context)
- **⊢** = "derives" atau "proves"
- **Φ** = Conclusion

**Read as**: "From assumptions Γ, we can derive Φ"

**Examples**:
```
P, P → Q ⊢ Q           (Modus ponens)
P, Q ⊢ P ∧ Q           (Conjunction intro)
P ∧ Q ⊢ P              (Conjunction elim)
⊢ P → P                (Tautology, no assumptions)
```

---

### Inference Rules

Setiap connective (∧, ∨, →, ¬) punya **dua aturan**:
1. **Introduction rule** (I): Cara membangun/introduce connective
2. **Elimination rule** (E): Cara menggunakan/eliminate connective

**Pattern**:
```
For connective ⊕:
  ⊕-intro: How to prove P ⊕ Q
  ⊕-elim: How to use P ⊕ Q
```

---

## 12.3 Aturan untuk Conjunction (∧)

### ∧-Introduction (∧I)

**Rule**:
```
Γ ⊢ P    Γ ⊢ Q
─────────────── (∧I)
   Γ ⊢ P ∧ Q
```

**Interpretation**: Jika bisa prove P dan bisa prove Q, maka bisa prove P ∧ Q.

**Example**:
```
Given:
  1. P (assumption)
  2. Q (assumption)

Derive:
  3. P ∧ Q    (∧I from 1, 2)
```

---

### ∧-Elimination (∧E)

**Two rules** (left dan right):

```
  Γ ⊢ P ∧ Q              Γ ⊢ P ∧ Q
  ───────── (∧E₁)        ───────── (∧E₂)
    Γ ⊢ P                  Γ ⊢ Q
```

**Example**:
```
Given:
  1. P ∧ Q (assumption)

Derive:
  2. P      (∧E₁ from 1)
  3. Q      (∧E₂ from 1)
```

---

## 12.4 Aturan untuk Implication (→)

### →-Introduction (→I)

**Rule**:
```
  Γ, P ⊢ Q
  ────────── (→I)
  Γ ⊢ P → Q
```

**Interpretation**: Jika dengan **assuming P** kita bisa derive Q, maka bisa prove P → Q.

**Key point**: P adalah **temporary assumption** yang "discharged" setelah →I.

**Example 12.1**: Prove `⊢ P → P`

```
Proof:
  1. [P]        (assumption for →I)
  2. P          (copy of 1)
  3. P → P      (→I from 1-2, discharge [P])
```

**Notation**: `[P]` indicates assumption yang akan di-discharge.

---

### →-Elimination (→E) - Modus Ponens

**Rule**:
```
  Γ ⊢ P → Q    Γ ⊢ P
  ──────────────────── (→E)
       Γ ⊢ Q
```

**This is Modus Ponens!**

**Example**:
```
Given:
  1. P → Q (assumption)
  2. P     (assumption)

Derive:
  3. Q     (→E from 1, 2)
```

---

## 12.5 Aturan untuk Disjunction (∨)

### ∨-Introduction (∨I)

**Two rules** (left dan right):

```
   Γ ⊢ P                 Γ ⊢ Q
  ────────── (∨I₁)      ────────── (∨I₂)
  Γ ⊢ P ∨ Q             Γ ⊢ P ∨ Q
```

**Example**:
```
Given:
  1. P (assumption)

Derive:
  2. P ∨ Q    (∨I₁ from 1)
  3. P ∨ R    (∨I₁ from 1)
```

---

### ∨-Elimination (∨E) - Case Analysis

**Rule**:
```
  Γ ⊢ P ∨ Q    Γ, P ⊢ R    Γ, Q ⊢ R
  ───────────────────────────────── (∨E)
              Γ ⊢ R
```

**Interpretation**: **Case analysis**
- If P ∨ Q is true
- And from P we can derive R
- And from Q we can derive R
- Then R must be true

**Example 12.2**: Prove `P ∨ Q, ¬P ⊢ Q`

```
Proof:
  1. P ∨ Q          (assumption)
  2. ¬P             (assumption)
  3. [P]            (assumption for case 1)
  4.   ⊥            (¬E from 2, 3)
  5.   Q            (⊥E from 4)
  6. [Q]            (assumption for case 2)
  7.   Q            (copy of 6)
  8. Q              (∨E from 1, 3-5, 6-7)
```

---

## 12.6 Aturan untuk Negation (¬)

### ¬-Introduction (¬I)

**Rule**:
```
  Γ, P ⊢ ⊥
  ────────── (¬I)
  Γ ⊢ ¬P
```

**Interpretation**: Jika assuming P leads to contradiction, maka ¬P.

**This is proof by contradiction!**

---

### ¬-Elimination (¬E)

**Rule**:
```
  Γ ⊢ ¬P    Γ ⊢ P
  ──────────────── (¬E)
       Γ ⊢ ⊥
```

**Interpretation**: P dan ¬P together give contradiction.

---

### ⊥-Elimination (⊥E) - Ex Falso

**Rule**:
```
  Γ ⊢ ⊥
  ───── (⊥E)
  Γ ⊢ P
```

**Interpretation**: "From falsity, anything follows" (Ex falso quodlibet)

---

## 12.7 Contoh Pembuktian Lengkap

### Example 12.3: Modus Tollens

**Prove**: `P → Q, ¬Q ⊢ ¬P`

```
Proof:
  1. P → Q          (assumption)
  2. ¬Q             (assumption)
  3. [P]            (assumption for ¬I)
  4.   Q            (→E from 1, 3)
  5.   ⊥            (¬E from 2, 4)
  6. ¬P             (¬I from 3-5, discharge [P])
```

**Explanation**:
- Lines 3-5: Assume P, derive contradiction
- Line 6: Therefore ¬P (by ¬I)

✓ **Proved!**

---

### Example 12.4: Hypothetical Syllogism

**Prove**: `P → Q, Q → R ⊢ P → R`

```
Proof:
  1. P → Q          (assumption)
  2. Q → R          (assumption)
  3. [P]            (assumption for →I)
  4.   Q            (→E from 1, 3)
  5.   R            (→E from 2, 4)
  6. P → R          (→I from 3-5, discharge [P])
```

**Explanation**:
- Line 3-5: Assume P, derive R
- Line 6: Therefore P → R (by →I)

✓ **Proved!**

---

### Example 12.5: De Morgan's Law

**Prove**: `¬(P ∧ Q) ⊢ ¬P ∨ ¬Q`

```
Proof:
  1. ¬(P ∧ Q)             (assumption)
  2. [¬(¬P ∨ ¬Q)]         (assumption for ¬I)
  3.   [P]                (assumption for ¬I)
  4.     [Q]              (assumption for ¬I)
  5.       P ∧ Q          (∧I from 3, 4)
  6.       ⊥              (¬E from 1, 5)
  7.     ¬Q               (¬I from 4-6)
  8.     ¬P ∨ ¬Q          (∨I₂ from 7)
  9.     ⊥                (¬E from 2, 8)
  10.   ¬P                (¬I from 3-9)
  11.   ¬P ∨ ¬Q           (∨I₁ from 10)
  12.   ⊥                 (¬E from 2, 11)
  13. ¬¬(¬P ∨ ¬Q)         (¬I from 2-12)
  14. ¬P ∨ ¬Q             (¬¬E from 13, with classical logic)
```

**Note**: Proof cukup panjang! Classical logic needs double negation elimination.

---

## 12.8 Proof Trees (Fitch-style)

### Fitch Notation

**Fitch-style** menggunakan **indentation** untuk show assumptions.

**Example**: `P → Q, P ⊢ Q`

```
1. P → Q          [Given]
2. P              [Given]
   ──────────────
3. Q              [→E: 1, 2]
```

**With nested assumptions**:

```
1. P → Q          [Given]
   ┌─────────────
2. │ P            [Assume]
3. │ Q            [→E: 1, 2]
   └─────────────
4. P → Q          [→I: 2-3]
```

---

### Example with Fitch Diagram

**Prove**: `⊢ (P → Q) → ((Q → R) → (P → R))`

```
   ┌────────────────────
1. │ P → Q                [Assume]
   │ ┌─────────────────
2. │ │ Q → R             [Assume]
   │ │ ┌──────────────
3. │ │ │ P              [Assume]
4. │ │ │ Q              [→E: 1, 3]
5. │ │ │ R              [→E: 2, 4]
   │ │ └──────────────
6. │ │ P → R            [→I: 3-5]
   │ └─────────────────
7. │ (Q → R) → (P → R)  [→I: 2-6]
   └────────────────────
8. (P → Q) → ((Q → R) → (P → R))  [→I: 1-7]
```

**Beautiful structure!** 🌳

---

## 12.9 Curry-Howard Correspondence

### Propositions as Types

**Amazing discovery**: Natural Deduction proofs ≅ Typed λ-calculus programs!

**Correspondence**:
```
Logic              ↔  Programming
─────────────────────────────────────
Proposition P      ↔  Type P
Proof of P         ↔  Term of type P
P → Q              ↔  Function type P → Q
P ∧ Q              ↔  Product type P × Q
P ∨ Q              ↔  Sum type P + Q
⊥                  ↔  Empty type
```

### Example: Modus Ponens

**Logic**:
```
P → Q, P ⊢ Q
```

**Programming** (Haskell):
```haskell
apply :: (p -> q) -> p -> q
apply f x = f x
```

**Type**: `(P → Q) → P → Q`

---

### Example: ∧-Elimination

**Logic**:
```
P ∧ Q ⊢ P
```

**Programming**:
```haskell
fst :: (p, q) -> p
fst (x, y) = x
```

---

### Proof Assistants

**Modern proof assistants** based on Curry-Howard:

| Tool | Based on | Language |
|------|----------|----------|
| **Coq** | Calculus of Constructions | Gallina |
| **Isabelle** | Higher-order logic | ML |
| **Agda** | Dependent types | Agda |
| **Lean** | Dependent types | Lean |

---

## 12.10 Aplikasi dalam Ilmu Komputer

### 1. Type Systems

**Type checking** = proof checking!

**Example** (TypeScript):
```typescript
function apply<P, Q>(f: (x: P) => Q, x: P): Q {
    return f(x);
}

// Type: <P, Q>(f: P → Q, x: P) => Q
// This is modus ponens!
```

---

### 2. Formal Verification

**Verified software** using proof assistants.

**Example** (Coq):
```coq
Theorem modus_ponens : forall P Q : Prop,
  (P -> Q) -> P -> Q.
Proof.
  intros P Q H_PQ H_P.
  apply H_PQ.
  exact H_P.
Qed.
```

**Verified software examples**:
- CompCert (verified C compiler)
- seL4 (verified OS kernel)
- CertiKOS (verified OS)

---

### 3. Interactive Theorem Proving

**User guides proof**, computer verifies.

**Workflow**:
1. State theorem
2. Apply tactics (proof steps)
3. System checks validity
4. Complete proof or backtrack

**Example session**:
```
Goal: P → Q, Q → R ⊢ P → R

> intro H1.
Goal: Q → R ⊢ P → R

> intro H2.
Goal: ⊢ P → R

> intro H3.
Goal: P ⊢ R

> apply H2.
Goal: P ⊢ Q

> apply H1.
Goal: P ⊢ P

> exact H3.
Qed.
```

---

### 4. Program Extraction

**Extract programs** from proofs!

**Coq example**:
```coq
Definition apply {P Q : Type} (f : P -> Q) (x : P) : Q := f x.

Extraction Language Haskell.
Extraction apply.

(* Extracts to:
apply :: (a1 -> a2) -> a1 -> a2
apply f x = f x
*)
```

---

## 12.11 Implementasi

### Python Implementation

```python
from dataclasses import dataclass
from typing import List, Optional

@dataclass
class Assumption:
    formula: str
    discharged: bool = False

@dataclass
class ProofLine:
    line_num: int
    formula: str
    rule: str
    refs: List[int]
    assumptions: List[int]  # Active assumptions

class NaturalDeduction:
    def __init__(self):
        self.lines: List[ProofLine] = []
        self.assumptions: List[Assumption] = []
    
    def assume(self, formula: str) -> int:
        """Add assumption"""
        self.assumptions.append(Assumption(formula))
        line_num = len(self.lines) + 1
        active = list(range(len(self.assumptions)))
        
        line = ProofLine(line_num, formula, "Assume", [], active)
        self.lines.append(line)
        return line_num
    
    def and_intro(self, p_line: int, q_line: int) -> int:
        """∧-Introduction"""
        p = self.lines[p_line - 1].formula
        q = self.lines[q_line - 1].formula
        result = f"({p} ∧ {q})"
        
        # Merge assumptions
        active = list(set(
            self.lines[p_line - 1].assumptions +
            self.lines[q_line - 1].assumptions
        ))
        
        line_num = len(self.lines) + 1
        line = ProofLine(line_num, result, "∧I", [p_line, q_line], active)
        self.lines.append(line)
        return line_num
    
    def and_elim_left(self, pq_line: int) -> int:
        """∧-Elimination (left)"""
        pq = self.lines[pq_line - 1].formula
        # Parse (P ∧ Q) -> extract P
        # Simplified: assume format "(P ∧ Q)"
        parts = pq.strip("()").split(" ∧ ")
        p = parts[0]
        
        active = self.lines[pq_line - 1].assumptions
        line_num = len(self.lines) + 1
        line = ProofLine(line_num, p, "∧E₁", [pq_line], active)
        self.lines.append(line)
        return line_num
    
    def impl_elim(self, impl_line: int, p_line: int) -> int:
        """→-Elimination (Modus Ponens)"""
        # impl_line: P → Q
        # p_line: P
        # Result: Q
        
        impl_formula = self.lines[impl_line - 1].formula
        # Parse "P → Q" -> extract Q
        # Simplified
        parts = impl_formula.split(" → ")
        q = parts[1]
        
        active = list(set(
            self.lines[impl_line - 1].assumptions +
            self.lines[p_line - 1].assumptions
        ))
        
        line_num = len(self.lines) + 1
        line = ProofLine(line_num, q, "→E", [impl_line, p_line], active)
        self.lines.append(line)
        return line_num
    
    def print_proof(self):
        """Print proof in Fitch style"""
        for line in self.lines:
            indent = len(line.assumptions)
            prefix = "  " * indent
            refs_str = f"[{line.rule}: {', '.join(map(str, line.refs))}]" if line.refs else f"[{line.rule}]"
            print(f"{prefix}{line.line_num}. {line.formula} {refs_str}")

# Example usage
if __name__ == "__main__":
    proof = NaturalDeduction()
    
    # Prove: P, Q ⊢ P ∧ Q
    print("Proof: P, Q ⊢ P ∧ Q\n")
    
    line1 = proof.assume("P")
    line2 = proof.assume("Q")
    line3 = proof.and_intro(line1, line2)
    
    proof.print_proof()
    
    print("\n" + "="*40 + "\n")
    
    # Prove: P → Q, P ⊢ Q
    proof2 = NaturalDeduction()
    print("Proof: P → Q, P ⊢ Q\n")
    
    line1 = proof2.assume("P → Q")
    line2 = proof2.assume("P")
    line3 = proof2.impl_elim(line1, line2)
    
    proof2.print_proof()
```

**Output**:
```
Proof: P, Q ⊢ P ∧ Q

1. P [Assume]
2. Q [Assume]
3. (P ∧ Q) [∧I: 1, 2]

========================================

Proof: P → Q, P ⊢ Q

1. P → Q [Assume]
2. P [Assume]
3. Q [→E: 1, 2]
```

---

## 12.12 Latihan dan Soal

### Latihan 1: Basic Inference

**Problem**: Prove `P ∧ Q ⊢ Q ∧ P` (commutativity)

<details>
<summary>Lihat Solusi</summary>

```
Proof:
1. P ∧ Q          [Assume]
2. P              [∧E₁: 1]
3. Q              [∧E₂: 1]
4. Q ∧ P          [∧I: 3, 2]
```

✓ **Proved!**
</details>

---

### Latihan 2: Implication Introduction

**Problem**: Prove `⊢ (P ∧ Q) → P`

<details>
<summary>Lihat Solusi</summary>

```
Proof:
  ┌───────────
1. │ P ∧ Q      [Assume]
2. │ P          [∧E₁: 1]
  └───────────
3. (P ∧ Q) → P  [→I: 1-2]
```

✓ **Proved!**
</details>

---

### Latihan 3: Case Analysis

**Problem**: Prove `P ∨ Q, P → R, Q → R ⊢ R`

<details>
<summary>Lihat Solusi</summary>

```
Proof:
1. P ∨ Q          [Assume]
2. P → R          [Assume]
3. Q → R          [Assume]
  ┌─────────
4. │ P            [Assume for ∨E]
5. │ R            [→E: 2, 4]
  └─────────
  ┌─────────
6. │ Q            [Assume for ∨E]
7. │ R            [→E: 3, 6]
  └─────────
8. R              [∨E: 1, 4-5, 6-7]
```

✓ **Proved!**
</details>

---

### Latihan 4: Proof by Contradiction

**Problem**: Prove `P → Q, ¬Q ⊢ ¬P` (Modus Tollens)

<details>
<summary>Lihat Solusi</summary>

```
Proof:
1. P → Q          [Assume]
2. ¬Q             [Assume]
  ┌─────────
3. │ P            [Assume for ¬I]
4. │ Q            [→E: 1, 3]
5. │ ⊥            [¬E: 2, 4]
  └─────────
6. ¬P             [¬I: 3-5]
```

✓ **Proved!**
</details>

---

## 12.13 Ringkasan

### Key Takeaways

✅ **Natural Deduction**: Human-readable proof system

✅ **I/E Rules**: Each connective has introduction and elimination rules

✅ **Structured Proofs**: Clear assumption management with discharge

✅ **Curry-Howard**: Proofs ≅ Programs, Propositions ≅ Types

✅ **Applications**: Type systems, proof assistants, verified software

### Main Rules Summary

```
∧I:  P, Q ⊢ P ∧ Q
∧E:  P ∧ Q ⊢ P  (and Q)

→I:  [P] ⊢ Q implies ⊢ P → Q  (discharge P)
→E:  P → Q, P ⊢ Q  (modus ponens)

∨I:  P ⊢ P ∨ Q
∨E:  P ∨ Q, [P]⊢R, [Q]⊢R ⊢ R  (case analysis)

¬I:  [P] ⊢ ⊥ implies ⊢ ¬P
¬E:  P, ¬P ⊢ ⊥

⊥E:  ⊥ ⊢ P  (ex falso)
```

### When to Use?

- **Interactive proving**: With proof assistants
- **Teaching**: Natural for humans to understand
- **Type theory**: Connection to programming
- **Formal verification**: Proving program properties

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 12
2. Gentzen, G. "Investigations into Logical Deduction" (1935)
3. Prawitz, D. "Natural Deduction: A Proof-Theoretical Study" (1965)
4. Wadler, P. "Propositions as Types" (2015)

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Resolusi](BAB-11-Resolusi.md)
- [➡️ BAB Selanjutnya: Kalkulus Deret](BAB-13-Kalkulus-Deret.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Natural Deduction - where logic meets programming!*

</div>
