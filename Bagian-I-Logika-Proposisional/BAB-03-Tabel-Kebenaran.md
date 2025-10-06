# BAB 3: Tabel Kebenaran

[⬅️ Kembali ke Daftar Isi](../README.md) | [⬅️ BAB 2](BAB-02-Pengantar-Logika-Proposisional.md) | [➡️ BAB 4](BAB-04-Proposisi-Majemuk.md)

---

## 📖 Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan dapat:
- ✅ Membuat dan membaca tabel kebenaran
- ✅ Memahami 8 operator logika dasar
- ✅ Mengevaluasi proposisi majemuk menggunakan tabel kebenaran
- ✅ Mengaplikasikan operator logika dalam programming dan hardware

---

## 3.1 Pendahuluan

**Tabel kebenaran** (truth table) adalah tabel yang menunjukkan nilai kebenaran dari proposisi majemuk untuk **semua kemungkinan** kombinasi nilai proposisi atomiknya.

### Mengapa Penting?

- ✅ **Verify logic** - Memastikan logika program benar
- ✅ **Design circuits** - Basis untuk gerbang logika (logic gates)
- ✅ **Analyze algorithms** - Memahami kondisi dalam algoritma
- ✅ **Debug code** - Menemukan kesalahan logika

---

## 3.2 Tabel Kebenaran

### Struktur Dasar

Untuk `n` variabel proposisi → `2ⁿ` baris (semua kombinasi)

**Contoh dengan 2 variabel (P, Q)**:
```
P | Q | (hasil operasi)
--|---|----------------
T | T | ...
T | F | ...
F | T | ...
F | F | ...
```

**Urutan baris**: Seperti counting binary dari 00 sampai 11 (atau FF...FT...TF...TT)

### Contoh dengan 3 Variabel

```
P | Q | R | (hasil)
--|---|---|--------
T | T | T | ...
T | T | F | ...
T | F | T | ...
T | F | F | ...
F | T | T | ...
F | T | F | ...
F | F | T | ...
F | F | F | ...
```

**Jumlah baris**: 2³ = 8 baris

---

## 3.3 Perangkai Logika atau Operator

### 3.3.1 Konjungsi (AND / ∧)

> **P ∧ Q** benar **hanya jika** kedua P dan Q benar

**Truth Table**:
```
P | Q | P ∧ Q
--|---|------
T | T |  T   ← Hanya ini yang True
T | F |  F
F | T |  F
F | F |  F
```

**Interpretasi**: "Kedua kondisi harus terpenuhi"

**Aplikasi dalam Programming**:

```python
# Python
if age >= 18 and has_license:
    print("Can drive")

# JavaScript
if (age >= 18 && hasLicense) {
    console.log("Can drive");
}

# SQL
SELECT * FROM users 
WHERE age >= 18 AND verified = true;
```

**Aplikasi dalam Hardware**:
```
AND Gate:
  A ──┐
      ├─AND──→ Output
  B ──┘

Truth table:
A | B | Output
0 | 0 |   0
0 | 1 |   0
1 | 0 |   0
1 | 1 |   1
```

**Use Cases**:
- ✅ Permission check: `is_admin AND is_active`
- ✅ Validation: `email_valid AND password_valid`
- ✅ Multiple conditions: `(x > 0) AND (x < 100)`

---

### 3.3.2 Disjungsi (OR / ∨)

> **P ∨ Q** benar jika **setidaknya satu** dari P atau Q benar (inclusive OR)

**Truth Table**:
```
P | Q | P ∨ Q
--|---|------
T | T |  T
T | F |  T
F | T |  T
F | F |  F   ← Hanya ini yang False
```

**Interpretasi**: "Minimal satu kondisi harus terpenuhi"

**Aplikasi**:

```python
# Python
if is_admin or is_moderator:
    print("Can edit post")

# Error handling
if network_error or timeout_error:
    retry_connection()
```

**Use Cases**:
- ✅ Role-based access: `is_admin OR is_owner`
- ✅ Search filters: `category='tech' OR category='science'`
- ✅ Error conditions: `error1 OR error2 OR error3`

---

### 3.3.3 Negasi (NOT / ¬)

> **¬P** adalah **kebalikan** dari P

**Truth Table**:
```
P | ¬P
--|---
T | F
F | T
```

**Interpretasi**: "Membalik nilai kebenaran"

**Aplikasi**:

```python
# Python
if not is_logged_in:
    redirect_to_login()

# Toggle
is_active = not is_active

# Conditional
if not (age < 18):  # Same as: age >= 18
    print("Adult")
```

**Properties**:
- `¬¬P ≡ P` (Double negation)
- `¬True = False`
- `¬False = True`

---

### 3.3.4 Implikasi (→)

> **P → Q** dibaca "Jika P maka Q". Benar kecuali saat P benar dan Q salah.

**Truth Table**:
```
P | Q | P → Q
--|---|------
T | T |  T    ← P benar, Q benar: OK
T | F |  F    ← P benar, Q salah: GAGAL
F | T |  T    ← P salah: implikasi tetap benar
F | F |  T    ← P salah: implikasi tetap benar
```

**⚠️ Penting**: **"False implies anything"** - Jika premis salah, implikasi selalu benar!

**Contoh Paradoks**:
```
"Jika 1 + 1 = 3, maka saya presiden"  → TRUE (karena 1+1≠3)
"Jika 1 + 1 = 3, maka 2 + 2 = 4"     → TRUE (karena 1+1≠3)
```

**Ekuivalen**: `P → Q ≡ ¬P ∨ Q`

**Implementasi**:

```python
def implies(P, Q):
    # P → Q ≡ ¬P ∨ Q
    return (not P) or Q

# Usage
print(implies(True, True))   # True
print(implies(True, False))  # False ← Satu-satunya False
print(implies(False, True))  # True
print(implies(False, False)) # True
```

**Aplikasi**:
```python
# Pre-condition → Post-condition
def withdraw(amount):
    # Pre: balance >= amount → Post: transaction succeeds
    if balance >= amount:
        balance -= amount
        return True
    return False
```

**Use Cases**:
- ✅ Conditional logic: `if condition then action`
- ✅ Invariants: "If x > 0, then result is positive"
- ✅ Rules: "If premium user, then no ads"

---

### 3.3.5 Ekuivalensi (↔)

> **P ↔ Q** dibaca "P jika dan hanya jika Q". Benar jika P dan Q memiliki nilai yang **sama**.

**Truth Table**:
```
P | Q | P ↔ Q
--|---|------
T | T |  T    ← Sama-sama True
T | F |  F    ← Beda
F | T |  F    ← Beda
F | F |  T    ← Sama-sama False
```

**Interpretasi**: "P dan Q saling implies"

**Ekuivalen**: `P ↔ Q ≡ (P → Q) ∧ (Q → P)`

**Implementasi**:

```python
def biconditional(P, Q):
    # P ↔ Q: True if P and Q have same value
    return P == Q

# Alternative
def biconditional_v2(P, Q):
    # P ↔ Q ≡ (P → Q) ∧ (Q → P)
    return implies(P, Q) and implies(Q, P)
```

**Use Cases**:
- ✅ Equivalence checking: `result1 == result2`
- ✅ Bidirectional rules: "Admin if and only if has admin role"
- ✅ Mathematical definitions: "Even if and only if divisible by 2"

---

## 3.4 Perangkai Logika atau Operator Lainnya

### 3.4.1 NAND (Not-And / ↑ / |)

> **P ↑ Q** adalah negasi dari konjungsi

**Truth Table**:
```
P | Q | P ∧ Q | P ↑ Q
--|---|-------|-------
T | T |   T   |   F   ← Hanya ini yang False
T | F |   F   |   T
F | T |   F   |   T
F | F |   F   |   T
```

**Formula**: `P ↑ Q ≡ ¬(P ∧ Q)`

🌟 **UNIVERSAL GATE**: Semua gerbang logika bisa dibuat dari NAND!

**Konstruksi operator lain dari NAND**:
```
NOT P  = P NAND P
P AND Q = (P NAND Q) NAND (P NAND Q)
P OR Q  = (P NAND P) NAND (Q NAND Q)
```

**Implementasi**:

```python
def nand(P, Q):
    return not (P and Q)

# Construct NOT from NAND
def not_from_nand(P):
    return nand(P, P)

# Construct AND from NAND
def and_from_nand(P, Q):
    return nand(nand(P, Q), nand(P, Q))

# Construct OR from NAND
def or_from_nand(P, Q):
    return nand(nand(P, P), nand(Q, Q))
```

**Hardware**: NAND gate adalah building block utama dalam chip design karena lebih efisien untuk manufacture.

---

### 3.4.2 NOR (Not-Or / ↓)

> **P ↓ Q** adalah negasi dari disjungsi

**Truth Table**:
```
P | Q | P ∨ Q | P ↓ Q
--|---|-------|-------
T | T |   T   |   F
T | F |   T   |   F
F | T |   T   |   F
F | F |   F   |   T   ← Hanya ini yang True
```

**Formula**: `P ↓ Q ≡ ¬(P ∨ Q)`

🌟 **UNIVERSAL GATE**: NOR juga universal!

**Konstruksi dari NOR**:
```
NOT P  = P NOR P
P OR Q  = (P NOR Q) NOR (P NOR Q)
P AND Q = (P NOR P) NOR (Q NOR Q)
```

---

### 3.4.3 XOR (Exclusive-Or / ⊕)

> **P ⊕ Q** benar jika P dan Q memiliki nilai **berbeda**

**Truth Table**:
```
P | Q | P ⊕ Q
--|---|------
T | T |  F    ← Sama: False
T | F |  T    ← Beda: True
F | T |  T    ← Beda: True
F | F |  F    ← Sama: False
```

**Formula**: `P ⊕ Q ≡ (P ∨ Q) ∧ ¬(P ∧ Q)` atau `P ⊕ Q ≡ (P ∧ ¬Q) ∨ (¬P ∧ Q)`

**Implementasi**:

```python
def xor(P, Q):
    # Simple: True if different
    return P != Q

# Alternative
def xor_v2(P, Q):
    # (P ∨ Q) ∧ ¬(P ∧ Q)
    return (P or Q) and not (P and Q)

# Bitwise (for integers)
def xor_bitwise(a, b):
    return a ^ b
```

**Aplikasi Penting**:

#### 1. **Enkripsi Sederhana (XOR Cipher)**

```python
def xor_encrypt(plaintext, key):
    """Simple XOR encryption"""
    return ''.join(chr(ord(c) ^ key) for c in plaintext)

def xor_decrypt(ciphertext, key):
    """XOR decryption (same as encryption!)"""
    return ''.join(chr(ord(c) ^ key) for c in ciphertext)

# Example
message = "HELLO"
key = 42
encrypted = xor_encrypt(message, key)
decrypted = xor_decrypt(encrypted, key)
print(f"Original: {message}")
print(f"Encrypted: {encrypted}")
print(f"Decrypted: {decrypted}")  # Back to "HELLO"
```

**Mengapa XOR?** Karena `P ⊕ K ⊕ K = P` (self-inverse property)

#### 2. **Swap Tanpa Variable Tambahan**

```python
# Swap a dan b using XOR (no temp variable!)
a = 5  # binary: 101
b = 3  # binary: 011

a = a ^ b  # a = 101 ^ 011 = 110 (6)
b = a ^ b  # b = 110 ^ 011 = 101 (5) → b now has original a
a = a ^ b  # a = 110 ^ 101 = 011 (3) → a now has original b

print(a, b)  # Output: 3 5 (swapped!)
```

#### 3. **Parity Checking**

```python
def even_parity(bits):
    """Check if number of 1s is even"""
    parity = 0
    for bit in bits:
        parity ^= bit
    return parity == 0  # True if even number of 1s

# Example: Error detection in data transmission
data = [1, 0, 1, 1, 0, 1, 0]  # 4 ones (even)
print(even_parity(data))  # True

# With error
data_error = [1, 0, 1, 1, 0, 1, 1]  # 5 ones (odd)
print(even_parity(data_error))  # False → Error detected!
```

#### 4. **Find Unique Element**

```python
def find_unique(arr):
    """Find element that appears once (others appear twice)"""
    result = 0
    for num in arr:
        result ^= num
    return result

# Example
numbers = [2, 3, 5, 4, 5, 3, 4]  # 2 appears once
print(find_unique(numbers))  # Output: 2

# Why? Because: a ^ a = 0, and 0 ^ b = b
# So: 2 ^ 3 ^ 3 ^ 4 ^ 4 ^ 5 ^ 5 = 2 ^ 0 ^ 0 ^ 0 = 2
```

---

## 📊 Summary Table: All 8 Operators

| Operator | Symbol | Name | True when... | Formula |
|----------|--------|------|--------------|---------|
| AND | ∧ | Konjungsi | Both True | `P ∧ Q` |
| OR | ∨ | Disjungsi | At least one True | `P ∨ Q` |
| NOT | ¬ | Negasi | Opposite value | `¬P` |
| IMPLIES | → | Implikasi | Not (True → False) | `¬P ∨ Q` |
| IFF | ↔ | Ekuivalensi | Same value | `(P → Q) ∧ (Q → P)` |
| NAND | ↑ | Not-And | Not both True | `¬(P ∧ Q)` |
| NOR | ↓ | Not-Or | Both False | `¬(P ∨ Q)` |
| XOR | ⊕ | Exclusive-Or | Different values | `(P ∧ ¬Q) ∨ (¬P ∧ Q)` |

---

## 💻 Complete Truth Table (All Operators)

```
P | Q | P∧Q | P∨Q | ¬P | P→Q | P↔Q | P↑Q | P↓Q | P⊕Q
--|---|-----|-----|----| ----|-----|-----|-----|-----
T | T |  T  |  T  | F  |  T  |  T  |  F  |  F  |  F
T | F |  F  |  T  | F  |  F  |  F  |  T  |  F  |  T
F | T |  F  |  T  | T  |  T  |  F  |  T  |  F  |  T
F | F |  F  |  F  | T  |  T  |  T  |  T  |  T  |  F
```

---

## 💡 Ringkasan

### Key Takeaways

✅ **Tabel kebenaran** menunjukkan semua kemungkinan kombinasi (2ⁿ baris)

✅ **8 Operator Logika**:
- **AND (∧)**: Kedua harus True
- **OR (∨)**: Minimal satu True
- **NOT (¬)**: Membalik nilai
- **IMPLIES (→)**: False hanya jika True → False
- **IFF (↔)**: True jika sama
- **NAND (↑)**: Universal gate, ¬(AND)
- **NOR (↓)**: Universal gate, ¬(OR)
- **XOR (⊕)**: True jika berbeda

✅ **NAND dan NOR adalah universal** - bisa membuat semua operator lain

✅ **XOR sangat berguna** untuk enkripsi, swapping, parity, dll

✅ **Implikasi**: "False implies anything" (counter-intuitive tapi valid)

---

## 📝 Latihan

### Latihan 1: Truth Table
Buat tabel kebenaran untuk: `(P ∧ Q) ∨ (¬P ∧ R)`

<details>
<summary>Lihat Jawaban</summary>

```
P | Q | R | ¬P | P∧Q | ¬P∧R | (P∧Q)∨(¬P∧R)
--|---|---|----|-----|------|-------------
T | T | T | F  |  T  |  F   |     T
T | T | F | F  |  T  |  F   |     T
T | F | T | F  |  F  |  F   |     F
T | F | F | F  |  F  |  F   |     F
F | T | T | T  |  F  |  T   |     T
F | T | F | T  |  F  |  F   |     F
F | F | T | T  |  F  |  T   |     T
F | F | F | T  |  F  |  F   |     F
```
</details>

### Latihan 2: Implementation
Implementasikan truth table generator dalam Python:

```python
def generate_truth_table(num_vars):
    """Generate all possible combinations for n variables"""
    # Your code here
    pass

# Should print:
# [[False, False], [False, True], [True, False], [True, True]]
print(generate_truth_table(2))
```

<details>
<summary>Lihat Jawaban</summary>

```python
def generate_truth_table(num_vars):
    import itertools
    return list(itertools.product([False, True], repeat=num_vars))

# Alternative without itertools
def generate_truth_table_manual(num_vars):
    result = []
    for i in range(2 ** num_vars):
        row = []
        for j in range(num_vars):
            row.append(bool((i >> j) & 1))
        result.append(row)
    return result
```
</details>

### Latihan 3: XOR Application
Implementasikan simple file encryptor menggunakan XOR:

```python
def encrypt_file(filename, key):
    """Encrypt file using XOR cipher"""
    # Your code here
    pass

def decrypt_file(filename, key):
    """Decrypt file using XOR cipher"""
    # Your code here
    pass
```

---

## 🔗 Navigasi

- [⬅️ Kembali ke Daftar Isi](../README.md)
- [⬅️ BAB 2: Pengantar Logika Proposisional](BAB-02-Pengantar-Logika-Proposisional.md)
- [➡️ BAB 4: Proposisi Majemuk](BAB-04-Proposisi-Majemuk.md)
- [📚 Lihat Semua BAB di Bagian I](README.md)

---

<div align="center">

**Selamat Belajar! 🚀**

*Tabel kebenaran adalah tool fundamental - practice sampai hafal!*

</div>
