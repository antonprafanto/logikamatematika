# 📋 Cheat Sheet: Logika Matematika

> Referensi cepat untuk operator, hukum, dan rumus logika matematika

---

## 🔤 Notasi dan Simbol

| Simbol | Nama | Dibaca | Contoh |
|--------|------|--------|--------|
| ∧ | Konjungsi | "dan" | P ∧ Q |
| ∨ | Disjungsi | "atau" | P ∨ Q |
| ¬ | Negasi | "tidak" | ¬P |
| → | Implikasi | "jika...maka" | P → Q |
| ↔ | Bi-implikasi | "jika dan hanya jika" | P ↔ Q |
| ⊕ | XOR | "exclusive or" | P ⊕ Q |
| ↑ | NAND | "tidak dan" | P ↑ Q |
| ↓ | NOR | "tidak atau" | P ↓ Q |
| ∀ | Universal | "untuk semua" | ∀x P(x) |
| ∃ | Existential | "ada" / "terdapat" | ∃x P(x) |
| ⊨ | Entailment | "mengakibatkan" | P ⊨ Q |
| ⊢ | Derivation | "dapat diturunkan" | P ⊢ Q |
| ≡ | Ekuivalen | "ekuivalen dengan" | P ≡ Q |
| ⊥ | Falsum | "kontradiksi" | ⊥ |
| ⊤ | Tautologi | "selalu benar" | ⊤ |

---

## 📊 Tabel Kebenaran

### Operator Dasar

```
P | Q | P∧Q | P∨Q | P→Q | P↔Q | P⊕Q
--|---|-----|-----|-----|-----|-----
T | T |  T  |  T  |  T  |  T  |  F
T | F |  F  |  T  |  F  |  F  |  T
F | T |  F  |  T  |  T  |  F  |  T
F | F |  F  |  F  |  T  |  T  |  F
```

### Negasi

```
P | ¬P
--|---
T | F
F | T
```

### NAND dan NOR

```
P | Q | P↑Q | P↓Q
--|---|-----|-----
T | T |  F  |  F
T | F |  T  |  F
F | T |  T  |  F
F | F |  T  |  T
```

---

## 🔧 Hukum-Hukum Logika

### Hukum Identitas
```
P ∧ T ≡ P
P ∨ F ≡ P
```

### Hukum Dominasi
```
P ∧ F ≡ F
P ∨ T ≡ T
```

### Hukum Idempoten
```
P ∧ P ≡ P
P ∨ P ≡ P
```

### Hukum Double Negation
```
¬¬P ≡ P
```

### Hukum Negasi
```
P ∧ ¬P ≡ F
P ∨ ¬P ≡ T
```

### Hukum Komutatif
```
P ∧ Q ≡ Q ∧ P
P ∨ Q ≡ Q ∨ P
P ↔ Q ≡ Q ↔ P
```

### Hukum Asosiatif
```
(P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)
(P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R)
```

### Hukum Distributif
```
P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)
P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)
```

### Hukum De Morgan ⭐
```
¬(P ∧ Q) ≡ ¬P ∨ ¬Q
¬(P ∨ Q) ≡ ¬P ∧ ¬Q
```

### Hukum Absorpsi
```
P ∧ (P ∨ Q) ≡ P
P ∨ (P ∧ Q) ≡ P
```

### Hukum Implikasi ⭐
```
P → Q ≡ ¬P ∨ Q
P → Q ≡ ¬Q → ¬P  (Contrapositive)
```

### Hukum Bi-implikasi
```
P ↔ Q ≡ (P → Q) ∧ (Q → P)
P ↔ Q ≡ (P ∧ Q) ∨ (¬P ∧ ¬Q)
```

---

## 🎯 Bentuk Argumen Valid

### 1. Modus Ponens
```
P → Q
P
─────
∴ Q
```

### 2. Modus Tollens
```
P → Q
¬Q
─────
∴ ¬P
```

### 3. Silogisme Hipotesis
```
P → Q
Q → R
─────
∴ P → R
```

### 4. Silogisme Disjungtif
```
P ∨ Q
¬P
─────
∴ Q
```

### 5. Dilema Konstruktif
```
P → Q
R → S
P ∨ R
─────
∴ Q ∨ S
```

### 6. Simplifikasi
```
P ∧ Q
─────
∴ P
```

### 7. Konjungsi
```
P
Q
─────
∴ P ∧ Q
```

### 8. Adisi
```
P
─────
∴ P ∨ Q
```

---

## 📐 Logika Predikat

### Kuantor

| Kuantor | Simbol | Formula | Dibaca |
|---------|--------|---------|--------|
| **Universal** | ∀ | ∀x P(x) | "Untuk semua x, P(x) benar" |
| **Existential** | ∃ | ∃x P(x) | "Ada x sedemikian sehingga P(x) benar" |

### Negasi Kuantor ⭐
```
¬∀x P(x) ≡ ∃x ¬P(x)    "Tidak semua" = "Ada yang tidak"
¬∃x P(x) ≡ ∀x ¬P(x)    "Tidak ada" = "Semua tidak"
```

### Distribusi Kuantor
```
∀x (P(x) ∧ Q(x)) ≡ ∀x P(x) ∧ ∀x Q(x)   ✓
∃x (P(x) ∨ Q(x)) ≡ ∃x P(x) ∨ ∃x Q(x)   ✓

∀x (P(x) ∨ Q(x)) ≢ ∀x P(x) ∨ ∀x Q(x)   ✗
∃x (P(x) ∧ Q(x)) ≢ ∃x P(x) ∧ ∃x Q(x)   ✗
```

### Pertukaran Kuantor Sejenis
```
∀x ∀y P(x,y) ≡ ∀y ∀x P(x,y)   ✓
∃x ∃y P(x,y) ≡ ∃y ∃x P(x,y)   ✓

∀x ∃y P(x,y) ≢ ∃y ∀x P(x,y)   ✗
```

### Bounded Quantifiers
```
∀x ∈ S, P(x)  ≡  ∀x (x ∈ S → P(x))
∃x ∈ S, P(x)  ≡  ∃x (x ∈ S ∧ P(x))
```

---

## 🔄 Bentuk Normal

### CNF (Conjunctive Normal Form)
**Format**: Konjungsi dari disjungsi
```
(L₁ ∨ L₂ ∨ ...) ∧ (L₃ ∨ L₄ ∨ ...) ∧ ...
```

**Contoh**:
```
(P ∨ Q) ∧ (¬P ∨ R) ∧ (¬Q ∨ ¬R)
```

### DNF (Disjunctive Normal Form)
**Format**: Disjungsi dari konjungsi
```
(L₁ ∧ L₂ ∧ ...) ∨ (L₃ ∧ L₄ ∧ ...) ∨ ...
```

**Contoh**:
```
(P ∧ Q) ∨ (¬P ∧ R) ∨ (Q ∧ ¬R)
```

### Konversi ke CNF

**Langkah-langkah**:
1. Eliminasi ↔ dan →
   - `P ↔ Q` → `(P → Q) ∧ (Q → P)`
   - `P → Q` → `¬P ∨ Q`

2. Push negation inward (De Morgan)
   - `¬(P ∧ Q)` → `¬P ∨ ¬Q`
   - `¬(P ∨ Q)` → `¬P ∧ ¬Q`
   - `¬¬P` → `P`

3. Distribute ∨ over ∧
   - `P ∨ (Q ∧ R)` → `(P ∨ Q) ∧ (P ∨ R)`

**Contoh**:
```
Original: P → (Q ∧ R)

Step 1: ¬P ∨ (Q ∧ R)
Step 2: (tidak ada negasi untuk di-push)
Step 3: (¬P ∨ Q) ∧ (¬P ∨ R)

CNF: (¬P ∨ Q) ∧ (¬P ∨ R)
```

---

## 🛠️ Metode Pembuktian

### 1. Truth Table Method
- Buat tabel dengan semua kemungkinan (2ⁿ baris)
- Evaluasi formula untuk setiap baris
- Check: Tautologi? Kontradiksi? Satisfiable?

### 2. Natural Deduction

**Introduction Rules**:
```
P    Q              P                Q
────────  (∧I)     ───  (∨I)        ───  (∨I)
P ∧ Q              P∨Q              P∨Q

[P]
 ⋮
 Q
────  (→I)
P→Q
```

**Elimination Rules**:
```
P∧Q          P∧Q         P∨Q  [P]  [Q]
───  (∧E)    ───  (∧E)         ⋮    ⋮
 P            Q           R    R    R
                         ──────────────  (∨E)
P→Q  P                         R
──────  (→E)
  Q
```

### 3. Resolution (Resolusi)

**Binary Resolution**:
```
(A ∨ P)    (¬P ∨ B)
─────────────────────  (Res)
      (A ∨ B)
```

**Contoh**:
```
1. P ∨ Q
2. ¬P ∨ R
─────────
3. Q ∨ R    (1,2: Res)
```

### 4. Semantic Tableaux

**Non-branching (α-rules)**:
```
P ∧ Q      ¬(P ∨ Q)
  |           |
  P          ¬P
  Q          ¬Q
```

**Branching (β-rules)**:
```
P ∨ Q       P → Q
  |           |
 / \         / \
P   Q       ¬P  Q
```

---

## 💻 Implementasi dalam Code

### Python

```python
# Truth values
P = True
Q = False

# Operators
result_and = P and Q        # False (konjungsi)
result_or = P or Q          # True (disjungsi)
result_not = not P          # False (negasi)
result_xor = P ^ Q          # True (XOR untuk bool dalam Python gunakan ^)
result_implies = (not P) or Q  # False (implikasi)
result_iff = P == Q         # False (bi-implikasi)

# De Morgan
assert not (P and Q) == (not P) or (not Q)
assert not (P or Q) == (not P) and (not Q)
```

### JavaScript

```javascript
// Truth values
let P = true;
let Q = false;

// Operators
let resultAnd = P && Q;           // false
let resultOr = P || Q;            // true
let resultNot = !P;               // false
let resultXor = P ^ Q;            // true (bitwise XOR)
let resultImplies = !P || Q;      // false
let resultIff = P === Q;          // false
```

### C++

```cpp
bool P = true;
bool Q = false;

// Operators
bool result_and = P && Q;         // false
bool result_or = P || Q;          // true
bool result_not = !P;             // false
bool result_xor = P ^ Q;          // true
bool result_implies = !P || Q;    // false
bool result_iff = P == Q;         // false
```

---

## 📝 Tips & Trik

### 1. Memorize Key Patterns

**Implikasi**:
- `P → Q` benar kecuali saat `P=T, Q=F`
- `P → Q ≡ ¬P ∨ Q` (convert to disjunction)
- `P → Q ≡ ¬Q → ¬P` (contrapositive)

**De Morgan** (flip everything):
- Negasi: flip AND ↔ OR
- Break parentheses: `¬(P ∧ Q)` → `¬P ∨ ¬Q`

### 2. Simplification Strategy

```
1. Eliminate → and ↔ first
2. Push negations inward (De Morgan)
3. Apply distributive laws
4. Cancel complements (P ∧ ¬P = F)
5. Apply absorption/dominance
```

### 3. Proof Strategy

**Direct Proof**: `P ⊢ Q`
- Start with P
- Apply rules
- Derive Q

**Indirect Proof** (Contradiction): `P ⊢ Q`
- Assume ¬Q
- Derive contradiction (⊥)
- Conclude Q

**Proof by Cases**: `P ∨ Q ⊢ R`
- Case 1: Assume P, derive R
- Case 2: Assume Q, derive R
- Conclude R

### 4. Common Mistakes ⚠️

| Mistake | Correct |
|---------|---------|
| `∀x P(x) ∨ ∀x Q(x)` = `∀x (P(x) ∨ Q(x))` ❌ | NOT equivalent! |
| `∃x P(x) ∧ ∃x Q(x)` = `∃x (P(x) ∧ Q(x))` ❌ | NOT equivalent! |
| `∀x ∃y P(x,y)` = `∃y ∀x P(x,y)` ❌ | Order matters! |
| `P → Q` means "P only if Q" ❌ | Actually "if P then Q" |

---

## 🎯 Quick Checks

### Is it a Tautology?
- Truth table: All T? → Tautology ✓
- Example: `P ∨ ¬P` (Law of Excluded Middle)

### Is it a Contradiction?
- Truth table: All F? → Contradiction ✓
- Example: `P ∧ ¬P` (Contradiction)

### Is it Satisfiable?
- Truth table: At least one T? → Satisfiable ✓
- Example: `P ∧ Q` (satisfiable when P=T, Q=T)

### Are they Equivalent?
- Truth table: Same column? → Equivalent ✓
- Or: Show `P ↔ Q` is tautology

---

## 🔗 Quick Links

- 📖 [Main Material](MATERI_LENGKAP_LOGIKA_MATEMATIKA.md)
- 🏠 [README](README.md)
- 🌐 [Truth Table Generator](https://web.stanford.edu/class/cs103/tools/truth-table-tool/)
- 🔧 [Z3 Solver Online](https://rise4fun.com/z3)

---

<div align="center">

**Print this page for quick reference! 📄**

[⬆️ Back to Top](#-cheat-sheet-logika-matematika)

</div>
