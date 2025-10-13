# 🔢 Bab 8: Kuantor (Bagian 1)

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Memahami perbedaan logika proposisional dan predikat
- ✅ Menggunakan kuantor universal (∀)
- ✅ Menggunakan kuantor eksistensial (∃)
- ✅ Menerjemahkan kalimat ke bentuk logika predikat
- ✅ Memahami domain of discourse

---

## 🎯 Dari Proposisi ke Predikat

### Keterbatasan Logika Proposisional

Perhatikan pernyataan berikut:
```
"Semua mahasiswa suka matematika"
```

**Dalam logika proposisional:**
- Kita hanya bisa tulis: p = "Semua mahasiswa suka matematika"
- Tidak bisa menganalisis struktur internalnya
- Tidak bisa berbicara tentang "semua" atau "ada"

**Dalam logika predikat:**
- ∀x (Mahasiswa(x) → SukaMatematika(x))
- Bisa menganalisis untuk setiap individu
- Bisa berbicara tentang kuantitas

---

## 📐 Logika Predikat (Predicate Logic)

### Komponen Logika Predikat

**1. Predikat (Predicate):**
- Fungsi yang menghasilkan nilai TRUE/FALSE
- Contoh: P(x) = "x adalah bilangan prima"

**2. Variabel:**
- x, y, z, ... (objek yang dibicarakan)

**3. Domain (Universe of Discourse):**
- Himpunan semua objek yang mungkin
- Contoh: Bilangan bulat, Mahasiswa, Hewan

**4. Kuantor:**
- ∀ (untuk semua)
- ∃ (ada/exists)

### Contoh Predikat

```python
# Predikat sebagai fungsi
def Genap(x):
    return x % 2 == 0

def Prima(x):
    if x < 2:
        return False
    for i in range(2, int(x**0.5) + 1):
        if x % i == 0:
            return False
    return True

# Evaluasi
print(Genap(4))   # True
print(Prima(7))   # True
```

---

## ∀ Kuantor Universal (For All)

### Definisi

> **∀x P(x)** dibaca: "Untuk semua x, P(x) benar"

**Notasi:**
- ∀x P(x)
- ∀x ∈ D, P(x) (dengan domain eksplisit)

### Kapan TRUE?

**∀x P(x)** adalah TRUE jika dan hanya jika:
- P(x) benar untuk **SETIAP** x di domain

Jika **ADA SATU** x dimana P(x) salah, maka **∀x P(x) SALAH**.

---

### Contoh 1: Matematika

**Pernyataan:**
```
"Semua bilangan genap habis dibagi 2"
```

**Dalam logika predikat:**
```
Domain: Bilangan bulat
P(x): "x habis dibagi 2"
Q(x): "x genap"

∀x (Q(x) → P(x))
```

**Evaluasi:**
- x = 2: Q(2)=T, P(2)=T → T→T = T ✅
- x = 4: Q(4)=T, P(4)=T → T→T = T ✅
- x = 6: Q(6)=T, P(6)=T → T→T = T ✅
- ...
- Semua benar, jadi **∀x (Q(x) → P(x)) = TRUE** ✅

---

### Contoh 2: Kehidupan Sehari-hari

**Pernyataan:**
```
"Semua mahasiswa harus mengikuti ujian"
```

**Dalam logika predikat:**
```
Domain: Mahasiswa
M(x): "x adalah mahasiswa"
U(x): "x mengikuti ujian"

∀x (M(x) → U(x))
```

**Interpretasi:**
- Untuk setiap orang x
- Jika x mahasiswa
- Maka x harus ikut ujian

---

### Contoh 3: Programming

**Pernyataan:**
```
"Semua elemen array positif"
```

**Dalam kode:**
```python
def semua_positif(arr):
    """
    Cek: ∀x ∈ arr, x > 0
    """
    for x in arr:
        if x <= 0:
            return False  # Ada satu tidak positif
    return True  # Semua positif

# Test
print(semua_positif([1, 2, 3, 4]))    # True
print(semua_positif([1, -2, 3, 4]))   # False (ada -2)
```

---

### ⚠️ Kesalahan Umum

**SALAH:**
```
∀x (M(x) ∧ S(x))
"Semua x adalah mahasiswa DAN suka matematika"
```

Ini berarti **semua objek di alam semesta** adalah mahasiswa yang suka matematika! (Termasuk meja, kursi, dll)

**BENAR:**
```
∀x (M(x) → S(x))
"Semua mahasiswa suka matematika"
```

**Pola umum:**
> ∀x dengan implikasi (→), bukan konjungsi (∧)

---

## ∃ Kuantor Eksistensial (There Exists)

### Definisi

> **∃x P(x)** dibaca: "Ada x sedemikian sehingga P(x) benar"

**Notasi:**
- ∃x P(x)
- ∃x ∈ D, P(x) (dengan domain eksplisit)

### Kapan TRUE?

**∃x P(x)** adalah TRUE jika dan hanya jika:
- P(x) benar untuk **MINIMAL SATU** x di domain

Hanya SALAH jika P(x) salah untuk **SEMUA** x.

---

### Contoh 1: Matematika

**Pernyataan:**
```
"Ada bilangan prima genap"
```

**Dalam logika predikat:**
```
Domain: Bilangan bulat
P(x): "x prima"
Q(x): "x genap"

∃x (P(x) ∧ Q(x))
```

**Evaluasi:**
- x = 2: P(2)=T, Q(2)=T → T∧T = T ✅
- Ketemu! Ada minimal satu x yang memenuhi
- **∃x (P(x) ∧ Q(x)) = TRUE** ✅

---

### Contoh 2: Kehidupan Sehari-hari

**Pernyataan:**
```
"Ada mahasiswa yang lulus dengan nilai A"
```

**Dalam logika predikat:**
```
Domain: Mahasiswa
M(x): "x mahasiswa"
L(x): "x lulus dengan A"

∃x (M(x) ∧ L(x))
```

**Interpretasi:**
- Ada minimal satu orang x
- Yang merupakan mahasiswa
- Dan lulus dengan nilai A

---

### Contoh 3: Programming

**Pernyataan:**
```
"Ada elemen array yang negatif"
```

**Dalam kode:**
```python
def ada_negatif(arr):
    """
    Cek: ∃x ∈ arr, x < 0
    """
    for x in arr:
        if x < 0:
            return True  # Ketemu satu negatif
    return False  # Tidak ada yang negatif

# Test
print(ada_negatif([1, 2, 3, 4]))     # False
print(ada_negatif([1, -2, 3, 4]))    # True (ada -2)
```

---

### ⚠️ Kesalahan Umum

**SALAH:**
```
∃x (M(x) → S(x))
"Ada x, jika x mahasiswa maka x suka matematika"
```

Ini hampir selalu TRUE! (Karena jika x bukan mahasiswa, implikasi otomatis TRUE)

**BENAR:**
```
∃x (M(x) ∧ S(x))
"Ada mahasiswa yang suka matematika"
```

**Pola umum:**
> ∃x dengan konjungsi (∧), bukan implikasi (→)

---

## 📊 Perbandingan ∀ vs ∃

| Aspek | Universal (∀) | Eksistensial (∃) |
|-------|---------------|------------------|
| **Arti** | Untuk semua | Ada (minimal satu) |
| **TRUE ketika** | Semua x memenuhi | Min. satu x memenuhi |
| **FALSE ketika** | Ada satu x tidak memenuhi | Semua x tidak memenuhi |
| **Dengan implikasi** | ∀x (P(x) → Q(x)) | ✗ Hindari |
| **Dengan konjungsi** | ✗ Hindari | ∃x (P(x) ∧ Q(x)) |
| **Contoh** | Semua mahasiswa lulus | Ada mahasiswa lulus |
| **Programming** | for + return False jika ada yang tidak memenuhi | for + return True jika ketemu yang memenuhi |

---

## 🔄 Negasi Kuantor

### Hukum De Morgan untuk Kuantor

| Pernyataan | Negasi | Ekuivalen dengan |
|------------|--------|------------------|
| **∀x P(x)** | **¬∀x P(x)** | **∃x ¬P(x)** |
| **∃x P(x)** | **¬∃x P(x)** | **∀x ¬P(x)** |

### Penjelasan Detail

#### Negasi Universal

```
¬(∀x P(x)) ≡ ∃x ¬P(x)

"TIDAK BENAR bahwa semua x memenuhi P"
≡ "ADA x yang TIDAK memenuhi P"
```

**Contoh:**
```
Pernyataan: "Semua mahasiswa lulus"
Negasi: "Ada mahasiswa yang tidak lulus"

∀x Lulus(x)
¬(∀x Lulus(x)) ≡ ∃x ¬Lulus(x)
```

#### Negasi Eksistensial

```
¬(∃x P(x)) ≡ ∀x ¬P(x)

"TIDAK ADA x yang memenuhi P"
≡ "SEMUA x TIDAK memenuhi P"
```

**Contoh:**
```
Pernyataan: "Ada mahasiswa yang bolos"
Negasi: "Semua mahasiswa tidak bolos" = "Tidak ada yang bolos"

∃x Bolos(x)
¬(∃x Bolos(x)) ≡ ∀x ¬Bolos(x)
```

---

## 🎯 Translasi Kalimat Bahasa Natural

### Pola Umum

| Kalimat | Bentuk Logika |
|---------|---------------|
| "Semua A adalah B" | ∀x (A(x) → B(x)) |
| "Ada A yang B" | ∃x (A(x) ∧ B(x)) |
| "Tidak ada A yang B" | ∀x (A(x) → ¬B(x)) atau ¬∃x (A(x) ∧ B(x)) |
| "Tidak semua A adalah B" | ∃x (A(x) ∧ ¬B(x)) |
| "Hanya A yang B" | ∀x (B(x) → A(x)) |
| "A dan hanya A yang B" | ∀x (B(x) ↔ A(x)) |

---

### Contoh Translasi 1

**Kalimat:**
```
"Semua programmer bisa coding"
```

**Analisis:**
- Domain: Orang
- P(x): "x adalah programmer"
- C(x): "x bisa coding"

**Bentuk logika:**
```
∀x (P(x) → C(x))
```

---

### Contoh Translasi 2

**Kalimat:**
```
"Ada mahasiswa yang pintar tapi malas"
```

**Analisis:**
- Domain: Orang
- M(x): "x mahasiswa"
- P(x): "x pintar"
- L(x): "x malas"

**Bentuk logika:**
```
∃x (M(x) ∧ P(x) ∧ L(x))
```

---

### Contoh Translasi 3

**Kalimat:**
```
"Tidak semua burung bisa terbang"
```

**Analisis:**
- Domain: Hewan
- B(x): "x burung"
- T(x): "x bisa terbang"

**Cara 1 (Negasi universal):**
```
¬(∀x (B(x) → T(x)))
≡ ∃x (B(x) ∧ ¬T(x))
```

**Cara 2 (Langsung):**
```
∃x (B(x) ∧ ¬T(x))
"Ada burung yang tidak bisa terbang"
```

---

### Contoh Translasi 4

**Kalimat:**
```
"Hanya mahasiswa yang boleh ikut ujian"
```

**Analisis:**
- Domain: Orang
- M(x): "x mahasiswa"
- U(x): "x ikut ujian"

**Bentuk logika:**
```
∀x (U(x) → M(x))
"Semua yang ikut ujian adalah mahasiswa"
```

---

## 💻 Implementasi dalam Kode

### Contoh Program 1: Quantifier Evaluator

#### Python
```python
"""
Program: Evaluator Kuantor Universal dan Eksistensial
Deskripsi: Mengevaluasi statement dengan kuantor pada domain tertentu
"""

class QuantifierEvaluator:
    """Class untuk evaluasi statement dengan kuantor"""
    
    def __init__(self, domain):
        """
        Initialize dengan domain tertentu
        
        Args:
            domain: List/set objek dalam domain
        """
        self.domain = domain
    
    def universal(self, predicate, predicate_name="P(x)"):
        """
        Evaluasi kuantor universal: ∀x P(x)
        
        Args:
            predicate: Fungsi yang menerima x dan return True/False
            predicate_name: Nama predikat untuk display
        
        Returns:
            bool: True jika semua x memenuhi predicate
        """
        print("\n" + "=" * 70)
        print(f"EVALUASI KUANTOR UNIVERSAL: ∀x {predicate_name}")
        print("=" * 70)
        print(f"Domain: {self.domain}")
        print("\nEvaluasi per elemen:")
        print("-" * 70)
        
        results = []
        for x in self.domain:
            result = predicate(x)
            results.append(result)
            status = "✅" if result else "❌"
            print(f"  {status} x = {x}: {predicate_name} = {result}")
        
        print("-" * 70)
        
        final_result = all(results)
        
        print(f"\n🎯 HASIL: ∀x {predicate_name} = {final_result}")
        
        if final_result:
            print("     BENAR - Semua elemen memenuhi predikat")
        else:
            print("     SALAH - Ada elemen yang tidak memenuhi predikat")
        
        print("=" * 70)
        
        return final_result
    
    def existential(self, predicate, predicate_name="P(x)"):
        """
        Evaluasi kuantor eksistensial: ∃x P(x)
        
        Args:
            predicate: Fungsi yang menerima x dan return True/False
            predicate_name: Nama predikat untuk display
        
        Returns:
            bool: True jika minimal ada satu x yang memenuhi predicate
        """
        print("\n" + "=" * 70)
        print(f"EVALUASI KUANTOR EKSISTENSIAL: ∃x {predicate_name}")
        print("=" * 70)
        print(f"Domain: {self.domain}")
        print("\nEvaluasi per elemen:")
        print("-" * 70)
        
        results = []
        for x in self.domain:
            result = predicate(x)
            results.append(result)
            status = "✅" if result else "❌"
            print(f"  {status} x = {x}: {predicate_name} = {result}")
        
        print("-" * 70)
        
        final_result = any(results)
        
        print(f"\n🎯 HASIL: ∃x {predicate_name} = {final_result}")
        
        if final_result:
            print("     BENAR - Ada minimal satu elemen yang memenuhi predikat")
        else:
            print("     SALAH - Tidak ada elemen yang memenuhi predikat")
        
        print("=" * 70)
        
        return final_result


def is_prime(n):
    """Cek apakah n bilangan prima"""
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True


def is_even(n):
    """Cek apakah n bilangan genap"""
    return n % 2 == 0


def is_positive(n):
    """Cek apakah n bilangan positif"""
    return n > 0


def demo_universal_quantifier():
    """Demo kuantor universal"""
    print("\n" + "🔷" * 35)
    print("  DEMO: KUANTOR UNIVERSAL (∀)")
    print("🔷" * 35)
    
    # Domain 1: Bilangan 1-5
    print("\n📌 Kasus 1: Domain = {1, 2, 3, 4, 5}")
    domain1 = [1, 2, 3, 4, 5]
    evaluator1 = QuantifierEvaluator(domain1)
    
    # Test: Semua bilangan positif?
    evaluator1.universal(is_positive, "x > 0")
    
    # Test: Semua bilangan genap?
    evaluator1.universal(is_even, "x genap")
    
    # Domain 2: Bilangan genap
    print("\n📌 Kasus 2: Domain = {2, 4, 6, 8}")
    domain2 = [2, 4, 6, 8]
    evaluator2 = QuantifierEvaluator(domain2)
    
    # Test: Semua bilangan genap?
    evaluator2.universal(is_even, "x genap")


def demo_existential_quantifier():
    """Demo kuantor eksistensial"""
    print("\n" + "🔷" * 35)
    print("  DEMO: KUANTOR EKSISTENSIAL (∃)")
    print("🔷" * 35)
    
    # Domain 1: Bilangan 1-10
    print("\n📌 Kasus 1: Domain = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}")
    domain1 = list(range(1, 11))
    evaluator1 = QuantifierEvaluator(domain1)
    
    # Test: Ada bilangan prima?
    evaluator1.existential(is_prime, "x prima")
    
    # Test: Ada bilangan > 100?
    evaluator1.existential(lambda x: x > 100, "x > 100")
    
    # Domain 2: Bilangan ganjil
    print("\n📌 Kasus 2: Domain = {1, 3, 5, 7, 9}")
    domain2 = [1, 3, 5, 7, 9]
    evaluator2 = QuantifierEvaluator(domain2)
    
    # Test: Ada bilangan genap?
    evaluator2.existential(is_even, "x genap")
    
    # Test: Ada bilangan prima?
    evaluator2.existential(is_prime, "x prima")


def demo_negation():
    """Demo negasi kuantor (De Morgan)"""
    print("\n" + "🔷" * 35)
    print("  DEMO: NEGASI KUANTOR (DE MORGAN)")
    print("🔷" * 35)
    
    domain = [1, 2, 3, 4, 5]
    evaluator = QuantifierEvaluator(domain)
    
    print("\n💡 Hukum: ¬(∀x P(x)) ≡ ∃x ¬P(x)")
    print("📖 'Tidak semua x memenuhi P' = 'Ada x yang tidak memenuhi P'")
    
    print("\n📌 Test dengan P(x) = 'x prima'")
    
    # ∀x P(x)
    result_universal = evaluator.universal(is_prime, "x prima")
    
    # ¬(∀x P(x))
    result_not_universal = not result_universal
    print(f"\n¬(∀x prima) = {result_not_universal}")
    
    # ∃x ¬P(x)
    result_exists_not = evaluator.existential(lambda x: not is_prime(x), "¬(x prima)")
    
    print(f"\n✅ Validasi: ¬(∀x P(x)) = {result_not_universal}")
    print(f"✅ Validasi: ∃x ¬P(x) = {result_exists_not}")
    print(f"\n🎯 TERBUKTI! Kedua ekspresi sama: {result_not_universal == result_exists_not}")


def demo_real_world():
    """Demo aplikasi nyata: Validasi data mahasiswa"""
    print("\n" + "🔷" * 35)
    print("  DEMO: APLIKASI NYATA - VALIDASI DATA MAHASISWA")
    print("🔷" * 35)
    
    # Data mahasiswa (nilai ujian)
    mahasiswa_nilai = {
        "Ali": 85,
        "Budi": 70,
        "Citra": 90,
        "Dewi": 65,
        "Eko": 78
    }
    
    print("\n📊 Data Mahasiswa:")
    for nama, nilai in mahasiswa_nilai.items():
        print(f"  - {nama}: {nilai}")
    
    # Domain: nama-nama mahasiswa
    domain = list(mahasiswa_nilai.keys())
    evaluator = QuantifierEvaluator(domain)
    
    # Test 1: Semua mahasiswa lulus (nilai >= 60)?
    print("\n📌 Test 1: ∀x (nilai(x) >= 60) - Semua mahasiswa lulus?")
    evaluator.universal(
        lambda nama: mahasiswa_nilai[nama] >= 60,
        "nilai >= 60 (lulus)"
    )
    
    # Test 2: Ada mahasiswa dengan nilai A (>= 85)?
    print("\n📌 Test 2: ∃x (nilai(x) >= 85) - Ada yang dapat A?")
    evaluator.existential(
        lambda nama: mahasiswa_nilai[nama] >= 85,
        "nilai >= 85 (grade A)"
    )
    
    # Test 3: Ada yang tidak lulus?
    print("\n📌 Test 3: ∃x (nilai(x) < 60) - Ada yang tidak lulus?")
    evaluator.existential(
        lambda nama: mahasiswa_nilai[nama] < 60,
        "nilai < 60 (tidak lulus)"
    )


def main():
    """Fungsi utama"""
    print("\n" + "=" * 70)
    print("  EVALUATOR KUANTOR UNIVERSAL DAN EKSISTENSIAL")
    print("=" * 70)
    
    demo_universal_quantifier()
    demo_existential_quantifier()
    demo_negation()
    demo_real_world()
    
    print("\n" + "=" * 70)
    print("✓ Semua demo selesai!")
    print("=" * 70 + "\n")


if __name__ == "__main__":
    main()
```

**Output Contoh:**
```
🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷
  DEMO: KUANTOR UNIVERSAL (∀)
🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷

📌 Kasus 1: Domain = {1, 2, 3, 4, 5}

======================================================================
EVALUASI KUANTOR UNIVERSAL: ∀x x > 0
======================================================================
Domain: [1, 2, 3, 4, 5]

Evaluasi per elemen:
----------------------------------------------------------------------
  ✅ x = 1: x > 0 = True
  ✅ x = 2: x > 0 = True
  ✅ x = 3: x > 0 = True
  ✅ x = 4: x > 0 = True
  ✅ x = 5: x > 0 = True
----------------------------------------------------------------------

🎯 HASIL: ∀x x > 0 = True
     BENAR - Semua elemen memenuhi predikat
======================================================================
```

---

### Contoh Program 2: Array Quantifier Operations

#### Bahasa C
```c
/*
 * Program: Operasi Kuantor pada Array
 * Deskripsi: Implementasi kuantor universal dan eksistensial untuk array
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>
#include <string.h>

// Tipe untuk fungsi predikat
typedef bool (*Predicate)(int);

// Predikat: bilangan genap
bool is_even(int x) {
    return x % 2 == 0;
}

// Predikat: bilangan ganjil
bool is_odd(int x) {
    return x % 2 != 0;
}

// Predikat: bilangan positif
bool is_positive(int x) {
    return x > 0;
}

// Predikat: bilangan negatif
bool is_negative(int x) {
    return x < 0;
}

// Predikat: bilangan prima
bool is_prime(int x) {
    if (x < 2) return false;
    for (int i = 2; i * i <= x; i++) {
        if (x % i == 0) return false;
    }
    return true;
}

// Kuantor Universal: ∀x P(x)
bool forall(int arr[], int size, Predicate pred, const char* pred_name) {
    printf("\n");
    printf("======================================================================\n");
    printf("KUANTOR UNIVERSAL: ∀x %s\n", pred_name);
    printf("======================================================================\n");
    
    // Print array
    printf("Array: [");
    for (int i = 0; i < size; i++) {
        printf("%d", arr[i]);
        if (i < size - 1) printf(", ");
    }
    printf("]\n");
    
    printf("\nEvaluasi per elemen:\n");
    printf("----------------------------------------------------------------------\n");
    
    bool result = true;
    for (int i = 0; i < size; i++) {
        bool elem_result = pred(arr[i]);
        result = result && elem_result;
        
        printf("  %s arr[%d] = %d: %s = %s\n",
               elem_result ? "✅" : "❌",
               i, arr[i], pred_name,
               elem_result ? "TRUE" : "FALSE");
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("\n🎯 HASIL: ∀x %s = %s\n", pred_name, result ? "TRUE" : "FALSE");
    
    if (result) {
        printf("     BENAR - Semua elemen memenuhi predikat\n");
    } else {
        printf("     SALAH - Ada elemen yang tidak memenuhi predikat\n");
    }
    
    printf("======================================================================\n");
    
    return result;
}

// Kuantor Eksistensial: ∃x P(x)
bool exists(int arr[], int size, Predicate pred, const char* pred_name) {
    printf("\n");
    printf("======================================================================\n");
    printf("KUANTOR EKSISTENSIAL: ∃x %s\n", pred_name);
    printf("======================================================================\n");
    
    // Print array
    printf("Array: [");
    for (int i = 0; i < size; i++) {
        printf("%d", arr[i]);
        if (i < size - 1) printf(", ");
    }
    printf("]\n");
    
    printf("\nEvaluasi per elemen:\n");
    printf("----------------------------------------------------------------------\n");
    
    bool result = false;
    for (int i = 0; i < size; i++) {
        bool elem_result = pred(arr[i]);
        result = result || elem_result;
        
        printf("  %s arr[%d] = %d: %s = %s\n",
               elem_result ? "✅" : "❌",
               i, arr[i], pred_name,
               elem_result ? "TRUE" : "FALSE");
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("\n🎯 HASIL: ∃x %s = %s\n", pred_name, result ? "TRUE" : "FALSE");
    
    if (result) {
        printf("     BENAR - Ada minimal satu elemen yang memenuhi predikat\n");
    } else {
        printf("     SALAH - Tidak ada elemen yang memenuhi predikat\n");
    }
    
    printf("======================================================================\n");
    
    return result;
}

void demo_universal() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: KUANTOR UNIVERSAL (∀)\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    // Test 1: Semua positif?
    int arr1[] = {1, 2, 3, 4, 5};
    int size1 = sizeof(arr1) / sizeof(arr1[0]);
    
    printf("\n📌 Test 1: Semua elemen positif?");
    forall(arr1, size1, is_positive, "x > 0");
    
    // Test 2: Semua genap?
    printf("\n📌 Test 2: Semua elemen genap?");
    forall(arr1, size1, is_even, "x genap");
}

void demo_existential() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: KUANTOR EKSISTENSIAL (∃)\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    
    // Test 1: Ada yang genap?
    printf("\n📌 Test 1: Ada elemen genap?");
    exists(arr, size, is_even, "x genap");
    
    // Test 2: Ada yang negatif?
    printf("\n📌 Test 2: Ada elemen negatif?");
    exists(arr, size, is_negative, "x < 0");
    
    // Test 3: Ada yang prima?
    printf("\n📌 Test 3: Ada elemen prima?");
    exists(arr, size, is_prime, "x prima");
}

void demo_combined() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: KOMBINASI KUANTOR\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    int arr[] = {2, 4, 6, 8, 10};
    int size = sizeof(arr) / sizeof(arr[0]);
    
    printf("\n💡 Statement: \"Semua elemen genap DAN ada yang prima\"");
    printf("\n   Formal: (∀x Genap(x)) ∧ (∃x Prima(x))\n");
    
    bool all_even = forall(arr, size, is_even, "x genap");
    bool exists_prime = exists(arr, size, is_prime, "x prima");
    
    bool combined = all_even && exists_prime;
    
    printf("\n======================================================================\n");
    printf("HASIL KOMBINASI:\n");
    printf("======================================================================\n");
    printf("  ∀x Genap(x) = %s\n", all_even ? "TRUE" : "FALSE");
    printf("  ∃x Prima(x) = %s\n", exists_prime ? "TRUE" : "FALSE");
    printf("----------------------------------------------------------------------\n");
    printf("  (∀x Genap(x)) ∧ (∃x Prima(x)) = %s\n", combined ? "TRUE" : "FALSE");
    printf("======================================================================\n");
}

int main() {
    printf("\n");
    printf("======================================================================\n");
    printf("  OPERASI KUANTOR PADA ARRAY (C)\n");
    printf("======================================================================\n");
    
    demo_universal();
    demo_existential();
    demo_combined();
    
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
gcc -o quantifier quantifier.c -lm
./quantifier

# Windows
gcc -o quantifier.exe quantifier.c
quantifier.exe
```

---

## 🎯 Latihan Soal

### Soal 1: Evaluasi Kuantor

Domain: {1, 2, 3, 4, 5}
P(x): "x adalah bilangan prima"

Tentukan nilai kebenaran:
1. ∀x P(x)
2. ∃x P(x)
3. ∀x ¬P(x)
4. ∃x ¬P(x)

<details>
<summary>Lihat Jawaban</summary>

1. **∀x P(x) = FALSE**
   - 1 bukan prima, jadi tidak semua prima

2. **∃x P(x) = TRUE**
   - 2, 3, 5 adalah prima, jadi ada yang prima

3. **∀x ¬P(x) = FALSE**
   - Tidak semua bukan prima (2,3,5 adalah prima)

4. **∃x ¬P(x) = TRUE**
   - 1, 4 bukan prima, jadi ada yang bukan prima

</details>

---

### Soal 2: Negasi

Negasikan pernyataan berikut:

1. "Semua mahasiswa mengerjakan tugas"
2. "Ada dosen yang galak"
3. "Tidak ada mobil yang rusak"

<details>
<summary>Lihat Jawaban</summary>

1. **"Semua mahasiswa mengerjakan tugas"**
   - Negasi: "Ada mahasiswa yang tidak mengerjakan tugas"
   - ∀x M(x) → ∃x ¬M(x)

2. **"Ada dosen yang galak"**
   - Negasi: "Semua dosen tidak galak" = "Tidak ada dosen galak"
   - ∃x G(x) → ∀x ¬G(x)

3. **"Tidak ada mobil yang rusak"**
   - ∀x ¬R(x) atau ¬∃x R(x)
   - Negasi: "Ada mobil yang rusak"
   - ∃x R(x)

</details>

---

### Soal 3: Translasi

Terjemahkan ke logika predikat:

1. "Semua kucing adalah karnivora"
2. "Ada anjing yang lucu"
3. "Tidak semua burung bisa terbang"
4. "Hanya admin yang bisa hapus data"

<details>
<summary>Lihat Jawaban</summary>

Domain: Hewan/Orang

1. **"Semua kucing adalah karnivora"**
   - ∀x (Kucing(x) → Karnivora(x))

2. **"Ada anjing yang lucu"**
   - ∃x (Anjing(x) ∧ Lucu(x))

3. **"Tidak semua burung bisa terbang"**
   - ∃x (Burung(x) ∧ ¬Terbang(x))

4. **"Hanya admin yang bisa hapus data"**
   - ∀x (HapusData(x) → Admin(x))

</details>

---

## 🚀 Selanjutnya

Di [Bab 9](./09-kuantor-2.md), kita akan mempelajari:
- 🔄 **Nested Quantifiers** (Kuantor bersarang)
- 💻 **Implementasi dalam Program**
- 🎯 **Quantifier dalam Database (SQL)**
- 🧮 **Studi Kasus Kompleks**

---

## 📚 Referensi

- Rosen, K. H. (2019). *Discrete Mathematics* (Ch. 1.4-1.5)
- [Predicate Logic - Stanford](https://web.stanford.edu/class/cs103/lectures/04/Small04.pdf)
- [Quantifiers Tutorial](https://www.mathsisfun.com/sets/quantifiers.html)

---

**Selamat! Anda sudah menguasai kuantor!** 🎉

← [Bab 7: Inferensi Logika (Bagian 2)](./07-inferensi-logika-2.md) | [Bab 9: Kuantor (Bagian 2)](./09-kuantor-2.md) →
