# 🧮 Bab 7: Inferensi Logika (Bagian 2)

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Mengimplementasikan aturan inferensi dalam program
- ✅ Membuat sistem reasoning otomatis
- ✅ Menerapkan metode pembuktian formal
- ✅ Memvalidasi argumen secara komputasional

---

## 💻 Implementasi dalam Kode

### Contoh Program 1: Inference Engine (Mesin Inferensi)

#### Python
```python
"""
Program: Inference Engine
Deskripsi: Sistem untuk melakukan penalaran logis otomatis
"""

class Proposisi:
    """Class untuk merepresentasikan proposisi"""
    
    def __init__(self, simbol, deskripsi=""):
        self.simbol = simbol
        self.deskripsi = deskripsi
        self.nilai = None  # None = unknown, True/False = known
    
    def __str__(self):
        status = "?" if self.nilai is None else ("T" if self.nilai else "F")
        return f"{self.simbol} [{status}]: {self.deskripsi}"
    
    def __repr__(self):
        return self.simbol

class Implikasi:
    """Class untuk merepresentasikan aturan implikasi p → q"""
    
    def __init__(self, antecedent, consequent, nama=""):
        self.antecedent = antecedent  # p (bisa list untuk konjungsi)
        self.consequent = consequent  # q
        self.nama = nama
    
    def __str__(self):
        if isinstance(self.antecedent, list):
            ant_str = " ∧ ".join([str(a) for a in self.antecedent])
        else:
            ant_str = str(self.antecedent)
        return f"{ant_str} → {self.consequent}"

class InferenceEngine:
    """Mesin inferensi untuk penalaran forward chaining"""
    
    def __init__(self):
        self.proposisi = {}  # Dictionary: simbol → Proposisi
        self.aturan = []     # List of Implikasi
        self.langkah_inferensi = []
    
    def tambah_proposisi(self, simbol, deskripsi="", nilai=None):
        """Tambahkan proposisi ke knowledge base"""
        prop = Proposisi(simbol, deskripsi)
        prop.nilai = nilai
        self.proposisi[simbol] = prop
        return prop
    
    def tambah_aturan(self, antecedent, consequent, nama=""):
        """Tambahkan aturan inferensi p → q"""
        aturan = Implikasi(antecedent, consequent, nama)
        self.aturan.append(aturan)
        return aturan
    
    def set_nilai(self, simbol, nilai):
        """Set nilai kebenaran proposisi"""
        if simbol in self.proposisi:
            old_val = self.proposisi[simbol].nilai
            self.proposisi[simbol].nilai = nilai
            
            if old_val is None:
                self.langkah_inferensi.append({
                    'aksi': 'set_fakta',
                    'proposisi': simbol,
                    'nilai': nilai,
                    'deskripsi': f"Fakta: {simbol} = {nilai}"
                })
    
    def cek_antecedent(self, antecedent):
        """Cek apakah antecedent terpenuhi"""
        if isinstance(antecedent, list):
            # Konjungsi: semua harus TRUE
            for ant in antecedent:
                simbol = ant if isinstance(ant, str) else ant.simbol
                if simbol not in self.proposisi or self.proposisi[simbol].nilai != True:
                    return False
            return True
        else:
            # Single proposisi
            simbol = antecedent if isinstance(antecedent, str) else antecedent.simbol
            return simbol in self.proposisi and self.proposisi[simbol].nilai == True
    
    def forward_chaining(self, max_iterasi=100):
        """
        Forward chaining: Dari fakta menuju kesimpulan
        Menerapkan aturan inferensi secara berulang
        """
        print("\\n" + "=" * 70)
        print("FORWARD CHAINING - PENALARAN DARI FAKTA KE KESIMPULAN")
        print("=" * 70)
        
        iterasi = 0
        ada_perubahan = True
        
        while ada_perubahan and iterasi < max_iterasi:
            ada_perubahan = False
            iterasi += 1
            
            print(f"\\n--- Iterasi {iterasi} ---")
            
            for aturan in self.aturan:
                # Cek apakah antecedent terpenuhi
                if self.cek_antecedent(aturan.antecedent):
                    # Ambil consequent
                    cons_simbol = aturan.consequent if isinstance(aturan.consequent, str) else aturan.consequent.simbol
                    
                    # Jika consequent belum diketahui, set ke TRUE
                    if cons_simbol in self.proposisi and self.proposisi[cons_simbol].nilai is None:
                        self.proposisi[cons_simbol].nilai = True
                        ada_perubahan = True
                        
                        # Catat langkah inferensi
                        if isinstance(aturan.antecedent, list):
                            ant_str = " ∧ ".join([str(a) for a in aturan.antecedent])
                        else:
                            ant_str = str(aturan.antecedent)
                        
                        print(f"✓ Modus Ponens: {ant_str} → {cons_simbol}")
                        print(f"  Karena {ant_str} = TRUE")
                        print(f"  Maka {cons_simbol} = TRUE")
                        
                        self.langkah_inferensi.append({
                            'aksi': 'inferensi',
                            'aturan': str(aturan),
                            'metode': 'Modus Ponens',
                            'hasil': cons_simbol,
                            'deskripsi': f"Dari {ant_str}, disimpulkan {cons_simbol}"
                        })
        
        print(f"\\n✓ Forward chaining selesai dalam {iterasi} iterasi")
        return iterasi
    
    def tampilkan_knowledge_base(self):
        """Tampilkan semua proposisi dan aturan"""
        print("\\n" + "=" * 70)
        print("KNOWLEDGE BASE")
        print("=" * 70)
        
        print("\\nProposisi:")
        for simbol, prop in self.proposisi.items():
            print(f"  {prop}")
        
        print("\\nAturan:")
        for i, aturan in enumerate(self.aturan, 1):
            print(f"  R{i}: {aturan}")
            if aturan.nama:
                print(f"      ({aturan.nama})")
        
        print("=" * 70)
    
    def tampilkan_hasil(self):
        """Tampilkan hasil inferensi"""
        print("\\n" + "=" * 70)
        print("HASIL INFERENSI")
        print("=" * 70)
        
        for simbol, prop in self.proposisi.items():
            if prop.nilai is not None:
                status = "✓ TRUE" if prop.nilai else "✗ FALSE"
                print(f"  {simbol}: {status}")
                if prop.deskripsi:
                    print(f"      ({prop.deskripsi})")
        
        print("=" * 70)

def demo_sistem_pakar_medis():
    """Demo: Sistem pakar diagnosis sederhana"""
    print("\\n" + "🏥" * 35)
    print("  DEMO: SISTEM PAKAR DIAGNOSIS MEDIS")
    print("🏥" * 35)
    
    engine = InferenceEngine()
    
    # Definisi proposisi (gejala dan diagnosis)
    engine.tambah_proposisi("demam", "Pasien mengalami demam")
    engine.tambah_proposisi("batuk", "Pasien mengalami batuk")
    engine.tambah_proposisi("pilek", "Pasien mengalami pilek")
    engine.tambah_proposisi("sesak", "Pasien sesak napas")
    
    engine.tambah_proposisi("flu", "Diagnosis: Flu")
    engine.tambah_proposisi("covid", "Diagnosis: COVID-19")
    engine.tambah_proposisi("batuk_biasa", "Diagnosis: Batuk biasa")
    
    # Definisi aturan diagnosis
    engine.tambah_aturan(
        ["demam", "batuk", "pilek"],
        "flu",
        "Jika demam, batuk, dan pilek → Flu"
    )
    
    engine.tambah_aturan(
        ["demam", "batuk", "sesak"],
        "covid",
        "Jika demam, batuk, dan sesak → COVID-19"
    )
    
    engine.tambah_aturan(
        "batuk",
        "batuk_biasa",
        "Jika hanya batuk → Batuk biasa"
    )
    
    # Tampilkan knowledge base
    engine.tampilkan_knowledge_base()
    
    # Set fakta (gejala pasien)
    print("\\n" + "=" * 70)
    print("INPUT GEJALA PASIEN")
    print("=" * 70)
    print("Gejala yang dialami:")
    engine.set_nilai("demam", True)
    print("  ✓ Demam")
    engine.set_nilai("batuk", True)
    print("  ✓ Batuk")
    engine.set_nilai("pilek", True)
    print("  ✓ Pilek")
    
    # Jalankan inferensi
    engine.forward_chaining()
    
    # Tampilkan hasil
    engine.tampilkan_hasil()
    
    print("\\n💡 Kesimpulan: Pasien kemungkinan menderita FLU")

def demo_sistem_keamanan():
    """Demo: Sistem keamanan akses gedung"""
    print("\\n" + "🔐" * 35)
    print("  DEMO: SISTEM KEAMANAN AKSES GEDUNG")
    print("🔐" * 35)
    
    engine = InferenceEngine()
    
    # Proposisi
    engine.tambah_proposisi("kartu_valid", "Kartu akses valid")
    engine.tambah_proposisi("fingerprint_match", "Sidik jari cocok")
    engine.tambah_proposisi("jam_kerja", "Dalam jam kerja")
    engine.tambah_proposisi("level_1_ok", "Autentikasi level 1 OK")
    engine.tambah_proposisi("level_2_ok", "Autentikasi level 2 OK")
    engine.tambah_proposisi("akses_granted", "Akses diberikan")
    
    # Aturan keamanan
    engine.tambah_aturan(
        "kartu_valid",
        "level_1_ok",
        "Kartu valid → Level 1 OK"
    )
    
    engine.tambah_aturan(
        ["level_1_ok", "fingerprint_match"],
        "level_2_ok",
        "Level 1 OK + Fingerprint → Level 2 OK"
    )
    
    engine.tambah_aturan(
        ["level_2_ok", "jam_kerja"],
        "akses_granted",
        "Level 2 OK + Jam kerja → Akses granted"
    )
    
    engine.tampilkan_knowledge_base()
    
    # Skenario: Karyawan mencoba masuk
    print("\\n" + "=" * 70)
    print("SKENARIO: Karyawan tap kartu pada pukul 09:00")
    print("=" * 70)
    
    engine.set_nilai("kartu_valid", True)
    engine.set_nilai("fingerprint_match", True)
    engine.set_nilai("jam_kerja", True)
    
    engine.forward_chaining()
    engine.tampilkan_hasil()

def demo_troubleshooting_komputer():
    """Demo: Troubleshooting masalah komputer"""
    print("\\n" + "💻" * 35)
    print("  DEMO: TROUBLESHOOTING KOMPUTER")
    print("💻" * 35)
    
    engine = InferenceEngine()
    
    # Proposisi
    engine.tambah_proposisi("komputer_mati", "Komputer tidak menyala")
    engine.tambah_proposisi("lampu_power_mati", "Lampu power mati")
    engine.tambah_proposisi("kipas_mati", "Kipas tidak berputar")
    
    engine.tambah_proposisi("masalah_listrik", "Masalah power supply/listrik")
    engine.tambah_proposisi("masalah_motherboard", "Masalah motherboard")
    engine.tambah_proposisi("cek_kabel_power", "Solusi: Cek kabel power")
    engine.tambah_proposisi("ganti_psu", "Solusi: Ganti PSU")
    
    # Aturan troubleshooting
    engine.tambah_aturan(
        ["komputer_mati", "lampu_power_mati"],
        "masalah_listrik",
        "Komputer mati + Lampu mati → Masalah listrik"
    )
    
    engine.tambah_aturan(
        "masalah_listrik",
        "cek_kabel_power",
        "Masalah listrik → Cek kabel power"
    )
    
    engine.tambah_aturan(
        ["komputer_mati", "kipas_mati", "lampu_power_mati"],
        "ganti_psu",
        "Semua mati → Ganti PSU"
    )
    
    engine.tampilkan_knowledge_base()
    
    print("\\n" + "=" * 70)
    print("GEJALA YANG DIALAMI")
    print("=" * 70)
    
    engine.set_nilai("komputer_mati", True)
    engine.set_nilai("lampu_power_mati", True)
    engine.set_nilai("kipas_mati", True)
    
    engine.forward_chaining()
    engine.tampilkan_hasil()

def main():
    """Fungsi utama"""
    print("\\n" + "=" * 70)
    print("  INFERENCE ENGINE - MESIN PENALARAN LOGIS")
    print("=" * 70)
    
    demo_sistem_pakar_medis()
    demo_sistem_keamanan()
    demo_troubleshooting_komputer()
    
    print("\\n" + "=" * 70)
    print("✓ Semua demo selesai!")
    print("=" * 70 + "\\n")

if __name__ == "__main__":
    main()
```

**Output Contoh:**
```
🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥
  DEMO: SISTEM PAKAR DIAGNOSIS MEDIS
🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥

======================================================================
KNOWLEDGE BASE
======================================================================

Proposisi:
  demam [?]: Pasien mengalami demam
  batuk [?]: Pasien mengalami batuk
  pilek [?]: Pasien mengalami pilek
  flu [?]: Diagnosis: Flu

Aturan:
  R1: demam ∧ batuk ∧ pilek → flu
      (Jika demam, batuk, dan pilek → Flu)

======================================================================
FORWARD CHAINING - PENALARAN DARI FAKTA KE KESIMPULAN
======================================================================

--- Iterasi 1 ---
✓ Modus Ponens: demam ∧ batuk ∧ pilek → flu
  Karena demam ∧ batuk ∧ pilek = TRUE
  Maka flu = TRUE

✓ Forward chaining selesai dalam 1 iterasi

======================================================================
HASIL INFERENSI
======================================================================
  demam: ✓ TRUE
      (Pasien mengalami demam)
  batuk: ✓ TRUE
      (Pasien mengalami batuk)
  pilek: ✓ TRUE
      (Pasien mengalami pilek)
  flu: ✓ TRUE
      (Diagnosis: Flu)
======================================================================
```

---

#### Bahasa C
```c
/*
 * Program: Simple Inference Engine
 * Deskripsi: Implementasi Modus Ponens sederhana dalam C
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>
#include <string.h>

#define MAX_PROPOSISI 50
#define MAX_ATURAN 20
#define MAX_NAMA 100

// Struktur untuk proposisi
typedef struct {
    char simbol[10];
    char deskripsi[MAX_NAMA];
    bool nilai;      // Nilai kebenaran
    bool diketahui;  // Apakah nilai sudah diketahui
} Proposisi;

// Struktur untuk aturan implikasi (p → q)
typedef struct {
    char antecedent[10];  // p
    char consequent[10];  // q
    char nama[MAX_NAMA];
} Aturan;

// Knowledge Base
typedef struct {
    Proposisi proposisi[MAX_PROPOSISI];
    int jumlah_proposisi;
    Aturan aturan[MAX_ATURAN];
    int jumlah_aturan;
} KnowledgeBase;

// Fungsi untuk inisialisasi KB
void init_kb(KnowledgeBase *kb) {
    kb->jumlah_proposisi = 0;
    kb->jumlah_aturan = 0;
}

// Fungsi untuk menambah proposisi
void tambah_proposisi(KnowledgeBase *kb, const char *simbol, const char *deskripsi) {
    if (kb->jumlah_proposisi < MAX_PROPOSISI) {
        strcpy(kb->proposisi[kb->jumlah_proposisi].simbol, simbol);
        strcpy(kb->proposisi[kb->jumlah_proposisi].deskripsi, deskripsi);
        kb->proposisi[kb->jumlah_proposisi].diketahui = false;
        kb->jumlah_proposisi++;
    }
}

// Fungsi untuk menambah aturan
void tambah_aturan(KnowledgeBase *kb, const char *ant, const char *cons, const char *nama) {
    if (kb->jumlah_aturan < MAX_ATURAN) {
        strcpy(kb->aturan[kb->jumlah_aturan].antecedent, ant);
        strcpy(kb->aturan[kb->jumlah_aturan].consequent, cons);
        strcpy(kb->aturan[kb->jumlah_aturan].nama, nama);
        kb->jumlah_aturan++;
    }
}

// Fungsi untuk set nilai proposisi
void set_nilai(KnowledgeBase *kb, const char *simbol, bool nilai) {
    for (int i = 0; i < kb->jumlah_proposisi; i++) {
        if (strcmp(kb->proposisi[i].simbol, simbol) == 0) {
            kb->proposisi[i].nilai = nilai;
            kb->proposisi[i].diketahui = true;
            printf("  ✓ Set: %s = %s\\n", simbol, nilai ? "TRUE" : "FALSE");
            return;
        }
    }
}

// Fungsi untuk mendapatkan nilai proposisi
bool get_nilai(KnowledgeBase *kb, const char *simbol, bool *nilai) {
    for (int i = 0; i < kb->jumlah_proposisi; i++) {
        if (strcmp(kb->proposisi[i].simbol, simbol) == 0) {
            if (kb->proposisi[i].diketahui) {
                *nilai = kb->proposisi[i].nilai;
                return true;
            }
            return false;
        }
    }
    return false;
}

// Fungsi untuk forward chaining (Modus Ponens)
int forward_chaining(KnowledgeBase *kb) {
    printf("\\n");
    printf("======================================================================\\n");
    printf("FORWARD CHAINING - MODUS PONENS\\n");
    printf("======================================================================\\n");
    
    int iterasi = 0;
    bool ada_perubahan = true;
    
    while (ada_perubahan && iterasi < 10) {
        ada_perubahan = false;
        iterasi++;
        
        printf("\\n--- Iterasi %d ---\\n", iterasi);
        
        for (int i = 0; i < kb->jumlah_aturan; i++) {
            Aturan *aturan = &kb->aturan[i];
            
            // Cek apakah antecedent TRUE
            bool nilai_ant;
            if (get_nilai(kb, aturan->antecedent, &nilai_ant) && nilai_ant) {
                // Cek apakah consequent belum diketahui
                bool nilai_cons;
                bool cons_diketahui = get_nilai(kb, aturan->consequent, &nilai_cons);
                
                if (!cons_diketahui) {
                    // Terapkan Modus Ponens
                    set_nilai(kb, aturan->consequent, true);
                    printf("  ✓ Modus Ponens: %s → %s\\n", 
                           aturan->antecedent, aturan->consequent);
                    printf("    Karena %s = TRUE\\n", aturan->antecedent);
                    printf("    Maka %s = TRUE\\n", aturan->consequent);
                    ada_perubahan = true;
                }
            }
        }
    }
    
    printf("\\n✓ Forward chaining selesai dalam %d iterasi\\n", iterasi);
    return iterasi;
}

// Fungsi untuk tampilkan knowledge base
void tampilkan_kb(KnowledgeBase *kb) {
    printf("\\n");
    printf("======================================================================\\n");
    printf("KNOWLEDGE BASE\\n");
    printf("======================================================================\\n");
    
    printf("\\nProposisi:\\n");
    for (int i = 0; i < kb->jumlah_proposisi; i++) {
        char status[10];
        if (kb->proposisi[i].diketahui) {
            strcpy(status, kb->proposisi[i].nilai ? "T" : "F");
        } else {
            strcpy(status, "?");
        }
        printf("  %s [%s]: %s\\n", 
               kb->proposisi[i].simbol, 
               status,
               kb->proposisi[i].deskripsi);
    }
    
    printf("\\nAturan:\\n");
    for (int i = 0; i < kb->jumlah_aturan; i++) {
        printf("  R%d: %s → %s\\n", i+1,
               kb->aturan[i].antecedent,
               kb->aturan[i].consequent);
        if (strlen(kb->aturan[i].nama) > 0) {
            printf("      (%s)\\n", kb->aturan[i].nama);
        }
    }
    
    printf("======================================================================\\n");
}

// Fungsi untuk tampilkan hasil
void tampilkan_hasil(KnowledgeBase *kb) {
    printf("\\n");
    printf("======================================================================\\n");
    printf("HASIL INFERENSI\\n");
    printf("======================================================================\\n");
    
    for (int i = 0; i < kb->jumlah_proposisi; i++) {
        if (kb->proposisi[i].diketahui) {
            printf("  %s: %s %s\\n",
                   kb->proposisi[i].simbol,
                   kb->proposisi[i].nilai ? "✓ TRUE" : "✗ FALSE",
                   kb->proposisi[i].deskripsi);
        }
    }
    
    printf("======================================================================\\n");
}

// Demo sistem pakar sederhana
void demo_sistem_diagnosis() {
    printf("\\n🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥\\n");
    printf("  DEMO: SISTEM DIAGNOSIS SEDERHANA\\n");
    printf("🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥\\n");
    
    KnowledgeBase kb;
    init_kb(&kb);
    
    // Tambah proposisi
    tambah_proposisi(&kb, "demam", "Pasien demam");
    tambah_proposisi(&kb, "batuk", "Pasien batuk");
    tambah_proposisi(&kb, "flu", "Diagnosis: Flu");
    tambah_proposisi(&kb, "istirahat", "Rekomendasi: Istirahat");
    
    // Tambah aturan
    tambah_aturan(&kb, "demam", "flu", "Demam → Flu");
    tambah_aturan(&kb, "flu", "istirahat", "Flu → Istirahat");
    
    // Tampilkan KB
    tampilkan_kb(&kb);
    
    // Set fakta
    printf("\\n");
    printf("======================================================================\\n");
    printf("INPUT GEJALA\\n");
    printf("======================================================================\\n");
    set_nilai(&kb, "demam", true);
    
    // Inferensi
    forward_chaining(&kb);
    
    // Hasil
    tampilkan_hasil(&kb);
}

int main() {
    printf("\\n");
    printf("======================================================================\\n");
    printf("  INFERENCE ENGINE (C) - MODUS PONENS SEDERHANA\\n");
    printf("======================================================================\\n");
    
    demo_sistem_diagnosis();
    
    printf("\\n");
    printf("======================================================================\\n");
    printf("✓ Demo selesai!\\n");
    printf("======================================================================\\n\\n");
    
    return 0;
}
```

**Compile:**
```bash
gcc -o inference inference_engine.c
./inference
```

---

## 🎯 Metode Pembuktian (Proof Methods)

### 1. **Direct Proof (Pembuktian Langsung)**

Untuk membuktikan **p → q**:
1. Asumsikan p adalah BENAR
2. Gunakan aturan inferensi dan definisi
3. Tunjukkan bahwa q PASTI BENAR

**Contoh:**
```
Buktikan: "Jika n genap, maka n² genap"

Pembuktian:
1. Asumsikan n genap
2. Maka n = 2k untuk suatu integer k
3. n² = (2k)² = 4k² = 2(2k²)
4. Karena n² = 2m (dimana m = 2k²)
5. Maka n² genap ✅
```

---

### 2. **Proof by Contraposition (Kontraposisi)**

Untuk membuktikan **p → q**:
- Buktikan **¬q → ¬p** (ekuivalen!)

**Contoh:**
```
Buktikan: "Jika n² genap, maka n genap"

Pembuktian (kontraposisi):
Buktikan: "Jika n ganjil, maka n² ganjil"

1. Asumsikan n ganjil
2. Maka n = 2k + 1 untuk suatu integer k
3. n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1
4. Maka n² ganjil ✅

Karena ¬q → ¬p benar, maka p → q benar!
```

---

### 3. **Proof by Contradiction (Kontradiksi)**

Untuk membuktikan p:
1. Asumsikan ¬p
2. Tunjukkan ini menghasilkan kontradiksi
3. Maka p PASTI BENAR

**Contoh:**
```
Buktikan: "√2 adalah bilangan irasional"

Pembuktian:
1. Asumsikan √2 RASIONAL (kontradiksi asumsi)
2. Maka √2 = a/b dimana a dan b coprime
3. 2 = a²/b²
4. 2b² = a²
5. Maka a² genap, berarti a genap
6. Maka a = 2k
7. 2b² = (2k)² = 4k²
8. b² = 2k²
9. Maka b² genap, berarti b genap
10. Kontradiksi! (a dan b sama-sama genap, tidak coprime)
11. Maka asumsi salah, √2 IRASIONAL ✅
```

---

## 🎓 Rangkuman

### Poin Penting Bab Ini:

1. ✅ **Inference Engine**
   - Forward chaining: Dari fakta ke kesimpulan
   - Backward chaining: Dari goal ke fakta
   - Aplikasi: Sistem pakar, AI reasoning

2. ✅ **Metode Pembuktian**
   - **Direct**: Langsung dari premis ke kesimpulan
   - **Contraposition**: Buktikan kontraposisinya
   - **Contradiction**: Tunjukkan negasinya kontradiksi

3. ✅ **Aplikasi Nyata**
   - Sistem diagnosis medis
   - Troubleshooting teknis
   - Sistem keamanan
   - AI dan expert systems

---

## 🚀 Selanjutnya

Di [Bab 8](./08-kuantor-1.md), kita akan mempelajari:
- 🔢 **Logika Predikat**
- ∀ **Kuantor Universal** (untuk semua)
- ∃ **Kuantor Eksistensial** (ada)
- 🎯 **Nested Quantifiers**

---

## 📚 Referensi

- Russell, S. & Norvig, P. (2020). *Artificial Intelligence: A Modern Approach*
- [Expert Systems - Stanford](https://cs.stanford.edu/people/eroberts/courses/soco/projects/2003-04/expert-systems/)
- [Forward vs Backward Chaining](https://www.javatpoint.com/forward-chaining-vs-backward-chaining-in-ai)

---

**Selamat! Anda sudah bisa membuat sistem penalaran otomatis!** 🎉

← [Bab 6: Inferensi Logika (Bagian 1)](./06-inferensi-logika-1.md) | [Bab 8: Kuantor (Bagian 1)](./08-kuantor-1.md) →
