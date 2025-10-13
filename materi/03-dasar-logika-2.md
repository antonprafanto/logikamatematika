# 📊 Bab 3: Dasar-Dasar Logika (Bagian 2)

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Membuat dan membaca tabel kebenaran
- ✅ Memahami operator implikasi dan biimplikasi
- ✅ Menentukan precedence operator logika
- ✅ Mengevaluasi ekspresi logika kompleks

---

## 📋 Tabel Kebenaran (Truth Table)

### Apa itu Tabel Kebenaran?

> **Tabel Kebenaran** adalah tabel yang menunjukkan semua kemungkinan nilai kebenaran dari suatu ekspresi logika.

**Kegunaan:**
- ✅ Menganalisis proposisi majemuk
- ✅ Membuktikan ekuivalensi logika
- ✅ Mendesain rangkaian digital
- ✅ Debugging logika program

### Formula Jumlah Baris

Jika ada **n** variabel proposisi, maka jumlah baris = **2ⁿ**

| Variabel | Jumlah Baris | Contoh |
|----------|--------------|--------|
| 1 (p) | 2¹ = 2 | T, F |
| 2 (p, q) | 2² = 4 | TT, TF, FT, FF |
| 3 (p, q, r) | 2³ = 8 | TTT, TTF, TFT, ... |
| 4 (p, q, r, s) | 2⁴ = 16 | TTTT, TTTF, ... |

---

## 🔄 Review: Operator Dasar

### Tabel Kebenaran Lengkap - Operator Dasar

| p | q | ¬p | p ∧ q | p ∨ q | p ⊕ q |
|---|---|-------|-------|-------|-------|
| T | T | F | T | T | F |
| T | F | F | F | T | T |
| F | T | T | F | T | T |
| F | F | T | F | F | F |

**Cara Membaca:**
- Baris 1: Ketika p=T dan q=T, maka...
  - ¬p = F (bukan TRUE)
  - p ∧ q = T (keduanya TRUE)
  - p ∨ q = T (minimal satu TRUE)
  - p ⊕ q = F (tidak hanya satu TRUE)

---

## ➡️ Implikasi (Conditional): p → q

### Definisi

**Simbol:** p → q

**Dibaca:** "Jika p maka q" atau "p implies q"

**Komponen:**
- **p** = **Antecedent** (hipotesis/premise)
- **q** = **Consequent** (kesimpulan/conclusion)

### Tabel Kebenaran

| p | q | p → q |
|---|---|-------|
| T | T | **T** |
| T | F | **F** |
| F | T | **T** |
| F | F | **T** |

### 🤔 Mengapa Demikian?

**Aturan Implikasi:**
> Implikasi **SALAH** hanya ketika antecedent **BENAR** tapi consequent **SALAH**

Mari kita analisis setiap kasus:

#### Kasus 1: p=T, q=T → **TRUE** ✅
```
"Jika hujan, maka jalanan basah"
hujan = TRUE, jalanan basah = TRUE
→ Pernyataan BENAR (logis!)
```

#### Kasus 2: p=T, q=F → **FALSE** ❌
```
"Jika hujan, maka jalanan basah"
hujan = TRUE, jalanan basah = FALSE
→ Pernyataan SALAH (tidak mungkin!)
```

#### Kasus 3: p=F, q=T → **TRUE** ✅
```
"Jika hujan, maka jalanan basah"
hujan = FALSE, jalanan basah = TRUE
→ Pernyataan BENAR (mungkin ada yang nyiram)
```

#### Kasus 4: p=F, q=F → **TRUE** ✅
```
"Jika hujan, maka jalanan basah"
hujan = FALSE, jalanan basah = FALSE
→ Pernyataan BENAR (tidak ada janji yang dilanggar)
```

### 💡 Analogi: Janji

Bayangkan saya berjanji:
> "**Jika kamu dapat nilai A**, **maka saya belikan laptop**"

| Nilai Kamu | Saya Belikan Laptop | Janji Saya |
|------------|---------------------|------------|
| A (T) | Ya (T) | ✅ Ditepati |
| A (T) | Tidak (F) | ❌ Dilanggar |
| Bukan A (F) | Ya (T) | ✅ Tidak dilanggar (bonus!) |
| Bukan A (F) | Tidak (F) | ✅ Tidak dilanggar (wajar) |

### Contoh Implikasi

```
1. "Jika saya belajar, maka saya lulus"
   p: "Saya belajar"
   q: "Saya lulus"
   p → q

2. "Jika 2 + 2 = 5, maka saya Superman"
   p: FALSE (2+2 ≠ 5)
   q: FALSE (saya bukan Superman)
   p → q = TRUE (implikasi tetap benar!)

3. "Jika Anda login, maka dashboard muncul"
   (Logika programming)
```

### Variasi Implikasi

Dari p → q, ada beberapa variasi:

| Jenis | Bentuk | Contoh |
|-------|--------|--------|
| **Implikasi** | p → q | Jika hujan → jalanan basah |
| **Konvers** | q → p | Jika jalanan basah → hujan |
| **Invers** | ¬p → ¬q | Jika tidak hujan → jalanan tidak basah |
| **Kontraposisi** | ¬q → ¬p | Jika jalanan tidak basah → tidak hujan |

**Penting:** Hanya **Implikasi** dan **Kontraposisi** yang selalu ekuivalen!

---

## ↔️ Biimplikasi (Biconditional): p ↔ q

### Definisi

**Simbol:** p ↔ q

**Dibaca:** "p jika dan hanya jika q" atau "p iff q" atau "p biconditional q"

**Arti:** p → q DAN q → p (implikasi dua arah)

### Tabel Kebenaran

| p | q | p ↔ q |
|---|---|-------|
| T | T | **T** |
| T | F | F |
| F | T | F |
| F | F | **T** |

**Aturan:** Benar jika p dan q **sama-sama TRUE** atau **sama-sama FALSE**

### Contoh Biimplikasi

```
1. "Segitiga sama sisi ↔ Semua sisinya sama panjang"
   (Keduanya harus TRUE atau FALSE bersamaan)

2. "Anda lulus ↔ Nilai Anda ≥ 60"
   (Definisi: lulus jika dan hanya jika nilai ≥ 60)

3. "Lampu nyala ↔ Saklar ON"
   (Hubungan dua arah yang ketat)
```

### Perbedaan → vs ↔

| Aspek | Implikasi (→) | Biimplikasi (↔) |
|-------|---------------|-----------------|
| Arah | Satu arah | Dua arah |
| TRUE ketika | p FALSE atau q TRUE | p dan q sama |
| Contoh | Jika hujan → basah | Lulus ↔ nilai ≥ 60 |
| Programming | if-then | if-then-else ketat |

**Visualisasi:**
```
Implikasi:     p ────────> q
Biimplikasi:   p <───────> q
```

---

## 📊 Tabel Kebenaran Lengkap - Semua Operator

| p | q | ¬p | ¬q | p∧q | p∨q | p⊕q | p→q | p↔q |
|---|---|----|----|-----|-----|-----|-----|-----|
| T | T | F | F | T | T | F | T | T |
| T | F | F | T | F | T | T | F | F |
| F | T | T | F | F | T | T | T | F |
| F | F | T | T | F | F | F | T | T |

---

## 🎯 Precedence (Urutan Prioritas) Operator

Seperti matematika (× sebelum +), logika juga punya urutan operasi:

### Urutan Prioritas (dari TINGGI ke RENDAH)

1. **¬** (NOT) - Prioritas tertinggi
2. **∧** (AND)
3. **∨** (OR)
4. **→** (Implikasi)
5. **↔** (Biimplikasi) - Prioritas terendah

### Aturan Kurung

Gunakan kurung **(  )** untuk mengubah urutan evaluasi

### Contoh Evaluasi

#### Contoh 1: Tanpa Kurung
```
p ∨ q ∧ r

Urutan evaluasi:
1. q ∧ r  (AND lebih prioritas dari OR)
2. p ∨ (q ∧ r)

Ekuivalen dengan: p ∨ (q ∧ r)
```

#### Contoh 2: Dengan Kurung
```
(p ∨ q) ∧ r

Urutan evaluasi:
1. p ∨ q  (kurung diprioritaskan)
2. (p ∨ q) ∧ r

Berbeda dengan contoh 1!
```

#### Contoh 3: Ekspresi Kompleks
```
¬p ∧ q ∨ r → s

Urutan evaluasi:
1. ¬p         (NOT dulu)
2. (¬p) ∧ q   (AND)
3. ((¬p) ∧ q) ∨ r  (OR)
4. (((¬p) ∧ q) ∨ r) → s  (Implikasi terakhir)
```

---

## 🧮 Membuat Tabel Kebenaran - Langkah Demi Langkah

### Contoh: (p ∨ q) → (p ∧ q)

**Langkah 1:** Identifikasi variabel
- Variabel: p, q
- Jumlah baris: 2² = 4

**Langkah 2:** Buat kolom untuk setiap sub-ekspresi
- p
- q
- p ∨ q
- p ∧ q
- (p ∨ q) → (p ∧ q)

**Langkah 3:** Isi nilai p dan q (semua kombinasi)

| p | q |
|---|---|
| T | T |
| T | F |
| F | T |
| F | F |

**Langkah 4:** Hitung sub-ekspresi

| p | q | p∨q | p∧q | (p∨q)→(p∧q) |
|---|---|-----|-----|-------------|
| T | T | T | T | T |
| T | F | T | F | F |
| F | T | T | F | F |
| F | F | F | F | T |

**Penjelasan Baris per Baris:**
- Baris 1: (T ∨ T) → (T ∧ T) = T → T = T
- Baris 2: (T ∨ F) → (T ∧ F) = T → F = F
- Baris 3: (F ∨ T) → (F ∧ T) = T → F = F
- Baris 4: (F ∨ F) → (F ∧ F) = F → F = T

---

## 🎯 Latihan Soal

### Soal 1: Evaluasi Implikasi

Diberikan:
- p: "Saya belajar" (TRUE)
- q: "Saya lulus" (FALSE)

Tentukan nilai kebenaran:
1. p → q
2. q → p
3. ¬p → q
4. ¬q → ¬p

<details>
<summary>Lihat Jawaban</summary>

1. p → q = T → F = **FALSE**
2. q → p = F → T = **TRUE**
3. ¬p → q = F → F = **TRUE**
4. ¬q → ¬p = T → F = **FALSE**

</details>

### Soal 2: Biimplikasi

Diberikan:
- p: "Hari ini Senin" (FALSE)
- q: "Besok Selasa" (FALSE)

Tentukan nilai:
1. p ↔ q
2. p → q
3. (p → q) ∧ (q → p)

<details>
<summary>Lihat Jawaban</summary>

1. p ↔ q = F ↔ F = **TRUE** (sama-sama FALSE)
2. p → q = F → F = **TRUE**
3. (p → q) ∧ (q → p) = T ∧ T = **TRUE**
   (Membuktikan: p ↔ q ≡ (p → q) ∧ (q → p))

</details>

### Soal 3: Buat Tabel Kebenaran

Buat tabel kebenaran untuk: (p → q) ∨ (q → p)

<details>
<summary>Lihat Jawaban</summary>

| p | q | p→q | q→p | (p→q)∨(q→p) |
|---|---|-----|-----|-------------|
| T | T | T | T | T |
| T | F | F | T | T |
| F | T | T | F | T |
| F | F | T | T | T |

**Kesimpulan:** Selalu TRUE (Tautologi!)

</details>

### Soal 4: Precedence

Berikan tanda kurung sesuai precedence:

1. ¬p ∨ q ∧ r
2. p → q ∨ r
3. p ∧ q → r ∨ s

<details>
<summary>Lihat Jawaban</summary>

1. (¬p) ∨ (q ∧ r)
2. p → (q ∨ r)
3. (p ∧ q) → (r ∨ s)

</details>

---

## 💻 Implementasi dalam Kode

### Contoh Program 1: Generator Tabel Kebenaran Lengkap

#### Python
```python
"""
Program: Generator Tabel Kebenaran Otomatis
Deskripsi: Membuat tabel kebenaran untuk semua operator logika
"""

from itertools import product

class TabelKebenaran:
    """Class untuk generate tabel kebenaran"""
    
    def __init__(self):
        self.operators = {
            'NOT p': lambda p, q: not p,
            'NOT q': lambda p, q: not q,
            'p AND q': lambda p, q: p and q,
            'p OR q': lambda p, q: p or q,
            'p XOR q': lambda p, q: p != q,
            'p → q': lambda p, q: (not p) or q,
            'p ↔ q': lambda p, q: p == q,
        }
    
    def simbol_operator(self, nama):
        """Konversi nama operator ke simbol"""
        konversi = {
            'NOT p': '¬p',
            'NOT q': '¬q',
            'p AND q': 'p∧q',
            'p OR q': 'p∨q',
            'p XOR q': 'p⊕q',
            'p → q': 'p→q',
            'p ↔ q': 'p↔q',
        }
        return konversi.get(nama, nama)
    
    def generate_kombinasi(self, num_vars=2):
        """Generate semua kombinasi nilai kebenaran"""
        return list(product([True, False], repeat=num_vars))
    
    def tampilkan_header(self, operators_list):
        """Tampilkan header tabel"""
        header = "| p | q |"
        for op in operators_list:
            simbol = self.simbol_operator(op)
            header += f" {simbol:^7} |"
        
        print("=" * (len(header) + 10))
        print("TABEL KEBENARAN LENGKAP")
        print("=" * (len(header) + 10))
        print(header)
        print("|" + "----|" * (len(operators_list) + 2))
    
    def bool_to_symbol(self, value):
        """Konversi boolean ke simbol T/F"""
        return 'T' if value else 'F'
    
    def tampilkan_baris(self, p, q, hasil_operator):
        """Tampilkan satu baris tabel"""
        baris = f"| {self.bool_to_symbol(p)} | {self.bool_to_symbol(q)} |"
        for nilai in hasil_operator:
            baris += f" {self.bool_to_symbol(nilai):^7} |"
        print(baris)
    
    def generate_tabel_lengkap(self):
        """Generate dan tampilkan tabel kebenaran lengkap"""
        kombinasi = self.generate_kombinasi(2)
        operators_list = list(self.operators.keys())
        
        self.tampilkan_header(operators_list)
        
        for p, q in kombinasi:
            hasil = [func(p, q) for func in self.operators.values()]
            self.tampilkan_baris(p, q, hasil)
        
        print("=" * 60)
    
    def generate_custom(self, ekspresi_nama, ekspresi_func):
        """Generate tabel kebenaran untuk ekspresi custom"""
        kombinasi = self.generate_kombinasi(2)
        
        print("\n" + "=" * 50)
        print(f"TABEL KEBENARAN: {ekspresi_nama}")
        print("=" * 50)
        print("| p | q | Hasil |")
        print("|---|---|-------|")
        
        for p, q in kombinasi:
            hasil = ekspresi_func(p, q)
            print(f"| {self.bool_to_symbol(p)} | {self.bool_to_symbol(q)} | {self.bool_to_symbol(hasil):^5} |")
        
        print("=" * 50)

def main():
    """Fungsi utama program"""
    print("\n" + "🔷" * 20)
    print("  GENERATOR TABEL KEBENARAN")
    print("🔷" * 20 + "\n")
    
    tabel = TabelKebenaran()
    
    # Generate tabel lengkap
    print("\n1. TABEL KEBENARAN SEMUA OPERATOR")
    tabel.generate_tabel_lengkap()
    
    # Contoh ekspresi custom
    print("\n2. TABEL KEBENARAN EKSPRESI CUSTOM")
    
    # (p → q) ∧ (q → p)
    tabel.generate_custom(
        "(p → q) ∧ (q → p)",
        lambda p, q: ((not p) or q) and ((not q) or p)
    )
    
    # (p ∨ q) → (p ∧ q)
    tabel.generate_custom(
        "(p ∨ q) → (p ∧ q)",
        lambda p, q: (not (p or q)) or (p and q)
    )
    
    # ¬(p ∧ q) ↔ (¬p ∨ ¬q) [Hukum De Morgan]
    tabel.generate_custom(
        "¬(p ∧ q) ↔ (¬p ∨ ¬q)",
        lambda p, q: (not (p and q)) == ((not p) or (not q))
    )

if __name__ == "__main__":
    main()
```

**Output Contoh:**
```
🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷
  GENERATOR TABEL KEBENARAN
🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷


1. TABEL KEBENARAN SEMUA OPERATOR
==================================================================
TABEL KEBENARAN LENGKAP
==================================================================
| p | q |   ¬p   |   ¬q   |  p∧q   |  p∨q   |  p⊕q   |  p→q   |  p↔q   |
|----|----|----|----|----|----|----|----|----|
| T | T |   F    |   F    |   T    |   T    |   F    |   T    |   T    |
| T | F |   F    |   T    |   F    |   T    |   T    |   F    |   F    |
| F | T |   T    |   F    |   F    |   T    |   T    |   T    |   F    |
| F | F |   T    |   T    |   F    |   F    |   F    |   T    |   T    |
==================================================================
```

---

#### Bahasa C
```c
/*
 * Program: Generator Tabel Kebenaran
 * Deskripsi: Membuat tabel kebenaran untuk semua operator logika
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>
#include <string.h>

// Fungsi untuk konversi boolean ke string
const char* bool_str(bool value) {
    return value ? "T" : "F";
}

// Fungsi operator logika
bool op_not(bool p) {
    return !p;
}

bool op_and(bool p, bool q) {
    return p && q;
}

bool op_or(bool p, bool q) {
    return p || q;
}

bool op_xor(bool p, bool q) {
    return (p || q) && !(p && q);
}

bool op_implication(bool p, bool q) {
    // p → q ≡ ¬p ∨ q
    return !p || q;
}

bool op_biconditional(bool p, bool q) {
    // p ↔ q ≡ (p → q) ∧ (q → p)
    return p == q;
}

// Fungsi untuk menampilkan header
void tampilkan_header() {
    printf("==================================================================\n");
    printf("                   TABEL KEBENARAN LENGKAP                        \n");
    printf("==================================================================\n");
    printf("| p | q | ¬p | ¬q | p∧q | p∨q | p⊕q | p→q | p↔q |\n");
    printf("|---|---|----|----|-----|-----|-----|-----|-----|\n");
}

// Fungsi untuk menampilkan satu baris tabel
void tampilkan_baris(bool p, bool q) {
    printf("| %s | %s ", bool_str(p), bool_str(q));
    printf("| %s  ", bool_str(op_not(p)));
    printf("| %s  ", bool_str(op_not(q)));
    printf("|  %s  ", bool_str(op_and(p, q)));
    printf("|  %s  ", bool_str(op_or(p, q)));
    printf("|  %s  ", bool_str(op_xor(p, q)));
    printf("|  %s  ", bool_str(op_implication(p, q)));
    printf("|  %s  |\n", bool_str(op_biconditional(p, q)));
}

// Fungsi untuk generate semua kombinasi
void generate_tabel_lengkap() {
    bool values[] = {true, false};
    
    tampilkan_header();
    
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            tampilkan_baris(values[i], values[j]);
        }
    }
    
    printf("==================================================================\n");
}

// Fungsi untuk menampilkan tabel custom
void tabel_custom(const char* nama_ekspresi, bool (*func)(bool, bool)) {
    printf("\n==================================================\n");
    printf("TABEL KEBENARAN: %s\n", nama_ekspresi);
    printf("==================================================\n");
    printf("| p | q | Hasil |\n");
    printf("|---|---|-------|\n");
    
    bool values[] = {true, false};
    
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            bool p = values[i];
            bool q = values[j];
            bool hasil = func(p, q);
            printf("| %s | %s |   %s   |\n", bool_str(p), bool_str(q), bool_str(hasil));
        }
    }
    
    printf("==================================================\n");
}

// Ekspresi custom: (p → q) ∧ (q → p)
bool ekspresi1(bool p, bool q) {
    return op_implication(p, q) && op_implication(q, p);
}

// Ekspresi custom: (p ∨ q) → (p ∧ q)
bool ekspresi2(bool p, bool q) {
    return op_implication(op_or(p, q), op_and(p, q));
}

// Ekspresi custom: ¬(p ∧ q) ↔ (¬p ∨ ¬q) [De Morgan]
bool ekspresi3(bool p, bool q) {
    return op_biconditional(!op_and(p, q), op_or(!p, !q));
}

int main() {
    printf("\n");
    printf("==================================================\n");
    printf("       GENERATOR TABEL KEBENARAN\n");
    printf("==================================================\n\n");
    
    // Tabel lengkap semua operator
    printf("1. TABEL KEBENARAN SEMUA OPERATOR\n\n");
    generate_tabel_lengkap();
    
    // Tabel untuk ekspresi custom
    printf("\n2. TABEL KEBENARAN EKSPRESI CUSTOM\n");
    
    tabel_custom("(p → q) ∧ (q → p)", ekspresi1);
    tabel_custom("(p ∨ q) → (p ∧ q)", ekspresi2);
    tabel_custom("¬(p ∧ q) ↔ (¬p ∨ ¬q)", ekspresi3);
    
    printf("\n");
    return 0;
}
```

**Cara Compile dan Run:**
```bash
# Linux/Mac
gcc -o tabel_kebenaran tabel_kebenaran.c
./tabel_kebenaran

# Windows
gcc -o tabel_kebenaran.exe tabel_kebenaran.c
tabel_kebenaran.exe
```

---

### Contoh Program 2: Validator Implikasi (If-Then Logic)

#### Python
```python
"""
Program: Validator Logika If-Then
Deskripsi: Mengecek validitas statement implikasi dalam berbagai konteks
"""

class ImplicationValidator:
    """Class untuk validasi implikasi"""
    
    def __init__(self):
        self.test_cases = []
    
    def evaluasi_implikasi(self, p, q, konteks_p, konteks_q):
        """
        Evaluasi implikasi p → q
        
        Args:
            p (bool): Nilai antecedent
            q (bool): Nilai consequent
            konteks_p (str): Deskripsi kondisi p
            konteks_q (str): Deskripsi kondisi q
        
        Returns:
            dict: Hasil evaluasi
        """
        # p → q ≡ ¬p ∨ q
        hasil = (not p) or q
        
        # Tentukan status
        if p and q:
            status = "✓ VALID - Antecedent dan consequent keduanya benar"
            emoji = "😊"
        elif p and not q:
            status = "✗ INVALID - Antecedent benar tapi consequent salah!"
            emoji = "😞"
        elif not p and q:
            status = "✓ VALID - Antecedent salah, consequent benar (tidak melanggar)"
            emoji = "😐"
        else:  # not p and not q
            status = "✓ VALID - Antecedent salah, tidak ada janji dilanggar"
            emoji = "😌"
        
        return {
            'p': p,
            'q': q,
            'konteks_p': konteks_p,
            'konteks_q': konteks_q,
            'hasil': hasil,
            'status': status,
            'emoji': emoji
        }
    
    def tampilkan_hasil(self, evaluasi):
        """Tampilkan hasil evaluasi"""
        print("\n" + "=" * 60)
        print(f"EVALUASI IMPLIKASI {evaluasi['emoji']}")
        print("=" * 60)
        print(f"Kondisi P: {evaluasi['konteks_p']}")
        print(f"Nilai P:   {evaluasi['p']}")
        print("-" * 60)
        print(f"Kondisi Q: {evaluasi['konteks_q']}")
        print(f"Nilai Q:   {evaluasi['q']}")
        print("-" * 60)
        print(f"p → q:     {evaluasi['hasil']}")
        print(f"Status:    {evaluasi['status']}")
        print("=" * 60)

def demo_implikasi_programming():
    """Demo implikasi dalam konteks programming"""
    print("\n" + "🔶" * 30)
    print("  DEMO: IMPLIKASI DALAM PROGRAMMING")
    print("🔶" * 30)
    
    validator = ImplicationValidator()
    
    # Case 1: User Authentication
    print("\n📌 CASE 1: Autentikasi User")
    print("Statement: 'Jika user login, maka dashboard muncul'")
    
    user_login = True
    dashboard_muncul = True
    
    hasil = validator.evaluasi_implikasi(
        user_login, 
        dashboard_muncul,
        "User berhasil login",
        "Dashboard ditampilkan"
    )
    validator.tampilkan_hasil(hasil)
    
    # Case 2: File Upload
    print("\n📌 CASE 2: Validasi File Upload")
    print("Statement: 'Jika file valid, maka upload berhasil'")
    
    file_valid = True
    upload_berhasil = False  # Bug: file valid tapi upload gagal!
    
    hasil = validator.evaluasi_implikasi(
        file_valid,
        upload_berhasil,
        "File format valid",
        "Upload ke server berhasil"
    )
    validator.tampilkan_hasil(hasil)
    
    # Case 3: Payment Processing
    print("\n📌 CASE 3: Proses Pembayaran")
    print("Statement: 'Jika saldo cukup, maka transaksi diproses'")
    
    saldo_cukup = False
    transaksi_diproses = False
    
    hasil = validator.evaluasi_implikasi(
        saldo_cukup,
        transaksi_diproses,
        "Saldo mencukupi",
        "Transaksi diproses"
    )
    validator.tampilkan_hasil(hasil)

def demo_implikasi_matematika():
    """Demo implikasi dalam konteks matematika"""
    print("\n" + "🔶" * 30)
    print("  DEMO: IMPLIKASI DALAM MATEMATIKA")
    print("🔶" * 30)
    
    validator = ImplicationValidator()
    
    # Case 1: Bilangan prima
    print("\n📌 CASE 1: Teorema Bilangan Prima")
    print("Statement: 'Jika n > 2 dan n prima, maka n ganjil'")
    
    n = 7
    n_lebih_2_dan_prima = (n > 2) and (n == 7)  # 7 adalah prima
    n_ganjil = (n % 2 != 0)
    
    hasil = validator.evaluasi_implikasi(
        n_lebih_2_dan_prima,
        n_ganjil,
        f"n = {n}, n > 2 dan n prima",
        f"n = {n} adalah ganjil"
    )
    validator.tampilkan_hasil(hasil)

def main():
    """Fungsi utama"""
    print("\n" + "=" * 60)
    print("    VALIDATOR IMPLIKASI (IF-THEN LOGIC)")
    print("=" * 60)
    
    demo_implikasi_programming()
    demo_implikasi_matematika()
    
    print("\n" + "=" * 60)
    print("✓ Demo selesai!")
    print("=" * 60 + "\n")

if __name__ == "__main__":
    main()
```

---

### Contoh Program 3: Sistem Rekomendasi dengan Biimplikasi

#### Python
```python
"""
Program: Sistem Rekomendasi Produk
Deskripsi: Menggunakan biimplikasi untuk matching preferensi
"""

class SistemRekomendasi:
    """Sistem rekomendasi menggunakan logika biimplikasi"""
    
    def __init__(self):
        self.produk_database = [
            {"id": 1, "nama": "Laptop Gaming", "mahal": True, "performa_tinggi": True},
            {"id": 2, "nama": "Laptop Office", "mahal": False, "performa_tinggi": False},
            {"id": 3, "nama": "Laptop Budget", "mahal": False, "performa_tinggi": True},
            {"id": 4, "nama": "Laptop Premium", "mahal": True, "performa_tinggi": False},
        ]
    
    def biconditional(self, p, q):
        """Evaluasi biimplikasi: p ↔ q"""
        return p == q
    
    def hitung_match_score(self, preferensi, produk):
        """
        Hitung skor kecocokan menggunakan biimplikasi
        Semakin banyak attribut yang cocok, semakin tinggi skor
        """
        score = 0
        total_attribut = 0
        
        for key in preferensi:
            if key in produk and key != 'id' and key != 'nama':
                total_attribut += 1
                # Biimplikasi: cocok jika nilai sama
                if self.biconditional(preferensi[key], produk[key]):
                    score += 1
        
        return (score / total_attribut * 100) if total_attribut > 0 else 0
    
    def rekomendasi(self, preferensi_user):
        """Berikan rekomendasi berdasarkan preferensi"""
        print("\n" + "=" * 60)
        print("SISTEM REKOMENDASI PRODUK")
        print("=" * 60)
        print("\nPreferensi Anda:")
        print(f"  - Produk mahal: {'Ya' if preferensi_user['mahal'] else 'Tidak'}")
        print(f"  - Performa tinggi: {'Ya' if preferensi_user['performa_tinggi'] else 'Tidak'}")
        print("\n" + "-" * 60)
        print("HASIL ANALISIS:")
        print("-" * 60)
        
        hasil_analisis = []
        
        for produk in self.produk_database:
            score = self.hitung_match_score(preferensi_user, produk)
            
            # Analisis per attribut
            match_mahal = self.biconditional(
                preferensi_user['mahal'], 
                produk['mahal']
            )
            match_performa = self.biconditional(
                preferensi_user['performa_tinggi'],
                produk['performa_tinggi']
            )
            
            hasil_analisis.append({
                'produk': produk,
                'score': score,
                'match_mahal': match_mahal,
                'match_performa': match_performa
            })
        
        # Sort berdasarkan score
        hasil_analisis.sort(key=lambda x: x['score'], reverse=True)
        
        # Tampilkan hasil
        for i, hasil in enumerate(hasil_analisis, 1):
            produk = hasil['produk']
            print(f"\n{i}. {produk['nama']}")
            print(f"   Match Score: {hasil['score']:.0f}%")
            print(f"   Harga ↔ Preferensi: {hasil['match_mahal']} {'✓' if hasil['match_mahal'] else '✗'}")
            print(f"   Performa ↔ Preferensi: {hasil['match_performa']} {'✓' if hasil['match_performa'] else '✗'}")
            
            if hasil['score'] == 100:
                print(f"   🌟 PERFECT MATCH!")
            elif hasil['score'] >= 50:
                print(f"   ⭐ Recommended")
        
        print("\n" + "=" * 60)
        
        return hasil_analisis[0]['produk']  # Return top recommendation

def main():
    """Fungsi utama"""
    sistem = SistemRekomendasi()
    
    print("\n" + "🛒" * 30)
    print("  SISTEM REKOMENDASI PRODUK")
    print("  (Menggunakan Logika Biimplikasi)")
    print("🛒" * 30)
    
    # Input preferensi user
    print("\nMasukkan preferensi Anda:")
    
    while True:
        budget = input("Apakah Anda menginginkan produk mahal? (y/n): ").lower()
        if budget in ['y', 'n']:
            mahal = (budget == 'y')
            break
        print("Input tidak valid! Gunakan 'y' atau 'n'")
    
    while True:
        performa = input("Apakah Anda butuh performa tinggi? (y/n): ").lower()
        if performa in ['y', 'n']:
            performa_tinggi = (performa == 'y')
            break
        print("Input tidak valid! Gunakan 'y' atau 'n'")
    
    preferensi = {
        'mahal': mahal,
        'performa_tinggi': performa_tinggi
    }
    
    # Dapatkan rekomendasi
    rekomendasi = sistem.rekomendasi(preferensi)
    
    print(f"\n🎯 REKOMENDASI TERBAIK: {rekomendasi['nama']}")
    print("\nTerima kasih telah menggunakan sistem kami!\n")

if __name__ == "__main__":
    main()
```

---

## 🎓 Rangkuman

### Poin Penting Bab Ini:

1. ✅ **Tabel Kebenaran**
   - Jumlah baris = 2ⁿ (n = jumlah variabel)
   - Menampilkan semua kemungkinan kombinasi

2. ✅ **Implikasi (p → q)**
   - FALSE hanya jika p TRUE tapi q FALSE
   - Berguna untuk logika "if-then"

3. ✅ **Biimplikasi (p ↔ q)**
   - TRUE jika p dan q memiliki nilai sama
   - Ekuivalen dengan (p → q) ∧ (q → p)

4. ✅ **Precedence Operator**
   - ¬ > ∧ > ∨ > → > ↔
   - Gunakan kurung untuk mengubah urutan

### Tabel Referensi Cepat

| Operator | Simbol | Kapan TRUE? | Contoh |
|----------|--------|-------------|--------|
| NOT | ¬ | Kebalikan | ¬T = F |
| AND | ∧ | Kedua TRUE | T∧T = T |
| OR | ∨ | Min. 1 TRUE | T∨F = T |
| XOR | ⊕ | Hanya 1 TRUE | T⊕T = F |
| Implikasi | → | Kecuali T→F | F→F = T |
| Biimplikasi | ↔ | Nilai sama | T↔T = T |

---

## 🚀 Selanjutnya

Di [Bab 4](./04-ekuivalensi-logika-1.md), kita akan mempelajari:
- 🔄 **Ekuivalensi Logika**
- 📜 **Hukum-hukum Logika** (De Morgan, Distributif, dll)
- 🎯 **Tautologi dan Kontradiksi**
- 🧮 **Penyederhanaan Ekspresi**

---

## 📚 Referensi

- Rosen, K. H. (2019). *Discrete Mathematics and Its Applications* (Ch. 1.1-1.3)
- [Truth Table Generator](https://web.stanford.edu/class/cs103/tools/truth-table-tool/)
- [Logic Calculator](https://www.erpelstolz.at/gateway/TruthTable.html)

---

**Selamat! Anda sudah menguasai dasar-dasar logika!** 🎉

← [Bab 2: Dasar Logika (Bagian 1)](./02-dasar-logika-1.md) | [Bab 4: Ekuivalensi Logika (Bagian 1)](./04-ekuivalensi-logika-1.md) →
