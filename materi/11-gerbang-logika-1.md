# ⚡ Bab 11: Gerbang Logika (Bagian 1)

## 📌 Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda dapat:
- ✅ Memahami konsep gerbang logika
- ✅ Mengenal gerbang dasar: NOT, AND, OR
- ✅ Membaca simbol dan tabel kebenaran gerbang
- ✅ Mengimplementasikan gerbang dalam kode
- ✅ Membangun rangkaian kombinasional sederhana

---

## 🎯 Apa itu Gerbang Logika?

> **Gerbang Logika** (Logic Gate) adalah komponen elektronik dasar yang melakukan operasi Boolean pada sinyal input dan menghasilkan output.

### Karakteristik Gerbang Logika

**Input dan Output:**
- Input: Sinyal digital (0 atau 1)
- Output: Hasil operasi Boolean (0 atau 1)
- 0 = Low voltage (0V)
- 1 = High voltage (3.3V atau 5V)

**Implementasi Fisik:**
- Transistor (BJT, MOSFET)
- IC (Integrated Circuit)
- FPGA/ASIC
- Software (simulasi)

---

## 🔌 Hubungan dengan Aljabar Boolean

| Aljabar Boolean | Gerbang Logika | Simbol |
|-----------------|----------------|--------|
| A' atau ¬A | NOT gate | Segitiga dengan lingkaran |
| A · B atau A ∧ B | AND gate | Bentuk D |
| A + B atau A ∨ B | OR gate | Bentuk perisai |

**Perbedaan Utama:**
- **Aljabar Boolean**: Matematika abstrak
- **Gerbang Logika**: Implementasi hardware fisik

---

## 🚫 Gerbang NOT (Inverter)

### Definisi

> **Gerbang NOT** membalik (invert) nilai input.

**Operasi:**
```
Output = NOT Input
Y = A'
```

### Simbol

```
     A ──┤>o─── Y
         NOT
```

**Komponen:**
- Segitiga = Buffer/Amplifier
- Lingkaran kecil (o) = Inversi

### Tabel Kebenaran

| A (Input) | Y = A' (Output) |
|-----------|-----------------|
| 0 | 1 |
| 1 | 0 |

### Aplikasi Nyata

1. **Sinyal Kontrol Terbalik**
   ```
   ENABLE = 1 → Motor ON
   DISABLE = NOT ENABLE = 0 → Motor OFF
   ```

2. **Indikator LED Terbalik**
   ```
   Button pressed (1) → LED OFF (0)
   Button released (0) → LED ON (1)
   ```

3. **Complement Generator**
   - Menghasilkan komplemen biner
   - Digunakan dalam aritmatika komputer

### Implementasi Hardware

**Menggunakan Transistor:**
```
         Vcc (+5V)
          │
          R (Resistor)
          │
          ├────── Y (Output)
          │
         ┌┴┐
    A ───│ │ Transistor
         └┬┘
          │
         GND
```

**Cara Kerja:**
- Jika A = 1 (High): Transistor ON → Y = 0 (Low)
- Jika A = 0 (Low): Transistor OFF → Y = 1 (High)

---

## 🔗 Gerbang AND

### Definisi

> **Gerbang AND** menghasilkan output 1 HANYA jika SEMUA input bernilai 1.

**Operasi:**
```
Output = Input1 AND Input2
Y = A · B
Y = A ∧ B
```

### Simbol

```
    A ──┐
        │  ╱╲
        ├─┤  ├─── Y
        │  ╲╱
    B ──┘
       AND
```

### Tabel Kebenaran

| A | B | Y = A · B |
|---|---|-----------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

**Ingat:** Output 1 HANYA jika A=1 **DAN** B=1

### Aplikasi Nyata

1. **Sistem Keamanan (Enable Signal)**
   ```
   Door_Locked AND Alarm_Armed → Security_Active
   ```

2. **Kontrol Motor**
   ```
   Power_ON AND Safety_OK → Motor_Start
   ```

3. **Login System**
   ```python
   if (username_correct AND password_correct):
       login_success()
   ```

4. **Bit Masking**
   ```
   Data: 1 0 1 1 0 1 0 1
   Mask: 1 1 1 1 0 0 0 0
   AND:  1 0 1 1 0 0 0 0
   ```

### Variasi Gerbang AND

**AND 3-Input:**
```
Y = A · B · C
```

| A | B | C | Y |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| ... | ... | ... | ... |
| 1 | 1 | 1 | **1** |

**AND N-Input:**
- Output 1 hanya jika **SEMUA** input = 1
- Digunakan untuk enable multiple conditions

---

## ➕ Gerbang OR

### Definisi

> **Gerbang OR** menghasilkan output 1 jika MINIMAL SATU input bernilai 1.

**Operasi:**
```
Output = Input1 OR Input2
Y = A + B
Y = A ∨ B
```

### Simbol

```
    A ──┐
        │ /‾‾\
        ├─(   )─── Y
        │ \__/
    B ──┘
        OR
```

### Tabel Kebenaran

| A | B | Y = A + B |
|---|---|-----------|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | **1** |

**Ingat:** Output 0 HANYA jika A=0 **DAN** B=0

### Aplikasi Nyata

1. **Alarm System (Multiple Triggers)**
   ```
   Motion_Detected OR Door_Opened → Alarm_ON
   ```

2. **Error Detection**
   ```
   if (network_error OR disk_error OR memory_error):
       system_alert()
   ```

3. **User Input**
   ```python
   if (mouse_click OR keyboard_press OR touch_input):
       handle_event()
   ```

4. **Bit Setting**
   ```
   Data: 1 0 1 0 0 1 0 1
   Set:  0 1 0 1 0 0 0 0
   OR:   1 1 1 1 0 1 0 1
   ```

### Variasi Gerbang OR

**OR 3-Input:**
```
Y = A + B + C
```

| A | B | C | Y |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | **1** |
| ... | ... | ... | ... |
| 1 | 1 | 1 | **1** |

**OR N-Input:**
- Output 0 hanya jika **SEMUA** input = 0
- Digunakan untuk multiple trigger conditions

---

## 📊 Perbandingan Gerbang Dasar

| Gerbang | Simbol | Operasi | Output 1 ketika | Output 0 ketika |
|---------|--------|---------|-----------------|-----------------|
| **NOT** | ─┤>o─ | Y = A' | A = 0 | A = 1 |
| **AND** | ─┤ ╱╲ ├─ | Y = A·B | A=1 DAN B=1 | Ada yang 0 |
| **OR** | ─┤/‾‾\├─ | Y = A+B | Min. satu = 1 | Semua = 0 |

---

## 🔨 Rangkaian Kombinasional

### Contoh 1: Rangkaian Sederhana

**Soal:** Buat rangkaian untuk: Y = A'·B + C

**Solusi:**
```
A ──┤>o─┐
        │ ╱╲
        ├─┤  ├─┐
B ──────┘  ╲╱  │ /‾‾\
                ├─(   )─── Y
C ──────────────┘ \__/

Langkah:
1. NOT A → A'
2. A' AND B → A'·B
3. (A'·B) OR C → Y
```

**Tabel Kebenaran:**

| A | B | C | A' | A'·B | Y = A'·B + C |
|---|---|---|----|------|--------------|
| 0 | 0 | 0 | 1  | 0    | 0 |
| 0 | 0 | 1 | 1  | 0    | 1 |
| 0 | 1 | 0 | 1  | 1    | 1 |
| 0 | 1 | 1 | 1  | 1    | 1 |
| 1 | 0 | 0 | 0  | 0    | 0 |
| 1 | 0 | 1 | 0  | 0    | 1 |
| 1 | 1 | 0 | 0  | 0    | 0 |
| 1 | 1 | 1 | 0  | 0    | 1 |

---

### Contoh 2: Majority Voter (2 dari 3)

**Deskripsi:** Output 1 jika minimal 2 dari 3 input bernilai 1

**Ekspresi Boolean:**
```
Y = A·B + B·C + A·C
```

**Rangkaian:**
```
A ──┐  ╱╲
    ├──┤  ├─┐
B ──┼──╲╱  │
    │      │
B ──┼──╱╲  │ /‾‾\
    ├──┤  ├─┼─(   )─── Y
C ──┼──╲╱  │ \__/
    │      │
A ──┼──╱╲  │
    ├──┤  ├─┘
C ──┘  ╲╱
```

**Tabel Kebenaran:**

| A | B | C | A·B | B·C | A·C | Y |
|---|---|---|-----|-----|-----|---|
| 0 | 0 | 0 | 0   | 0   | 0   | 0 |
| 0 | 0 | 1 | 0   | 0   | 0   | 0 |
| 0 | 1 | 0 | 0   | 0   | 0   | 0 |
| 0 | 1 | 1 | 0   | 1   | 0   | **1** |
| 1 | 0 | 0 | 0   | 0   | 0   | 0 |
| 1 | 0 | 1 | 0   | 0   | 1   | **1** |
| 1 | 1 | 0 | 1   | 0   | 0   | **1** |
| 1 | 1 | 1 | 1   | 1   | 1   | **1** |

**Aplikasi:** Sistem voting, fault tolerance, redundancy systems

---

## 💻 Implementasi dalam Kode

### Program 1: Logic Gate Simulator

#### Python
```python
"""
Program: Simulator Gerbang Logika Dasar
Deskripsi: Simulasi NOT, AND, OR gates dengan visualisasi
"""

class LogicGate:
    """Class untuk simulasi gerbang logika"""
    
    @staticmethod
    def NOT(a):
        """Gerbang NOT"""
        return int(not a)
    
    @staticmethod
    def AND(a, b):
        """Gerbang AND"""
        return int(a and b)
    
    @staticmethod
    def OR(a, b):
        """Gerbang OR"""
        return int(a or b)
    
    @staticmethod
    def AND3(a, b, c):
        """Gerbang AND 3-input"""
        return int(a and b and c)
    
    @staticmethod
    def OR3(a, b, c):
        """Gerbang OR 3-input"""
        return int(a or b or c)


def print_truth_table_not():
    """Print tabel kebenaran NOT gate"""
    print("\n" + "=" * 70)
    print("GERBANG NOT (Inverter)")
    print("=" * 70)
    print("\nSimbol: A ──┤>o─── Y")
    print("Operasi: Y = NOT A = A'")
    print("\nTabel Kebenaran:")
    print("-" * 30)
    print("| A | Y = A' |")
    print("-" * 30)
    
    for a in [0, 1]:
        y = LogicGate.NOT(a)
        print(f"| {a} |   {y}    |")
    
    print("-" * 30)
    print("\n📝 Karakteristik:")
    print("  - Membalik nilai input")
    print("  - Jika input 0 → output 1")
    print("  - Jika input 1 → output 0")
    print("=" * 70)


def print_truth_table_and():
    """Print tabel kebenaran AND gate"""
    print("\n" + "=" * 70)
    print("GERBANG AND")
    print("=" * 70)
    print("\nSimbol: A ──┐")
    print("            │  ╱╲")
    print("            ├─┤  ├─── Y")
    print("            │  ╲╱")
    print("        B ──┘")
    print("\nOperasi: Y = A AND B = A · B")
    print("\nTabel Kebenaran:")
    print("-" * 35)
    print("| A | B | Y = A · B |")
    print("-" * 35)
    
    for a in [0, 1]:
        for b in [0, 1]:
            y = LogicGate.AND(a, b)
            highlight = "✅" if y == 1 else "  "
            print(f"| {a} | {b} |     {y}     {highlight}|")
    
    print("-" * 35)
    print("\n📝 Karakteristik:")
    print("  - Output 1 HANYA jika SEMUA input = 1")
    print("  - Output 0 jika ADA SATU input = 0")
    print("  - Digunakan untuk: enable, masking, control")
    print("=" * 70)


def print_truth_table_or():
    """Print tabel kebenaran OR gate"""
    print("\n" + "=" * 70)
    print("GERBANG OR")
    print("=" * 70)
    print("\nSimbol: A ──┐")
    print("            │ /‾‾\\")
    print("            ├─(   )─── Y")
    print("            │ \\__/")
    print("        B ──┘")
    print("\nOperasi: Y = A OR B = A + B")
    print("\nTabel Kebenaran:")
    print("-" * 35)
    print("| A | B | Y = A + B |")
    print("-" * 35)
    
    for a in [0, 1]:
        for b in [0, 1]:
            y = LogicGate.OR(a, b)
            highlight = "✅" if y == 1 else "  "
            print(f"| {a} | {b} |     {y}     {highlight}|")
    
    print("-" * 35)
    print("\n📝 Karakteristik:")
    print("  - Output 1 jika MINIMAL SATU input = 1")
    print("  - Output 0 HANYA jika SEMUA input = 0")
    print("  - Digunakan untuk: trigger, alert, flag")
    print("=" * 70)


def demo_circuit_1():
    """Demo rangkaian: Y = A' · B + C"""
    print("\n" + "🔷" * 35)
    print("  DEMO: RANGKAIAN KOMBINASIONAL")
    print("  Ekspresi: Y = A' · B + C")
    print("🔷" * 35)
    
    print("\n📐 Struktur Rangkaian:")
    print("  1. NOT A → A'")
    print("  2. A' AND B → A'·B")
    print("  3. (A'·B) OR C → Y")
    
    print("\n" + "=" * 70)
    print("| A | B | C | A' | A'·B | Y = A'·B + C |")
    print("-" * 70)
    
    for a in [0, 1]:
        for b in [0, 1]:
            for c in [0, 1]:
                a_not = LogicGate.NOT(a)
                a_not_and_b = LogicGate.AND(a_not, b)
                y = LogicGate.OR(a_not_and_b, c)
                
                highlight = "✅" if y == 1 else "  "
                print(f"| {a} | {b} | {c} | {a_not}  | {a_not_and_b}    |      {y}       {highlight}|")
    
    print("-" * 70)
    print("\n💡 Analisis:")
    print("  Output 1 ketika:")
    print("  - A=0 DAN B=1 (A'·B = 1), ATAU")
    print("  - C=1 (apapun nilai A dan B)")
    print("=" * 70)


def demo_majority_voter():
    """Demo Majority Voter: Y = AB + BC + AC"""
    print("\n" + "🔷" * 35)
    print("  DEMO: MAJORITY VOTER (2 dari 3)")
    print("  Ekspresi: Y = A·B + B·C + A·C")
    print("🔷" * 35)
    
    print("\n📝 Deskripsi:")
    print("  Output 1 jika MINIMAL 2 dari 3 input bernilai 1")
    print("  Aplikasi: Voting system, fault tolerance")
    
    print("\n" + "=" * 70)
    print("| A | B | C | A·B | B·C | A·C |   Y   | Count 1's |")
    print("-" * 70)
    
    for a in [0, 1]:
        for b in [0, 1]:
            for c in [0, 1]:
                ab = LogicGate.AND(a, b)
                bc = LogicGate.AND(b, c)
                ac = LogicGate.AND(a, c)
                y = LogicGate.OR(LogicGate.OR(ab, bc), ac)
                
                count = a + b + c
                highlight = "✅" if y == 1 else "  "
                
                print(f"| {a} | {b} | {c} |  {ab}  |  {bc}  |  {ac}  |   {y}   {highlight}|     {count}     |")
    
    print("-" * 70)
    print("\n💡 Analisis:")
    print("  Output 1 ketika jumlah input yang bernilai 1 ≥ 2")
    print("  Output 0 ketika jumlah input yang bernilai 1 < 2")
    print("=" * 70)


def interactive_gate_tester():
    """Mode interaktif untuk test gerbang"""
    print("\n" + "🔷" * 35)
    print("  MODE INTERAKTIF: TEST GERBANG LOGIKA")
    print("🔷" * 35)
    
    print("\n📝 Pilih gerbang:")
    print("  1. NOT gate")
    print("  2. AND gate")
    print("  3. OR gate")
    print("  4. Exit")
    
    choice = input("\nPilihan (1-4): ").strip()
    
    if choice == "1":
        a = int(input("Masukkan nilai A (0/1): "))
        y = LogicGate.NOT(a)
        print(f"\n✅ Hasil: NOT {a} = {y}")
        
    elif choice == "2":
        a = int(input("Masukkan nilai A (0/1): "))
        b = int(input("Masukkan nilai B (0/1): "))
        y = LogicGate.AND(a, b)
        print(f"\n✅ Hasil: {a} AND {b} = {y}")
        
    elif choice == "3":
        a = int(input("Masukkan nilai A (0/1): "))
        b = int(input("Masukkan nilai B (0/1): "))
        y = LogicGate.OR(a, b)
        print(f"\n✅ Hasil: {a} OR {b} = {y}")
        
    elif choice == "4":
        print("\n👋 Terima kasih!")
        return
    
    else:
        print("\n❌ Pilihan tidak valid!")


def main():
    """Fungsi utama"""
    print("\n" + "=" * 70)
    print("  SIMULATOR GERBANG LOGIKA DASAR")
    print("=" * 70)
    
    # Truth tables
    print_truth_table_not()
    print_truth_table_and()
    print_truth_table_or()
    
    # Circuit demos
    demo_circuit_1()
    demo_majority_voter()
    
    # Interactive (opsional)
    # interactive_gate_tester()
    
    print("\n" + "=" * 70)
    print("✓ Demo selesai!")
    print("=" * 70 + "\n")


if __name__ == "__main__":
    main()
```

---

### Program 2: Circuit Simulator in C

#### Bahasa C
```c
/*
 * Program: Basic Logic Gates Simulator
 * Deskripsi: Simulasi gerbang NOT, AND, OR
 * Compiler: gcc
 */

#include <stdio.h>
#include <stdbool.h>

// Gerbang NOT
int gate_not(int a) {
    return !a;
}

// Gerbang AND
int gate_and(int a, int b) {
    return a && b;
}

// Gerbang OR
int gate_or(int a, int b) {
    return a || b;
}

// Gerbang AND 3-input
int gate_and3(int a, int b, int c) {
    return a && b && c;
}

// Gerbang OR 3-input
int gate_or3(int a, int b, int c) {
    return a || b || c;
}

void print_truth_table_not() {
    printf("\n");
    printf("======================================================================\n");
    printf("GERBANG NOT (Inverter)\n");
    printf("======================================================================\n");
    printf("\nSimbol: A ──┤>o─── Y\n");
    printf("Operasi: Y = NOT A = A'\n");
    printf("\nTabel Kebenaran:\n");
    printf("------------------------------\n");
    printf("| A | Y = A' |\n");
    printf("------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        int y = gate_not(a);
        printf("| %d |   %d    |\n", a, y);
    }
    
    printf("------------------------------\n");
    printf("\n📝 Karakteristik:\n");
    printf("  - Membalik nilai input\n");
    printf("  - Jika input 0 → output 1\n");
    printf("  - Jika input 1 → output 0\n");
    printf("======================================================================\n");
}

void print_truth_table_and() {
    printf("\n");
    printf("======================================================================\n");
    printf("GERBANG AND\n");
    printf("======================================================================\n");
    printf("\nSimbol: A ──┐\n");
    printf("            │  ╱╲\n");
    printf("            ├─┤  ├─── Y\n");
    printf("            │  ╲╱\n");
    printf("        B ──┘\n");
    printf("\nOperasi: Y = A AND B = A · B\n");
    printf("\nTabel Kebenaran:\n");
    printf("-----------------------------------\n");
    printf("| A | B | Y = A · B |\n");
    printf("-----------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        for (int b = 0; b <= 1; b++) {
            int y = gate_and(a, b);
            char* highlight = y == 1 ? "✅" : "  ";
            printf("| %d | %d |     %d     %s|\n", a, b, y, highlight);
        }
    }
    
    printf("-----------------------------------\n");
    printf("\n📝 Karakteristik:\n");
    printf("  - Output 1 HANYA jika SEMUA input = 1\n");
    printf("  - Output 0 jika ADA SATU input = 0\n");
    printf("  - Digunakan untuk: enable, masking, control\n");
    printf("======================================================================\n");
}

void print_truth_table_or() {
    printf("\n");
    printf("======================================================================\n");
    printf("GERBANG OR\n");
    printf("======================================================================\n");
    printf("\nSimbol: A ──┐\n");
    printf("            │ /‾‾\\\n");
    printf("            ├─(   )─── Y\n");
    printf("            │ \\__/\n");
    printf("        B ──┘\n");
    printf("\nOperasi: Y = A OR B = A + B\n");
    printf("\nTabel Kebenaran:\n");
    printf("-----------------------------------\n");
    printf("| A | B | Y = A + B |\n");
    printf("-----------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        for (int b = 0; b <= 1; b++) {
            int y = gate_or(a, b);
            char* highlight = y == 1 ? "✅" : "  ";
            printf("| %d | %d |     %d     %s|\n", a, b, y, highlight);
        }
    }
    
    printf("-----------------------------------\n");
    printf("\n📝 Karakteristik:\n");
    printf("  - Output 1 jika MINIMAL SATU input = 1\n");
    printf("  - Output 0 HANYA jika SEMUA input = 0\n");
    printf("  - Digunakan untuk: trigger, alert, flag\n");
    printf("======================================================================\n");
}

void demo_circuit() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: RANGKAIAN Y = A' · B + C\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n📐 Struktur:\n");
    printf("  1. NOT A → A'\n");
    printf("  2. A' AND B → A'·B\n");
    printf("  3. (A'·B) OR C → Y\n");
    
    printf("\n======================================================================\n");
    printf("| A | B | C | A' | A'·B | Y = A'·B + C |\n");
    printf("----------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        for (int b = 0; b <= 1; b++) {
            for (int c = 0; c <= 1; c++) {
                int a_not = gate_not(a);
                int a_not_and_b = gate_and(a_not, b);
                int y = gate_or(a_not_and_b, c);
                
                char* highlight = y == 1 ? "✅" : "  ";
                printf("| %d | %d | %d | %d  | %d    |      %d       %s|\n",
                       a, b, c, a_not, a_not_and_b, y, highlight);
            }
        }
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("\n💡 Output 1 ketika: (A=0 AND B=1) OR C=1\n");
    printf("======================================================================\n");
}

void demo_majority_voter() {
    printf("\n🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    printf("  DEMO: MAJORITY VOTER\n");
    printf("  Y = A·B + B·C + A·C\n");
    printf("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷\n");
    
    printf("\n======================================================================\n");
    printf("| A | B | C | A·B | B·C | A·C | Y | Votes |\n");
    printf("----------------------------------------------------------------------\n");
    
    for (int a = 0; a <= 1; a++) {
        for (int b = 0; b <= 1; b++) {
            for (int c = 0; c <= 1; c++) {
                int ab = gate_and(a, b);
                int bc = gate_and(b, c);
                int ac = gate_and(a, c);
                int y = gate_or(gate_or(ab, bc), ac);
                
                int votes = a + b + c;
                char* highlight = y == 1 ? "✅" : "  ";
                
                printf("| %d | %d | %d |  %d  |  %d  |  %d  | %d %s|   %d   |\n",
                       a, b, c, ab, bc, ac, y, highlight, votes);
            }
        }
    }
    
    printf("----------------------------------------------------------------------\n");
    printf("\n💡 Output 1 when votes ≥ 2\n");
    printf("======================================================================\n");
}

int main() {
    printf("\n");
    printf("======================================================================\n");
    printf("  SIMULATOR GERBANG LOGIKA DASAR (C)\n");
    printf("======================================================================\n");
    
    print_truth_table_not();
    print_truth_table_and();
    print_truth_table_or();
    demo_circuit();
    demo_majority_voter();
    
    printf("\n");
    printf("======================================================================\n");
    printf("✓ Demo selesai!\n");
    printf("======================================================================\n\n");
    
    return 0;
}
```

**Compile dan Run:**
```bash
# Linux/Mac
gcc -o gates gates.c
./gates

# Windows
gcc -o gates.exe gates.c
gates.exe
```

---

## 🎯 Latihan Soal

### Soal 1: Identifikasi Output

Tentukan output untuk input berikut:

1. NOT gate: A = 1, Y = ?
2. AND gate: A = 1, B = 0, Y = ?
3. OR gate: A = 0, B = 1, Y = ?

<details>
<summary>Lihat Jawaban</summary>

1. **Y = 0** (NOT 1 = 0)
2. **Y = 0** (1 AND 0 = 0)
3. **Y = 1** (0 OR 1 = 1)

</details>

---

### Soal 2: Desain Rangkaian

Buat rangkaian untuk ekspresi: Y = (A + B) · C'

<details>
<summary>Lihat Jawaban</summary>

```
A ──┐
    │ /‾‾\
    ├─(   )─┐
    │ \__/  │  ╱╲
B ──┘       ├─┤  ├─── Y
            │  ╲╱
C ──┤>o─────┘
    NOT
```

Langkah:
1. A OR B → (A + B)
2. NOT C → C'
3. (A + B) AND C' → Y

</details>

---

### Soal 3: Analisis Rangkaian

Tentukan ekspresi Boolean dari rangkaian:
```
A ──┤>o─┐
        │  ╱╲
        ├─┤  ├─── Y
        │  ╲╱
B ──┤>o─┘
```

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Y = A' · B'**

Atau bisa disederhanakan dengan De Morgan: Y = (A + B)'

</details>

---

## 🚀 Aplikasi Praktis

### 1. **Half Adder**
Menjumlahkan 2 bit:
- Sum = A ⊕ B (XOR - akan dipelajari di Bab 12)
- Carry = A · B (AND)

### 2. **Multiplexer (MUX)**
Selector untuk memilih salah satu input:
- Menggunakan kombinasi AND, OR, NOT

### 3. **Priority Encoder**
Mengkodekan input dengan prioritas tertentu

---

## 🎓 Kesimpulan

**Gerbang Dasar:**
- ✅ **NOT**: Inversi (A → A')
- ✅ **AND**: Semua 1 → Output 1
- ✅ **OR**: Min. satu 1 → Output 1

**Aplikasi:**
- Semua rangkaian digital dibangun dari gerbang-gerbang ini
- Processor, Memory, I/O = Kombinasi jutaan gerbang
- Software simulation penting untuk desain hardware

---

**Next:** [Bab 12: Gerbang Logika (Bagian 2)](./12-gerbang-logika-2.md) →

Kita akan belajar gerbang universal (NAND, NOR) dan gerbang XOR yang sangat penting!

---

← [Bab 10: Aljabar Boolean](./10-aljabar-boolean.md) | [Bab 12: Gerbang Logika (Bagian 2)](./12-gerbang-logika-2.md) →
