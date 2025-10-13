# 🧮 Bab 9: Kuantor (Bagian 2)

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Memahami nested quantifiers (kuantor bersarang)
- ✅ Mengimplementasikan evaluator kuantor
- ✅ Menerapkan kuantor dalam SQL dan database
- ✅ Menyelesaikan masalah kompleks dengan kuantor

---

## 🔄 Nested Quantifiers (Kuantor Bersarang)

### Definisi

> **Nested Quantifiers** adalah penggunaan dua atau lebih kuantor dalam satu pernyataan.

**Contoh:**
```
∀x ∃y P(x, y)
"Untuk setiap x, ada y sedemikian sehingga P(x,y)"
```

### Urutan Penting!

**Urutan kuantor SANGAT PENTING!**

| Formula | Arti | Contoh |
|---------|------|--------|
| **∀x ∃y P(x,y)** | Untuk setiap x, ada y | Setiap orang punya ibu |
| **∃y ∀x P(x,y)** | Ada y untuk semua x | Ada satu ibu untuk semua orang |

---

### Contoh 1: Matematika - Hubungan

**Domain:** Bilangan real

**P(x, y):** "x < y"

#### Kasus A: ∀x ∃y (x < y)

**Interpretasi:**
"Untuk setiap bilangan x, ada bilangan y yang lebih besar dari x"

**Evaluasi:**
- x = 0 → Ambil y = 1 → 0 < 1 ✅
- x = 5 → Ambil y = 6 → 5 < 6 ✅
- x = 100 → Ambil y = 101 → 100 < 101 ✅
- Untuk setiap x, selalu bisa temukan y = x + 1

**Hasil: TRUE** ✅ (Selalu ada bilangan yang lebih besar)

#### Kasus B: ∃y ∀x (x < y)

**Interpretasi:**
"Ada bilangan y yang lebih besar dari semua bilangan x"

**Evaluasi:**
- Cari y sedemikian sehingga untuk SEMUA x, x < y
- Tidak ada bilangan terbesar! (selalu ada yang lebih besar)
- Untuk y apapun, selalu ada x > y

**Hasil: FALSE** ❌

---

### Contoh 2: Kehidupan Nyata - Hubungan Sosial

**Domain:** Orang
**P(x, y):** "x kenal y"

#### Kasus A: ∀x ∃y P(x,y)

**Interpretasi:**
"Setiap orang kenal minimal satu orang"

**Contoh:**
- Anton kenal Budi ✅
- Budi kenal Citra ✅
- Citra kenal Anton ✅
- Setiap orang punya minimal 1 kenalan

**Mungkin TRUE** ✅

#### Kasus B: ∃y ∀x P(x,y)

**Interpretasi:**
"Ada satu orang yang dikenal semua orang"

**Contoh:**
- Presiden? Artis terkenal?
- Orang tersebut dikenal oleh SEMUA orang di dunia

**Mungkin FALSE** ❌ (tidak realistis)

---

### Contoh 3: Programming - Array

**Domain:** Index array, Nilai
**P(i, v):** "array[i] == v"

#### Kasus A: ∀i ∃v P(i,v)

**Interpretasi:**
"Untuk setiap index, ada nilai di index tersebut"

**Dalam kode:**
```python
# ∀i ∃v (array[i] == v)
# TRUE untuk array valid (setiap index punya nilai)
arr = [10, 20, 30, 40]
# arr[0]=10, arr[1]=20, arr[2]=30, arr[3]=40
# Setiap index punya nilai ✅
```

**Hasil: TRUE** ✅

#### Kasus B: ∃v ∀i P(i,v)

**Interpretasi:**
"Ada satu nilai yang muncul di semua index"

**Dalam kode:**
```python
# ∃v ∀i (array[i] == v)
# TRUE jika semua elemen sama

arr1 = [5, 5, 5, 5]  # TRUE (semua 5) ✅
arr2 = [1, 2, 3, 4]  # FALSE (berbeda) ❌
```

---

## 📊 Tabel Kombinasi Nested Quantifiers

Untuk P(x, y):

| Formula | Arti | Kapan TRUE? |
|---------|------|-------------|
| **∀x ∀y P(x,y)** | Untuk semua x dan y | P benar untuk SEMUA pasangan (x,y) |
| **∀x ∃y P(x,y)** | Untuk setiap x ada y | Setiap x punya minimal satu y |
| **∃x ∀y P(x,y)** | Ada x untuk semua y | Ada satu x untuk semua y |
| **∃x ∃y P(x,y)** | Ada x dan ada y | Minimal ada satu pasangan (x,y) |

### Negasi Nested Quantifiers

| Formula | Negasi |
|---------|--------|
| ∀x ∀y P(x,y) | ∃x ∃y ¬P(x,y) |
| ∀x ∃y P(x,y) | ∃x ∀y ¬P(x,y) |
| ∃x ∀y P(x,y) | ∀x ∃y ¬P(x,y) |
| ∃x ∃y P(x,y) | ∀x ∀y ¬P(x,y) |

**Cara Mudah:**
1. Ganti ∀ ↔ ∃
2. Negasikan predikat P → ¬P

---

## 💻 Implementasi dalam Kode

### Contoh Program 1: Evaluator Kuantor

#### Python
```python
"""
Program: Evaluator Kuantor
Deskripsi: Mengevaluasi pernyataan dengan kuantor
"""

class QuantifierEvaluator:
    """Class untuk evaluasi kuantor"""
    
    def __init__(self, domain):
        self.domain = domain
    
    def forall(self, predicate):
        """
        Evaluasi ∀x P(x)
        TRUE jika P(x) benar untuk SEMUA x
        """
        for x in self.domain:
            if not predicate(x):
                return False  # Ada yang tidak memenuhi
        return True  # Semua memenuhi
    
    def exists(self, predicate):
        """
        Evaluasi ∃x P(x)
        TRUE jika P(x) benar untuk MINIMAL SATU x
        """
        for x in self.domain:
            if predicate(x):
                return True  # Ketemu satu yang memenuhi
        return False  # Tidak ada yang memenuhi
    
    def forall_exists(self, predicate_2var):
        """
        Evaluasi ∀x ∃y P(x,y)
        Untuk setiap x, harus ada y yang memenuhi P(x,y)
        """
        for x in self.domain:
            # Cari apakah ada y untuk x ini
            exists_y = False
            for y in self.domain:
                if predicate_2var(x, y):
                    exists_y = True
                    break
            
            if not exists_y:
                return False  # Tidak ada y untuk x ini
        
        return True  # Setiap x punya y
    
    def exists_forall(self, predicate_2var):
        """
        Evaluasi ∃y ∀x P(x,y)
        Harus ada y yang memenuhi P(x,y) untuk SEMUA x
        """
        for y in self.domain:
            # Cek apakah y ini memenuhi untuk semua x
            forall_x = True
            for x in self.domain:
                if not predicate_2var(x, y):
                    forall_x = False
                    break
            
            if forall_x:
                return True  # Ketemu y yang cocok untuk semua x
        
        return False  # Tidak ada y yang cocok untuk semua x

def demo_kuantor_sederhana():
    """Demo evaluasi kuantor sederhana"""
    print("\\n" + "=" * 70)
    print("DEMO 1: KUANTOR SEDERHANA")
    print("=" * 70)
    
    # Domain: Bilangan 1-10
    domain = list(range(1, 11))
    evaluator = QuantifierEvaluator(domain)
    
    print(f"\\nDomain: {domain}")
    
    # Test 1: ∀x (x > 0)
    print("\\n📌 Test 1: ∀x (x > 0)")
    print("   'Semua x positif'")
    hasil = evaluator.forall(lambda x: x > 0)
    print(f"   Hasil: {hasil} ✅" if hasil else f"   Hasil: {hasil} ❌")
    
    # Test 2: ∀x (x > 5)
    print("\\n📌 Test 2: ∀x (x > 5)")
    print("   'Semua x lebih dari 5'")
    hasil = evaluator.forall(lambda x: x > 5)
    print(f"   Hasil: {hasil} {'✅' if hasil else '❌'}")
    print(f"   (FALSE karena 1,2,3,4,5 ≤ 5)")
    
    # Test 3: ∃x (x adalah prima)
    def is_prima(n):
        if n < 2:
            return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                return False
        return True
    
    print("\\n📌 Test 3: ∃x (x adalah prima)")
    print("   'Ada x yang prima'")
    hasil = evaluator.exists(is_prima)
    print(f"   Hasil: {hasil} ✅" if hasil else f"   Hasil: {hasil} ❌")
    print(f"   (TRUE karena 2,3,5,7 adalah prima)")
    
    # Test 4: ∃x (x > 100)
    print("\\n📌 Test 4: ∃x (x > 100)")
    print("   'Ada x lebih dari 100'")
    hasil = evaluator.exists(lambda x: x > 100)
    print(f"   Hasil: {hasil} {'✅' if hasil else '❌'}")
    print(f"   (FALSE karena domain hanya 1-10)")

def demo_nested_quantifiers():
    """Demo nested quantifiers"""
    print("\\n" + "=" * 70)
    print("DEMO 2: NESTED QUANTIFIERS")
    print("=" * 70)
    
    # Domain kecil untuk demo
    domain = [1, 2, 3, 4, 5]
    evaluator = QuantifierEvaluator(domain)
    
    print(f"\\nDomain: {domain}")
    
    # Test 1: ∀x ∃y (x < y)
    print("\\n📌 Test 1: ∀x ∃y (x < y)")
    print("   'Untuk setiap x, ada y yang lebih besar'")
    hasil = evaluator.forall_exists(lambda x, y: x < y)
    print(f"   Hasil: {hasil} {'✅' if hasil else '❌'}")
    if tidak hasil:
        print("   (FALSE karena 5 tidak punya y > 5 di domain)")
    
    # Test 2: ∃y ∀x (x < y)
    print("\\n📌 Test 2: ∃y ∀x (x < y)")
    print("   'Ada y yang lebih besar dari semua x'")
    hasil = evaluator.exists_forall(lambda x, y: x < y)
    print(f"   Hasil: {hasil} {'✅' if hasil else '❌'}")
    print("   (FALSE karena tidak ada y > 5)")
    
    # Test 3: ∀x ∃y (x + y == 5)
    print("\\n📌 Test 3: ∀x ∃y (x + y == 5)")
    print("   'Untuk setiap x, ada y sehingga x+y=5'")
    hasil = evaluator.forall_exists(lambda x, y: x + y == 5)
    print(f"   Hasil: {hasil} {'✅' if hasil else '❌'}")
    if hasil:
        print("   Contoh: 1+4=5, 2+3=5, 3+2=5, 4+1=5, 5+0... (tapi 0 tidak di domain)")

def demo_array_quantifiers():
    """Demo kuantor untuk operasi array"""
    print("\\n" + "=" * 70)
    print("DEMO 3: QUANTIFIERS UNTUK ARRAY")
    print("=" * 70)
    
    # Test berbagai array
    arrays = [
        [1, 2, 3, 4, 5],
        [5, 5, 5, 5, 5],
        [1, -2, 3, -4, 5],
        [2, 4, 6, 8, 10]
    ]
    
    for i, arr in enumerate(arrays, 1):
        print(f"\\n{'='*70}")
        print(f"Array {i}: {arr}")
        print(f"{'='*70}")
        
        evaluator = QuantifierEvaluator(arr)
        
        # Test 1: Semua positif
        semua_positif = evaluator.forall(lambda x: x > 0)
        print(f"∀x (x > 0):  {semua_positif} {'✅' if semua_positif else '❌'} - Semua positif")
        
        # Test 2: Ada negatif
        ada_negatif = evaluator.exists(lambda x: x < 0)
        print(f"∃x (x < 0):  {ada_negatif} {'✅' if ada_negatif else '❌'} - Ada negatif")
        
        # Test 3: Semua genap
        semua_genap = evaluator.forall(lambda x: x % 2 == 0)
        print(f"∀x (x%2==0): {semua_genap} {'✅' if semua_genap else '❌'} - Semua genap")
        
        # Test 4: Ada prima
        def is_prima(n):
            if n < 2:
                return False
            for i in range(2, int(n**0.5) + 1):
                if n % i == 0:
                    return False
            return True
        
        ada_prima = evaluator.exists(is_prima)
        print(f"∃x (prima):  {ada_prima} {'✅' if ada_prima else '❌'} - Ada prima")

def main():
    """Fungsi utama"""
    print("\\n" + "🔢" * 35)
    print("  EVALUATOR KUANTOR")
    print("🔢" * 35)
    
    demo_kuantor_sederhana()
    demo_nested_quantifiers()
    demo_array_quantifiers()
    
    print("\\n" + "=" * 70)
    print("✓ Semua demo selesai!")
    print("=" * 70 + "\\n")

if __name__ == "__main__":
    main()
```

---

#### Bahasa C
```c
/*
 * Program: Quantifier Evaluator (C)
 * Deskripsi: Evaluasi kuantor universal dan eksistensial
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>
#include <math.h>

#define MAX_SIZE 100

// Tipe fungsi untuk predicate
typedef bool (*Predicate)(int);
typedef bool (*Predicate2)(int, int);

// Fungsi helper: cek prima
bool is_prima(int n) {
    if (n < 2) return false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// ∀x P(x): Untuk semua x, P(x) benar
bool forall(int domain[], int size, Predicate p) {
    for (int i = 0; i < size; i++) {
        if (!p(domain[i])) {
            return false;  // Ada yang tidak memenuhi
        }
    }
    return true;  // Semua memenuhi
}

// ∃x P(x): Ada x dimana P(x) benar
bool exists(int domain[], int size, Predicate p) {
    for (int i = 0; i < size; i++) {
        if (p(domain[i])) {
            return true;  // Ketemu satu yang memenuhi
        }
    }
    return false;  // Tidak ada yang memenuhi
}

// ∀x ∃y P(x,y)
bool forall_exists(int domain[], int size, Predicate2 p) {
    for (int i = 0; i < size; i++) {
        bool exists_y = false;
        for (int j = 0; j < size; j++) {
            if (p(domain[i], domain[j])) {
                exists_y = true;
                break;
            }
        }
        if (!exists_y) {
            return false;
        }
    }
    return true;
}

// Predicates untuk demo
bool is_positive(int x) {
    return x > 0;
}

bool greater_than_5(int x) {
    return x > 5;
}

bool is_even(int x) {
    return x % 2 == 0;
}

bool less_than(int x, int y) {
    return x < y;
}

void demo_simple_quantifiers() {
    printf("\\n");
    printf("======================================================================\\n");
    printf("DEMO: KUANTOR SEDERHANA\\n");
    printf("======================================================================\\n");
    
    int domain[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = 10;
    
    printf("\\nDomain: {");
    for (int i = 0; i < size; i++) {
        printf("%d%s", domain[i], i < size-1 ? ", " : "");
    }
    printf("}\\n");
    
    // Test 1: ∀x (x > 0)
    printf("\\n📌 Test: ∀x (x > 0)\\n");
    printf("   'Semua x positif'\\n");
    bool hasil = forall(domain, size, is_positive);
    printf("   Hasil: %s %s\\n", hasil ? "TRUE" : "FALSE", hasil ? "✅" : "❌");
    
    // Test 2: ∀x (x > 5)
    printf("\\n📌 Test: ∀x (x > 5)\\n");
    printf("   'Semua x > 5'\\n");
    hasil = forall(domain, size, greater_than_5);
    printf("   Hasil: %s %s\\n", hasil ? "TRUE" : "FALSE", hasil ? "✅" : "❌");
    
    // Test 3: ∃x (x adalah prima)
    printf("\\n📌 Test: ∃x (x adalah prima)\\n");
    printf("   'Ada x yang prima'\\n");
    hasil = exists(domain, size, is_prima);
    printf("   Hasil: %s %s\\n", hasil ? "TRUE" : "FALSE", hasil ? "✅" : "❌");
    
    // Test 4: ∀x (x genap)
    printf("\\n📌 Test: ∀x (x genap)\\n");
    printf("   'Semua x genap'\\n");
    hasil = forall(domain, size, is_even);
    printf("   Hasil: %s %s\\n", hasil ? "TRUE" : "FALSE", hasil ? "✅" : "❌");
}

void demo_nested_quantifiers() {
    printf("\\n");
    printf("======================================================================\\n");
    printf("DEMO: NESTED QUANTIFIERS\\n");
    printf("======================================================================\\n");
    
    int domain[] = {1, 2, 3, 4, 5};
    int size = 5;
    
    printf("\\nDomain: {");
    for (int i = 0; i < size; i++) {
        printf("%d%s", domain[i], i < size-1 ? ", " : "");
    }
    printf("}\\n");
    
    // Test: ∀x ∃y (x < y)
    printf("\\n📌 Test: ∀x ∃y (x < y)\\n");
    printf("   'Untuk setiap x, ada y yang lebih besar'\\n");
    bool hasil = forall_exists(domain, size, less_than);
    printf("   Hasil: %s %s\\n", hasil ? "TRUE" : "FALSE", hasil ? "✅" : "❌");
}

int main() {
    printf("\\n");
    printf("======================================================================\\n");
    printf("  EVALUATOR KUANTOR (C)\\n");
    printf("======================================================================\\n");
    
    demo_simple_quantifiers();
    demo_nested_quantifiers();
    
    printf("\\n");
    printf("======================================================================\\n");
    printf("✓ Demo selesai!\\n");
    printf("======================================================================\\n\\n");
    
    return 0;
}
```

**Compile:**
```bash
gcc -o quantifier quantifier_evaluator.c -lm
./quantifier
```

---

## 🗄️ Kuantor dalam SQL (Database)

### Kuantor Universal dalam SQL

**Logika:** ∀x P(x)

**SQL:** Gunakan **NOT EXISTS** dengan negasi

```sql
-- Cek: "Semua mahasiswa sudah bayar SPP"
-- ∀x (Mahasiswa(x) → Bayar(x))
-- ≡ ¬∃x (Mahasiswa(x) ∧ ¬Bayar(x))

SELECT 'Semua sudah bayar' AS hasil
WHERE NOT EXISTS (
    SELECT * FROM Mahasiswa
    WHERE status_bayar = 'belum'
);
```

### Kuantor Eksistensial dalam SQL

**Logika:** ∃x P(x)

**SQL:** Gunakan **EXISTS**

```sql
-- Cek: "Ada mahasiswa yang IPK > 3.5"
-- ∃x (Mahasiswa(x) ∧ IPK(x) > 3.5)

SELECT 'Ada mahasiswa IPK tinggi' AS hasil
WHERE EXISTS (
    SELECT * FROM Mahasiswa
    WHERE ipk > 3.5
);
```

### Nested Quantifiers dalam SQL

**∀x ∃y P(x,y):** "Untuk setiap x, ada y"

```sql
-- "Setiap dosen mengajar minimal satu mata kuliah"
-- ∀d ∃m Mengajar(d, m)

SELECT d.nama, COUNT(m.id) as jumlah_mk
FROM Dosen d
LEFT JOIN Mengajar m ON d.id = m.dosen_id
GROUP BY d.id, d.nama
HAVING COUNT(m.id) > 0;

-- atau menggunakan NOT EXISTS:
SELECT * FROM Dosen d
WHERE NOT EXISTS (
    -- Tidak ada dosen yang tidak mengajar
    SELECT * FROM Dosen d2
    WHERE d2.id = d.id
    AND NOT EXISTS (
        SELECT * FROM Mengajar m
        WHERE m.dosen_id = d2.id
    )
);
```

---

## 🎓 Rangkuman

### Poin Penting Bab Ini:

1. ✅ **Nested Quantifiers**
   - Urutan SANGAT penting: ∀x ∃y ≠ ∃y ∀x
   - Negasi: Balik kuantor + negasi predikat

2. ✅ **Implementasi**
   - Universal: Loop + return FALSE jika ada yang tidak memenuhi
   - Eksistensial: Loop + return TRUE jika ketemu yang memenuhi
   - Nested: Loop bersarang

3. ✅ **Aplikasi Database**
   - EXISTS untuk kuantor eksistensial
   - NOT EXISTS dengan negasi untuk kuantor universal

---

## 🚀 Selanjutnya

Di [Bab 10](./10-aljabar-boolean.md), kita akan mempelajari:
- 🔢 **Aljabar Boolean**
- 📜 **Postulat dan Teorema Boolean**
- 🎯 **Fungsi Boolean**
- 💾 **Aplikasi dalam Rangkaian Digital**

---

## 📚 Referensi

- Rosen, K. H. (2019). *Discrete Mathematics* (Ch. 1.5)
- [SQL Quantifiers](https://www.postgresql.org/docs/current/functions-subquery.html)
- [Nested Quantifiers Explained](https://courses.cs.washington.edu/courses/cse311/)

---

**Selamat! Anda sudah menguasai kuantor dan nested quantifiers!** 🎉

← [Bab 8: Kuantor (Bagian 1)](./08-kuantor-1.md) | [Bab 10: Aljabar Boolean](./10-aljabar-boolean.md) →
