# BAB 16: Kuantor-kuantor (Quantifiers)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-15-Komponen-Sintaktik.md) | [➡️ BAB Selanjutnya](BAB-17-Penafsiran-Validitas.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami universal (∀) dan existential (∃) quantifiers secara mendalam
- ✅ Menerapkan quantifier negation rules
- ✅ Bekerja dengan nested quantifiers
- ✅ Memahami quantifier scope dan binding
- ✅ Menerapkan quantifier equivalences

---

## 16.1 Universal Quantifier (∀)

### Definisi

> **Universal quantifier** `∀x Φ(x)` berarti "**For all** x in domain, Φ(x) is true"

**Notations**:
```
∀x Φ(x)         Standard notation
(∀x) Φ(x)       With explicit parentheses
∀x. Φ(x)        With dot separator
(x) Φ(x)        Alternative notation (older texts)
```

**Read as**:
- "For all x, Φ(x)"
- "For every x, Φ(x)"
- "For each x, Φ(x)"

---

### Semantics (Informal)

**∀x Φ(x) is TRUE** iff Φ(a) is true **for every** individual a in domain.

**Equivalent to** (if domain = {a₁, a₂, ..., aₙ}):
```
∀x Φ(x) ≡ Φ(a₁) ∧ Φ(a₂) ∧ ... ∧ Φ(aₙ)
```

**Like a big conjunction!**

---

### Example 16.1: Simple Universal

**Formula**: `∀x Human(x)`

**Domain**: {Socrates, Plato, Aristotle}

**Expansion**:
```
Human(Socrates) ∧ Human(Plato) ∧ Human(Aristotle)
```

**TRUE** if all three are human.  
**FALSE** if even one is not human.

---

### Example 16.2: Conditional with Universal

**Formula**: `∀x (Human(x) → Mortal(x))`

**Meaning**: "All humans are mortal"

**Domain**: {Socrates, Dog, Rock}

**Expansion**:
```
(Human(Socrates) → Mortal(Socrates)) ∧
(Human(Dog) → Mortal(Dog)) ∧
(Human(Rock) → Mortal(Rock))
```

**Analysis**:
- Socrates: Human(S)=T, must have Mortal(S)=T
- Dog: Human(D)=F, so implication is T (vacuously)
- Rock: Human(R)=F, so implication is T (vacuously)

**Pattern**: ∀x (P(x) → Q(x)) is standard for "All P are Q"

---

### Common Patterns

**"All A are B"**:
```
∀x (A(x) → B(x))
```

**Example**: "All students are hardworking"
```
∀x (Student(x) → Hardworking(x))
```

**⚠️ Common mistake**:
```
∀x (Student(x) ∧ Hardworking(x))  ✗ WRONG!
```
This means "**Everything** is a hardworking student" (too strong!)

---

## 16.2 Existential Quantifier (∃)

### Definisi

> **Existential quantifier** `∃x Φ(x)` berarti "**There exists** x in domain such that Φ(x) is true"

**Notations**:
```
∃x Φ(x)         Standard notation
(∃x) Φ(x)       With explicit parentheses
∃x. Φ(x)        With dot separator
```

**Read as**:
- "There exists x such that Φ(x)"
- "For some x, Φ(x)"
- "There is an x such that Φ(x)"

---

### Semantics (Informal)

**∃x Φ(x) is TRUE** iff Φ(a) is true **for at least one** individual a in domain.

**Equivalent to** (if domain = {a₁, a₂, ..., aₙ}):
```
∃x Φ(x) ≡ Φ(a₁) ∨ Φ(a₂) ∨ ... ∨ Φ(aₙ)
```

**Like a big disjunction!**

---

### Example 16.3: Simple Existential

**Formula**: `∃x Prime(x)`

**Domain**: {1, 2, 3, 4}

**Expansion**:
```
Prime(1) ∨ Prime(2) ∨ Prime(3) ∨ Prime(4)
```

**TRUE** because Prime(2) and Prime(3) are true.  
**Need only ONE** to be true!

---

### Example 16.4: Existential with Conjunction

**Formula**: `∃x (Prime(x) ∧ Even(x))`

**Meaning**: "There exists an even prime number"

**Domain**: Natural numbers

**TRUE**: x = 2 satisfies it!

**Pattern**: ∃x (P(x) ∧ Q(x)) is standard for "Some A are B"

---

### Common Patterns

**"Some A are B"**:
```
∃x (A(x) ∧ B(x))
```

**Example**: "Some students are hardworking"
```
∃x (Student(x) ∧ Hardworking(x))
```

**⚠️ Common mistake**:
```
∃x (Student(x) → Hardworking(x))  ✗ Usually not what you want!
```
This is true if **anything** is either non-student or hardworking (too weak!)

---

## 16.3 Quantifier Negation

### De Morgan's Laws for Quantifiers

**Fundamental equivalences**:

```
¬∀x Φ(x) ≡ ∃x ¬Φ(x)
¬∃x Φ(x) ≡ ∀x ¬Φ(x)
```

**Intuition**:
- "Not everyone is happy" = "Someone is unhappy"
- "No one is perfect" = "Everyone is imperfect"

---

### Example 16.5: Negating Universal

**Start**: `∀x Human(x)`

**Negate**:
```
¬∀x Human(x)
≡ ∃x ¬Human(x)
```

**Meaning**:
- Original: "Everyone is human"
- Negation: "Someone is not human"

---

### Example 16.6: Negating Existential

**Start**: `∃x Perfect(x)`

**Negate**:
```
¬∃x Perfect(x)
≡ ∀x ¬Perfect(x)
```

**Meaning**:
- Original: "Someone is perfect"
- Negation: "No one is perfect" = "Everyone is imperfect"

---

### Example 16.7: Complex Negation

**Start**: `∀x (Student(x) → PassedExam(x))`

**Negate**:
```
¬∀x (Student(x) → PassedExam(x))
≡ ∃x ¬(Student(x) → PassedExam(x))
≡ ∃x ¬(¬Student(x) ∨ PassedExam(x))
≡ ∃x (Student(x) ∧ ¬PassedExam(x))
```

**Meaning**:
- Original: "All students passed the exam"
- Negation: "Some student did not pass the exam"

---

## 16.4 Nested Quantifiers

### Order Matters!

**Two quantifiers of same type**: Order **doesn't** matter

```
∀x ∀y Φ(x,y) ≡ ∀y ∀x Φ(x,y)
∃x ∃y Φ(x,y) ≡ ∃y ∃x Φ(x,y)
```

**Mixed quantifiers**: Order **MATTERS!**

```
∀x ∃y Φ(x,y) ≠ ∃y ∀x Φ(x,y)  (generally)
```

---

### Example 16.8: ∀∃ vs ∃∀

**Formula 1**: `∀x ∃y Loves(x, y)`

**Meaning**: "Everyone loves **someone** (possibly different people)"

**Example scenario**:
- Alice loves Bob
- Bob loves Carol
- Carol loves Alice

**Each person** can love **different** person. ✓

---

**Formula 2**: `∃y ∀x Loves(x, y)`

**Meaning**: "There is **someone** who is loved by **everyone**"

**Example scenario**:
- Everyone loves Bob

**Same person** loved by all! ✓

---

**Are they equivalent?** **NO!**

**Counterexample**:
- Domain: {Alice, Bob}
- Formula 1 TRUE: Alice loves Bob, Bob loves Alice
- Formula 2 FALSE: No single person loved by both

**Direction**: `∃y ∀x Φ(x,y) → ∀x ∃y Φ(x,y)` is **valid**  
(If someone loved by all, then everyone loves someone)

**But reverse is NOT valid!**

---

### Example 16.9: Three Quantifiers

**Different orderings**:

**a)** `∀x ∀y ∃z Φ(x,y,z)`  
"For every x and y, there exists z"

**b)** `∀x ∃y ∀z Φ(x,y,z)`  
"For every x, there exists y such that for all z"

**c)** `∃x ∀y ∀z Φ(x,y,z)`  
"There exists x such that for all y and z"

**Very different meanings!**

---

### Real-World Example: Limits

**Mathematical limit**:

**∀ε>0 ∃δ>0 ∀x (|x-a|<δ → |f(x)-L|<ε)**

**Cannot reorder!**

**Meaning**: "For any desired closeness ε, we can find δ such that for all x within δ of a, f(x) is within ε of L"

---

## 16.5 Quantifier Scope

### Scope Definition

> **Scope** of quantifier `∀x` or `∃x` is the formula immediately following it.

### Example 16.10: Scope Ambiguity

**Formula**: `∀x P(x) → Q(x)`

**Parsed as**: `(∀x P(x)) → Q(x)`

**Scope of ∀x**: **Only** P(x)  
**x in Q(x) is FREE!**

**Probably intended**: `∀x (P(x) → Q(x))`

**Use parentheses!**

---

### Example 16.11: Multiple Scopes

**Formula**: `∀x (P(x) ∧ ∃y R(x,y))`

**Scopes**:
- Scope of ∀x: `P(x) ∧ ∃y R(x,y)`
- Scope of ∃y: `R(x,y)`

**Variables**:
- x: bound by ∀x throughout its scope
- y: bound by ∃y in `R(x,y)`

---

### Renaming Bound Variables (α-conversion)

**Bound variables** can be renamed (if no capture):

```
∀x Φ(x) ≡ ∀y Φ(y)    (if y not in Φ)
∃x Φ(x) ≡ ∃z Φ(z)    (if z not in Φ)
```

**Example**:
```
∀x Human(x) ≡ ∀y Human(y) ≡ ∀person Human(person)
```

**All equivalent!** Variable name doesn't matter.

---

## 16.6 Quantifier Equivalences

### Basic Equivalences

**Idempotence**:
```
∀x ∀x Φ(x) ≡ ∀x Φ(x)
∃x ∃x Φ(x) ≡ ∃x Φ(x)
```

**Swapping same quantifiers**:
```
∀x ∀y Φ(x,y) ≡ ∀y ∀x Φ(x,y)
∃x ∃y Φ(x,y) ≡ ∃y ∃x Φ(x,y)
```

**Negation** (De Morgan):
```
¬∀x Φ(x) ≡ ∃x ¬Φ(x)
¬∃x Φ(x) ≡ ∀x ¬Φ(x)
```

---

### Distribution Laws

**Universal over conjunction**:
```
∀x (Φ(x) ∧ Ψ(x)) ≡ (∀x Φ(x)) ∧ (∀x Ψ(x))
```

**Example**:
```
∀x (Even(x) ∧ Prime(x)) ≡ (∀x Even(x)) ∧ (∀x Prime(x))
```

---

**Existential over disjunction**:
```
∃x (Φ(x) ∨ Ψ(x)) ≡ (∃x Φ(x)) ∨ (∃x Ψ(x))
```

**Example**:
```
∃x (Even(x) ∨ Odd(x)) ≡ (∃x Even(x)) ∨ (∃x Odd(x))
```

---

**⚠️ NOT equivalent**:

```
∀x (Φ(x) ∨ Ψ(x)) ≢ (∀x Φ(x)) ∨ (∀x Ψ(x))
∃x (Φ(x) ∧ Ψ(x)) ≢ (∃x Φ(x)) ∧ (∃x Ψ(x))
```

**Counterexample** for second:
- Domain: {1, 2}
- Φ(x) = Even(x), Ψ(x) = Odd(x)
- ∃x Even(x) = TRUE (x=2)
- ∃x Odd(x) = TRUE (x=1)
- (∃x Even(x)) ∧ (∃x Odd(x)) = TRUE
- But ∃x (Even(x) ∧ Odd(x)) = FALSE (no number both even and odd)

---

### Vacuous Quantification

**If x doesn't appear in Φ**:

```
∀x Φ ≡ Φ
∃x Φ ≡ Φ
```

**Example**:
```
∀x (P ∨ Q) ≡ P ∨ Q
∃y (2 + 2 = 4) ≡ (2 + 2 = 4)
```

**Quantifier is useless!**

---

## 16.7 Restricted Quantifiers

### Notation

**Restricted universal**:
```
∀x ∈ A. Φ(x)  means  ∀x (x ∈ A → Φ(x))
```

**Restricted existential**:
```
∃x ∈ A. Φ(x)  means  ∃x (x ∈ A ∧ Φ(x))
```

---

### Example 16.12: Natural Numbers

**Standard**:
```
∀n ∈ ℕ. Even(n) ∨ Odd(n)
```

**Expanded**:
```
∀n (n ∈ ℕ → Even(n) ∨ Odd(n))
```

**Meaning**: "Every natural number is even or odd"

---

### Example 16.13: Database Query

**Standard**:
```
∃s ∈ Students. GPA(s) > 3.5
```

**Expanded**:
```
∃s (Student(s) ∧ GPA(s) > 3.5)
```

**SQL**:
```sql
SELECT * FROM Students WHERE gpa > 3.5
```

---

## 16.8 Unique Existence (∃!)

### Notation

**Unique existential**:
```
∃!x Φ(x)  means  "There exists exactly one x such that Φ(x)"
```

**Expansion**:
```
∃!x Φ(x) ≡ ∃x (Φ(x) ∧ ∀y (Φ(y) → y = x))
```

**Alternative**:
```
∃!x Φ(x) ≡ ∃x Φ(x) ∧ ∀x ∀y (Φ(x) ∧ Φ(y) → x = y)
```

---

### Example 16.14: Unique Solution

**Statement**: "The equation x² = 4 has exactly one positive solution"

**Formula**:
```
∃!x (x > 0 ∧ x² = 4)
```

**Expanded**:
```
∃x (x > 0 ∧ x² = 4 ∧ ∀y (y > 0 ∧ y² = 4 → y = x))
```

**x = 2** is the unique solution.

---

## 16.9 Aplikasi dalam Programming

### SQL Queries

**Universal**: "All students passed"
```sql
NOT EXISTS (
  SELECT * FROM Students
  WHERE grade < 60
)

-- Equivalent to ¬∃x (Student(x) ∧ Grade(x) < 60)
-- Which is ∀x (Student(x) → Grade(x) ≥ 60)
```

**Existential**: "Some student failed"
```sql
EXISTS (
  SELECT * FROM Students
  WHERE grade < 60
)

-- ∃x (Student(x) ∧ Grade(x) < 60)
```

---

### Python List Comprehensions

**Universal**: `all()`
```python
# ∀x ∈ numbers. x > 0
all(x > 0 for x in numbers)
```

**Existential**: `any()`
```python
# ∃x ∈ numbers. x > 100
any(x > 100 for x in numbers)
```

**Filtered**:
```python
# ∀x ∈ students. Grade(x) ≥ 60
all(student.grade >= 60 for student in students)

# ∃x ∈ students. GPA(x) > 3.5
any(student.gpa > 3.5 for student in students)
```

---

### Type Theory (Dependent Types)

**Π-types** (dependent product) = Universal:
```
Π(x : A). B(x)
```

**Σ-types** (dependent sum) = Existential:
```
Σ(x : A). B(x)
```

**Example (Agda)**:
```agda
-- ∀n:ℕ. Even(n) ∨ Odd(n)
parity : (n : ℕ) → Even n ⊎ Odd n

-- ∃n:ℕ. Prime(n) ∧ Even(n)
evenPrime : Σ ℕ (λ n → Prime n × Even n)
evenPrime = (2 , proof)
```

---

## 16.10 Latihan dan Soal

### Latihan 1: Translation

Translate to FOL:

**a)** "Every student loves some course"

<details>
<summary>Lihat Solusi</summary>

```
∀s (Student(s) → ∃c (Course(c) ∧ Loves(s, c)))
```

Or with restricted quantifiers:
```
∀s ∈ Students. ∃c ∈ Courses. Loves(s, c)
```
</details>

---

**b)** "Some course is loved by every student"

<details>
<summary>Lihat Solusi</summary>

```
∃c (Course(c) ∧ ∀s (Student(s) → Loves(s, c)))
```

Or:
```
∃c ∈ Courses. ∀s ∈ Students. Loves(s, c)
```

**Note**: Very different from (a)!
</details>

---

### Latihan 2: Negation

Negate: `∀x ∃y (P(x) → Q(y))`

<details>
<summary>Lihat Solusi</summary>

**Step by step**:
```
¬∀x ∃y (P(x) → Q(y))
≡ ∃x ¬∃y (P(x) → Q(y))
≡ ∃x ∀y ¬(P(x) → Q(y))
≡ ∃x ∀y ¬(¬P(x) ∨ Q(y))
≡ ∃x ∀y (P(x) ∧ ¬Q(y))
```

**Result**: `∃x ∀y (P(x) ∧ ¬Q(y))`
</details>

---

### Latihan 3: Equivalence Check

Are these equivalent?

**a)** `∀x (P(x) ∨ Q(x))`  
**b)** `(∀x P(x)) ∨ (∀x Q(x))`

<details>
<summary>Lihat Solusi</summary>

**NO, not equivalent!**

**Counterexample**:
- Domain: {1, 2}
- P(1) = T, P(2) = F
- Q(1) = F, Q(2) = T

**(a)** `∀x (P(x) ∨ Q(x))`:
- P(1) ∨ Q(1) = T ∨ F = T
- P(2) ∨ Q(2) = F ∨ T = T
- **Result: TRUE**

**(b)** `(∀x P(x)) ∨ (∀x Q(x))`:
- ∀x P(x) = P(1) ∧ P(2) = T ∧ F = F
- ∀x Q(x) = Q(1) ∧ Q(2) = F ∧ T = F
- F ∨ F = **FALSE**

**Direction that IS valid**: (b) → (a)  
If (b) is true, then (a) is true.
</details>

---

### Latihan 4: Nested Quantifiers

Express: "For every person, there's someone older"

<details>
<summary>Lihat Solusi</summary>

**Predicates**:
- Person(x)
- Older(x, y): x is older than y

**Formula**:
```
∀x (Person(x) → ∃y (Person(y) ∧ Older(y, x)))
```

**Or with restricted quantifiers**:
```
∀x ∈ Persons. ∃y ∈ Persons. Older(y, x)
```

**Note**: This is actually FALSE in reality (there's a oldest person)! But it's valid FOL.
</details>

---

## 16.11 Ringkasan

### Key Takeaways

✅ **∀x Φ(x)**: "For all x, Φ(x)" - like big conjunction

✅ **∃x Φ(x)**: "There exists x such that Φ(x)" - like big disjunction

✅ **Negation**: ¬∀x ≡ ∃x ¬, and ¬∃x ≡ ∀x ¬

✅ **Order matters**: ∀x ∃y ≠ ∃y ∀x (generally)

✅ **Scope**: Use parentheses to clarify!

### Quantifier Patterns

```
"All A are B":
  ∀x (A(x) → B(x))         ✓
  ∀x (A(x) ∧ B(x))         ✗ Wrong!

"Some A are B":
  ∃x (A(x) ∧ B(x))         ✓
  ∃x (A(x) → B(x))         ✗ Usually wrong!
```

### Equivalences

```
Negation:
  ¬∀x Φ(x) ≡ ∃x ¬Φ(x)
  ¬∃x Φ(x) ≡ ∀x ¬Φ(x)

Same quantifiers:
  ∀x ∀y Φ ≡ ∀y ∀x Φ
  ∃x ∃y Φ ≡ ∃y ∃x Φ

Distribution:
  ∀x (Φ ∧ Ψ) ≡ (∀x Φ) ∧ (∀x Ψ)
  ∃x (Φ ∨ Ψ) ≡ (∃x Φ) ∨ (∃x Ψ)

Implication (ONE WAY):
  ∃y ∀x Φ(x,y) → ∀x ∃y Φ(x,y)
  (But NOT reverse!)
```

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 16
2. Enderton, H. "A Mathematical Introduction to Logic" - Chapter 2
3. Kleene, S. C. "Mathematical Logic" (1967)

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Komponen Sintaktik](BAB-15-Komponen-Sintaktik.md)
- [➡️ BAB Selanjutnya: Penafsiran dan Validitas](BAB-17-Penafsiran-Validitas.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Quantifiers - the power of FOL!*

</div>
