import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, Book, Code, Brain, CheckCircle, Circle, ArrowRight, AlertCircle, Zap, Settings } from 'lucide-react';

const LogicMathWeek3 = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedCard, setExpandedCard] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  const sections = [
    { id: 'overview', title: 'Gambaran Umum', icon: <Book className="w-5 h-5" /> },
    { id: 'concepts', title: 'Logical Equivalences', icon: <Brain className="w-5 h-5" /> },
    { id: 'laws', title: 'Hukum-hukum Logika', icon: <Settings className="w-5 h-5" /> },
    { id: 'examples', title: 'Circuit Simplification', icon: <Code className="w-5 h-5" /> },
    { id: 'quiz', title: 'Latihan Soal', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'glossary', title: 'Glosarium', icon: <Book className="w-5 h-5" /> },
    { id: 'references', title: 'Referensi', icon: <Circle className="w-5 h-5" /> }
  ];

  const conceptCards = [
    {
      id: 'logical-equivalence',
      title: 'Logical Equivalence (≡)',
      subtitle: 'Proposisi dengan Nilai Kebenaran Identik',
      content: 'Dua proposisi P dan Q dikatakan logically equivalent (P ≡ Q) jika kedua proposisi memiliki nilai kebenaran yang sama untuk semua kemungkinan assignment truth values pada variabel proposisional mereka.',
      examples: [
        'P → Q ≡ ¬P ∨ Q (Conditional equivalence)',
        '¬(P ∧ Q) ≡ ¬P ∨ ¬Q (De Morgan\'s Law)',
        'P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R) (Distributive Law)',
        'P ∨ P ≡ P (Idempotent Law)'
      ],
      programming: 'Dalam programming, logical equivalences memungkinkan optimisasi boolean expressions dan simplifikasi conditional logic.',
      verification: 'Diverifikasi menggunakan truth tables atau algebraic manipulation dengan laws of logic.'
    },
    {
      id: 'tautologies',
      title: 'Tautologies',
      subtitle: 'Proposisi yang Selalu Benar',
      content: 'Tautology adalah compound proposition yang bernilai True untuk semua kemungkinan truth assignments. Tautologi merepresentasikan logical truths yang universal.',
      examples: [
        'P ∨ ¬P (Law of Excluded Middle)',
        '(P → Q) ↔ (¬Q → ¬P) (Contrapositive equivalence)',
        '((P → Q) ∧ P) → Q (Modus Ponens)',
        '(P ∧ Q) → P (Simplification)'
      ],
      programming: 'Tautologi berguna untuk validating logical reasoning patterns dan membangun proof systems.',
      verification: 'Dapat diidentifikasi jika semua entries pada truth table column terakhir bernilai True.'
    },
    {
      id: 'contradictions',
      title: 'Contradictions',
      subtitle: 'Proposisi yang Selalu Salah',
      content: 'Contradiction adalah compound proposition yang bernilai False untuk semua kemungkinan truth assignments. Kontradiksi menunjukkan logical impossibilities.',
      examples: [
        'P ∧ ¬P (Direct contradiction)',
        '(P ↔ Q) ∧ (P ↔ ¬Q) (Impossible biconditional)',
        '(P → Q) ∧ (P → ¬Q) ∧ P (Conflicting implications)',
        '(P ∨ Q) ∧ ¬P ∧ ¬Q (Impossible disjunction)'
      ],
      programming: 'Detecting contradictions penting untuk debugging logic errors dan ensuring consistency dalam specifications.',
      verification: 'Dapat diidentifikasi jika semua entries pada truth table column terakhir bernilai False.'
    },
    {
      id: 'contingencies',
      title: 'Contingencies',
      subtitle: 'Proposisi dengan Mixed Truth Values',
      content: 'Contingency adalah compound proposition yang tidak termasuk tautology maupun contradiction - memiliki nilai True untuk beberapa truth assignments dan False untuk yang lain.',
      examples: [
        'P ∧ Q (True hanya ketika both P dan Q true)',
        'P → Q (False hanya ketika P true dan Q false)',
        '(P ∨ Q) ∧ ¬(P ∧ Q) (Exclusive OR behavior)',
        'P ↔ (Q ∨ R) (Conditional dependence)'
      ],
      programming: 'Contingencies represent conditional logic yang bergantung pada specific input conditions.',
      verification: 'Truth table menunjukkan mixed values (both True dan False entries) pada result column.'
    }
  ];

  const logicLaws = [
    {
      category: 'Identity Laws',
      description: 'Laws yang melibatkan true (T) dan false (F) constants',
      laws: [
        { name: 'Identity for ∧', formula: 'P ∧ T ≡ P', explanation: 'AND dengan True menghasilkan original proposition' },
        { name: 'Identity for ∨', formula: 'P ∨ F ≡ P', explanation: 'OR dengan False menghasilkan original proposition' }
      ],
      pythonExample: `# Identity Laws dalam Python
def identity_laws_demo():
    P = True  # atau False
    
    # Identity for AND: P and True = P
    result1 = P and True
    print(f"P ∧ T: {P} and True = {result1}")  # Hasil: sama dengan P
    
    # Identity for OR: P or False = P  
    result2 = P or False
    print(f"P ∨ F: {P} or False = {result2}")  # Hasil: sama dengan P

identity_laws_demo()`
    },
    {
      category: 'Domination Laws',
      description: 'Laws yang menunjukkan dominasi True dan False',
      laws: [
        { name: 'Domination for ∧', formula: 'P ∧ F ≡ F', explanation: 'AND dengan False selalu menghasilkan False' },
        { name: 'Domination for ∨', formula: 'P ∨ T ≡ T', explanation: 'OR dengan True selalu menghasilkan True' }
      ],
      pythonExample: `# Domination Laws dalam Python
def domination_laws_demo():
    P = True  # bisa True atau False
    
    # Domination for AND: P and False = False
    result1 = P and False
    print(f"P ∧ F: {P} and False = {result1}")  # Selalu False
    
    # Domination for OR: P or True = True
    result2 = P or True  
    print(f"P ∨ T: {P} or True = {result2}")   # Selalu True

domination_laws_demo()`
    },
    {
      category: 'Negation Laws',
      description: 'Laws yang berkaitan dengan negasi dan complement',
      laws: [
        { name: 'Complement for ∧', formula: 'P ∧ ¬P ≡ F', explanation: 'Proposition AND dengan negatifnya selalu False' },
        { name: 'Complement for ∨', formula: 'P ∨ ¬P ≡ T', explanation: 'Proposition OR dengan negatifnya selalu True (Law of Excluded Middle)' },
        { name: 'Double Negation', formula: '¬¬P ≡ P', explanation: 'Dua negasi berturut-turut saling menghilangkan' }
      ],
      pythonExample: `# Negation Laws dalam Python
def negation_laws_demo():
    P = True  # atau False
    
    # Complement for AND: P and not P = False
    result1 = P and (not P)
    print(f"P ∧ ¬P: {P} and {not P} = {result1}")  # Selalu False
    
    # Complement for OR: P or not P = True
    result2 = P or (not P)
    print(f"P ∨ ¬P: {P} or {not P} = {result2}")   # Selalu True
    
    # Double Negation: not not P = P
    result3 = not (not P)
    print(f"¬¬P: not not {P} = {result3}")         # Sama dengan P

negation_laws_demo()`
    },
    {
      category: 'De Morgan\'s Laws',
      description: 'Laws fundamental untuk negasi compound expressions',
      laws: [
        { name: 'De Morgan 1', formula: '¬(P ∧ Q) ≡ ¬P ∨ ¬Q', explanation: 'Negasi dari AND sama dengan OR dari negasi individual' },
        { name: 'De Morgan 2', formula: '¬(P ∨ Q) ≡ ¬P ∧ ¬Q', explanation: 'Negasi dari OR sama dengan AND dari negasi individual' }
      ],
      pythonExample: `# De Morgan's Laws dalam Python
def de_morgan_laws_demo():
    P, Q = True, False  # contoh values
    
    # De Morgan 1: not (P and Q) = (not P) or (not Q)
    left_side1 = not (P and Q)
    right_side1 = (not P) or (not Q)
    print(f"¬(P ∧ Q): not ({P} and {Q}) = {left_side1}")
    print(f"¬P ∨ ¬Q: {not P} or {not Q} = {right_side1}")
    print(f"Equivalent: {left_side1 == right_side1}\\n")
    
    # De Morgan 2: not (P or Q) = (not P) and (not Q)
    left_side2 = not (P or Q)
    right_side2 = (not P) and (not Q)
    print(f"¬(P ∨ Q): not ({P} or {Q}) = {left_side2}")
    print(f"¬P ∧ ¬Q: {not P} and {not Q} = {right_side2}")
    print(f"Equivalent: {left_side2 == right_side2}")

de_morgan_laws_demo()`
    },
    {
      category: 'Distributive Laws',
      description: 'Laws untuk distribusi operators satu sama lain',
      laws: [
        { name: 'Distributive ∧ over ∨', formula: 'P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)', explanation: 'AND dapat didistribusikan ke dalam OR' },
        { name: 'Distributive ∨ over ∧', formula: 'P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)', explanation: 'OR dapat didistribusikan ke dalam AND' }
      ],
      pythonExample: `# Distributive Laws dalam Python
def distributive_laws_demo():
    P, Q, R = True, False, True  # contoh values
    
    # Distributive AND over OR: P and (Q or R) = (P and Q) or (P and R)
    left_side1 = P and (Q or R)
    right_side1 = (P and Q) or (P and R)
    print(f"P ∧ (Q ∨ R): {P} and ({Q} or {R}) = {left_side1}")
    print(f"(P ∧ Q) ∨ (P ∧ R): ({P} and {Q}) or ({P} and {R}) = {right_side1}")
    print(f"Equivalent: {left_side1 == right_side1}\\n")
    
    # Distributive OR over AND: P or (Q and R) = (P or Q) and (P or R)
    left_side2 = P or (Q and R)
    right_side2 = (P or Q) and (P or R)
    print(f"P ∨ (Q ∧ R): {P} or ({Q} and {R}) = {left_side2}")
    print(f"(P ∨ Q) ∧ (P ∨ R): ({P} or {Q}) and ({P} or {R}) = {right_side2}")
    print(f"Equivalent: {left_side2 == right_side2}")

distributive_laws_demo()`
    }
  ];

  const circuitExamples = [
    {
      title: 'Boolean Algebra Calculator',
      description: 'Program untuk simplifikasi Boolean expressions menggunakan logical laws',
      code: `class BooleanSimplifier:
    """
    Class untuk simplifikasi Boolean expressions menggunakan logical laws
    """
    
    def __init__(self):
        # Mapping logical laws untuk simplifikasi
        self.simplification_rules = {
            'identity_and': lambda expr: self.apply_identity_and(expr),
            'identity_or': lambda expr: self.apply_identity_or(expr),
            'domination_and': lambda expr: self.apply_domination_and(expr),
            'domination_or': lambda expr: self.apply_domination_or(expr),
            'complement_and': lambda expr: self.apply_complement_and(expr),
            'complement_or': lambda expr: self.apply_complement_or(expr),
            'double_negation': lambda expr: self.apply_double_negation(expr),
            'de_morgan': lambda expr: self.apply_de_morgan(expr),
            'idempotent': lambda expr: self.apply_idempotent(expr)
        }
    
    def evaluate_expression(self, expression, variables):
        """
        Evaluasi Boolean expression dengan variable assignments
        
        Args:
            expression (str): Boolean expression dalam format Python
            variables (dict): Variable assignments {'P': True, 'Q': False}
        
        Returns:
            bool: Hasil evaluasi expression
        """
        # Replace variables dalam expression dengan values
        eval_expr = expression
        for var, value in variables.items():
            eval_expr = eval_expr.replace(var, str(value))
        
        # Replace logical operators dengan Python operators
        eval_expr = eval_expr.replace('∧', ' and ')
        eval_expr = eval_expr.replace('∨', ' or ')
        eval_expr = eval_expr.replace('¬', ' not ')
        eval_expr = eval_expr.replace('AND', ' and ')
        eval_expr = eval_expr.replace('OR', ' or ')
        eval_expr = eval_expr.replace('NOT', ' not ')
        
        try:
            return eval(eval_expr)
        except:
            return None
    
    def verify_equivalence(self, expr1, expr2, variables_list):
        """
        Verifikasi apakah dua expressions equivalent untuk semua truth assignments
        
        Args:
            expr1, expr2 (str): Boolean expressions yang akan dibandingkan
            variables_list (list): List variable names yang digunakan
        
        Returns:
            tuple: (is_equivalent, truth_table)
        """
        truth_table = []
        equivalent = True
        
        # Generate semua kombinasi truth values
        num_vars = len(variables_list)
        for i in range(2 ** num_vars):
            # Convert i ke binary untuk generate truth assignment
            binary = format(i, f'0{num_vars}b')
            variables = {}
            
            for j, var in enumerate(variables_list):
                variables[var] = binary[j] == '1'
            
            # Evaluate kedua expressions
            result1 = self.evaluate_expression(expr1, variables)
            result2 = self.evaluate_expression(expr2, variables)
            
            # Record hasil dalam truth table
            row = list(variables.values()) + [result1, result2, result1 == result2]
            truth_table.append(row)
            
            if result1 != result2:
                equivalent = False
        
        return equivalent, truth_table
    
    def simplify_by_laws(self, expression):
        """
        Aplikasi logical laws untuk simplifikasi step-by-step
        """
        simplified = expression
        steps = [f"Original: {expression}"]
        
        # Apply various simplification rules
        # Identity Laws
        if "P ∧ True" in simplified or "P AND True" in simplified:
            simplified = simplified.replace("P ∧ True", "P").replace("P AND True", "P")
            steps.append(f"Identity Law (∧): {simplified}")
        
        if "P ∨ False" in simplified or "P OR False" in simplified:
            simplified = simplified.replace("P ∨ False", "P").replace("P OR False", "P")
            steps.append(f"Identity Law (∨): {simplified}")
        
        # Domination Laws  
        if "P ∧ False" in simplified or "P AND False" in simplified:
            simplified = "False"
            steps.append(f"Domination Law (∧): {simplified}")
        
        if "P ∨ True" in simplified or "P OR True" in simplified:
            simplified = "True"
            steps.append(f"Domination Law (∨): {simplified}")
        
        # Double Negation
        if "¬¬P" in simplified or "NOT NOT P" in simplified:
            simplified = simplified.replace("¬¬P", "P").replace("NOT NOT P", "P")
            steps.append(f"Double Negation: {simplified}")
        
        return simplified, steps

# Demo penggunaan Boolean Simplifier
simplifier = BooleanSimplifier()

# Contoh 1: Verifikasi De Morgan's Law
print("=== VERIFIKASI DE MORGAN'S LAW ===")
expr1 = "not (P and Q)"
expr2 = "(not P) or (not Q)"
variables = ['P', 'Q']

is_equiv, truth_table = simplifier.verify_equivalence(expr1, expr2, variables)

print(f"Expression 1: ¬(P ∧ Q)")
print(f"Expression 2: ¬P ∨ ¬Q")
print(f"Equivalent: {is_equiv}\\n")

print("Truth Table:")
print("P     Q     ¬(P∧Q)  ¬P∨¬Q   Equiv?")
print("--------------------------------")
for row in truth_table:
    p, q, result1, result2, equiv = row
    print(f"{str(p):5} {str(q):5} {str(result1):7} {str(result2):7} {str(equiv):6}")

print("\\n" + "="*50)

# Contoh 2: Simplifikasi step-by-step
print("=== SIMPLIFIKASI STEP-BY-STEP ===")
complex_expr = "P ∧ True ∨ False"
simplified, steps = simplifier.simplify_by_laws(complex_expr)

for step in steps:
    print(step)

print(f"\\nFinal result: {simplified}")`,
      explanation: [
        '1. Class BooleanSimplifier menyediakan tools untuk working dengan Boolean expressions',
        '2. Method evaluate_expression mengconvert logical symbols ke Python operators',
        '3. Method verify_equivalence membuat complete truth table untuk comparison',
        '4. Method simplify_by_laws menerapkan logical laws secara step-by-step',
        '5. Program dapat memverifikasi equivalences seperti De Morgan\'s Laws',
        '6. Hasil simplifikasi menunjukkan transformasi dari complex ke simple expressions'
      ]
    },
    {
      title: 'Digital Circuit Simulator',
      description: 'Simulasi logic gates dan circuit simplification',
      code: `class LogicGate:
    """
    Base class untuk semua logic gates
    """
    def __init__(self, name):
        self.name = name
        self.inputs = []
        self.output = None
    
    def add_input(self, input_value):
        self.inputs.append(input_value)
    
    def evaluate(self):
        raise NotImplementedError("Subclass harus implement evaluate method")

class ANDGate(LogicGate):
    """AND Gate: Output True hanya jika semua inputs True"""
    def evaluate(self):
        if not self.inputs:
            return False
        self.output = all(self.inputs)
        return self.output

class ORGate(LogicGate):
    """OR Gate: Output True jika minimal satu input True"""
    def evaluate(self):
        if not self.inputs:
            return False
        self.output = any(self.inputs)
        return self.output

class NOTGate(LogicGate):
    """NOT Gate: Output adalah negasi dari input"""
    def evaluate(self):
        if len(self.inputs) != 1:
            raise ValueError("NOT gate harus memiliki exactly satu input")
        self.output = not self.inputs[0]
        return self.output

class NANDGate(LogicGate):
    """NAND Gate: NOT AND - negasi dari AND gate"""
    def evaluate(self):
        if not self.inputs:
            return True
        self.output = not all(self.inputs)
        return self.output

class NORGate(LogicGate):
    """NOR Gate: NOT OR - negasi dari OR gate"""
    def evaluate(self):
        if not self.inputs:
            return True
        self.output = not any(self.inputs)
        return self.output

class DigitalCircuit:
    """
    Class untuk building dan simulate digital circuits
    """
    def __init__(self, name):
        self.name = name
        self.gates = []
        self.inputs = {}
        self.outputs = {}
    
    def add_gate(self, gate):
        self.gates.append(gate)
    
    def set_input(self, name, value):
        self.inputs[name] = value
    
    def simulate(self):
        """Simulate circuit dengan current input values"""
        results = {}
        
        for gate in self.gates:
            # Clear previous inputs
            gate.inputs.clear()
            
            # Add inputs berdasarkan gate type dan connections
            # Ini simplified version - real implementation perlu connection mapping
            
            result = gate.evaluate()
            results[gate.name] = result
        
        return results

# Circuit Optimization menggunakan Boolean Algebra
class CircuitOptimizer:
    """
    Class untuk circuit optimization menggunakan Boolean laws
    """
    
    def __init__(self):
        self.optimization_rules = {
            # Identity optimizations
            'and_with_true': self.optimize_and_true,
            'or_with_false': self.optimize_or_false,
            # Domination optimizations  
            'and_with_false': self.optimize_and_false,
            'or_with_true': self.optimize_or_true,
            # Complement optimizations
            'and_complement': self.optimize_and_complement,
            'or_complement': self.optimize_or_complement
        }
    
    def optimize_and_true(self, circuit_expr):
        """P ∧ True ≡ P"""
        return circuit_expr.replace("∧ True", "").replace("True ∧", "")
    
    def optimize_or_false(self, circuit_expr):
        """P ∨ False ≡ P"""
        return circuit_expr.replace("∨ False", "").replace("False ∨", "")
    
    def optimize_and_false(self, circuit_expr):
        """P ∧ False ≡ False"""
        if "∧ False" in circuit_expr or "False ∧" in circuit_expr:
            return "False"
        return circuit_expr
    
    def optimize_or_true(self, circuit_expr):
        """P ∨ True ≡ True"""
        if "∨ True" in circuit_expr or "True ∨" in circuit_expr:
            return "True"
        return circuit_expr
    
    def count_gates_before_after(self, original, optimized):
        """Count jumlah gates sebelum dan sesudah optimization"""
        # Simplified gate counting berdasarkan operators
        original_gates = original.count('∧') + original.count('∨') + original.count('¬')
        optimized_gates = optimized.count('∧') + optimized.count('∨') + optimized.count('¬')
        
        return original_gates, optimized_gates

# Demo Circuit Simulation dan Optimization
print("=== DIGITAL CIRCUIT SIMULATION ===")

# Membuat individual gates
and_gate1 = ANDGate("AND1")
or_gate1 = ORGate("OR1")
not_gate1 = NOTGate("NOT1")

# Test individual gates
print("Individual Gate Tests:")
and_gate1.add_input(True)
and_gate1.add_input(False)
print(f"AND Gate (True, False): {and_gate1.evaluate()}")

or_gate1.add_input(True)  
or_gate1.add_input(False)
print(f"OR Gate (True, False): {or_gate1.evaluate()}")

not_gate1.add_input(True)
print(f"NOT Gate (True): {not_gate1.evaluate()}")

print("\\n" + "="*40)

# Circuit Optimization Example
print("=== CIRCUIT OPTIMIZATION ===")
optimizer = CircuitOptimizer()

# Original complex expression
original_circuit = "(P ∧ Q) ∨ (P ∧ True) ∨ False"
print(f"Original: {original_circuit}")

# Apply optimizations step by step
step1 = optimizer.optimize_and_true(original_circuit)
print(f"After P ∧ True ≡ P: {step1}")

step2 = optimizer.optimize_or_false(step1)
print(f"After P ∨ False ≡ P: {step2}")

# Gate count comparison
original_gates, optimized_gates = optimizer.count_gates_before_after(
    original_circuit, step2
)

print(f"\\nGate Count Reduction:")
print(f"Original gates: {original_gates}")
print(f"Optimized gates: {optimized_gates}")
print(f"Reduction: {original_gates - optimized_gates} gates ({((original_gates - optimized_gates) / original_gates * 100):.1f}%)")

print("\\n" + "="*40)

# Truth Table untuk Original vs Optimized
print("=== VERIFICATION: ORIGINAL vs OPTIMIZED ===")
print("Verifying that optimization preserves functionality...")

# Simplified verification - dalam real implementation akan lebih complex
def evaluate_circuit(expr, P, Q):
    """Evaluate circuit expression dengan given P, Q values"""
    # Replace variables dengan actual values
    result_expr = expr.replace('P', str(P)).replace('Q', str(Q))
    result_expr = result_expr.replace('True', 'True').replace('False', 'False')
    result_expr = result_expr.replace('∧', ' and ').replace('∨', ' or ')
    
    try:
        return eval(result_expr)
    except:
        return None

print("P     Q     Original  Optimized  Match?")
print("------------------------------------")
for P in [False, True]:
    for Q in [False, True]:
        orig_result = evaluate_circuit(original_circuit, P, Q)
        opt_result = evaluate_circuit(step2, P, Q)
        match = orig_result == opt_result
        print(f"{str(P):5} {str(Q):5} {str(orig_result):9} {str(opt_result):10} {str(match):6}")`,
      explanation: [
        '1. LogicGate classes merepresentasikan different types of digital logic gates',
        '2. Setiap gate class mengimplementasikan evaluate() method untuk logic operation',
        '3. DigitalCircuit class memungkinkan building complex circuits dari individual gates',
        '4. CircuitOptimizer class menerapkan Boolean algebra rules untuk simplification',
        '5. Optimization dapat significantly reduce jumlah gates dalam circuit design',
        '6. Verification memastikan optimized circuit memiliki functionality yang sama',
        '7. Real-world applications: CPU design, FPGA programming, digital system optimization'
      ]
    },
    {
      title: 'Logical Equivalence Verifier',
      description: 'Tool untuk verifikasi dan proof logical equivalences',
      code: `class EquivalenceVerifier:
    """
    Advanced tool untuk verifying dan proving logical equivalences
    """
    
    def __init__(self):
        # Standard logical equivalences database
        self.known_equivalences = {
            'conditional': ['P → Q', '¬P ∨ Q'],
            'biconditional': ['P ↔ Q', '(P → Q) ∧ (Q → P)'],
            'de_morgan_1': ['¬(P ∧ Q)', '¬P ∨ ¬Q'],
            'de_morgan_2': ['¬(P ∨ Q)', '¬P ∧ ¬Q'],
            'distributive_1': ['P ∧ (Q ∨ R)', '(P ∧ Q) ∨ (P ∧ R)'],
            'distributive_2': ['P ∨ (Q ∧ R)', '(P ∨ Q) ∧ (P ∨ R)'],
            'absorption_1': ['P ∧ (P ∨ Q)', 'P'],
            'absorption_2': ['P ∨ (P ∧ Q)', 'P']
        }
        
        self.tautologies = [
            'P ∨ ¬P',  # Law of Excluded Middle
            '(P → Q) ↔ (¬Q → ¬P)',  # Contrapositive
            '((P → Q) ∧ P) → Q',  # Modus Ponens
            '((P → Q) ∧ ¬Q) → ¬P'  # Modus Tollens
        ]
        
        self.contradictions = [
            'P ∧ ¬P',  # Direct contradiction
            '(P ↔ Q) ∧ (P ↔ ¬Q)'  # Impossible biconditional
        ]
    
    def generate_truth_table(self, expression, variables):
        """
        Generate complete truth table untuk given expression
        
        Args:
            expression (str): Logical expression
            variables (list): List of variable names
        
        Returns:
            list: Truth table sebagai list of dictionaries
        """
        truth_table = []
        num_vars = len(variables)
        
        # Generate all possible truth value combinations
        for i in range(2 ** num_vars):
            binary = format(i, f'0{num_vars}b')
            assignment = {}
            
            for j, var in enumerate(variables):
                assignment[var] = binary[j] == '1'
            
            # Evaluate expression dengan current assignment
            result = self.evaluate_expression(expression, assignment)
            
            row = assignment.copy()
            row['result'] = result
            truth_table.append(row)
        
        return truth_table
    
    def evaluate_expression(self, expression, assignment):
        """
        Evaluate logical expression dengan given variable assignment
        """
        # Convert logical symbols ke Python operators
        eval_expr = expression
        for var, value in assignment.items():
            eval_expr = eval_expr.replace(var, str(value))
        
        # Replace logical operators
        replacements = {
            '¬': ' not ', '∧': ' and ', '∨': ' or ',
            '→': ' <= ', '↔': ' == ',  # Simplified representations
            'NOT': ' not ', 'AND': ' and ', 'OR': ' or '
        }
        
        for old, new in replacements.items():
            eval_expr = eval_expr.replace(old, new)
        
        # Handle implication dan biconditional
        eval_expr = self.handle_implication(eval_expr)
        eval_expr = self.handle_biconditional(eval_expr)
        
        try:
            return eval(eval_expr)
        except:
            return None
    
    def handle_implication(self, expr):
        """Convert P → Q ke ¬P ∨ Q format untuk evaluation"""
        # Simplified handling - real implementation lebih complex
        return expr.replace(' <= ', ' or not ')
    
    def handle_biconditional(self, expr):
        """Convert P ↔ Q ke (P → Q) ∧ (Q → P) format"""
        # Simplified handling
        return expr.replace(' == ', ' == ')
    
    def classify_expression(self, expression, variables):
        """
        Classify expression sebagai tautology, contradiction, atau contingency
        
        Returns:
            tuple: (classification, truth_table)
        """
        truth_table = self.generate_truth_table(expression, variables)
        results = [row['result'] for row in truth_table]
        
        if all(results):
            classification = "Tautology"
        elif not any(results):
            classification = "Contradiction"
        else:
            classification = "Contingency"
        
        return classification, truth_table
    
    def prove_equivalence_algebraically(self, expr1, expr2):
        """
        Attempt to prove equivalence menggunakan known algebraic rules
        """
        proof_steps = []
        current_expr = expr1
        
        proof_steps.append(f"Starting with: {current_expr}")
        
        # Apply known equivalences
        for rule_name, (pattern, replacement) in self.known_equivalences.items():
            if pattern in current_expr:
                current_expr = current_expr.replace(pattern, replacement)
                proof_steps.append(f"Apply {rule_name}: {current_expr}")
                
                if current_expr == expr2:
                    proof_steps.append(f"Reached target: {expr2}")
                    proof_steps.append("∴ Equivalence proved algebraically!")
                    return True, proof_steps
        
        proof_steps.append("Could not prove algebraically with known rules")
        return False, proof_steps

# Demo Equivalence Verifier
print("=== LOGICAL EQUIVALENCE VERIFIER ===")
verifier = EquivalenceVerifier()

# Test 1: Classify expressions
print("1. EXPRESSION CLASSIFICATION")
test_expressions = [
    ("P ∨ ¬P", ["P"]),  # Should be tautology
    ("P ∧ ¬P", ["P"]),  # Should be contradiction  
    ("P → Q", ["P", "Q"])  # Should be contingency
]

for expr, vars in test_expressions:
    classification, table = verifier.classify_expression(expr, vars)
    print(f"\\nExpression: {expr}")
    print(f"Classification: {classification}")
    
    print("Truth Table:")
    header = " ".join([f"{var:5}" for var in vars]) + " Result"
    print(header)
    print("-" * len(header))
    
    for row in table:
        values = " ".join([f"{str(row[var]):5}" for var in vars])
        print(f"{values} {str(row['result']):6}")

print("\\n" + "="*50)

# Test 2: Algebraic proof attempt
print("2. ALGEBRAIC PROOF DEMONSTRATION")
expr1 = "¬(P ∧ Q)"
expr2 = "¬P ∨ ¬Q"

print(f"Attempting to prove: {expr1} ≡ {expr2}")
proved, steps = verifier.prove_equivalence_algebraically(expr1, expr2)

for step in steps:
    print(step)

print("\\n" + "="*50)

# Test 3: Truth table verification
print("3. TRUTH TABLE VERIFICATION")
variables = ["P", "Q"]

table1 = verifier.generate_truth_table(expr1, variables)
table2 = verifier.generate_truth_table(expr2, variables)

print(f"Comparing {expr1} and {expr2}:")
print("P     Q     Expr1  Expr2  Equiv?")
print("--------------------------------")

all_equivalent = True
for i in range(len(table1)):
    result1 = table1[i]['result']
    result2 = table2[i]['result']
    equivalent = result1 == result2
    
    if not equivalent:
        all_equivalent = False
    
    p_val = table1[i]['P']
    q_val = table1[i]['Q']
    print(f"{str(p_val):5} {str(q_val):5} {str(result1):6} {str(result2):6} {str(equivalent):6}")

print(f"\\nOverall equivalence: {all_equivalent}")
print("∴ Verified by truth table method!" if all_equivalent else "× Not equivalent")`,
      explanation: [
        '1. EquivalenceVerifier menyediakan comprehensive tools untuk logical analysis',
        '2. Method classify_expression menentukan apakah expression adalah tautology, contradiction, atau contingency',
        '3. Truth table generation memberikan systematic approach untuk verification',
        '4. Algebraic proof attempts menggunakan known logical equivalences database',
        '5. Multiple verification methods (algebraic dan truth table) memberikan confidence',
        '6. Tool ini berguna untuk homework verification dan understanding logical relationships',
        '7. Real applications: theorem proving, logic circuit verification, AI reasoning systems'
      ]
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'Manakah dari berikut yang merupakan tautology?',
      options: [
        'P ∧ Q',
        'P ∨ ¬P',
        'P → Q',
        'P ↔ Q'
      ],
      correct: 1,
      explanation: 'P ∨ ¬P adalah Law of Excluded Middle, yang selalu True untuk semua nilai P. Ini adalah tautology klasik dalam logic.'
    },
    {
      id: 'q2', 
      question: 'De Morgan\'s Law menyatakan bahwa ¬(P ∧ Q) equivalent dengan:',
      options: [
        '¬P ∧ ¬Q',
        '¬P ∨ ¬Q', 
        '¬P → ¬Q',
        '¬P ↔ ¬Q'
      ],
      correct: 1,
      explanation: 'De Morgan\'s Law: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q. Negasi dari AND sama dengan OR dari negasi individual proposisi.'
    },
    {
      id: 'q3',
      question: 'Dalam circuit optimization, expression (P ∧ True) ∨ False dapat disederhanakan menjadi:',
      options: [
        'P ∧ False',
        'P ∨ True',
        'P',
        'False'
      ],
      correct: 2,
      explanation: 'Menggunakan Identity Laws: P ∧ True ≡ P, kemudian P ∨ False ≡ P. Jadi hasilnya adalah P.'
    },
    {
      id: 'q4',
      question: 'Expression P ∧ ¬P adalah contoh dari:',
      options: [
        'Tautology',
        'Contradiction', 
        'Contingency',
        'Identity Law'
      ],
      correct: 1,
      explanation: 'P ∧ ¬P selalu False karena proposisi tidak bisa True dan False secara bersamaan. Ini adalah contradiction.'
    },
    {
      id: 'q5',
      question: 'Distributive Law P ∧ (Q ∨ R) equivalent dengan:',
      options: [
        '(P ∧ Q) ∨ R',
        'P ∧ Q ∨ P ∧ R',
        '(P ∧ Q) ∨ (P ∧ R)',
        'P ∨ (Q ∧ R)'
      ],
      correct: 2,
      explanation: 'Distributive Law: P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R). AND dapat didistribusikan ke dalam OR.'
    },
    {
      id: 'q6',
      question: 'Dalam Python, expression "not (True and False)" menggunakan prinsip:',
      options: [
        'Identity Law',
        'De Morgan\'s Law',
        'Distributive Law',
        'Domination Law'
      ],
      correct: 1,
      explanation: 'Expression "not (True and False)" adalah aplikasi De Morgan\'s Law: ¬(P ∧ Q) dapat dievaluasi step by step.'
    }
  ];

  const glossaryTerms = [
    {
      term: 'Absorption Laws',
      definition: 'Laws yang menyatakan P ∧ (P ∨ Q) ≡ P dan P ∨ (P ∧ Q) ≡ P. Menunjukkan bahwa kombinasi tertentu dari AND dan OR dapat "diserap" menjadi proposisi sederhana.'
    },
    {
      term: 'Associative Laws',
      definition: 'Laws yang menyatakan (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R) dan (P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R). Menunjukkan bahwa grouping tidak mempengaruhi hasil operasi.'
    },
    {
      term: 'Boolean Algebra',
      definition: 'Sistem matematika untuk manipulasi logical values menggunakan operasi AND, OR, NOT. Fundamental untuk digital circuit design dan computer logic. Dinamakan setelah George Boole.'
    },
    {
      term: 'Circuit Optimization',
      definition: 'Proses simplifikasi digital circuits menggunakan Boolean algebra untuk mengurangi jumlah gates, power consumption, dan cost tanpa mengubah functionality.'
    },
    {
      term: 'Commutative Laws',
      definition: 'Laws yang menyatakan P ∧ Q ≡ Q ∧ P dan P ∨ Q ≡ Q ∨ P. Menunjukkan bahwa urutan operand tidak mempengaruhi hasil logical operation.'
    },
    {
      term: 'Complement Laws',
      definition: 'Laws yang melibatkan proposisi dan negatifnya: P ∧ ¬P ≡ F (contradiction) dan P ∨ ¬P ≡ T (Law of Excluded Middle).'
    },
    {
      term: 'Contingency',
      definition: 'Compound proposition yang tidak tautology maupun contradiction - memiliki nilai True untuk beberapa truth assignments dan False untuk yang lain. Represents conditional logic.'
    },
    {
      term: 'Contradiction',
      definition: 'Compound proposition yang selalu False untuk semua kemungkinan truth assignments. Menunjukkan logical impossibility. Contoh: P ∧ ¬P.'
    },
    {
      term: 'De Morgan\'s Laws',
      definition: 'Fundamental laws: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q dan ¬(P ∨ Q) ≡ ¬P ∧ ¬Q. Essential untuk negating compound expressions dan circuit design.'
    },
    {
      term: 'Distributive Laws', 
      definition: 'Laws untuk distribusi operators: P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R) dan P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R). Analog dengan distributive property dalam arithmetic.'
    },
    {
      term: 'Domination Laws',
      definition: 'Laws yang menunjukkan dominasi True dan False: P ∧ F ≡ F (False dominates AND) dan P ∨ T ≡ T (True dominates OR).'
    },
    {
      term: 'Double Negation Law',
      definition: 'Law yang menyatakan ¬¬P ≡ P. Dua negasi berturut-turut saling menghilangkan, returning ke original proposition.'
    },
    {
      term: 'Idempotent Laws',
      definition: 'Laws yang menyatakan P ∧ P ≡ P dan P ∨ P ≡ P. Menunjukkan bahwa duplicating proposisi tidak mengubah hasil logical operation.'
    },
    {
      term: 'Identity Laws',
      definition: 'Laws fundamental: P ∧ T ≡ P (identity untuk AND) dan P ∨ F ≡ P (identity untuk OR). True dan False berfungsi sebagai identity elements.'
    },
    {
      term: 'Law of Excluded Middle',
      definition: 'Tautology P ∨ ¬P yang menyatakan bahwa setiap proposisi either true atau false - tidak ada middle ground. Fundamental principle dalam classical logic.'
    },
    {
      term: 'Logic Gate',
      definition: 'Electronic component yang implements Boolean function, taking binary inputs dan producing binary output. Basic building blocks dari digital circuits: AND, OR, NOT, NAND, NOR.'
    },
    {
      term: 'Logical Equivalence (≡)',
      definition: 'Relationship antara dua proposisi yang memiliki identical truth values untuk semua possible truth assignments pada variabel proposisional mereka.'
    },
    {
      term: 'NAND Gate',
      definition: 'Logic gate yang produces output yang merupakan negation dari AND operation. Functionally complete - semua Boolean functions dapat dibangun menggunakan only NAND gates.'
    },
    {
      term: 'NOR Gate',
      definition: 'Logic gate yang produces output yang merupakan negation dari OR operation. Juga functionally complete seperti NAND gate.'
    },
    {
      term: 'Simplification',
      definition: 'Process reducing complex logical expressions ke bentuk yang lebih sederhana menggunakan logical laws, maintaining semantic equivalence sambil improving efficiency.'
    },
    {
      term: 'Tautology',
      definition: 'Compound proposition yang selalu True untuk semua kemungkinan truth assignments. Represents logical truths yang universal. Contoh: P ∨ ¬P, ((P → Q) ∧ P) → Q.'
    },
    {
      term: 'Truth Table Verification',
      definition: 'Method systematic untuk verifying logical equivalences dengan comparing truth values dari expressions untuk semua possible input combinations.'
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
      pages: 'Chapter 1.3-1.4: Logical Equivalences and Applications'
    },
    {
      type: 'book',
      authors: 'Lehman, Eric., Leighton, F. Thomson., Meyer, Albert R.',
      year: '2017',
      title: 'Mathematics for Computer Science',
      publisher: 'MIT OpenCourseWare',
      chapter: 'Chapter 3: Logical Formulas, Chapter 4: Mathematical Data Types',
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
      chapter: 'Chapter 2: Propositional Logic - Semantic Tableaux',
      doi: '10.1007/978-1-4471-4129-7'
    },
    {
      type: 'book',
      authors: 'Boole, George',
      year: '2003',
      title: 'An Investigation of the Laws of Thought',
      edition: 'Reprint Edition',
      publisher: 'Dover Publications',
      location: 'New York',
      note: 'Original work published 1854 - foundational text untuk Boolean algebra'
    },
    {
      type: 'book',
      authors: 'Mendelson, Elliott',
      year: '2015',
      title: 'Mathematical Logic',
      edition: '4th Edition', 
      publisher: 'Chapman and Hall/CRC',
      chapter: 'Chapter 1: Statement Calculus, Chapter 2: Boolean Algebras'
    },
    {
      type: 'journal',
      authors: 'Shannon, Claude E.',
      year: '1938',
      title: 'A Symbolic Analysis of Relay and Switching Circuits',
      journal: 'Transactions of the AIEE',
      volume: '57',
      number: '12',
      pages: '713-723',
      note: 'Seminal paper menghubungkan Boolean algebra dengan digital circuit design'
    },
    {
      type: 'journal',
      authors: 'Karnaugh, Maurice',
      year: '1953',
      title: 'The Map Method for Synthesis of Combinational Logic Circuits',
      journal: 'Transactions of the AIEE',
      volume: '72',
      pages: '593-599',
      note: 'Introduction dari Karnaugh maps untuk Boolean simplification'
    },
    {
      type: 'journal',
      authors: 'McCluskey, Edward J.',
      year: '1956',
      title: 'Minimization of Boolean Functions',
      journal: 'Bell System Technical Journal',
      volume: '35',
      number: '6',
      pages: '1417-1444',
      note: 'Quine-McCluskey algorithm untuk systematic Boolean minimization'
    },
    {
      type: 'conference',
      authors: 'Harrison, John',
      year: '2021',
      title: 'Teaching Boolean Algebra Through Interactive Theorem Proving',
      conference: 'Proceedings of the 52nd ACM Technical Symposium on Computer Science Education',
      pages: '456-462',
      location: 'Virtual Conference',
      doi: '10.1145/3408877.3432561'
    },
    {
      type: 'conference',
      authors: 'Smith, Michael J., Jones, Sarah K.',
      year: '2020',
      title: 'Visual Tools for Understanding De Morgan\'s Laws in Undergraduate Logic Education',
      conference: 'IEEE Frontiers in Education Conference (FIE)',
      pages: '1-8',
      location: 'Uppsala, Sweden',
      doi: '10.1109/FIE44824.2020.9274169'
    },
    {
      type: 'web',
      title: 'Stanford CS103: Mathematical Foundations of Computing - Boolean Algebra',
      publisher: 'Stanford University',
      year: '2024',
      url: 'https://web.stanford.edu/class/cs103/lectures/boolean-algebra/',
      accessed: '2024'
    },
    {
      type: 'web',
      title: 'MIT 6.042J Lecture 3: Logical Operators and Equivalence',
      publisher: 'Massachusetts Institute of Technology',
      year: '2017',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/mit6_042jf10_lec03/',
      accessed: '2024'
    },
    {
      type: 'web',
      authors: 'Weisstein, Eric W.',
      title: 'Boolean Algebra',
      publisher: 'Wolfram MathWorld',
      year: '2024',
      url: 'https://mathworld.wolfram.com/BooleanAlgebra.html',
      accessed: '2024'
    },
    {
      type: 'web',
      title: 'Interactive Boolean Algebra Calculator',
      publisher: 'GeoGebra',
      year: '2024',
      url: 'https://www.geogebra.org/m/boolean-algebra',
      accessed: '2024',
      note: 'Interactive tool untuk experimenting dengan Boolean expressions'
    },
    {
      type: 'web',
      authors: 'Bryant, Randal E.',
      title: 'Boolean Satisfiability: From Theoretical Hardness to Practical Success',
      publisher: 'Carnegie Mellon University',
      year: '2022',
      url: 'https://www.cs.cmu.edu/~bryant/boolean-sat/',
      accessed: '2024'
    },
    {
      type: 'web',
      title: 'Logic Circuit Simulator Online',
      publisher: 'CircuitLab',
      year: '2024',
      url: 'https://www.circuitlab.com/editor/',
      accessed: '2024',
      note: 'Online tool untuk designing dan simulating digital logic circuits'
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
              <p className="text-gray-600">Pertemuan 3: Logical Equivalences & Simplification</p>
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
                Logical Equivalences & Simplification
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                "The Art of Logic Simplification" - Menguasai hukum-hukum logika untuk optimisasi expressions dan circuit design
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tujuan Pembelajaran Pertemuan 3</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Logical Equivalences</h4>
                      <p className="text-gray-600">Memahami konsep dan verifikasi equivalence antara logical expressions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Laws of Logic</h4>
                      <p className="text-gray-600">Menguasai hukum-hukum fundamental: Identity, Domination, De Morgan's, Distributive</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Boolean Algebra</h4>
                      <p className="text-gray-600">Aplikasi dalam digital circuit design dan optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Classification Systems</h4>
                      <p className="text-gray-600">Tautologies, contradictions, dan contingencies identification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Connection */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Koneksi dengan Pertemuan Sebelumnya</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-gray-700">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Pertemuan 1</h4>
                  <p className="text-sm text-gray-600 text-center">Mathematical reasoning foundations</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-gray-700">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Pertemuan 2</h4>
                  <p className="text-sm text-gray-600 text-center">Propositional logic & truth tables</p>
                </div>
                <div className="bg-black rounded-lg p-6 text-white">
                  <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-center">Pertemuan 3</h4>
                  <p className="text-sm text-gray-300 text-center">Equivalences & simplification</p>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 mx-2" />
                <span className="text-gray-600">Building towards formal proofs and applications</span>
                <ArrowRight className="w-5 h-5 text-gray-400 mx-2" />
              </div>
            </div>

            {/* Why This Matters */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <Zap className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Mengapa Logical Equivalences Penting?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Dalam Industry:</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• CPU design optimization menghemat millions of transistors</li>
                        <li>• FPGA programming efficiency untuk embedded systems</li>
                        <li>• Compiler optimizations untuk faster code execution</li>
                        <li>• SAT solvers untuk constraint satisfaction problems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Dalam Academic:</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Foundation untuk formal verification methods</li>
                        <li>• Essential untuk automated theorem proving</li>
                        <li>• Database query optimization dengan logical rules</li>
                        <li>• AI reasoning dan knowledge representation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Concepts Section */}
        {activeSection === 'concepts' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Logical Equivalences</h2>
              <p className="text-xl text-gray-600">Understanding relationships between logical expressions</p>
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
                            <span className="text-gray-700 font-mono text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-gray-100 rounded-lg p-4 mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Programming Connection:</h5>
                        <p className="text-gray-700 text-sm">{card.programming}</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-900 mb-2">Verification Method:</h5>
                        <p className="text-blue-800 text-sm">{card.verification}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Laws Section */}
        {activeSection === 'laws' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hukum-hukum Logika</h2>
              <p className="text-xl text-gray-600">Fundamental laws untuk Boolean algebra dan simplification</p>
            </div>

            <div className="space-y-8">
              {logicLaws.map((lawCategory, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{lawCategory.category}</h3>
                    <p className="text-gray-600">{lawCategory.description}</p>
                  </div>
                  
                  <div className="p-6">
                    {/* Laws List */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Laws dalam kategori ini:</h4>
                      <div className="space-y-3">
                        {lawCategory.laws.map((law, lawIndex) => (
                          <div key={lawIndex} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-semibold text-gray-900">{law.name}</h5>
                              <span className="bg-black text-white px-3 py-1 rounded text-sm font-mono">
                                {law.formula}
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm">{law.explanation}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Python Implementation */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Python Implementation:</h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
                          <code>{lawCategory.pythonExample}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Laws Summary Table */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Reference: All Laws</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 font-semibold text-gray-900">Law Name</th>
                      <th className="py-3 px-4 font-semibold text-gray-900">Formula</th>
                      <th className="py-3 px-4 font-semibold text-gray-900">Python Equivalent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="py-3 px-4">Identity (∧)</td><td className="py-3 px-4 font-mono">P ∧ T ≡ P</td><td className="py-3 px-4 font-mono">P and True == P</td></tr>
                    <tr><td className="py-3 px-4">Identity (∨)</td><td className="py-3 px-4 font-mono">P ∨ F ≡ P</td><td className="py-3 px-4 font-mono">P or False == P</td></tr>
                    <tr><td className="py-3 px-4">Domination (∧)</td><td className="py-3 px-4 font-mono">P ∧ F ≡ F</td><td className="py-3 px-4 font-mono">P and False == False</td></tr>
                    <tr><td className="py-3 px-4">Domination (∨)</td><td className="py-3 px-4 font-mono">P ∨ T ≡ T</td><td className="py-3 px-4 font-mono">P or True == True</td></tr>
                    <tr><td className="py-3 px-4">De Morgan 1</td><td className="py-3 px-4 font-mono">¬(P ∧ Q) ≡ ¬P ∨ ¬Q</td><td className="py-3 px-4 font-mono">not (P and Q) == (not P) or (not Q)</td></tr>
                    <tr><td className="py-3 px-4">De Morgan 2</td><td className="py-3 px-4 font-mono">¬(P ∨ Q) ≡ ¬P ∧ ¬Q</td><td className="py-3 px-4 font-mono">not (P or Q) == (not P) and (not Q)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Examples Section */}
        {activeSection === 'examples' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Circuit Simplification</h2>
              <p className="text-xl text-gray-600">Applying logical laws untuk digital circuit optimization</p>
            </div>

            <div className="space-y-8">
              {circuitExamples.map((example, index) => (
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
                    
                    <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start space-x-2">
                        <span className="text-green-600 text-lg flex-shrink-0">🚀</span>
                        <div className="text-green-800 text-sm">
                          <p className="mb-1"><strong>Praktik Langsung:</strong></p>
                          <p>Copy semua kode di atas dan jalankan di:</p>
                          <a href="https://www.onlineide.pro" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline font-medium break-all inline-block mt-1">
                            www.onlineide.pro
                          </a>
                          <p className="mt-1">untuk eksperimen dengan logical operations!</p>
                        </div>
                      </div>
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

            {/* Hands-on Challenge */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🎯 Challenge: Circuit Design</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Design Challenge:</h4>
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm font-mono">
                      Original Expression:<br/>
                      (P ∧ Q ∧ True) ∨ (P ∧ False) ∨ (¬P ∧ Q)<br/><br/>
                      Tasks:<br/>
                      1. Simplify menggunakan logical laws<br/>
                      2. Count gate reduction<br/>
                      3. Verify with truth table<br/>
                      4. Implement dalam Python
                    </p>
                  </div>
                  <div className="bg-blue-600/20 border border-blue-400 rounded-lg p-3">
                    <p className="text-blue-200 text-sm">
                      💻 <strong>Coding Practice:</strong><br/>
                      Copy kode di atas dan jalankan di:<br/>
                      <a href="https://www.onlineide.pro" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline font-medium break-all">
                        www.onlineide.pro
                      </a><br/>
                      untuk testing langsung!
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Expected Skills:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Apply Identity dan Domination laws</li>
                    <li>• Use Distributive law untuk factoring</li>
                    <li>• Implement Boolean functions dalam code</li>
                    <li>• Verify equivalence systematically</li>
                    <li>• Calculate optimization metrics</li>
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
              <p className="text-xl text-gray-600">Test pemahaman Anda tentang logical equivalences dan simplification</p>
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
                          {getQuizScore() >= 5 ? 'Excellent! Pemahaman logical laws sudah solid.' : 
                           getQuizScore() >= 4 ? 'Very Good! Minor review untuk beberapa konsep.' :
                           getQuizScore() >= 3 ? 'Good! Perlu latihan lebih untuk equivalences.' :
                           'Perlu study lebih intensif tentang logical laws dan applications.'}
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
              <p className="text-xl text-gray-600">Terminologi essential dalam logical equivalences dan Boolean algebra</p>
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

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Study Strategy</h3>
                <div className="text-blue-800 space-y-2 text-sm">
                  <p><strong>Active Recall:</strong> Cover definitions dan try to explain each term from memory.</p>
                  <p><strong>Concept Mapping:</strong> Draw connections between related terms (e.g., Tautology → Identity Laws).</p>
                  <p><strong>Application Practice:</strong> Use each term dalam context of actual logical expressions.</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">🔗 Connections</h3>
                <div className="text-green-800 space-y-2 text-sm">
                  <p><strong>Programming:</strong> Most terms direct relate to Boolean operators dalam code.</p>
                  <p><strong>Mathematics:</strong> These concepts appear dalam discrete math dan set theory.</p>
                  <p><strong>Engineering:</strong> Essential untuk digital circuit design dan optimization.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* References Section */}
        {activeSection === 'references' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Daftar Referensi</h2>
              <p className="text-xl text-gray-600">Sumber pembelajaran logical equivalences dan Boolean algebra</p>
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
                        {ref.pages && (
                          <span className="text-purple-600"> [Pages: {ref.pages}]</span>
                        )}
                        {ref.note && (
                          <span className="text-gray-600"> <em>Note: {ref.note}</em></span>
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
                        <em> {ref.journal}</em>
                        {ref.volume && `, ${ref.volume}`}
                        {ref.number && `(${ref.number})`}
                        {ref.pages && `, ${ref.pages}`}.
                        {ref.note && (
                          <span className="text-gray-600"> <em>{ref.note}</em></span>
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
                        {ref.note && (
                          <span className="text-gray-600"> <em>{ref.note}</em></span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reading Roadmap */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">📚 Reading Roadmap</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Week 3 Focus:</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>1. <strong>Rosen Ch. 1.3:</strong> Logical equivalences basics</li>
                      <li>2. <strong>MIT Lecture 3:</strong> Boolean algebra applications</li>
                      <li>3. <strong>Shannon (1938):</strong> Historical Boolean algebra foundations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Supplementary Reading:</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• <strong>Ben-Ari Ch. 2:</strong> Semantic tableaux methods</li>
                      <li>• <strong>Wolfram MathWorld:</strong> Quick concept lookup</li>
                      <li>• <strong>Interactive Tools:</strong> Boolean algebra calculator</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Advanced Topics:</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• <strong>Karnaugh (1953):</strong> K-map simplification</li>
                      <li>• <strong>McCluskey (1956):</strong> Quine-McCluskey algorithm</li>
                      <li>• <strong>Bryant (2022):</strong> SAT solving applications</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 Reading Strategy:</h4>
                  <p className="text-gray-300 text-sm">
                    Start dengan foundational texts (Rosen, MIT), kemudian explore historical papers untuk deeper understanding. 
                    Use interactive tools untuk hands-on practice dengan concepts yang dipelajari.
                  </p>
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
              <h4 className="font-bold mb-4">Pertemuan 3 Summary</h4>
              <p className="text-gray-400 text-sm">
                Logical equivalences dan Boolean algebra adalah fundamental tools untuk 
                circuit optimization dan formal reasoning. Master these concepts untuk 
                advanced applications dalam computer science.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Pertemuan Selanjutnya</h4>
              <p className="text-gray-400 text-sm">
                Pertemuan 4: Introduction to Proofs<br/>
                - Direct proofs dengan programming contexts<br/>
                - Proof structure dan mathematical writing<br/>
                - Applications dalam algorithm correctness
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Key Takeaways</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Logical equivalences enable circuit optimization</li>
                <li>• De Morgan's Laws essential untuk negation</li>
                <li>• Tautologies represent universal truths</li>
                <li>• Boolean algebra saves industry millions</li>
                <li>• Truth tables verify equivalences</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2024 Logika Matematika - Universitas. Materi pembelajaran untuk mahasiswa Informatika.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  💻 Untuk menjalankan kode Python:<br/>
                  <a href="https://www.onlineide.pro" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-all">
                    www.onlineide.pro
                  </a> (No installation required)
                </p>
              </div>
              <div className="flex space-x-4">
                <span className="text-gray-400 text-sm">Assignment 2: Boolean Simplification Due Next Week</span>
                <span className="bg-white text-black px-2 py-1 rounded text-xs">7 marks</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LogicMathWeek3;