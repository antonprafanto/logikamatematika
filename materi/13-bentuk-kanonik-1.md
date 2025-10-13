# 📐 Bab 13: Bentuk Kanonik (Bagian 1) - SOP & Minterm

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Memahami konsep bentuk kanonik
- ✅ Mengenal Sum of Products (SOP)
- ✅ Memahami konsep Minterm
- ✅ Mengkonversi truth table ke SOP
- ✅ Menyederhanakan ekspresi SOP
- ✅ Mengimplementasikan SOP dalam rangkaian

---

## 🎯 Apa itu Bentuk Kanonik?

> **Bentuk Kanonik** (Canonical Form) adalah bentuk standar untuk merepresentasikan fungsi Boolean.

### Mengapa Penting?

1. **Standardisasi**: Setiap fungsi Boolean punya representasi unik
2. **Implementasi**: Mudah diimplementasikan ke rangkaian
3. **Optimasi**: Starting point untuk simplifikasi
4. **Komunikasi**: Format standar antar engineer

### Dua Bentuk Kanonik

| Bentuk | Nama | Komponen | Operator |
|--------|------|----------|----------|
| **SOP** | Sum of Products | Minterm | OR dari AND |
| **POS** | Product of Sums | Maxterm | AND dari OR |

**Catatan:** 
- SOP → Bab 13 (ini)
- POS → Bab 14

---

## ➕ Sum of Products (SOP)

### Definisi

> **SOP** adalah ekspresi Boolean yang merupakan **OR** dari beberapa term **AND** (product term).

**Bentuk Umum:**
```
F = (term1) + (term2) + (term3) + ...
F = AB + A'C + BC'
```

### Karakteristik SOP

1. **OR di luar** (operator utama)
2. **AND di dalam** (product term)
3. Setiap term adalah konjungsi (AND) literal
4. Term dipisahkan dengan + (OR)

### Contoh SOP

```
✅ SOP: F = AB + A'C + BC'
✅ SOP: F = ABC + A'B'C + AB'C'
✅ SOP: F = A + BC + A'B'C

❌ Bukan SOP: F = (A+B)(C+D)        [ini POS]
❌ Bukan SOP: F = A + B(C+D)        [ada OR di dalam]
```

### Implementasi Hardware SOP

**Struktur 2-Level:**
1. **Level 1**: AND gates (product terms)
2. **Level 2**: OR gate (sum)

**Contoh: F = AB + A'C**
```
A ──┐  ╱╲
    ├──┤  ├──┐
B ──┘  ╲╱   │
             │ /‾‾\
A ──┤>o─┐    ├─(   )── F
        │╱╲  │ \__/
C ──────┤  ├─┘
        │╲╱
```

---

## 🔢 Minterm

### Definisi

> **Minterm** adalah product term yang mengandung **SEMUA variabel** fungsi, masing-masing muncul SEKALI (normal atau komplemen).

**Karakteristik Minterm:**
- Mengandung SEMUA variabel
- Setiap variabel muncul TEPAT SEKALI
- Variabel bisa normal (A) atau komplemen (A')
- Hanya menghasilkan output 1 untuk SATU kombinasi input

### Notasi Minterm

Untuk n variabel, ada **2ⁿ minterm**.

**Notasi:**
- **mᵢ** = minterm ke-i
- i = nilai desimal dari kombinasi biner

### Minterm untuk 2 Variabel (A, B)

| Desimal | Biner | Minterm | Simbol | Output 1 ketika |
|---------|-------|---------|--------|-----------------|
| 0 | 00 | A'B' | m₀ | A=0, B=0 |
| 1 | 01 | A'B | m₁ | A=0, B=1 |
| 2 | 10 | AB' | m₂ | A=1, B=0 |
| 3 | 11 | AB | m₃ | A=1, B=1 |

**Aturan:**
- Variabel = 0 → gunakan komplemen (')
- Variabel = 1 → gunakan normal

### Minterm untuk 3 Variabel (A, B, C)

| Desimal | Biner | Minterm | Simbol |
|---------|-------|---------|--------|
| 0 | 000 | A'B'C' | m₀ |
| 1 | 001 | A'B'C | m₁ |
| 2 | 010 | A'BC' | m₂ |
| 3 | 011 | A'BC | m₃ |
| 4 | 100 | AB'C' | m₄ |
| 5 | 101 | AB'C | m₅ |
| 6 | 110 | ABC' | m₆ |
| 7 | 111 | ABC | m₇ |

**Contoh:**
- m₅ = AB'C → Output 1 ketika A=1, B=0, C=1 (binary 101 = decimal 5)

---

## 🎯 Canonical SOP (Sum of Minterms)

### Definisi

> **Canonical SOP** adalah SOP yang HANYA terdiri dari minterm.

**Notasi Sigma (Σ):**
```
F(A,B,C) = Σm(1, 3, 5, 7)
```

Artinya: F = m₁ + m₃ + m₅ + m₇

### Langkah Membuat Canonical SOP dari Truth Table

**Langkah-langkah:**
1. Identifikasi baris dengan output = 1
2. Untuk setiap baris, buat minterm
3. OR semua minterm

### Contoh 1: Fungsi 2 Variabel

**Truth Table:**

| A | B | F |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 | ← m₁
| 1 | 0 | 1 | ← m₂
| 1 | 1 | 0 |

**Solusi:**

Baris dengan F=1:
- Baris 1: A=0, B=1 → m₁ = A'B
- Baris 2: A=1, B=0 → m₂ = AB'

**Canonical SOP:**
```
F = A'B + AB'
F = Σm(1, 2)
```

**Verifikasi:**
- A=0, B=1: F = (1)(1) + (0)(0) = 1 ✅
- A=1, B=0: F = (0)(0) + (1)(1) = 1 ✅

---

### Contoh 2: Fungsi 3 Variabel

**Truth Table:**

| A | B | C | F |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | ← m₁
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | ← m₃
| 1 | 0 | 0 | 1 | ← m₄
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 | ← m₆
| 1 | 1 | 1 | 1 | ← m₇

**Solusi:**

Baris dengan F=1:
- m₁ = A'B'C (001)
- m₃ = A'BC (011)
- m₄ = AB'C' (100)
- m₆ = ABC' (110)
- m₇ = ABC (111)

**Canonical SOP:**
```
F = A'B'C + A'BC + AB'C' + ABC' + ABC
F = Σm(1, 3, 4, 6, 7)
```

---

## 🔧 Simplifikasi SOP

### Metode Simplifikasi

1. **Aljabar Boolean** (manual)
2. **Karnaugh Map** (visual) - Bab 15
3. **Quine-McCluskey** (algoritma)

### Contoh Simplifikasi dengan Aljabar Boolean

**Soal:** Sederhanakan F = A'B'C + A'BC + AB'C' + ABC' + ABC

**Langkah 1: Grup term yang mirip**
```
F = A'B'C + A'BC + AB'C' + ABC' + ABC
  = A'C(B' + B) + AB'C' + AC(B' + B)
```

**Langkah 2: Apply B + B' = 1**
```
F = A'C(1) + AB'C' + AC(1)
  = A'C + AB'C' + AC
```

**Langkah 3: Gabungkan A'C dan AC**
```
F = C(A' + A) + AB'C'
  = C(1) + AB'C'
  = C + AB'C'
```

**Langkah 4: Absorption**
```
F = C + AB'C'
  = C + AB' (karena C + C' = 1, jadi C'  diserap)
```

**Hasil Akhir:**
```
F = C + AB'
```

**Verifikasi:**
- Original: 5 product terms, 13 literals
- Simplified: 2 product terms, 3 literals
- Reduction: 60% fewer gates!

---

## 💡 Konversi Antar Format

### 1. Truth Table → Canonical SOP

**Algoritma:**
```
FOR setiap baris dengan output = 1:
    Buat minterm untuk baris tersebut
    OR semua minterm
```

### 2. Canonical SOP → Truth Table

**Algoritma:**
```
Untuk setiap kombinasi input:
    Evaluasi setiap minterm
    Output = OR dari semua hasil minterm
```

### 3. Non-Canonical SOP → Canonical SOP

**Expand** product term yang tidak lengkap:

**Contoh:** Expand AB menjadi canonical (variabel: A, B, C)

```
AB = AB(C + C')          [Multiply by (C + C') = 1]
   = ABC + ABC'
```

**Lengkap:**
```
F = AB + C
  = AB(C + C') + C(A + A')(B + B')
  = ABC + ABC' + AC(B + B') + A'C(B + B')
  = ABC + ABC' + ABC + ABC' + A'BC + A'BC'
  = ABC + ABC' + A'BC + A'BC'    [Remove duplicates]
  = Σm(3, 6, 7, 1, 5)
```

---

## 💻 Implementasi dalam Kode

### Program 1: SOP and Minterm Generator

#### Python
```python
"""
Program: SOP and Minterm Generator
Deskripsi: Generate SOP dari truth table dan sebaliknya
"""

from itertools import product

class SOPGenerator:
    """Class untuk generate dan manipulasi SOP"""
    
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
    
    def generate_minterm(self, decimal):
        """
        Generate minterm dari nilai desimal
        
        Args:
            decimal: Nilai desimal (0 to 2^n - 1)
        
        Returns:
            String minterm (e.g., "A'B'C")
        """
        binary = self.decimal_to_binary(decimal, self.num_vars)
        
        minterm = ""
        for i, bit in enumerate(binary):
            var = self.var_names[i]
            if bit == 0:
                minterm += var + "'"
            else:
                minterm += var
        
        return minterm
    
    def generate_canonical_sop(self, minterms):
        """
        Generate canonical SOP dari list minterm indices
        
        Args:
            minterms: List of minterm indices
        
        Returns:
            String canonical SOP
        """
        if not minterms:
            return "0"
        
        terms = [self.generate_minterm(m) for m in sorted(minterms)]
        return " + ".join(terms)
    
    def truth_table_to_sop(self, truth_table):
        """
        Convert truth table to canonical SOP
        
        Args:
            truth_table: List of output values (0 or 1)
        
        Returns:
            Tuple (SOP string, minterm indices)
        """
        minterms = [i for i, val in enumerate(truth_table) if val == 1]
        sop = self.generate_canonical_sop(minterms)
        
        return sop, minterms
    
    def print_minterm_table(self):
        """Print tabel semua minterm"""
        print("\n" + "=" * 70)
        print(f"TABEL MINTERM ({self.num_vars} Variabel: {', '.join(self.var_names)})")
        print("=" * 70)
        
        header = " | ".join(self.var_names)
        print(f"| Desimal | Biner | {header} | Minterm | Simbol |")
        print("-" * 70)
        
        for i in range(2 ** self.num_vars):
            binary = self.decimal_to_binary(i, self.num_vars)
            binary_str = "".join(map(str, binary))
            values = " | ".join([str(b).ljust(len(v)) for b, v in zip(binary, self.var_names)])
            minterm = self.generate_minterm(i)
            
            print(f"|    {i}    | {binary_str.ljust(5)} | {values} | {minterm.ljust(10)} | m{i}    |")
        
        print("-" * 70)
    
    def evaluate_minterm(self, minterm_index, inputs):
        """
        Evaluasi minterm dengan input tertentu
        
        Args:
            minterm_index: Index minterm
            inputs: List nilai input [A, B, C, ...]
        
        Returns:
            1 jika semua literal cocok, 0 jika tidak
        """
        expected = self.decimal_to_binary(minterm_index, self.num_vars)
        return 1 if inputs == expected else 0
    
    def evaluate_sop(self, minterm_indices, inputs):
        """
        Evaluasi SOP (OR dari minterm)
        
        Args:
            minterm_indices: List of minterm indices
            inputs: List nilai input
        
        Returns:
            Output SOP (0 atau 1)
        """
        results = [self.evaluate_minterm(m, inputs) for m in minterm_indices]
        return 1 if any(results) else 0


def demo_minterm_generation():
    """Demo generate minterm"""
    print("\n" + "🔷" * 35)
    print("  DEMO: GENERATE MINTERM")
    print("🔷" * 35)
    
    # 2 variabel
    print("\n📌 2 Variabel (A, B):")
    gen2 = SOPGenerator(2)
    gen2.print_minterm_table()
    
    # 3 variabel
    print("\n📌 3 Variabel (A, B, C):")
    gen3 = SOPGenerator(3)
    gen3.print_minterm_table()


def demo_truth_table_to_sop():
    """Demo konversi truth table ke SOP"""
    print("\n" + "🔷" * 35)
    print("  DEMO: TRUTH TABLE → CANONICAL SOP")
    print("🔷" * 35)
    
    # Contoh 1: 2 variabel
    print("\n📌 Contoh 1: F(A,B)")
    gen = SOPGenerator(2)
    
    truth_table = [0, 1, 1, 0]  # F = 1 untuk m1 dan m2
    
    print("\nTruth Table:")
    print("| A | B | F |")
    print("|---|---|---|")
    for i in range(4):
        binary = gen.decimal_to_binary(i, 2)
        print(f"| {binary[0]} | {binary[1]} | {truth_table[i]} |")
    
    sop, minterms = gen.truth_table_to_sop(truth_table)
    
    print(f"\nMinterms dengan output 1: {minterms}")
    print(f"Canonical SOP: F = {sop}")
    print(f"Notasi Sigma: F = Σm({', '.join(map(str, minterms))})")
    
    # Contoh 2: 3 variabel
    print("\n📌 Contoh 2: F(A,B,C)")
    gen3 = SOPGenerator(3)
    
    truth_table3 = [0, 1, 0, 1, 1, 0, 1, 1]  # F = Σm(1,3,4,6,7)
    
    print("\nTruth Table:")
    print("| A | B | C | F |")
    print("|---|---|---|---|")
    for i in range(8):
        binary = gen3.decimal_to_binary(i, 3)
        marker = " ← Selected" if truth_table3[i] == 1 else ""
        print(f"| {binary[0]} | {binary[1]} | {binary[2]} | {truth_table3[i]} |{marker}")
    
    sop3, minterms3 = gen3.truth_table_to_sop(truth_table3)
    
    print(f"\nMinterms dengan output 1: {minterms3}")
    print(f"Canonical SOP: F = {sop3}")
    print(f"Notasi Sigma: F = Σm({', '.join(map(str, minterms3))})")


def demo_sop_evaluation():
    """Demo evaluasi SOP dengan berbagai input"""
    print("\n" + "🔷" * 35)
    print("  DEMO: EVALUASI SOP")
    print("🔷" * 35)
    
    gen = SOPGenerator(3)
    minterms = [1, 3, 4, 6, 7]  # F = Σm(1,3,4,6,7)
    
    sop = gen.generate_canonical_sop(minterms)
    print(f"\nFungsi: F = {sop}")
    print(f"        F = Σm({', '.join(map(str, minterms))})")
    
    print("\nVerifikasi dengan Truth Table:")
    print("=" * 60)
    print("| A | B | C | F (Expected) | F (Computed) | Match? |")
    print("-" * 60)
    
    all_match = True
    for i in range(8):
        inputs = gen.decimal_to_binary(i, 3)
        expected = 1 if i in minterms else 0
        computed = gen.evaluate_sop(minterms, inputs)
        match = "✅" if expected == computed else "❌"
        
        if expected != computed:
            all_match = False
        
        print(f"| {inputs[0]} | {inputs[1]} | {inputs[2]} |      {expected}       |      {computed}       | {match}    |")
    
    print("-" * 60)
    
    if all_match:
        print("\n✅ Semua evaluasi BENAR!")
    else:
        print("\n❌ Ada kesalahan evaluasi!")


def demo_simplification_comparison():
    """Demo perbandingan canonical vs simplified"""
    print("\n" + "🔷" * 35)
    print("  DEMO: CANONICAL vs SIMPLIFIED SOP")
    print("🔷" * 35)
    
    gen = SOPGenerator(3)
    
    # F = A'B'C + A'BC + AB'C' + ABC' + ABC
    minterms = [1, 3, 4, 6, 7]
    canonical = gen.generate_canonical_sop(minterms)
    
    print("\n📌 Canonical SOP:")
    print(f"  F = {canonical}")
    
    # Count literals
    canonical_terms = 5
    canonical_literals = 5 * 3  # 5 terms, each has 3 literals
    
    print(f"\n📊 Statistik Canonical:")
    print(f"  - Product terms: {canonical_terms}")
    print(f"  - Total literals: {canonical_literals}")
    print(f"  - Gates needed: {canonical_terms} AND + 1 OR = {canonical_terms + 1}")
    
    # Simplified (manually computed)
    simplified = "C + AB'"
    simplified_terms = 2
    simplified_literals = 3  # C has 1, AB' has 2
    
    print(f"\n📌 Simplified SOP:")
    print(f"  F = {simplified}")
    
    print(f"\n📊 Statistik Simplified:")
    print(f"  - Product terms: {simplified_terms}")
    print(f"  - Total literals: {simplified_literals}")
    print(f"  - Gates needed: 1 AND + 1 OR = 2")
    
    # Reduction
    term_reduction = (1 - simplified_terms / canonical_terms) * 100
    literal_reduction = (1 - simplified_literals / canonical_literals) * 100
    gate_reduction = (1 - 2 / (canonical_terms + 1)) * 100
    
    print(f"\n🎯 REDUKSI:")
    print(f"  - Product terms: {term_reduction:.1f}% reduction")
    print(f"  - Literals: {literal_reduction:.1f}% reduction")
    print(f"  - Gates: {gate_reduction:.1f}% reduction")
    
    print("\n💡 Simplifikasi sangat penting untuk:")
    print("  - Mengurangi biaya hardware")
    print("  - Meningkatkan kecepatan")
    print("  - Mengurangi konsumsi daya")


def main():
    """Fungsi utama"""
    print("\n" + "=" * 70)
    print("  SOP AND MINTERM GENERATOR")
    print("=" * 70)
    
    demo_minterm_generation()
    demo_truth_table_to_sop()
    demo_sop_evaluation()
    demo_simplification_comparison()
    
    print("\n" + "=" * 70)
    print("✓ Demo selesai!")
    print("=" * 70 + "\n")


if __name__ == "__main__":
    main()
```

---

### Program 2: SOP Evaluator in C

#### Bahasa C
```c
/*
 * Program: SOP and Minterm Evaluator
 * Deskripsi: Generate dan evaluasi SOP
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>

#define MAX_VARS 4

// Convert decimal to binary array
void decimal_to_binary(int decimal, int binary[], int width) {
    for (int i = width - 1; i >= 0; i--) {
        binary[i] = decimal % 2;
        decimal /= 2;
    }
}

// Generate minterm string from decimal
void generate_minterm(int decimal, int num_vars, char vars[], char* output) {
    int binary[MAX_VARS];
    decimal_to_binary(decimal, binary, num_vars);
    
    output[0] = '\0';
    
    for (int i = 0; i < num_vars; i++) {
        char temp[4];
        if (binary[i] == 0) {
            sprintf(temp, "%c'", vars[i]);
        } else {
            sprintf(temp, "%c", vars[i]);
        }
        strcat(output, temp);
    }
}

// Print minterm table
void print_minterm_table(int num_vars, char vars[]) {
    int total = (int)pow(2, num_vars);
    
    printf("\n");
    printf("======================================================================\n");
    printf("TABEL MINTERM (%d Variabel: ", num_vars);
    for (int i = 0; i < num_vars; i++) {
        printf("%c", vars[i]);
        if (i < num_vars - 1) printf(", ");
    }
    printf(")\n");
    printf("======================================================================\n");
    
    // Header
    printf("| Des | Bin |");
    for (int i = 0; i < num_vars; i++) {
        printf(" %c |", vars[i]);
    }
    printf(" Minterm    | Symbol |\n");
    printf("----------------------------------------------------------------------\n");
    
    // Rows
    for (int i = 0; i < total; i++) {
        int binary[MAX_VARS];
        decimal_to_binary(i, binary, num_vars);
        
        char minterm[20];
        generate_minterm(i, num_vars, vars, minterm);
        
        printf("|  %d  | ", i);
        for (int j = 0; j < num_vars; j++) {
            printf("%d", binary[j]);
        }
        printf("  |");
        
        for (int j = 0; j < num_vars; j++) {
            printf(" %d |", binary[j]);
        }
        
        printf(" %-10s | m%-2d    |\n", minterm, i);
    }
    
    printf("----------------------------------------------------------------------\n");
}

// Evaluate minterm with given inputs
int evaluate_minterm(int minterm_index, int inputs[], int num_vars) {
    int expected[MAX_VARS];
    decimal_to_binary(minterm_index, expected, num_vars);
    
    for (int i = 0; i < num_vars; i++) {
        if (inputs[i] != expected[i]) {
            return 0;
        }
    }
    return 1;
}

// Evaluate SOP (OR of minterms)
int evaluate_sop(int minterms[], int num_minterms, int inputs[], int num_vars) {
    for (int i = 0; i < num_minterms; i++) {
        if (evaluate_minterm(minterms[i], inputs, num_vars)) {
            return 1;
        }
    }
    return 0;
}

void demo_2var_sop() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: SOP 2 VARIABEL\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    int num_vars = 2;
    char vars[] = {'A', 'B'};
    
    print_minterm_table(num_vars, vars);
    
    // Example: F = Σm(1, 2)
    int minterms[] = {1, 2};
    int num_minterms = 2;
    
    printf("\n📌 Contoh: F = Σm(1, 2) = A'B + AB'\n");
    
    printf("\nVerifikasi Truth Table:\n");
    printf("======================================\n");
    printf("| A | B | F (Expected) | F (Eval) |\n");
    printf("--------------------------------------\n");
    
    for (int i = 0; i < 4; i++) {
        int inputs[2];
        decimal_to_binary(i, inputs, num_vars);
        
        int expected = (i == 1 || i == 2) ? 1 : 0;
        int evaluated = evaluate_sop(minterms, num_minterms, inputs, num_vars);
        
        char* match = (expected == evaluated) ? "✅" : "❌";
        
        printf("| %d | %d |      %d       |    %d     %s |\n",
               inputs[0], inputs[1], expected, evaluated, match);
    }
    
    printf("--------------------------------------\n");
}

void demo_3var_sop() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: SOP 3 VARIABEL\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    int num_vars = 3;
    char vars[] = {'A', 'B', 'C'};
    
    print_minterm_table(num_vars, vars);
    
    // Example: F = Σm(1, 3, 4, 6, 7)
    int minterms[] = {1, 3, 4, 6, 7};
    int num_minterms = 5;
    
    printf("\n📌 Contoh: F = Σm(1, 3, 4, 6, 7)\n");
    printf("   F = A'B'C + A'BC + AB'C' + ABC' + ABC\n");
    
    printf("\nVerifikasi Truth Table:\n");
    printf("=================================================\n");
    printf("| A | B | C | F (Expected) | F (Eval) | Match |\n");
    printf("-------------------------------------------------\n");
    
    for (int i = 0; i < 8; i++) {
        int inputs[3];
        decimal_to_binary(i, inputs, num_vars);
        
        int expected = 0;
        for (int j = 0; j < num_minterms; j++) {
            if (minterms[j] == i) {
                expected = 1;
                break;
            }
        }
        
        int evaluated = evaluate_sop(minterms, num_minterms, inputs, num_vars);
        
        char* match = (expected == evaluated) ? "✅" : "❌";
        
        printf("| %d | %d | %d |      %d       |    %d     | %s    |\n",
               inputs[0], inputs[1], inputs[2], expected, evaluated, match);
    }
    
    printf("-------------------------------------------------\n");
}

void demo_simplification_stats() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: CANONICAL vs SIMPLIFIED\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n📌 Canonical SOP:\n");
    printf("   F = A'B'C + A'BC + AB'C' + ABC' + ABC\n");
    printf("   F = Σm(1, 3, 4, 6, 7)\n");
    
    int canonical_terms = 5;
    int canonical_literals = 5 * 3;
    int canonical_gates = canonical_terms + 1;
    
    printf("\n📊 Statistik Canonical:\n");
    printf("   - Product terms: %d\n", canonical_terms);
    printf("   - Total literals: %d\n", canonical_literals);
    printf("   - Gates: %d AND + 1 OR = %d\n", canonical_terms, canonical_gates);
    
    printf("\n📌 Simplified SOP:\n");
    printf("   F = C + AB'\n");
    
    int simplified_terms = 2;
    int simplified_literals = 3;
    int simplified_gates = 2;
    
    printf("\n📊 Statistik Simplified:\n");
    printf("   - Product terms: %d\n", simplified_terms);
    printf("   - Total literals: %d\n", simplified_literals);
    printf("   - Gates: 1 AND + 1 OR = %d\n", simplified_gates);
    
    float term_reduction = (1.0 - (float)simplified_terms / canonical_terms) * 100;
    float literal_reduction = (1.0 - (float)simplified_literals / canonical_literals) * 100;
    float gate_reduction = (1.0 - (float)simplified_gates / canonical_gates) * 100;
    
    printf("\n🎯 REDUKSI:\n");
    printf("   - Terms: %.1f%% reduction\n", term_reduction);
    printf("   - Literals: %.1f%% reduction\n", literal_reduction);
    printf("   - Gates: %.1f%% reduction\n", gate_reduction);
}

int main() {
    printf("\n");
    printf("======================================================================\n");
    printf("  SOP AND MINTERM EVALUATOR (C)\n");
    printf("======================================================================\n");
    
    demo_2var_sop();
    demo_3var_sop();
    demo_simplification_stats();
    
    printf("\n");
    printf("======================================================================\n");
    printf("✓ Demo selesai!\n");
    printf("======================================================================\n\n");
    
    return 0;
}
```

**Compile dan Run:**
```bash
gcc -o sop_generator sop_generator.c -lm
./sop_generator
```

---

## 🎯 Latihan Soal

### Soal 1: Generate Minterm

Tuliskan minterm untuk:
1. m₅ untuk variabel A, B, C
2. m₆ untuk variabel A, B, C
3. m₁₂ untuk variabel A, B, C, D

<details>
<summary>Lihat Jawaban</summary>

1. **m₅ = AB'C** (binary 101)
2. **m₆ = ABC'** (binary 110)
3. **m₁₂ = AB'C'** (binary 1100)

</details>

---

### Soal 2: Truth Table to SOP

Konversi truth table ke canonical SOP:

| A | B | C | F |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 |

<details>
<summary>Lihat Jawaban</summary>

F=1 pada baris: 0, 2, 3, 6

**Canonical SOP:**
```
F = m₀ + m₂ + m₃ + m₆
F = A'B'C' + A'BC' + A'BC + ABC'
F = Σm(0, 2, 3, 6)
```

</details>

---

### Soal 3: Simplifikasi

Sederhanakan: F = A'B'C + A'BC + ABC + ABC'

<details>
<summary>Lihat Jawaban</summary>

```
F = A'B'C + A'BC + ABC + ABC'
  = A'C(B' + B) + AB(C + C')
  = A'C(1) + AB(1)
  = A'C + AB
```

**Hasil: F = A'C + AB**

</details>

---

## 🚀 Aplikasi Praktis

### 1. **Decoder Design**
- 3-to-8 decoder menghasilkan 8 minterm
- Setiap output adalah satu minterm

### 2. **ROM (Read-Only Memory)**
- ROM menyimpan truth table
- Output adalah OR dari selected minterms

### 3. **PLA (Programmable Logic Array)**
- AND plane menghasilkan product terms
- OR plane menghasilkan SOP

### 4. **FPGA Implementation**
- LUT (Look-Up Table) store truth table
- Output function as SOP

---

## 🎓 Kesimpulan

**Bentuk Kanonik SOP:**
- ✅ Standardisasi fungsi Boolean
- ✅ Minterm = product term lengkap
- ✅ Canonical SOP = OR dari minterm
- ✅ Notasi: F = Σm(1, 3, 5, ...)
- ✅ Easy to implement tapi tidak efisien
- ✅ Perlu simplifikasi untuk optimasi

**Next:** [Bab 14: Bentuk Kanonik (Bagian 2)](./14-bentuk-kanonik-2.md) →

Kita akan belajar POS (Product of Sums) dan Maxterm!

---

← [Bab 12: Gerbang Logika (Bagian 2)](./12-gerbang-logika-2.md) | [Bab 14: Bentuk Kanonik (Bagian 2)](./14-bentuk-kanonik-2.md) →
