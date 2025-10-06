# BAB 14: Pengantar Logika Predikat (First-Order Logic)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](../Bagian-II-Metode-Pembuktian/BAB-13-Kalkulus-Deret.md) | [➡️ BAB Selanjutnya](BAB-15-Komponen-Sintaktik.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami keterbatasan logika proposisional
- ✅ Mengenal First-Order Logic (FOL) dan komponennya
- ✅ Memahami quantifiers (∀ dan ∃)
- ✅ Menulis formulas FOL untuk menyatakan knowledge
- ✅ Memahami aplikasi FOL dalam CS (databases, AI, verification)

---

## 14.1 Keterbatasan Logika Proposisional

### Masalah dengan Propositional Logic

**Contoh**: Express "All humans are mortal"

**Attempt 1** - Proposisional:
```
P₁: Socrates is mortal
P₂: Plato is mortal
P₃: Aristotle is mortal
...
Pₙ: Person n is mortal
```

**Problems**:
- ❌ Infinite number of propositions!
- ❌ Can't express **general** pattern
- ❌ Can't reason about **all** or **some**
- ❌ Can't express relationships

---

### What We Need

**Requirements**:
1. **Variables**: x, y, z (for individuals)
2. **Quantifiers**: ∀ (for all), ∃ (there exists)
3. **Predicates**: Properties and relations
4. **Functions**: Operations on individuals

**Solution**: **First-Order Logic (FOL)**! 🎯

---

## 14.2 Pengenalan First-Order Logic

### Definisi

> **First-Order Logic** (FOL), juga disebut **Predicate Logic** atau **Quantificational Logic**, adalah extension dari propositional logic yang menambahkan:
> - Variables over individuals
> - Quantifiers (∀, ∃)
> - Predicates
> - Functions

**Also called**:
- Predicate Calculus
- Quantificational Logic
- Lower Predicate Calculus

---

### Comparison: Propositional vs First-Order

| Feature | Propositional | First-Order |
|---------|---------------|-------------|
| **Atomic formulas** | P, Q, R | Human(x), Loves(x,y) |
| **Variables** | None | x, y, z, ... |
| **Quantifiers** | None | ∀, ∃ |
| **Predicates** | None | P(x), R(x,y), ... |
| **Functions** | None | father(x), +(x,y), ... |
| **Expressiveness** | Limited | Much higher |
| **Decidability** | Decidable | Semi-decidable |

---

### Example: "All Humans are Mortal"

**Propositional Logic** (inadequate):
```
P₁ ∧ P₂ ∧ P₃ ∧ ... ∧ Pₙ  (infinite!)
```

**First-Order Logic** (elegant):
```
∀x (Human(x) → Mortal(x))
```

**One formula!** 🎉

---

## 14.3 Komponen First-Order Logic

### 1. Domain of Discourse (Universe)

> **Domain** adalah set of objects yang kita bicarakan.

**Examples**:
- **Natural numbers**: {0, 1, 2, 3, ...}
- **People**: {Socrates, Plato, Aristotle, ...}
- **Animals**: All living animals
- **Strings**: All finite strings over alphabet

**Notation**: Often denoted **D** or **U** (universe).

---

### 2. Constants

> **Constants** are names untuk specific individuals dalam domain.

**Examples**:
```
a, b, c          (generic names)
socrates         (specific person)
0, 1, 2          (numbers)
"hello"          (string)
```

**Interpretation**: Each constant denotes **one specific** object in domain.

---

### 3. Variables

> **Variables** range over **all** individuals dalam domain.

**Examples**:
```
x, y, z          (common notation)
person, animal   (descriptive names)
```

**Interpretation**: Variable dapat di-instantiate ke **any** object dalam domain.

---

### 4. Predicates

> **Predicates** express **properties** atau **relations**.

**Notation**: `P(t₁, t₂, ..., tₙ)`

**Arity** (number of arguments):
- **Unary (1-ary)**: `Human(x)` - property
- **Binary (2-ary)**: `Loves(x, y)` - relation
- **Ternary (3-ary)**: `Between(x, y, z)`
- **n-ary**: General case

**Examples**:
```
Human(socrates)         "Socrates is human"
Prime(7)                "7 is prime"
Loves(john, mary)       "John loves Mary"
Between(2, 3, 5)        "3 is between 2 and 5"
```

---

### 5. Functions

> **Functions** map individuals to individuals.

**Notation**: `f(t₁, t₂, ..., tₙ)`

**Examples**:
```
father(x)              "Father of x"
+(x, y)                "Sum of x and y"
successor(n)           "n + 1"
age(person)            "Age of person"
```

**Note**: Functions return **individuals**, predicates return **truth values**.

---

### 6. Quantifiers

**Two quantifiers**:

**Universal (∀)**: "For all"
```
∀x P(x)    "For all x, P(x) is true"
```

**Existential (∃)**: "There exists"
```
∃x P(x)    "There exists x such that P(x) is true"
```

---

## 14.4 Syntax First-Order Logic

### Terms

> **Term** adalah expression yang denotes individual.

**Definition** (recursive):
1. **Variable** adalah term: x, y, z
2. **Constant** adalah term: a, b, c, 0, 1
3. **Function application** adalah term: f(t₁, ..., tₙ) jika t₁, ..., tₙ adalah terms

**Examples**:
```
x                       (variable)
socrates                (constant)
father(x)               (function of variable)
+(2, 3)                 (function of constants)
father(father(x))       (nested functions)
```

---

### Atomic Formulas

> **Atomic formula** adalah predicate applied to terms.

**Form**: `P(t₁, t₂, ..., tₙ)`

**Examples**:
```
Human(socrates)
Loves(john, mary)
Prime(7)
>(x, 0)
=(+(2,3), 5)
```

---

### Formulas (Well-Formed Formulas)

**Definition** (recursive):

1. **Atomic formula** adalah formula
2. If Φ is formula, then **¬Φ** is formula
3. If Φ, Ψ are formulas, then **Φ ∧ Ψ**, **Φ ∨ Ψ**, **Φ → Ψ** are formulas
4. If Φ is formula and x is variable, then **∀x Φ** and **∃x Φ** are formulas

**Examples**:
```
∀x (Human(x) → Mortal(x))
∃x (Prime(x) ∧ Even(x))
∀x ∃y Loves(x, y)
¬∃x (Perfect(x) ∧ ¬Flawed(x))
```

---

## 14.5 Quantifiers (Detail)

### Universal Quantifier (∀)

**Notation**: `∀x Φ(x)`

**Meaning**: "For **all** x in domain, Φ(x) is true"

**Examples**:

**Example 14.1**:
```
∀x (x > 0 → x² > 0)
```
"For all x, if x is positive, then x² is positive"

**Example 14.2**:
```
∀person (Human(person) → Mortal(person))
```
"All humans are mortal"

---

### Existential Quantifier (∃)

**Notation**: `∃x Φ(x)`

**Meaning**: "There **exists** x in domain such that Φ(x) is true"

**Examples**:

**Example 14.3**:
```
∃x (Prime(x) ∧ Even(x))
```
"There exists a prime even number" (True: 2)

**Example 14.4**:
```
∃person Loves(mary, person)
```
"Mary loves someone"

---

### Nested Quantifiers

**Order matters!**

**Example 14.5**: 
```
∀x ∃y Loves(x, y)
```
"Everyone loves **someone** (possibly different people)"

**Example 14.6**:
```
∃y ∀x Loves(x, y)
```
"There exists **someone** loved by **everyone**"

**These are DIFFERENT!**

---

### Negation of Quantifiers

**De Morgan's Laws for Quantifiers**:

```
¬∀x Φ(x) ≡ ∃x ¬Φ(x)
¬∃x Φ(x) ≡ ∀x ¬Φ(x)
```

**Examples**:

```
¬∀x Human(x)  ≡  ∃x ¬Human(x)
"Not everyone is human" = "Someone is not human"

¬∃x Perfect(x)  ≡  ∀x ¬Perfect(x)
"No one is perfect" = "Everyone is imperfect"
```

---

## 14.6 Expressing Knowledge in FOL

### Example 14.7: Family Relations

**Domain**: People

**Predicates**:
- `Parent(x, y)`: x is parent of y
- `Male(x)`: x is male
- `Female(x)`: x is female

**Knowledge**:
```
∀x∀y (Parent(x, y) → Human(x) ∧ Human(y))
"Parents and children are humans"

∀x∀y (Parent(x, y) ∧ Male(x) → Father(x, y))
"Male parent is father"

∀x (∃y Parent(x, y) → Adult(x))
"Anyone with a child is an adult"
```

---

### Example 14.8: Number Theory

**Domain**: Natural numbers

**Predicates/Functions**:
- `Even(x)`, `Odd(x)`: Properties
- `Prime(x)`: x is prime
- `+(x, y)`: Addition
- `*(x, y)`: Multiplication

**Knowledge**:
```
∀x (Even(x) ↔ ∃y (x = *(2, y)))
"x is even iff x = 2y for some y"

∀x (Prime(x) → x > 1 ∧ ∀y∀z (x = *(y, z) → y = 1 ∨ z = 1))
"Prime numbers definition"

∃x (Prime(x) ∧ Even(x))
"There exists an even prime" (True: x=2)
```

---

### Example 14.9: Database Schema

**Domain**: Students, Courses

**Predicates**:
- `Student(x)`
- `Course(c)`
- `Enrolled(s, c)`: Student s enrolled in course c
- `Passed(s, c)`: Student s passed course c

**Queries as FOL**:
```
∃s (Student(s) ∧ ∀c (Course(c) → Passed(s, c)))
"There exists a student who passed all courses"

∀c (Course(c) → ∃s Enrolled(s, c))
"Every course has at least one student"

∃c (Course(c) ∧ ¬∃s Enrolled(s, c))
"There exists a course with no students"
```

**SQL Connection**:
```sql
-- ∃s ∀c Passed(s, c)
SELECT DISTINCT s.student_id
FROM Students s
WHERE NOT EXISTS (
    SELECT * FROM Courses c
    WHERE NOT EXISTS (
        SELECT * FROM Passed p
        WHERE p.student_id = s.student_id
          AND p.course_id = c.course_id
    )
);
```

---

## 14.7 Aplikasi dalam Ilmu Komputer

### 1. Databases (SQL)

**SQL queries** can be expressed in FOL!

**Example**:
```sql
SELECT name FROM Users WHERE age > 18
```

**In FOL**:
```
{x | ∃age (User(x) ∧ Age(x, age) ∧ age > 18)}
```

**Datalog** (logic programming for databases) is subset of FOL.

---

### 2. Knowledge Representation (AI)

**Expert systems** use FOL untuk represent knowledge.

**Example - Medical Diagnosis**:
```
∀x (Fever(x) ∧ Cough(x) ∧ Fatigue(x) → MayHave(x, flu))

∀x (Symptom(x, headache) ∧ Symptom(x, nausea) 
    → Recommend(x, see_doctor))
```

**Inference engines** reason over FOL knowledge bases.

---

### 3. Program Verification

**Hoare Logic** uses FOL untuk specify program properties.

**Example**:
```
{P(x)} 
  y := x + 1
{Q(y)}
```

Where P, Q are FOL formulas:
```
P(x): x ≥ 0
Q(y): y > 0
```

**Verification**: Prove `P(x) → Q(x+1)`

---

### 4. Semantic Web (OWL, RDF)

**Ontologies** defined using FOL-like languages.

**Example** (OWL):
```xml
<owl:Class rdf:ID="Person"/>
<owl:Class rdf:ID="Student">
  <rdfs:subClassOf rdf:resource="#Person"/>
</owl:Class>

<!-- In FOL: ∀x (Student(x) → Person(x)) -->
```

---

### 5. Prolog (Logic Programming)

**Prolog** is essentially **Horn clauses** (subset of FOL).

**Example**:
```prolog
% FOL: ∀X∀Y (Parent(X,Y) ∧ Male(X) → Father(X,Y))
father(X, Y) :- parent(X, Y), male(X).

% Query: ∃Y Father(john, Y)
?- father(john, Y).
```

---

## 14.8 Free and Bound Variables

### Bound Variables

> Variable is **bound** if it's in scope of quantifier.

**Examples**:
```
∀x Human(x)         x is bound
∃y Loves(x, y)      y is bound, x is free
∀x ∃y Loves(x, y)   Both x, y are bound
```

### Free Variables

> Variable is **free** if it's NOT bound by any quantifier.

**Examples**:
```
Human(x)            x is free
Loves(x, mary)      x is free
∀y Loves(x, y)      y is bound, x is free
```

### Sentences (Closed Formulas)

> **Sentence** adalah formula dengan **no free variables** (semua bound).

**Examples**:
```
∀x Human(x)              Sentence ✓
∃x ∀y Loves(x, y)        Sentence ✓
Loves(x, mary)           NOT sentence (x is free) ✗
∀x Loves(x, y)           NOT sentence (y is free) ✗
```

**Importance**: Only **sentences** have definite truth value!

---

## 14.9 Scope of Quantifiers

**Scope** of `∀x` or `∃x` is the formula immediately following it.

**Examples**:

**Example 14.10**:
```
∀x (P(x) → Q(x))
```
Scope of ∀x: `P(x) → Q(x)`

**Example 14.11**:
```
∀x P(x) → Q(x)
```
Scope of ∀x: **only** `P(x)`!  
This is `(∀x P(x)) → Q(x)`, where x in Q(x) is **free**!

**Use parentheses** to clarify!

---

## 14.10 Latihan dan Soal

### Latihan 1: Translation to FOL

Translate ke FOL:

**a)** "All students are hardworking"

<details>
<summary>Lihat Solusi</summary>

**Domain**: People

**Predicates**: 
- Student(x)
- Hardworking(x)

**FOL**:
```
∀x (Student(x) → Hardworking(x))
```
</details>

---

**b)** "Some student is not hardworking"

<details>
<summary>Lihat Solusi</summary>

```
∃x (Student(x) ∧ ¬Hardworking(x))
```

**OR**:
```
¬∀x (Student(x) → Hardworking(x))
```
(Negation of (a))
</details>

---

**c)** "Every person has a mother"

<details>
<summary>Lihat Solusi</summary>

**Predicates**:
- Person(x)
- Mother(x, y): x is mother of y

**FOL**:
```
∀x (Person(x) → ∃y Mother(y, x))
```

**OR with function**:
```
∀x (Person(x) → Person(mother(x)))
```
Using function `mother(x)` that returns mother of x.
</details>

---

### Latihan 2: Nested Quantifiers

What's the difference?

**a)** `∀x ∃y Loves(x, y)`  
**b)** `∃y ∀x Loves(x, y)`

<details>
<summary>Lihat Solusi</summary>

**a)** `∀x ∃y Loves(x, y)`  
"Everyone loves **someone** (possibly different people)"
- Socrates loves Mary
- Plato loves Anna
- Each person can love different person

**b)** `∃y ∀x Loves(x, y)`  
"There exists **someone** who is loved by **everyone**"
- Mary is loved by everyone
- **Same person** loved by all

**Example**:
- Domain: {Alice, Bob, Carol}
- (a) can be: Alice loves Bob, Bob loves Carol, Carol loves Alice
- (b) requires: Everyone loves (say) Bob

**They are NOT equivalent!**
</details>

---

### Latihan 3: Negation

Negate the formula: `∀x ∃y Loves(x, y)`

<details>
<summary>Lihat Solusi</summary>

**Step-by-step**:
```
¬∀x ∃y Loves(x, y)
≡ ∃x ¬∃y Loves(x, y)         [¬∀x ≡ ∃x ¬]
≡ ∃x ∀y ¬Loves(x, y)          [¬∃y ≡ ∀y ¬]
```

**Result**: `∃x ∀y ¬Loves(x, y)`

**Meaning**: "There exists someone who loves no one"
</details>

---

### Latihan 4: Database Query

Express in FOL:

"Find all students who enrolled in all courses"

<details>
<summary>Lihat Solusi</summary>

**Predicates**:
- Student(x)
- Course(c)
- Enrolled(x, c)

**FOL**:
```
{x | Student(x) ∧ ∀c (Course(c) → Enrolled(x, c))}
```

**As boolean formula** (who satisfies):
```
Student(x) ∧ ∀c (Course(c) → Enrolled(x, c))
```

**SQL**:
```sql
SELECT s.student_id
FROM Students s
WHERE NOT EXISTS (
    SELECT * FROM Courses c
    WHERE NOT EXISTS (
        SELECT * FROM Enrolled e
        WHERE e.student_id = s.student_id
          AND e.course_id = c.course_id
    )
);
```
</details>

---

## 14.11 Ringkasan

### Key Takeaways

✅ **FOL** extends propositional logic dengan variables, quantifiers, predicates, functions

✅ **Domain** adalah universe of discourse (objects we talk about)

✅ **∀x**: Universal quantifier ("for all x")

✅ **∃x**: Existential quantifier ("there exists x")

✅ **Applications**: Databases, AI, verification, semantic web, Prolog

### Syntax Summary

```
Terms:
  t ::= x | c | f(t₁, ..., tₙ)

Atomic Formulas:
  A ::= P(t₁, ..., tₙ)

Formulas:
  Φ ::= A | ¬Φ | Φ ∧ Ψ | Φ ∨ Ψ | Φ → Ψ | ∀x Φ | ∃x Φ
```

### Quantifier Laws

```
¬∀x Φ(x) ≡ ∃x ¬Φ(x)
¬∃x Φ(x) ≡ ∀x ¬Φ(x)

∀x ∀y Φ ≡ ∀y ∀x Φ
∃x ∃y Φ ≡ ∃y ∃x Φ

BUT: ∀x ∃y Φ ≠ ∃y ∀x Φ  (generally)
```

### When to Use FOL?

Use FOL when you need to:
- Express general statements about **all** or **some** objects
- Represent **relationships** between objects
- Reason about **properties** and **functions**
- Query **databases**
- Represent **knowledge** in AI systems

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 14
2. Enderton, H. "A Mathematical Introduction to Logic" (2001)
3. Fitting, M. "First-Order Logic and Automated Theorem Proving" (1996)

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Kalkulus Deret](../Bagian-II-Metode-Pembuktian/BAB-13-Kalkulus-Deret.md)
- [➡️ BAB Selanjutnya: Komponen Sintaktik](BAB-15-Komponen-Sintaktik.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*First-Order Logic - the language of mathematics and AI!*

**🎉 Welcome to Predicate Logic! More powerful reasoning ahead!**

</div>
