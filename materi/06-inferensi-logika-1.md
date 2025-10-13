# 🔍 Bab 6: Inferensi Logika (Bagian 1)

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Memahami konsep argumen dalam logika
- ✅ Membedakan argumen valid dan invalid
- ✅ Mengenal aturan-aturan inferensi
- ✅ Menerapkan Modus Ponens dan Modus Tollens
- ✅ Membangun argumen logis yang benar

---

## 🎯 Apa itu Inferensi Logika?

> **Inferensi Logika** adalah proses menarik **kesimpulan** dari sekumpulan **premis** menggunakan aturan-aturan logika yang valid.

### Komponen Argumen

**Argumen** terdiri dari:
1. **Premis (Premises)**: Proposisi yang dianggap benar (asumsi)
2. **Kesimpulan (Conclusion)**: Proposisi yang ditarik dari premis

**Notasi:**
```
Premis 1: p₁
Premis 2: p₂
...
Premis n: pₙ
─────────────
∴ Kesimpulan: q
```

Simbol **∴** dibaca "oleh karena itu" atau "therefore"

---

## 💡 Argumen Valid vs Invalid

### Argumen Valid ✅

> **Argumen Valid**: Jika **semua premis BENAR**, maka **kesimpulan PASTI BENAR**.

**Contoh Argumen Valid:**
```
Premis 1: Semua manusia adalah makhluk hidup
Premis 2: Sokrates adalah manusia
─────────────────────────────────────────
∴ Sokrates adalah makhluk hidup
```

**Dalam logika simbolik:**
```
Premis 1: p → q    (Jika p maka q)
Premis 2: p        (p benar)
─────────────────
∴ q                (Maka q benar)
```

### Argumen Invalid ❌

> **Argumen Invalid**: Meskipun **semua premis BENAR**, **kesimpulan bisa SALAH**.

**Contoh Argumen Invalid:**
```
Premis 1: Jika hujan, jalanan basah
Premis 2: Jalanan basah
────────────────────────────────
∴ Hujan (SALAH! Bisa ada yang nyiram)
```

**Dalam logika simbolik:**
```
Premis 1: p → q
Premis 2: q
─────────────
∴ p (INVALID!)
```

---

## ⚠️ Kesalahan Logika Umum (Logical Fallacies)

### 1. **Affirming the Consequent** ❌

**Bentuk:**
```
p → q
q
───
∴ p (INVALID!)
```

**Contoh:**
```
"Jika dia belajar keras, dia lulus"
"Dia lulus"
────────────────────────────────
∴ "Dia belajar keras" (SALAH! Bisa saja beruntung)
```

### 2. **Denying the Antecedent** ❌

**Bentuk:**
```
p → q
¬p
───
∴ ¬q (INVALID!)
```

**Contoh:**
```
"Jika hujan, jalanan basah"
"Tidak hujan"
───────────────────────────
∴ "Jalanan tidak basah" (SALAH! Bisa ada yang nyiram)
```

---

## 📜 Aturan-Aturan Inferensi (Rules of Inference)

### 1. **Modus Ponens (MP)** ✅

> Aturan paling fundamental dalam logika!

**Bentuk:**
```
p → q
p
─────
∴ q
```

**Nama:** "Mode yang menegaskan" (affirming mode)

**Penjelasan:**
- Jika **"p implies q"** BENAR
- Dan **p** BENAR
- Maka **q** PASTI BENAR

**Contoh 1: Kehidupan Sehari-hari**
```
"Jika saya belajar keras, saya lulus"
"Saya belajar keras"
────────────────────────────────────
∴ "Saya lulus"
```

**Contoh 2: Programming**
```python
# Premis 1: Jika password benar, login berhasil
# Premis 2: Password benar
# Kesimpulan: Login berhasil

if password_correct:  # p → q
    login_success()
    
password_correct = True  # p
# Maka: login_success akan dijalankan (q)
```

**Contoh 3: Matematika**
```
"Jika n habis dibagi 2, maka n adalah bilangan genap"
"n habis dibagi 2"
─────────────────────────────────────────────────────
∴ "n adalah bilangan genap"
```

---

### 2. **Modus Tollens (MT)** ✅

**Bentuk:**
```
p → q
¬q
─────
∴ ¬p
```

**Nama:** "Mode yang menyangkal" (denying mode)

**Penjelasan:**
- Jika **"p implies q"** BENAR
- Dan **q** SALAH (¬q)
- Maka **p** PASTI SALAH (¬p)

**Contoh 1: Kehidupan Sehari-hari**
```
"Jika hujan, jalanan basah"
"Jalanan TIDAK basah"
───────────────────────────
∴ "TIDAK hujan"
```

**Contoh 2: Programming - Debugging**
```python
# Premis 1: Jika kode benar, tidak ada error
# Premis 2: Ada error
# Kesimpulan: Kode tidak benar

def check_code():
    if has_error:  # ¬q
        return "Code is incorrect"  # ∴ ¬p
```

**Contoh 3: Detektif**
```
"Jika Ali pelakunya, maka alibi Ali tidak valid"
"Alibi Ali VALID"
──────────────────────────────────────────────
∴ "Ali BUKAN pelakunya"
```

---

### 3. **Hypothetical Syllogism (HS)** ✅

**Bentuk:**
```
p → q
q → r
─────
∴ p → r
```

**Nama:** Silogisme hipotetis atau **transitif**

**Penjelasan:**
- Jika p mengimplikasikan q
- Dan q mengimplikasikan r
- Maka p mengimplikasikan r (rantai implikasi)

**Contoh 1: Kehidupan Sehari-hari**
```
"Jika belajar, maka pintar"
"Jika pintar, maka sukses"
──────────────────────────
∴ "Jika belajar, maka sukses"
```

**Contoh 2: Matematika**
```
"Jika x > y, maka x - y > 0"
"Jika x - y > 0, maka (x - y)² > 0"
────────────────────────────────────
∴ "Jika x > y, maka (x - y)² > 0"
```

**Contoh 3: Sistem**
```
"Jika user login, maka session dibuat"
"Jika session dibuat, maka dashboard dimuat"
────────────────────────────────────────────
∴ "Jika user login, maka dashboard dimuat"
```

---

### 4. **Disjunctive Syllogism (DS)** ✅

**Bentuk:**
```
p ∨ q
¬p
─────
∴ q
```

**Penjelasan:**
- Jika **p ATAU q** BENAR
- Dan **p** SALAH
- Maka **q** PASTI BENAR

**Contoh 1: Kehidupan Sehari-hari**
```
"Hari ini Senin ATAU Selasa"
"Hari ini BUKAN Senin"
───────────────────────────
∴ "Hari ini Selasa"
```

**Contoh 2: Troubleshooting**
```
"Masalah di hardware ATAU software"
"Bukan masalah hardware"
──────────────────────────────────
∴ "Masalah di software"
```

**Contoh 3: Game**
```
"Player menang ATAU kalah"
"Player TIDAK menang"
─────────────────────────
∴ "Player kalah"
```

---

### 5. **Addition (ADD)** ✅

**Bentuk:**
```
p
─────
∴ p ∨ q
```

**Penjelasan:**
- Jika **p** BENAR
- Maka **p ATAU apapun** BENAR

**Contoh:**
```
"Hari ini hujan"
────────────────────────────
∴ "Hari ini hujan ATAU cerah"
```

*Note: Jarang digunakan dalam praktik, tapi penting secara teoritis*

---

### 6. **Simplification (SIMP)** ✅

**Bentuk:**
```
p ∧ q
─────
∴ p
```

**Penjelasan:**
- Jika **p DAN q** BENAR
- Maka **p** PASTI BENAR (begitu juga q)

**Contoh 1: Fakta**
```
"Hari ini hujan DAN berangin"
─────────────────────────────
∴ "Hari ini hujan"
```

**Contoh 2: Programming**
```python
# Premis: User sudah login DAN punya akses
if logged_in and has_access:  # p ∧ q
    # Kita bisa simpulkan:
    assert logged_in  # p (simplifikasi)
```

---

### 7. **Conjunction (CONJ)** ✅

**Bentuk:**
```
p
q
─────
∴ p ∧ q
```

**Penjelasan:**
- Jika **p** BENAR
- Dan **q** BENAR
- Maka **p DAN q** BENAR

**Contoh:**
```
"Saya belajar"
"Saya lulus"
──────────────
∴ "Saya belajar DAN lulus"
```

---

### 8. **Resolution (RES)** ✅

**Bentuk:**
```
p ∨ q
¬p ∨ r
──────
∴ q ∨ r
```

**Penjelasan:**
- Menggabungkan dua disjungsi yang memiliki literal berlawanan

**Contoh:**
```
"A ATAU B"
"TIDAK A ATAU C"
────────────────
∴ "B ATAU C"
```

---

## 📊 Tabel Ringkasan Aturan Inferensi

| No | Nama | Bentuk | Contoh |
|----|------|--------|--------|
| 1 | **Modus Ponens** | p → q, p ∴ q | Jika belajar→lulus, belajar ∴ lulus |
| 2 | **Modus Tollens** | p → q, ¬q ∴ ¬p | Jika hujan→basah, ¬basah ∴ ¬hujan |
| 3 | **Hypothetical Syllogism** | p → q, q → r ∴ p → r | A→B, B→C ∴ A→C |
| 4 | **Disjunctive Syllogism** | p ∨ q, ¬p ∴ q | A∨B, ¬A ∴ B |
| 5 | **Addition** | p ∴ p ∨ q | Hujan ∴ Hujan∨Cerah |
| 6 | **Simplification** | p ∧ q ∴ p | Hujan∧Angin ∴ Hujan |
| 7 | **Conjunction** | p, q ∴ p ∧ q | A, B ∴ A∧B |
| 8 | **Resolution** | p ∨ q, ¬p ∨ r ∴ q ∨ r | A∨B, ¬A∨C ∴ B∨C |

---

## 🎯 Contoh Pembuktian Formal

### Contoh 1: Pembuktian Sederhana

**Diberikan:**
```
Premis 1: p → q
Premis 2: q → r
Premis 3: p
Buktikan: r
```

**Pembuktian:**
```
1. p → q          (Premis 1)
2. q → r          (Premis 2)
3. p              (Premis 3)
4. p → r          (Hypothetical Syllogism: 1, 2)
5. r              (Modus Ponens: 4, 3) ✅
```

---

### Contoh 2: Pembuktian dengan Negasi

**Diberikan:**
```
Premis 1: p → q
Premis 2: ¬q
Premis 3: p ∨ r
Buktikan: r
```

**Pembuktian:**
```
1. p → q          (Premis 1)
2. ¬q             (Premis 2)
3. p ∨ r          (Premis 3)
4. ¬p             (Modus Tollens: 1, 2)
5. r              (Disjunctive Syllogism: 3, 4) ✅
```

---

### Contoh 3: Kasus Nyata - Sistem Login

**Skenario:**
```
Premis 1: Jika password benar, maka autentikasi sukses
Premis 2: Jika autentikasi sukses, maka dashboard dimuat
Premis 3: Dashboard TIDAK dimuat
Buktikan: Password TIDAK benar
```

**Dalam logika:**
```
p: Password benar
q: Autentikasi sukses
r: Dashboard dimuat

Premis 1: p → q
Premis 2: q → r
Premis 3: ¬r
Buktikan: ¬p
```

**Pembuktian:**
```
1. p → q          (Premis 1)
2. q → r          (Premis 2)
3. ¬r             (Premis 3)
4. p → r          (Hypothetical Syllogism: 1, 2)
5. ¬p             (Modus Tollens: 4, 3) ✅

Kesimpulan: Password TIDAK benar!
```

---

## 💻 Implementasi dalam Kode

### Contoh Program 1: Validator Aturan Inferensi

#### Python
```python
"""
Program: Validator Aturan Inferensi
Deskripsi: Memvalidasi berbagai aturan inferensi logika
"""

class InferenceValidator:
    """Class untuk memvalidasi aturan-aturan inferensi"""
    
    def __init__(self):
        self.hasil_validasi = []
    
    def implikasi(self, p, q):
        """Evaluasi p → q"""
        return (not p) or q
    
    def modus_ponens(self, p_implies_q, p, q):
        """
        Validasi Modus Ponens: p → q, p ∴ q
        
        Args:
            p_implies_q: Nilai kebenaran (p → q)
            p: Nilai kebenaran p
            q: Nilai kebenaran q (kesimpulan yang diklaim)
        
        Returns:
            bool: True jika argumen valid
        """
        print("\n" + "=" * 70)
        print("VALIDASI MODUS PONENS")
        print("=" * 70)
        print(f"Premis 1: p → q = {p_implies_q}")
        print(f"Premis 2: p = {p}")
        print(f"Kesimpulan: q = {q}")
        print("-" * 70)
        
        # Cek validitas
        if p_implies_q and p:
            # Jika kedua premis TRUE, kesimpulan HARUS TRUE
            valid = (q == True)
            if valid:
                print("✅ VALID: Modus Ponens terpenuhi")
                print("   Karena (p → q) TRUE dan p TRUE, maka q HARUS TRUE")
            else:
                print("❌ INVALID: Kesimpulan salah!")
                print("   Jika (p → q) TRUE dan p TRUE, maka q HARUS TRUE")
        else:
            print("⚠️  Premis tidak memenuhi syarat Modus Ponens")
            valid = None
        
        print("=" * 70)
        return valid
    
    def modus_tollens(self, p_implies_q, not_q, not_p):
        """
        Validasi Modus Tollens: p → q, ¬q ∴ ¬p
        
        Args:
            p_implies_q: Nilai kebenaran (p → q)
            not_q: Nilai kebenaran ¬q
            not_p: Nilai kebenaran ¬p (kesimpulan yang diklaim)
        
        Returns:
            bool: True jika argumen valid
        """
        print("\n" + "=" * 70)
        print("VALIDASI MODUS TOLLENS")
        print("=" * 70)
        print(f"Premis 1: p → q = {p_implies_q}")
        print(f"Premis 2: ¬q = {not_q}")
        print(f"Kesimpulan: ¬p = {not_p}")
        print("-" * 70)
        
        # Cek validitas
        if p_implies_q and not_q:
            # Jika kedua premis TRUE, kesimpulan HARUS TRUE
            valid = (not_p == True)
            if valid:
                print("✅ VALID: Modus Tollens terpenuhi")
                print("   Karena (p → q) TRUE dan ¬q TRUE, maka ¬p HARUS TRUE")
            else:
                print("❌ INVALID: Kesimpulan salah!")
                print("   Jika (p → q) TRUE dan ¬q TRUE, maka ¬p HARUS TRUE")
        else:
            print("⚠️  Premis tidak memenuhi syarat Modus Tollens")
            valid = None
        
        print("=" * 70)
        return valid
    
    def hypothetical_syllogism(self, p_implies_q, q_implies_r, p_implies_r):
        """
        Validasi Hypothetical Syllogism: p → q, q → r ∴ p → r
        """
        print("\n" + "=" * 70)
        print("VALIDASI HYPOTHETICAL SYLLOGISM")
        print("=" * 70)
        print(f"Premis 1: p → q = {p_implies_q}")
        print(f"Premis 2: q → r = {q_implies_r}")
        print(f"Kesimpulan: p → r = {p_implies_r}")
        print("-" * 70)
        
        if p_implies_q and q_implies_r:
            valid = (p_implies_r == True)
            if valid:
                print("✅ VALID: Hypothetical Syllogism terpenuhi")
                print("   Karena (p → q) dan (q → r) TRUE, maka (p → r) HARUS TRUE")
            else:
                print("❌ INVALID: Kesimpulan salah!")
        else:
            print("⚠️  Premis tidak memenuhi syarat")
            valid = None
        
        print("=" * 70)
        return valid
    
    def disjunctive_syllogism(self, p_or_q, not_p, q):
        """
        Validasi Disjunctive Syllogism: p ∨ q, ¬p ∴ q
        """
        print("\n" + "=" * 70)
        print("VALIDASI DISJUNCTIVE SYLLOGISM")
        print("=" * 70)
        print(f"Premis 1: p ∨ q = {p_or_q}")
        print(f"Premis 2: ¬p = {not_p}")
        print(f"Kesimpulan: q = {q}")
        print("-" * 70)
        
        if p_or_q and not_p:
            valid = (q == True)
            if valid:
                print("✅ VALID: Disjunctive Syllogism terpenuhi")
                print("   Karena (p ∨ q) TRUE dan ¬p TRUE, maka q HARUS TRUE")
            else:
                print("❌ INVALID: Kesimpulan salah!")
        else:
            print("⚠️  Premis tidak memenuhi syarat")
            valid = None
        
        print("=" * 70)
        return valid

def demo_modus_ponens():
    """Demo Modus Ponens dengan berbagai kasus"""
    print("\n" + "🔷" * 35)
    print("  DEMO: MODUS PONENS")
    print("🔷" * 35)
    
    validator = InferenceValidator()
    
    # Kasus 1: Valid
    print("\n📌 KASUS 1: Argumen Valid")
    print("Konteks: 'Jika belajar maka lulus'")
    p = True   # Belajar
    q = True   # Lulus
    p_implies_q = validator.implikasi(p, q)
    validator.modus_ponens(p_implies_q, p, q)
    
    # Kasus 2: Invalid (Affirming the Consequent)
    print("\n📌 KASUS 2: Kesalahan Logika - Affirming the Consequent")
    print("Konteks: 'Jika belajar maka lulus, Lulus, Jadi belajar?' ❌")
    p = False  # Tidak belajar (tapi tetap lulus)
    q = True   # Lulus (bisa karena beruntung)
    p_implies_q = validator.implikasi(p, q)
    # Ini bukan Modus Ponens! Ini kesalahan logika
    print("\n⚠️  INI BUKAN MODUS PONENS!")
    print("Ini adalah kesalahan 'Affirming the Consequent'")
    print(f"p → q = {p_implies_q}, q = {q}, tapi p = {p}")
    print("Tidak bisa simpulkan p dari q!")

def demo_modus_tollens():
    """Demo Modus Tollens dengan berbagai kasus"""
    print("\n" + "🔷" * 35)
    print("  DEMO: MODUS TOLLENS")
    print("🔷" * 35)
    
    validator = InferenceValidator()
    
    # Kasus 1: Valid
    print("\n📌 KASUS 1: Argumen Valid")
    print("Konteks: 'Jika hujan maka basah, Tidak basah, Jadi tidak hujan'")
    p = False  # Tidak hujan
    q = False  # Tidak basah
    p_implies_q = validator.implikasi(p, q)
    not_q = not q
    not_p = not p
    validator.modus_tollens(p_implies_q, not_q, not_p)
    
    # Kasus 2: Invalid (Denying the Antecedent)
    print("\n📌 KASUS 2: Kesalahan Logika - Denying the Antecedent")
    print("Konteks: 'Jika hujan maka basah, Tidak hujan, Jadi tidak basah?' ❌")
    print("\n⚠️  INI BUKAN MODUS TOLLENS!")
    print("Ini adalah kesalahan 'Denying the Antecedent'")
    print("Tidak hujan tidak berarti tidak basah (bisa ada yang nyiram)")

def demo_sistem_diagnosis():
    """Demo sistem diagnosis menggunakan aturan inferensi"""
    print("\n" + "🔷" * 35)
    print("  DEMO: SISTEM DIAGNOSIS PENYAKIT")
    print("🔷" * 35)
    
    validator = InferenceValidator()
    
    print("\n📋 Aturan Diagnosis:")
    print("  R1: Jika (demam DAN batuk) → Flu")
    print("  R2: Jika Flu → Istirahat")
    
    # Gejala pasien
    print("\n🏥 Gejala Pasien:")
    demam = True
    batuk = True
    print(f"  - Demam: {demam}")
    print(f"  - Batuk: {batuk}")
    
    # Langkah 1: Cek kondisi untuk flu
    kondisi_flu = demam and batuk
    flu = kondisi_flu  # Jika kondisi terpenuhi
    
    print("\n🔍 Proses Inferensi:")
    print(f"  1. (Demam ∧ Batuk) = {kondisi_flu}")
    
    # Modus Ponens 1: kondisi → flu
    if kondisi_flu:
        print(f"  2. Modus Ponens: Kondisi TRUE → Flu = TRUE")
        flu = True
    
    # Modus Ponens 2: flu → istirahat
    if flu:
        print(f"  3. Modus Ponens: Flu TRUE → Istirahat = TRUE")
        istirahat = True
    
    print("\n✅ KESIMPULAN:")
    print(f"  Diagnosis: Flu = {flu}")
    print(f"  Rekomendasi: Istirahat = {istirahat}")

def main():
    """Fungsi utama"""
    print("\n" + "=" * 70)
    print("  VALIDATOR ATURAN INFERENSI")
    print("=" * 70)
    
    demo_modus_ponens()
    demo_modus_tollens()
    demo_sistem_diagnosis()
    
    print("\n" + "=" * 70)
    print("✓ Semua demo selesai!")
    print("=" * 70 + "\n")

if __name__ == "__main__":
    main()
```

**Output Contoh:**
```
🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷
  DEMO: MODUS PONENS
🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷

📌 KASUS 1: Argumen Valid
Konteks: 'Jika belajar maka lulus'

======================================================================
VALIDASI MODUS PONENS
======================================================================
Premis 1: p → q = True
Premis 2: p = True
Kesimpulan: q = True
----------------------------------------------------------------------
✅ VALID: Modus Ponens terpenuhi
   Karena (p → q) TRUE dan p TRUE, maka q HARUS TRUE
======================================================================
```

---

#### Bahasa C
```c
/*
 * Program: Validator Aturan Inferensi
 * Deskripsi: Implementasi validator untuk aturan inferensi dasar
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>
#include <string.h>

// Fungsi helper untuk implikasi
bool implikasi(bool p, bool q) {
    return !p || q;
}

// Fungsi untuk konversi boolean ke string
const char* bool_str(bool value) {
    return value ? "TRUE" : "FALSE";
}

// Validator Modus Ponens: p → q, p ∴ q
bool validate_modus_ponens(bool p_implies_q, bool p, bool q) {
    printf("\n");
    printf("======================================================================\n");
    printf("VALIDASI MODUS PONENS\n");
    printf("======================================================================\n");
    printf("Premis 1: p → q = %s\n", bool_str(p_implies_q));
    printf("Premis 2: p = %s\n", bool_str(p));
    printf("Kesimpulan: q = %s\n", bool_str(q));
    printf("----------------------------------------------------------------------\n");
    
    if (p_implies_q && p) {
        bool valid = (q == true);
        if (valid) {
            printf("✅ VALID: Modus Ponens terpenuhi\n");
            printf("   Karena (p → q) TRUE dan p TRUE, maka q HARUS TRUE\n");
        } else {
            printf("❌ INVALID: Kesimpulan salah!\n");
            printf("   Jika (p → q) TRUE dan p TRUE, maka q HARUS TRUE\n");
        }
        printf("======================================================================\n");
        return valid;
    } else {
        printf("⚠️  Premis tidak memenuhi syarat Modus Ponens\n");
        printf("======================================================================\n");
        return false;
    }
}

// Validator Modus Tollens: p → q, ¬q ∴ ¬p
bool validate_modus_tollens(bool p_implies_q, bool not_q, bool not_p) {
    printf("\n");
    printf("======================================================================\n");
    printf("VALIDASI MODUS TOLLENS\n");
    printf("======================================================================\n");
    printf("Premis 1: p → q = %s\n", bool_str(p_implies_q));
    printf("Premis 2: ¬q = %s\n", bool_str(not_q));
    printf("Kesimpulan: ¬p = %s\n", bool_str(not_p));
    printf("----------------------------------------------------------------------\n");
    
    if (p_implies_q && not_q) {
        bool valid = (not_p == true);
        if (valid) {
            printf("✅ VALID: Modus Tollens terpenuhi\n");
            printf("   Karena (p → q) TRUE dan ¬q TRUE, maka ¬p HARUS TRUE\n");
        } else {
            printf("❌ INVALID: Kesimpulan salah!\n");
            printf("   Jika (p → q) TRUE dan ¬q TRUE, maka ¬p HARUS TRUE\n");
        }
        printf("======================================================================\n");
        return valid;
    } else {
        printf("⚠️  Premis tidak memenuhi syarat Modus Tollens\n");
        printf("======================================================================\n");
        return false;
    }
}

// Validator Hypothetical Syllogism: p → q, q → r ∴ p → r
bool validate_hypothetical_syllogism(bool p_implies_q, bool q_implies_r, bool p_implies_r) {
    printf("\n");
    printf("======================================================================\n");
    printf("VALIDASI HYPOTHETICAL SYLLOGISM\n");
    printf("======================================================================\n");
    printf("Premis 1: p → q = %s\n", bool_str(p_implies_q));
    printf("Premis 2: q → r = %s\n", bool_str(q_implies_r));
    printf("Kesimpulan: p → r = %s\n", bool_str(p_implies_r));
    printf("----------------------------------------------------------------------\n");
    
    if (p_implies_q && q_implies_r) {
        bool valid = (p_implies_r == true);
        if (valid) {
            printf("✅ VALID: Hypothetical Syllogism terpenuhi\n");
            printf("   Karena (p → q) dan (q → r) TRUE, maka (p → r) HARUS TRUE\n");
        } else {
            printf("❌ INVALID: Kesimpulan salah!\n");
        }
        printf("======================================================================\n");
        return valid;
    } else {
        printf("⚠️  Premis tidak memenuhi syarat\n");
        printf("======================================================================\n");
        return false;
    }
}

// Validator Disjunctive Syllogism: p ∨ q, ¬p ∴ q
bool validate_disjunctive_syllogism(bool p_or_q, bool not_p, bool q) {
    printf("\n");
    printf("======================================================================\n");
    printf("VALIDASI DISJUNCTIVE SYLLOGISM\n");
    printf("======================================================================\n");
    printf("Premis 1: p ∨ q = %s\n", bool_str(p_or_q));
    printf("Premis 2: ¬p = %s\n", bool_str(not_p));
    printf("Kesimpulan: q = %s\n", bool_str(q));
    printf("----------------------------------------------------------------------\n");
    
    if (p_or_q && not_p) {
        bool valid = (q == true);
        if (valid) {
            printf("✅ VALID: Disjunctive Syllogism terpenuhi\n");
            printf("   Karena (p ∨ q) TRUE dan ¬p TRUE, maka q HARUS TRUE\n");
        } else {
            printf("❌ INVALID: Kesimpulan salah!\n");
        }
        printf("======================================================================\n");
        return valid;
    } else {
        printf("⚠️  Premis tidak memenuhi syarat\n");
        printf("======================================================================\n");
        return false;
    }
}

void demo_modus_ponens() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: MODUS PONENS\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    // Kasus 1: Valid
    printf("\n📌 KASUS 1: Argumen Valid\n");
    printf("Konteks: 'Jika belajar maka lulus'\n");
    
    bool p = true;   // Belajar
    bool q = true;   // Lulus
    bool p_implies_q = implikasi(p, q);
    
    validate_modus_ponens(p_implies_q, p, q);
    
    // Kasus 2: Invalid
    printf("\n📌 KASUS 2: Argumen Invalid\n");
    printf("Konteks: 'Jika belajar maka lulus, Tidak belajar tapi lulus'\n");
    
    p = false;  // Tidak belajar
    q = true;   // Tapi tetap lulus (beruntung)
    p_implies_q = implikasi(p, q);
    
    printf("\n⚠️  Premis p FALSE, tidak bisa aplikasikan Modus Ponens\n");
}

void demo_modus_tollens() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: MODUS TOLLENS\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n📌 KASUS: Argumen Valid\n");
    printf("Konteks: 'Jika hujan maka basah, Tidak basah, Jadi tidak hujan'\n");
    
    bool p = false;  // Tidak hujan
    bool q = false;  // Tidak basah
    bool p_implies_q = implikasi(p, q);
    bool not_q = !q;
    bool not_p = !p;
    
    validate_modus_tollens(p_implies_q, not_q, not_p);
}

void demo_chaining() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: HYPOTHETICAL SYLLOGISM (CHAINING)\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n📌 KASUS: Rantai Implikasi\n");
    printf("Konteks: 'Belajar→Pintar, Pintar→Sukses, Jadi Belajar→Sukses'\n");
    
    bool p = true;   // Belajar
    bool q = true;   // Pintar
    bool r = true;   // Sukses
    
    bool p_implies_q = implikasi(p, q);
    bool q_implies_r = implikasi(q, r);
    bool p_implies_r = implikasi(p, r);
    
    validate_hypothetical_syllogism(p_implies_q, q_implies_r, p_implies_r);
}

int main() {
    printf("\n");
    printf("======================================================================\n");
    printf("  VALIDATOR ATURAN INFERENSI (C)\n");
    printf("======================================================================\n");
    
    demo_modus_ponens();
    demo_modus_tollens();
    demo_chaining();
    
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
gcc -o inference_validator inference_validator.c
./inference_validator

# Windows
gcc -o inference_validator.exe inference_validator.c
inference_validator.exe
```

---

## 🎯 Latihan Soal

### Soal 1: Identifikasi Aturan

Tentukan aturan inferensi yang digunakan:

1. 
```
p → q
p
─────
∴ q
```

2.
```
p ∨ q
¬p
─────
∴ q
```

3.
```
p → q
¬q
─────
∴ ¬p
```

<details>
<summary>Lihat Jawaban</summary>

1. **Modus Ponens**
2. **Disjunctive Syllogism**
3. **Modus Tollens**

</details>

---

### Soal 2: Validitas Argumen

Tentukan apakah argumen berikut valid atau invalid:

1.
```
"Jika saya bangun pagi, saya tidak terlambat"
"Saya terlambat"
───────────────────────────────────────────
∴ "Saya tidak bangun pagi"
```

2.
```
"Jika saya belajar, saya lulus"
"Saya lulus"
──────────────────────────────
∴ "Saya belajar"
```

<details>
<summary>Lihat Jawaban</summary>

1. **VALID** - Modus Tollens
   ```
   p → q
   ¬q
   ───
   ∴ ¬p
   ```

2. **INVALID** - Affirming the Consequent
   ```
   p → q
   q
   ───
   ∴ p (Kesalahan logika!)
   ```

</details>

---

### Soal 3: Pembuktian

Buktikan kesimpulan berikut:

```
Premis 1: p → q
Premis 2: r → s
Premis 3: p ∨ r
Premis 4: ¬q
Buktikan: s
```

<details>
<summary>Lihat Jawaban</summary>

**Pembuktian:**
```
1. p → q          (Premis 1)
2. r → s          (Premis 2)
3. p ∨ r          (Premis 3)
4. ¬q             (Premis 4)
5. ¬p             (Modus Tollens: 1, 4)
6. r              (Disjunctive Syllogism: 3, 5)
7. s              (Modus Ponens: 2, 6) ✅
```

</details>

---

## 🚀 Selanjutnya

Di [Bab 7](./07-inferensi-logika-2.md), kita akan mempelajari:
- 💻 **Implementasi Aturan Inferensi dalam Kode**
- 🔍 **Automatic Theorem Prover**
- 🎯 **Metode Pembuktian**: Direct Proof, Proof by Contradiction
- 🧮 **Studi Kasus Nyata**

---

## 📚 Referensi

- Rosen, K. H. (2019). *Discrete Mathematics and Its Applications* (Ch. 1.6)
- [Rules of Inference - Stanford](https://web.stanford.edu/class/cs103/)
- [Logic Proof Checker](https://www.umsu.de/trees/)

---

**Selamat! Anda sudah menguasai aturan-aturan inferensi dasar!** 🎉

← [Bab 5: Ekuivalensi Logika (Bagian 2)](./05-ekuivalensi-logika-2.md) | [Bab 7: Inferensi Logika (Bagian 2)](./07-inferensi-logika-2.md) →
