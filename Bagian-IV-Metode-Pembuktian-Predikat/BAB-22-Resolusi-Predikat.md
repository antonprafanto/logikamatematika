# BAB 22: Resolusi Predikat (Resolution for FOL)

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB Sebelumnya](BAB-21-Bentuk-Normal-Prenex.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Memahami resolution untuk First-Order Logic
- ✅ Menerapkan unification algorithm
- ✅ Melakukan resolution with unification
- ✅ Memahami SLD resolution (basis Prolog)
- ✅ Menggunakan resolution untuk automated theorem proving

---

## 22.1 Pendahuluan

### From Propositional to First-Order Resolution

**Recall BAB 11**: Propositional resolution
- Binary resolution on clauses
- Refutation-based proving
- Complete for propositional logic

**Extension to FOL**: Add **unification**!
- Clauses contain **variables**
- Need to **match** literals before resolving
- **Unification** finds matching substitutions

---

### The Power of Resolution + Unification

**Robinson's Resolution** (1965): Foundation of modern automated reasoning!

**Applications**:
- **Prolog** (logic programming)
- **Theorem provers** (Vampire, E, SPASS)
- **SAT/SMT solvers**
- **Answer set programming**

---

## 22.2 Review: Clausal Form

### What is a Clause?

**Clause**: Disjunction of literals

**Example**:
```
P(x) ∨ ¬Q(x, a) ∨ R(f(x), y)
```

**Set notation**: `{P(x), ¬Q(x,a), R(f(x),y)}`

---

### Converting FOL to Clausal Form

**Pipeline**:
1. Convert to **Prenex Normal Form** (BAB 21)
2. **Skolemize** (remove ∃, BAB 19)
3. Drop universal quantifiers (all variables implicitly ∀)
4. Convert matrix to **CNF**
5. Extract clauses

---

### Example 22.1: Complete Conversion

**Formula**: `∀x (P(x) → ∃y Q(x,y))`

**Step 1: PNF** (already in PNF)
```
∀x (¬P(x) ∨ ∃y Q(x,y))
```

**Step 2: Skolemize**
```
∀x (¬P(x) ∨ Q(x, f(x)))
```
Where f(x) is Skolem function.

**Step 3: Drop ∀**
```
¬P(x) ∨ Q(x, f(x))
```

**Step 4: Already CNF**

**Step 5: Clause**
```
{¬P(x), Q(x, f(x))}
```

✓ **Ready for resolution!**

---

## 22.3 Unification

### The Unification Problem

**Problem**: Given two terms s and t, find substitution θ such that sθ = tθ.

**Example**:
```
s = P(x, f(y))
t = P(a, f(b))

Unifier: θ = {x/a, y/b}

sθ = P(a, f(b))
tθ = P(a, f(b))  ✓ Unified!
```

---

### Substitution

**Substitution** θ = {x₁/t₁, x₂/t₂, ..., xₙ/tₙ}

**Apply** to term:
```
P(x, y)θ where θ = {x/a, y/f(b)}
= P(a, f(b))
```

**Composition**: θσ applies θ then σ
```
θ = {x/y}
σ = {y/a}
θσ = {x/a, y/a}
```

---

### Most General Unifier (MGU)

**MGU**: Most general substitution that unifies.

**Example**:
```
s = P(x, y)
t = P(a, z)

Unifiers:
  θ₁ = {x/a, y/z}           MGU ✓
  θ₂ = {x/a, y/b, z/b}      More specific
  θ₃ = {x/a, y/f(c), z/f(c)} Even more specific
```

**MGU is unique** (up to variable renaming).

**Why MGU?** Most flexible - can specialize later if needed.

---

### Unification Algorithm

**Robinson's Unification Algorithm**:

```python
def unify(s, t, θ=None):
    """
    Unify terms s and t
    Returns MGU or None if not unifiable
    """
    if θ is None:
        θ = {}
    
    # Apply current substitution
    s = apply_subst(s, θ)
    t = apply_subst(t, θ)
    
    # Same? Done!
    if s == t:
        return θ
    
    # Variable? Bind it
    if is_variable(s):
        if occurs_in(s, t):
            return None  # Occur check fails
        return {**θ, s: t}
    
    if is_variable(t):
        if occurs_in(t, s):
            return None  # Occur check fails
        return {**θ, t: s}
    
    # Compound terms? Unify components
    if is_compound(s) and is_compound(t):
        if functor(s) != functor(t):
            return None  # Different functors
        if arity(s) != arity(t):
            return None  # Different arities
        
        # Unify arguments pairwise
        for arg_s, arg_t in zip(args(s), args(t)):
            θ = unify(arg_s, arg_t, θ)
            if θ is None:
                return None
        
        return θ
    
    # Cannot unify
    return None
```

---

### Example 22.2: Step-by-Step Unification

**Unify**: `P(x, f(y), a)` and `P(g(z), f(b), a)`

**Steps**:
```
1. Unify P with P: ✓ (same functor)

2. Unify arguments:
   a) x with g(z):
      θ₁ = {x/g(z)}
   
   b) f(y) with f(b):
      - Unify f with f: ✓
      - Unify y with b:
        θ₂ = {x/g(z), y/b}
   
   c) a with a: ✓ (already equal)

3. MGU: θ = {x/g(z), y/b}
```

**Verify**:
```
P(x, f(y), a)θ = P(g(z), f(b), a) ✓
```

---

### Occur Check

**Problem**: `x` cannot unify with `f(x)` (infinite term!)

**Example**:
```
x = f(x)
  = f(f(x))
  = f(f(f(x)))
  = ...  INFINITE!
```

**Occur check**: Ensure variable x doesn't appear in term t before binding x to t.

**Implementation**: Check recursively in unification algorithm.

**Note**: Prolog **skips** occur check for efficiency (can cause bugs!).

---

## 22.4 Binary Resolution with Unification

### Resolution Rule for FOL

**Propositional**: Resolve on complementary literals
```
{P, α}  {¬P, β}
─────────────────
    {α, β}
```

**First-Order**: Resolve on **unifiable** complementary literals
```
C₁ = {L, α}    C₂ = {¬L', β}
Where L and L' are unifiable with MGU θ
──────────────────────────────────────
        (α ∪ β)θ
```

---

### Example 22.3: Simple FOL Resolution

**Clauses**:
```
C₁ = {P(x), Q(x)}
C₂ = {¬P(a), R(a)}
```

**Resolution**:
```
1. Find complementary: P(x) and ¬P(a)
2. Unify: θ = {x/a}
3. Resolve:
   C₁θ = {P(a), Q(a)}
   C₂θ = {¬P(a), R(a)}
   
   Resolvent = {Q(a), R(a)}
```

✓ **Resolution successful!**

---

### Example 22.4: Function Symbols

**Clauses**:
```
C₁ = {P(f(x)), Q(x)}
C₂ = {¬P(y), R(y)}
```

**Resolution**:
```
1. Unify P(f(x)) and P(y):
   θ = {y/f(x)}

2. Resolve:
   C₁θ = {P(f(x)), Q(x)}
   C₂θ = {¬P(f(x)), R(f(x))}
   
   Resolvent = {Q(x), R(f(x))}
```

✓ **Resolved!**

---

## 22.5 Resolution Refutation

### Proof by Refutation

**To prove**: KB ⊢ Φ

**Method**:
1. Convert KB to clauses
2. Negate Φ, convert to clauses
3. Add negated Φ to clause set
4. Apply resolution until:
   - Derive **⊥** (empty clause) → **Proved!** ✓
   - Cannot proceed → **Not provable** (or incomplete)

---

### Example 22.5: Complete Proof

**Prove**: `∀x (P(x) → Q(x)), P(a) ⊢ Q(a)`

**Step 1: Convert to clauses**
```
∀x (P(x) → Q(x))  →  {¬P(x), Q(x)}
P(a)               →  {P(a)}
```

**Step 2: Negate conclusion**
```
¬Q(a)  →  {¬Q(a)}
```

**Step 3: Clause set**
```
1. {¬P(x), Q(x)}
2. {P(a)}
3. {¬Q(a)}
```

**Step 4: Resolution**
```
4. {Q(a)}         (resolve 1 & 2 on P, θ={x/a})
5. ⊥              (resolve 3 & 4 on Q)
```

**Derive empty clause!** ✓ **Proved!**

---

### Example 22.6: Socrates is Mortal

**Prove**: "All humans are mortal, Socrates is human ⊢ Socrates is mortal"

**Formulas**:
```
∀x (Human(x) → Mortal(x))
Human(socrates)
⊢ Mortal(socrates)
```

**Clauses**:
```
1. {¬Human(x), Mortal(x)}
2. {Human(socrates)}
3. {¬Mortal(socrates)}     [negated conclusion]
```

**Resolution**:
```
4. {Mortal(socrates)}      (resolve 1 & 2, θ={x/socrates})
5. ⊥                       (resolve 3 & 4)
```

✓ **Socrates is mortal!** 🎉

---

## 22.6 SLD Resolution (Prolog)

### Selective Linear Definite Clause Resolution

**SLD Resolution**: Basis of **Prolog**!

**Characteristics**:
- **Linear**: Each resolution uses one clause from previous step
- **Definite clauses**: Horn clauses (at most one positive literal)
- **Selective**: Choose specific literal to resolve on
- **Goal-driven**: Start with negated goal

---

### Horn Clauses

**Horn clause**: At most one **positive** literal.

**Forms**:
```
Definite:  {P, ¬Q₁, ¬Q₂, ..., ¬Qₙ}  ≡  Q₁ ∧ Q₂ ∧ ... ∧ Qₙ → P
           (exactly one positive)

Goal:      {¬Q₁, ¬Q₂, ..., ¬Qₙ}     ≡  ¬(Q₁ ∧ Q₂ ∧ ... ∧ Qₙ)
           (no positive literals)

Fact:      {P}                       ≡  P
           (one positive, no negative)
```

**Prolog uses Horn clauses!**

---

### Prolog Example

**Prolog program**:
```prolog
% Facts
parent(tom, bob).
parent(bob, ann).

% Rule
grandparent(X, Z) :- parent(X, Y), parent(Y, Z).

% Query
?- grandparent(tom, ann).
```

**In clausal form**:
```
{parent(tom, bob)}
{parent(bob, ann)}
{grandparent(X, Z), ¬parent(X, Y), ¬parent(Y, Z)}

Goal: {¬grandparent(tom, ann)}
```

---

### SLD Resolution Trace

**Query**: `?- grandparent(tom, ann).`

**Initial goal**: `{¬grandparent(tom, ann)}`

**Resolution steps**:
```
1. Goal: {¬grandparent(tom, ann)}
   Resolve with: {grandparent(X,Z), ¬parent(X,Y), ¬parent(Y,Z)}
   θ = {X/tom, Z/ann}
   
   New goal: {¬parent(tom, Y), ¬parent(Y, ann)}

2. Goal: {¬parent(tom, Y), ¬parent(Y, ann)}
   Resolve with: {parent(tom, bob)}
   θ = {Y/bob}
   
   New goal: {¬parent(bob, ann)}

3. Goal: {¬parent(bob, ann)}
   Resolve with: {parent(bob, ann)}
   
   New goal: ⊥  (empty)
```

**Success!** tom is grandparent of ann. ✓

---

## 22.7 Strategies and Optimizations

### Set of Support

**Idea**: At least one parent clause must be from **set of support** (usually negated goal).

**Benefit**: Avoids irrelevant inferences.

**Example**:
```
KB clauses: C₁, C₂, C₃
Goal: ¬G

Set of support: {¬G}

Only resolve:
  - ¬G with KB
  - Resolvents of ¬G with KB
  - ...
```

---

### Unit Preference

**Idea**: Prefer resolution with **unit clauses** (single literal).

**Benefit**: 
- Unit clauses strong constraints
- Resolvents smaller
- More efficient

**Example**:
```
Given: {P(a)}, {¬P(x), Q(x)}, {¬Q(y), R(y), S(y)}

Prefer: Resolve {P(a)} with {¬P(x), Q(x)} first
→ Get {Q(a)} (unit!)
→ Then resolve with third clause
```

---

### Subsumption

**Definition**: C₁ **subsumes** C₂ if ∃θ such that C₁θ ⊆ C₂.

**Example**:
```
C₁ = {P(x)}
C₂ = {P(a), Q(a)}

C₁{x/a} = {P(a)} ⊆ C₂

C₁ subsumes C₂!
```

**Optimization**: Delete subsumed clauses (weaker).

---

### Factoring

**Factoring**: Merge identical literals with unification.

**Example**:
```
Clause: {P(x), P(f(y)), Q(x)}

Factor on P: θ = {x/f(y)}

Result: {P(f(y)), Q(f(y))}
```

**Benefit**: Smaller clauses, more efficient.

---

## 22.8 Completeness and Complexity

### Completeness

> **Resolution is refutation-complete** for First-Order Logic.

**Theorem** (Robinson, 1965): If clause set is unsatisfiable, resolution **will** derive empty clause.

**Consequence**: Resolution can prove any valid FOL theorem!

---

### Decidability

**FOL validity**: **Undecidable** (no algorithm decides all cases).

**Resolution**: **Semi-decidable**
- If unsatisfiable: **will** derive ⊥ (eventually)
- If satisfiable: may **not** terminate

**Practical**: Use timeouts, depth limits.

---

### Complexity

**Worst case**: **Exponential** in number of clauses and variables.

**Why?**:
- Number of resolvents can grow exponentially
- Unification can be expensive

**Practical optimizations**:
- **Indexing** (discrimination trees)
- **Subsumption** checking
- **Ordering** constraints
- **Redundancy** elimination

---

## 22.9 Modern Theorem Provers

### State-of-the-Art Systems

**Major provers**:

| Prover | Strategy | Strength |
|--------|----------|----------|
| **Vampire** | Saturation + ordering | General FOL |
| **E** | Equational logic | Equality reasoning |
| **SPASS** | Sort information | Typed FOL |
| **Z3** | SMT | Background theories |
| **Prover9** | Resolution + paramodulation | Interactive |

---

### CASC Competition

**CASC**: CADE ATP System Competition

**Annual competition** of theorem provers on standard problems.

**Categories**:
- FOL (first-order)
- CNF (clausal form)
- EPR (effectively propositional)
- UEQ (unit equality)

**Winners often use**: Sophisticated resolution strategies!

---

## 22.10 Implementasi

### Python: Simple Resolution Prover

```python
from dataclasses import dataclass
from typing import Set, List, Optional, Dict

@dataclass(frozen=True)
class Literal:
    """Literal: predicate with terms"""
    predicate: str
    terms: tuple
    negated: bool = False
    
    def negate(self):
        return Literal(self.predicate, self.terms, not self.negated)
    
    def __str__(self):
        pred_str = f"{self.predicate}({','.join(map(str, self.terms))})"
        return f"¬{pred_str}" if self.negated else pred_str

@dataclass(frozen=True)
class Clause:
    """Clause: set of literals"""
    literals: frozenset
    
    def is_empty(self):
        return len(self.literals) == 0
    
    def __str__(self):
        if self.is_empty():
            return "⊥"
        return "{" + ", ".join(str(l) for l in self.literals) + "}"

def occurs_in(var: str, term) -> bool:
    """Check if variable occurs in term"""
    if isinstance(term, str):
        return var == term
    elif isinstance(term, tuple):
        return any(occurs_in(var, t) for t in term)
    return False

def apply_subst(term, subst: Dict):
    """Apply substitution to term"""
    if isinstance(term, str):
        return subst.get(term, term)
    elif isinstance(term, tuple):
        return tuple(apply_subst(t, subst) for t in term)
    return term

def unify_terms(s, t, subst=None) -> Optional[Dict]:
    """Unify two terms, return MGU or None"""
    if subst is None:
        subst = {}
    
    # Apply current substitution
    s = apply_subst(s, subst)
    t = apply_subst(t, subst)
    
    # Same? Done!
    if s == t:
        return subst
    
    # Variable? Bind it
    if isinstance(s, str) and s.islower():
        if occurs_in(s, t):
            return None
        return {**subst, s: t}
    
    if isinstance(t, str) and t.islower():
        if occurs_in(t, s):
            return None
        return {**subst, t: s}
    
    # Compound terms?
    if isinstance(s, tuple) and isinstance(t, tuple):
        if len(s) != len(t):
            return None
        
        for s_i, t_i in zip(s, t):
            subst = unify_terms(s_i, t_i, subst)
            if subst is None:
                return None
        
        return subst
    
    return None

def unify_literals(l1: Literal, l2: Literal) -> Optional[Dict]:
    """Unify two literals if possible"""
    if l1.predicate != l2.predicate:
        return None
    if l1.negated == l2.negated:
        return None  # Same polarity
    
    return unify_terms(l1.terms, l2.terms)

def apply_subst_to_literal(lit: Literal, subst: Dict) -> Literal:
    """Apply substitution to literal"""
    new_terms = tuple(apply_subst(t, subst) for t in lit.terms)
    return Literal(lit.predicate, new_terms, lit.negated)

def apply_subst_to_clause(clause: Clause, subst: Dict) -> Clause:
    """Apply substitution to clause"""
    new_literals = frozenset(
        apply_subst_to_literal(lit, subst) for lit in clause.literals
    )
    return Clause(new_literals)

def resolve(c1: Clause, c2: Clause) -> Set[Clause]:
    """Binary resolution with unification"""
    resolvents = set()
    
    for lit1 in c1.literals:
        for lit2 in c2.literals:
            # Try to unify complementary literals
            subst = unify_literals(lit1, lit2)
            
            if subst is not None:
                # Create resolvent
                remaining1 = c1.literals - {lit1}
                remaining2 = c2.literals - {lit2}
                
                # Apply substitution
                new_lits = frozenset(
                    apply_subst_to_literal(lit, subst)
                    for lit in (remaining1 | remaining2)
                )
                
                resolvent = Clause(new_lits)
                resolvents.add(resolvent)
    
    return resolvents

def resolution_refutation(clauses: Set[Clause], max_iterations=100) -> bool:
    """
    Resolution refutation
    Returns True if derive empty clause (proved)
    """
    clauses = set(clauses)
    
    for iteration in range(max_iterations):
        # Check for empty clause
        if any(c.is_empty() for c in clauses):
            print(f"✓ Derived empty clause at iteration {iteration}")
            return True
        
        # Try all pairs
        clause_list = list(clauses)
        new_clauses = set()
        
        for i in range(len(clause_list)):
            for j in range(i+1, len(clause_list)):
                resolvents = resolve(clause_list[i], clause_list[j])
                new_clauses.update(resolvents)
        
        # Check if made progress
        if new_clauses.issubset(clauses):
            print(f"✗ No new clauses at iteration {iteration}")
            return False
        
        clauses.update(new_clauses)
        print(f"Iteration {iteration}: {len(clauses)} clauses")
    
    print(f"✗ Reached max iterations")
    return False

# Example usage
if __name__ == "__main__":
    # Prove: ∀x(P(x)→Q(x)), P(a) ⊢ Q(a)
    
    # Clauses:
    # 1. {¬P(x), Q(x)}
    # 2. {P(a)}
    # 3. {¬Q(a)}  [negated conclusion]
    
    c1 = Clause(frozenset([
        Literal('P', ('x',), negated=True),
        Literal('Q', ('x',), negated=False)
    ]))
    
    c2 = Clause(frozenset([
        Literal('P', ('a',), negated=False)
    ]))
    
    c3 = Clause(frozenset([
        Literal('Q', ('a',), negated=True)
    ]))
    
    print("Clauses:")
    print(f"  C1: {c1}")
    print(f"  C2: {c2}")
    print(f"  C3: {c3}")
    
    print("\nRunning resolution...")
    result = resolution_refutation({c1, c2, c3})
    
    if result:
        print("\n✓ PROVED!")
    else:
        print("\n✗ Cannot prove")
```

---

## 22.11 Latihan dan Soal

### Latihan 1: Simple Unification

Unify: `P(x, f(y))` and `P(a, f(b))`

<details>
<summary>Lihat Solusi</summary>

**Unify arguments**:
```
x with a: θ₁ = {x/a}
f(y) with f(b):
  y with b: θ₂ = {x/a, y/b}
```

**MGU**: θ = {x/a, y/b}

**Verify**:
```
P(x, f(y))θ = P(a, f(b)) ✓
```
</details>

---

### Latihan 2: Resolution Step

Resolve:
```
C₁ = {P(x), Q(f(x))}
C₂ = {¬P(a), R(a)}
```

<details>
<summary>Lihat Solusi</summary>

**Unify**: P(x) and P(a)
```
θ = {x/a}
```

**Apply substitution**:
```
C₁θ = {P(a), Q(f(a))}
C₂θ = {¬P(a), R(a)}
```

**Resolvent**:
```
{Q(f(a)), R(a)}
```

✓ **Resolved!**
</details>

---

### Latihan 3: Complete Proof

Prove: `∀x(Animal(x) → Mortal(x)), Animal(cat) ⊢ Mortal(cat)`

<details>
<summary>Lihat Solusi</summary>

**Step 1: Convert to clauses**
```
1. {¬Animal(x), Mortal(x)}
2. {Animal(cat)}
3. {¬Mortal(cat)}  [negated conclusion]
```

**Step 2: Resolution**
```
4. {Mortal(cat)}   (resolve 1 & 2, θ={x/cat})
5. ⊥               (resolve 3 & 4)
```

✓ **Proved!**
</details>

---

### Latihan 4: Non-Unifiable

Can you unify: `f(x)` and `x`?

<details>
<summary>Lihat Solusi</summary>

**Attempt**: x = f(x)

**Occur check**: x occurs in f(x)!

**Result**: **Cannot unify** ✗

**Reason**: Would create infinite term f(f(f(...)))

This is why occur check is needed!
</details>

---

## 22.12 Ringkasan

### Key Takeaways

✅ **Resolution + Unification**: Core of FOL automated proving

✅ **MGU**: Most general unifier - unique and most flexible

✅ **Resolution rule**: Resolve unifiable complementary literals

✅ **SLD Resolution**: Basis of Prolog (Horn clauses)

✅ **Complete**: Can prove any valid FOL theorem

### Resolution Algorithm Summary

```
1. Convert to clausal form:
   - PNF → Skolemization → Drop ∀ → CNF → Clauses

2. Add negated conclusion

3. Repeat:
   - Select two clauses C₁, C₂
   - Find complementary literals L₁, L₂
   - Unify: θ = MGU(L₁, L₂)
   - If θ exists: Create resolvent (C₁ ∪ C₂ - {L₁, L₂})θ
   - Add resolvent to clause set
   - If derive ⊥: PROVED!

4. If no progress: Cannot prove (or timeout)
```

### Unification

```
MGU(s, t):
  if s = t: return {}
  if s is variable: return {s/t}  [if ¬occurs(s, t)]
  if t is variable: return {t/s}  [if ¬occurs(t, s)]
  if s = f(s₁,...,sₙ) and t = f(t₁,...,tₙ):
    return MGU(s₁,t₁) ∘ ... ∘ MGU(sₙ,tₙ)
  else: FAIL
```

### Applications

- **Automated theorem proving**: Vampire, E, SPASS
- **Logic programming**: Prolog, Datalog
- **Answer set programming**: Clingo
- **SMT solving**: Z3, CVC4
- **Formal verification**: Program correctness

---

## 22.13 Penutup

### Perjalanan Logika Matematika

**Dari Bagian I sampai Bagian IV**, kita telah mempelajari:

**Bagian I - Logika Proposisional** (BAB 5-7):
- Tautologi dan validitas
- Ekuivalen logis dan hukum-hukum
- Penyederhanaan formula

**Bagian II - Metode Pembuktian** (BAB 8-13):
- Proof by contradiction
- Semantic tableaux
- Normal forms (CNF/DNF)
- Resolution
- Natural deduction
- Sequent calculus

**Bagian III - Logika Predikat** (BAB 14-18):
- First-order logic syntax dan semantics
- Quantifiers (∀, ∃)
- Interpretation dan validity
- Deduction dalam FOL

**Bagian IV - Metode Pembuktian Predikat** (BAB 19-22):
- Equivalences dengan quantifiers
- Tableaux untuk FOL
- Prenex normal form
- Resolution dengan unification

---

### The Power of Logic

**Logika Matematika** adalah fondasi dari:
- 💻 **Computer Science**: Programming languages, compilers
- 🤖 **Artificial Intelligence**: Knowledge representation, reasoning
- ✅ **Formal Verification**: Proving program correctness
- 🗄️ **Databases**: Query languages (SQL)
- 🧮 **Mathematics**: Rigorous proofs

**Resolution + Unification** adalah salah satu pencapaian terbesar dalam automated reasoning!

---

### What's Next?

**Untuk belajar lebih lanjut**:
1. **Advanced topics**: Modal logic, temporal logic, description logic
2. **Proof assistants**: Coq, Isabelle, Lean
3. **Applications**: Prolog programming, SAT solving
4. **Research**: Automated theorem proving competitions (CASC)

**Keep learning, keep reasoning!** 🚀

---

## 📚 Referensi

1. Soesianto, F., & Dwijono, D. "Logika Matematika untuk Ilmu Komputer" - BAB 22
2. Robinson, J. A. "A Machine-Oriented Logic Based on the Resolution Principle" (1965)
3. Chang, C. L., & Lee, R. C. T. "Symbolic Logic and Mechanical Theorem Proving" (1973)
4. Fitting, M. "First-Order Logic and Automated Theorem Proving" (1996)

---

## 🔗 Navigasi

- [⬅️ BAB Sebelumnya: Bentuk Normal Prenex](BAB-21-Bentuk-Normal-Prenex.md)
- [📚 Kembali ke Daftar Isi](../README.md)
- [📋 Cheat Sheet](../CHEAT_SHEET.md)

---

<div align="center">

# 🎉 SELAMAT! 🎉

**Anda telah menyelesaikan seluruh materi Logika Matematika!**

**22 BAB Lengkap** - Dari Proposisional hingga Resolution FOL

**Terima kasih telah belajar dengan tekun!**

*Keep reasoning, keep proving, keep exploring!*

**🚀 The journey of logic continues... 🚀**

---

**Made with ❤️ for students**

**Semoga bermanfaat untuk perjalanan akademis Anda!**

</div>
