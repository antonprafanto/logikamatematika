# BAB 15: Komponen Sintaktik (Syntactic Components)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-14-Pengantar-Logika-Predikat.md) | [➡️ BAB Selanjutnya](BAB-16-Kuantor.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami komponen sintaktik FOL secara detail
- ✅ Membedakan terms, variables, constants, dan functions
- ✅ Memahami arity dari functions dan predicates
- ✅ Membangun formulas yang well-formed
- ✅ Menerapkan signature dalam FOL

---

## 15.1 Pendahuluan

### Building Blocks of FOL

**First-Order Logic** dibangun dari komponen-komponen sintaktik:

```
Signature → Terms → Atomic Formulas → Formulas
```

**Hierarchy**:
1. **Signature**: Vocabulary (constants, functions, predicates)
2. **Terms**: Expressions untuk individuals
3. **Atomic formulas**: Basic statements
4. **Formulas**: Complex statements dengan connectives dan quantifiers

---

## 15.2 Signature (Vocabulary)

### Definisi

> **Signature** (atau **vocabulary**) adalah koleksi dari:
> - **Constants**: c₁, c₂, c₃, ...
> - **Functions**: f₁, f₂, f₃, ... (dengan arities)
> - **Predicates**: P₁, P₂, P₃, ... (dengan arities)

**Notation**: Σ atau L (language)

### Arity

> **Arity** adalah jumlah arguments dari function atau predicate.

**Examples**:
```
Signature for Arithmetic:
  Constants: 0, 1, 2, ...
  Functions: 
    +(·,·)      arity 2 (binary)
    *(·,·)      arity 2 (binary)
    succ(·)     arity 1 (unary)
  Predicates:
    =(·,·)      arity 2 (binary)
    <(·,·)      arity 2 (binary)
    Even(·)     arity 1 (unary)
```

---

### Example 15.1: Family Relations Signature

**Domain**: People

**Signature**:
```
Constants:
  john, mary, alice, bob

Functions:
  father(·)          arity 1
  mother(·)          arity 1
  age(·)             arity 1

Predicates:
  Parent(·,·)        arity 2
  Sibling(·,·)       arity 2
  Male(·)            arity 1
  Female(·)          arity 1
  Older(·,·)         arity 2
```

**Well-formed expressions**:
```
father(john)                  ✓ (term)
Parent(mary, john)            ✓ (atomic formula)
Male(father(alice))           ✓ (atomic formula)
age(mother(bob)) > 30         ✓ (formula)
```

**NOT well-formed**:
```
father(john, mary)            ✗ (father has arity 1, not 2)
Parent(john)                  ✗ (Parent needs 2 arguments)
Male(alice, bob)              ✗ (Male needs 1 argument)
```

---

## 15.3 Variables

### Definisi

> **Variables** adalah placeholders untuk individuals dalam domain.

**Convention**:
- Lowercase letters: x, y, z, w, ...
- Descriptive names: person, number, item, ...

**Characteristics**:
- **Uninterpreted** syntactically
- Can be **bound** by quantifiers
- Can be **free** (not quantified)

---

### Example 15.2: Variables in Use

**Formula with variables**:
```
∀x (Human(x) → Mortal(x))
```

**Here**:
- x is variable
- x ranges over domain (all individuals)
- x is bound by ∀

**Another example**:
```
∃y (Parent(mary, y) ∧ Male(y))
```

**Here**:
- y is variable
- y bound by ∃
- Means: "Mary has a male child"

---

## 15.4 Constants

### Definisi

> **Constants** are names untuk specific, fixed individuals.

**Convention**:
- Lowercase letters: a, b, c, ...
- Numbers: 0, 1, 2, ...
- Names: socrates, paris, pi, ...

**Characteristics**:
- **Fixed** interpretation
- **No** quantification over constants
- Denote **one specific** object

---

### Example 15.3: Constants

**Arithmetic**:
```
Constants: 0, 1, 2, π, e

Formulas:
  0 < 1                       ✓
  π > 3                       ✓
  e + 1 > 0                   ✓
```

**People**:
```
Constants: socrates, plato, aristotle

Formulas:
  Human(socrates)             ✓
  TeacherOf(plato, aristotle) ✓
  Older(socrates, plato)      ✓
```

---

### Constants vs Variables

| Aspect | Constants | Variables |
|--------|-----------|-----------|
| **Interpretation** | Fixed | Variable |
| **Quantification** | No | Yes |
| **Substitution** | Can replace with terms | Can be instantiated |
| **Example** | socrates, 0, π | x, y, z |

---

## 15.5 Functions

### Definisi

> **Functions** map individuals to individuals.

**Notation**: f(t₁, t₂, ..., tₙ)

**Properties**:
- **Arity**: Number of arguments
- **Total**: Defined for all inputs in domain
- **Deterministic**: Same input → same output

---

### Types by Arity

**Unary functions** (arity 1):
```
successor(x)        "x + 1"
father(x)           "Father of x"
abs(x)              "Absolute value of x"
sqrt(x)             "Square root of x"
```

**Binary functions** (arity 2):
```
+(x, y)             "Sum of x and y"
*(x, y)             "Product of x and y"
max(x, y)           "Maximum of x and y"
gcd(x, y)           "Greatest common divisor"
```

**Ternary functions** (arity 3):
```
if(cond, then, else)    "Conditional"
```

**Nullary functions** (arity 0 = constants!):
```
zero()              Same as constant 0
pi()                Same as constant π
```

---

### Example 15.4: Nested Functions

**Functions can be composed**:
```
father(father(x))           "Grandfather (paternal)"
mother(father(x))           "Grandmother (paternal)"
+(*(2, x), 1)               "2x + 1"
max(abs(x), abs(y))         "Max of absolute values"
```

**Build complex terms**:
```
age(father(mother(john)))   "Age of maternal grandfather"
```

---

### Function Notation

**Two styles**:

**Prefix notation** (standard in logic):
```
+(x, y)
*(2, +(x, 1))
father(x)
```

**Infix notation** (for familiar operations):
```
x + y
2 * (x + 1)
```

**Both are equivalent!** Infix is syntactic sugar.

---

## 15.6 Predicates

### Definisi

> **Predicates** express **properties** (unary) atau **relations** (n-ary).

**Notation**: P(t₁, t₂, ..., tₙ)

**Return**: Truth value (TRUE or FALSE)

**Difference from functions**:
- Functions return **individuals**
- Predicates return **truth values**

---

### Types by Arity

**Unary predicates** (properties):
```
Human(x)            "x is human"
Even(n)             "n is even"
Prime(p)            "p is prime"
Red(obj)            "obj is red"
```

**Binary predicates** (relations):
```
Loves(x, y)         "x loves y"
>(x, y)             "x greater than y"
Parent(p, c)        "p is parent of c"
Subset(A, B)        "A is subset of B"
```

**Ternary predicates**:
```
Between(x, y, z)    "y is between x and z"
Collinear(p,q,r)    "Points p, q, r are collinear"
```

---

### Example 15.5: Predicates in Number Theory

**Signature**:
```
Predicates:
  Even(·)           arity 1
  Odd(·)            arity 1
  Prime(·)          arity 1
  Divides(·,·)      arity 2
  =(·,·)            arity 2
  <(·,·)            arity 2
```

**Formulas**:
```
Even(4)                                  ✓ "4 is even"
Prime(7)                                 ✓ "7 is prime"
Divides(3, 12)                           ✓ "3 divides 12"
∀x (Even(x) → ¬Odd(x))                  ✓ "No number is both even and odd"
∀n (Prime(n) ∧ n > 2 → Odd(n))          ✓ "All primes > 2 are odd"
```

---

### Special Predicates

**Equality (=)**:
- Built-in in most FOL systems
- Binary predicate
- Reflexive, symmetric, transitive

**Examples**:
```
x = x                    ✓ (reflexive)
x = y → y = x            ✓ (symmetric)
x = y ∧ y = z → x = z    ✓ (transitive)
```

**Inequality (≠)**:
```
x ≠ y  ≡  ¬(x = y)
```

---

## 15.7 Terms (Detail)

### Formal Definition

> **Term** is defined recursively:
> 1. Every **variable** is a term
> 2. Every **constant** is a term
> 3. If f is function of arity n and t₁,...,tₙ are terms, then **f(t₁,...,tₙ)** is a term

**Examples**:
```
x                       ✓ (variable)
socrates                ✓ (constant)
0                       ✓ (constant)
father(x)               ✓ (function of variable)
+(2, 3)                 ✓ (function of constants)
father(father(john))    ✓ (nested functions)
+(x, *(2, y))           ✓ (complex term)
```

**NOT terms**:
```
Human(x)                ✗ (predicate, not term)
x + y + z               ✗ (syntactically ambiguous, needs parsing)
father(x, y)            ✗ (arity mismatch)
```

---

### Ground Terms

> **Ground term** adalah term **without variables** (hanya constants dan functions).

**Examples**:
```
socrates                ✓ ground
42                      ✓ ground
father(john)            ✓ ground
+(2, *(3, 4))           ✓ ground

x                       ✗ not ground (has variable)
father(x)               ✗ not ground (has variable)
+(x, 2)                 ✗ not ground (has variable)
```

**Significance**: Ground terms denote **specific** individuals.

---

### Substitution

**Substitution** replaces variable dengan term.

**Notation**: `t[x/s]` means "replace x with s in term t"

**Examples**:
```
father(x)[x/john] = father(john)
+(x, y)[x/2][y/3] = +(2, 3)
father(father(x))[x/mary] = father(father(mary))
```

**In formulas**:
```
Human(x)[x/socrates] = Human(socrates)
∀y Parent(x, y)[x/john] = ∀y Parent(john, y)
```

---

## 15.8 Atomic Formulas

### Definisi

> **Atomic formula** adalah predicate applied to terms.

**Form**: P(t₁, t₂, ..., tₙ)

Di mana:
- P is predicate of arity n
- t₁, ..., tₙ are terms

---

### Examples

**Valid atomic formulas**:
```
Human(socrates)                     ✓
Loves(john, mary)                   ✓
Prime(7)                            ✓
>(x, 0)                             ✓
=(+(2,3), 5)                        ✓
Parent(father(x), x)                ✓
Between(0, x, 10)                   ✓
```

**Invalid** (not atomic):
```
¬Human(x)                           ✗ (negation, not atomic)
Human(x) ∧ Mortal(x)                ✗ (conjunction, not atomic)
∀x Human(x)                         ✗ (quantified, not atomic)
```

---

## 15.9 Well-Formed Formulas

### Formal Definition (Recursive)

**Formulas** defined as:

1. **Atomic formula** is a formula
2. If Φ is formula, then **¬Φ** is formula
3. If Φ, Ψ are formulas, then **Φ ∧ Ψ**, **Φ ∨ Ψ**, **Φ → Ψ**, **Φ ↔ Ψ** are formulas
4. If Φ is formula and x is variable, then **∀x Φ** and **∃x Φ** are formulas

**Nothing else** is a formula.

---

### Example 15.6: Building Formulas

**Step by step**:

**Start**:
```
Human(x)                Atomic formula ✓
```

**Add negation**:
```
¬Human(x)               Formula by rule 2 ✓
```

**Add connective**:
```
Human(x) → Mortal(x)    Formula by rule 3 ✓
```

**Add quantifier**:
```
∀x (Human(x) → Mortal(x))   Formula by rule 4 ✓
```

**Complex formula**:
```
∀x (Human(x) → Mortal(x)) ∧ Human(socrates) → Mortal(socrates)
```

**Parse tree**:
```
          →
        /   \
      ∧      Mortal(socrates)
    /   \
  ∀x(...)  Human(socrates)
```

---

## 15.10 Aplikasi: Prolog Syntax

### Prolog Terms

**Prolog** uses FOL terms directly!

**Examples**:
```prolog
% Constants
socrates.
42.
'John Smith'.

% Variables (start with uppercase!)
X
Person
_Temp

% Functions (compound terms)
father(john)
point(3, 4)
cons(1, cons(2, nil))
```

---

### Prolog Predicates

**Atomic formulas** in Prolog:
```prolog
human(socrates).
parent(john, mary).
age(john, 30).
loves(X, mary).
```

**Horn clauses** (subset of FOL):
```prolog
% ∀X (human(X) → mortal(X))
mortal(X) :- human(X).

% ∀X∀Y (parent(X,Y) ∧ male(X) → father(X,Y))
father(X, Y) :- parent(X, Y), male(X).
```

---

## 15.11 Parsing Ambiguity

### Problem: Operator Precedence

**Ambiguous**:
```
P ∧ Q ∨ R
```

**Could mean**:
- `(P ∧ Q) ∨ R`
- `P ∧ (Q ∨ R)`

**Different meanings!**

---

### Solution: Precedence Rules

**Standard precedence** (highest to lowest):
```
1. ¬           (negation)
2. ∧           (conjunction)
3. ∨           (disjunction)
4. →, ↔        (implication, biconditional)
5. ∀, ∃        (quantifiers - lowest, widest scope)
```

**Examples**:
```
¬P ∧ Q          means  (¬P) ∧ Q
P ∧ Q ∨ R        means  (P ∧ Q) ∨ R
P → Q ∧ R        means  P → (Q ∧ R)
∀x P(x) → Q(x)   means  (∀x P(x)) → Q(x)  ⚠️ Q(x) is FREE!
```

**Best practice**: **Use parentheses** when in doubt!

---

## 15.12 Implementasi: Parser

### Simple FOL Parser (Python)

```python
from dataclasses import dataclass
from typing import Union, List

@dataclass
class Constant:
    name: str
    
    def __str__(self):
        return self.name

@dataclass
class Variable:
    name: str
    
    def __str__(self):
        return self.name

@dataclass
class Function:
    name: str
    args: List['Term']
    
    def __str__(self):
        args_str = ", ".join(str(arg) for arg in self.args)
        return f"{self.name}({args_str})"

# Term is union of Constant, Variable, Function
Term = Union[Constant, Variable, Function]

@dataclass
class Predicate:
    name: str
    args: List[Term]
    
    def __str__(self):
        args_str = ", ".join(str(arg) for arg in self.args)
        return f"{self.name}({args_str})"

@dataclass
class Negation:
    formula: 'Formula'
    
    def __str__(self):
        return f"¬{self.formula}"

@dataclass
class Conjunction:
    left: 'Formula'
    right: 'Formula'
    
    def __str__(self):
        return f"({self.left} ∧ {self.right})"

@dataclass
class Universal:
    var: Variable
    formula: 'Formula'
    
    def __str__(self):
        return f"∀{self.var} {self.formula}"

# Formula is union of Predicate, Negation, Conjunction, etc.
Formula = Union[Predicate, Negation, Conjunction, Universal]

# Example usage
if __name__ == "__main__":
    # Build term: father(john)
    john = Constant("john")
    father_of_john = Function("father", [john])
    
    print("Term:", father_of_john)
    
    # Build formula: Human(father(john))
    human_father = Predicate("Human", [father_of_john])
    
    print("Atomic:", human_father)
    
    # Build: ∀x Human(x)
    x = Variable("x")
    human_x = Predicate("Human", [x])
    forall_human = Universal(x, human_x)
    
    print("Formula:", forall_human)
    
    # Build: ∀x (Human(x) → Mortal(x))
    # (More complex, needs Implication class)
```

**Output**:
```
Term: father(john)
Atomic: Human(father(john))
Formula: ∀x Human(x)
```

---

## 15.13 Latihan dan Soal

### Latihan 1: Identify Components

Identify components dalam formula:

`∀x (Parent(x, john) → ∃y Loves(y, father(x)))`

<details>
<summary>Lihat Solusi</summary>

**Variables**: x, y

**Constants**: john

**Functions**: father(·)

**Predicates**: Parent(·,·), Loves(·,·)

**Quantifiers**: ∀x, ∃y

**Connectives**: →

**Terms**:
- x (variable)
- john (constant)
- father(x) (function term)
- y (variable)

**Atomic formulas**:
- Parent(x, john)
- Loves(y, father(x))
</details>

---

### Latihan 2: Build Terms

Build terms untuk "The father of the mother of John":

<details>
<summary>Lihat Solusi</summary>

**Functions needed**:
- father(·): returns father
- mother(·): returns mother

**Term**:
```
father(mother(john))
```

**Step by step**:
1. john (constant)
2. mother(john) (mother of John)
3. father(mother(john)) (father of mother of John)
</details>

---

### Latihan 3: Arity Check

Which are well-formed?

**a)** `Parent(john)`  
**b)** `Parent(john, mary)`  
**c)** `father(john, mary)`  

Given signature:
- Parent(·,·): arity 2
- father(·): arity 1

<details>
<summary>Lihat Solusi</summary>

**a)** `Parent(john)` ✗  
Arity mismatch! Parent needs 2 arguments.

**b)** `Parent(john, mary)` ✓  
Correct! Parent has arity 2.

**c)** `father(john, mary)` ✗  
Arity mismatch! father is function of arity 1.

**Correct**:
- `Parent(john, mary)` ✓
- `father(john)` ✓
- `Parent(father(john), mary)` ✓
</details>

---

### Latihan 4: Substitution

Perform substitution:

`Parent(x, father(y))[x/john][y/mary]`

<details>
<summary>Lihat Solusi</summary>

**Step by step**:

**Start**:
```
Parent(x, father(y))
```

**Apply [x/john]**:
```
Parent(john, father(y))
```

**Apply [y/mary]**:
```
Parent(john, father(mary))
```

**Final result**: `Parent(john, father(mary))`

**Meaning**: "John is parent of Mary's father"
</details>

---

## 15.14 Ringkasan

### Key Takeaways

✅ **Signature** defines vocabulary (constants, functions, predicates with arities)

✅ **Terms** denote individuals (variables, constants, function applications)

✅ **Predicates** express properties/relations, return truth values

✅ **Functions** map individuals to individuals

✅ **Atomic formulas** are predicates applied to terms

✅ **Well-formed formulas** built recursively from atomic formulas

### Syntax Summary

```
Signature Σ:
  Constants: c₁, c₂, ...
  Functions: f₁/n₁, f₂/n₂, ... (with arities)
  Predicates: P₁/m₁, P₂/m₂, ... (with arities)

Terms:
  t ::= x | c | f(t₁, ..., tₙ)

Atomic Formulas:
  A ::= P(t₁, ..., tₙ)

Formulas:
  Φ ::= A | ¬Φ | Φ ∧ Ψ | Φ ∨ Ψ | Φ → Ψ | ∀x Φ | ∃x Φ
```

### Arity Table

| Component | Arity | Example |
|-----------|-------|---------|
| Constant | 0 | john, 42 |
| Unary function | 1 | father(·) |
| Binary function | 2 | +(·,·) |
| Unary predicate | 1 | Human(·) |
| Binary predicate | 2 | Loves(·,·) |

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 15
2. Enderton, H. "A Mathematical Introduction to Logic" - Chapter 2
3. Mendelson, E. "Introduction to Mathematical Logic" - Chapter 2

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Pengantar Logika Predikat](BAB-14-Pengantar-Logika-Predikat.md)
- [➡️ BAB Selanjutnya: Kuantor-kuantor](BAB-16-Kuantor.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Syntax is the foundation - master it well!*

</div>
