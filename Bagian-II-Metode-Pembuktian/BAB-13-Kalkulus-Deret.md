# BAB 13: Kalkulus Deret (Sequent Calculus)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-12-Deduksi-Alami.md) | [➡️ BAB Selanjutnya](../Bagian-III-Logika-Predikat/BAB-14-Pengantar-Logika-Predikat.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami konsep sequent dan sequent calculus
- ✅ Menerapkan left dan right rules untuk connectives
- ✅ Memahami structural rules (weakening, contraction, exchange)
- ✅ Melakukan proof construction dengan sequent calculus
- ✅ Memahami cut elimination theorem dan aplikasinya

---

## 13.1 Pendahuluan

### Apa itu Sequent Calculus?

> **Sequent Calculus** adalah sistem pembuktian yang dikembangkan oleh **Gerhard Gentzen** (1935), bersama dengan Natural Deduction.

**Sequent Calculus**:
- Lebih **symmetric** daripada Natural Deduction
- Memiliki **cut elimination** property
- Basis untuk **automated theorem proving**
- Fundamental untuk **proof theory**

### Sequent

**Format sequent**:
```
Γ ⊢ Δ
```

Di mana:
- **Γ** (Gamma) = antecedent (multiset of formulas di **kiri**)
- **⊢** = sequent arrow (turnstile)
- **Δ** (Delta) = succedent (multiset of formulas di **kanan**)

**Interpretation**:
```
"If ALL of Γ are true, then AT LEAST ONE of Δ is true"
```

**Equivalently**:
```
Γ₁ ∧ Γ₂ ∧ ... ∧ Γₙ → Δ₁ ∨ Δ₂ ∨ ... ∨ Δₘ
```

---

### Contoh Sequent

**Example 13.1**:
```
P, Q ⊢ P ∨ Q
```

**Meaning**: "If P and Q are true, then P ∨ Q is true" ✓

---

**Example 13.2**:
```
P ∧ Q ⊢ P, Q
```

**Meaning**: "If P ∧ Q is true, then P is true OR Q is true" ✓

---

**Example 13.3**:
```
⊢ P → P
```

**Meaning**: "With no assumptions, P → P is true" (tautology) ✓

---

**Example 13.4**: Multiple conclusions
```
P ⊢ P, Q
```

**Meaning**: "If P is true, then P is true OR Q is true" ✓ (P alone suffices)

---

## 13.2 Perbedaan dengan Natural Deduction

### Comparison

| Aspect | Natural Deduction | Sequent Calculus |
|--------|-------------------|------------------|
| **Conclusion** | Single formula | Multiple formulas |
| **Format** | `Γ ⊢ Φ` | `Γ ⊢ Δ` |
| **Symmetry** | Asymmetric (connectives) | Symmetric (left/right) |
| **Cut** | Implicit | Explicit with cut rule |
| **Use case** | Human reasoning | Proof theory, automation |

### Sequent vs Judgment

**Natural Deduction judgment**:
```
P, Q ⊢ P ∧ Q
```
One conclusion only.

**Sequent Calculus sequent**:
```
P, Q ⊢ P ∧ Q, R
```
Multiple conclusions allowed!

---

## 13.3 Inference Rules

### Structure of Rules

**Each rule has**:
- **Premises** (above line)
- **Conclusion** (below line)

**Two categories**:
1. **Logical rules**: For connectives (left and right)
2. **Structural rules**: For sequent manipulation

---

### Identity and Cut

**Identity (Axiom)**:
```
──────── (Id)
Γ, P ⊢ P, Δ
```

**Interpretation**: If P is an assumption, we can conclude P.

---

**Cut**:
```
Γ ⊢ P, Δ    Γ', P ⊢ Δ'
────────────────────── (Cut)
    Γ, Γ' ⊢ Δ, Δ'
```

**Interpretation**: 
- Prove P from Γ
- Use P to prove Δ'
- Therefore can prove Δ, Δ' from Γ, Γ'

**Important**: Cut is **admissible** (can be eliminated) - **Cut Elimination Theorem**!

---

## 13.4 Logical Rules

### ∧ (Conjunction) Rules

**Left rule** (∧L):
```
Γ, P, Q ⊢ Δ
───────────── (∧L)
Γ, P ∧ Q ⊢ Δ
```

**Interpretation**: If P ∧ Q is true, we can use both P and Q.

---

**Right rule** (∧R):
```
Γ ⊢ P, Δ    Γ ⊢ Q, Δ
────────────────────── (∧R)
    Γ ⊢ P ∧ Q, Δ
```

**Interpretation**: To prove P ∧ Q, prove both P and Q.

---

### ∨ (Disjunction) Rules

**Left rule** (∨L):
```
Γ, P ⊢ Δ    Γ, Q ⊢ Δ
────────────────────── (∨L)
    Γ, P ∨ Q ⊢ Δ
```

**Interpretation**: If P ∨ Q is true, do case analysis on P and Q.

---

**Right rule** (∨R):
```
Γ ⊢ P, Q, Δ
───────────── (∨R)
Γ ⊢ P ∨ Q, Δ
```

**Interpretation**: To prove P ∨ Q, prove P or prove Q (put both on right).

---

### → (Implication) Rules

**Left rule** (→L):
```
Γ ⊢ P, Δ    Γ, Q ⊢ Δ
────────────────────── (→L)
   Γ, P → Q ⊢ Δ
```

**Interpretation**: If P → Q is assumed, either prove ¬P or use Q.

---

**Right rule** (→R):
```
Γ, P ⊢ Q, Δ
───────────── (→R)
Γ ⊢ P → Q, Δ
```

**Interpretation**: To prove P → Q, assume P and prove Q.

---

### ¬ (Negation) Rules

**Left rule** (¬L):
```
Γ ⊢ P, Δ
────────── (¬L)
Γ, ¬P ⊢ Δ
```

**Interpretation**: If ¬P is assumed, prove P (contradiction).

---

**Right rule** (¬R):
```
Γ, P ⊢ Δ
────────── (¬R)
Γ ⊢ ¬P, Δ
```

**Interpretation**: To prove ¬P, assume P and derive contradiction.

---

## 13.5 Structural Rules

### Weakening (W)

**Left weakening**:
```
  Γ ⊢ Δ
────────── (WL)
Γ, P ⊢ Δ
```

**Right weakening**:
```
  Γ ⊢ Δ
────────── (WR)
Γ ⊢ P, Δ
```

**Interpretation**: Can add irrelevant formulas.

---

### Contraction (C)

**Left contraction**:
```
Γ, P, P ⊢ Δ
───────────── (CL)
  Γ, P ⊢ Δ
```

**Right contraction**:
```
Γ ⊢ P, P, Δ
───────────── (CR)
  Γ ⊢ P, Δ
```

**Interpretation**: Duplicates can be merged.

---

### Exchange (E)

**Left exchange**:
```
Γ, P, Q, Γ' ⊢ Δ
─────────────── (EL)
Γ, Q, P, Γ' ⊢ Δ
```

**Right exchange**:
```
Γ ⊢ Δ, P, Q, Δ'
─────────────── (ER)
Γ ⊢ Δ, Q, P, Δ'
```

**Interpretation**: Order doesn't matter.

---

## 13.6 Contoh Pembuktian

### Example 13.5: Prove P ∧ Q ⊢ Q ∧ P

```
Proof:

  ─────────── (Id)
  P, Q ⊢ Q
  ─────────── (Id)
  P, Q ⊢ P
  ─────────────────── (∧R)
  P, Q ⊢ Q ∧ P
  ───────────────────── (∧L)
  P ∧ Q ⊢ Q ∧ P
```

**Explanation**:
1. Use identity for Q and P
2. Apply ∧R to combine
3. Apply ∧L to decompose left side

✓ **Proved!**

---

### Example 13.6: Prove P → Q, Q → R ⊢ P → R

```
Proof:

  ───────────── (Id)
  P, Q, R ⊢ R
  ────────────────── (→L on Q → R)
  P, Q, Q → R ⊢ R
  
  ───────────── (Id)
  P, Q, R ⊢ Q
  ────────────────────────── (→L on P → Q)
  P, P → Q, Q → R ⊢ R
  ──────────────────────────── (→R)
  P → Q, Q → R ⊢ P → R
```

**Alternative, more detailed**:

```
                    ───────────── (Id)
                    Q, R ⊢ R
                    ────────────── (WL)
  ────────── (Id)   Q, R ⊢ Q, R
  P, Q ⊢ Q          ────────────────── (→L)
  ──────────────────Q, Q → R ⊢ R
  P, Q, Q → R ⊢ R
  ───────────── (Id)
  P ⊢ P
  ─────────────────────── (→L on P → Q)
  P, P → Q, Q → R ⊢ R
  ──────────────────────── (→R)
  P → Q, Q → R ⊢ P → R
```

✓ **Proved!** (Hypothetical syllogism)

---

### Example 13.7: Prove ⊢ P ∨ ¬P (Law of Excluded Middle)

```
Proof:

  ──────────── (Id)
  P ⊢ P
  ──────────────── (¬R)
  ⊢ P, ¬P
  ────────────────── (∨R)
  ⊢ P ∨ ¬P
```

**Explanation**:
1. Start with identity: P ⊢ P
2. Apply ¬R to get ⊢ P, ¬P (both on right)
3. Apply ∨R to combine

✓ **Proved!** (Much simpler than Natural Deduction!)

---

## 13.7 Cut Elimination

### Cut Elimination Theorem (Gentzen's Hauptsatz)

> **Theorem**: Any sequent provable with cut can be proved **without** cut.

**Significance**:
1. **Subformula property**: Every formula in proof is subformula of conclusion
2. **Proof search**: Bounded search space
3. **Consistency**: Proves consistency of logic
4. **Normalization**: Removes detours in proof

### Example: Proof with Cut

**Prove**: P → Q, Q → R ⊢ P → R (using cut)

```
With cut:

  ───────────── (Id)      ───────────── (Id)
  P ⊢ P                   Q ⊢ Q
  ──────────────── (→L)   ──────────────── (→L)
  P, P → Q ⊢ Q            Q, Q → R ⊢ R
  ────────────────────────────────────── (Cut on Q)
  P, P → Q, Q → R ⊢ R
  ──────────────────────────────────────── (→R)
  P → Q, Q → R ⊢ P → R
```

**Without cut** (shown in Example 13.6).

---

## 13.8 Aplikasi Sequent Calculus

### 1. Proof Theory Research

**Sequent calculus** adalah tool utama untuk:
- **Consistency proofs**
- **Decidability results**
- **Complexity analysis**
- **Substructural logics**

---

### 2. Linear Logic

**Linear Logic** (Jean-Yves Girard) uses sequent calculus with **restricted structural rules**.

**Remove contraction**:
```
Γ, P, P ⊢ Δ
───────────── (CL) ← NOT ALLOWED!
  Γ, P ⊢ Δ
```

**Application**: Resource-aware reasoning (P can be "used" only once).

**Examples**:
- **Memory management**
- **Concurrency**
- **Quantum computing**

---

### 3. Automated Theorem Proving

**Sequent calculus** basis for:
- **Focused proofs** (efficient proof search)
- **Connection methods**
- **Tableaux methods** (related to sequent calculus)

---

### 4. Type Theory

**Sequent calculus** relates to:
- **Subtyping** systems
- **Effect systems**
- **Separation logic**

---

## 13.9 Focused Sequent Calculus

### Polarization

**Formulas classified as**:
- **Positive**: ∨, ∃, ⊤, atoms on right
- **Negative**: ∧, ∀, ⊥, atoms on left

**Focused proof**: Work on one formula until can't continue.

**Benefits**:
- **Deterministic** proof search
- **Reduces non-determinism**
- **Efficient automation**

---

## 13.10 Implementasi

### Python Implementation

```python
from dataclasses import dataclass
from typing import List, Set

@dataclass
class Sequent:
    """Represents Γ ⊢ Δ"""
    left: Set[str]   # Antecedent (Γ)
    right: Set[str]  # Succedent (Δ)
    
    def __str__(self):
        left_str = ", ".join(sorted(self.left)) if self.left else "·"
        right_str = ", ".join(sorted(self.right)) if self.right else "·"
        return f"{left_str} ⊢ {right_str}"

class SequentProver:
    def __init__(self):
        self.proof_tree = []
    
    def is_axiom(self, seq: Sequent) -> bool:
        """Check if sequent is an axiom (identity)"""
        # Axiom: some formula appears on both sides
        return len(seq.left & seq.right) > 0
    
    def prove(self, seq: Sequent, depth=0) -> bool:
        """
        Try to prove sequent
        Returns True if provable
        """
        indent = "  " * depth
        self.proof_tree.append(f"{indent}{seq}")
        
        # Check if axiom
        if self.is_axiom(seq):
            self.proof_tree.append(f"{indent}  (Axiom)")
            return True
        
        # Try to decompose formulas
        # For simplicity, only handle atomic formulas and ∧
        
        # Try ∧L (if P ∧ Q on left)
        for formula in seq.left:
            if " ∧ " in formula:
                parts = formula.split(" ∧ ")
                p, q = parts[0], parts[1]
                
                # Create new sequent with P, Q instead of P ∧ Q
                new_left = (seq.left - {formula}) | {p, q}
                new_seq = Sequent(new_left, seq.right)
                
                self.proof_tree.append(f"{indent}  Apply ∧L on {formula}")
                if self.prove(new_seq, depth + 1):
                    return True
        
        # Try ∧R (if need to prove P ∧ Q on right)
        for formula in seq.right:
            if " ∧ " in formula:
                parts = formula.split(" ∧ ")
                p, q = parts[0], parts[1]
                
                # Need to prove both P and Q
                new_right1 = (seq.right - {formula}) | {p}
                new_right2 = (seq.right - {formula}) | {q}
                
                seq1 = Sequent(seq.left, new_right1)
                seq2 = Sequent(seq.left, new_right2)
                
                self.proof_tree.append(f"{indent}  Apply ∧R on {formula}")
                if self.prove(seq1, depth + 1) and self.prove(seq2, depth + 1):
                    return True
        
        # Cannot prove
        self.proof_tree.append(f"{indent}  Cannot prove")
        return False
    
    def print_proof(self):
        """Print proof tree"""
        for line in self.proof_tree:
            print(line)

# Example usage
if __name__ == "__main__":
    # Prove: P, Q ⊢ P ∧ Q
    prover = SequentProver()
    sequent = Sequent({"P", "Q"}, {"P ∧ Q"})
    
    print(f"Proving: {sequent}\n")
    
    if prover.prove(sequent):
        print("\n✓ Provable!\n")
        print("Proof tree:")
        prover.print_proof()
    else:
        print("\n✗ Not provable")
        prover.print_proof()
    
    print("\n" + "="*50 + "\n")
    
    # Prove: P ∧ Q ⊢ Q ∧ P
    prover2 = SequentProver()
    sequent2 = Sequent({"P ∧ Q"}, {"Q ∧ P"})
    
    print(f"Proving: {sequent2}\n")
    
    if prover2.prove(sequent2):
        print("\n✓ Provable!\n")
        print("Proof tree:")
        prover2.print_proof()
    else:
        print("\n✗ Not provable")
        prover2.print_proof()
```

**Output**:
```
Proving: P, Q ⊢ P ∧ Q

✓ Provable!

Proof tree:
P, Q ⊢ P ∧ Q
  Apply ∧R on P ∧ Q
  P, Q ⊢ P
    (Axiom)
  P, Q ⊢ Q
    (Axiom)

==================================================

Proving: P ∧ Q ⊢ Q ∧ P

✓ Provable!

Proof tree:
P ∧ Q ⊢ Q ∧ P
  Apply ∧L on P ∧ Q
  P, Q ⊢ Q ∧ P
    Apply ∧R on Q ∧ P
    P, Q ⊢ Q
      (Axiom)
    P, Q ⊢ P
      (Axiom)
```

---

## 13.11 Latihan dan Soal

### Latihan 1: Basic Sequent

**Problem**: Prove `P ⊢ P ∨ Q` using sequent calculus.

<details>
<summary>Lihat Solusi</summary>

```
Proof:

  ─────────── (Id)
  P ⊢ P
  ─────────── (WR - add Q)
  P ⊢ P, Q
  ─────────────── (∨R)
  P ⊢ P ∨ Q
```

✓ **Proved!**
</details>

---

### Latihan 2: Conjunction

**Problem**: Prove `P ∧ (Q ∧ R) ⊢ (P ∧ Q) ∧ R` (associativity).

<details>
<summary>Lihat Solusi</summary>

```
Proof:

  ──────────────── (Id)   ──────────────── (Id)
  P, Q, R ⊢ P              P, Q, R ⊢ Q
  ──────────────────────────────────────── (∧R)
  P, Q, R ⊢ P ∧ Q
  ──────────────── (Id)
  P, Q, R ⊢ R
  ──────────────────────────────────────── (∧R)
  P, Q, R ⊢ (P ∧ Q) ∧ R
  ──────────────────────────────────────── (∧L on Q ∧ R)
  P, Q ∧ R ⊢ (P ∧ Q) ∧ R
  ──────────────────────────────────────── (∧L on P ∧ (Q ∧ R))
  P ∧ (Q ∧ R) ⊢ (P ∧ Q) ∧ R
```

✓ **Proved!**
</details>

---

### Latihan 3: Implication

**Problem**: Prove `⊢ (P → Q) → ((Q → R) → (P → R))`.

<details>
<summary>Lihat Solusi</summary>

```
Proof:

  ──────────────── (Id)
  P, Q, R ⊢ R
  ──────────────── (→R)
  Q, R ⊢ P → R
  
  ──────────────── (Id)
  P, Q, R ⊢ Q
  ──────────────────────────── (→L on Q → R)
  P, Q, Q → R ⊢ R
  ────────────────────────────── (→R)
  Q, Q → R ⊢ P → R
  
  ──────────────── (Id)
  P, Q ⊢ P
  ──────────────────────────────── (→L on P → Q)
  P, P → Q, Q → R ⊢ R
  ────────────────────────────────── (→R twice)
  P → Q, Q → R ⊢ P → R
  ──────────────────────────────────── (→R)
  Q → R ⊢ (P → Q) → (P → R)
  ────────────────────────────────────── (→R)
  ⊢ (P → Q) → ((Q → R) → (P → R))
```

✓ **Proved!**
</details>

---

### Latihan 4: Multiple Conclusions

**Problem**: Explain why `P ∧ Q ⊢ P, Q` is valid.

<details>
<summary>Lihat Solusi</summary>

**Sequent**: `P ∧ Q ⊢ P, Q`

**Meaning**: "If P ∧ Q is true, then P is true OR Q is true"

This is **valid** because:
- If P ∧ Q is true, then both P and Q are true
- So certainly at least one of {P, Q} is true

**Proof**:
```
  ──────────────── (Id)
  P, Q ⊢ P
  ──────────────── (WR)
  P, Q ⊢ P, Q
  ──────────────── (∧L)
  P ∧ Q ⊢ P, Q
```

✓ **Valid!**
</details>

---

## 13.12 Ringkasan

### Key Takeaways

✅ **Sequent**: `Γ ⊢ Δ` means "Γ implies at least one of Δ"

✅ **Symmetry**: Left and right rules for each connective

✅ **Structural Rules**: Weakening, contraction, exchange

✅ **Cut Elimination**: Central theorem of proof theory

✅ **Applications**: Substructural logics, linear logic, type theory

### Main Rules Summary

```
Identity: 
  Γ, P ⊢ P, Δ

∧L:  Γ, P, Q ⊢ Δ  →  Γ, P ∧ Q ⊢ Δ
∧R:  Γ ⊢ P, Δ  and  Γ ⊢ Q, Δ  →  Γ ⊢ P ∧ Q, Δ

∨L:  Γ, P ⊢ Δ  and  Γ, Q ⊢ Δ  →  Γ, P ∨ Q ⊢ Δ
∨R:  Γ ⊢ P, Q, Δ  →  Γ ⊢ P ∨ Q, Δ

→L:  Γ ⊢ P, Δ  and  Γ, Q ⊢ Δ  →  Γ, P → Q ⊢ Δ
→R:  Γ, P ⊢ Q, Δ  →  Γ ⊢ P → Q, Δ

¬L:  Γ ⊢ P, Δ  →  Γ, ¬P ⊢ Δ
¬R:  Γ, P ⊢ Δ  →  Γ ⊢ ¬P, Δ
```

### Sequent vs Natural Deduction

| Feature | Sequent Calculus | Natural Deduction |
|---------|------------------|-------------------|
| Multiple conclusions | Yes | No |
| Symmetry | Symmetric | Asymmetric |
| Cut elimination | Explicit theorem | Implicit |
| Proof search | More systematic | Less systematic |
| Human readability | Medium | High |

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 13
2. Gentzen, G. "The Collected Papers" (1935, 1969)
3. Troelstra, A. S., & Schwichtenberg, H. "Basic Proof Theory" (2000)

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Deduksi Alami](BAB-12-Deduksi-Alami.md)
- [➡️ BAB Selanjutnya: Pengantar Logika Predikat](../Bagian-III-Logika-Predikat/BAB-14-Pengantar-Logika-Predikat.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Sequent Calculus - the foundation of proof theory!*

**🎉 Bagian II Selesai! Lanjut ke Logika Predikat!**

</div>
