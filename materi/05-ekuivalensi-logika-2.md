# 🧮 Bab 5: Ekuivalensi Logika (Bagian 2)

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Menyederhanakan ekspresi logika kompleks
- ✅ Mengimplementasikan hukum logika dalam program
- ✅ Membuat simplifier ekspresi logika otomatis
- ✅ Memverifikasi ekuivalensi dengan program

---

## 💻 Implementasi dalam Kode

### Contoh Program 1: Verifikator Ekuivalensi Logika

#### Python
```python
"""
Program: Verifikator Ekuivalensi Logika
Deskripsi: Mengecek apakah dua ekspresi logika ekuivalen
"""

from itertools import product

class EkuivalensiChecker:
    """Class untuk mengecek ekuivalensi dua ekspresi logika"""
    
    def __init__(self):
        self.variabel = []
    
    def ekstrak_variabel(self, ekspresi):
        """Ekstrak semua variabel dari ekspresi"""
        variabel = set()
        for char in ekspresi:
            if char.isalpha() and char.lower() in 'pqrst':
                variabel.add(char.lower())
        return sorted(list(variabel))
    
    def evaluasi(self, ekspresi, nilai_variabel):
        """
        Evaluasi ekspresi logika dengan nilai variabel yang diberikan
        
        Konvensi simbol:
        - not p, !p, ~p → negasi
        - p and q, p & q, p * q → AND
        - p or q, p | q, p + q → OR
        - p -> q, p => q → implikasi
        - p <-> q, p <=> q → biimplikasi
        """
        # Replace variabel dengan nilainya
        ekspresi_eval = ekspresi.lower()
        
        for var, nilai in nilai_variabel.items():
            ekspresi_eval = ekspresi_eval.replace(var, str(nilai))
        
        # Ganti operator logika dengan operator Python
        ekspresi_eval = ekspresi_eval.replace('and', ' and ')
        ekspresi_eval = ekspresi_eval.replace('or', ' or ')
        ekspresi_eval = ekspresi_eval.replace('not', ' not ')
        ekspresi_eval = ekspresi_eval.replace('!', ' not ')
        ekspresi_eval = ekspresi_eval.replace('~', ' not ')
        
        try:
            return eval(ekspresi_eval)
        except:
            return None
    
    def cek_ekuivalensi(self, ekspresi1, ekspresi2):
        """Cek apakah dua ekspresi ekuivalen"""
        # Ekstrak variabel
        var1 = self.ekstrak_variabel(ekspresi1)
        var2 = self.ekstrak_variabel(ekspresi2)
        semua_variabel = sorted(list(set(var1 + var2)))
        
        print("\\n" + "=" * 70)
        print("VERIFIKASI EKUIVALENSI LOGIKA")
        print("=" * 70)
        print(f"Ekspresi 1: {ekspresi1}")
        print(f"Ekspresi 2: {ekspresi2}")
        print(f"Variabel: {', '.join(semua_variabel)}")
        print("=" * 70)
        
        # Generate semua kombinasi nilai
        jumlah_var = len(semua_variabel)
        kombinasi = list(product([True, False], repeat=jumlah_var))
        
        # Header tabel
        header = " | ".join([f"{v:^5}" for v in semua_variabel])
        header += " | Ekspresi 1 | Ekspresi 2 | Sama?"
        print(header)
        print("-" * len(header))
        
        ekuivalen = True
        
        for nilai_combo in kombinasi:
            # Buat dictionary nilai variabel
            nilai_var = dict(zip(semua_variabel, nilai_combo))
            
            # Evaluasi kedua ekspresi
            hasil1 = self.evaluasi(ekspresi1, nilai_var)
            hasil2 = self.evaluasi(ekspresi2, nilai_var)
            
            # Cek kesamaan
            sama = hasil1 == hasil2
            if not sama:
                ekuivalen = False
            
            # Tampilkan baris
            baris = " | ".join([f"{'T' if v else 'F':^5}" for v in nilai_combo])
            baris += f" | {'T' if hasil1 else 'F':^10} | {'T' if hasil2 else 'F':^10} |"
            baris += f" {'✓' if sama else '✗':^5}"
            print(baris)
        
        print("=" * 70)
        if ekuivalen:
            print("\\n✅ EKUIVALEN: Kedua ekspresi selalu memberikan hasil yang sama!")
        else:
            print("\\n❌ TIDAK EKUIVALEN: Terdapat perbedaan nilai kebenaran!")
        print("=" * 70 + "\\n")
        
        return ekuivalen

def demo_hukum_de_morgan():
    """Demo hukum De Morgan"""
    print("\\n" + "🔷" * 35)
    print("  DEMO: HUKUM DE MORGAN")
    print("🔷" * 35)
    
    checker = EkuivalensiChecker()
    
    print("\\n📌 De Morgan 1: ¬(p ∧ q) ≡ ¬p ∨ ¬q")
    checker.cek_ekuivalensi(
        "not (p and q)",
        "(not p) or (not q)"
    )
    
    print("\\n📌 De Morgan 2: ¬(p ∨ q) ≡ ¬p ∧ ¬q")
    checker.cek_ekuivalensi(
        "not (p or q)",
        "(not p) and (not q)"
    )

def demo_hukum_distributif():
    """Demo hukum distributif"""
    print("\\n" + "🔷" * 35)
    print("  DEMO: HUKUM DISTRIBUTIF")
    print("🔷" * 35)
    
    checker = EkuivalensiChecker()
    
    print("\\n📌 Distributif AND over OR: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)")
    checker.cek_ekuivalensi(
        "p and (q or r)",
        "(p and q) or (p and r)"
    )
    
    print("\\n📌 Distributif OR over AND: p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)")
    checker.cek_ekuivalensi(
        "p or (q and r)",
        "(p or q) and (p or r)"
    )

def demo_penyederhanaan():
    """Demo penyederhanaan ekspresi"""
    print("\\n" + "🔷" * 35)
    print("  DEMO: PENYEDERHANAAN EKSPRESI")
    print("🔷" * 35)
    
    checker = EkuivalensiChecker()
    
    print("\\n📌 Absorpsi: p ∧ (p ∨ q) ≡ p")
    checker.cek_ekuivalensi(
        "p and (p or q)",
        "p"
    )
    
    print("\\n📌 Kompleks: (p ∨ q) ∧ (p ∨ ¬q) ≡ p")
    checker.cek_ekuivalensi(
        "(p or q) and (p or (not q))",
        "p"
    )

def main():
    """Fungsi utama"""
    print("\\n" + "=" * 70)
    print("  VERIFIKATOR EKUIVALENSI LOGIKA")
    print("=" * 70)
    
    demo_hukum_de_morgan()
    demo_hukum_distributif()
    demo_penyederhanaan()
    
    print("\\n" + "=" * 70)
    print("✓ Semua demo selesai!")
    print("=" * 70 + "\\n")

if __name__ == "__main__":
    main()
```

**Output Contoh:**
```
======================================================================
  VERIFIKATOR EKUIVALENSI LOGIKA
======================================================================
Ekspresi 1: not (p and q)
Ekspresi 2: (not p) or (not q)
Variabel: p, q
======================================================================
  p   |   q   | Ekspresi 1 | Ekspresi 2 | Sama?
----------------------------------------------------------------------
  T   |   T   |     F      |     F      |   ✓
  T   |   F   |     T      |     T      |   ✓
  F   |   T   |     T      |     T      |   ✓
  F   |   F   |     T      |     T      |   ✓
======================================================================

✅ EKUIVALEN: Kedua ekspresi selalu memberikan hasil yang sama!
======================================================================
```

---

#### Bahasa C
```c
/*
 * Program: Verifikator Ekuivalensi Logika
 * Deskripsi: Mengecek apakah dua ekspresi logika ekuivalen
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>
#include <string.h>

// Struktur untuk menyimpan hasil evaluasi
typedef struct {
    bool p;
    bool q;
    bool ekspresi1;
    bool ekspresi2;
    bool sama;
} HasilEvaluasi;

// Fungsi evaluasi untuk berbagai ekspresi
bool eval_de_morgan1_kiri(bool p, bool q) {
    // ¬(p ∧ q)
    return !(p && q);
}

bool eval_de_morgan1_kanan(bool p, bool q) {
    // ¬p ∨ ¬q
    return !p || !q;
}

bool eval_de_morgan2_kiri(bool p, bool q) {
    // ¬(p ∨ q)
    return !(p || q);
}

bool eval_de_morgan2_kanan(bool p, bool q) {
    // ¬p ∧ ¬q
    return !p && !q;
}

bool eval_distributif_and_kiri(bool p, bool q, bool r) {
    // p ∧ (q ∨ r)
    return p && (q || r);
}

bool eval_distributif_and_kanan(bool p, bool q, bool r) {
    // (p ∧ q) ∨ (p ∧ r)
    return (p && q) || (p && r);
}

bool eval_absorpsi_kiri(bool p, bool q) {
    // p ∧ (p ∨ q)
    return p && (p || q);
}

bool eval_absorpsi_kanan(bool p, bool q) {
    // p
    return p;
}

// Fungsi helper
const char* bool_to_str(bool value) {
    return value ? "T" : "F";
}

void print_header(const char* judul) {
    printf("\\n");
    printf("======================================================================\\n");
    printf("%s\\n", judul);
    printf("======================================================================\\n");
}

void print_separator() {
    printf("----------------------------------------------------------------------\\n");
}

// Fungsi untuk verifikasi ekuivalensi 2 variabel
void verifikasi_2var(const char* nama_ekspresi1, const char* nama_ekspresi2,
                      bool (*func1)(bool, bool), bool (*func2)(bool, bool)) {
    print_header("VERIFIKASI EKUIVALENSI");
    printf("Ekspresi 1: %s\\n", nama_ekspresi1);
    printf("Ekspresi 2: %s\\n", nama_ekspresi2);
    printf("Variabel: p, q\\n");
    printf("======================================================================\\n");
    printf("  p  |  q  | Ekspresi 1 | Ekspresi 2 | Sama?\\n");
    print_separator();
    
    bool ekuivalen = true;
    bool values[] = {true, false};
    
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            bool p = values[i];
            bool q = values[j];
            
            bool hasil1 = func1(p, q);
            bool hasil2 = func2(p, q);
            bool sama = (hasil1 == hasil2);
            
            if (!sama) ekuivalen = false;
            
            printf("  %s  |  %s  |     %s      |     %s      |   %s\\n",
                   bool_to_str(p), bool_to_str(q),
                   bool_to_str(hasil1), bool_to_str(hasil2),
                   sama ? "✓" : "✗");
        }
    }
    
    printf("======================================================================\\n");
    if (ekuivalen) {
        printf("\\n✅ EKUIVALEN: Kedua ekspresi selalu memberikan hasil yang sama!\\n");
    } else {
        printf("\\n❌ TIDAK EKUIVALEN: Terdapat perbedaan nilai kebenaran!\\n");
    }
    printf("======================================================================\\n");
}

// Fungsi untuk verifikasi ekuivalensi 3 variabel
void verifikasi_3var(const char* nama_ekspresi1, const char* nama_ekspresi2,
                      bool (*func1)(bool, bool, bool), bool (*func2)(bool, bool, bool)) {
    print_header("VERIFIKASI EKUIVALENSI");
    printf("Ekspresi 1: %s\\n", nama_ekspresi1);
    printf("Ekspresi 2: %s\\n", nama_ekspresi2);
    printf("Variabel: p, q, r\\n");
    printf("======================================================================\\n");
    printf("  p  |  q  |  r  | Ekspresi 1 | Ekspresi 2 | Sama?\\n");
    print_separator();
    
    bool ekuivalen = true;
    bool values[] = {true, false};
    
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 2; k++) {
                bool p = values[i];
                bool q = values[j];
                bool r = values[k];
                
                bool hasil1 = func1(p, q, r);
                bool hasil2 = func2(p, q, r);
                bool sama = (hasil1 == hasil2);
                
                if (!sama) ekuivalen = false;
                
                printf("  %s  |  %s  |  %s  |     %s      |     %s      |   %s\\n",
                       bool_to_str(p), bool_to_str(q), bool_to_str(r),
                       bool_to_str(hasil1), bool_to_str(hasil2),
                       sama ? "✓" : "✗");
            }
        }
    }
    
    printf("======================================================================\\n");
    if (ekuivalen) {
        printf("\\n✅ EKUIVALEN: Kedua ekspresi selalu memberikan hasil yang sama!\\n");
    } else {
        printf("\\n❌ TIDAK EKUIVALEN: Terdapat perbedaan nilai kebenaran!\\n");
    }
    printf("======================================================================\\n");
}

void demo_de_morgan() {
    printf("\\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\\n");
    printf("   DEMO: HUKUM DE MORGAN\\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\\n");
    
    printf("\\n📌 De Morgan 1: ¬(p ∧ q) ≡ ¬p ∨ ¬q\\n");
    verifikasi_2var("¬(p ∧ q)", "¬p ∨ ¬q",
                    eval_de_morgan1_kiri, eval_de_morgan1_kanan);
    
    printf("\\n📌 De Morgan 2: ¬(p ∨ q) ≡ ¬p ∧ ¬q\\n");
    verifikasi_2var("¬(p ∨ q)", "¬p ∧ ¬q",
                    eval_de_morgan2_kiri, eval_de_morgan2_kanan);
}

void demo_distributif() {
    printf("\\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\\n");
    printf("   DEMO: HUKUM DISTRIBUTIF\\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\\n");
    
    printf("\\n📌 Distributif: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)\\n");
    verifikasi_3var("p ∧ (q ∨ r)", "(p ∧ q) ∨ (p ∧ r)",
                    eval_distributif_and_kiri, eval_distributif_and_kanan);
}

void demo_absorpsi() {
    printf("\\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\\n");
    printf("   DEMO: HUKUM ABSORPSI\\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\\n");
    
    printf("\\n📌 Absorpsi: p ∧ (p ∨ q) ≡ p\\n");
    verifikasi_2var("p ∧ (p ∨ q)", "p",
                    eval_absorpsi_kiri, eval_absorpsi_kanan);
}

int main() {
    printf("\\n======================================================================\\n");
    printf("       VERIFIKATOR EKUIVALENSI LOGIKA\\n");
    printf("======================================================================\\n");
    
    demo_de_morgan();
    demo_distributif();
    demo_absorpsi();
    
    printf("\\n======================================================================\\n");
    printf("✓ Semua demo selesai!\\n");
    printf("======================================================================\\n\\n");
    
    return 0;
}
```

**Cara Compile:**
```bash
gcc -o ekuivalensi ekuivalensi_checker.c
./ekuivalensi
```

---

### Contoh Program 2: Simplifier Ekspresi Logika

#### Python
```python
"""
Program: Simplifier Ekspresi Logika
Deskripsi: Menyederhanakan ekspresi logika menggunakan hukum-hukum logika
"""

class LogicSimplifier:
    """Class untuk menyederhanakan ekspresi logika"""
    
    def __init__(self):
        self.langkah_penyederhanaan = []
    
    def catat_langkah(self, ekspresi, hukum):
        """Catat setiap langkah penyederhanaan"""
        self.langkah_penyederhanaan.append({
            'ekspresi': ekspresi,
            'hukum': hukum
        })
    
    def simplify_identitas(self, ekspresi):
        """Terapkan hukum identitas"""
        # p AND TRUE = p
        # p OR FALSE = p
        hasil = ekspresi
        
        if " and True" in hasil or " and true" in hasil:
            hasil = hasil.replace(" and True", "").replace(" and true", "")
            self.catat_langkah(hasil, "Identitas AND: p ∧ T ≡ p")
        
        if " or False" in hasil or " or false" in hasil:
            hasil = hasil.replace(" or False", "").replace(" or false", "")
            self.catat_langkah(hasil, "Identitas OR: p ∨ F ≡ p")
        
        return hasil
    
    def simplify_dominasi(self, ekspresi):
        """Terapkan hukum dominasi"""
        # p AND FALSE = FALSE
        # p OR TRUE = TRUE
        hasil = ekspresi
        
        if " and False" in hasil or " and false" in hasil:
            hasil = "False"
            self.catat_langkah(hasil, "Dominasi AND: p ∧ F ≡ F")
        
        if " or True" in hasil or " or true" in hasil:
            hasil = "True"
            self.catat_langkah(hasil, "Dominasi OR: p ∨ T ≡ T")
        
        return hasil
    
    def simplify_negasi_ganda(self, ekspresi):
        """Terapkan hukum negasi ganda"""
        # not (not p) = p
        hasil = ekspresi
        
        while "not (not " in hasil:
            # Cari posisi not (not
            start = hasil.find("not (not ")
            if start == -1:
                break
            
            # Cari tanda kurung penutup yang sesuai
            count = 0
            i = start + 9  # Posisi setelah "not (not "
            while i < len(hasil):
                if hasil[i] == '(':
                    count += 1
                elif hasil[i] == ')':
                    if count == 0:
                        # Ambil ekspresi di dalam
                        inner = hasil[start+9:i]
                        # Replace not (not inner) dengan inner
                        hasil = hasil[:start] + inner + hasil[i+1:]
                        self.catat_langkah(hasil, "Negasi Ganda: ¬¬p ≡ p")
                        break
                    count -= 1
                i += 1
        
        return hasil
    
    def simplify_de_morgan(self, ekspresi):
        """Terapkan hukum De Morgan"""
        hasil = ekspresi
        
        # not (p and q) = (not p) or (not q)
        # not (p or q) = (not p) and (not q)
        
        # Untuk simplifikasi, kita cari pola sederhana
        if "not (" in hasil and " and " in hasil:
            # Contoh: not (p and q)
            if "not (p and q)" in hasil:
                hasil = hasil.replace("not (p and q)", "(not p) or (not q)")
                self.catat_langkah(hasil, "De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q")
        
        if "not (" in hasil and " or " in hasil:
            # Contoh: not (p or q)
            if "not (p or q)" in hasil:
                hasil = hasil.replace("not (p or q)", "(not p) and (not q)")
                self.catat_langkah(hasil, "De Morgan: ¬(p ∨ q) ≡ ¬p ∧ ¬q")
        
        return hasil
    
    def simplify(self, ekspresi):
        """Lakukan penyederhanaan lengkap"""
        self.langkah_penyederhanaan = []
        self.catat_langkah(ekspresi, "Ekspresi awal")
        
        hasil = ekspresi
        iterasi = 0
        max_iterasi = 10
        
        while iterasi < max_iterasi:
            hasil_lama = hasil
            
            # Terapkan hukum-hukum
            hasil = self.simplify_negasi_ganda(hasil)
            hasil = self.simplify_de_morgan(hasil)
            hasil = self.simplify_identitas(hasil)
            hasil = self.simplify_dominasi(hasil)
            
            # Jika tidak ada perubahan, stop
            if hasil == hasil_lama:
                break
            
            iterasi += 1
        
        return hasil
    
    def tampilkan_langkah(self):
        """Tampilkan semua langkah penyederhanaan"""
        print("\\n" + "=" * 70)
        print("LANGKAH-LANGKAH PENYEDERHANAAN")
        print("=" * 70)
        
        for i, langkah in enumerate(self.langkah_penyederhanaan):
            if i == 0:
                print(f"Langkah 0: {langkah['ekspresi']}")
                print(f"         ({langkah['hukum']})")
            else:
                print(f"\\nLangkah {i}: {langkah['ekspresi']}")
                print(f"         [Hukum: {langkah['hukum']}]")
        
        print("\\n" + "=" * 70)
        print(f"✅ Hasil akhir: {self.langkah_penyederhanaan[-1]['ekspresi']}")
        print("=" * 70)

def demo_simplifikasi():
    """Demo simplifikasi ekspresi"""
    simplifier = LogicSimplifier()
    
    print("\\n" + "🔷" * 35)
    print("  DEMO: SIMPLIFIKASI EKSPRESI LOGIKA")
    print("🔷" * 35)
    
    contoh_ekspresi = [
        "not (not p)",
        "p and True",
        "p or False",
        "p and False",
        "not (p and q)",
        "not (p or q)",
    ]
    
    for i, ekspresi in enumerate(contoh_ekspresi, 1):
        print(f"\\n\\n📌 CONTOH {i}")
        print("=" * 70)
        print(f"Ekspresi awal: {ekspresi}")
        
        hasil = simplifier.simplify(ekspresi)
        simplifier.tampilkan_langkah()

def main():
    """Fungsi utama"""
    print("\\n" + "=" * 70)
    print("  SIMPLIFIER EKSPRESI LOGIKA")
    print("=" * 70)
    
    demo_simplifikasi()
    
    print("\\n\\n" + "=" * 70)
    print("✓ Demo selesai!")
    print("=" * 70 + "\\n")

if __name__ == "__main__":
    main()
```

---

## 🎓 Rangkuman

### Poin Penting Bab Ini:

1. ✅ **Ekuivalensi Logika**
   - Dua ekspresi ekuivalen jika selalu punya nilai sama
   - Dibuktikan dengan tabel kebenaran atau transformasi aljabar

2. ✅ **Hukum-Hukum Penting**
   - **De Morgan**: Paling sering digunakan untuk menyederhanakan
   - **Distributif**: Mirip aljabar biasa
   - **Absorpsi**: Menghilangkan redundansi

3. ✅ **Aplikasi Praktis**
   - Optimasi query database
   - Simplifikasi kondisi dalam programming
   - Desain rangkaian digital yang efisien

---

## 🚀 Selanjutnya

Di [Bab 6](./06-inferensi-logika-1.md), kita akan mempelajari:
- 🎯 **Argumen Valid dan Invalid**
- 📐 **Aturan Inferensi** (Modus Ponens, Modus Tollens, dll)
- 🔍 **Metode Pembuktian**
- 🧮 **Penalaran Logika**

---

## 📚 Referensi

- Rosen, K. H. (2019). *Discrete Mathematics and Its Applications* (Ch. 1.3)
- [Boolean Algebra Laws](https://www.electronics-tutorials.ws/boolean/bool_6.html)
- [Logic Simplification Tool](https://www.boolean-algebra.com/)

---

**Selamat! Anda sudah menguasai ekuivalensi logika!** 🎉

← [Bab 4: Ekuivalensi Logika (Bagian 1)](./04-ekuivalensi-logika-1.md) | [Bab 6: Inferensi Logika (Bagian 1)](./06-inferensi-logika-1.md) →
