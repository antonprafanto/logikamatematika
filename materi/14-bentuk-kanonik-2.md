# 📐 Bab 14: Bentuk Kanonik (Bagian 2) - POS & Maxterm

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Memahami Product of Sums (POS)
- ✅ Mengenal konsep Maxterm
- ✅ Mengkonversi truth table ke POS
- ✅ Mengkonversi antara SOP dan POS
- ✅ Memilih representasi terbaik (SOP vs POS)
- ✅ Mengimplementasikan POS dalam rangkaian

---

## 🎯 Product of Sums (POS)

### Definisi

> **POS** adalah ekspresi Boolean yang merupakan **AND** dari beberapa term **OR** (sum term).

**Bentuk Umum:**
```
F = (term1) · (term2) · (term3) · ...
F = (A+B) · (A'+C) · (B+C')
```

### Karakteristik POS

1. **AND di luar** (operator utama)
2. **OR di dalam** (sum term)
3. Setiap term adalah disjungsi (OR) literal
4. Term dipisahkan dengan · (AND)

### Perbandingan SOP vs POS

| Aspek | SOP | POS |
|-------|-----|-----|
| **Operator Utama** | OR (+) | AND (·) |
| **Term** | Product (AND) | Sum (OR) |
| **Bentuk** | (AB) + (AC) + (BC) | (A+B)·(A+C)·(B+C) |
| **Level 1** | AND gates | OR gates |
| **Level 2** | OR gate | AND gate |
| **Basis** | Minterm (output=1) | Maxterm (output=0) |

### Contoh POS

```
✅ POS: F = (A+B) · (A'+C) · (B+C')
✅ POS: F = (A+B+C) · (A'+B'+C) · (A+B'+C')
✅ POS: F = (A+B) · C

❌ Bukan POS: F = AB + CD        [ini SOP]
❌ Bukan POS: F = (A+B) + (C·D)  [ada AND di dalam]
```

### Implementasi Hardware POS

**Struktur 2-Level:**
1. **Level 1**: OR gates (sum terms)
2. **Level 2**: AND gate (product)

**Contoh: F = (A+B) · (A'+C)**
```
A ──┐/‾‾\
    ├(   )──┐
B ──┘\__/   │
             │  ╱╲
A ──┤>o─┐    ├──┤  ├── F
        │/‾‾\│  ╲╱
C ──────┤   )┘
        │\__/
```

---

## 🔢 Maxterm

### Definisi

> **Maxterm** adalah sum term yang mengandung **SEMUA variabel** fungsi, masing-masing muncul SEKALI (normal atau komplemen).

**Karakteristik Maxterm:**
- Mengandung SEMUA variabel
- Setiap variabel muncul TEPAT SEKALI
- Variabel bisa normal (A) atau komplemen (A')
- Hanya menghasilkan output 0 untuk SATU kombinasi input

### Notasi Maxterm

Untuk n variabel, ada **2ⁿ maxterm**.

**Notasi:**
- **Mᵢ** = maxterm ke-i
- i = nilai desimal dari kombinasi biner

### Hubungan Minterm dan Maxterm

**Penting:** Mᵢ adalah komplemen dari mᵢ

```
Mᵢ = (mᵢ)'
```

**De Morgan Applied:**
```
m₀ = A'B'C'
M₀ = (m₀)' = (A'B'C')' = A + B + C

m₁ = A'B'C
M₁ = (m₁)' = (A'B'C)' = A + B + C'
```

### Maxterm untuk 2 Variabel (A, B)

| Desimal | Biner | Minterm | Maxterm | Simbol | Output 0 ketika |
|---------|-------|---------|---------|--------|------------------|
| 0 | 00 | A'B' | A+B | M₀ | A=0, B=0 |
| 1 | 01 | A'B | A+B' | M₁ | A=0, B=1 |
| 2 | 10 | AB' | A'+B | M₂ | A=1, B=0 |
| 3 | 11 | AB | A'+B' | M₃ | A=1, B=1 |

**Aturan Maxterm:**
- Variabel = 0 → gunakan normal (tanpa ')
- Variabel = 1 → gunakan komplemen (')

**Catatan:** Kebalikan dari minterm!

### Maxterm untuk 3 Variabel (A, B, C)

| Desimal | Biner | Minterm | Maxterm | Simbol |
|---------|-------|---------|---------|--------|
| 0 | 000 | A'B'C' | A+B+C | M₀ |
| 1 | 001 | A'B'C | A+B+C' | M₁ |
| 2 | 010 | A'BC' | A+B'+C | M₂ |
| 3 | 011 | A'BC | A+B'+C' | M₃ |
| 4 | 100 | AB'C' | A'+B+C | M₄ |
| 5 | 101 | AB'C | A'+B+C' | M₅ |
| 6 | 110 | ABC' | A'+B'+C | M₆ |
| 7 | 111 | ABC | A'+B'+C' | M₇ |

**Contoh:**
- M₅ = A'+B+C' → Output 0 ketika A=1, B=0, C=1 (binary 101 = decimal 5)

---

## 🎯 Canonical POS (Product of Maxterms)

### Definisi

> **Canonical POS** adalah POS yang HANYA terdiri dari maxterm.

**Notasi Pi (Π):**
```
F(A,B,C) = ΠM(0, 2, 5)
```

Artinya: F = M₀ · M₂ · M₅

### Langkah Membuat Canonical POS dari Truth Table

**Langkah-langkah:**
1. Identifikasi baris dengan output = 0
2. Untuk setiap baris, buat maxterm
3. AND semua maxterm

### Contoh 1: Fungsi 2 Variabel

**Truth Table:**

| A | B | F |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 | ← M₁
| 1 | 0 | 0 | ← M₂
| 1 | 1 | 1 |

**Solusi:**

Baris dengan F=0:
- Baris 1: A=0, B=1 → M₁ = A+B' (0→normal, 1→komplemen)
- Baris 2: A=1, B=0 → M₂ = A'+B

**Canonical POS:**
```
F = (A+B') · (A'+B)
F = ΠM(1, 2)
```

**Verifikasi:**
- A=0, B=1: F = (0+0)·(1+1) = 0·1 = 0 ✅
- A=1, B=0: F = (1+1)·(0+0) = 1·0 = 0 ✅

---

### Contoh 2: Fungsi 3 Variabel

**Truth Table:**

| A | B | C | F |
|---|---|---|---|
| 0 | 0 | 0 | 0 | ← M₀
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 | ← M₂
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | ← M₄
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 | ← M₆
| 1 | 1 | 1 | 0 | ← M₇

**Solusi:**

Baris dengan F=0:
- M₀ = A+B+C (000)
- M₂ = A+B'+C (010)
- M₄ = A'+B+C (100)
- M₆ = A'+B'+C (110)
- M₇ = A'+B'+C' (111)

**Canonical POS:**
```
F = (A+B+C) · (A+B'+C) · (A'+B+C) · (A'+B'+C) · (A'+B'+C')
F = ΠM(0, 2, 4, 6, 7)
```

---

## 🔄 Konversi SOP ↔ POS

### Hubungan Fundamental

**Untuk fungsi F:**
```
Jika F = Σm(...) maka F' = ΠM(...)
```

Artinya: Maxterm untuk F adalah Minterm untuk F'

### Cara 1: Menggunakan Komplemen

**Dari SOP ke POS:**
1. Tulis F dalam SOP: F = Σm(...)
2. Tulis F' = Σm(baris yang tidak termasuk)
3. Gunakan De Morgan: F = (F')' = ΠM(sama dengan minterm F')

### Cara 2: Langsung dari Truth Table

**SOP:** Gunakan baris dengan F=1 (minterm)
**POS:** Gunakan baris dengan F=0 (maxterm)

### Contoh Konversi

**Truth Table:**

| A | B | C | F | Minterm | Maxterm |
|---|---|---|---|---------|---------|
| 0 | 0 | 0 | 0 |         | M₀ |
| 0 | 0 | 1 | 1 | m₁      |    |
| 0 | 1 | 0 | 0 |         | M₂ |
| 0 | 1 | 1 | 1 | m₃      |    |
| 1 | 0 | 0 | 1 | m₄      |    |
| 1 | 0 | 1 | 0 |         | M₅ |
| 1 | 1 | 0 | 1 | m₆      |    |
| 1 | 1 | 1 | 1 | m₇      |    |

**SOP (menggunakan F=1):**
```
F = Σm(1, 3, 4, 6, 7)
F = A'B'C + A'BC + AB'C' + ABC' + ABC
```

**POS (menggunakan F=0):**
```
F = ΠM(0, 2, 5)
F = (A+B+C) · (A+B'+C) · (A'+B+C')
```

**Verifikasi:** Kedua bentuk ekuivalen! ✅

---

## ⚖️ Memilih SOP vs POS

### Kriteria Pemilihan

| Kriteria | Pilih SOP | Pilih POS |
|----------|-----------|-----------|
| **Jumlah 1 dalam truth table** | Lebih sedikit | Lebih banyak |
| **Jumlah 0 dalam truth table** | Lebih banyak | Lebih sedikit |
| **Implementasi** | AND → OR | OR → AND |
| **Optimasi** | Minimumkan product terms | Minimumkan sum terms |

### Contoh Pemilihan

**Kasus 1:** F mempunyai 2 minterms dan 6 maxterms
```
SOP: 2 terms → F = m₁ + m₃
POS: 6 terms → F = M₀·M₂·M₄·M₅·M₆·M₇

Pilih: SOP (lebih sederhana)
```

**Kasus 2:** F mempunyai 6 minterms dan 2 maxterms
```
SOP: 6 terms → F = m₀+m₁+m₂+m₃+m₄+m₅
POS: 2 terms → F = M₆ · M₇

Pilih: POS (lebih sederhana)
```

### Rule of Thumb

```
Jumlah 1s < Jumlah 0s  →  Gunakan SOP
Jumlah 0s < Jumlah 1s  →  Gunakan POS
Jumlah sama            →  Bebas (biasanya SOP lebih umum)
```

---

## 💻 Implementasi dalam Kode

### Program 1: POS and Maxterm Generator

#### Python
```python
"""
Program: POS and Maxterm Generator
Deskripsi: Generate POS dari truth table dan konversi SOP↔POS
"""

from itertools import product

class POSGenerator:
    """Class untuk generate dan manipulasi POS"""
    
    def __init__(self, num_vars):
        """
        Initialize dengan jumlah variabel
        
        Args:
            num_vars: Jumlah variabel Boolean
        """
        self.num_vars = num_vars
        self.var_names = [chr(65 + i) for i in range(num_vars)]  # A, B, C, ...
    
    def decimal_to_binary(self, decimal, width):
        """Convert decimal to binary list"""
        return [int(b) for b in format(decimal, f'0{width}b')]
    
    def generate_maxterm(self, decimal):
        """
        Generate maxterm dari nilai desimal
        
        Args:
            decimal: Nilai desimal (0 to 2^n - 1)
        
        Returns:
            String maxterm (e.g., "A+B'+C")
        """
        binary = self.decimal_to_binary(decimal, self.num_vars)
        
        terms = []
        for i, bit in enumerate(binary):
            var = self.var_names[i]
            if bit == 0:
                terms.append(var)  # 0 → normal
            else:
                terms.append(var + "'")  # 1 → komplemen
        
        return "(" + "+".join(terms) + ")"
    
    def generate_minterm(self, decimal):
        """Generate minterm (untuk perbandingan)"""
        binary = self.decimal_to_binary(decimal, self.num_vars)
        
        minterm = ""
        for i, bit in enumerate(binary):
            var = self.var_names[i]
            if bit == 0:
                minterm += var + "'"
            else:
                minterm += var
        
        return minterm
    
    def generate_canonical_pos(self, maxterms):
        """
        Generate canonical POS dari list maxterm indices
        
        Args:
            maxterms: List of maxterm indices
        
        Returns:
            String canonical POS
        """
        if not maxterms:
            return "1"
        
        terms = [self.generate_maxterm(m) for m in sorted(maxterms)]
        return " · ".join(terms)
    
    def truth_table_to_pos(self, truth_table):
        """
        Convert truth table to canonical POS
        
        Args:
            truth_table: List of output values (0 or 1)
        
        Returns:
            Tuple (POS string, maxterm indices)
        """
        maxterms = [i for i, val in enumerate(truth_table) if val == 0]
        pos = self.generate_canonical_pos(maxterms)
        
        return pos, maxterms
    
    def truth_table_to_sop(self, truth_table):
        """Convert truth table to canonical SOP (untuk perbandingan)"""
        minterms = [i for i, val in enumerate(truth_table) if val == 1]
        
        if not minterms:
            return "0", []
        
        terms = [self.generate_minterm(m) for m in sorted(minterms)]
        sop = " + ".join(terms)
        
        return sop, minterms
    
    def print_maxterm_table(self):
        """Print tabel maxterm dan minterm untuk perbandingan"""
        print("\n" + "=" * 80)
        print(f"TABEL MINTERM vs MAXTERM ({self.num_vars} Variabel)")
        print("=" * 80)
        
        header = " | ".join(self.var_names)
        print(f"| Dec | Bin | {header} | Minterm      | Maxterm        |")
        print("-" * 80)
        
        for i in range(2 ** self.num_vars):
            binary = self.decimal_to_binary(i, self.num_vars)
            binary_str = "".join(map(str, binary))
            values = " | ".join([str(b).ljust(len(v)) for b, v in zip(binary, self.var_names)])
            minterm = self.generate_minterm(i)
            maxterm = self.generate_maxterm(i)
            
            print(f"| {i}   | {binary_str}  | {values} | m{i}: {minterm.ljust(10)} | M{i}: {maxterm.ljust(12)} |")
        
        print("-" * 80)
        print("\n💡 Perbedaan:")
        print("  Minterm: 0→komplemen ('), 1→normal")
        print("  Maxterm: 0→normal, 1→komplemen (') + gunakan OR (+)")


def demo_maxterm_generation():
    """Demo generate maxterm"""
    print("\n" + "🔷" * 40)
    print("  DEMO: GENERATE MAXTERM")
    print("🔷" * 40)
    
    gen = POSGenerator(3)
    gen.print_maxterm_table()


def demo_truth_table_to_pos():
    """Demo konversi truth table ke POS"""
    print("\n" + "🔷" * 40)
    print("  DEMO: TRUTH TABLE → POS & SOP")
    print("🔷" * 40)
    
    gen = POSGenerator(3)
    
    # F mempunyai lebih sedikit 0 (cocok untuk POS)
    truth_table = [0, 1, 0, 1, 1, 0, 1, 1]
    
    print("\nTruth Table:")
    print("=" * 60)
    print("| A | B | C | F | Used in SOP | Used in POS |")
    print("-" * 60)
    
    for i in range(8):
        binary = gen.decimal_to_binary(i, 3)
        sop_mark = f"m{i}" if truth_table[i] == 1 else "  "
        pos_mark = f"M{i}" if truth_table[i] == 0 else "  "
        
        print(f"| {binary[0]} | {binary[1]} | {binary[2]} | {truth_table[i]} |     {sop_mark.ljust(4)}    |     {pos_mark.ljust(4)}    |")
    
    print("-" * 60)
    
    # Generate SOP
    sop, minterms = gen.truth_table_to_sop(truth_table)
    print(f"\n📌 SOP (menggunakan baris F=1):")
    print(f"   F = Σm({', '.join(map(str, minterms))})")
    print(f"   F = {sop}")
    print(f"   Total: {len(minterms)} product terms")
    
    # Generate POS
    pos, maxterms = gen.truth_table_to_pos(truth_table)
    print(f"\n📌 POS (menggunakan baris F=0):")
    print(f"   F = ΠM({', '.join(map(str, maxterms))})")
    print(f"   F = {pos}")
    print(f"   Total: {len(maxterms)} sum terms")
    
    # Recommendation
    print(f"\n💡 Rekomendasi:")
    if len(minterms) < len(maxterms):
        print(f"   Gunakan SOP ({len(minterms)} terms < {len(maxterms)} terms)")
    elif len(maxterms) < len(minterms):
        print(f"   Gunakan POS ({len(maxterms)} terms < {len(minterms)} terms)")
    else:
        print(f"   SOP atau POS sama (kedunya {len(minterms)} terms)")


def demo_sop_pos_comparison():
    """Demo perbandingan SOP vs POS"""
    print("\n" + "🔷" * 40)
    print("  DEMO: PERBANDINGAN SOP vs POS")
    print("🔷" * 40)
    
    gen = POSGenerator(3)
    
    # Kasus 1: Banyak 1 (cocok SOP)
    print("\n📌 Kasus 1: Fungsi dengan banyak 1 (6 ones, 2 zeros)")
    tt1 = [1, 1, 1, 1, 1, 1, 0, 0]
    
    sop1, min1 = gen.truth_table_to_sop(tt1)
    pos1, max1 = gen.truth_table_to_pos(tt1)
    
    print(f"   SOP: {len(min1)} terms - {sop1[:50]}...")
    print(f"   POS: {len(max1)} terms - {pos1}")
    print(f"   → Pilih: POS (lebih sederhana)")
    
    # Kasus 2: Banyak 0 (cocok POS)
    print("\n📌 Kasus 2: Fungsi dengan banyak 0 (2 ones, 6 zeros)")
    tt2 = [0, 0, 0, 0, 0, 0, 1, 1]
    
    sop2, min2 = gen.truth_table_to_sop(tt2)
    pos2, max2 = gen.truth_table_to_pos(tt2)
    
    print(f"   SOP: {len(min2)} terms - {sop2}")
    print(f"   POS: {len(max2)} terms - {pos2[:50]}...")
    print(f"   → Pilih: SOP (lebih sederhana)")
    
    # Kasus 3: Seimbang
    print("\n📌 Kasus 3: Fungsi dengan jumlah sama (4 ones, 4 zeros)")
    tt3 = [0, 0, 0, 0, 1, 1, 1, 1]
    
    sop3, min3 = gen.truth_table_to_sop(tt3)
    pos3, max3 = gen.truth_table_to_pos(tt3)
    
    print(f"   SOP: {len(min3)} terms")
    print(f"   POS: {len(max3)} terms")
    print(f"   → Pilih: Bebas (biasanya SOP lebih umum)")


def demo_demorgan_conversion():
    """Demo konversi dengan De Morgan"""
    print("\n" + "🔷" * 40)
    print("  DEMO: KONVERSI DENGAN DE MORGAN")
    print("🔷" * 40)
    
    print("\n💡 Hubungan fundamental:")
    print("   Maxterm Mᵢ = (Minterm mᵢ)'")
    print("   Menggunakan De Morgan's Law")
    
    gen = POSGenerator(3)
    
    print("\n📌 Contoh untuk 3 variabel (A, B, C):")
    print("=" * 70)
    print("| i | Binary | Minterm mᵢ  | Maxterm Mᵢ     | Mᵢ = (mᵢ)' ? |")
    print("-" * 70)
    
    for i in range(8):
        binary = gen.decimal_to_binary(i, 3)
        binary_str = "".join(map(str, binary))
        minterm = gen.generate_minterm(i)
        maxterm = gen.generate_maxterm(i)
        
        print(f"| {i} | {binary_str}    | {minterm.ljust(11)} | {maxterm.ljust(14)} | ✅           |")
    
    print("-" * 70)
    
    print("\n💡 Contoh spesifik:")
    print("   m₅ = AB'C")
    print("   M₅ = (m₅)' = (AB'C)'")
    print("      = A' + B + C'  [De Morgan]")
    print("   ✅ Cocok dengan tabel!")


def main():
    """Fungsi utama"""
    print("\n" + "=" * 80)
    print("  POS AND MAXTERM GENERATOR")
    print("=" * 80)
    
    demo_maxterm_generation()
    demo_truth_table_to_pos()
    demo_sop_pos_comparison()
    demo_demorgan_conversion()
    
    print("\n" + "=" * 80)
    print("✓ Demo selesai!")
    print("=" * 80 + "\n")


if __name__ == "__main__":
    main()
```

---

### Program 2: POS Evaluator in C

#### Bahasa C
```c
/*
 * Program: POS and Maxterm Evaluator
 * Deskripsi: Generate dan evaluasi POS
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>

#define MAX_VARS 4

void decimal_to_binary(int decimal, int binary[], int width) {
    for (int i = width - 1; i >= 0; i--) {
        binary[i] = decimal % 2;
        decimal /= 2;
    }
}

// Generate maxterm string
void generate_maxterm(int decimal, int num_vars, char vars[], char* output) {
    int binary[MAX_VARS];
    decimal_to_binary(decimal, binary, num_vars);
    
    strcpy(output, "(");
    
    for (int i = 0; i < num_vars; i++) {
        char temp[4];
        if (binary[i] == 0) {
            sprintf(temp, "%c", vars[i]);  // 0 → normal
        } else {
            sprintf(temp, "%c'", vars[i]); // 1 → komplemen
        }
        strcat(output, temp);
        
        if (i < num_vars - 1) {
            strcat(output, "+");
        }
    }
    
    strcat(output, ")");
}

// Generate minterm string (untuk perbandingan)
void generate_minterm(int decimal, int num_vars, char vars[], char* output) {
    int binary[MAX_VARS];
    decimal_to_binary(decimal, binary, num_vars);
    
    output[0] = '\0';
    
    for (int i = 0; i < num_vars; i++) {
        char temp[4];
        if (binary[i] == 0) {
            sprintf(temp, "%c'", vars[i]);  // 0 → komplemen
        } else {
            sprintf(temp, "%c", vars[i]);   // 1 → normal
        }
        strcat(output, temp);
    }
}

void print_comparison_table(int num_vars, char vars[]) {
    int total = (int)pow(2, num_vars);
    
    printf("\n");
    printf("================================================================================\n");
    printf("TABEL MINTERM vs MAXTERM\n");
    printf("================================================================================\n");
    
    printf("| Dec | Bin |");
    for (int i = 0; i < num_vars; i++) {
        printf(" %c |", vars[i]);
    }
    printf(" Minterm    | Maxterm        |\n");
    printf("--------------------------------------------------------------------------------\n");
    
    for (int i = 0; i < total; i++) {
        int binary[MAX_VARS];
        decimal_to_binary(i, binary, num_vars);
        
        char minterm[20], maxterm[20];
        generate_minterm(i, num_vars, vars, minterm);
        generate_maxterm(i, num_vars, vars, maxterm);
        
        printf("|  %d  | ", i);
        for (int j = 0; j < num_vars; j++) {
            printf("%d", binary[j]);
        }
        printf("  |");
        
        for (int j = 0; j < num_vars; j++) {
            printf(" %d |", binary[j]);
        }
        
        printf(" m%-2d:%-8s | M%-2d:%-11s |\n", i, minterm, i, maxterm);
    }
    
    printf("--------------------------------------------------------------------------------\n");
}

void demo_truth_table_conversion() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: TRUTH TABLE → SOP & POS\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    int num_vars = 3;
    char vars[] = {'A', 'B', 'C'};
    
    // F = 1 for indices: 1, 3, 4, 6, 7
    // F = 0 for indices: 0, 2, 5
    int truth_table[] = {0, 1, 0, 1, 1, 0, 1, 1};
    
    printf("\nTruth Table:\n");
    printf("============================================================\n");
    printf("| A | B | C | F | Used in SOP | Used in POS |\n");
    printf("------------------------------------------------------------\n");
    
    int minterms[8], maxterms[8];
    int min_count = 0, max_count = 0;
    
    for (int i = 0; i < 8; i++) {
        int binary[3];
        decimal_to_binary(i, binary, 3);
        
        char sop_mark[5] = "  ";
        char pos_mark[5] = "  ";
        
        if (truth_table[i] == 1) {
            sprintf(sop_mark, "m%d", i);
            minterms[min_count++] = i;
        } else {
            sprintf(pos_mark, "M%d", i);
            maxterms[max_count++] = i;
        }
        
        printf("| %d | %d | %d | %d |     %-4s    |     %-4s    |\n",
               binary[0], binary[1], binary[2], truth_table[i], sop_mark, pos_mark);
    }
    
    printf("------------------------------------------------------------\n");
    
    // Print SOP
    printf("\n📌 SOP (F=1 rows):\n");
    printf("   F = Σm(");
    for (int i = 0; i < min_count; i++) {
        printf("%d", minterms[i]);
        if (i < min_count - 1) printf(", ");
    }
    printf(")\n");
    printf("   Total: %d product terms\n", min_count);
    
    // Print POS
    printf("\n📌 POS (F=0 rows):\n");
    printf("   F = ΠM(");
    for (int i = 0; i < max_count; i++) {
        printf("%d", maxterms[i]);
        if (i < max_count - 1) printf(", ");
    }
    printf(")\n");
    printf("   Total: %d sum terms\n", max_count);
    
    // Recommendation
    printf("\n💡 Rekomendasi:\n");
    if (min_count < max_count) {
        printf("   Gunakan SOP (%d terms < %d terms)\n", min_count, max_count);
    } else if (max_count < min_count) {
        printf("   Gunakan POS (%d terms < %d terms)\n", max_count, min_count);
    } else {
        printf("   SOP atau POS sama (keduanya %d terms)\n", min_count);
    }
}

void demo_demorgan_relationship() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: HUBUNGAN Mᵢ = (mᵢ)'\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    int num_vars = 3;
    char vars[] = {'A', 'B', 'C'};
    
    printf("\n💡 Maxterm adalah komplemen dari Minterm\n");
    printf("   Menggunakan De Morgan's Law\n");
    
    print_comparison_table(num_vars, vars);
    
    printf("\n📌 Contoh spesifik:\n");
    printf("   m₅ = AB'C\n");
    printf("   M₅ = (m₅)' = (AB'C)'\n");
    printf("      = A' + B + C'  [De Morgan]\n");
    printf("   ✅ Sesuai dengan tabel!\n");
}

int main() {
    printf("\n");
    printf("================================================================================\n");
    printf("  POS AND MAXTERM EVALUATOR (C)\n");
    printf("================================================================================\n");
    
    demo_truth_table_conversion();
    demo_demorgan_relationship();
    
    printf("\n");
    printf("================================================================================\n");
    printf("✓ Demo selesai!\n");
    printf("================================================================================\n\n");
    
    return 0;
}
```

**Compile dan Run:**
```bash
gcc -o pos_generator pos_generator.c -lm
./pos_generator
```

---

## 🎯 Latihan Soal

### Soal 1: Generate Maxterm

Tuliskan maxterm untuk:
1. M₃ untuk variabel A, B
2. M₅ untuk variabel A, B, C
3. M₁₀ untuk variabel A, B, C, D

<details>
<summary>Lihat Jawaban</summary>

1. **M₃ = A'+B'** (binary 11 → keduanya komplemen)
2. **M₅ = A'+B+C'** (binary 101 → A dan C komplemen)
3. **M₁₀ = A'+B+C'+D** (binary 1010)

</details>

---

### Soal 2: Truth Table to POS

Konversi truth table ke canonical POS:

| A | B | F |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

<details>
<summary>Lihat Jawaban</summary>

F=0 pada baris: 1, 2

**Canonical POS:**
```
F = M₁ · M₂
F = (A+B') · (A'+B)
F = ΠM(1, 2)
```

</details>

---

### Soal 3: Konversi SOP ke POS

Diberikan: F = Σm(0, 2, 5, 7) untuk 3 variabel

Tuliskan dalam bentuk POS.

<details>
<summary>Lihat Jawaban</summary>

Total kombinasi 3 variabel = 2³ = 8

Minterm F: 0, 2, 5, 7
Maxterm F (baris tidak termasuk): 1, 3, 4, 6

**POS:**
```
F = ΠM(1, 3, 4, 6)
F = (A+B+C') · (A+B'+C') · (A'+B+C) · (A'+B'+C)
```

</details>

---

## 🚀 Aplikasi Praktis

### 1. **Encoder Design**
- Priority encoder menggunakan POS
- Output = 0 untuk kondisi tertentu

### 2. **Fault Detection**
- Mendeteksi kondisi error (F=0)
- POS lebih natural untuk error conditions

### 3. **Control Logic**
- Active-low signals
- Disable conditions (F=0)

### 4. **Optimization**
- Pilih SOP/POS berdasarkan jumlah term
- Minimize hardware cost

---

## 🎓 Kesimpulan

**Bentuk Kanonik POS:**
- ✅ Product of Sums (AND dari OR)
- ✅ Maxterm = sum term lengkap
- ✅ Canonical POS = AND dari maxterm
- ✅ Notasi: F = ΠM(0, 2, 5, ...)
- ✅ Mᵢ = (mᵢ)' [Maxterm = komplemen Minterm]

**SOP vs POS:**
- Pilih yang punya LEBIH SEDIKIT term
- F banyak 1 → SOP
- F banyak 0 → POS

**Next:** [Bab 15: Karnaugh Maps](./15-karnaugh-maps.md) →

Kita akan belajar metode visual untuk simplifikasi!

---

← [Bab 13: Bentuk Kanonik (Bagian 1)](./13-bentuk-kanonik-1.md) | [Bab 15: Karnaugh Maps](./15-karnaugh-maps.md) →
