# 🔄 Bab 4: Ekuivalensi Logika (Bagian 1)

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Memahami konsep ekuivalensi logika
- ✅ Mengenal tautologi, kontradiksi, dan kontingensi
- ✅ Menguasai hukum-hukum logika dasar
- ✅ Menerapkan hukum De Morgan
- ✅ Membuktikan ekuivalensi dengan tabel kebenaran

---

## 🎯 Ekuivalensi Logika

### Apa itu Ekuivalensi Logika?

> **Ekuivalensi Logika**: Dua proposisi **p** dan **q** dikatakan **ekuivalen secara logika** (ditulis **p ≡ q** atau **p ⇔ q**) jika keduanya memiliki **nilai kebenaran yang sama** untuk semua kemungkinan nilai variabel.

**Notasi:**
- p ≡ q
- p ⇔ q  
- p ↔ q (biimplikasi yang selalu benar)

### 💡 Analogi Sederhana

Bayangkan dua kunci yang berbeda tapi **selalu membuka pintu yang sama**:
- Kunci A = "Tidak hujan ATAU saya bawa payung"
- Kunci B = "Jika hujan MAKA saya bawa payung"

Kedua pernyataan ini **selalu memberikan hasil yang sama** → mereka **ekuivalen**!

### Perbedaan Biimplikasi vs Ekuivalensi

| Aspek | Biimplikasi (↔) | Ekuivalensi (≡) |
|-------|-----------------|-----------------|
| Definisi | Operator logika | Relasi antar proposisi |
| Nilai | Bisa TRUE atau FALSE | Selalu TRUE (tautologi) |
| Contoh | p ↔ q (tergantung nilai) | ¬(p ∧ q) ≡ (¬p ∨ ¬q) (selalu benar) |

---

## 📊 Tiga Jenis Proposisi Majemuk

### 1. **Tautologi** ✅

> **Tautologi** adalah proposisi majemuk yang **selalu BENAR** untuk semua kemungkinan nilai kebenaran.

**Contoh:**
```
p ∨ ¬p  → "Hujan ATAU tidak hujan"
         (Selalu benar!)
```

**Tabel Kebenaran:**
| p | ¬p | p ∨ ¬p |
|---|-------|--------|
| T | F | **T** |
| F | T | **T** |

**Contoh Lain Tautologi:**
- p → p (Jika p maka p)
- (p ∧ q) → p
- ¬(p ∧ ¬p)
- (p → q) ∨ (q → p)

### 2. **Kontradiksi** ❌

> **Kontradiksi** adalah proposisi majemuk yang **selalu SALAH** untuk semua kemungkinan nilai kebenaran.

**Contoh:**
```
p ∧ ¬p  → "Hujan DAN tidak hujan"
         (Mustahil!)
```

**Tabel Kebenaran:**
| p | ¬p | p ∧ ¬p |
|---|-------|--------|
| T | F | **F** |
| F | T | **F** |

**Contoh Lain Kontradiksi:**
- p ∧ ¬p
- ¬(p ∨ ¬p)
- (p ↔ q) ∧ (p ↔ ¬q)

### 3. **Kontingensi** ⚖️

> **Kontingensi** adalah proposisi majemuk yang **bisa BENAR atau SALAH** tergantung nilai variabel.

**Contoh:**
```
p ∧ q  → "Hujan DAN berangin"
         (Bisa benar, bisa salah)
```

**Tabel Kebenaran:**
| p | q | p ∧ q |
|---|---|-------|
| T | T | **T** |
| T | F | **F** |
| F | T | **F** |
| F | F | **F** |

---

## 📜 Hukum-Hukum Logika Dasar

### 1. **Hukum Identitas** 🆔

| Hukum | Ekuivalensi |
|-------|-------------|
| Identitas AND | p ∧ **T** ≡ p |
| Identitas OR | p ∨ **F** ≡ p |

**Penjelasan:**
- AND dengan TRUE tidak mengubah nilai
- OR dengan FALSE tidak mengubah nilai

**Contoh:**
```
"Saya belajar DAN 2+2=4" ≡ "Saya belajar"
"Saya lulus ATAU 2+2=5" ≡ "Saya lulus"
```

---

### 2. **Hukum Dominasi** 🎯

| Hukum | Ekuivalensi |
|-------|-------------|
| Dominasi AND | p ∧ **F** ≡ **F** |
| Dominasi OR | p ∨ **T** ≡ **T** |

**Penjelasan:**
- AND dengan FALSE selalu FALSE
- OR dengan TRUE selalu TRUE

**Contoh:**
```
"Saya belajar DAN 2+2=5" ≡ FALSE (dominasi AND)
"Saya lulus ATAU 2+2=4" ≡ TRUE (dominasi OR)
```

---

### 3. **Hukum Idempoten** 🔁

| Hukum | Ekuivalensi |
|-------|-------------|
| Idempoten AND | p ∧ p ≡ p |
| Idempoten OR | p ∨ p ≡ p |

**Penjelasan:**
- Menggabungkan proposisi dengan dirinya sendiri tidak mengubah nilai

**Contoh:**
```
"Hujan DAN hujan" ≡ "Hujan"
"Lulus ATAU lulus" ≡ "Lulus"
```

---

### 4. **Hukum Negasi Ganda** ⏪

| Hukum | Ekuivalensi |
|-------|-------------|
| Double Negation | ¬(¬p) ≡ p |

**Penjelasan:**
- "Tidak tidak p" sama dengan "p"

**Contoh:**
```
"Tidak benar bahwa hari ini TIDAK hujan" ≡ "Hari ini hujan"
```

---

### 5. **Hukum Komutatif** 🔄

| Hukum | Ekuivalensi |
|-------|-------------|
| Komutatif AND | p ∧ q ≡ q ∧ p |
| Komutatif OR | p ∨ q ≡ q ∨ p |

**Penjelasan:**
- Urutan tidak mempengaruhi hasil

**Contoh:**
```
"Hujan DAN berangin" ≡ "Berangin DAN hujan"
"Belajar ATAU bermain" ≡ "Bermain ATAU belajar"
```

---

### 6. **Hukum Asosiatif** 🔗

| Hukum | Ekuivalensi |
|-------|-------------|
| Asosiatif AND | (p ∧ q) ∧ r ≡ p ∧ (q ∧ r) |
| Asosiatif OR | (p ∨ q) ∨ r ≡ p ∨ (q ∨ r) |

**Penjelasan:**
- Pengelompokan tidak mempengaruhi hasil

**Contoh:**
```
"(Hujan DAN berangin) DAN dingin" ≡ "Hujan DAN (berangin DAN dingin)"
```

---

### 7. **Hukum Distributif** 📦

| Hukum | Ekuivalensi |
|-------|-------------|
| Distributif AND over OR | p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) |
| Distributif OR over AND | p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r) |

**Penjelasan:**
- Mirip seperti perkalian distributif dalam aljabar

**Contoh:**
```
"Belajar DAN (Matematika ATAU Fisika)"
≡ "(Belajar DAN Matematika) ATAU (Belajar DAN Fisika)"
```

---

### 8. **Hukum De Morgan** 🎭

> Salah satu hukum terpenting dalam logika!

| Hukum | Ekuivalensi |
|-------|-------------|
| De Morgan 1 | ¬(p ∧ q) ≡ ¬p ∨ ¬q |
| De Morgan 2 | ¬(p ∨ q) ≡ ¬p ∧ ¬q |

**Cara Mengingat:**
1. Pecah negasi: ¬(p ∧ q) → (¬p ... ¬q)
2. Negasikan setiap proposisi
3. **Balik operator**: AND ↔ OR

**Penjelasan Detail:**

#### De Morgan 1: ¬(p ∧ q) ≡ ¬p ∨ ¬q

"Tidak benar (p DAN q)" = "Tidak p ATAU tidak q"

**Contoh:**
```
¬("Hujan DAN berangin") ≡ "Tidak hujan ATAU tidak berangin"

Logis kan? Jika pernyataan "hujan dan berangin" salah,
berarti minimal salah satu tidak benar:
- Tidak hujan, ATAU
- Tidak berangin, ATAU
- Keduanya tidak benar
```

#### De Morgan 2: ¬(p ∨ q) ≡ ¬p ∧ ¬q

"Tidak benar (p ATAU q)" = "Tidak p DAN tidak q"

**Contoh:**
```
¬("Lulus ATAU mengulang") ≡ "Tidak lulus DAN tidak mengulang"

Jika pernyataan "lulus atau mengulang" salah,
berarti KEDUANYA salah:
- Tidak lulus DAN
- Tidak mengulang
(Mungkin DO/drop out)
```

**Bukti dengan Tabel Kebenaran:**

| p | q | p∧q | ¬(p∧q) | ¬p | ¬q | ¬p∨¬q | **Sama?** |
|---|---|-----|--------|----|----|-------|-----------|
| T | T | T | F | F | F | F | ✅ |
| T | F | F | T | F | T | T | ✅ |
| F | T | F | T | T | F | T | ✅ |
| F | F | F | T | T | T | T | ✅ |

---

### 9. **Hukum Absorpsi** 🧽

| Hukum | Ekuivalensi |
|-------|-------------|
| Absorpsi 1 | p ∧ (p ∨ q) ≡ p |
| Absorpsi 2 | p ∨ (p ∧ q) ≡ p |

**Penjelasan:**
- Proposisi yang lebih "kuat" menyerap yang lebih "lemah"

**Contoh:**
```
"Hujan DAN (Hujan ATAU berangin)" ≡ "Hujan"

Kenapa? Karena jika sudah hujan, 
maka "hujan atau berangin" pasti benar.
Jadi cukup "hujan" saja.
```

---

### 10. **Hukum Negasi** ⛔

| Hukum | Ekuivalensi |
|-------|-------------|
| Komplemen AND | p ∧ ¬p ≡ **F** |
| Komplemen OR | p ∨ ¬p ≡ **T** |

**Penjelasan:**
- Tidak mungkin p dan ¬p keduanya benar
- Pasti salah satu dari p atau ¬p yang benar

---

## 📊 Tabel Ringkasan Hukum Logika

| No | Nama Hukum | AND (∧) | OR (∨) |
|----|------------|---------|--------|
| 1 | **Identitas** | p ∧ T ≡ p | p ∨ F ≡ p |
| 2 | **Dominasi** | p ∧ F ≡ F | p ∨ T ≡ T |
| 3 | **Idempoten** | p ∧ p ≡ p | p ∨ p ≡ p |
| 4 | **Negasi Ganda** | ¬(¬p) ≡ p | |
| 5 | **Komutatif** | p ∧ q ≡ q ∧ p | p ∨ q ≡ q ∨ p |
| 6 | **Asosiatif** | (p ∧ q) ∧ r ≡ p ∧ (q ∧ r) | (p ∨ q) ∨ r ≡ p ∨ (q ∨ r) |
| 7 | **Distributif** | p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) | p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r) |
| 8 | **De Morgan** | ¬(p ∧ q) ≡ ¬p ∨ ¬q | ¬(p ∨ q) ≡ ¬p ∧ ¬q |
| 9 | **Absorpsi** | p ∧ (p ∨ q) ≡ p | p ∨ (p ∧ q) ≡ p |
| 10 | **Negasi** | p ∧ ¬p ≡ F | p ∨ ¬p ≡ T |

---

## 🎯 Contoh Pembuktian Ekuivalensi

### Contoh 1: Membuktikan ¬(p → q) ≡ p ∧ ¬q

**Langkah-langkah:**

```
¬(p → q)
≡ ¬(¬p ∨ q)         [Definisi implikasi: p → q ≡ ¬p ∨ q]
≡ ¬(¬p) ∧ ¬q        [Hukum De Morgan: ¬(A ∨ B) ≡ ¬A ∧ ¬B]
≡ p ∧ ¬q            [Negasi ganda: ¬(¬p) ≡ p]
```

**Terbukti!** ✅

---

### Contoh 2: Membuktikan (p ∨ q) ∧ (p ∨ ¬q) ≡ p

**Langkah-langkah:**

```
(p ∨ q) ∧ (p ∨ ¬q)
≡ p ∨ (q ∧ ¬q)          [Hukum Distributif]
≡ p ∨ F                 [q ∧ ¬q ≡ F, kontradiksi]
≡ p                     [Identitas OR: p ∨ F ≡ p]
```

**Terbukti!** ✅

---

### Contoh 3: Membuktikan p → (q → r) ≡ (p ∧ q) → r

**Langkah-langkah:**

```
p → (q → r)
≡ p → (¬q ∨ r)          [Definisi implikasi]
≡ ¬p ∨ (¬q ∨ r)         [Definisi implikasi]
≡ (¬p ∨ ¬q) ∨ r         [Asosiatif]
≡ ¬(p ∧ q) ∨ r          [De Morgan: ¬p ∨ ¬q ≡ ¬(p ∧ q)]
≡ (p ∧ q) → r           [Definisi implikasi]
```

**Terbukti!** ✅

---

## 💻 Implementasi dalam Kode

### Contoh Program 1: Tautology/Contradiction Checker

#### Python
```python
"""
Program: Checker Tautologi, Kontradiksi, dan Kontingensi
Deskripsi: Mengecek jenis proposisi majemuk berdasarkan tabel kebenaran
"""

from itertools import product

class LogicChecker:
    """Class untuk mengecek jenis proposisi logika"""
    
    def __init__(self):
        self.results = []
    
    def generate_truth_table(self, num_vars):
        """
        Generate semua kombinasi nilai kebenaran untuk n variabel
        
        Args:
            num_vars: Jumlah variabel
        
        Returns:
            List of tuples berisi kombinasi TRUE/FALSE
        """
        return list(product([True, False], repeat=num_vars))
    
    def check_tautology(self, values):
        """
        Cek apakah proposisi adalah tautologi (selalu TRUE)
        
        Args:
            values: List nilai kebenaran hasil evaluasi
        
        Returns:
            bool: True jika tautologi
        """
        return all(values)
    
    def check_contradiction(self, values):
        """
        Cek apakah proposisi adalah kontradiksi (selalu FALSE)
        
        Args:
            values: List nilai kebenaran hasil evaluasi
        
        Returns:
            bool: True jika kontradiksi
        """
        return not any(values)
    
    def check_contingency(self, values):
        """
        Cek apakah proposisi adalah kontingensi (kadang TRUE, kadang FALSE)
        
        Args:
            values: List nilai kebenaran hasil evaluasi
        
        Returns:
            bool: True jika kontingensi
        """
        return any(values) and not all(values)
    
    def analyze_proposition(self, eval_func, num_vars, expr_name):
        """
        Analisis jenis proposisi
        
        Args:
            eval_func: Fungsi evaluasi proposisi
            num_vars: Jumlah variabel
            expr_name: Nama ekspresi untuk display
        """
        print("\n" + "=" * 70)
        print(f"ANALISIS PROPOSISI: {expr_name}")
        print("=" * 70)
        
        # Generate tabel kebenaran
        truth_combinations = self.generate_truth_table(num_vars)
        results = []
        
        print("\nTabel Kebenaran:")
        print("-" * 70)
        
        # Header
        if num_vars == 1:
            print("| p     | Hasil |")
        elif num_vars == 2:
            print("| p     | q     | Hasil |")
        elif num_vars == 3:
            print("| p     | q     | r     | Hasil |")
        print("-" * 70)
        
        # Evaluasi setiap kombinasi
        for combo in truth_combinations:
            result = eval_func(*combo)
            results.append(result)
            
            # Print row
            row = " | ".join([str(v).ljust(5) for v in combo])
            print(f"| {row} | {str(result).ljust(5)} |")
        
        print("-" * 70)
        
        # Analisis
        print("\n📊 ANALISIS:")
        true_count = sum(results)
        false_count = len(results) - true_count
        
        print(f"  - TRUE: {true_count}/{len(results)} kasus")
        print(f"  - FALSE: {false_count}/{len(results)} kasus")
        
        # Klasifikasi
        print("\n🎯 KLASIFIKASI:")
        if self.check_tautology(results):
            print("  ✅ TAUTOLOGI - Selalu benar!")
            print("     Proposisi ini valid untuk semua kemungkinan.")
        elif self.check_contradiction(results):
            print("  ❌ KONTRADIKSI - Selalu salah!")
            print("     Proposisi ini tidak mungkin benar.")
        elif self.check_contingency(results):
            print("  ⚖️  KONTINGENSI - Tergantung kondisi")
            print("     Proposisi ini bisa benar atau salah tergantung nilai variabel.")
        
        print("=" * 70)
        
        return results


def demo_tautologi():
    """Demo proposisi tautologi"""
    print("\n" + "🔷" * 35)
    print("  DEMO: TAUTOLOGI")
    print("🔷" * 35)
    
    checker = LogicChecker()
    
    # Contoh 1: p ∨ ¬p (Law of Excluded Middle)
    print("\n📌 Contoh 1: p ∨ ¬p (Hukum Eksklusi)")
    checker.analyze_proposition(
        lambda p: p or (not p),
        1,
        "p ∨ ¬p"
    )
    
    # Contoh 2: (p → q) ∨ (q → p)
    print("\n📌 Contoh 2: (p → q) ∨ (q → p)")
    checker.analyze_proposition(
        lambda p, q: ((not p) or q) or ((not q) or p),
        2,
        "(p → q) ∨ (q → p)"
    )


def demo_kontradiksi():
    """Demo proposisi kontradiksi"""
    print("\n" + "🔷" * 35)
    print("  DEMO: KONTRADIKSI")
    print("🔷" * 35)
    
    checker = LogicChecker()
    
    # Contoh 1: p ∧ ¬p
    print("\n📌 Contoh 1: p ∧ ¬p (Hukum Non-Kontradiksi)")
    checker.analyze_proposition(
        lambda p: p and (not p),
        1,
        "p ∧ ¬p"
    )
    
    # Contoh 2: (p ∨ q) ∧ ¬p ∧ ¬q
    print("\n📌 Contoh 2: (p ∨ q) ∧ ¬p ∧ ¬q")
    checker.analyze_proposition(
        lambda p, q: (p or q) and (not p) and (not q),
        2,
        "(p ∨ q) ∧ ¬p ∧ ¬q"
    )


def demo_kontingensi():
    """Demo proposisi kontingensi"""
    print("\n" + "🔷" * 35)
    print("  DEMO: KONTINGENSI")
    print("🔷" * 35)
    
    checker = LogicChecker()
    
    # Contoh: p ∧ q
    print("\n📌 Contoh: p ∧ q")
    checker.analyze_proposition(
        lambda p, q: p and q,
        2,
        "p ∧ q"
    )


def main():
    """Fungsi utama"""
    print("\n" + "=" * 70)
    print("  CHECKER TAUTOLOGI, KONTRADIKSI, DAN KONTINGENSI")
    print("=" * 70)
    
    demo_tautologi()
    demo_kontradiksi()
    demo_kontingensi()
    
    print("\n" + "=" * 70)
    print("✓ Semua demo selesai!")
    print("=" * 70 + "\n")


if __name__ == "__main__":
    main()
```

**Output Contoh:**
```
🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷
  DEMO: TAUTOLOGI
🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷

📌 Contoh 1: p ∨ ¬p (Hukum Eksklusi)

======================================================================
ANALISIS PROPOSISI: p ∨ ¬p
======================================================================

Tabel Kebenaran:
----------------------------------------------------------------------
| p     | Hasil |
----------------------------------------------------------------------
| True  | True  |
| False | True  |
----------------------------------------------------------------------

📊 ANALISIS:
  - TRUE: 2/2 kasus
  - FALSE: 0/2 kasus

🎯 KLASIFIKASI:
  ✅ TAUTOLOGI - Selalu benar!
     Proposisi ini valid untuk semua kemungkinan.
======================================================================
```

---

### Contoh Program 2: De Morgan Law Demonstrator

#### Python
```python
"""
Program: Demonstrator Hukum De Morgan
Deskripsi: Membuktikan dan mendemonstrasikan hukum De Morgan
"""

from itertools import product

class DeMorganDemo:
    """Class untuk mendemonstrasikan hukum De Morgan"""
    
    def print_truth_table_2vars(self, func1, func2, expr1_name, expr2_name):
        """
        Print tabel kebenaran untuk 2 ekspresi dengan 2 variabel
        
        Args:
            func1: Fungsi evaluasi ekspresi 1
            func2: Fungsi evaluasi ekspresi 2
            expr1_name: Nama ekspresi 1
            expr2_name: Nama ekspresi 2
        """
        print("\n" + "=" * 80)
        print(f"PEMBUKTIAN: {expr1_name} ≡ {expr2_name}")
        print("=" * 80)
        
        # Generate semua kombinasi
        combinations = list(product([True, False], repeat=2))
        
        print("\nTabel Kebenaran:")
        print("-" * 80)
        print(f"| p     | q     | {expr1_name.ljust(25)} | {expr2_name.ljust(25)} | Sama? |")
        print("-" * 80)
        
        all_equal = True
        
        for p, q in combinations:
            result1 = func1(p, q)
            result2 = func2(p, q)
            equal = result1 == result2
            all_equal = all_equal and equal
            
            equal_mark = "✅" if equal else "❌"
            
            print(f"| {str(p).ljust(5)} | {str(q).ljust(5)} | "
                  f"{str(result1).ljust(25)} | {str(result2).ljust(25)} | "
                  f"{equal_mark.ljust(5)} |")
        
        print("-" * 80)
        
        # Kesimpulan
        print("\n🎯 KESIMPULAN:")
        if all_equal:
            print(f"  ✅ TERBUKTI! {expr1_name} ≡ {expr2_name}")
            print("     Kedua ekspresi EKUIVALEN untuk semua nilai p dan q")
        else:
            print(f"  ❌ TIDAK EKUIVALEN! {expr1_name} ≢ {expr2_name}")
        
        print("=" * 80)
    
    def demo_demorgan_1(self):
        """
        Demo Hukum De Morgan 1: ¬(p ∧ q) ≡ ¬p ∨ ¬q
        """
        print("\n" + "🔷" * 40)
        print("  HUKUM DE MORGAN 1")
        print("🔷" * 40)
        
        print("\n💡 Hukum: ¬(p ∧ q) ≡ ¬p ∨ ¬q")
        print("📖 Artinya: 'Tidak (p DAN q)' sama dengan 'Tidak p ATAU Tidak q'")
        
        print("\n📌 Contoh Nyata:")
        print("   ¬(Hujan ∧ Berangin) ≡ ¬Hujan ∨ ¬Berangin")
        print("   'Tidak benar hujan DAN berangin' = 'Tidak hujan ATAU tidak berangin'")
        
        # Fungsi evaluasi
        func1 = lambda p, q: not (p and q)        # ¬(p ∧ q)
        func2 = lambda p, q: (not p) or (not q)   # ¬p ∨ ¬q
        
        self.print_truth_table_2vars(
            func1, func2,
            "¬(p ∧ q)",
            "¬p ∨ ¬q"
        )
    
    def demo_demorgan_2(self):
        """
        Demo Hukum De Morgan 2: ¬(p ∨ q) ≡ ¬p ∧ ¬q
        """
        print("\n" + "🔷" * 40)
        print("  HUKUM DE MORGAN 2")
        print("🔷" * 40)
        
        print("\n💡 Hukum: ¬(p ∨ q) ≡ ¬p ∧ ¬q")
        print("📖 Artinya: 'Tidak (p ATAU q)' sama dengan 'Tidak p DAN Tidak q'")
        
        print("\n📌 Contoh Nyata:")
        print("   ¬(Lulus ∨ Mengulang) ≡ ¬Lulus ∧ ¬Mengulang")
        print("   'Tidak lulus atau mengulang' = 'Tidak lulus DAN tidak mengulang'")
        print("   (Mungkin DO/keluar)")
        
        # Fungsi evaluasi
        func1 = lambda p, q: not (p or q)         # ¬(p ∨ q)
        func2 = lambda p, q: (not p) and (not q)  # ¬p ∧ ¬q
        
        self.print_truth_table_2vars(
            func1, func2,
            "¬(p ∨ q)",
            "¬p ∧ ¬q"
        )
    
    def demo_aplikasi_programming(self):
        """Demo aplikasi De Morgan dalam programming"""
        print("\n" + "🔷" * 40)
        print("  APLIKASI: DE MORGAN DALAM PROGRAMMING")
        print("🔷" * 40)
        
        print("\n💻 Dalam pemrograman, De Morgan sering digunakan untuk:")
        print("   1. Menyederhanakan kondisi IF")
        print("   2. Optimasi boolean expression")
        print("   3. Refactoring kode")
        
        print("\n📌 Contoh 1: Simplifikasi Kondisi")
        print("\n   ❌ SEBELUM (kompleks):")
        print("      if not (user_logged_in and has_permission):")
        print("          deny_access()")
        
        print("\n   ✅ SESUDAH (lebih jelas dengan De Morgan):")
        print("      if (not user_logged_in) or (not has_permission):")
        print("          deny_access()")
        
        print("\n📌 Contoh 2: Validasi Input")
        print("\n   ❌ SEBELUM:")
        print("      if not (age >= 18 and has_id):")
        print("          return 'Tidak boleh masuk'")
        
        print("\n   ✅ SESUDAH (dengan De Morgan):")
        print("      if (age < 18) or (not has_id):")
        print("          return 'Tidak boleh masuk'")
        
        # Demo dengan kode aktual
        print("\n🧪 TEST AKTUAL:")
        
        # Test case 1
        user_logged_in = False
        has_permission = True
        
        result1 = not (user_logged_in and has_permission)
        result2 = (not user_logged_in) or (not has_permission)
        
        print(f"\n   user_logged_in = {user_logged_in}")
        print(f"   has_permission = {has_permission}")
        print(f"\n   not (logged_in AND has_perm) = {result1}")
        print(f"   (not logged_in) OR (not has_perm) = {result2}")
        print(f"   Sama? {'✅ YA' if result1 == result2 else '❌ TIDAK'}")


def main():
    """Fungsi utama"""
    print("\n" + "=" * 80)
    print("  DEMONSTRATOR HUKUM DE MORGAN")
    print("=" * 80)
    
    demo = DeMorganDemo()
    
    demo.demo_demorgan_1()
    demo.demo_demorgan_2()
    demo.demo_aplikasi_programming()
    
    print("\n" + "=" * 80)
    print("✓ Semua demo selesai!")
    print("=" * 80 + "\n")


if __name__ == "__main__":
    main()
```

---

### Contoh Program 3: Logical Equivalence Validator

#### Bahasa C
```c
/*
 * Program: Validator Ekuivalensi Logika
 * Deskripsi: Memvalidasi ekuivalensi dua ekspresi logika
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>
#include <string.h>

// Fungsi helper boolean
bool implies(bool p, bool q) {
    return !p || q;
}

// Validator: Cek apakah dua ekspresi ekuivalen
bool check_equivalence_2vars(
    bool (*func1)(bool, bool),
    bool (*func2)(bool, bool),
    const char* expr1_name,
    const char* expr2_name
) {
    printf("\n");
    printf("======================================================================\n");
    printf("VALIDASI EKUIVALENSI: %s ≡ %s\n", expr1_name, expr2_name);
    printf("======================================================================\n");
    
    printf("\nTabel Kebenaran:\n");
    printf("----------------------------------------------------------------------\n");
    printf("| p     | q     | %-20s | %-20s | Sama? |\n", expr1_name, expr2_name);
    printf("----------------------------------------------------------------------\n");
    
    bool all_equal = true;
    
    // Test semua kombinasi
    bool p_values[] = {true, false};
    bool q_values[] = {true, false};
    
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            bool p = p_values[i];
            bool q = q_values[j];
            
            bool result1 = func1(p, q);
            bool result2 = func2(p, q);
            bool equal = (result1 == result2);
            
            all_equal = all_equal && equal;
            
            printf("| %-5s | %-5s | %-20s | %-20s | %-5s |\n",
                   p ? "T" : "F",
                   q ? "T" : "F",
                   result1 ? "T" : "F",
                   result2 ? "T" : "F",
                   equal ? "✅" : "❌");
        }
    }
    
    printf("----------------------------------------------------------------------\n");
    
    // Kesimpulan
    printf("\n🎯 KESIMPULAN:\n");
    if (all_equal) {
        printf("  ✅ EKUIVALEN! %s ≡ %s\n", expr1_name, expr2_name);
        printf("     Kedua ekspresi memiliki nilai kebenaran yang sama\n");
    } else {
        printf("  ❌ TIDAK EKUIVALEN! %s ≢ %s\n", expr1_name, expr2_name);
        printf("     Kedua ekspresi memiliki nilai kebenaran yang berbeda\n");
    }
    
    printf("======================================================================\n");
    
    return all_equal;
}

// Ekspresi 1: p → q
bool expr_implication(bool p, bool q) {
    return implies(p, q);
}

// Ekspresi 2: ¬p ∨ q
bool expr_not_p_or_q(bool p, bool q) {
    return !p || q;
}

// Ekspresi 3: ¬(p ∧ ¬q)
bool expr_not_p_and_not_q(bool p, bool q) {
    return !(p && !q);
}

// Demo 1: Membuktikan p → q ≡ ¬p ∨ q
void demo_implication_equivalence() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO 1: DEFINISI IMPLIKASI\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n💡 Membuktikan: p → q ≡ ¬p ∨ q\n");
    printf("📖 Implikasi dapat diekspresikan dengan disjungsi\n");
    
    check_equivalence_2vars(
        expr_implication,
        expr_not_p_or_q,
        "p → q",
        "¬p ∨ q"
    );
}

// Demo 2: Membuktikan p → q ≡ ¬(p ∧ ¬q)
void demo_implication_equivalence_2() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO 2: BENTUK ALTERNATIF IMPLIKASI\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n💡 Membuktikan: p → q ≡ ¬(p ∧ ¬q)\n");
    printf("📖 'Jika p maka q' = 'Tidak mungkin p benar tapi q salah'\n");
    
    check_equivalence_2vars(
        expr_implication,
        expr_not_p_and_not_q,
        "p → q",
        "¬(p ∧ ¬q)"
    );
}

// Demo 3: Contoh non-equivalence
bool expr_p_and_q(bool p, bool q) {
    return p && q;
}

bool expr_p_or_q(bool p, bool q) {
    return p || q;
}

void demo_non_equivalence() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO 3: CONTOH TIDAK EKUIVALEN\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n💡 Membuktikan: p ∧ q TIDAK EKUIVALEN dengan p ∨ q\n");
    printf("📖 AND dan OR adalah operator yang berbeda\n");
    
    check_equivalence_2vars(
        expr_p_and_q,
        expr_p_or_q,
        "p ∧ q",
        "p ∨ q"
    );
}

int main() {
    printf("\n");
    printf("======================================================================\n");
    printf("  VALIDATOR EKUIVALENSI LOGIKA (C)\n");
    printf("======================================================================\n");
    
    demo_implication_equivalence();
    demo_implication_equivalence_2();
    demo_non_equivalence();
    
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
gcc -o logic_equivalence logic_equivalence.c
./logic_equivalence

# Windows
gcc -o logic_equivalence.exe logic_equivalence.c
logic_equivalence.exe
```

---

## 🎯 Latihan Soal

### Soal 1: Identifikasi Jenis Proposisi

Tentukan apakah proposisi berikut tautologi, kontradiksi, atau kontingensi:

1. p ∨ (q ∧ ¬q)
2. (p → q) → ((q → r) → (p → r))
3. p ∧ (q ∨ ¬q)
4. (p ∧ q) ∧ ¬(p ∨ q)

<details>
<summary>Lihat Jawaban</summary>

1. **p ∨ (q ∧ ¬q)** = p ∨ F = p → **Kontingensi** (tergantung p)
2. **(p → q) → ((q → r) → (p → r))** → **Tautologi** (transitif)
3. **p ∧ (q ∨ ¬q)** = p ∧ T = p → **Kontingensi** (tergantung p)
4. **(p ∧ q) ∧ ¬(p ∨ q)** → **Kontradiksi** (selalu FALSE)

</details>

### Soal 2: Aplikasi Hukum De Morgan

Sederhanakan menggunakan De Morgan:

1. ¬(p ∧ q ∧ r)
2. ¬((p ∨ q) ∧ (r ∨ s))
3. ¬(¬p ∨ ¬q)

<details>
<summary>Lihat Jawaban</summary>

1. ¬(p ∧ q ∧ r) = ¬p ∨ ¬q ∨ ¬r
2. ¬((p ∨ q) ∧ (r ∨ s)) = ¬(p ∨ q) ∨ ¬(r ∨ s) = (¬p ∧ ¬q) ∨ (¬r ∧ ¬s)
3. ¬(¬p ∨ ¬q) = ¬(¬p) ∧ ¬(¬q) = p ∧ q

</details>

### Soal 3: Buktikan Ekuivalensi

Buktikan: ¬(p ↔ q) ≡ p ⊕ q

<details>
<summary>Lihat Jawaban</summary>

```
¬(p ↔ q)
≡ ¬((p → q) ∧ (q → p))          [Definisi biimplikasi]
≡ ¬(p → q) ∨ ¬(q → p)            [De Morgan]
≡ ¬(¬p ∨ q) ∨ ¬(¬q ∨ p)          [Definisi implikasi]
≡ (p ∧ ¬q) ∨ (q ∧ ¬p)            [De Morgan]
≡ p ⊕ q                          [Definisi XOR]
```

</details>

---

Lanjut ke **Bagian 2** untuk mempelajari implementasi dalam kode! →

← [Bab 3: Dasar Logika (Bagian 2)](./03-dasar-logika-2.md) | [Bab 5: Ekuivalensi Logika (Bagian 2)](./05-ekuivalensi-logika-2.md) →
