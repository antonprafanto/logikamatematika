# ⚡ Bab 12: Gerbang Logika (Bagian 2)

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Memahami gerbang universal (NAND, NOR)
- ✅ Mengenal gerbang XOR dan XNOR
- ✅ Membangun gerbang lain dari gerbang universal
- ✅ Menerapkan XOR dalam aplikasi praktis
- ✅ Membandingkan semua gerbang logika

---

## 🌟 Gerbang Universal

> **Gerbang Universal** adalah gerbang yang dapat digunakan untuk membangun SEMUA gerbang logika lainnya.

**Ada 2 gerbang universal:**
1. **NAND** (NOT-AND)
2. **NOR** (NOT-OR)

### Mengapa Disebut Universal?

Dengan HANYA menggunakan gerbang NAND (atau NOR), kita bisa membuat:
- NOT gate
- AND gate
- OR gate
- XOR gate
- Semua rangkaian digital!

**Keuntungan:**
- Desain IC lebih sederhana
- Produksi lebih murah
- Lebih mudah di-standardisasi

---

## 🚫 Gerbang NAND (NOT-AND)

### Definisi

> **Gerbang NAND** = NOT(AND)
> Output adalah kebalikan dari AND gate

**Operasi:**
```
Y = NOT (A AND B)
Y = (A · B)'
Y = ¬(A ∧ B)
```

### Simbol

```
    A ──┐
        │  ╱╲
        ├─┤  ├o── Y
        │  ╲╱
    B ──┘
       NAND
```

**Lingkaran kecil (o) = NOT**

### Tabel Kebenaran

| A | B | A · B | Y = (A·B)' |
|---|---|-------|------------|
| 0 | 0 | 0     | **1** ✅ |
| 0 | 1 | 0     | **1** ✅ |
| 1 | 0 | 0     | **1** ✅ |
| 1 | 1 | 1     | **0** |

**Karakteristik:**
- Output 0 HANYA jika SEMUA input = 1
- Output 1 jika ADA SATU input = 0
- Kebalikan dari AND

### Ekuivalensi dengan De Morgan

```
(A · B)' = A' + B'  [De Morgan]
```

Jadi: **NAND = OR dengan input di-invert**

### Membangun Gerbang Lain dari NAND

#### 1. NOT dari NAND
```
A ──┐
    │  ╱╲
    ├─┤  ├o── Y = A'
    │  ╲╱
A ──┘

Y = (A · A)' = A'
```

#### 2. AND dari NAND
```
    A ──┐
        │  ╱╲          ╱╲
        ├─┤  ├o───┤  ├o── Y = A·B
        │  ╲╱          ╲╱
    B ──┘
      NAND1         NOT

Y = ((A·B)')'  = A·B
```

#### 3. OR dari NAND
```
A ──┤  ╱╲
    ├o──┤  ├──┐
    │   ╲╱   │  ╱╲
              ├─┤  ├o── Y = A+B
    │   ╱╲   │  ╲╱
B ──┤  ├──┘
    ├o──┤
    │   ╲╱

Y = (A' · B')' = A + B  [De Morgan]
```

### Aplikasi NAND

1. **Implementasi FPGA/ASIC**
   - Sebagian besar FPGA menggunakan LUT berbasis NAND

2. **Flash Memory**
   - NAND Flash (USB drive, SSD)
   - Lebih murah dan padat daripada NOR Flash

3. **Error Detection**
   - Parity checker
   - Checksum calculator

---

## 🔄 Gerbang NOR (NOT-OR)

### Definisi

> **Gerbang NOR** = NOT(OR)
> Output adalah kebalikan dari OR gate

**Operasi:**
```
Y = NOT (A OR B)
Y = (A + B)'
Y = ¬(A ∨ B)
```

### Simbol

```
    A ──┐
        │ /‾‾\
        ├─(   )o── Y
        │ \__/
    B ──┘
        NOR
```

### Tabel Kebenaran

| A | B | A + B | Y = (A+B)' |
|---|---|-------|------------|
| 0 | 0 | 0     | **1** ✅ |
| 0 | 1 | 1     | **0** |
| 1 | 0 | 1     | **0** |
| 1 | 1 | 1     | **0** |

**Karakteristik:**
- Output 1 HANYA jika SEMUA input = 0
- Output 0 jika ADA SATU input = 1
- Kebalikan dari OR

### Ekuivalensi dengan De Morgan

```
(A + B)' = A' · B'  [De Morgan]
```

Jadi: **NOR = AND dengan input di-invert**

### Membangun Gerbang Lain dari NOR

#### 1. NOT dari NOR
```
A ──┐
    │ /‾‾\
    ├─(   )o── Y = A'
    │ \__/
A ──┘

Y = (A + A)' = A'
```

#### 2. OR dari NOR
```
    A ──┐
        │ /‾‾\        /‾‾\
        ├─(   )o───o(   )── Y = A+B
        │ \__/        \__/
    B ──┘
       NOR1         NOT

Y = ((A+B)')'  = A+B
```

#### 3. AND dari NOR
```
A ──o┐
     │ /‾‾\
     ├─(   )o── Y = A·B
     │ \__/
B ──o┘

Y = (A' + B')' = A · B  [De Morgan]
```

### Aplikasi NOR

1. **SR Latch**
   - Memory element dasar
   - Dibangun dari 2 NOR gates

2. **Control Logic**
   - Disable signal (semua 0 → enable)

3. **Reset Logic**
   - Active-low reset circuits

---

## ⊕ Gerbang XOR (Exclusive-OR)

### Definisi

> **Gerbang XOR** menghasilkan output 1 jika input BERBEDA
> Output 0 jika input SAMA

**Operasi:**
```
Y = A XOR B
Y = A ⊕ B
Y = A'·B + A·B'
Y = (A+B)·(A'+ B')
```

### Simbol

```
    A ──┐)
        │ )
        ├─)─── Y
        │ )
    B ──┘)
       XOR
```

**Garis ganda di input = XOR**

### Tabel Kebenaran

| A | B | Y = A ⊕ B | Sama? |
|---|---|-----------|-------|
| 0 | 0 | **0** | ✅ Sama |
| 0 | 1 | **1** ✅ | Beda |
| 1 | 0 | **1** ✅ | Beda |
| 1 | 1 | **0** | ✅ Sama |

**Karakteristik:**
- Output 1 jika input BERBEDA
- Output 0 jika input SAMA
- "One or the other, but not both"

### Sifat-Sifat XOR

1. **Komutatif:** A ⊕ B = B ⊕ A
2. **Asosiatif:** (A ⊕ B) ⊕ C = A ⊕ (B ⊕ C)
3. **Identitas:** A ⊕ 0 = A
4. **Inverse:** A ⊕ A = 0
5. **Inverse dengan 1:** A ⊕ 1 = A'
6. **Double XOR:** A ⊕ B ⊕ B = A

### Implementasi XOR dari Gerbang Dasar

**Metode 1: Menggunakan AND, OR, NOT**
```
Y = A'·B + A·B'

    A ──┤>o─┐
            │  ╱╲
            ├─┤  ├─┐
    B ──────┘  ╲╱  │
                    │ /‾‾\
    A ──────┐  ╱╲  ├─(   )── Y
            ├─┤  ├─┘ \__/
    B ──┤>o─┘  ╲╱
```

**Metode 2: Menggunakan NAND**
```
Butuh 4 NAND gates untuk 1 XOR
```

### Aplikasi XOR

#### 1. **Parity Checker**
Mendeteksi error transmisi data:
```
Data: 1 0 1 1 0 0 1
Parity = 1⊕0⊕1⊕1⊕0⊕0⊕1 = 0 (even parity)
```

#### 2. **Encryption (XOR Cipher)**
```
Plaintext:  1 0 1 1 0 1 0 1
Key:        1 1 0 0 1 1 0 0
Ciphertext: 0 1 1 1 1 0 0 1 (Plaintext XOR Key)

Decrypt:
Ciphertext: 0 1 1 1 1 0 0 1
Key:        1 1 0 0 1 1 0 0
Plaintext:  1 0 1 1 0 1 0 1 (Ciphertext XOR Key)
```

**Sifat:** (A ⊕ B) ⊕ B = A → Perfect untuk enkripsi!

#### 3. **Adder Circuit**
Half Adder:
```
Sum = A ⊕ B
Carry = A · B
```

Full Adder:
```
Sum = A ⊕ B ⊕ Cin
Cout = (A·B) + (Cin·(A⊕B))
```

#### 4. **Comparator**
Mengecek apakah dua bit sama:
```
Equal = NOT(A XOR B) = A XNOR B
```

#### 5. **Swap Values (Tanpa Temp Variable)**
```python
a = a XOR b
b = a XOR b  # Sekarang b = original a
a = a XOR b  # Sekarang a = original b
```

---

## ⊙ Gerbang XNOR (Exclusive-NOR)

### Definisi

> **Gerbang XNOR** = NOT(XOR)
> Output 1 jika input SAMA
> Output 0 jika input BERBEDA

**Operasi:**
```
Y = NOT (A XOR B)
Y = (A ⊕ B)'
Y = A·B + A'·B'
Y = A ⊙ B  (simbol XNOR)
```

### Simbol

```
    A ──┐)
        │ )
        ├─)o── Y
        │ )
    B ──┘)
       XNOR
```

### Tabel Kebenaran

| A | B | A ⊕ B | Y = (A⊕B)' | Sama? |
|---|---|-------|------------|-------|
| 0 | 0 | 0     | **1** ✅ | ✅ Sama |
| 0 | 1 | 1     | **0** | Beda |
| 1 | 0 | 1     | **0** | Beda |
| 1 | 1 | 0     | **1** ✅ | ✅ Sama |

**Karakteristik:**
- Output 1 jika input SAMA
- Output 0 jika input BERBEDA
- **Equality Detector**

### Aplikasi XNOR

1. **Equality Checker**
   ```
   A == B → Output 1
   A != B → Output 0
   ```

2. **Even Parity Generator**
   ```
   Pastikan jumlah bit '1' genap
   ```

3. **Error Detection**
   - Membandingkan data asli dengan data diterima

---

## 📊 Ringkasan Semua Gerbang

### Tabel Perbandingan Lengkap

| Gerbang | Simbol | Operasi | Output 1 ketika | Universal? |
|---------|--------|---------|-----------------|------------|
| **NOT** | ─┤>o─ | Y = A' | A = 0 | ❌ |
| **AND** | ─┤ ╱╲ ├─ | Y = A·B | A=1 DAN B=1 | ❌ |
| **OR** | ─┤/‾‾\├─ | Y = A+B | Min. 1 input = 1 | ❌ |
| **NAND** | ─┤ ╱╲ ├o─ | Y = (A·B)' | Ada 1 input = 0 | ✅ |
| **NOR** | ─┤/‾‾\├o─ | Y = (A+B)' | Semua input = 0 | ✅ |
| **XOR** | ─┤) )├─ | Y = A⊕B | Input BERBEDA | ❌ |
| **XNOR** | ─┤) )├o─ | Y = (A⊕B)' | Input SAMA | ❌ |

### Truth Table Lengkap (2-Input)

| A | B | NOT A | AND | OR | NAND | NOR | XOR | XNOR |
|---|---|-------|-----|----|----|-----|-----|------|
| 0 | 0 | 1 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 1 |

---

## 💻 Implementasi dalam Kode

### Program 1: Complete Logic Gate Simulator

#### Python
```python
"""
Program: Complete Logic Gates Simulator
Deskripsi: Simulasi SEMUA gerbang logika (7 gates)
"""

class LogicGates:
    """Class untuk semua gerbang logika"""
    
    @staticmethod
    def NOT(a):
        return int(not a)
    
    @staticmethod
    def AND(a, b):
        return int(a and b)
    
    @staticmethod
    def OR(a, b):
        return int(a or b)
    
    @staticmethod
    def NAND(a, b):
        return int(not (a and b))
    
    @staticmethod
    def NOR(a, b):
        return int(not (a or b))
    
    @staticmethod
    def XOR(a, b):
        return int(a != b)  # XOR = berbeda
    
    @staticmethod
    def XNOR(a, b):
        return int(a == b)  # XNOR = sama


def print_complete_truth_table():
    """Print truth table untuk SEMUA gerbang"""
    print("\n" + "=" * 80)
    print("TRUTH TABLE LENGKAP - SEMUA GERBANG LOGIKA")
    print("=" * 80)
    
    print("\n| A | B | NOT A | AND | OR | NAND | NOR | XOR | XNOR |")
    print("-" * 80)
    
    for a in [0, 1]:
        for b in [0, 1]:
            not_a = LogicGates.NOT(a)
            and_val = LogicGates.AND(a, b)
            or_val = LogicGates.OR(a, b)
            nand_val = LogicGates.NAND(a, b)
            nor_val = LogicGates.NOR(a, b)
            xor_val = LogicGates.XOR(a, b)
            xnor_val = LogicGates.XNOR(a, b)
            
            print(f"| {a} | {b} |   {not_a}   |  {and_val}  | {or_val}  |  {nand_val}   |  {nor_val}  |  {xor_val}  |  {xnor_val}   |")
    
    print("-" * 80)
    print("\n📝 Catatan:")
    print("  - NAND & NOR = UNIVERSAL gates")
    print("  - XOR: Output 1 jika input BERBEDA")
    print("  - XNOR: Output 1 jika input SAMA")
    print("=" * 80)


def demo_xor_applications():
    """Demo aplikasi XOR"""
    print("\n" + "🔷" * 40)
    print("  DEMO: APLIKASI XOR GATE")
    print("🔷" * 40)
    
    # 1. Parity Checker
    print("\n📌 1. PARITY CHECKER")
    data = [1, 0, 1, 1, 0, 0, 1]
    print(f"  Data: {data}")
    
    parity = 0
    for bit in data:
        parity = LogicGates.XOR(parity, bit)
    
    print(f"  Parity bit: {parity}")
    print(f"  {'Even parity' if parity == 0 else 'Odd parity'}")
    
    # 2. Simple Encryption
    print("\n📌 2. XOR ENCRYPTION")
    plaintext = [1, 0, 1, 1, 0, 1, 0, 1]
    key =       [1, 1, 0, 0, 1, 1, 0, 0]
    
    print(f"  Plaintext:  {plaintext}")
    print(f"  Key:        {key}")
    
    # Encrypt
    ciphertext = [LogicGates.XOR(p, k) for p, k in zip(plaintext, key)]
    print(f"  Ciphertext: {ciphertext}")
    
    # Decrypt
    decrypted = [LogicGates.XOR(c, k) for c, k in zip(ciphertext, key)]
    print(f"  Decrypted:  {decrypted}")
    print(f"  ✅ Sama dengan plaintext!")
    
    # 3. Swap without temp
    print("\n📌 3. SWAP TANPA VARIABEL TEMP")
    a = 5  # Binary: 101
    b = 3  # Binary: 011
    
    print(f"  Sebelum: a={a}, b={b}")
    
    a = a ^ b  # XOR in Python
    b = a ^ b
    a = a ^ b
    
    print(f"  Sesudah: a={a}, b={b}")
    print(f"  ✅ Berhasil di-swap!")


def demo_half_adder():
    """Demo Half Adder menggunakan XOR dan AND"""
    print("\n" + "🔷" * 40)
    print("  DEMO: HALF ADDER (XOR + AND)")
    print("🔷" * 40)
    
    print("\n📝 Half Adder menjumlahkan 2 bit:")
    print("  Sum = A XOR B")
    print("  Carry = A AND B")
    
    print("\n" + "=" * 60)
    print("| A | B | Sum (A⊕B) | Carry (A·B) | Desimal |")
    print("-" * 60)
    
    for a in [0, 1]:
        for b in [0, 1]:
            sum_bit = LogicGates.XOR(a, b)
            carry = LogicGates.AND(a, b)
            decimal = a + b
            
            print(f"| {a} | {b} |     {sum_bit}     |      {carry}      |    {decimal}    |")
    
    print("-" * 60)
    print("\n💡 Sum memberikan bit hasil, Carry memberikan 'bawaan'")
    print("=" * 60)


def demo_equality_checker():
    """Demo XNOR sebagai equality checker"""
    print("\n" + "🔷" * 40)
    print("  DEMO: EQUALITY CHECKER (XNOR)")
    print("🔷" * 40)
    
    print("\n📝 XNOR mendeteksi apakah dua input sama")
    print("  Output 1 = SAMA")
    print("  Output 0 = BEDA")
    
    print("\n" + "=" * 50)
    print("| A | B | A==B? | XNOR | Keterangan |")
    print("-" * 50)
    
    for a in [0, 1]:
        for b in [0, 1]:
            equal = (a == b)
            xnor = LogicGates.XNOR(a, b)
            status = "✅ Sama" if equal else "❌ Beda"
            
            print(f"| {a} | {b} |  {int(equal)}    |  {xnor}   | {status.ljust(10)} |")
    
    print("-" * 50)
    print("\n💡 XNOR = Equality detector")
    print("=" * 50)


def demo_universal_gates():
    """Demo membangun gerbang lain dari NAND"""
    print("\n" + "🔷" * 40)
    print("  DEMO: UNIVERSAL GATE - NAND")
    print("🔷" * 40)
    
    print("\n📝 NAND adalah gerbang UNIVERSAL")
    print("  Semua gerbang lain bisa dibangun dari NAND!")
    
    # NOT from NAND
    print("\n📌 1. NOT dari NAND")
    print("  NOT(A) = NAND(A, A)")
    print("\n| A | NOT A | NAND(A,A) | Sama? |")
    print("-" * 40)
    
    for a in [0, 1]:
        not_a = LogicGates.NOT(a)
        nand_a = LogicGates.NAND(a, a)
        same = "✅" if not_a == nand_a else "❌"
        
        print(f"| {a} |   {not_a}   |     {nand_a}     | {same}    |")
    
    print("-" * 40)
    
    # AND from NAND
    print("\n📌 2. AND dari NAND")
    print("  AND(A,B) = NOT(NAND(A,B)) = NAND(NAND(A,B), NAND(A,B))")
    print("\n| A | B | AND | Built from NAND | Sama? |")
    print("-" * 50)
    
    for a in [0, 1]:
        for b in [0, 1]:
            and_val = LogicGates.AND(a, b)
            nand1 = LogicGates.NAND(a, b)
            and_from_nand = LogicGates.NAND(nand1, nand1)
            same = "✅" if and_val == and_from_nand else "❌"
            
            print(f"| {a} | {b} |  {and_val}  |       {and_from_nand}        | {same}    |")
    
    print("-" * 50)
    print("\n💡 Dengan NAND, kita bisa bangun SEMUA gerbang!")
    print("=" * 80)


def main():
    """Fungsi utama"""
    print("\n" + "=" * 80)
    print("  SIMULATOR LENGKAP - SEMUA GERBANG LOGIKA")
    print("=" * 80)
    
    print_complete_truth_table()
    demo_xor_applications()
    demo_half_adder()
    demo_equality_checker()
    demo_universal_gates()
    
    print("\n" + "=" * 80)
    print("✓ Demo selesai!")
    print("=" * 80 + "\n")


if __name__ == "__main__":
    main()
```

---

### Program 2: Logic Gates in C

#### Bahasa C
```c
/*
 * Program: Complete Logic Gates Library
 * Deskripsi: Implementasi semua gerbang logika
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>

// === BASIC GATES ===
int gate_not(int a) { return !a; }
int gate_and(int a, int b) { return a && b; }
int gate_or(int a, int b) { return a || b; }

// === UNIVERSAL GATES ===
int gate_nand(int a, int b) { return !(a && b); }
int gate_nor(int a, int b) { return !(a || b); }

// === SPECIAL GATES ===
int gate_xor(int a, int b) { return a != b; }
int gate_xnor(int a, int b) { return a == b; }

void print_complete_truth_table() {
    printf("\n");
    printf("================================================================================\n");
    printf("TRUTH TABLE LENGKAP - SEMUA GERBANG\n");
    printf("================================================================================\n");
    
    printf("\n| A | B | NOT A | AND | OR | NAND | NOR | XOR | XNOR |\n");
    printf("--------------------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        for (int b = 0; b <= 1; b++) {
            printf("| %d | %d |   %d   |  %d  | %d  |  %d   |  %d  |  %d  |  %d   |\n",
                   a, b,
                   gate_not(a),
                   gate_and(a, b),
                   gate_or(a, b),
                   gate_nand(a, b),
                   gate_nor(a, b),
                   gate_xor(a, b),
                   gate_xnor(a, b));
        }
    }
    
    printf("--------------------------------------------------------------------------------\n");
    printf("\n📝 NAND & NOR = UNIVERSAL gates\n");
    printf("📝 XOR: Beda=1, Sama=0 | XNOR: Sama=1, Beda=0\n");
    printf("================================================================================\n");
}

void demo_half_adder() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: HALF ADDER\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n📝 Half Adder: Sum = A XOR B, Carry = A AND B\n");
    
    printf("\n============================================================\n");
    printf("| A | B | Sum (A⊕B) | Carry (A·B) | Desimal |\n");
    printf("------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        for (int b = 0; b <= 1; b++) {
            int sum = gate_xor(a, b);
            int carry = gate_and(a, b);
            int decimal = a + b;
            
            printf("| %d | %d |     %d     |      %d      |    %d    |\n",
                   a, b, sum, carry, decimal);
        }
    }
    
    printf("------------------------------------------------------------\n");
    printf("💡 Sum = bit hasil, Carry = 'bawaan'\n");
    printf("============================================================\n");
}

void demo_xor_encryption() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: XOR ENCRYPTION\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    int plaintext[] = {1, 0, 1, 1, 0, 1, 0, 1};
    int key[]       = {1, 1, 0, 0, 1, 1, 0, 0};
    int size = 8;
    
    printf("\nPlaintext:  ");
    for (int i = 0; i < size; i++) printf("%d ", plaintext[i]);
    
    printf("\nKey:        ");
    for (int i = 0; i < size; i++) printf("%d ", key[i]);
    
    // Encrypt
    int ciphertext[8];
    printf("\nCiphertext: ");
    for (int i = 0; i < size; i++) {
        ciphertext[i] = gate_xor(plaintext[i], key[i]);
        printf("%d ", ciphertext[i]);
    }
    
    // Decrypt
    int decrypted[8];
    printf("\nDecrypted:  ");
    for (int i = 0; i < size; i++) {
        decrypted[i] = gate_xor(ciphertext[i], key[i]);
        printf("%d ", decrypted[i]);
    }
    
    printf("\n\n✅ Decrypted sama dengan plaintext!\n");
    printf("💡 XOR encryption: (P XOR K) XOR K = P\n");
}

void demo_universal_nand() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: UNIVERSAL GATE - NAND\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n📌 NOT dari NAND: NOT(A) = NAND(A,A)\n");
    printf("----------------------------------------\n");
    printf("| A | NOT A | NAND(A,A) | Sama? |\n");
    printf("----------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        int not_a = gate_not(a);
        int nand_a = gate_nand(a, a);
        char* same = (not_a == nand_a) ? "✅" : "❌";
        
        printf("| %d |   %d   |     %d     | %s    |\n", a, not_a, nand_a, same);
    }
    
    printf("----------------------------------------\n");
    
    printf("\n📌 AND dari NAND: AND(A,B) = NAND(NAND(A,B), NAND(A,B))\n");
    printf("--------------------------------------------------\n");
    printf("| A | B | AND | From NAND | Sama? |\n");
    printf("--------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        for (int b = 0; b <= 1; b++) {
            int and_val = gate_and(a, b);
            int nand1 = gate_nand(a, b);
            int and_from_nand = gate_nand(nand1, nand1);
            char* same = (and_val == and_from_nand) ? "✅" : "❌";
            
            printf("| %d | %d |  %d  |     %d     | %s    |\n",
                   a, b, and_val, and_from_nand, same);
        }
    }
    
    printf("--------------------------------------------------\n");
    printf("\n💡 NAND = UNIVERSAL → Bisa bangun SEMUA gerbang!\n");
}

int main() {
    printf("\n");
    printf("================================================================================\n");
    printf("  LOGIC GATES COMPLETE SIMULATOR (C)\n");
    printf("================================================================================\n");
    
    print_complete_truth_table();
    demo_half_adder();
    demo_xor_encryption();
    demo_universal_nand();
    
    printf("\n");
    printf("================================================================================\n");
    printf("✓ Demo selesai!\n");
    printf("================================================================================\n\n");
    
    return 0;
}
```

**Compile dan Run:**
```bash
gcc -o complete_gates complete_gates.c
./complete_gates
```

---

## 🎯 Latihan Soal

### Soal 1: Output Gerbang

Tentukan output:
1. NAND(1, 1) = ?
2. NOR(0, 0) = ?
3. XOR(1, 0) = ?
4. XNOR(1, 1) = ?

<details>
<summary>Lihat Jawaban</summary>

1. **0** (NAND: 1 AND 1 = 1, NOT 1 = 0)
2. **1** (NOR: 0 OR 0 = 0, NOT 0 = 1)
3. **1** (XOR: berbeda → 1)
4. **1** (XNOR: sama → 1)

</details>

---

### Soal 2: Universal Gate

Bagaimana membuat OR gate dari NAND saja?

<details>
<summary>Lihat Jawaban</summary>

```
OR(A, B) = NAND(NOT A, NOT B)
         = NAND(NAND(A,A), NAND(B,B))

Langkah:
1. NAND(A,A) → A'
2. NAND(B,B) → B'
3. NAND(A', B') → (A'·B')' = A+B [De Morgan]
```

</details>

---

### Soal 3: XOR dari Gerbang Dasar

Buktikan: A XOR B = (A·B') + (A'·B)

<details>
<summary>Lihat Jawaban</summary>

| A | B | A' | B' | A·B' | A'·B | (A·B')+(A'·B) | A⊕B | Sama? |
|---|---|----|----|------|------|---------------|-----|-------|
| 0 | 0 | 1  | 1  | 0    | 0    | 0             | 0   | ✅ |
| 0 | 1 | 1  | 0  | 0    | 1    | 1             | 1   | ✅ |
| 1 | 0 | 0  | 1  | 1    | 0    | 1             | 1   | ✅ |
| 1 | 1 | 0  | 0  | 0    | 0    | 0             | 0   | ✅ |

**Terbukti ekuivalen!**

</details>

---

## 🚀 Aplikasi Praktis

### 1. **Processor ALU (Arithmetic Logic Unit)**
- Adder/Subtractor menggunakan XOR + AND
- Bitwise operations: AND, OR, XOR, NOT

### 2. **Memory Systems**
- SR Latch (NOR gates)
- D Flip-Flop (NAND gates)

### 3. **Communication**
- Error detection (XOR parity)
- Encryption (XOR cipher)

### 4. **Digital Design**
- FPGA menggunakan LUT berbasis NAND/NOR
- ASIC optimization dengan universal gates

---

## 🎓 Kesimpulan

**7 Gerbang Logika:**
- ✅ Basic: NOT, AND, OR
- ✅ Universal: **NAND, NOR**
- ✅ Special: XOR, XNOR

**Key Takeaways:**
- NAND dan NOR bisa bangun SEMUA gerbang lain
- XOR untuk parity, encryption, adder
- XNOR untuk equality check

**Next:** [Bab 13: Bentuk Kanonik (Bagian 1)](./13-bentuk-kanonik-1.md) →

Kita akan belajar SOP (Sum of Products) dan Minterm!

---

← [Bab 11: Gerbang Logika (Bagian 1)](./11-gerbang-logika-1.md) | [Bab 13: Bentuk Kanonik (Bagian 1)](./13-bentuk-kanonik-1.md) →
