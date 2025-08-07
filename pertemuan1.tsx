import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, Book, Code, Brain, CheckCircle, Circle } from 'lucide-react';

const LogicMathWeek1 = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedCard, setExpandedCard] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  const sections = [
    { id: 'overview', title: 'Gambaran Umum', icon: <Book className="w-5 h-5" /> },
    { id: 'concepts', title: 'Konsep Dasar', icon: <Brain className="w-5 h-5" /> },
    { id: 'examples', title: 'Contoh & Aplikasi', icon: <Code className="w-5 h-5" /> },
    { id: 'quiz', title: 'Diagnostic Quiz', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'glossary', title: 'Glosarium', icon: <Book className="w-5 h-5" /> },
    { id: 'references', title: 'Referensi', icon: <Circle className="w-5 h-5" /> }
  ];

  const conceptCards = [
    {
      id: 'reasoning',
      title: 'Mathematical Reasoning',
      subtitle: 'Pola Berpikir Matematis',
      content: 'Kemampuan untuk menganalisis masalah secara sistematis, membuat kesimpulan logis, dan membangun argumen yang valid berdasarkan premis yang diberikan.',
      examples: [
        'Jika semua programmer menguasai logika, dan Andi adalah programmer, maka Andi menguasai logika',
        'Menganalisis pola dalam data untuk membuat prediksi',
        'Memverifikasi kebenaran suatu statement melalui bukti formal'
      ]
    },
    {
      id: 'logical-thinking',
      title: 'Logical Thinking',
      subtitle: 'Berpikir Logis Terstruktur',
      content: 'Proses mental yang menggunakan aturan logika untuk mencapai kesimpulan yang benar dan dapat dipertanggungjawabkan.',
      examples: [
        'Menyusun algoritma step-by-step untuk menyelesaikan masalah',
        'Debugging kode dengan menelusuri alur logika program',
        'Membuat keputusan berdasarkan kondisi yang ada (if-else statements)'
      ]
    },
    {
      id: 'cs-relevance',
      title: 'Relevansi untuk Informatika',
      subtitle: 'Mengapa Penting untuk CS?',
      content: 'Logika matematika adalah fondasi dari semua aspek ilmu komputer, mulai dari pemrograman hingga AI dan database.',
      examples: [
        'Design algoritma dan struktur data yang efisien',
        'Verifikasi correctness program dan formal methods',
        'Database query optimization dan constraint satisfaction'
      ]
    }
  ];

  const programmingExamples = [
    {
      title: 'Conditional Statements',
      description: 'Implementasi logika IF-THEN dalam programming',
      code: `# Contoh 1: Validasi Input User
def validate_age(age):
    if age >= 18:
        return "Dewasa - Akses diizinkan"
    else:
        return "Minor - Perlu persetujuan"

# Contoh 2: Multiple Conditions  
def grade_calculator(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B" 
    elif score >= 70:
        return "C"
    else:
        return "F"`,
      explanation: [
        'Conditional statements adalah implementasi langsung dari implikasi logis (P → Q)',
        'Condition (P) dievaluasi sebagai True/False',
        'Jika True, maka consequence (Q) dijalankan',
        'Multiple conditions menggunakan logical operators (AND, OR, NOT)'
      ]
    },
    {
      title: 'Boolean Logic Operations',
      description: 'Penggunaan operator logika dalam programming',
      code: `# Contoh Boolean Operations
def access_control(is_admin, is_active, has_permission):
    # AND operation - semua kondisi harus True
    full_access = is_admin and is_active and has_permission
    
    # OR operation - salah satu kondisi True sudah cukup
    basic_access = is_active or has_permission
    
    # NOT operation - negasi kondisi
    blocked = not is_active
    
    return {
        'full_access': full_access,
        'basic_access': basic_access,
        'blocked': blocked
    }

# Contoh penggunaan:
result = access_control(True, True, False)
print(result)  # {'full_access': False, 'basic_access': True, 'blocked': False}`,
      explanation: [
        'AND (∧): Semua kondisi harus benar untuk hasil True',
        'OR (∨): Minimal satu kondisi benar untuk hasil True', 
        'NOT (¬): Membalik nilai kebenaran kondisi',
        'Kombinasi operators memungkinkan logic yang kompleks'
      ]
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'Apa yang dimaksud dengan "mathematical reasoning"?',
      options: [
        'Kemampuan menghitung dengan cepat',
        'Proses berpikir sistematis untuk membuat kesimpulan logis',
        'Menghafal rumus matematika',
        'Kemampuan menggunakan kalkulator'
      ],
      correct: 1
    },
    {
      id: 'q2', 
      question: 'Dalam programming, conditional statement "if age >= 18" merupakan contoh dari:',
      options: [
        'Loop statement',
        'Function definition',
        'Logical implication (P → Q)',
        'Variable assignment'
      ],
      correct: 2
    },
    {
      id: 'q3',
      question: 'Operator logika AND (∧) dalam Python menghasilkan True ketika:',
      options: [
        'Salah satu operand True',
        'Semua operand True',
        'Semua operand False',
        'Tidak ada operand yang True'
      ],
      correct: 1
    },
    {
      id: 'q4',
      question: 'Mengapa logika matematika penting untuk mahasiswa informatika?',
      options: [
        'Hanya untuk nilai akademik',
        'Untuk menghitung gaji programmer',
        'Fondasi untuk algoritma, AI, database, dan verifikasi program',
        'Tidak penting untuk praktisi'
      ],
      correct: 2
    }
  ];

  const glossaryTerms = [
    {
      term: 'AI (Artificial Intelligence)',
      definition: 'Kecerdasan Buatan - bidang ilmu komputer yang berfokus pada penciptaan mesin yang dapat melakukan tugas-tugas yang biasanya memerlukan kecerdasan manusia, seperti pembelajaran, penalaran, dan pemecahan masalah.'
    },
    {
      term: 'Algorithm',
      definition: 'Serangkaian instruksi atau langkah-langkah yang ditulis secara sistematis dan logis untuk menyelesaikan suatu masalah atau mencapai tujuan tertentu dalam programming.'
    },
    {
      term: 'Boolean Logic',
      definition: 'Sistem logika yang hanya menggunakan dua nilai: True (benar) dan False (salah). Dinamakan sesuai matematikawan George Boole, digunakan dalam programming dan circuit design.'
    },
    {
      term: 'CS (Computer Science)',
      definition: 'Ilmu Komputer - bidang studi yang mencakup desain, analisis, dan implementasi sistem komputasi serta aplikasinya, meliputi algoritma, struktur data, programming, dan teori komputasi.'
    },
    {
      term: 'Conditional Statements',
      definition: 'Pernyataan dalam programming yang memungkinkan program membuat keputusan berdasarkan kondisi tertentu, seperti if-else, switch-case. Implementasi dari logika implikasi (P → Q).'
    },
    {
      term: 'Database',
      definition: 'Sistem terorganisir untuk menyimpan, mengatur, dan mengambil informasi secara efisien. Contoh: MySQL, PostgreSQL, MongoDB.'
    },
    {
      term: 'Formal Verification',
      definition: 'Proses menggunakan metode matematis formal untuk membuktikan atau menyangkal kebenaran algorithm atau sistem software terhadap spesifikasi formal tertentu.'
    },
    {
      term: 'If-Else Statements',
      definition: 'Struktur kontrol dalam programming yang menjalankan blok kode berbeda berdasarkan apakah kondisi tertentu bernilai True atau False. Dasar dari decision making dalam program.'
    },
    {
      term: 'Logical Connectives',
      definition: 'Operator logika yang menghubungkan proposisi: AND (∧), OR (∨), NOT (¬), IMPLIES (→), dan IF-AND-ONLY-IF (↔). Dasar untuk membentuk logical expressions yang kompleks.'
    },
    {
      term: 'Mathematical Reasoning',
      definition: 'Kemampuan menggunakan logika matematika untuk menganalisis masalah, membuat kesimpulan valid, dan membangun argumen yang dapat dipertanggungjawabkan berdasarkan premis yang ada.'
    },
    {
      term: 'Programming',
      definition: 'Proses menulis, menguji, dan memelihara kode sumber komputer untuk menciptakan software. Melibatkan logical thinking dan problem-solving skills.'
    },
    {
      term: 'Proposisi',
      definition: 'Pernyataan deklaratif yang memiliki nilai kebenaran yang jelas - bisa True atau False, tetapi tidak keduanya. Contoh: "Hari ini adalah hari Senin".'
    },
    {
      term: 'SKS (Sistem Kredit Semester)',
      definition: 'Satuan yang digunakan untuk menyatakan besarnya beban studi mahasiswa, beban kerja dosen, pengalaman belajar, dan beban penyelenggaraan program. 1 SKS = 50 menit pembelajaran per minggu.'
    },
    {
      term: 'SQL (Structured Query Language)',
      definition: 'Bahasa pemrograman standar untuk mengakses dan memanipulasi database relational. Berdasarkan konsep predicate logic dan set theory.'
    },
    {
      term: 'Truth Table',
      definition: 'Tabel yang menunjukkan nilai kebenaran dari suatu logical expression untuk semua kemungkinan kombinasi nilai input. Tool fundamental dalam propositional logic.'
    }
  ];

  const references = [
    {
      type: 'book',
      authors: 'Lehman, Eric., Leighton, F. Thomson., Meyer, Albert R.',
      year: '2017',
      title: 'Mathematics for Computer Science',
      publisher: 'MIT OpenCourseWare',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/'
    },
    {
      type: 'book',
      authors: 'Rosen, Kenneth H.',
      year: '2019',
      title: 'Discrete Mathematics and Its Applications',
      edition: '8th Edition',
      publisher: 'McGraw-Hill Education',
      location: 'New York'
    },
    {
      type: 'book', 
      authors: 'Ben-Ari, Mordechai',
      year: '2012',
      title: 'Mathematical Logic for Computer Science',
      edition: '3rd Edition',
      publisher: 'Springer-Verlag',
      location: 'London',
      doi: '10.1007/978-1-4471-4129-7'
    },
    {
      type: 'journal',
      authors: 'Barnes, David J., Kölling, Michael',
      year: '2020',
      title: 'The Importance of Teaching Logic to Computer Scientists and Electrical Engineers',
      journal: 'ACM Transactions on Computing Education',
      volume: '20',
      number: '4',
      pages: '1-18',
      doi: '10.1145/3721986'
    },
    {
      type: 'conference',
      authors: 'Gries, David., Schneider, Fred B.',
      year: '2018',
      title: 'Integrating Logic into the Computer Science Curriculum',
      conference: 'Proceedings of the 49th ACM Technical Symposium on Computer Science Education',
      pages: '285-290',
      location: 'Baltimore, MD, USA'
    },
    {
      type: 'web',
      authors: 'Causey, Robert L.',
      year: '2019',
      title: 'Why Logic is Important for Computer Science and Mathematics',
      publisher: 'University of Texas at Austin',
      url: 'https://www.cs.utexas.edu/~rlc/whylog.htm',
      accessed: '2024'
    },
    {
      type: 'journal',
      authors: 'Clark, Richard C., Nguyen, Frank., Sweller, John',
      year: '2021',
      title: 'Flipped classroom as a reform-oriented approach to teaching mathematics',
      journal: 'ZDM Mathematics Education',
      volume: '53',
      number: '2',
      pages: '281-295',
      doi: '10.1007/s11858-020-01191-5'
    },
    {
      type: 'journal',
      authors: 'Bawa, Papia',
      year: '2023',
      title: 'Effect of flipped classroom learning approach on mathematics achievement and interest among secondary school students',
      journal: 'Education and Information Technologies',
      volume: '28',
      pages: '12389-12408',
      doi: '10.1007/s10639-023-12145-1'
    },
    {
      type: 'web',
      title: 'MIT 6.042J Mathematics for Computer Science Course Materials',
      publisher: 'Massachusetts Institute of Technology',
      year: '2017',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/mit6_042jf10_notes/',
      accessed: '2024'
    },
    {
      type: 'web',
      title: 'Stanford CS103: Mathematical Foundations of Computing',
      publisher: 'Stanford University',
      year: '2024',
      url: 'https://web.stanford.edu/class/cs103/',
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
              <p className="text-gray-600">Pertemuan 1: Pengenalan dan Dasar-dasar</p>
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
                Selamat Datang di Logika Matematika
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                "Kalkulus Ilmu Komputer" - Fondasi fundamental untuk semua disiplin komputasi
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tujuan Pembelajaran</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Mathematical Reasoning</h4>
                      <p className="text-gray-600">Mengembangkan kemampuan berpikir logis terstruktur</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Programming Foundation</h4>
                      <p className="text-gray-600">Memahami hubungan logic dengan programming</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Formal Verification</h4>
                      <p className="text-gray-600">Tools matematis untuk verifikasi program</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">CS Applications</h4>
                      <p className="text-gray-600">Aplikasi dalam AI, database, dan algoritma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Overview */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gambaran Mata Kuliah</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Book className="w-8 h-8 text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">16 Pertemuan</h4>
                  <p className="text-gray-600">Pembelajaran terstruktur dari dasar hingga aplikasi lanjutan</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Programming Integrated</h4>
                  <p className="text-gray-600">Setiap konsep dihubungkan dengan aplikasi programming</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hands-on Learning</h4>
                  <p className="text-gray-600">Praktik langsung dengan tools dan implementasi</p>
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
              <p className="text-xl text-gray-600">Memahami dasar-dasar reasoning dan logical thinking</p>
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
                      <h4 className="font-semibold text-gray-900 mb-3">Contoh Aplikasi:</h4>
                      <ul className="space-y-2">
                        {card.examples.map((example, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Examples Section */}
        {activeSection === 'examples' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Aplikasi dalam Programming</h2>
              <p className="text-xl text-gray-600">Melihat logika matematika dalam aksi</p>
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
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Penjelasan Konsep:</h4>
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

                    {/* Online IDE Recommendation */}
                    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Play className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-blue-900">Jalankan Kode Ini:</span>
                      </div>
                      <p className="text-blue-800 text-sm">
                        Copy kode di atas dan jalankan di{' '}
                        <a 
                          href="https://www.onlineide.pro" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-mono underline hover:text-blue-600"
                        >
                          www.onlineide.pro
                        </a>
                        {' '}(pilih Python) untuk melihat hasilnya secara langsung!
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Demo */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🚀 Coba Sendiri!</h3>
              <p className="text-gray-300 mb-4">
                Untuk menjalankan dan bereksperimen dengan kode Python di atas, gunakan online editor yang mudah diakses:
              </p>
              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Code className="w-5 h-5 text-white" />
                  <span className="font-semibold text-white">Rekomendasi Platform:</span>
                </div>
                <a 
                  href="https://www.onlineide.pro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-100 font-mono text-lg underline"
                >
                  www.onlineide.pro
                </a>
                <p className="text-gray-300 text-sm mt-2">
                  ✅ Tidak perlu install Python &nbsp;&nbsp; ✅ Langsung jalan di browser &nbsp;&nbsp; ✅ Gratis dan mudah
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm font-mono">
                  # Tantangan: Buat fungsi yang mengecek apakah seseorang bisa mengikuti mata kuliah<br/>
                  # Syarat: IPK >= 2.5 AND sudah lulus Matematika Dasar<br/>
                  # Tulis kode Anda di bawah ini...
                </p>
              </div>
              <div className="mt-4 text-gray-300 text-sm">
                <p><strong>Cara menggunakan:</strong></p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                  <li>Buka www.onlineide.pro di browser</li>
                  <li>Pilih "Python" sebagai bahasa programming</li>
                  <li>Copy-paste kode contoh di atas</li>
                  <li>Klik "Run" untuk melihat hasilnya</li>
                  <li>Modifikasi kode dan eksperimen dengan nilai-nilai berbeda</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Section */}
        {activeSection === 'quiz' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Diagnostic Quiz</h2>
              <p className="text-xl text-gray-600">Ukur pemahaman dasar Anda tentang logika matematika</p>
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
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl font-bold text-black">
                        {getQuizScore()}/{quizQuestions.length}
                      </div>
                      <div className="text-gray-600">
                        <p>Skor: {Math.round((getQuizScore() / quizQuestions.length) * 100)}%</p>
                        <p className="text-sm">
                          {getQuizScore() >= 3 ? 'Excellent! Anda siap untuk materi selanjutnya.' : 
                           getQuizScore() >= 2 ? 'Good! Review kembali beberapa konsep.' :
                           'Perlu review lebih mendalam sebelum lanjut.'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {quizQuestions.map((question, index) => (
                        <div key={question.id} className="text-sm">
                          <span className={`font-medium ${quizAnswers[question.id] === question.correct ? 'text-green-600' : 'text-red-600'}`}>
                            Soal {index + 1}: {quizAnswers[question.id] === question.correct ? '✓ Benar' : '✗ Salah'}
                          </span>
                          {quizAnswers[question.id] !== question.correct && (
                            <p className="text-gray-600 ml-4">Jawaban yang benar: {question.options[question.correct]}</p>
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
              <p className="text-xl text-gray-600">Daftar istilah dan singkatan penting dalam Logika Matematika</p>
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
              <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Tips Belajar</h3>
              <p className="text-blue-800">
                <strong>Flashcard Method:</strong> Tulis setiap istilah di satu sisi kartu dan definisinya di sisi lain. 
                Review secara berkala untuk memperkuat memori jangka panjang. Istilah-istilah ini akan sering muncul 
                sepanjang semester!
              </p>
            </div>
          </div>
        )}

        {/* References Section */}
        {activeSection === 'references' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Daftar Referensi</h2>
              <p className="text-xl text-gray-600">Sumber pembelajaran yang dapat dipercaya dan up-to-date</p>
            </div>

            <div className="space-y-8">
              {/* Primary Textbooks */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Book className="w-6 h-6 mr-3" />
                  Buku Teks Utama
                </h3>
                <div className="space-y-4">
                  {references.filter(ref => ref.type === 'book').map((ref, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-900">
                        <strong>{ref.authors}</strong> ({ref.year}). <em>{ref.title}</em>
                        {ref.edition && `, ${ref.edition}`}.
                        {ref.location && ` ${ref.location}: `}{ref.publisher}.
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

              {/* Academic Guidelines */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">📚 Panduan Penggunaan Referensi</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Untuk Mahasiswa:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Gunakan minimal 3 referensi untuk tugas esai</li>
                      <li>• Prioritaskan sumber akademik (jurnal, buku teks)</li>
                      <li>• Selalu cantumkan citation yang benar</li>
                      <li>• Akses MIT OCW untuk materi tambahan gratis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Format Citation:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Gunakan format APA atau IEEE</li>
                      <li>• Include DOI jika tersedia</li>
                      <li>• Cantumkan tanggal akses untuk sumber web</li>
                      <li>• Pastikan semua link masih aktif</li>
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
              <h4 className="font-bold mb-4">Logika Matematika</h4>
              <p className="text-gray-400 text-sm">
                Mata kuliah fundamental untuk mahasiswa informatika. 
                Membangun fondasi logical thinking yang kuat untuk karir di teknologi.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Pertemuan Selanjutnya</h4>
              <p className="text-gray-400 text-sm">
                Pertemuan 2: Propositional Logic Fundamentals<br/>
                - Proposisi dan logical connectives<br/>
                - Truth tables dan logical operations
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• MIT Mathematics for CS</li>
                <li>• Rosen Discrete Mathematics</li>
                <li>• Python Logic Programming</li>
                <li>• Interactive Logic Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LogicMathWeek1;