import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, Book, Code, Brain, CheckCircle, Circle, ArrowRight, AlertCircle } from 'lucide-react';

const LogicMathWeek2 = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedCard, setExpandedCard] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  const sections = [
    { id: 'overview', title: 'Gambaran Umum', icon: <Book className="w-5 h-5" /> },
    { id: 'concepts', title: 'Konsep Dasar', icon: <Brain className="w-5 h-5" /> },
    { id: 'examples', title: 'Contoh & Aplikasi', icon: <Code className="w-5 h-5" /> },
    { id: 'quiz', title: 'Latihan Soal', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'glossary', title: 'Glosarium', icon: <Book className="w-5 h-5" /> },
    { id: 'references', title: 'Referensi', icon: <Circle className="w-5 h-5" /> }
  ];

  const conceptCards = [
    {
      id: 'propositions',
      title: 'Propositions (Proposisi)',
      subtitle: 'Pernyataan Deklaratif dengan Nilai Kebenaran',
      content: 'Proposisi adalah pernyataan deklaratif yang memiliki nilai kebenaran yang jelas - bisa True (benar) atau False (salah), tetapi tidak keduanya secara bersamaan.',
      examples: [
        '✓ "Jakarta adalah ibu kota Indonesia" (True)',
        '✓ "5 + 3 = 10" (False)', 
        '✗ "Apakah kamu suka programming?" (bukan proposisi - pertanyaan)',
        '✗ "x > 10" (bukan proposisi - mengandung variabel bebas)'
      ],
      programming: 'Dalam programming, proposisi setara dengan Boolean expressions yang menghasilkan True/False'
    },
    {
      id: 'logical-connectives',
      title: 'Logical Connectives',
      subtitle: 'Operator untuk Menghubungkan Proposisi',
      content: 'Logical connectives adalah operator yang digunakan untuk menghubungkan proposisi sederhana menjadi proposisi yang lebih kompleks.',
      examples: [
        '¬ (NOT/Negation): "Tidak hujan"',
        '∧ (AND/Conjunction): "Hujan DAN dingin"',
        '∨ (OR/Disjunction): "Hujan ATAU berawan"',
        '→ (IMPLIES/Conditional): "Jika hujan, maka jalanan basah"',
        '↔ (IFF/Biconditional): "Hujan jika dan hanya jika awan mendung"'
      ],
      programming: 'Python: not, and, or operators; conditional statements (if-else)'
    },
    {
      id: 'truth-tables',
      title: 'Truth Tables',
      subtitle: 'Tabel Kebenaran untuk Evaluasi Logika',
      content: 'Truth table adalah tabel yang menunjukkan nilai kebenaran dari suatu compound proposition untuk semua kemungkinan kombinasi nilai input proposisi atomiknya.',
      examples: [
        'Baris = semua kombinasi input yang mungkin',
        'Kolom = proposisi atomik dan compound expressions',
        'Sel = nilai True/False untuk setiap kombinasi',
        'Digunakan untuk memverifikasi logical equivalences'
      ],
      programming: 'Essential untuk debugging conditional logic dan boolean expressions'
    }
  ];

  const logicalOperators = [
    {
      symbol: '¬',
      name: 'NOT (Negation)',
      description: 'Membalik nilai kebenaran proposisi',
      truthTable: [
        ['P', '¬P'],
        ['T', 'F'],
        ['F', 'T']
      ],
      pythonCode: `# NOT operator dalam Python
p = True
not_p = not p
print(f"p = {p}, not p = {not_p}")

# Contoh praktis
is_sunny = True
is_cloudy = not is_sunny
print(f"Sunny: {is_sunny}, Cloudy: {is_cloudy}")`,
      explanation: 'NOT operator mengubah True menjadi False dan sebaliknya. Dalam programming, digunakan untuk membalik kondisi boolean.'
    },
    {
      symbol: '∧',
      name: 'AND (Conjunction)', 
      description: 'True hanya jika kedua proposisi True',
      truthTable: [
        ['P', 'Q', 'P ∧ Q'],
        ['T', 'T', 'T'],
        ['T', 'F', 'F'],
        ['F', 'T', 'F'],
        ['F', 'F', 'F']
      ],
      pythonCode: `# AND operator dalam Python
def access_granted(has_id, has_permission):
    return has_id and has_permission

# Test cases berdasarkan truth table
print("ID=True, Permission=True:", access_granted(True, True))   # True
print("ID=True, Permission=False:", access_granted(True, False)) # False
print("ID=False, Permission=True:", access_granted(False, True)) # False
print("ID=False, Permission=False:", access_granted(False, False)) # False`,
      explanation: 'AND menghasilkan True hanya ketika SEMUA kondisi terpenuhi. Sangat umum dalam validasi input dan access control.'
    },
    {
      symbol: '∨',
      name: 'OR (Disjunction)',
      description: 'True jika minimal satu proposisi True', 
      truthTable: [
        ['P', 'Q', 'P ∨ Q'],
        ['T', 'T', 'T'],
        ['T', 'F', 'T'],
        ['F', 'T', 'T'],
        ['F', 'F', 'F']
      ],
      pythonCode: `# OR operator dalam Python
def can_login(email_valid, phone_valid):
    return email_valid or phone_valid

# Test cases berdasarkan truth table
print("Email=True, Phone=True:", can_login(True, True))   # True
print("Email=True, Phone=False:", can_login(True, False)) # True 
print("Email=False, Phone=True:", can_login(False, True)) # True
print("Email=False, Phone=False:", can_login(False, False)) # False`,
      explanation: 'OR menghasilkan True jika MINIMAL SATU kondisi terpenuhi. Berguna untuk multiple authentication methods.'
    },
    {
      symbol: '→',
      name: 'IMPLIES (Conditional)',
      description: 'False hanya jika antecedent True dan consequent False',
      truthTable: [
        ['P', 'Q', 'P → Q'],
        ['T', 'T', 'T'],
        ['T', 'F', 'F'],
        ['F', 'T', 'T'],
        ['F', 'F', 'T']
      ],
      pythonCode: `# IMPLIES dapat diimplementasikan sebagai: not P or Q
def implies(p, q):
    return (not p) or q

# Contoh: "Jika hujan, maka bawa payung"
def bring_umbrella(is_raining, has_umbrella):
    # Implication: is_raining → has_umbrella
    return implies(is_raining, has_umbrella)

# Test cases
print("Hujan=True, Payung=True:", bring_umbrella(True, True))   # True (konsisten)
print("Hujan=True, Payung=False:", bring_umbrella(True, False)) # False (tidak konsisten)
print("Hujan=False, Payung=True:", bring_umbrella(False, True)) # True (boleh bawa payung)
print("Hujan=False, Payung=False:", bring_umbrella(False, False)) # True (tidak masalah)`,
      explanation: 'IMPLIES paling sulit dipahami. Hanya False ketika premis True tapi kesimpulan False. Dasar untuk conditional statements.'
    }
  ];

  const programmingExamples = [
    {
      title: 'Truth Table Generator',
      description: 'Membuat program untuk menghasilkan truth table otomatis',
      code: `def generate_truth_table(num_variables):
    """
    Menghasilkan semua kombinasi True/False untuk n variabel
    
    Args:
        num_variables (int): Jumlah variabel proposisi
    
    Returns:
        list: Semua kombinasi nilai boolean
    """
    combinations = []
    
    # Menghasilkan 2^n kombinasi
    for i in range(2 ** num_variables):
        # Konversi angka ke binary, lalu ke boolean
        binary = format(i, f'0{num_variables}b')
        combination = [bit == '1' for bit in binary]
        combinations.append(combination)
    
    return combinations

# Contoh penggunaan untuk 2 variabel (P, Q)
truth_combinations = generate_truth_table(2)
print("Truth Table untuk 2 variabel:")
print("P     Q")
print("----------")
for combo in truth_combinations:
    print(f"{combo[0]}  {combo[1]}")

# Output:
# False  False
# False  True  
# True   False
# True   True`,
      explanation: [
        '1. Fungsi menerima jumlah variabel sebagai parameter',
        '2. Loop dari 0 sampai 2^n untuk semua kombinasi binary',
        '3. Format angka ke binary string dengan leading zeros',
        '4. Konversi setiap bit binary ke boolean value',
        '5. Simpan kombinasi dalam list untuk digunakan evaluasi'
      ]
    },
    {
      title: 'Logical Operations Evaluator',
      description: 'Program untuk evaluasi berbagai operasi logika',
      code: `class LogicalEvaluator:
    """
    Class untuk evaluasi operasi logika dengan truth table
    """
    
    def __init__(self):
        self.operations = {
            'NOT': self.not_op,
            'AND': self.and_op, 
            'OR': self.or_op,
            'IMPLIES': self.implies_op,
            'IFF': self.iff_op
        }
    
    def not_op(self, p):
        """Negation: ¬P"""
        return not p
    
    def and_op(self, p, q):
        """Conjunction: P ∧ Q"""
        return p and q
    
    def or_op(self, p, q):
        """Disjunction: P ∨ Q"""
        return p or q
    
    def implies_op(self, p, q):
        """Conditional: P → Q (equivalent to ¬P ∨ Q)"""
        return (not p) or q
    
    def iff_op(self, p, q):
        """Biconditional: P ↔ Q (equivalent to (P → Q) ∧ (Q → P))"""
        return self.implies_op(p, q) and self.implies_op(q, p)
    
    def evaluate_compound_expression(self, p, q):
        """
        Evaluasi compound expression: (P ∨ Q) → (P ∧ Q)
        """
        left_side = self.or_op(p, q)      # P ∨ Q
        right_side = self.and_op(p, q)    # P ∧ Q
        return self.implies_op(left_side, right_side)  # (P ∨ Q) → (P ∧ Q)

# Penggunaan evaluator
evaluator = LogicalEvaluator()

print("Truth Table untuk (P ∨ Q) → (P ∧ Q):")
print("P     Q     P∨Q   P∧Q   (P∨Q)→(P∧Q)")
print("------------------------------------")

for p in [False, True]:
    for q in [False, True]:
        p_or_q = evaluator.or_op(p, q)
        p_and_q = evaluator.and_op(p, q)
        result = evaluator.evaluate_compound_expression(p, q)
        print(f"{str(p):5} {str(q):5} {str(p_or_q):5} {str(p_and_q):5} {str(result):11}")`,
      explanation: [
        '1. Class-based approach untuk organisasi operasi logika yang lebih baik',
        '2. Setiap operasi logika diimplementasikan sebagai method terpisah',
        '3. Method implies_op menggunakan equivalence: P → Q ≡ ¬P ∨ Q',
        '4. Biconditional dibangun dari dua conditional: (P → Q) ∧ (Q → P)',
        '5. Compound expressions dapat dievaluasi step by step untuk debugging'
      ]
    },
    {
      title: 'Real-world Logic Application',
      description: 'Implementasi logika dalam sistem keamanan akses',
      code: `class SecurityAccessSystem:
    """
    Sistem keamanan dengan multiple logical conditions
    """
    
    def __init__(self):
        self.access_log = []
    
    def check_time_access(self, current_hour):
        """Cek akses berdasarkan jam kerja (9-17)"""
        return 9 <= current_hour <= 17
    
    def check_user_credentials(self, has_badge, has_pin, is_biometric_valid):
        """
        Aturan akses: (Badge AND PIN) OR Biometric
        Logical expression: (B ∧ P) ∨ Bio
        """
        badge_and_pin = has_badge and has_pin
        return badge_and_pin or is_biometric_valid
    
    def check_security_level(self, user_clearance, required_level):
        """Cek level keamanan user"""
        return user_clearance >= required_level
    
    def grant_access(self, user_id, current_hour, has_badge, has_pin, 
                    is_biometric_valid, user_clearance, required_level):
        """
        Master function: semua kondisi harus terpenuhi
        Logic: Time_OK ∧ Credentials_OK ∧ Clearance_OK
        """
        
        # Evaluasi setiap kondisi
        time_ok = self.check_time_access(current_hour)
        credentials_ok = self.check_user_credentials(has_badge, has_pin, is_biometric_valid)
        clearance_ok = self.check_security_level(user_clearance, required_level)
        
        # Final decision: semua harus True (AND logic)
        access_granted = time_ok and credentials_ok and clearance_ok
        
        # Log untuk audit
        self.access_log.append({
            'user_id': user_id,
            'time_ok': time_ok,
            'credentials_ok': credentials_ok,
            'clearance_ok': clearance_ok,
            'final_decision': access_granted
        })
        
        return access_granted, {
            'time_check': time_ok,
            'credential_check': credentials_ok,
            'clearance_check': clearance_ok
        }

# Demo penggunaan sistem
security = SecurityAccessSystem()

# Test case 1: Akses berhasil
result1, details1 = security.grant_access(
    user_id="EMP001",
    current_hour=14,        # Jam kerja ✓
    has_badge=True,         # Punya badge ✓  
    has_pin=True,          # Punya PIN ✓
    is_biometric_valid=False,  # Biometrik gagal ✗ (tapi tidak masalah)
    user_clearance=3,       # Level 3 ✓
    required_level=2        # Butuh level 2 ✓
)

print("Test Case 1 - Akses Berhasil:")
print(f"Akses diberikan: {result1}")
print(f"Detail: {details1}")

# Test case 2: Akses ditolak (diluar jam kerja)
result2, details2 = security.grant_access(
    user_id="EMP002", 
    current_hour=20,        # Diluar jam kerja ✗
    has_badge=True,
    has_pin=True,
    is_biometric_valid=False,
    user_clearance=5,
    required_level=2
)

print("\\nTest Case 2 - Akses Ditolak:")
print(f"Akses diberikan: {result2}")
print(f"Detail: {details2}")`,
      explanation: [
        '1. Sistem menggunakan multiple logical conditions yang realistic',
        '2. Credentials check: (Badge ∧ PIN) ∨ Biometric - flexible authentication',
        '3. Final access: Time ∧ Credentials ∧ Clearance - semua harus terpenuhi',
        '4. Logging untuk audit dan debugging logical decisions',
        '5. Modular design memudahkan testing dan maintenance individual conditions'
      ]
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'Manakah dari pernyataan berikut yang BUKAN merupakan proposisi?',
      options: [
        'Python adalah bahasa pemrograman',
        'Berapa umur kamu?',
        '10 + 5 = 15',
        'Hari ini adalah hari Senin'
      ],
      correct: 1,
      explanation: 'Proposisi harus berupa pernyataan deklaratif dengan nilai kebenaran jelas (True/False). Pertanyaan bukan proposisi karena tidak memiliki nilai kebenaran.'
    },
    {
      id: 'q2', 
      question: 'Jika P = True dan Q = False, maka nilai dari P ∧ (¬Q) adalah:',
      options: [
        'True',
        'False', 
        'Tidak dapat ditentukan',
        'Tergantung konteks'
      ],
      correct: 0,
      explanation: 'P ∧ (¬Q) = True ∧ (¬False) = True ∧ True = True. Negasi dari False adalah True, dan True ∧ True menghasilkan True.'
    },
    {
      id: 'q3',
      question: 'Dalam Python, ekspresi "not (True and False)" menghasilkan:',
      options: [
        'True',
        'False',
        'Error',
        'None'
      ],
      correct: 0,
      explanation: 'not (True and False) = not (False) = True. Operator and menghasilkan False, kemudian not membaliknya menjadi True.'
    },
    {
      id: 'q4',
      question: 'Kapan implikasi P → Q bernilai False?',
      options: [
        'Ketika P = False dan Q = True',
        'Ketika P = True dan Q = False', 
        'Ketika P = False dan Q = False',
        'Tidak pernah False'
      ],
      correct: 1,
      explanation: 'Implikasi P → Q hanya False ketika premise (P) True tetapi conclusion (Q) False. Dalam semua kasus lain, implikasi bernilai True.'
    },
    {
      id: 'q5',
      question: 'Berapa jumlah baris dalam truth table untuk 3 variabel proposisi?',
      options: [
        '3 baris',
        '6 baris',
        '8 baris', 
        '9 baris'
      ],
      correct: 2,
      explanation: 'Untuk n variabel, jumlah baris = 2^n. Untuk 3 variabel: 2^3 = 8 baris, mewakili semua kombinasi nilai True/False.'
    }
  ];

  const glossaryTerms = [
    {
      term: 'Antecedent',
      definition: 'Bagian "if" dalam conditional statement (P → Q). Dalam contoh "Jika hujan, maka jalanan basah", antecedent adalah "hujan". Disebut juga premise atau hypothesis.'
    },
    {
      term: 'Biconditional (↔)',
      definition: 'Logical connective yang True ketika kedua proposisi memiliki nilai kebenaran sama. P ↔ Q equivalent dengan (P → Q) ∧ (Q → P). Dibaca "if and only if" atau "jika dan hanya jika".'
    },
    {
      term: 'Boolean Algebra',
      definition: 'Sistem matematika untuk manipulasi logical values (True/False) menggunakan operasi AND, OR, NOT. Dasar untuk digital circuit design dan computer logic.'
    },
    {
      term: 'Compound Proposition',
      definition: 'Proposisi yang dibentuk dengan menggabungkan dua atau lebih proposisi sederhana menggunakan logical connectives. Contoh: (P ∧ Q) ∨ (¬R).'
    },
    {
      term: 'Conditional (→)',
      definition: 'Logical connective dalam bentuk "if P then Q" (P → Q). False hanya ketika P True dan Q False. Fundamental untuk programming conditional statements.'
    },
    {
      term: 'Conjunction (∧)',
      definition: 'Logical connective AND yang menghasilkan True hanya ketika semua operand bernilai True. Dalam Python ditulis sebagai "and". Symbol: ∧'
    },
    {
      term: 'Consequent',
      definition: 'Bagian "then" dalam conditional statement (P → Q). Dalam contoh "Jika hujan, maka jalanan basah", consequent adalah "jalanan basah". Disebut juga conclusion.'
    },
    {
      term: 'Contrapositive',
      definition: 'Dari conditional P → Q, contrapositive adalah ¬Q → ¬P. Selalu memiliki nilai kebenaran yang sama dengan statement original. Berguna untuk proof techniques.'
    },
    {
      term: 'Disjunction (∨)',
      definition: 'Logical connective OR yang menghasilkan True ketika minimal satu operand bernilai True. Dalam Python ditulis sebagai "or". Symbol: ∨'
    },
    {
      term: 'Logical Equivalence (≡)',
      definition: 'Dua proposisi yang selalu memiliki nilai kebenaran sama untuk semua kemungkinan assignment variabel. Contoh: P → Q ≡ ¬P ∨ Q.'
    },
    {
      term: 'Negation (¬)',
      definition: 'Logical connective NOT yang membalik nilai kebenaran. ¬True = False, ¬False = True. Dalam Python ditulis sebagai "not". Symbol: ¬'
    },
    {
      term: 'Premise',
      definition: 'Statement atau assumption yang digunakan sebagai starting point untuk logical reasoning. Dalam conditional P → Q, P adalah premise.'
    },
    {
      term: 'Propositional Logic',
      definition: 'Cabang logic yang mempelajari proposisi dan hubungan logical di antara mereka menggunakan connectives. Tidak melibatkan quantifiers atau predicates.'
    },
    {
      term: 'Propositional Variable',
      definition: 'Variable yang merepresentasikan proposisi dalam logical formula. Biasanya ditulis dengan huruf kapital P, Q, R, dll. Nilai hanya bisa True atau False.'
    },
    {
      term: 'Tautology',
      definition: 'Compound proposition yang selalu True untuk semua kemungkinan truth assignment. Contoh: P ∨ ¬P (law of excluded middle).'
    },
    {
      term: 'Truth Assignment',
      definition: 'Assignment nilai True atau False ke semua propositional variables dalam logical expression. Setiap baris dalam truth table represent satu truth assignment.'
    },
    {
      term: 'Truth Table',
      definition: 'Tabel yang menunjukkan nilai kebenaran compound proposition untuk semua kemungkinan kombinasi nilai input variables. Essential tool dalam propositional logic.'
    },
    {
      term: 'Truth Value',
      definition: 'Nilai kebenaran dari proposisi - hanya bisa True (benar) atau False (salah). Fundamental concept dalam mathematical logic dan boolean algebra.'
    }
  ];

  const references = [
    {
      type: 'book',
      authors: 'Rosen, Kenneth H.',
      year: '2019',
      title: 'Discrete Mathematics and Its Applications',
      edition: '8th Edition',
      publisher: 'McGraw-Hill Education',
      location: 'New York',
      pages: 'Chapter 1.1-1.3'
    },
    {
      type: 'book',
      authors: 'Lehman, Eric., Leighton, F. Thomson., Meyer, Albert R.',
      year: '2017',
      title: 'Mathematics for Computer Science',
      publisher: 'MIT OpenCourseWare',
      chapter: 'Chapter 1: What is a Proof?, Chapter 3: Logical Formulas',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/'
    },
    {
      type: 'book',
      authors: 'Ben-Ari, Mordechai',
      year: '2012',
      title: 'Mathematical Logic for Computer Science',
      edition: '3rd Edition',
      publisher: 'Springer-Verlag',
      location: 'London',
      chapter: 'Chapter 2: Propositional Logic: Formulas, Models, Tableaux',
      doi: '10.1007/978-1-4471-4129-7'
    },
    {
      type: 'book',
      authors: 'Shoenfield, Joseph R.',
      year: '2018',
      title: 'Mathematical Logic',
      edition: '2nd Edition',
      publisher: 'A K Peters/CRC Press',
      chapter: 'Chapter 1: Propositional Calculus'
    },
    {
      type: 'journal',
      authors: 'Huth, Michael., Ryan, Mark',
      year: '2020',
      title: 'Teaching Propositional Logic Through Digital Circuit Design',
      journal: 'ACM Transactions on Computing Education', 
      volume: '20',
      number: '3',
      pages: '1-25',
      doi: '10.1145/3380257'
    },
    {
      type: 'conference',
      authors: 'Barnes, David J.',
      year: '2019',
      title: 'Interactive Truth Tables for Logic Education',
      conference: 'Proceedings of the 50th ACM Technical Symposium on Computer Science Education',
      pages: '123-129',
      location: 'Minneapolis, MN, USA',
      doi: '10.1145/3287324.3287445'
    },
    {
      type: 'web',
      title: 'Stanford CS103: Mathematical Foundations of Computing - Propositional Logic',
      publisher: 'Stanford University',
      year: '2024',
      url: 'https://web.stanford.edu/class/cs103/lectures/propositional-logic/',
      accessed: '2024'
    },
    {
      type: 'web',
      authors: 'Fortnow, Lance',
      title: 'Logic and Computer Science',
      publisher: 'Northwestern University',
      year: '2023',
      url: 'https://www.cs.northwestern.edu/~fortnow/papers/logic.pdf',
      accessed: '2024'
    },
    {
      type: 'web',
      title: 'MIT 6.042J Lecture Notes - Propositional Logic',
      publisher: 'Massachusetts Institute of Technology',
      year: '2017',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/mit6_042jf10_lec01/',
      accessed: '2024'
    },
    {
      type: 'web',
      authors: 'Epp, Susanna S.',
      title: 'The Language of Logic in Computer Science Education',
      publisher: 'Mathematical Association of America',
      year: '2021',
      url: 'https://www.maa.org/press/periodicals/convergence/the-language-of-logic',
      accessed: '2024'
    }
  ];

  const handleQuizSubmit = () => {
    setShowQuizResult(true);
  };

  const getQuizScore = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) correct++;
    });
    return correct;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Logika Matematika</h1>
              <p className="text-gray-600">Pertemuan 2: Propositional Logic Fundamentals</p>
            </div>
            <div className="text-sm text-gray-500">
              <span className="bg-black text-white px-3 py-1 rounded-full">3 SKS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {section.icon}
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Propositional Logic Fundamentals
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                "Bahasa Matematis untuk Reasoning" - Membangun fondasi logical thinking dengan proposisi dan operator logika
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tujuan Pembelajaran Pertemuan 2</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Memahami Proposisi</h4>
                      <p className="text-gray-600">Definisi, identifikasi, dan pembedaan proposisi dari non-proposisi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Logical Connectives</h4>
                      <p className="text-gray-600">Operator logika: ¬, ∧, ∨, →, ↔ dan penggunaannya</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Truth Tables</h4>
                      <p className="text-gray-600">Konstruksi dan evaluasi tabel kebenaran untuk compound propositions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Programming Applications</h4>
                      <p className="text-gray-600">Implementasi logika proposisional dalam Python</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Structure */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Struktur Pembelajaran</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Teori Dasar</h4>
                  <p className="text-sm text-gray-600">Proposisi dan logical connectives</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Truth Tables</h4>
                  <p className="text-sm text-gray-600">Konstruksi dan evaluasi sistematis</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Programming</h4>
                  <p className="text-sm text-gray-600">Implementasi dengan Python</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">4</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Aplikasi</h4>
                  <p className="text-sm text-gray-600">Real-world use cases</p>
                </div>
              </div>
            </div>

            {/* Prerequisites Check */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Prasyarat Pertemuan 2</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Pemahaman basic programming concepts (variables, functions)</li>
                    <li>• Familiar dengan Boolean values (True/False)</li>
                    <li>• Konsep mathematical reasoning dari Pertemuan 1</li>
                    <li>• Basic Python syntax untuk contoh programming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Concepts Section */}
        {activeSection === 'concepts' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Konsep Fundamental</h2>
              <p className="text-xl text-gray-600">Memahami building blocks dari propositional logic</p>
            </div>

            <div className="space-y-6">
              {conceptCards.map((card) => (
                <div key={card.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <button
                    onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                    className="w-full text-left"
                  >
                    <div className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                          <p className="text-gray-600 mt-1">{card.subtitle}</p>
                        </div>
                        {expandedCard === card.id ? 
                          <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        }
                      </div>
                    </div>
                  </button>
                  
                  {expandedCard === card.id && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="text-gray-700 mb-4 leading-relaxed">{card.content}</p>
                      <h4 className="font-semibold text-gray-900 mb-3">Contoh:</h4>
                      <ul className="space-y-2 mb-4">
                        {card.examples.map((example, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Programming Connection:</h5>
                        <p className="text-gray-700 text-sm">{card.programming}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Logical Operators Detail */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Logical Operators & Truth Tables</h3>
              <div className="space-y-8">
                {logicalOperators.map((operator, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-8 last:pb-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-black text-white text-2xl font-bold w-12 h-12 rounded-lg flex items-center justify-center">
                        {operator.symbol}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{operator.name}</h4>
                        <p className="text-gray-600">{operator.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Truth Table */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Truth Table:</h5>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <table className="w-full text-center">
                            <thead>
                              <tr className="border-b border-gray-300">
                                {operator.truthTable[0].map((header, i) => (
                                  <th key={i} className="px-3 py-2 font-semibold">{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {operator.truthTable.slice(1).map((row, i) => (
                                <tr key={i} className="border-b border-gray-200">
                                  {row.map((cell, j) => (
                                    <td key={j} className="px-3 py-2 font-mono">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Python Implementation */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Python Implementation:</h5>
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm text-gray-100">
                            <code>{operator.pythonCode}</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 text-sm">{operator.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Examples Section */}
        {activeSection === 'examples' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementasi Programming</h2>
              <p className="text-xl text-gray-600">Mengaplikasikan propositional logic dalam kode Python</p>
            </div>

            <div className="space-y-8">
              {programmingExamples.map((example, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h3>
                    <p className="text-gray-600">{example.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Penjelasan Step-by-Step:</h4>
                    <div className="space-y-3">
                      {example.explanation.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {pointIndex + 1}
                          </div>
                          <p className="text-gray-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Practice Exercise */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🚀 Latihan Mandiri</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Assignment 1: Truth Table Generator</h4>
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm font-mono">
                      # Tantangan: Buat program yang generate truth table untuk:<br/>
                      # 1. (P ∨ Q) → (P ∧ Q)<br/>
                      # 2. ¬(P ∧ Q) ↔ (¬P ∨ ¬Q)<br/>
                      # 3. User dapat input compound expression
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Tips Pengerjaan:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Mulai dengan operators sederhana (NOT, AND, OR)</li>
                    <li>• Test dengan truth table manual terlebih dahulu</li>
                    <li>• Gunakan functions untuk setiap logical operation</li>
                    <li>• Format output yang mudah dibaca</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Section */}
        {activeSection === 'quiz' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latihan Soal</h2>
              <p className="text-xl text-gray-600">Uji pemahaman Anda tentang propositional logic</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div className="space-y-8">
                {quizQuestions.map((question, index) => (
                  <div key={question.id} className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <label key={optionIndex} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="radio"
                            name={question.id}
                            value={optionIndex}
                            onChange={(e) => setQuizAnswers({...quizAnswers, [question.id]: parseInt(e.target.value)})}
                            className="text-black"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t">
                  <button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                    className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Submit Quiz
                  </button>
                </div>

                {showQuizResult && (
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Hasil Quiz</h4>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-3xl font-bold text-black">
                        {getQuizScore()}/{quizQuestions.length}
                      </div>
                      <div className="text-gray-600">
                        <p>Skor: {Math.round((getQuizScore() / quizQuestions.length) * 100)}%</p>
                        <p className="text-sm">
                          {getQuizScore() >= 4 ? 'Excellent! Pemahaman propositional logic sudah solid.' : 
                           getQuizScore() >= 3 ? 'Good! Ada beberapa konsep yang perlu di-review.' :
                           'Perlu study lebih intensif tentang truth tables dan logical operators.'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {quizQuestions.map((question, index) => (
                        <div key={question.id} className="bg-white p-4 rounded-lg">
                          <div className="flex items-start space-x-3 mb-2">
                            <span className={`font-medium ${quizAnswers[question.id] === question.correct ? 'text-green-600' : 'text-red-600'}`}>
                              Soal {index + 1}: {quizAnswers[question.id] === question.correct ? '✓ Benar' : '✗ Salah'}
                            </span>
                          </div>
                          {quizAnswers[question.id] !== question.correct && (
                            <div className="ml-6 space-y-2">
                              <p className="text-gray-600">
                                <span className="font-medium">Jawaban yang benar:</span> {question.options[question.correct]}
                              </p>
                              <p className="text-gray-700 text-sm">
                                <span className="font-medium">Penjelasan:</span> {question.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Glossary Section */}
        {activeSection === 'glossary' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Glosarium</h2>
              <p className="text-xl text-gray-600">Terminologi penting dalam Propositional Logic</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div className="grid gap-6">
                {glossaryTerms.sort((a, b) => a.term.localeCompare(b.term)).map((item, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.term}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Study Tips</h3>
              <div className="text-blue-800 space-y-2">
                <p><strong>Spaced Repetition:</strong> Review terminologi ini setiap 2-3 hari untuk long-term retention.</p>
                <p><strong>Practical Usage:</strong> Gunakan terminologi ini ketika berdiskusi atau menulis tentang logic.</p>
                <p><strong>Connection Making:</strong> Hubungkan setiap term dengan contoh programming yang nyata.</p>
              </div>
            </div>
          </div>
        )}

        {/* References Section */}
        {activeSection === 'references' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Daftar Referensi</h2>
              <p className="text-xl text-gray-600">Sumber pembelajaran propositional logic yang berkualitas</p>
            </div>

            <div className="space-y-8">
              {/* Books */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Book className="w-6 h-6 mr-3" />
                  Buku Teks
                </h3>
                <div className="space-y-4">
                  {references.filter(ref => ref.type === 'book').map((ref, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-900">
                        <strong>{ref.authors}</strong> ({ref.year}). <em>{ref.title}</em>
                        {ref.edition && `, ${ref.edition}`}.
                        {ref.location && ` ${ref.location}: `}{ref.publisher}.
                        {ref.chapter && (
                          <span className="text-blue-600"> [{ref.chapter}]</span>
                        )}
                        {ref.doi && (
                          <span> DOI: <a href={`https://doi.org/${ref.doi}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{ref.doi}</a></span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journal Articles */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Circle className="w-6 h-6 mr-3" />
                  Artikel Jurnal
                </h3>
                <div className="space-y-4">
                  {references.filter(ref => ref.type === 'journal').map((ref, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-900">
                        <strong>{ref.authors}</strong> ({ref.year}). {ref.title}. 
                        <em> {ref.journal}</em>, {ref.volume}
                        {ref.number && `(${ref.number})`}, {ref.pages}.
                        {ref.doi && (
                          <span> DOI: <a href={`https://doi.org/${ref.doi}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{ref.doi}</a></span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conference Proceedings */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Prosiding Konferensi
                </h3>
                <div className="space-y-4">
                  {references.filter(ref => ref.type === 'conference').map((ref, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-900">
                        <strong>{ref.authors}</strong> ({ref.year}). {ref.title}. 
                        In <em>{ref.conference}</em> (pp. {ref.pages}). {ref.location}.
                        {ref.doi && (
                          <span> DOI: <a href={`https://doi.org/${ref.doi}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{ref.doi}</a></span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Web Resources */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-3" />
                  Sumber Online
                </h3>
                <div className="space-y-4">
                  {references.filter(ref => ref.type === 'web').map((ref, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-900">
                        {ref.authors && <><strong>{ref.authors}</strong> ({ref.year}). </>}
                        {!ref.authors && <><strong>{ref.title}</strong> ({ref.year}). </>}
                        {ref.authors && <>{ref.title}. </>}
                        <em>{ref.publisher}</em>. 
                        Diakses {ref.accessed}. 
                        <a href={ref.url} className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                          {ref.url}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reading Guide */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">📖 Panduan Bacaan</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Prioritas Bacaan:</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>1. <strong>Rosen Ch. 1.1-1.3:</strong> Dasar propositional logic</li>
                      <li>2. <strong>MIT Lecture Notes:</strong> Practical examples</li>
                      <li>3. <strong>Ben-Ari Ch. 2:</strong> Formal approach</li>
                      <li>4. <strong>Stanford CS103:</strong> Modern perspective</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Assignment Reading:</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Truth table construction techniques</li>
                      <li>• Logical equivalences verification</li>
                      <li>• Programming implementations</li>
                      <li>• Real-world applications cases</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">Pertemuan 2 Summary</h4>
              <p className="text-gray-400 text-sm">
                Propositional logic adalah fondasi untuk logical reasoning dalam computer science. 
                Master truth tables dan logical operators untuk sukses di pertemuan selanjutnya.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Pertemuan Selanjutnya</h4>
              <p className="text-gray-400 text-sm">
                Pertemuan 3: Logical Equivalences & Simplification<br/>
                - Laws of logic (De Morgan's, distributive)<br/>
                - Circuit simplification dengan Boolean algebra<br/>
                - Advanced compound propositions
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Assignment 1</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Due: Sebelum Pertemuan 4</li>
                <li>• Weight: 7 marks (21% total)</li>
                <li>• Focus: Truth tables & Python implementation</li>
                <li>• Submit: Code + documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LogicMathWeek2;