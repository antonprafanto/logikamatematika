# BAB 4: Proposisi Majemuk

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB 3](BAB-03-Tabel-Kebenaran.md) | [➡️ BAB 5](BAB-05-Tautologi.md)

---

## 📖 Tujuan Pembelajaran

- ✅ Memahami dan membentuk proposisi majemuk
- ✅ Mem-parsing ekspresi logika kompleks
- ✅ Menerapkan precedence operator
- ✅ Menganalisis proposisi dengan skema

---

## 4.1 Pendahuluan

**Proposisi Majemuk** adalah kombinasi dari proposisi atomik menggunakan operator logika yang membentuk ekspresi yang lebih kompleks.

**Contoh**:
- Simple: `P ∧ Q`
- Complex: `((P ∨ Q) → R) ∧ (¬R ∨ S)`

---

## 4.2 Ekspresi Logika

### Pembentukan Ekspresi

**Well-Formed Formula (WFF)**:
1. Proposisi atomik (P, Q, R) adalah WFF
2. Jika φ adalah WFF, maka ¬φ adalah WFF
3. Jika φ dan ψ adalah WFF, maka (φ ∧ ψ), (φ ∨ ψ), (φ → ψ), (φ ↔ ψ) adalah WFF

**Contoh WFF**:
```
✓ P
✓ ¬P
✓ P ∧ Q
✓ (P ∨ Q) → R
✓ ((P → Q) ∧ (Q → R)) → (P → R)
```

**Bukan WFF**:
```
✗ P ∧        (operator tanpa operand kedua)
✗ ∧ P Q      (operator di depan)
✗ P Q        (tidak ada operator)
```

### Evaluasi Step-by-Step

**Contoh**: `(P ∨ Q) ∧ (¬P → R)` dengan `P=T, Q=F, R=T`

```
Step 1: Evaluasi dalam kurung pertama
(T ∨ F) = T

Step 2: Evaluasi ¬P
¬T = F

Step 3: Evaluasi dalam kurung kedua
(F → T) = T

Step 4: Evaluasi AND final
T ∧ T = T

Result: TRUE
```

---

## 4.3 Skema

**Skema** adalah template proposisi dengan variabel yang dapat di-instantiate.

**Contoh Skema**:
```
Skema: P ∨ ¬P
Instance: 
- "Hujan" ∨ ¬"Hujan"
- "x > 0" ∨ ¬"x > 0"
- Q ∨ ¬Q
```

**Penggunaan**:
- Membuat rumus umum yang bisa dipakai berulang
- Template untuk teorema
- Pattern matching dalam AI

---

## 4.4 Menganalisis Proposisi Majemuk

### Parsing Tree

**Contoh**: `(P ∧ Q) ∨ R`

```
        ∨
       / \
      ∧   R
     / \
    P   Q
```

**Langkah Parsing**:
1. Identifikasi operator utama (main operator)
2. Pisahkan menjadi sub-ekspresi
3. Rekursif untuk sub-ekspresi

### Implementasi Parser

```python
class LogicParser:
    def parse(self, expr):
        """Parse logic expression into tree"""
        expr = expr.strip()
        
        # Remove outer parentheses if exists
        if expr[0] == '(' and expr[-1] == ')':
            expr = expr[1:-1]
        
        # Find main operator (lowest precedence outside parentheses)
        main_op_pos = self.find_main_operator(expr)
        
        if main_op_pos == -1:
            # Atomic proposition or negation
            if expr[0] == '¬':
                return ('NOT', self.parse(expr[1:]))
            return ('VAR', expr)
        
        # Split by main operator
        left = expr[:main_op_pos].strip()
        op = expr[main_op_pos]
        right = expr[main_op_pos+1:].strip()
        
        return (op, self.parse(left), self.parse(right))
    
    def find_main_operator(self, expr):
        """Find position of main operator"""
        level = 0
        for i, char in enumerate(expr):
            if char == '(':
                level += 1
            elif char == ')':
                level -= 1
            elif level == 0 and char in '∨∧→↔':
                return i
        return -1

# Usage
parser = LogicParser()
tree = parser.parse("(P ∧ Q) ∨ R")
print(tree)  # ('∨', ('∧', ('VAR', 'P'), ('VAR', 'Q')), ('VAR', 'R'))
```

---

## 4.5 Aturan Pengurutan

### Precedence (Urutan Prioritas)

**Dari TERTINGGI ke TERENDAH**:
1. `¬` (Negasi)
2. `∧` (Konjungsi)
3. `∨` (Disjungsi)
4. `→` (Implikasi)
5. `↔` (Bi-implikasi)

**Mnemonik**: **N**egasi **A**nd **O**r **I**mplies **I**ff → "NAO II"

### Contoh Parsing

**Tanpa kurung**: `P ∨ Q ∧ R`

**Dibaca sebagai**: `P ∨ (Q ∧ R)` karena ∧ lebih tinggi dari ∨

**Tabel Contoh**:

| Ekspresi | Dibaca Sebagai | Karena |
|----------|----------------|---------|
| `¬P ∧ Q` | `(¬P) ∧ Q` | ¬ > ∧ |
| `P ∨ Q ∧ R` | `P ∨ (Q ∧ R)` | ∧ > ∨ |
| `P ∧ Q → R` | `(P ∧ Q) → R` | ∧ > → |
| `P → Q ↔ R` | `(P → Q) ↔ R` | → > ↔ |
| `¬P ∨ Q → R` | `((¬P) ∨ Q) → R` | ¬ > ∨ > → |

### Best Practice

**Gunakan kurung untuk clarity!**

```python
# Ambiguous (tergantung precedence)
result = not a or b and c

# Clear (explicit grouping)
result = (not a) or (b and c)

# Best practice: Too many parentheses better than ambiguity
result = ((not a) or (b and c))
```

### Associativity

Jika operator sama level:

**Left-associative** (kiri ke kanan):
- `∧`, `∨`
- `P ∧ Q ∧ R` = `(P ∧ Q) ∧ R`

**Right-associative** (kanan ke kiri):
- `→`
- `P → Q → R` = `P → (Q → R)`

---

## 💡 Ringkasan

✅ **Well-Formed Formula**: Aturan pembentukan ekspresi valid

✅ **Precedence**: `¬` > `∧` > `∨` > `→` > `↔`

✅ **Parsing**: Identifikasi operator utama, buat tree structure

✅ **Skema**: Template proposisi untuk reuse

✅ **Best Practice**: Gunakan kurung untuk menghindari ambiguity

---

## 📝 Latihan

### Latihan 1: Precedence
Tambahkan kurung sesuai precedence:

a) `¬P ∧ Q ∨ R`  
b) `P → Q ∧ R ↔ S`  
c) `¬P ∨ ¬Q → R ∧ S`

<details>
<summary>Jawaban</summary>

a) `((¬P) ∧ Q) ∨ R`  
b) `(P → (Q ∧ R)) ↔ S`  
c) `((¬P) ∨ (¬Q)) → (R ∧ S)`
</details>

### Latihan 2: Evaluasi
Evaluasi `(P → Q) ∧ (Q → R)` dengan `P=T, Q=F, R=T`

<details>
<summary>Jawaban</summary>

```
(T → F) ∧ (F → T)
= F ∧ T
= F
```
</details>

### Latihan 3: Implementasi
Implementasikan evaluator untuk proposisi majemuk:

```python
def evaluate(expr, assignment):
    """
    Evaluate logical expression
    expr: string like "(P AND Q) OR R"
    assignment: dict like {'P': True, 'Q': False, 'R': True}
    """
    # Your code here
    pass
```

---

## 🔗 Navigasi

- [⬅️ BAB 3: Tabel Kebenaran](BAB-03-Tabel-Kebenaran.md)
- [➡️ BAB 5: Tautologi](BAB-05-Tautologi.md)
- [📚 Daftar Isi Bagian I](README.md)

---

<div align="center">

**Master precedence rules = Avoid bugs! 🚀**

</div>
