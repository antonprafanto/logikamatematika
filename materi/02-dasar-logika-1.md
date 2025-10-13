# 📝 Bab 2: Dasar-Dasar Logika (Bagian 1)

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Mendefinisikan dan mengidentifikasi proposisi
- ✅ Membedakan proposisi atomik dan majemuk
- ✅ Memahami operator logika dasar
- ✅ Menggunakan simbol logika dengan benar

---

## 🎯 Proposisi: Fondasi Logika

### Apa itu Proposisi?

> **Proposisi** adalah kalimat deklaratif yang memiliki nilai kebenaran (benar atau salah), tetapi **tidak keduanya**.

**Karakteristik Proposisi:**
1. ✅ Berbentuk kalimat pernyataan (deklaratif)
2. ✅ Memiliki nilai kebenaran yang jelas
3. ✅ Hanya TRUE atau FALSE (tidak ambigu)

### 🎮 Quiz Interaktif

Mari uji pemahaman Anda! Mana yang proposisi?

| No | Kalimat | Proposisi? | Alasan |
|---|---------|------------|--------|
| 1 | "Bumi mengelilingi matahari" | ✅ Ya | Pernyataan yang benar |
| 2 | "5 + 3 = 9" | ✅ Ya | Pernyataan yang salah (tetap proposisi!) |
| 3 | "Tutup jendela!" | ❌ Tidak | Kalimat perintah |
| 4 | "Apakah kamu lapar?" | ❌ Tidak | Kalimat tanya |
| 5 | "x + 2 = 7" | ❌ Tidak | Tergantung nilai x (masih variabel) |
| 6 | "Bandung adalah kota hujan" | ✅ Ya | Pernyataan (bisa dinilai benar/salah) |
| 7 | "Semoga berhasil!" | ❌ Tidak | Kalimat harapan/doa |
| 8 | "Hari ini tanggal 13" | ✅ Ya | Pernyataan (tergantung tanggal sekarang) |

### 🔍 Contoh Mendalam

#### ✅ **PROPOSISI** (Valid)

```
p: "Python adalah bahasa pemrograman"         → TRUE
q: "1 + 1 = 3"                                → FALSE
r: "Jakarta lebih besar dari Surabaya"        → TRUE
s: "Semua mahasiswa suka matematika"          → FALSE (tapi tetap proposisi)
t: "Jika hujan, jalanan basah"                → TRUE
```

#### ❌ **BUKAN PROPOSISI** (Invalid)

```
"Belajar yang rajin!"           → Perintah
"Siapa presiden Indonesia?"     → Pertanyaan
"x > 5"                         → Tergantung nilai x
"Wah, keren sekali!"            → Ekspresi emosi
"n adalah bilangan prima"       → Tergantung nilai n
```

### 💡 Kasus Khusus

**Proposisi Terbuka (Open Sentence)**
```
"x + 5 = 10"  → Bukan proposisi (nilai bergantung x)
```

**Menjadi Proposisi:**
```
"Jika x = 5, maka x + 5 = 10"  → Proposisi (TRUE)
"5 + 5 = 10"                   → Proposisi (TRUE)
```

---

## 🧩 Jenis Proposisi

### 1. **Proposisi Atomik (Sederhana)**

Proposisi yang **tidak bisa dipecah** lagi menjadi proposisi yang lebih sederhana.

**Contoh:**
```
p: "Hari ini hujan"
q: "Saya lapar"
r: "5 adalah bilangan prima"
```

**Notasi:**
- Biasanya menggunakan huruf kecil: p, q, r, s, t, ...
- Nilai: **T** (True) atau **F** (False)

### 2. **Proposisi Majemuk (Compound)**

Proposisi yang dibentuk dari **gabungan beberapa proposisi atomik** menggunakan operator logika.

**Contoh:**
```
p: "Hari ini hujan"
q: "Saya membawa payung"

Proposisi majemuk:
p ∧ q: "Hari ini hujan DAN saya membawa payung"
p ∨ q: "Hari ini hujan ATAU saya membawa payung"
p → q: "JIKA hari ini hujan MAKA saya membawa payung"
```

---

## 🔧 Operator Logika Dasar

### 1. **NOT (Negasi)** ¬

**Simbol:** ¬p atau ~p atau p'

**Arti:** "Bukan p" atau "Tidak p"

**Tabel Kebenaran:**

| p | ¬p |
|---|---|
| T | F |
| F | T |

**Contoh:**
```
p: "Hari ini hujan"              → T
¬p: "Hari ini TIDAK hujan"       → F

q: "5 adalah bilangan genap"     → F
¬q: "5 BUKAN bilangan genap"     → T
```

**Dalam Programming:**
```python
hujan = True
tidak_hujan = not hujan  # False
```

---

### 2. **AND (Konjungsi)** ∧

**Simbol:** p ∧ q

**Arti:** "p DAN q"

**Aturan:** Benar hanya jika **KEDUA** proposisi benar

**Tabel Kebenaran:**

| p | q | p ∧ q |
|---|---|-------|
| T | T | **T** |
| T | F | F |
| F | T | F |
| F | F | F |

**Contoh:**
```
p: "Saya punya uang"             → T
q: "Saya punya waktu"            → T
p ∧ q: "Saya punya uang DAN waktu" → T

p: "Saya punya uang"             → T
q: "Saya punya waktu"            → F
p ∧ q: "Saya punya uang DAN waktu" → F (kurang waktu!)
```

**Dalam Programming:**
```python
punya_uang = True
punya_waktu = True
bisa_jalan = punya_uang and punya_waktu  # True
```

**Analogi:** Seperti saklar seri (listrik mengalir jika SEMUA saklar ON)

```
[Saklar 1] ----[Saklar 2]----[Lampu]
   ON              ON           NYALA ✓
   ON              OFF          MATI ✗
   OFF             ON           MATI ✗
   OFF             OFF          MATI ✗
```

---

### 3. **OR (Disjungsi)** ∨

**Simbol:** p ∨ q

**Arti:** "p ATAU q"

**Aturan:** Benar jika **SALAH SATU atau KEDUA** proposisi benar

**Tabel Kebenaran:**

| p | q | p ∨ q |
|---|---|-------|
| T | T | **T** |
| T | F | **T** |
| F | T | **T** |
| F | F | F |

**Contoh:**
```
p: "Saya bisa Python"            → T
q: "Saya bisa Java"              → F
p ∨ q: "Saya bisa Python ATAU Java" → T (cukup satu!)

p: "Saya bisa Python"            → F
q: "Saya bisa Java"              → F
p ∨ q: "Saya bisa Python ATAU Java" → F (tidak ada yang bisa)
```

**Dalam Programming:**
```python
bisa_python = True
bisa_java = False
bisa_coding = bisa_python or bisa_java  # True
```

**Analogi:** Seperti saklar paralel (listrik mengalir jika ADA SATU saklar ON)

```
       [Saklar 1]
      /          \
[Baterai]        [Lampu]
      \          /
       [Saklar 2]

Nyala jika minimal satu saklar ON
```

---

### 4. **XOR (Exclusive OR)** ⊕

**Simbol:** p ⊕ q atau p ⊻ q

**Arti:** "p ATAU q, tapi TIDAK keduanya"

**Aturan:** Benar jika **HANYA SATU** proposisi benar

**Tabel Kebenaran:**

| p | q | p ⊕ q |
|---|---|-------|
| T | T | F |
| T | F | **T** |
| F | T | **T** |
| F | F | F |

**Contoh:**
```
p: "Lampu hidup"                 → T
q: "Lampu mati"                  → F
p ⊕ q: "Lampu hidup XOR mati"    → T (salah satu harus benar)

p: "Lampu hidup"                 → T
q: "Lampu mati"                  → T
p ⊕ q: "Lampu hidup XOR mati"    → F (tidak mungkin keduanya!)
```

**Dalam Programming:**
```python
# XOR dengan operator ^
a = True
b = False
result = a ^ b  # True (hanya satu yang True)
```

**Perbedaan OR vs XOR:**

| Kasus | OR (∨) | XOR (⊕) |
|-------|--------|---------|
| Kedua TRUE | TRUE | **FALSE** |
| Satu TRUE | TRUE | TRUE |
| Kedua FALSE | FALSE | FALSE |

---

## 📊 Ringkasan Operator

| Operator | Simbol | Nama | Kapan TRUE? |
|----------|--------|------|-------------|
| NOT | ¬ | Negasi | Kebalikan dari p |
| AND | ∧ | Konjungsi | Kedua TRUE |
| OR | ∨ | Disjungsi | Minimal satu TRUE |
| XOR | ⊕ | Exclusive OR | Hanya satu TRUE |

---

## 🎯 Latihan Soal

### Soal 1: Identifikasi Proposisi

Tentukan mana yang proposisi dan berikan alasannya:

1. "Indonesia adalah negara kepulauan"
2. "Berapa umurmu?"
3. "x² + 5x + 6 = 0"
4. "Semua kucing berwarna hitam"
5. "Tolong bantu saya!"

<details>
<summary>Lihat Jawaban</summary>

1. ✅ **Proposisi** (Pernyataan benar)
2. ❌ **Bukan** (Kalimat tanya)
3. ❌ **Bukan** (Tergantung nilai x)
4. ✅ **Proposisi** (Meskipun salah, tetap proposisi)
5. ❌ **Bukan** (Kalimat perintah)

</details>

### Soal 2: Operator Logika

Diberikan:
- p: "Hari ini hujan" (TRUE)
- q: "Saya membawa payung" (FALSE)

Tentukan nilai kebenaran:

1. ¬p
2. p ∧ q
3. p ∨ q
4. ¬p ∧ q
5. p ⊕ q

<details>
<summary>Lihat Jawaban</summary>

1. ¬p = FALSE (kebalikan TRUE)
2. p ∧ q = FALSE (TRUE AND FALSE)
3. p ∨ q = TRUE (TRUE OR FALSE)
4. ¬p ∧ q = FALSE (FALSE AND FALSE)
5. p ⊕ q = TRUE (hanya satu TRUE)

</details>

### Soal 3: Translasi Kalimat

Terjemahkan ke bentuk logika:

Diberikan:
- p: "Saya belajar"
- q: "Saya lulus"

Terjemahkan:
1. "Saya belajar dan saya lulus"
2. "Saya tidak belajar"
3. "Saya belajar atau saya lulus"
4. "Saya tidak belajar dan tidak lulus"

<details>
<summary>Lihat Jawaban</summary>

1. p ∧ q
2. ¬p
3. p ∨ q
4. ¬p ∧ ¬q

</details>

---

## 💻 Implementasi dalam Kode

### Contoh Program 1: Kalkulator Logika Sederhana

#### Python
```python
"""
Program: Kalkulator Operator Logika
Deskripsi: Mendemonstrasikan semua operator logika dasar
"""

def tampilkan_header():
    """Menampilkan header program"""
    print("=" * 50)
    print("  KALKULATOR OPERATOR LOGIKA")
    print("=" * 50)
    print()

def input_proposisi():
    """Mengambil input proposisi dari user"""
    print("Masukkan nilai proposisi:")
    
    # Input dengan validasi
    while True:
        p_input = input("p (True/False atau T/F): ").strip().upper()
        if p_input in ['TRUE', 'T', '1']:
            p = True
            break
        elif p_input in ['FALSE', 'F', '0']:
            p = False
            break
        else:
            print("Input tidak valid! Gunakan True/False atau T/F")
    
    while True:
        q_input = input("q (True/False atau T/F): ").strip().upper()
        if q_input in ['TRUE', 'T', '1']:
            q = True
            break
        elif q_input in ['FALSE', 'F', '0']:
            q = False
            break
        else:
            print("Input tidak valid! Gunakan True/False atau T/F")
    
    return p, q

def hitung_operator(p, q):
    """Menghitung semua operator logika"""
    hasil = {
        'NOT p': not p,
        'NOT q': not q,
        'p AND q': p and q,
        'p OR q': p or q,
        'p XOR q': (p or q) and not (p and q),
    }
    return hasil

def tampilkan_hasil(p, q, hasil):
    """Menampilkan hasil perhitungan"""
    print("\n" + "=" * 50)
    print("HASIL PERHITUNGAN")
    print("=" * 50)
    print(f"Nilai p: {p}")
    print(f"Nilai q: {q}")
    print("-" * 50)
    
    for operator, nilai in hasil.items():
        # Konversi ke simbol logika
        simbol = operator
        if 'NOT' in operator:
            simbol = operator.replace('NOT', '¬')
        elif 'AND' in operator:
            simbol = operator.replace('AND', '∧')
        elif 'OR' in operator and 'XOR' not in operator:
            simbol = operator.replace('OR', '∨')
        elif 'XOR' in operator:
            simbol = operator.replace('XOR', '⊕')
        
        print(f"{simbol:15} = {nilai}")
    print("=" * 50)

def main():
    """Fungsi utama program"""
    tampilkan_header()
    
    # Ambil input
    p, q = input_proposisi()
    
    # Hitung operator
    hasil = hitung_operator(p, q)
    
    # Tampilkan hasil
    tampilkan_hasil(p, q, hasil)
    
    # Tanya apakah ingin mengulang
    print("\nIngin mencoba lagi? (y/n): ", end="")
    if input().strip().lower() == 'y':
        print()
        main()
    else:
        print("\nTerima kasih telah menggunakan program ini!")

# Jalankan program
if __name__ == "__main__":
    main()
```

**Output Contoh:**
```
==================================================
  KALKULATOR OPERATOR LOGIKA
==================================================

Masukkan nilai proposisi:
p (True/False atau T/F): T
q (True/False atau T/F): F

==================================================
HASIL PERHITUNGAN
==================================================
Nilai p: True
Nilai q: False
--------------------------------------------------
¬ p             = False
¬ q             = True
p ∧ q           = False
p ∨ q           = True
p ⊕ q           = True
==================================================
```

---

#### Bahasa C
```c
/*
 * Program: Kalkulator Operator Logika
 * Deskripsi: Mendemonstrasikan operator logika dalam C
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

// Struktur untuk menyimpan hasil operasi
typedef struct {
    bool not_p;
    bool not_q;
    bool p_and_q;
    bool p_or_q;
    bool p_xor_q;
} HasilLogika;

// Fungsi untuk menampilkan header
void tampilkanHeader() {
    printf("==================================================\n");
    printf("  KALKULATOR OPERATOR LOGIKA\n");
    printf("==================================================\n\n");
}

// Fungsi untuk input proposisi dengan validasi
bool inputProposisi(char nama) {
    char input[10];
    bool nilai;
    
    while (1) {
        printf("%c (True/False atau T/F atau 1/0): ", nama);
        scanf("%s", input);
        
        // Konversi ke uppercase
        for (int i = 0; input[i]; i++) {
            input[i] = toupper(input[i]);
        }
        
        if (strcmp(input, "TRUE") == 0 || strcmp(input, "T") == 0 || strcmp(input, "1") == 0) {
            nilai = true;
            break;
        } else if (strcmp(input, "FALSE") == 0 || strcmp(input, "F") == 0 || strcmp(input, "0") == 0) {
            nilai = false;
            break;
        } else {
            printf("Input tidak valid! Coba lagi.\n");
        }
    }
    
    return nilai;
}

// Fungsi untuk menghitung semua operator
HasilLogika hitungOperator(bool p, bool q) {
    HasilLogika hasil;
    
    hasil.not_p = !p;                    // NOT p
    hasil.not_q = !q;                    // NOT q
    hasil.p_and_q = p && q;              // p AND q
    hasil.p_or_q = p || q;               // p OR q
    hasil.p_xor_q = (p || q) && !(p && q); // p XOR q (manual)
    
    return hasil;
}

// Fungsi untuk konversi boolean ke string
const char* boolToString(bool nilai) {
    return nilai ? "True" : "False";
}

// Fungsi untuk menampilkan hasil
void tampilkanHasil(bool p, bool q, HasilLogika hasil) {
    printf("\n==================================================\n");
    printf("HASIL PERHITUNGAN\n");
    printf("==================================================\n");
    printf("Nilai p: %s\n", boolToString(p));
    printf("Nilai q: %s\n", boolToString(q));
    printf("--------------------------------------------------\n");
    printf("%-20s = %s\n", "NOT p (¬p)", boolToString(hasil.not_p));
    printf("%-20s = %s\n", "NOT q (¬q)", boolToString(hasil.not_q));
    printf("%-20s = %s\n", "p AND q (p ∧ q)", boolToString(hasil.p_and_q));
    printf("%-20s = %s\n", "p OR q (p ∨ q)", boolToString(hasil.p_or_q));
    printf("%-20s = %s\n", "p XOR q (p ⊕ q)", boolToString(hasil.p_xor_q));
    printf("==================================================\n");
}

int main() {
    char lagi;
    
    do {
        tampilkanHeader();
        
        printf("Masukkan nilai proposisi:\n");
        bool p = inputProposisi('p');
        bool q = inputProposisi('q');
        
        // Hitung operator
        HasilLogika hasil = hitungOperator(p, q);
        
        // Tampilkan hasil
        tampilkanHasil(p, q, hasil);
        
        // Tanya apakah ingin mengulang
        printf("\nIngin mencoba lagi? (y/n): ");
        scanf(" %c", &lagi);
        printf("\n");
        
    } while (lagi == 'y' || lagi == 'Y');
    
    printf("Terima kasih telah menggunakan program ini!\n");
    
    return 0;
}
```

**Cara Compile dan Run (Linux/Mac):**
```bash
gcc -o logika kalkulator_logika.c
./logika
```

**Cara Compile dan Run (Windows):**
```bash
gcc -o logika.exe kalkulator_logika.c
logika.exe
```

---

### Contoh Program 2: Sistem Login Sederhana

#### Python
```python
"""
Program: Sistem Login dengan Logika AND
Deskripsi: Demonstrasi operator AND dalam autentikasi
"""

def cek_login(username, password, captcha_valid):
    """
    Fungsi untuk mengecek login
    Login berhasil jika:
    - Username benar AND
    - Password benar AND
    - Captcha valid
    
    Ini adalah aplikasi operator AND (∧)
    """
    # Data user (dalam praktik nyata, gunakan database dan hash password)
    USERNAME_BENAR = "admin"
    PASSWORD_BENAR = "12345"
    
    # Cek setiap kondisi
    username_cocok = (username == USERNAME_BENAR)
    password_cocok = (password == PASSWORD_BENAR)
    
    print("\n" + "="*50)
    print("PROSES VERIFIKASI")
    print("="*50)
    print(f"Username cocok      : {username_cocok}")
    print(f"Password cocok      : {password_cocok}")
    print(f"Captcha valid       : {captcha_valid}")
    print("-"*50)
    
    # Operator AND: Semua harus TRUE
    login_berhasil = username_cocok and password_cocok and captcha_valid
    
    print(f"Login berhasil      : {login_berhasil}")
    print("="*50)
    
    return login_berhasil

# Test program
print("="*50)
print("  SISTEM LOGIN")
print("="*50)

username = input("Username: ")
password = input("Password: ")
captcha = input("Captcha (yes/no): ").lower() == 'yes'

if cek_login(username, password, captcha):
    print("\n✓ LOGIN BERHASIL! Selamat datang.")
else:
    print("\n✗ LOGIN GAGAL! Periksa kembali data Anda.")
```

---

### Contoh Program 3: Sistem Diskon Toko Online

#### Python
```python
"""
Program: Sistem Diskon dengan Logika OR
Deskripsi: Pelanggan dapat diskon jika memenuhi salah satu syarat
"""

def cek_diskon(total_belanja, is_member, punya_voucher):
    """
    Pelanggan dapat diskon jika:
    - Total belanja >= 500000 OR
    - Adalah member OR
    - Punya voucher
    
    Ini adalah aplikasi operator OR (∨)
    """
    # Syarat diskon
    belanja_banyak = total_belanja >= 500000
    
    print("\n" + "="*50)
    print("CEK KELAYAKAN DISKON")
    print("="*50)
    print(f"Total belanja       : Rp {total_belanja:,}")
    print(f"Belanja >= 500k     : {belanja_banyak}")
    print(f"Member              : {is_member}")
    print(f"Punya voucher       : {punya_voucher}")
    print("-"*50)
    
    # Operator OR: Minimal satu TRUE
    dapat_diskon = belanja_banyak or is_member or punya_voucher
    
    print(f"Dapat diskon        : {dapat_diskon}")
    print("="*50)
    
    if dapat_diskon:
        diskon = 0.1  # 10%
        total_bayar = total_belanja * (1 - diskon)
        print(f"\n✓ Selamat! Anda dapat diskon 10%")
        print(f"  Total bayar: Rp {total_bayar:,.0f}")
    else:
        print(f"\n✗ Maaf, Anda tidak dapat diskon")
        print(f"  Total bayar: Rp {total_belanja:,.0f}")
    
    return dapat_diskon

# Test program
print("="*50)
print("  SISTEM DISKON TOKO ONLINE")
print("="*50)

try:
    total = float(input("Total belanja (Rp): "))
    member = input("Anda member? (y/n): ").lower() == 'y'
    voucher = input("Punya voucher? (y/n): ").lower() == 'y'
    
    cek_diskon(total, member, voucher)
except ValueError:
    print("Error: Masukkan angka yang valid!")
```

---

### Contoh Program 4: Game Sederhana (XOR)

#### Python
```python
"""
Program: Game Lampu ON/OFF dengan XOR
Deskripsi: Demonstrasi operator XOR dalam game puzzle
"""

def game_lampu():
    """
    Game: Nyalakan tepat SATU lampu
    Menggunakan operator XOR
    """
    print("="*50)
    print("  GAME LAMPU PUZZLE")
    print("="*50)
    print("\nAturan: Nyalakan TEPAT SATU lampu untuk menang!")
    print("(Jika kedua lampu nyala atau kedua mati, Anda kalah)\n")
    
    # Input pemain
    lampu1 = input("Lampu 1 (ON/OFF): ").upper() == "ON"
    lampu2 = input("Lampu 2 (ON/OFF): ").upper() == "ON"
    
    print("\n" + "="*50)
    print("HASIL")
    print("="*50)
    print(f"Lampu 1: {'🔆 ON' if lampu1 else '🔅 OFF'}")
    print(f"Lampu 2: {'🔆 ON' if lampu2 else '🔅 OFF'}")
    print("-"*50)
    
    # XOR: TRUE jika hanya satu TRUE
    menang = lampu1 != lampu2  # XOR bisa ditulis sebagai !=
    
    if menang:
        print("✓ SELAMAT! Anda MENANG!")
        print("  (Tepat satu lampu menyala)")
    else:
        print("✗ GAGAL! Anda KALAH!")
        if lampu1 and lampu2:
            print("  (Kedua lampu menyala)")
        else:
            print("  (Kedua lampu mati)")
    
    print("="*50)

# Jalankan game
game_lampu()

# Tanya main lagi
while input("\nMain lagi? (y/n): ").lower() == 'y':
    print()
    game_lampu()
```

---

### Contoh Program 5: Evaluator Proposisi

#### Bahasa C
```c
/*
 * Program: Evaluator Proposisi Kompleks
 * Deskripsi: Mengevaluasi ekspresi logika kompleks
 */

#include <stdio.h>
#include <stdbool.h>

// Fungsi untuk evaluasi: (p AND q) OR (NOT p AND r)
bool evaluasiEkspresi1(bool p, bool q, bool r) {
    bool hasil = (p && q) || (!p && r);
    
    printf("\nEkspresi: (p ∧ q) ∨ (¬p ∧ r)\n");
    printf("Langkah evaluasi:\n");
    printf("  1. p ∧ q = %d ∧ %d = %d\n", p, q, p && q);
    printf("  2. ¬p = ¬%d = %d\n", p, !p);
    printf("  3. ¬p ∧ r = %d ∧ %d = %d\n", !p, r, !p && r);
    printf("  4. (%d) ∨ (%d) = %d\n", p && q, !p && r, hasil);
    
    return hasil;
}

// Fungsi untuk evaluasi: (p OR q) AND (p OR r)
bool evaluasiEkspresi2(bool p, bool q, bool r) {
    bool hasil = (p || q) && (p || r);
    
    printf("\nEkspresi: (p ∨ q) ∧ (p ∨ r)\n");
    printf("Langkah evaluasi:\n");
    printf("  1. p ∨ q = %d ∨ %d = %d\n", p, q, p || q);
    printf("  2. p ∨ r = %d ∨ %d = %d\n", p, r, p || r);
    printf("  3. (%d) ∧ (%d) = %d\n", p || q, p || r, hasil);
    
    return hasil;
}

int main() {
    bool p, q, r;
    int input;
    
    printf("==================================================\n");
    printf("  EVALUATOR PROPOSISI KOMPLEKS\n");
    printf("==================================================\n\n");
    
    // Input proposisi
    printf("Masukkan nilai proposisi (1=True, 0=False):\n");
    
    printf("p: ");
    scanf("%d", &input);
    p = (input != 0);
    
    printf("q: ");
    scanf("%d", &input);
    q = (input != 0);
    
    printf("r: ");
    scanf("%d", &input);
    r = (input != 0);
    
    printf("\n==================================================\n");
    printf("NILAI INPUT\n");
    printf("==================================================\n");
    printf("p = %s\n", p ? "True" : "False");
    printf("q = %s\n", q ? "True" : "False");
    printf("r = %s\n", r ? "True" : "False");
    
    // Evaluasi ekspresi 1
    printf("\n==================================================\n");
    printf("EKSPRESI 1\n");
    printf("==================================================\n");
    bool hasil1 = evaluasiEkspresi1(p, q, r);
    printf("\nHasil akhir: %s\n", hasil1 ? "True" : "False");
    
    // Evaluasi ekspresi 2
    printf("\n==================================================\n");
    printf("EKSPRESI 2\n");
    printf("==================================================\n");
    bool hasil2 = evaluasiEkspresi2(p, q, r);
    printf("\nHasil akhir: %s\n", hasil2 ? "True" : "False");
    
    printf("\n==================================================\n");
    
    return 0;
}
```

---

## 🎓 Rangkuman

**Poin Penting Bab Ini:**

1. ✅ **Proposisi** = Kalimat yang punya nilai TRUE/FALSE
2. ✅ **Proposisi Atomik** = Tidak bisa dipecah lagi
3. ✅ **Proposisi Majemuk** = Gabungan proposisi dengan operator
4. ✅ **Operator Dasar:**
   - NOT (¬): Kebalikan
   - AND (∧): Kedua harus TRUE
   - OR (∨): Minimal satu TRUE
   - XOR (⊕): Hanya satu TRUE

---

## 🚀 Selanjutnya

Di [Bab 3](./03-dasar-logika-2.md), kita akan mempelajari:
- 📊 **Tabel Kebenaran** lengkap
- 🎯 **Operator Implikasi** (→)
- 🔄 **Operator Biimplikasi** (↔)
- 📈 **Precedence** operator
- 🧮 **Evaluasi ekspresi** kompleks

---

## 📚 Referensi

- Rosen, K. H. (2019). *Discrete Mathematics and Its Applications*
- [Logic Symbols - Wikipedia](https://en.wikipedia.org/wiki/List_of_logic_symbols)
- [Truth Tables Tutorial](https://www.electronics-tutorials.ws/boolean/bool_7.html)

---

**Happy Learning!** 🎉

← [Bab 1: Pengantar](./01-pengantar.md) | [Bab 3: Dasar Logika (Bagian 2)](./03-dasar-logika-2.md) →
