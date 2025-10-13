# ⚡ Bab 10: Aljabar Boolean

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Memahami konsep aljabar Boolean
- ✅ Menguasai hukum-hukum Boolean
- ✅ Menyederhanakan ekspresi Boolean
- ✅ Menerapkan aljabar Boolean dalam rangkaian digital
- ✅ Menggunakan dual

itas dalam ekspresi Boolean

---

## 🎯 Apa itu Aljabar Boolean?

> **Aljabar Boolean** adalah sistem aljabar yang bekerja dengan nilai **biner** (0 dan 1) dan operasi logika (AND, OR, NOT).

### Sejarah Singkat

**George Boole (1815-1864)**
- Matematikawan Inggris
- Tahun 1854: Menerbitkan "An Investigation of the Laws of Thought"
- Menciptakan sistem aljabar untuk logika
- Dasar dari semua komputer digital modern!

**Claude Shannon (1916-2001)**
- Tahun 1937: Tesis master di MIT
- Menghubungkan aljabar Boolean dengan rangkaian listrik
- Memungkinkan desain komputer digital

---

## 🔢 Elemen Dasar Aljabar Boolean

### 1. **Nilai Boolean**

Hanya ada **DUA nilai**:
- **0** (False, Off, Low)
- **1** (True, On, High)

### 2. **Variabel Boolean**

Variabel yang hanya bisa bernilai 0 atau 1:
- A, B, C, X, Y, Z, ...
- Contoh: A = 1, B = 0

### 3. **Operasi Dasar**

| Operasi | Simbol | Aljabar | Logika | Contoh |
|---------|--------|---------|--------|--------|
| **AND** | · atau ∧ | A · B | A ∧ B | 1 · 1 = 1 |
| **OR** | + atau ∨ | A + B | A ∨ B | 1 + 0 = 1 |
| **NOT** | ' atau ¬ | A' | ¬A | 0' = 1 |

**Catatan Notasi:**
- Dalam aljabar Boolean: A · B sering ditulis **AB** (tanpa titik)
- A + B artinya **OR**, bukan penjumlahan aritmatika!
- A' artinya **NOT A** (komplemen/negasi)

---

## 📜 Hukum-Hukum Aljabar Boolean

### 1. **Hukum Identitas (Identity)**

| Hukum | Ekspresi |
|-------|----------|
| Identity AND | **A · 1 = A** |
| Identity OR | **A + 0 = A** |

**Penjelasan:**
- AND dengan 1 tidak mengubah nilai
- OR dengan 0 tidak mengubah nilai

**Contoh:**
```
A · 1 = A  →  "Saklar A DAN selalu ON" = "Saklar A"
A + 0 = A  →  "Saklar A ATAU selalu OFF" = "Saklar A"
```

---

### 2. **Hukum Null (Domination)**

| Hukum | Ekspresi |
|-------|----------|
| Null AND | **A · 0 = 0** |
| Null OR | **A + 1 = 1** |

**Penjelasan:**
- AND dengan 0 selalu menghasilkan 0
- OR dengan 1 selalu menghasilkan 1

**Contoh:**
```
A · 0 = 0  →  "Saklar A DAN selalu OFF" = "Selalu OFF"
A + 1 = 1  →  "Saklar A ATAU selalu ON" = "Selalu ON"
```

---

### 3. **Hukum Idempoten (Idempotent)**

| Hukum | Ekspresi |
|-------|----------|
| Idempotent AND | **A · A = A** |
| Idempotent OR | **A + A = A** |

**Penjelasan:**
- Menggabungkan variabel dengan dirinya sendiri tidak mengubah nilai

**Contoh:**
```
A · A = A  →  "A AND A" = "A"
A + A = A  →  "A OR A" = "A"
```

---

### 4. **Hukum Inverse (Complement)**

| Hukum | Ekspresi |
|-------|----------|
| Inverse AND | **A · A' = 0** |
| Inverse OR | **A + A' = 1** |

**Penjelasan:**
- Variabel AND dengan komplemennya selalu 0
- Variabel OR dengan komplemennya selalu 1

**Contoh:**
```
A · A' = 0  →  "A AND NOT A" = "Selalu FALSE" (kontradiksi)
A + A' = 1  →  "A OR NOT A" = "Selalu TRUE" (tautologi)
```

---

### 5. **Hukum Negasi Ganda (Double Negation)**

| Hukum | Ekspresi |
|-------|----------|
| Double Negation | **(A')' = A** |

**Penjelasan:**
- NOT NOT A = A

**Contoh:**
```
(A')' = A  →  "NOT (NOT A)" = "A"
```

---

### 6. **Hukum Komutatif (Commutative)**

| Hukum | Ekspresi |
|-------|----------|
| Commutative AND | **A · B = B · A** |
| Commutative OR | **A + B = B + A** |

**Penjelasan:**
- Urutan tidak mempengaruhi hasil

**Contoh:**
```
A · B = B · A  →  "A AND B" = "B AND A"
A + B = B + A  →  "A OR B" = "B OR A"
```

---

### 7. **Hukum Asosiatif (Associative)**

| Hukum | Ekspresi |
|-------|----------|
| Associative AND | **(A · B) · C = A · (B · C)** |
| Associative OR | **(A + B) + C = A + (B + C)** |

**Penjelasan:**
- Pengelompokan tidak mempengaruhi hasil

**Contoh:**
```
(A · B) · C = A · (B · C) = A · B · C
(A + B) + C = A + (B + C) = A + B + C
```

---

### 8. **Hukum Distributif (Distributive)**

| Hukum | Ekspresi |
|-------|----------|
| Distributive AND over OR | **A · (B + C) = (A · B) + (A · C)** |
| Distributive OR over AND | **A + (B · C) = (A + B) · (A + C)** |

**Penjelasan:**
- Distributif AND terhadap OR: seperti perkalian biasa
- Distributif OR terhadap AND: **berbeda** dengan aljabar biasa!

**Contoh:**
```
A · (B + C) = AB + AC  →  Seperti: a(b + c) = ab + ac

A + (B · C) = (A + B) · (A + C)  →  Unik untuk Boolean!
```

**Pembuktian dengan Tabel Kebenaran:**

| A | B | C | B·C | A+(B·C) | A+B | A+C | (A+B)·(A+C) | Sama? |
|---|---|---|-----|---------|-----|-----|-------------|-------|
| 0 | 0 | 0 | 0   | 0       | 0   | 0   | 0           | ✅ |
| 0 | 0 | 1 | 0   | 0       | 0   | 1   | 0           | ✅ |
| 0 | 1 | 0 | 0   | 0       | 1   | 0   | 0           | ✅ |
| 0 | 1 | 1 | 1   | 1       | 1   | 1   | 1           | ✅ |
| 1 | 0 | 0 | 0   | 1       | 1   | 1   | 1           | ✅ |
| 1 | 0 | 1 | 0   | 1       | 1   | 1   | 1           | ✅ |
| 1 | 1 | 0 | 0   | 1       | 1   | 1   | 1           | ✅ |
| 1 | 1 | 1 | 1   | 1       | 1   | 1   | 1           | ✅ |

---

### 9. **Hukum Absorpsi (Absorption)**

| Hukum | Ekspresi |
|-------|----------|
| Absorption 1 | **A + (A · B) = A** |
| Absorption 2 | **A · (A + B) = A** |

**Penjelasan:**
- Variabel "menyerap" term yang mengandungnya

**Contoh:**
```
A + (A · B) = A  →  "A OR (A AND B)" = "A"
Karena jika A=1, maka hasil=1 tanpa peduli B
```

**Pembuktian:**
```
A + (A · B)
= (A · 1) + (A · B)      [Identity: A = A · 1]
= A · (1 + B)            [Distributive]
= A · 1                  [Null: 1 + B = 1]
= A                      [Identity]
```

---

### 10. **Hukum De Morgan**

| Hukum | Ekspresi |
|-------|----------|
| De Morgan 1 | **(A · B)' = A' + B'** |
| De Morgan 2 | **(A + B)' = A' · B'** |

**Penjelasan:**
- Untuk mendapat komplemen ekspresi majemuk:
  1. Komplemenkan setiap variabel
  2. Tukar operator (AND ↔ OR)

**Contoh:**
```
(A · B)' = A' + B'  →  NOT (A AND B) = (NOT A) OR (NOT B)
(A + B)' = A' · B'  →  NOT (A OR B) = (NOT A) AND (NOT B)
```

**Aplikasi dalam Programming:**
```c
// Original
if (!(logged_in && has_permission)) {
    deny_access();
}

// Dengan De Morgan (lebih jelas)
if (!logged_in || !has_permission) {
    deny_access();
}
```

---

## 📊 Tabel Ringkasan Hukum Boolean

| No | Nama | AND | OR |
|----|------|-----|-----|
| 1 | **Identity** | A · 1 = A | A + 0 = A |
| 2 | **Null** | A · 0 = 0 | A + 1 = 1 |
| 3 | **Idempotent** | A · A = A | A + A = A |
| 4 | **Inverse** | A · A' = 0 | A + A' = 1 |
| 5 | **Double Negation** | (A')' = A | |
| 6 | **Commutative** | A · B = B · A | A + B = B + A |
| 7 | **Associative** | (AB)C = A(BC) | (A+B)+C = A+(B+C) |
| 8 | **Distributive** | A(B+C) = AB+AC | A+(BC) = (A+B)(A+C) |
| 9 | **Absorption** | A(A+B) = A | A+AB = A |
| 10 | **De Morgan** | (AB)' = A'+B' | (A+B)' = A'B' |

---

## 🎯 Penyederhanaan Ekspresi Boolean

### Mengapa Perlu Disederhanakan?

1. **Hemat Komponen**: Lebih sedikit gerbang logika
2. **Lebih Cepat**: Propagasi sinyal lebih cepat
3. **Lebih Murah**: Biaya produksi lebih rendah
4. **Lebih Efisien**: Konsumsi daya lebih kecil

### Contoh 1: Simplifikasi Dasar

**Soal:** Sederhanakan **AB + AB'**

**Solusi:**
```
AB + AB'
= A(B + B')      [Distributive]
= A · 1          [Inverse: B + B' = 1]
= A              [Identity: A · 1 = A]
```

**Hasil:** AB + AB' = A ✅

---

### Contoh 2: Simplifikasi dengan Absorption

**Soal:** Sederhanakan **A + A'B**

**Solusi:**
```
A + A'B
= (A + A')(A + B)    [Distributive OR over AND]
= 1 · (A + B)        [Inverse: A + A' = 1]
= A + B              [Identity: 1 · X = X]
```

**Hasil:** A + A'B = A + B ✅

---

### Contoh 3: Simplifikasi Kompleks

**Soal:** Sederhanakan **AB + A'C + BC**

**Solusi:**
```
AB + A'C + BC
= AB + A'C + BC(A + A')    [A + A' = 1, jadi BC = BC · 1]
= AB + A'C + ABC + A'BC
= AB(1 + C) + A'C(1 + B)   [Faktorisasi]
= AB · 1 + A'C · 1         [Null: 1 + X = 1]
= AB + A'C
```

**Hasil:** AB + A'C + BC = AB + A'C ✅

**Bonus:** Term **BC** dapat dieliminasi! (Consensus Theorem)

---

### Contoh 4: Aplikasi De Morgan

**Soal:** Sederhanakan **(A + B)(A + B')**

**Solusi:**
```
(A + B)(A + B')
= A + BB'            [Distributive]
= A + 0              [Inverse: BB' = 0]
= A                  [Identity: A + 0 = A]
```

**Hasil:** (A + B)(A + B') = A ✅

---

## 🔄 Dualitas (Duality)

### Prinsip Dualitas

> **Dual** dari suatu pernyataan Boolean diperoleh dengan:
> 1. Tukar **0 ↔ 1**
> 2. Tukar **AND (·) ↔ OR (+)**
> 3. **Jangan** tukar komplemen (')

**Teorema:** Jika suatu persamaan benar, maka **dualnya juga benar**.

### Contoh Dualitas

| Persamaan Asli | Dual |
|----------------|------|
| A + 0 = A | A · 1 = A |
| A + 1 = 1 | A · 0 = 0 |
| A + A = A | A · A = A |
| A(B + C) = AB + AC | A + BC = (A+B)(A+C) |
| (AB)' = A' + B' | (A+B)' = A'B' |

**Contoh Penggunaan:**

Jika kita tahu: **A + AB = A** benar

Maka dualnya juga benar: **A(A + B) = A** ✅

---

## 💻 Implementasi dalam Kode

### Contoh Program 1: Boolean Expression Evaluator

#### Python
```python
"""
Program: Evaluator Ekspresi Boolean
Deskripsi: Mengevaluasi ekspresi Boolean dan membuat tabel kebenaran
"""

from itertools import product

class BooleanExpression:
    """Class untuk evaluasi ekspresi Boolean"""
    
    def __init__(self):
        self.variables = set()
    
    def evaluate(self, expression, values):
        """
        Evaluasi ekspresi Boolean dengan nilai variabel tertentu
        
        Args:
            expression: String ekspresi (gunakan 'and', 'or', 'not')
            values: Dictionary {variabel: nilai}
        
        Returns:
            bool: Hasil evaluasi
        """
        # Replace variabel dengan nilainya
        expr = expression
        for var, val in values.items():
            expr = expr.replace(var, str(val))
        
        # Evaluasi
        try:
            result = eval(expr)
            return bool(result)
        except:
            raise ValueError(f"Invalid expression: {expression}")
    
    def extract_variables(self, expression):
        """Extract nama variabel dari ekspresi"""
        # Cari huruf kapital A-Z
        import re
        variables = re.findall(r'[A-Z]', expression)
        return sorted(set(variables))
    
    def truth_table(self, expression, expr_name=None):
        """
        Generate dan print tabel kebenaran
        
        Args:
            expression: String ekspresi Boolean
            expr_name: Nama ekspresi untuk display (opsional)
        """
        if expr_name is None:
            expr_name = expression
        
        # Extract variabel
        variables = self.extract_variables(expression)
        n_vars = len(variables)
        
        if n_vars == 0:
            print("Tidak ada variabel dalam ekspresi")
            return
        
        print("\n" + "=" * 70)
        print(f"TABEL KEBENARAN: {expr_name}")
        print("=" * 70)
        
        # Header
        header = " | ".join([v.ljust(5) for v in variables])
        result_header = expr_name[:20].ljust(20)
        print(f"| {header} | {result_header} |")
        print("-" * 70)
        
        # Generate semua kombinasi
        results = []
        for combo in product([True, False], repeat=n_vars):
            # Buat dictionary nilai
            values = dict(zip(variables, combo))
            
            # Evaluasi
            result = self.evaluate(expression, values)
            results.append(result)
            
            # Print row
            row = " | ".join([str(v)[0].ljust(5) for v in combo])
            print(f"| {row} | {str(result)[0].ljust(20)} |")
        
        print("-" * 70)
        
        # Analisis
        true_count = sum(results)
        total = len(results)
        
        print(f"\n📊 ANALISIS:")
        print(f"  - TRUE: {true_count}/{total}")
        print(f"  - FALSE: {total - true_count}/{total}")
        
        if true_count == total:
            print(f"  ✅ TAUTOLOGI - Selalu TRUE")
        elif true_count == 0:
            print(f"  ❌ KONTRADIKSI - Selalu FALSE")
        else:
            print(f"  ⚖️  KONTINGENSI - Tergantung nilai variabel")
        
        print("=" * 70)
        
        return results


def demo_boolean_laws():
    """Demo hukum-hukum Boolean"""
    print("\n" + "🔷" * 35)
    print("  DEMO: HUKUM-HUKUM BOOLEAN")
    print("🔷" * 35)
    
    evaluator = BooleanExpression()
    
    # Hukum Identity
    print("\n📌 Hukum Identity: A OR False = A")
    evaluator.truth_table("A or False", "A + 0")
    
    # Hukum Null
    print("\n📌 Hukum Null: A AND False = False")
    evaluator.truth_table("A and False", "A · 0")
    
    # Hukum Inverse
    print("\n📌 Hukum Inverse: A OR (NOT A) = True")
    evaluator.truth_table("A or (not A)", "A + A'")


def demo_simplification():
    """Demo penyederhanaan ekspresi"""
    print("\n" + "🔷" * 35)
    print("  DEMO: PENYEDERHANAAN EKSPRESI")
    print("🔷" * 35)
    
    evaluator = BooleanExpression()
    
    # Contoh: AB + AB' = A
    print("\n📌 Pembuktian: AB + AB' = A")
    print("\nEkspresi Original: (A and B) or (A and (not B))")
    evaluator.truth_table("(A and B) or (A and (not B))", "AB + AB'")
    
    print("\nEkspresi Simplified: A")
    evaluator.truth_table("A", "A")
    
    print("\n✅ Terbukti ekuivalen!")


def demo_de_morgan():
    """Demo hukum De Morgan"""
    print("\n" + "🔷" * 35)
    print("  DEMO: HUKUM DE MORGAN")
    print("🔷" * 35)
    
    evaluator = BooleanExpression()
    
    # De Morgan 1
    print("\n📌 De Morgan 1: NOT (A AND B) = (NOT A) OR (NOT B)")
    print("\nEkspresi 1: NOT (A AND B)")
    evaluator.truth_table("not (A and B)", "(AB)'")
    
    print("\nEkspresi 2: (NOT A) OR (NOT B)")
    evaluator.truth_table("(not A) or (not B)", "A' + B'")
    
    print("\n✅ Terbukti ekuivalen!")


def main():
    """Fungsi utama"""
    print("\n" + "=" * 70)
    print("  EVALUATOR EKSPRESI BOOLEAN")
    print("=" * 70)
    
    demo_boolean_laws()
    demo_simplification()
    demo_de_morgan()
    
    print("\n" + "=" * 70)
    print("✓ Semua demo selesai!")
    print("=" * 70 + "\n")


if __name__ == "__main__":
    main()
```

---

### Contoh Program 2: Boolean Simplifier

#### Bahasa C
```c
/*
 * Program: Boolean Expression Evaluator
 * Deskripsi: Evaluasi ekspresi Boolean sederhana
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>
#include <string.h>

// Fungsi untuk demonstrasi hukum-hukum Boolean

// Hukum Identity
void demo_identity() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  HUKUM IDENTITY\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n📌 A · 1 = A\n");
    printf("----------------------------------------------------------------------\n");
    printf("| A | 1 | A · 1 | Sama dengan A? |\n");
    printf("----------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        int result = a & 1;  // A AND 1
        printf("| %d | %d |   %d   | %s |\n", 
               a, 1, result, (result == a) ? "✅" : "❌");
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("✅ Terbukti: A · 1 = A\n");
    
    printf("\n📌 A + 0 = A\n");
    printf("----------------------------------------------------------------------\n");
    printf("| A | 0 | A + 0 | Sama dengan A? |\n");
    printf("----------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        int result = a | 0;  // A OR 0
        printf("| %d | %d |   %d   | %s |\n", 
               a, 0, result, (result == a) ? "✅" : "❌");
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("✅ Terbukti: A + 0 = A\n");
}

// Hukum Null
void demo_null() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  HUKUM NULL\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n📌 A · 0 = 0\n");
    printf("----------------------------------------------------------------------\n");
    printf("| A | 0 | A · 0 | Selalu 0? |\n");
    printf("----------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        int result = a & 0;  // A AND 0
        printf("| %d | %d |   %d   | %s |\n", 
               a, 0, result, (result == 0) ? "✅" : "❌");
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("✅ Terbukti: A · 0 = 0\n");
    
    printf("\n📌 A + 1 = 1\n");
    printf("----------------------------------------------------------------------\n");
    printf("| A | 1 | A + 1 | Selalu 1? |\n");
    printf("----------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        int result = a | 1;  // A OR 1
        printf("| %d | %d |   %d   | %s |\n", 
               a, 1, result, (result == 1) ? "✅" : "❌");
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("✅ Terbukti: A + 1 = 1\n");
}

// Hukum Inverse
void demo_inverse() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  HUKUM INVERSE\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n📌 A · A' = 0 (Kontradiksi)\n");
    printf("----------------------------------------------------------------------\n");
    printf("| A | A' | A · A' | Selalu 0? |\n");
    printf("----------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        int a_not = !a;
        int result = a & a_not;
        printf("| %d | %d  |   %d    | %s |\n", 
               a, a_not, result, (result == 0) ? "✅" : "❌");
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("✅ Terbukti: A · A' = 0 (Kontradiksi)\n");
    
    printf("\n📌 A + A' = 1 (Tautologi)\n");
    printf("----------------------------------------------------------------------\n");
    printf("| A | A' | A + A' | Selalu 1? |\n");
    printf("----------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        int a_not = !a;
        int result = a | a_not;
        printf("| %d | %d  |   %d    | %s |\n", 
               a, a_not, result, (result == 1) ? "✅" : "❌");
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("✅ Terbukti: A + A' = 1 (Tautologi)\n");
}

// Hukum De Morgan
void demo_demorgan() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  HUKUM DE MORGAN\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n📌 De Morgan 1: (A · B)' = A' + B'\n");
    printf("----------------------------------------------------------------------\n");
    printf("| A | B | (A·B)' | A'+B' | Sama? |\n");
    printf("----------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        for (int b = 0; b <= 1; b++) {
            int left = !(a & b);         // (A AND B)'
            int right = (!a) | (!b);     // A' OR B'
            printf("| %d | %d |   %d    |   %d   | %s |\n", 
                   a, b, left, right, (left == right) ? "✅" : "❌");
        }
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("✅ Terbukti: (A · B)' = A' + B'\n");
    
    printf("\n📌 De Morgan 2: (A + B)' = A' · B'\n");
    printf("----------------------------------------------------------------------\n");
    printf("| A | B | (A+B)' | A'·B' | Sama? |\n");
    printf("----------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        for (int b = 0; b <= 1; b++) {
            int left = !(a | b);         // (A OR B)'
            int right = (!a) & (!b);     // A' AND B'
            printf("| %d | %d |   %d    |   %d   | %s |\n", 
                   a, b, left, right, (left == right) ? "✅" : "❌");
        }
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("✅ Terbukti: (A + B)' = A' · B'\n");
}

// Demonstrasi penyederhanaan: AB + AB' = A
void demo_simplification() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: PENYEDERHANAAN AB + AB' = A\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n----------------------------------------------------------------------\n");
    printf("| A | B | AB | AB' | AB+AB' | A | Sama? |\n");
    printf("----------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        for (int b = 0; b <= 1; b++) {
            int ab = a & b;
            int ab_not = a & (!b);
            int combined = ab | ab_not;
            printf("| %d | %d | %d  |  %d  |   %d    | %d | %s |\n", 
                   a, b, ab, ab_not, combined, a, (combined == a) ? "✅" : "❌");
        }
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("✅ Terbukti: AB + AB' = A\n");
    
    printf("\n💡 Langkah Penyederhanaan:\n");
    printf("   AB + AB'\n");
    printf("   = A(B + B')    [Distributive]\n");
    printf("   = A · 1        [Inverse: B + B' = 1]\n");
    printf("   = A            [Identity: A · 1 = A]\n");
}

int main() {
    printf("\n");
    printf("======================================================================\n");
    printf("  DEMONSTRATOR ALJABAR BOOLEAN (C)\n");
    printf("======================================================================\n");
    
    demo_identity();
    demo_null();
    demo_inverse();
    demo_demorgan();
    demo_simplification();
    
    printf("\n");
    printf("======================================================================\n");
    printf("✓ Semua demo selesai!\n");
    printf("======================================================================\n\n");
    
    return 0;
}
```

**Compile dan Run:**
```bash
# Linux/Mac
gcc -o boolean_algebra boolean_algebra.c
./boolean_algebra

# Windows
gcc -o boolean_algebra.exe boolean_algebra.c
boolean_algebra.exe
```

---

## 🎯 Latihan Soal

### Soal 1: Hukum Boolean

Identifikasi hukum Boolean yang digunakan:

1. A + AB = A
2. A(A + B) = A
3. A + A'B = A + B
4. (A + B)(A + C) = A + BC

<details>
<summary>Lihat Jawaban</summary>

1. **Absorption** (A + AB = A)
2. **Absorption** (A(A + B) = A)
3. **Simplification dengan Distributif**
4. **Distributive OR over AND**

</details>

---

### Soal 2: Sederhanakan

Sederhanakan ekspresi berikut:

1. ABC + ABC'
2. (A + B)(A + B')
3. AB + A'C + BC
4. A'B'C + A'BC + AB'C + ABC

<details>
<summary>Lihat Jawaban</summary>

1. **ABC + ABC' = AB**
   ```
   = AB(C + C')  [Distributive]
   = AB · 1      [Inverse]
   = AB          [Identity]
   ```

2. **(A + B)(A + B') = A**
   ```
   = A + BB'     [Distributive]
   = A + 0       [Inverse]
   = A           [Identity]
   ```

3. **AB + A'C + BC = AB + A'C**
   ```
   Gunakan Consensus Theorem
   BC dapat dieliminasi
   ```

4. **A'B'C + A'BC + AB'C + ABC = C**
   ```
   = A'C(B' + B) + AC(B' + B)  [Faktorisasi]
   = A'C · 1 + AC · 1          [Inverse]
   = A'C + AC                  [Identity]
   = C(A' + A)                 [Distributive]
   = C · 1                     [Inverse]
   = C                         [Identity]
   ```

</details>

---

### Soal 3: Dualitas

Tuliskan dual dari persamaan berikut:

1. A + AB = A
2. (A + B)(A + C) = A + BC
3. A · 0 = 0

<details>
<summary>Lihat Jawaban</summary>

1. Dual: **A(A + B) = A**
2. Dual: **(AB) + (AC) = A(B + C)**
3. Dual: **A + 1 = 1**

</details>

---

## 🚀 Aplikasi Nyata

### 1. **Desain Rangkaian Digital**

Aljabar Boolean digunakan untuk:
- Menyederhanakan rangkaian logika
- Mengurangi jumlah gerbang
- Optimasi FPGA/ASIC

### 2. **Compiler Optimization**

Compiler menggunakan aljabar Boolean untuk:
- Optimasi kondisi IF
- Simplifikasi ekspresi boolean
- Dead code elimination

### 3. **Database Query Optimization**

SQL query optimizer menggunakan Boolean algebra untuk:
- Menyederhanakan WHERE clause
- Optimasi JOIN conditions

---

## 🎓 Kesimpulan

Aljabar Boolean adalah fondasi dari:
- ✅ Komputer digital
- ✅ Rangkaian elektronik
- ✅ Programming logic
- ✅ Database systems
- ✅ AI dan machine learning

**Next:** [Bab 11: Gerbang Logika (Bagian 1)](./11-gerbang-logika-1.md) →

Kita akan belajar bagaimana aljabar Boolean diimplementasikan dalam bentuk gerbang logika fisik!

---

← [Bab 9: Kuantor (Bagian 2)](./09-kuantor-2.md) | [Bab 11: Gerbang Logika (Bagian 1)](./11-gerbang-logika-1.md) →
