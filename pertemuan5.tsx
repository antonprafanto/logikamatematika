import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, Book, Code, Brain, CheckCircle, Circle, ArrowRight, AlertCircle, Zap, Target, FileText, Lightbulb } from 'lucide-react';

const LogicMathWeek5 = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedCard, setExpandedCard] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  const sections = [
    { id: 'overview', title: 'Gambaran Umum', icon: <Book className="w-5 h-5" /> },
    { id: 'contradiction', title: 'Proof by Contradiction', icon: <Target className="w-5 h-5" /> },
    { id: 'contrapositive', title: 'Contrapositive Proofs', icon: <Brain className="w-5 h-5" /> },
    { id: 'examples', title: 'CS Applications', icon: <Code className="w-5 h-5" /> },
    { id: 'quiz', title: 'Latihan Soal', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'glossary', title: 'Glosarium', icon: <Book className="w-5 h-5" /> },
    { id: 'references', title: 'Referensi', icon: <Circle className="w-5 h-5" /> }
  ];

  const contradictionConcepts = [
    {
      id: 'contradiction-basics',
      title: 'Proof by Contradiction Fundamentals',
      subtitle: 'Reductio ad Absurdum - Pembuktian dengan Kontradiksi',
      content: 'Proof by contradiction adalah teknik pembuktian di mana kita mengasumsikan negasi dari apa yang ingin dibuktikan, kemudian menunjukkan bahwa asumsi tersebut mengarah ke kontradiksi logis. Karena kontradiksi tidak mungkin benar, maka asumsi awal harus salah, sehingga statement original harus benar.',
      steps: [
        'Assume ¬P (negasi dari proposisi yang ingin dibuktikan)',
        'Derive logical consequences dari assumption ini',
        'Show bahwa consequences mengarah ke contradiction Q ∧ ¬Q',
        'Conclude bahwa assumption ¬P harus False',
        'Therefore P must be True (by Law of Excluded Middle)'
      ],
      examples: [
        'Prove √2 is irrational',
        'Prove there are infinitely many prime numbers',
        'Prove impossibility of certain algorithms',
        'Show uniqueness dalam mathematical structures'
      ],
      csApplications: 'Fundamental untuk proving algorithm termination, showing impossibility results, dan verifying system properties.'
    },
    {
      id: 'contradiction-strategy',
      title: 'Strategic Approach to Contradiction',
      subtitle: 'Kapan dan Bagaimana Menggunakan Teknik Ini',
      content: 'Proof by contradiction sangat powerful ketika direct proof sulit dilakukan. Teknik ini especially useful untuk proving negative statements (something does not exist), uniqueness claims, dan impossibility results. Key insight adalah mencari contradiction yang inevitable dari false assumption.',
      steps: [
        'Identify when contradiction is appropriate method',
        'Clearly state the assumption (usually negation)',
        'Work systematically towards finding contradiction',
        'Use known facts dan previously proven results',
        'Recognize common contradiction patterns'
      ],
      examples: [
        'Non-existence proofs ("There is no largest prime")',
        'Uniqueness proofs ("The solution is unique")',
        'Impossibility results ("This algorithm cannot exist")',
        'Irrationality proofs (√2, √3, etc.)'
      ],
      csApplications: 'Critical untuk theoretical computer science: proving lower bounds, impossibility results, dan algorithm analysis.'
    }
  ];

  const contrapositiveConcepts = [
    {
      id: 'contrapositive-basics',
      title: 'Contrapositive Proof Technique',
      subtitle: 'Proving P → Q by Proving ¬Q → ¬P',
      content: 'Contrapositive proof technique memanfaatkan logical equivalence antara conditional statement dan contrapositive-nya. Instead of proving P → Q directly, kita prove ¬Q → ¬P, yang logically equivalent tetapi often easier to demonstrate.',
      steps: [
        'Given: Need to prove P → Q',
        'Identify contrapositive: ¬Q → ¬P',
        'Assume ¬Q (negation of consequent)',
        'Show that ¬P must follow (negation of antecedent)',
        'Conclude P → Q is true by logical equivalence'
      ],
      examples: [
        'If n² is even, then n is even',
        'If a program terminates, then it has finite execution steps',
        'If a graph is connected, then there exists path between any two vertices',
        'If a function is continuous, then it satisfies certain properties'
      ],
      csApplications: 'Widely used dalam algorithm correctness proofs, program verification, dan complexity analysis.'
    },
    {
      id: 'contrapositive-strategy',
      title: 'When to Use Contrapositive',
      subtitle: 'Strategic Decision Making dalam Proof Construction',
      content: 'Contrapositive proofs are particularly useful when the negation of the conclusion provides more concrete information to work with than the original hypothesis. This often happens when the conclusion involves negative statements atau existence claims.',
      steps: [
        'Analyze original statement P → Q structure',
        'Check if ¬Q provides more actionable information',
        'Consider whether ¬P is easier to derive than Q',
        'Look for cases where ¬Q leads to specific constraints',
        'Apply contrapositive when direct proof seems difficult'
      ],
      examples: [
        'Instead of proving positivity, assume non-positivity',
        'Instead of proving existence, assume non-existence',
        'Instead of proving properties hold, assume they fail',
        'Instead of proving convergence, assume divergence'
      ],
      csApplications: 'Essential untuk software verification, proving algorithm properties, dan system analysis.'
    }
  ];

  const csExamples = [
    {
      title: 'Algorithm Termination Proof',
      description: 'Proving algorithm termination using contradiction technique',
      mathematicalConcept: 'Proof by Contradiction untuk Algorithm Analysis',
      code: `def euclidean_gcd(a, b):
    """
    Euclidean Algorithm untuk finding Greatest Common Divisor
    Kita akan prove bahwa algorithm ini selalu terminates
    """
    print(f"Computing GCD({a}, {b})")
    
    # Track steps untuk analysis
    steps = 0
    original_a, original_b = a, b
    
    while b != 0:
        steps += 1
        print(f"Step {steps}: GCD({a}, {b})")
        
        # Algorithm core: replace (a,b) with (b, a mod b)
        remainder = a % b
        a, b = b, remainder
        
        print(f"  -> a mod b = {a} mod {b} = {remainder}")
        print(f"  -> New pair: ({a}, {b})")
        
        # Safety check untuk demonstration (tidak perlu dalam real implementation)
        if steps > 100:  # Arbitrary large number
            print("ERROR: Algorithm might not terminate!")
            break
    
    print(f"\\nFinal result: GCD({original_a}, {original_b}) = {a}")
    print(f"Algorithm terminated in {steps} steps")
    return a

class TerminationProof:
    """
    Class untuk demonstrating termination proof techniques
    """
    
    def __init__(self):
        self.proof_steps = []
    
    def prove_euclidean_termination(self):
        """
        Proof by Contradiction: Euclidean Algorithm Always Terminates
        
        Theorem: For any positive integers a, b, the Euclidean algorithm terminates.
        
        Proof Strategy: Assume algorithm doesn't terminate, derive contradiction.
        """
        
        proof = '''
        THEOREM: Euclidean Algorithm Always Terminates
        
        PROOF BY CONTRADICTION:
        
        1. ASSUMPTION (for contradiction):
           Assume there exist positive integers a, b such that 
           the Euclidean algorithm does not terminate.
        
        2. ANALYSIS OF ALGORITHM:
           - At each step: (a, b) → (b, a mod b)
           - Since a mod b < b (property of modulo operation)
           - The second element of pair strictly decreases each step
        
        3. SEQUENCE ANALYSIS:
           - Let sequence be: b₀ = b, b₁ = a mod b, b₂ = b₁ mod b₀, ...
           - We have: b > b₁ > b₂ > b₃ > ... ≥ 0
           - This is strictly decreasing sequence of non-negative integers
        
        4. WELL-ORDERING PRINCIPLE:
           - Any non-empty set of non-negative integers has smallest element
           - Sequence cannot decrease indefinitely
           - Must reach minimum value (which is 0)
        
        5. CONTRADICTION:
           - Sequence must terminate when bₖ = 0 for some finite k
           - This contradicts assumption that algorithm doesn't terminate
        
        6. CONCLUSION:
           - Our assumption must be false
           - Therefore: Euclidean algorithm always terminates ∎
        '''
        
        return proof
    
    def demonstrate_termination_bound(self, a, b):
        """
        Demonstrate upper bound on number of steps untuk termination
        """
        if a < b:
            a, b = b, a  # Ensure a ≥ b
        
        # Theoretical bound: steps ≤ 5 * log₁₀(b)
        import math
        theoretical_bound = int(5 * math.log10(max(b, 1))) + 1
        
        print(f"\\nTERMINATION ANALYSIS FOR GCD({a}, {b})")
        print("=" * 50)
        print(f"Theoretical upper bound: {theoretical_bound} steps")
        print("(Based on: steps ≤ 5 * log₁₀(smaller_number))")
        
        # Actually run algorithm dan count steps
        actual_steps = 0
        temp_a, temp_b = a, b
        
        while temp_b != 0:
            actual_steps += 1
            temp_a, temp_b = temp_b, temp_a % temp_b
        
        print(f"Actual steps taken: {actual_steps}")
        print(f"Bound satisfied: {actual_steps <= theoretical_bound}")
        
        return actual_steps, theoretical_bound

# Demonstrate termination proof
print("=" * 60)
print("ALGORITHM TERMINATION PROOF DEMONSTRATION")
print("=" * 60)

# Example 1: Small numbers
print("\\nExample 1: Small Numbers")
result1 = euclidean_gcd(48, 18)

# Example 2: Larger numbers  
print("\\n" + "="*40)
print("Example 2: Larger Numbers")
result2 = euclidean_gcd(1071, 462)

# Termination analysis
print("\\n" + "="*40)
print("TERMINATION BOUND ANALYSIS")
prover = TerminationProof()

# Show termination bounds
prover.demonstrate_termination_bound(48, 18)
prover.demonstrate_termination_bound(1071, 462)

# Display formal proof
print("\\n" + "="*40)
print("FORMAL TERMINATION PROOF")
print("="*40)
formal_proof = prover.prove_euclidean_termination()
print(formal_proof)`,
      explanation: [
        '1. **Algorithm Structure**: Euclidean algorithm repeatedly applies transformation (a,b) → (b, a mod b)',
        '2. **Contradiction Setup**: Assume algorithm doesn\'t terminate untuk some input, creating infinite sequence',
        '3. **Sequence Analysis**: Each step creates strictly decreasing sequence of non-negative integers',
        '4. **Well-Ordering Principle**: Any decreasing sequence of non-negative integers must terminate',
        '5. **Contradiction Derivation**: Infinite sequence contradicts well-ordering principle',
        '6. **Conclusion**: Original assumption false, therefore algorithm always terminates',
        '7. **Practical Bounds**: We also demonstrate actual termination bounds untuk real inputs'
      ]
    },
    {
      title: 'Contrapositive in Software Verification',
      description: 'Using contrapositive proof untuk program correctness',
      mathematicalConcept: 'Contrapositive Proof dalam Program Verification',
      code: `class SoftwareVerification:
    """
    Demonstration of contrapositive proof techniques dalam software verification
    """
    
    def __init__(self):
        self.verification_results = []
    
    def verify_binary_search_correctness(self):
        """
        THEOREM: If binary search returns index i, then arr[i] == target
        
        Instead of proving directly, we prove contrapositive:
        If arr[i] != target, then binary search would not return index i
        """
        
        proof = '''
        BINARY SEARCH CORRECTNESS PROOF (Contrapositive)
        
        Original Statement (P → Q):
        "If binary_search(arr, target) returns index i, then arr[i] == target"
        
        Contrapositive (¬Q → ¬P):
        "If arr[i] != target, then binary_search(arr, target) != i"
        
        PROOF OF CONTRAPOSITIVE:
        
        1. ASSUMPTION: arr[i] != target (negation of conclusion)
        
        2. BINARY SEARCH ALGORITHM ANALYSIS:
           - Algorithm maintains invariant: if target exists, it's in [left, right]
           - At each step: compare target with arr[mid]
           - If target < arr[mid]: search left half
           - If target > arr[mid]: search right half
           - If target == arr[mid]: return mid
        
        3. CASE ANALYSIS:
           Case 1: arr[i] < target
           - When algorithm reaches position i as mid
           - Since arr[i] < target, algorithm searches right half
           - Position i is excluded from further search
           - Algorithm cannot return i
           
           Case 2: arr[i] > target  
           - When algorithm reaches position i as mid
           - Since arr[i] > target, algorithm searches left half
           - Position i is excluded from further search
           - Algorithm cannot return i
        
        4. CONCLUSION:
           - In both cases, if arr[i] != target, algorithm cannot return i
           - This proves contrapositive ¬Q → ¬P
           - By logical equivalence, original statement P → Q is true ∎
        '''
        
        return proof
    
    def binary_search_with_verification(self, arr, target):
        """
        Binary search implementation with step-by-step verification
        """
        print(f"\\nBINARY SEARCH VERIFICATION: Finding {target} in {arr}")
        print("=" * 60)
        
        left, right = 0, len(arr) - 1
        step = 1
        
        while left <= right:
            mid = (left + right) // 2
            mid_value = arr[mid]
            
            print(f"Step {step}: Searching in range [{left}, {right}]")
            print(f"  Mid index: {mid}, Mid value: {mid_value}")
            
            if mid_value == target:
                print(f"  ✓ FOUND: arr[{mid}] == {target}")
                print(f"\\nVERIFICATION: Returned index {mid}, arr[{mid}] = {mid_value} == {target} ✓")
                return mid
            elif mid_value < target:
                print(f"  → {mid_value} < {target}, search right half")
                left = mid + 1
            else:
                print(f"  → {mid_value} > {target}, search left half")
                right = mid - 1
            
            step += 1
        
        print(f"  ✗ NOT FOUND: {target} not in array")
        print(f"\\nVERIFICATION: Returned -1, {target} not found in array ✓")
        return -1
    
    def prove_impossibility_result(self):
        """
        Example of impossibility proof using contradiction:
        Proving that certain problems cannot be solved efficiently
        """
        
        proof = '''
        IMPOSSIBILITY RESULT: Comparison-Based Sorting Lower Bound
        
        THEOREM: Any comparison-based sorting algorithm requires Ω(n log n) comparisons
        
        PROOF BY CONTRADICTION:
        
        1. ASSUMPTION (for contradiction):
           Assume there exists comparison-based sorting algorithm A that
           sorts n elements in o(n log n) comparisons (asymptotically fewer).
        
        2. DECISION TREE ANALYSIS:
           - Any comparison-based algorithm can be represented as decision tree
           - Each internal node: comparison between two elements
           - Each leaf: one of the n! possible permutations (sorted orders)
        
        3. INFORMATION THEORY ARGUMENT:
           - Decision tree must have at least n! leaves (one for each permutation)
           - Tree with n! leaves requires at least ⌈log₂(n!)⌉ depth
           - By Stirling's approximation: log₂(n!) ∈ Θ(n log n)
        
        4. CONTRADICTION:
           - Algorithm A uses o(n log n) comparisons → tree depth o(n log n)
           - But tree needs depth Ω(n log n) to distinguish n! permutations
           - This is contradiction: o(n log n) < Ω(n log n)
        
        5. CONCLUSION:
           - Assumption must be false
           - Therefore: Any comparison-based sorting needs Ω(n log n) comparisons ∎
        '''
        
        return proof

# Demonstrate contrapositive proof in practice
print("CONTRAPOSITIVE PROOF DEMONSTRATION")
print("=" * 50)

verifier = SoftwareVerification()

# Show binary search correctness proof
proof = verifier.verify_binary_search_correctness()
print(proof)

# Demonstrate dengan actual implementation
test_array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

print("\\n" + "="*50)
print("PRACTICAL VERIFICATION EXAMPLES")
print("="*50)

# Test successful search
verifier.binary_search_with_verification(test_array, 7)

# Test unsuccessful search  
verifier.binary_search_with_verification(test_array, 8)

# Show impossibility result
print("\\n" + "="*50)
print("IMPOSSIBILITY RESULT DEMONSTRATION")
print("="*50)

impossibility_proof = verifier.prove_impossibility_result()
print(impossibility_proof)

# Practical implication
print("\\nPRACTICAL IMPLICATIONS:")
print("- This proof explains why quicksort, mergesort have O(n log n) complexity")
print("- No comparison-based sorting can do better in worst/average case")
print("- Linear time sorting (counting, radix) must use non-comparison techniques")
print("- Provides theoretical foundation untuk algorithm design limits")`,
      explanation: [
        '1. **Contrapositive Strategy**: Instead of proving "correct output implies correct algorithm", prove "incorrect output impossible"',
        '2. **Algorithm Invariants**: Binary search maintains logical invariants yang dapat be used untuk proof construction',
        '3. **Case Analysis**: Systematic examination of all possible cases where conclusion might fail',
        '4. **Logical Equivalence**: Contrapositive proof valid because P→Q ≡ ¬Q→¬P by logical equivalence',
        '5. **Impossibility Results**: Contradiction useful untuk proving theoretical limits dan lower bounds',
        '6. **Information Theory**: Using mathematical principles untuk show certain problems inherently difficult',
        '7. **Practical Impact**: These proofs guide real-world algorithm design dan optimization strategies'
      ]
    },
    {
      title: 'Proof Verification System',
      description: 'Automated system untuk checking proof validity',
      mathematicalConcept: 'Meta-mathematical Proof Checking',
      code: `class ProofVerificationSystem:
    """
    System untuk automatically verify logical proofs
    Demonstrates automated proof checking concepts
    """
    
    def __init__(self):
        self.proof_database = {}
        self.logical_rules = self.initialize_logical_rules()
        
    def initialize_logical_rules(self):
        """Initialize basic logical inference rules"""
        return {
            'modus_ponens': {'premises': ['P → Q', 'P'], 'conclusion': 'Q'},
            'modus_tollens': {'premises': ['P → Q', '¬Q'], 'conclusion': '¬P'},
            'contrapositive': {'premises': ['P → Q'], 'conclusion': '¬Q → ¬P'},
            'double_negation': {'premises': ['¬¬P'], 'conclusion': 'P'},
            'contradiction': {'premises': ['P', '¬P'], 'conclusion': '⊥'},
            'explosion': {'premises': ['⊥'], 'conclusion': 'Q'}  # From contradiction, anything follows
        }
    
    def verify_contradiction_proof(self, statement, assumptions, derived_contradiction):
        """
        Verify a proof by contradiction structure
        
        Args:
            statement: The statement we want to prove (P)
            assumptions: List of given assumptions
            derived_contradiction: The contradiction derived (should be form "Q ∧ ¬Q")
        
        Returns:
            Verification result dan explanation
        """
        
        verification_steps = []
        is_valid = True
        
        # Step 1: Check if we assumed negation of statement
        negated_statement = f"¬({statement})"
        
        verification_steps.append({
            'step': 1,
            'description': 'Check assumption of negation',
            'expected': f"Assume {negated_statement}",
            'status': 'valid' if negated_statement in assumptions else 'invalid'
        })
        
        if negated_statement not in assumptions:
            is_valid = False
        
        # Step 2: Verify contradiction has proper form (Q ∧ ¬Q)
        contradiction_valid = self.validate_contradiction_form(derived_contradiction)
        
        verification_steps.append({
            'step': 2, 
            'description': 'Validate contradiction form',
            'expected': 'Contradiction of form "Q ∧ ¬Q"',
            'actual': derived_contradiction,
            'status': 'valid' if contradiction_valid else 'invalid'
        })
        
        if not contradiction_valid:
            is_valid = False
            
        # Step 3: Check logical derivation chain (simplified)
        verification_steps.append({
            'step': 3,
            'description': 'Verify derivation chain',
            'expected': 'Logical steps from assumptions to contradiction',
            'status': 'assumed_valid'  # In real system, would check each step
        })
        
        return {
            'proof_type': 'contradiction',
            'statement': statement,
            'is_valid': is_valid,
            'steps': verification_steps,
            'conclusion': f"Statement '{statement}' is {'proven' if is_valid else 'not proven'} by contradiction"
        }
    
    def verify_contrapositive_proof(self, original_statement, contrapositive_proof):
        """
        Verify a contrapositive proof structure
        
        Args:
            original_statement: P → Q
            contrapositive_proof: Proof of ¬Q → ¬P
        """
        
        # Parse original statement (simplified parsing)
        if '→' not in original_statement:
            return {'error': 'Statement must be conditional (P → Q)'}
            
        parts = original_statement.split('→')
        if len(parts) != 2:
            return {'error': 'Invalid conditional statement format'}
            
        P = parts[0].strip()
        Q = parts[1].strip()
        
        # Expected contrapositive
        expected_contrapositive = f"¬{Q} → ¬{P}"
        
        verification_steps = []
        is_valid = True
        
        # Step 1: Verify contrapositive form
        verification_steps.append({
            'step': 1,
            'description': 'Verify contrapositive equivalence',
            'original': original_statement,
            'contrapositive': expected_contrapositive,
            'status': 'valid'
        })
        
        # Step 2: Check proof structure (simplified)
        verification_steps.append({
            'step': 2,
            'description': 'Verify proof of contrapositive',
            'expected': f"Proof that {expected_contrapositive}",
            'provided': contrapositive_proof.get('statement', 'Not provided'),
            'status': 'assumed_valid'
        })
        
        return {
            'proof_type': 'contrapositive',
            'original': original_statement,
            'contrapositive': expected_contrapositive,
            'is_valid': is_valid,
            'steps': verification_steps,
            'conclusion': f"Contrapositive proof {'verified' if is_valid else 'failed'}"
        }
    
    def validate_contradiction_form(self, contradiction):
        """Check if contradiction has form Q ∧ ¬Q"""
        # Simplified validation - real system would use formal parsing
        return '∧' in contradiction and '¬' in contradiction
    
    def demonstrate_proof_checking(self):
        """Demonstrate automated proof verification"""
        
        print("AUTOMATED PROOF VERIFICATION DEMONSTRATION")
        print("=" * 55)
        
        # Example 1: Valid contradiction proof
        print("\\nExample 1: Proof by Contradiction")
        print("-" * 35)
        
        statement = "√2 is irrational"
        assumptions = ["¬(√2 is irrational)", "√2 = a/b in lowest terms"]
        contradiction = "b is even ∧ b is odd"
        
        result1 = self.verify_contradiction_proof(statement, assumptions, contradiction)
        self.print_verification_result(result1)
        
        # Example 2: Contrapositive proof
        print("\\nExample 2: Contrapositive Proof")
        print("-" * 35)
        
        original = "n² is even → n is even"
        contrapositive_proof = {
            'statement': '¬(n is even) → ¬(n² is even)',
            'proof': 'If n is odd, then n² is odd'
        }
        
        result2 = self.verify_contrapositive_proof(original, contrapositive_proof)
        self.print_verification_result(result2)
        
        # Example 3: Invalid proof structure
        print("\\nExample 3: Invalid Proof Detection")
        print("-" * 38)
        
        invalid_statement = "All programs terminate"
        invalid_assumptions = ["Some programs don't terminate"]  # Missing negation of statement
        invalid_contradiction = "Program halts"  # Not proper contradiction form
        
        result3 = self.verify_contradiction_proof(invalid_statement, invalid_assumptions, invalid_contradiction)
        self.print_verification_result(result3)
    
    def print_verification_result(self, result):
        """Print formatted verification results"""
        
        print(f"Proof Type: {result['proof_type'].title()}")
        if 'statement' in result:
            print(f"Statement: {result['statement']}")
        if 'original' in result:
            print(f"Original: {result['original']}")
            print(f"Contrapositive: {result['contrapositive']}")
            
        print(f"Overall Validity: {'✓ VALID' if result['is_valid'] else '✗ INVALID'}")
        
        print("\\nVerification Steps:")
        for step in result['steps']:
            status_symbol = '✓' if step['status'] == 'valid' else ('?' if step['status'] == 'assumed_valid' else '✗')
            print(f"  {step['step']}. {step['description']}: {status_symbol} {step['status'].upper()}")
            
            if 'expected' in step:
                print(f"     Expected: {step['expected']}")
            if 'actual' in step:
                print(f"     Actual: {step['actual']}")
        
        print(f"\\nConclusion: {result['conclusion']}")
        print()

# Demonstrate proof verification system
verifier = ProofVerificationSystem()
verifier.demonstrate_proof_checking()

# Show practical applications
print("PRACTICAL APPLICATIONS OF PROOF VERIFICATION:")
print("=" * 50)
print("1. **Automated Theorem Provers**: Coq, Isabelle, Lean")
print("2. **Software Verification**: CBMC, KLEE, SAGE") 
print("3. **Hardware Verification**: Model checking untuk circuits")
print("4. **Blockchain Smart Contracts**: Formal verification untuk security")
print("5. **Critical Systems**: Aerospace, medical devices, autonomous vehicles")
print("6. **Compiler Correctness**: Proving compiler optimizations preserve semantics")
print("7. **Cryptographic Protocols**: Verifying security properties mathematically")

print("\\nFUTURE DIRECTIONS:")
print("- AI-assisted proof generation")
print("- Natural language proof understanding") 
print("- Integration dengan development environments")
print("- Scalable verification untuk large systems")`,
      explanation: [
        '1. **Proof Structure Analysis**: System checks if proof follows correct logical structure untuk each technique',
        '2. **Automated Validation**: Computer dapat verify certain aspects of mathematical proofs automatically',
        '3. **Contradiction Detection**: System ensures contradictions have proper logical form (Q ∧ ¬Q)',
        '4. **Contrapositive Verification**: Checks that contrapositive is logically equivalent to original statement',
        '5. **Error Detection**: System can identify common proof errors dan invalid reasoning patterns',
        '6. **Formal Methods**: This represents foundations of formal verification used dalam industry',
        '7. **Real Applications**: Similar systems used untuk verifying critical software dan hardware systems'
      ]
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'Dalam proof by contradiction, langkah pertama yang dilakukan adalah:',
      options: [
        'Prove statement directly',
        'Assume negation of the statement',
        'Find a counterexample',
        'Use mathematical induction'
      ],
      correct: 1,
      explanation: 'Proof by contradiction dimulai dengan assume negation dari statement yang ingin dibuktikan, kemudian show bahwa assumption ini leads to logical contradiction.'
    },
    {
      id: 'q2', 
      question: 'Contrapositive dari statement "If a program is correct, then it produces expected output" adalah:',
      options: [
        'If a program is not correct, then it does not produce expected output',
        'If a program does not produce expected output, then it is not correct',
        'If a program produces expected output, then it is correct',
        'A program is correct if and only if it produces expected output'
      ],
      correct: 1,
      explanation: 'Contrapositive dari P → Q adalah ¬Q → ¬P. Jadi dari "correct → expected output" menjadi "not expected output → not correct".'
    },
    {
      id: 'q3',
      question: 'Ketika membuktikan √2 adalah irrational dengan contradiction, contradiction yang diperoleh adalah:',
      options: [
        '√2 = 2',
        'a dan b both even (when √2 = a/b in lowest terms)',
        'a² = 2b²',
        '√2 > 1'
      ],
      correct: 1,
      explanation: 'Dalam proof irrationality √2, kita assume √2 = a/b dalam lowest terms, then derive bahwa both a dan b must be even, contradicting "lowest terms" assumption.'
    },
    {
      id: 'q4',
      question: 'Manakah statement berikut yang paling cocok dibuktikan dengan contrapositive?',
      options: [
        'If n > 5, then n² > 25',
        'If n² is odd, then n is odd', 
        'If a = b, then a² = b²',
        'If x > 0, then x + 1 > 1'
      ],
      correct: 1,
      explanation: 'Statement "If n² is odd, then n is odd" lebih mudah dibuktikan via contrapositive: "If n is even, then n² is even" karena even numbers easier to work with.'
    },
    {
      id: 'q5',
      question: 'Dalam algorithm termination proof, kita biasanya menggunakan:',
      options: [
        'Direct proof showing halting condition',
        'Contradiction dengan assume non-termination',
        'Mathematical induction on input size',
        'Case analysis untuk all inputs'
      ],
      correct: 1,
      explanation: 'Algorithm termination sering dibuktikan by contradiction: assume algorithm doesn\'t terminate, then show ini leads to contradiction dengan well-ordering principle.'
    },
    {
      id: 'q6',
      question: 'Yang BUKAN merupakan aplikasi proof by contradiction dalam CS adalah:',
      options: [
        'Proving algorithm lower bounds',
        'Showing impossibility results',
        'Verifying loop invariants',
        'Demonstrating program uniqueness'
      ],
      correct: 2,
      explanation: 'Loop invariants biasanya verified dengan direct proof atau induction, bukan contradiction. Contradiction lebih cocok untuk impossibility results dan lower bounds.'
    }
  ];

  const glossaryTerms = [
    {
      term: 'Algorithm Termination',
      definition: 'Property bahwa algorithm akan stop execution dalam finite number of steps untuk any valid input. Essential untuk ensuring programs don\'t run indefinitely.'
    },
    {
      term: 'Contrapositive', 
      definition: 'Dari conditional statement P → Q, contrapositive adalah ¬Q → ¬P. Logically equivalent dengan original statement dan sering easier to prove.'
    },
    {
      term: 'Contradiction (Logical)',
      definition: 'Statement yang selalu false, typically dalam bentuk Q ∧ ¬Q. Fundamental untuk proof by contradiction technique.'
    },
    {
      term: 'Decision Tree',
      definition: 'Tree structure representing all possible execution paths dalam algorithm. Each internal node represents decision/comparison, leaves represent outcomes.'
    },
    {
      term: 'Formal Verification',
      definition: 'Process menggunakan mathematical methods untuk prove atau disprove correctness of systems dengan respect to formal specification.'
    },
    {
      term: 'Impossibility Result',
      definition: 'Mathematical proof showing bahwa certain problem cannot be solved atau cannot be solved efficiently. Contoh: halting problem undecidability.'
    },
    {
      term: 'Invariant',
      definition: 'Property yang remains true throughout execution of algorithm atau program. Loop invariants essential untuk proving program correctness.'
    },
    {
      term: 'Law of Excluded Middle',
      definition: 'Logical principle stating bahwa untuk any proposition P, either P is true atau ¬P is true. Foundation untuk proof by contradiction.'
    },
    {
      term: 'Lower Bound',
      definition: 'Minimum amount of resources (time, space, comparisons) required untuk solve problem. Often proven using contradiction atau adversarial arguments.'
    },
    {
      term: 'Modus Tollens',
      definition: 'Logical inference rule: dari P → Q dan ¬Q, dapat conclude ¬P. Closely related to contrapositive reasoning.'
    },
    {
      term: 'Proof by Contradiction',
      definition: 'Teknik pembuktian where kita assume negation dari statement to be proved, derive logical contradiction, conclude original statement must be true.'
    },
    {
      term: 'Reductio ad Absurdum',
      definition: 'Latin term untuk proof by contradiction, meaning "reduction to absurdity". Shows statement true by demonstrating absurdity of its negation.'
    },
    {
      term: 'Soundness',
      definition: 'Property dari proof system bahwa anything provable is actually true. Essential untuk reliable automated theorem proving.'
    },
    {
      term: 'Theorem Prover',
      definition: 'Software system untuk automatically constructing mathematical proofs. Examples: Coq, Isabelle, Lean, Agda.'
    },
    {
      term: 'Well-Ordering Principle',
      definition: 'Every non-empty set of non-negative integers has smallest element. Fundamental untuk proving termination dalam algorithms.'
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
      pages: 'Chapter 1.5-1.7: Methods of Proof'
    },
    {
      type: 'book',
      authors: 'Lehman, Eric., Leighton, F. Thomson., Meyer, Albert R.',
      year: '2017',
      title: 'Mathematics for Computer Science',
      publisher: 'MIT OpenCourseWare',
      chapter: 'Chapter 2: The Well Ordering Principle, Chapter 3: Logic & Propositions',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/'
    },
    {
      type: 'book',
      authors: 'Velleman, Daniel J.',
      year: '2019',
      title: 'How to Prove It: A Structured Approach',
      edition: '3rd Edition',  
      publisher: 'Cambridge University Press',
      location: 'Cambridge',
      chapter: 'Chapter 3: Proofs, Chapter 4: Relations'
    },
    {
      type: 'book',
      authors: 'Epp, Susanna S.',
      year: '2020',
      title: 'Discrete Mathematics with Applications',
      edition: '5th Edition',
      publisher: 'Cengage Learning',
      chapter: 'Chapter 4: Elementary Number Theory and Methods of Proof'
    },
    {
      type: 'book',
      authors: 'Hammack, Richard',
      year: '2018',
      title: 'Book of Proof',
      edition: '3rd Edition',
      publisher: 'Virginia Commonwealth University',
      url: 'https://www.people.vcu.edu/~rhammack/BookOfProof/',
      note: 'Free textbook focusing on proof techniques'
    },
    {
      type: 'journal',
      authors: 'Lamport, Leslie',
      year: '2012',
      title: 'How to Write a 21st Century Proof',
      journal: 'Journal of Fixed Point Theory and Applications',
      volume: '11',
      number: '1',
      pages: '43-63',
      doi: '10.1007/s11784-012-0071-6',
      note: 'Modern approach to mathematical proof writing'
    },
    {
      type: 'journal',
      authors: 'Harrison, John',
      year: '2008',
      title: 'Formal Verification at Intel',
      journal: 'ACM SIGPLAN Notices',
      volume: '43',
      number: '4',
      pages: '45-54',
      doi: '10.1145/1375634.1375645',
      note: 'Industrial applications of formal proof methods'
    },
    {
      type: 'conference',
      authors: 'Klein, Gerwin., Elphinstone, Kevin., Heiser, Gernot',
      year: '2009',
      title: 'seL4: Formal Verification of an OS Kernel',
      conference: 'Proceedings of the 22nd ACM Symposium on Operating Systems Principles',
      pages: '207-220',
      location: 'Big Sky, Montana, USA',
      doi: '10.1145/1629575.1629596',
      note: 'Landmark achievement dalam formal verification'
    },
    {
      type: 'conference',
      authors: 'Leroy, Xavier',
      year: '2006', 
      title: 'Formal Certification of a Compiler Back-end or: Programming a Compiler with a Proof Assistant',
      conference: 'Proceedings of the 33rd ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages',
      pages: '42-54',
      location: 'Charleston, South Carolina, USA',
      doi: '10.1145/1111037.1111042',
      note: 'CompCert: First fully verified C compiler'
    },
    {
      type: 'web',
      title: 'MIT 6.042J Lecture 1: Introduction and Proofs',
      publisher: 'Massachusetts Institute of Technology',
      year: '2017',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/mit6_042jf10_lec01/',
      accessed: '2024'
    },
    {
      type: 'web',
      title: 'Stanford CS103: Proof Techniques',
      publisher: 'Stanford University',
      year: '2024',
      url: 'https://web.stanford.edu/class/cs103/lectures/proof-techniques/',
      accessed: '2024'
    },
    {
      type: 'web',
      authors: 'Pierce, Benjamin C., de Amorim, Arthur Azevedo, Casinghino, Chris',
      title: 'Software Foundations',
      publisher: 'University of Pennsylvania',
      year: '2024',
      url: 'https://softwarefoundations.cis.upenn.edu/',
      accessed: '2024',
      note: 'Interactive textbooks on logic, functional programming, and verification'
    },
    {
      type: 'web',
      title: 'The Coq Proof Assistant',
      publisher: 'INRIA',
      year: '2024',
      url: 'https://coq.inria.fr/',
      accessed: '2024',
      note: 'Interactive theorem prover dan functional programming language'
    },
    {
      type: 'web',
      authors: 'Nipkow, Tobias., Wenzel, Markus., Paulson, Lawrence C.',
      title: 'Isabelle/HOL: A Proof Assistant for Higher-Order Logic',
      publisher: 'Technical University of Munich',
      year: '2024',
      url: 'https://isabelle.in.tum.de/',
      accessed: '2024'
    },
    {
      type: 'web',
      title: 'Lean Prover Community',
      publisher: 'Microsoft Research & Community',
      year: '2024',
      url: 'https://leanprover-community.github.io/',
      accessed: '2024',
      note: 'Modern theorem prover dengan growing mathematical library'
    },
    {
      type: 'web',
      authors: 'Lamport, Leslie',
      title: 'TLA+ Homepage',
      publisher: 'Microsoft Research',
      year: '2024',
      url: 'https://lamport.azurewebsites.net/tla/tla.html',
      accessed: '2024',
      note: 'Specification language untuk concurrent dan distributed systems'
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
              <p className="text-gray-600">Pertemuan 5: Proof Techniques - Contradiction dan Contrapositive</p>
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
                Proof Techniques: Contradiction dan Contrapositive
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                "Advanced Proof Arsenal" - Menguasai teknik pembuktian powerful untuk algorithm analysis dan software verification
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tujuan Pembelajaran Pertemuan 5</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Proof by Contradiction</h4>
                      <p className="text-gray-600">Menguasai reductio ad absurdum technique untuk proving impossibility results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Contrapositive Proofs</h4>
                      <p className="text-gray-600">Memahami logical equivalence dan strategic application dalam CS</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Algorithm Termination</h4>
                      <p className="text-gray-600">Proving algorithm correctness dan termination properties</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Formal Verification</h4>
                      <p className="text-gray-600">Introduction to automated proof checking systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Progress */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Progression Pembelajaran</h3>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
                  <h4 className="font-medium text-gray-700 mb-1">Mathematical Reasoning</h4>
                  <p className="text-xs text-gray-600">Foundation</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
                  <h4 className="font-medium text-gray-700 mb-1">Propositional Logic</h4>
                  <p className="text-xs text-gray-600">Truth Tables</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
                  <h4 className="font-medium text-gray-700 mb-1">Logical Equivalences</h4>
                  <p className="text-xs text-gray-600">Simplification</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">4</div>
                  <h4 className="font-medium text-gray-700 mb-1">Direct Proofs</h4>
                  <p className="text-xs text-gray-600">Basic Techniques</p>
                </div>
                <div className="bg-black rounded-lg p-4 text-center text-white">
                  <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">5</div>
                  <h4 className="font-medium mb-1">Advanced Proofs</h4>
                  <p className="text-xs text-gray-300">Contradiction & Contrapositive</p>
                </div>
              </div>
            </div>

            {/* Why These Techniques Matter */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <Target className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">Mengapa Proof Techniques Ini Essential?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Theoretical Computer Science:</h4>
                      <ul className="text-red-700 space-y-1 text-sm">
                        <li>• Proving algorithm lower bounds dan impossibility results</li>
                        <li>• Showing NP-hardness dan computational complexity</li>
                        <li>• Undecidability proofs (Halting Problem, etc.)</li>
                        <li>• Information theory dan communication bounds</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Industry Applications:</h4>
                      <ul className="text-red-700 space-y-1 text-sm">
                        <li>• Formal verification untuk critical systems</li>
                        <li>• Cryptographic protocol security proofs</li>
                        <li>• Compiler correctness verification</li>
                        <li>• Smart contract verification untuk blockchain</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prerequisites Check */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Prerequisites Pertemuan 5</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Solid understanding logical operators (∧, ∨, ¬, →, ↔)</li>
                    <li>• Experience dengan truth tables dan logical equivalences</li>
                    <li>• Basic proof writing skills dari Pertemuan 4</li>
                    <li>• Understanding dari Law of Excluded Middle: P ∨ ¬P</li>
                    <li>• Familiarity dengan Python untuk examples verification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contradiction Section */}
        {activeSection === 'contradiction' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Proof by Contradiction</h2>
              <p className="text-xl text-gray-600">Reductio ad Absurdum - The Power of Logical Contradiction</p>
            </div>

            <div className="space-y-6">
              {contradictionConcepts.map((concept) => (
                <div key={concept.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <button
                    onClick={() => setExpandedCard(expandedCard === concept.id ? null : concept.id)}
                    className="w-full text-left"
                  >
                    <div className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{concept.title}</h3>
                          <p className="text-gray-600 mt-1">{concept.subtitle}</p>
                        </div>
                        {expandedCard === concept.id ? 
                          <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        }
                      </div>
                    </div>
                  </button>
                  
                  {expandedCard === concept.id && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="text-gray-700 mb-6 leading-relaxed">{concept.content}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-4">Proof Steps:</h4>
                      <div className="space-y-3 mb-6">
                        {concept.steps.map((step, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-gray-700">{step}</p>
                          </div>
                        ))}
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-3">Classic Examples:</h4>
                      <ul className="space-y-2 mb-6">
                        {concept.examples.map((example, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h5 className="font-semibold text-red-900 mb-2">Computer Science Applications:</h5>
                        <p className="text-red-800 text-sm">{concept.csApplications}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Classic Example: √2 Irrationality */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Classic Example: Proving √2 is Irrational</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Step-by-Step Contradiction Proof</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Step 1: Assumption</h5>
                    <p className="text-gray-700">Assume √2 is rational. This means √2 = a/b where a, b are integers with b ≠ 0, and a/b is in lowest terms (gcd(a,b) = 1).</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Step 2: Algebraic Manipulation</h5>
                    <p className="text-gray-700">Square both sides: 2 = a²/b², so 2b² = a². This means a² is even, which implies a is even (since odd² = odd).</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Step 3: Further Analysis</h5>
                    <p className="text-gray-700">Since a is even, let a = 2k untuk some integer k. Then a² = 4k², so 2b² = 4k², which gives b² = 2k².</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Step 4: Contradiction</h5>
                    <p className="text-gray-700">This means b² is even, so b is even. But if both a and b are even, then gcd(a,b) ≥ 2, contradicting our assumption that a/b is in lowest terms.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Conclusion</h5>
                    <p className="text-gray-700">Our assumption leads to contradiction, therefore √2 cannot be rational. Hence, √2 is irrational. ∎</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Why This Proof Works:</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Uses properties of even/odd numbers dan greatest common divisor</li>
                  <li>• Shows assumption leads to logical contradiction (gcd = 1 and gcd ≥ 2)</li>
                  <li>• By Law of Excluded Middle, if ¬P leads to contradiction, then P must be true</li>
                  <li>• This technique generalizes to prove irrationality of √3, √5, etc.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Contrapositive Section */}
        {activeSection === 'contrapositive' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contrapositive Proofs</h2>
              <p className="text-xl text-gray-600">Leveraging Logical Equivalence: P → Q ≡ ¬Q → ¬P</p>
            </div>

            <div className="space-y-6">
              {contrapositiveConcepts.map((concept) => (
                <div key={concept.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <button
                    onClick={() => setExpandedCard(expandedCard === concept.id ? null : concept.id)}
                    className="w-full text-left"
                  >
                    <div className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{concept.title}</h3>
                          <p className="text-gray-600 mt-1">{concept.subtitle}</p>
                        </div>
                        {expandedCard === concept.id ? 
                          <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        }
                      </div>
                    </div>
                  </button>
                  
                  {expandedCard === concept.id && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="text-gray-700 mb-6 leading-relaxed">{concept.content}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-4">Proof Strategy:</h4>
                      <div className="space-y-3 mb-6">
                        {concept.steps.map((step, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-gray-700">{step}</p>
                          </div>
                        ))}
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-3">Example Applications:</h4>
                      <ul className="space-y-2 mb-6">
                        {concept.examples.map((example, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-900 mb-2">CS Applications:</h5>
                        <p className="text-blue-800 text-sm">{concept.csApplications}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Detailed Example: Even Square Theorem */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Example: If n² is even, then n is even</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Direct Proof Attempt (Harder)</h4>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400">
                    <p className="text-sm text-gray-700 mb-2">Given: n² is even</p>
                    <p className="text-sm text-gray-700 mb-2">Want to show: n is even</p>
                    <p className="text-sm text-gray-700 mb-2">Challenge: How to extract information about n dari n² being even?</p>
                    <p className="text-sm text-red-600">This approach requires more complex number theory...</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Contrapositive Proof (Easier)</h4>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="text-sm text-gray-700 mb-2">Contrapositive: If n is odd, then n² is odd</p>
                    <p className="text-sm text-gray-700 mb-2">Given: n is odd, so n = 2k + 1 untuk some integer k</p>
                    <p className="text-sm text-gray-700 mb-2">Then: n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1</p>
                    <p className="text-sm text-green-600">Since 2k² + 2k is integer, n² is odd. ∎</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-2">Key Insight:</h4>
                <p className="text-yellow-800 text-sm">
                  Contrapositive proof is easier karena odd numbers have explicit form (2k+1), making algebraic manipulation straightforward. 
                  This demonstrates strategic thinking dalam proof construction.
                </p>
              </div>

              {/* Truth Table Verification */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Logical Equivalence Verification</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-center border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 border border-gray-300">n is even (P)</th>
                        <th className="px-4 py-2 border border-gray-300">n² is even (Q)</th>
                        <th className="px-4 py-2 border border-gray-300">P → Q</th>
                        <th className="px-4 py-2 border border-gray-300">¬Q (n² is odd)</th>
                        <th className="px-4 py-2 border border-gray-300">¬P (n is odd)</th>
                        <th className="px-4 py-2 border border-gray-300">¬Q → ¬P</th>
                        <th className="px-4 py-2 border border-gray-300">Equivalent?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border border-gray-300">T</td>
                        <td className="px-4 py-2 border border-gray-300">T</td>
                        <td className="px-4 py-2 border border-gray-300 bg-green-100">T</td>
                        <td className="px-4 py-2 border border-gray-300">F</td>
                        <td className="px-4 py-2 border border-gray-300">F</td>
                        <td className="px-4 py-2 border border-gray-300 bg-green-100">T</td>
                        <td className="px-4 py-2 border border-gray-300 font-bold text-green-600">✓</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border border-gray-300">F</td>
                        <td className="px-4 py-2 border border-gray-300">F</td>
                        <td className="px-4 py-2 border border-gray-300 bg-green-100">T</td>
                        <td className="px-4 py-2 border border-gray-300">T</td>
                        <td className="px-4 py-2 border border-gray-300">T</td>
                        <td className="px-4 py-2 border border-gray-300 bg-green-100">T</td>
                        <td className="px-4 py-2 border border-gray-300 font-bold text-green-600">✓</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Note: Cases where P=T, Q=F atau P=F, Q=T mathematically impossible untuk this specific theorem, 
                  so table shows only valid mathematical cases.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Examples Section */}
        {activeSection === 'examples' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Computer Science Applications</h2>
              <p className="text-xl text-gray-600">Real-world applications dalam algorithm analysis dan software verification</p>
            </div>

            <div className="space-y-8">
              {csExamples.map((example, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h3>
                    <p className="text-gray-600 mb-2">{example.description}</p>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg px-4 py-2 inline-block">
                      <span className="text-purple-800 text-sm font-medium">Mathematical Concept: {example.mathematicalConcept}</span>
                    </div>
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
                          <p className="mb-1"><strong>Hands-on Practice:</strong></p>
                          <p>Copy kode di atas dan jalankan di:</p>
                          <a href="https://www.onlineide.pro" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline font-medium break-all inline-block mt-1">
                            www.onlineide.pro
                          </a>
                          <p className="mt-1">untuk melihat proof techniques dalam action!</p>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Detailed Explanation:</h4>
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

            {/* Challenge Assignment */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🎯 Assignment 2: Proof Construction</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Tasks (Choose 2 dari 3):</h4>
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm font-mono">
                      Task 1: Contradiction Proof<br/>
                      Prove: There are infinitely many prime numbers<br/>
                      Include: Step-by-step contradiction argument<br/><br/>
                      Task 2: Contrapositive Proof<br/>
                      Prove: If 3n + 2 is odd, then n is odd<br/>
                      Include: Both direct attempt dan contrapositive<br/><br/>
                      Task 3: Algorithm Termination<br/>
                      Prove: Binary search always terminates<br/>
                      Include: Implementation + formal proof
                    </p>
                  </div>
                  <div className="bg-blue-600/20 border border-blue-400 rounded-lg p-3">
                    <p className="text-blue-200 text-sm">
                      💻 <strong>Code Implementation:</strong><br/>
                      Use Python untuk implementing examples:<br/>
                      <a href="https://www.onlineide.pro" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline font-medium break-all">
                        www.onlineide.pro
                      </a><br/>
                      Submit: PDF write-up + working code
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Grading Rubric (7 marks total):</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• <strong>Proof Structure (2 marks):</strong> Clear assumption, derivation, conclusion</li>
                    <li>• <strong>Logical Rigor (2 marks):</strong> Valid reasoning steps, no logical gaps</li>
                    <li>• <strong>Clarity (1 mark):</strong> Well-organized, readable proofs</li>
                    <li>• <strong>Implementation (1 mark):</strong> Working code that demonstrates concepts</li>
                    <li>• <strong>Analysis (1 mark):</strong> Discussion of proof strategy choices</li>
                  </ul>
                  
                  <div className="mt-4 bg-yellow-600/20 border border-yellow-400 rounded-lg p-3">
                    <p className="text-yellow-200 text-sm">
                      <strong>Due:</strong> Before Pertemuan 8 (Week 8)<br/>
                      <strong>Weight:</strong> 7 marks (21% dari total grade)<br/>
                      <strong>Format:</strong> PDF report + Python files
                    </p>
                  </div>
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
              <p className="text-xl text-gray-600">Test pemahaman proof techniques dan strategic applications</p>
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
                          {getQuizScore() >= 5 ? 'Excellent! Proof techniques mastery achieved.' : 
                           getQuizScore() >= 4 ? 'Very Good! Strong understanding dengan minor gaps.' :
                           getQuizScore() >= 3 ? 'Good! Need more practice dengan strategic applications.' :
                           'Need focused study on proof construction principles.'}
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
              <p className="text-xl text-gray-600">Terminologi essential untuk advanced proof techniques</p>
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
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">🎯 Proof by Contradiction Tips</h3>
                <div className="text-red-800 space-y-2 text-sm">
                  <p><strong>Strategic Use:</strong> Best untuk proving negative statements, impossibility results, dan uniqueness.</p>
                  <p><strong>Common Pattern:</strong> Assume opposite, derive contradiction dengan known facts atau definitions.</p>
                  <p><strong>Key Insight:</strong> Look untuk contradictions dalam forms P ∧ ¬P, atau violations of fundamental principles.</p>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🧠 Contrapositive Tips</h3>
                <div className="text-blue-800 space-y-2 text-sm">
                  <p><strong>When to Use:</strong> When negation of conclusion provides more concrete information than original hypothesis.</p>
                  <p><strong>Advantage:</strong> Often transforms difficult positive statements into easier negative statements.</p>
                  <p><strong>Remember:</strong> P → Q ≡ ¬Q → ¬P always, so contrapositive proof is always valid.</p>
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
              <p className="text-xl text-gray-600">Sumber pembelajaran proof techniques dan formal verification</p>
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
                          <span className="text-gray-600"> <em>{ref.note}</em></span>
                        )}
                        {ref.url && (
                          <span> <a href={ref.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Available Online</a></span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journal Articles */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
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
                        {ref.doi && (
                          <span> DOI: <a href={`https://doi.org/${ref.doi}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{ref.doi}</a></span>
                        )}
                        {ref.note && (
                          <span className="text-gray-600"> <em>{ref.note}</em></span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conference Papers */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Publikasi Konferensi
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
                        {ref.note && (
                          <span className="text-gray-600"> <em>{ref.note}</em></span>
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

              {/* Study Roadmap */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">📚 Advanced Study Roadmap</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Immediate Focus (Week 5-6):</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>1. <strong>Velleman Ch. 3:</strong> Mastering proof techniques</li>
                      <li>2. <strong>Hammack:</strong> Free comprehensive proof book</li>
                      <li>3. <strong>MIT Lectures:</strong> Algorithm termination proofs</li>
                      <li>4. <strong>Practice Problems:</strong> Contradiction & contrapositive</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Intermediate Goals:</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• <strong>Software Foundations:</strong> Interactive proof development</li>
                      <li>• <strong>Formal Verification Papers:</strong> Real-world applications</li>
                      <li>• <strong>Theorem Provers:</strong> Hands-on dengan Coq atau Lean</li>
                      <li>• <strong>Advanced Techniques:</strong> Strong induction, well-ordering</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Career Preparation:</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• <strong>Industry Case Studies:</strong> seL4, CompCert achievements</li>
                      <li>• <strong>TLA+ Specifications:</strong> Distributed systems verification</li>
                      <li>• <strong>Formal Methods Jobs:</strong> Build portfolio projects</li>
                      <li>• <strong>Research Opportunities:</strong> Academic atau industry labs</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 Pro Tips untuk Mastering Proofs:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300 text-sm">
                    <div>
                      <p><strong>Practice Daily:</strong> Work through 1-2 proof problems setiap hari</p>
                      <p><strong>Study Patterns:</strong> Recognize common proof templates dan strategies</p>
                    </div>
                    <div>
                      <p><strong>Write Clearly:</strong> Good mathematical writing adalah essential skill</p>
                      <p><strong>Verify Rigorously:</strong> Check every logical step untuk validity</p>
                    </div>
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
              <h4 className="font-bold mb-4">Pertemuan 5 Summary</h4>
              <p className="text-gray-400 text-sm">
                Proof by contradiction dan contrapositive adalah powerful techniques untuk 
                advanced mathematical reasoning. Essential untuk theoretical CS dan 
                software verification careers.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Pertemuan Selanjutnya</h4>
              <p className="text-gray-400 text-sm">
                Pertemuan 6: Mathematical Induction<br/>
                - Weak induction principles dan applications<br/>
                - Strong induction untuk recursive algorithms<br/>
                - Loop invariants dan program correctness<br/>
                - Recursive data structure proofs
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Industry Impact</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Intel: Formal verification saves $475M</li>
                <li>• Amazon: TLA+ prevents critical bugs</li>
                <li>• seL4: First verified OS kernel</li>
                <li>• CompCert: Fully verified compiler</li>
                <li>• Smart contracts: Prevent hack losses</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2024 Logika Matematika - Universitas. Advanced proof techniques untuk future computer scientists.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  💻 <strong>Coding Practice Platform:</strong><br/>
                  <a href="https://www.onlineide.pro" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-all">
                    www.onlineide.pro
                  </a> - Test semua algorithm proofs dan implementations
                </p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm">Assignment 2 Due: Week 8</span>
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">7 marks</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm">Next Quiz: Proof Techniques</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">4 marks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LogicMathWeek5;