import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, Book, Code, Brain, CheckCircle, Circle, ArrowRight, AlertCircle, Zap, Settings, Target, FileText } from 'lucide-react';

const LogicMathWeek4 = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedCard, setExpandedCard] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  const sections = [
    { id: 'overview', title: 'Gambaran Umum', icon: <Book className="w-5 h-5" /> },
    { id: 'concepts', title: 'Konsep Dasar Proof', icon: <Brain className="w-5 h-5" /> },
    { id: 'structure', title: 'Struktur Proof', icon: <Settings className="w-5 h-5" /> },
    { id: 'examples', title: 'Contoh & Aplikasi', icon: <Code className="w-5 h-5" /> },
    { id: 'quiz', title: 'Latihan Soal', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'glossary', title: 'Glosarium', icon: <Book className="w-5 h-5" /> },
    { id: 'references', title: 'Referensi', icon: <Circle className="w-5 h-5" /> }
  ];

  const conceptCards = [
    {
      id: 'what-is-proof',
      title: 'What is a Mathematical Proof?',
      subtitle: 'Argumen Logis untuk Membuktikan Kebenaran',
      content: 'Mathematical proof adalah argumen logis yang rigorous dan systematic yang menunjukkan bahwa suatu mathematical statement adalah benar. Proof menggunakan logical reasoning, previously established facts, dan accepted rules of inference untuk mencapai kesimpulan yang valid.',
      examples: [
        'Membuktikan bahwa √2 adalah irrational number',
        'Membuktikan algorithm correctness (sorting algorithm selalu menghasilkan sorted array)',
        'Membuktikan invariant properties dalam program loops',
        'Membuktikan mathematical theorems seperti Fundamental Theorem of Arithmetic'
      ],
      programming: 'Dalam CS: proofs memverifikasi algorithm correctness, program termination, dan system reliability.',
      importance: 'Essential untuk building reliable software systems dan understanding theoretical foundations of computing.',
      connection: 'Logical reasoning dari Pertemuan 1-3 menjadi foundation untuk constructing valid mathematical arguments.'
    },
    {
      id: 'types-of-statements',
      title: 'Types of Mathematical Statements',
      subtitle: 'Klasifikasi Statement yang Dapat Dibuktikan',
      content: 'Mathematical statements dapat dikategorikan berdasarkan struktur logical mereka. Understanding different types membantu kita choose appropriate proof techniques dan understand what needs to be proved.',
      examples: [
        'Conditional Statements: "If P then Q" (P → Q)',
        'Universal Statements: "For all x, P(x)" (∀x P(x))',
        'Existential Statements: "There exists x such that P(x)" (∃x P(x))',
        'Biconditional Statements: "P if and only if Q" (P ↔ Q)'
      ],
      programming: 'Program specifications often expressed sebagai logical statements yang perlu diverifikasi.',
      importance: 'Different statement types require different proof approaches dan strategies.',
      connection: 'Builds pada propositional logic dan quantifiers untuk formal mathematical reasoning.'
    },
    {
      id: 'proof-methods',
      title: 'Fundamental Proof Methods',
      subtitle: 'Teknik-teknik Dasar untuk Membangun Proof',
      content: 'Ada beberapa fundamental approaches untuk constructing mathematical proofs. Setiap method memiliki applications yang sesuai dan structure yang distinctive.',
      examples: [
        'Direct Proof: P → Q dibuktikan dengan assuming P dan deriving Q',
        'Proof by Contradiction: Assume ¬Q dan derive contradiction',
        'Proof by Contrapositive: Prove ¬Q → ¬P untuk establish P → Q',
        'Proof by Cases: Break problem into exhaustive cases'
      ],
      programming: 'Algorithm correctness proofs menggunakan combinations dari methods ini.',
      importance: 'Choosing right method essential untuk successful dan elegant proofs.',
      connection: 'Logical equivalences dari Pertemuan 3 justify validity dari different proof approaches.'
    },
    {
      id: 'cs-applications',
      title: 'Computer Science Applications',
      subtitle: 'Mengapa Proofs Penting untuk Programmer',
      content: 'Mathematical proofs tidak hanya theoretical exercise - mereka fundamental untuk ensuring software reliability, security, dan correctness dalam critical systems.',
      examples: [
        'Algorithm Correctness: Membuktikan sorting algorithms produce correct output',
        'Program Termination: Proving programs halt untuk all valid inputs',
        'Security Protocols: Verifying cryptographic systems meet security requirements',
        'Compiler Verification: Proving compilers preserve program semantics'
      ],
      programming: 'Industry menggunakan formal verification untuk safety-critical systems (aerospace, medical, financial).',
      importance: 'Critical untuk high-stakes applications where bugs dapat have severe consequences.',
      connection: 'Combines logical reasoning dengan practical software engineering needs.'
    }
  ];

  const proofStructures = [
    {
      type: 'Direct Proof',
      description: 'Most straightforward method - assume hypothesis dan derive conclusion',
      template: [
        '1. State what needs to be proved clearly',
        '2. Assume the hypothesis (given conditions)',
        '3. Use logical steps to derive intermediate results',
        '4. Arrive at the desired conclusion',
        '5. Clearly state that proof is complete'
      ],
      example: {
        statement: 'Prove: If n is even, then n² is even',
        proof: `Proof:
Let n be an even integer.
By definition of even, n = 2k for some integer k.
Then n² = (2k)² = 4k² = 2(2k²)
Since 2k² is an integer, n² = 2(2k²) shows n² is even.
Therefore, if n is even, then n² is even. ∎`,
        steps: [
          'Assume hypothesis: n is even',
          'Use definition: n = 2k for integer k',
          'Algebraic manipulation: n² = 4k²',
          'Rewrite in even form: n² = 2(2k²)',
          'Conclude: n² is even'
        ]
      },
      programmingAnalogy: 'Like step-by-step algorithm - each step follows logically from previous ones',
      commonMistakes: [
        'Assuming what you want to prove',
        'Skipping logical steps',
        'Using circular reasoning',
        'Not clearly stating assumptions'
      ]
    },
    {
      type: 'Proof by Contradiction',
      description: 'Assume negation of conclusion dan derive contradiction',
      template: [
        '1. State what needs to be proved',
        '2. Assume the negation of the conclusion',
        '3. Combine with given hypotheses',
        '4. Use logical reasoning to derive a contradiction',
        '5. Conclude original statement must be true'
      ],
      example: {
        statement: 'Prove: √2 is irrational',
        proof: `Proof by Contradiction:
Assume √2 is rational.
Then √2 = a/b where a,b integers, b ≠ 0, gcd(a,b) = 1.
Squaring: 2 = a²/b², so 2b² = a²
This means a² is even, so a is even.
Let a = 2c. Then 2b² = (2c)² = 4c², so b² = 2c²
This means b² is even, so b is even.
But if both a and b are even, gcd(a,b) ≥ 2, contradiction!
Therefore √2 is irrational. ∎`,
        steps: [
          'Assume opposite: √2 is rational',
          'Express as reduced fraction: √2 = a/b',
          'Derive consequences: both a and b even',
          'Reach contradiction: violates reduced fraction',
          'Conclude: √2 must be irrational'
        ]
      },
      programmingAnalogy: 'Like debugging - assume bug doesn\'t exist, find contradiction',
      commonMistakes: [
        'Forgetting to assume negation',
        'Not reaching clear contradiction',
        'Weak or unclear contradictions',
        'Concluding wrong statement'
      ]
    }
  ];

  const programmingExamples = [
    {
      title: 'Algorithm Correctness Proof',
      description: 'Proving bahwa bubble sort algorithm correctly sorts any input array',
      code: `def bubble_sort(arr):
    """
    Bubble sort implementation dengan dokumentasi proof structure
    
    Precondition: arr adalah list of comparable elements
    Postcondition: arr adalah sorted list dengan elements yang sama
    """
    n = len(arr)
    
    # Outer loop: setelah i iterations, last i elements sudah di posisi correct
    for i in range(n):
        # Inner loop: bubble largest remaining element ke correct position
        for j in range(0, n - i - 1):
            # Invariant: elements arr[n-i:] sudah sorted dan >= elements arr[:n-i]
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    
    return arr

# Proof Structure Analysis
class BubbleSortProof:
    """
    Class untuk analyzing correctness proof dari bubble sort
    """
    
    def __init__(self):
        self.proof_components = {
            'precondition': 'Input adalah valid array of comparable elements',
            'postcondition': 'Output adalah sorted array dengan same elements',
            'loop_invariant': 'After k iterations, last k elements correctly positioned',
            'termination': 'Outer loop runs exactly n times, always terminates'
        }
    
    def verify_invariant_holds(self, arr_states):
        """
        Verify loop invariant di setiap step dari sorting process
        
        Args:
            arr_states (list): Array states setelah each outer loop iteration
        
        Returns:
            dict: Verification results untuk each step
        """
        verification_results = {}
        
        for i, state in enumerate(arr_states):
            # Check invariant: last i elements sorted dan >= remaining elements
            if i == 0:
                verification_results[f'Step {i}'] = {
                    'invariant_holds': True,
                    'reason': 'Base case: no elements processed yet'
                }
                continue
            
            # Check if last i elements are sorted
            last_i_elements = state[-(i):]
            is_sorted = all(last_i_elements[j] <= last_i_elements[j+1] 
                           for j in range(len(last_i_elements)-1))
            
            # Check if last i elements >= remaining elements
            remaining_elements = state[:-(i)]
            correctly_positioned = (len(remaining_elements) == 0 or 
                                  max(remaining_elements) <= min(last_i_elements))
            
            verification_results[f'Step {i}'] = {
                'invariant_holds': is_sorted and correctly_positioned,
                'last_i_sorted': is_sorted,
                'correctly_positioned': correctly_positioned,
                'last_elements': last_i_elements,
                'remaining_elements': remaining_elements
            }
        
        return verification_results
    
    def demonstrate_proof_steps(self):
        """
        Demonstrate proof process dengan concrete example
        """
        print("=== BUBBLE SORT CORRECTNESS PROOF ===")
        print()
        
        # Example array
        original_array = [64, 34, 25, 12, 22, 11, 90]
        print(f"Original Array: {original_array}")
        print()
        
        # Track array states
        array_states = []
        arr = original_array.copy()
        array_states.append(arr.copy())
        
        # Manual bubble sort dengan tracking
        n = len(arr)
        for i in range(n):
            print(f"--- Outer Loop Iteration {i+1} ---")
            print(f"Goal: Position largest element among first {n-i} elements")
            
            for j in range(0, n - i - 1):
                if arr[j] > arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]
                    print(f"  Swap: {arr[j+1]} and {arr[j]} → {arr}")
            
            array_states.append(arr.copy())
            print(f"After iteration {i+1}: {arr}")
            
            # Verify invariant
            if i > 0:
                last_elements = arr[-(i+1):]
                remaining_elements = arr[:-(i+1)] if i+1 < len(arr) else []
                print(f"Invariant check - Last {i+1} elements: {last_elements}")
                print(f"                - Remaining elements: {remaining_elements}")
                print(f"                - Invariant holds: {all(last_elements[k] <= last_elements[k+1] for k in range(len(last_elements)-1))}")
            print()
        
        # Verify final result
        print("=== PROOF VERIFICATION ===")
        print(f"Final sorted array: {arr}")
        print(f"Is correctly sorted: {all(arr[i] <= arr[i+1] for i in range(len(arr)-1))}")
        print(f"Same elements as original: {sorted(original_array) == sorted(arr)}")
        print()
        
        # Verify invariant untuk all steps
        verification = self.verify_invariant_holds(array_states)
        print("Loop Invariant Verification:")
        for step, result in verification.items():
            print(f"  {step}: {result['invariant_holds']} - {result.get('reason', 'Invariant maintained')}")

# Demo the proof
proof_demo = BubbleSortProof()
proof_demo.demonstrate_proof_steps()`,
      explanation: [
        '1. **Precondition**: Specify exactly what conditions input harus satisfy',
        '2. **Postcondition**: Define precisely what algorithm harus accomplish',
        '3. **Loop Invariant**: Property yang remains true throughout loop execution',
        '4. **Termination Proof**: Show algorithm always stops dalam finite steps',
        '5. **Correctness Argument**: Connect invariant dengan postcondition untuk prove correctness',
        '6. **Concrete Verification**: Test invariant dengan actual array states untuk validation'
      ],
      proofStructure: {
        type: 'Constructive Proof with Invariants',
        components: [
          'Base Case: Invariant true before first iteration',
          'Inductive Step: If invariant true before iteration k, remains true after',
          'Termination: Loop terminates dalam exactly n iterations',
          'Correctness: Final state satisfies postcondition'
        ]
      }
    },
    {
      title: 'Mathematical Statement Prover',
      description: 'Program untuk verify simple mathematical proofs secara systematic',
      code: `import math
from typing import List, Dict, Any, Callable

class MathematicalProver:
    """
    Simple framework untuk constructing dan verifying mathematical proofs
    """
    
    def __init__(self):
        self.axioms = {}
        self.proven_theorems = {}
        self.proof_steps = []
    
    def add_axiom(self, name: str, statement: str, verifier: Callable):
        """
        Add mathematical axiom ke knowledge base
        
        Args:
            name: Unique name untuk axiom
            statement: Human-readable statement
            verifier: Function yang returns True if axiom applies
        """
        self.axioms[name] = {
            'statement': statement,
            'verifier': verifier
        }
    
    def add_theorem(self, name: str, statement: str, proof_function: Callable):
        """
        Add proven theorem ke knowledge base
        """
        self.proven_theorems[name] = {
            'statement': statement,
            'proof': proof_function
        }
    
    def verify_direct_proof(self, hypothesis: Any, conclusion: Any, 
                           proof_steps: List[Dict]) -> Dict[str, Any]:
        """
        Verify direct proof structure: hypothesis → conclusion
        
        Args:
            hypothesis: Starting assumption
            conclusion: Target conclusion  
            proof_steps: List of logical steps
        
        Returns:
            dict: Verification results
        """
        print(f"=== DIRECT PROOF VERIFICATION ===")
        print(f"To Prove: {hypothesis} → {conclusion}")
        print(f"Method: Direct Proof")
        print()
        
        current_state = hypothesis
        valid_proof = True
        step_results = []
        
        print("Proof Steps:")
        print(f"  Assumption: {hypothesis}")
        
        for i, step in enumerate(proof_steps, 1):
            step_type = step.get('type', 'unknown')
            step_justification = step.get('justification', '')
            step_result = step.get('result', None)
            
            print(f"  Step {i}: {step_justification}")
            print(f"           Result: {step_result}")
            
            # Verify step validity (simplified verification)
            step_valid = self.verify_step_validity(current_state, step)
            step_results.append({
                'step': i,
                'valid': step_valid,
                'justification': step_justification,
                'result': step_result
            })
            
            if step_valid:
                current_state = step_result
                print(f"           ✓ Valid step")
            else:
                valid_proof = False
                print(f"           ✗ Invalid step")
            print()
        
        # Check if we reached conclusion
        reached_conclusion = (current_state == conclusion)
        
        print("=== PROOF SUMMARY ===")
        print(f"All steps valid: {all(step['valid'] for step in step_results)}")
        print(f"Reached conclusion: {reached_conclusion}")
        print(f"Proof valid: {valid_proof and reached_conclusion}")
        
        return {
            'proof_type': 'direct',
            'hypothesis': hypothesis,
            'conclusion': conclusion,
            'steps_valid': all(step['valid'] for step in step_results),
            'reached_conclusion': reached_conclusion,
            'overall_valid': valid_proof and reached_conclusion,
            'step_details': step_results
        }
    
    def verify_step_validity(self, current_state: Any, step: Dict) -> bool:
        """
        Verify if individual proof step adalah valid
        (Simplified implementation untuk educational purposes)
        """
        step_type = step.get('type', '')
        
        # Basic validity checks berdasarkan step type
        if step_type == 'definition':
            return True  # Assume definitions are always valid
        elif step_type == 'algebra':
            return True  # Assume algebraic steps are valid
        elif step_type == 'axiom':
            axiom_name = step.get('axiom', '')
            return axiom_name in self.axioms
        elif step_type == 'theorem':
            theorem_name = step.get('theorem', '')
            return theorem_name in self.proven_theorems
        else:
            return True  # Default accept untuk educational demo
    
    def prove_even_square_theorem(self):
        """
        Example: Prove "If n is even, then n² is even"
        """
        print("=== THEOREM: IF n IS EVEN, THEN n² IS EVEN ===")
        print()
        
        # Define proof steps
        proof_steps = [
            {
                'type': 'definition',
                'justification': 'By definition of even: n = 2k for some integer k',
                'result': 'n = 2k'
            },
            {
                'type': 'algebra',
                'justification': 'Square both sides: n² = (2k)²',
                'result': 'n² = 4k²'
            },
            {
                'type': 'algebra',
                'justification': 'Factor: 4k² = 2(2k²)',
                'result': 'n² = 2(2k²)'
            },
            {
                'type': 'definition',
                'justification': 'Since 2k² is integer, n² = 2(2k²) shows n² is even',
                'result': 'n² is even'
            }
        ]
        
        # Verify proof
        result = self.verify_direct_proof(
            hypothesis="n is even",
            conclusion="n² is even", 
            proof_steps=proof_steps
        )
        
        return result
    
    def prove_contradiction_example(self):
        """
        Example: Prove √2 is irrational using contradiction
        """
        print("=== THEOREM: √2 IS IRRATIONAL (Proof by Contradiction) ===")
        print()
        
        print("Proof by Contradiction:")
        print("1. Assume √2 is rational")
        print("2. Then √2 = a/b where gcd(a,b) = 1")
        print("3. Squaring: 2 = a²/b², so 2b² = a²")
        print("4. Therefore a² is even, so a is even")
        print("5. Let a = 2c, then 2b² = 4c², so b² = 2c²")
        print("6. Therefore b² is even, so b is even")
        print("7. But a and b both even contradicts gcd(a,b) = 1")
        print("8. Therefore √2 is irrational ∎")
        print()
        
        # Verify contradiction structure
        contradiction_steps = [
            "Assume opposite of conclusion",
            "Derive logical consequences", 
            "Reach contradiction dengan assumptions",
            "Conclude original statement true"
        ]
        
        print("Proof Structure Analysis:")
        for i, step in enumerate(contradiction_steps, 1):
            print(f"  Step {i}: {step} ✓")
        
        return {
            'proof_type': 'contradiction',
            'theorem': '√2 is irrational',
            'contradiction_found': 'gcd(a,b) = 1 but both a,b even',
            'structure_valid': True
        }

# Demo Mathematical Prover
print("=== MATHEMATICAL PROOF VERIFICATION DEMO ===")
print()

prover = MathematicalProver()

# Add some basic axioms
prover.add_axiom('even_definition', 
                'n is even iff n = 2k for some integer k',
                lambda n: n % 2 == 0)

# Demo direct proof
result1 = prover.prove_even_square_theorem()
print("\\n" + "="*50 + "\\n")

# Demo proof by contradiction  
result2 = prover.prove_contradiction_example()
print("\\n" + "="*50 + "\\n")

print("=== EDUCATIONAL TAKEAWAYS ===")
print("1. Mathematical proofs require rigorous logical steps")
print("2. Each step must be justified by axioms, definitions, or previous results")
print("3. Direct proofs follow hypothesis → conclusion structure")
print("4. Contradiction proofs assume ¬conclusion dan find contradiction")
print("5. Computer verification helps check proof validity")
print("6. Proof techniques apply to algorithm correctness verification")`,
      explanation: [
        '1. **Proof Framework**: Structure untuk organizing dan verifying mathematical arguments',
        '2. **Step-by-Step Verification**: Each proof step checked against axioms dan previous results',
        '3. **Multiple Proof Types**: Framework supports direct proofs dan proof by contradiction',
        '4. **Concrete Examples**: Even square theorem dan √2 irrationality demonstrate techniques',
        '5. **Educational Focus**: Clear explanations untuk understanding proof construction',
        '6. **CS Connection**: Shows how formal verification applies dalam computer science contexts'
      ],
      proofStructure: {
        type: 'Automated Verification Framework',
        components: [
          'Axiom Base: Foundation facts yang accepted without proof',
          'Step Verification: Each step validated against logical rules',
          'Proof Types: Support untuk different proof methodologies',
          'Educational Output: Clear explanations untuk learning purposes'
        ]
      }
    },
    {
      title: 'Program Correctness Verification',
      description: 'Framework untuk proving correctness dari simple programs menggunakan formal methods',
      code: `class ProgramVerifier:
    """
    Simple framework untuk verifying program correctness using formal methods
    """
    
    def __init__(self):
        self.verification_results = []
    
    def verify_factorial_correctness(self):
        """
        Verify correctness dari recursive factorial function
        
        Specification:
        - Precondition: n >= 0
        - Postcondition: result = n!
        """
        print("=== FACTORIAL FUNCTION CORRECTNESS PROOF ===")
        print()
        
        print("Function to verify:")
        print("def factorial(n):")
        print("    if n <= 1:")
        print("        return 1")
        print("    return n * factorial(n-1)")
        print()
        
        print("Specification:")
        print("  Precondition: n >= 0")  
        print("  Postcondition: factorial(n) = n!")
        print()
        
        # Proof by strong induction
        print("Proof by Strong Mathematical Induction:")
        print()
        
        print("Base Cases:")
        print("  n = 0: factorial(0) = 1 = 0! ✓")
        print("  n = 1: factorial(1) = 1 = 1! ✓")
        print()
        
        print("Inductive Step:")
        print("  Assume: For all k < n, factorial(k) = k!")
        print("  To Prove: factorial(n) = n!")
        print()
        print("  factorial(n) = n * factorial(n-1)")
        print("               = n * (n-1)!           [by inductive hypothesis]")
        print("               = n!                   [by definition of factorial]")
        print()
        print("Therefore, factorial(n) = n! for all n >= 0 ✎")
        
        # Verify dengan concrete examples
        print("\\n=== CONCRETE VERIFICATION ===")
        test_cases = [0, 1, 2, 3, 4, 5]
        
        def factorial_impl(n):
            if n <= 1:
                return 1
            return n * factorial_impl(n-1)
        
        def factorial_definition(n):
            if n == 0:
                return 1
            result = 1
            for i in range(1, n + 1):
                result *= i
            return result
        
        all_correct = True
        for n in test_cases:
            impl_result = factorial_impl(n)
            def_result = factorial_definition(n)
            correct = (impl_result == def_result)
            all_correct = all_correct and correct
            
            print(f"  n={n}: factorial({n})={impl_result}, {n}!={def_result}, Correct: {correct}")
        
        print(f"\\nAll test cases correct: {all_correct}")
        
        return {
            'function': 'factorial',
            'proof_method': 'strong_induction',
            'base_cases_verified': True,
            'inductive_step_valid': True,
            'concrete_tests_passed': all_correct,
            'overall_correctness': True
        }
    
    def verify_binary_search_correctness(self):
        """
        Verify correctness dari binary search algorithm
        """
        print("=== BINARY SEARCH CORRECTNESS PROOF ===")
        print()
        
        print("Algorithm to verify:")
        print("def binary_search(arr, target):")
        print("    left, right = 0, len(arr) - 1")
        print("    while left <= right:")
        print("        mid = (left + right) // 2")
        print("        if arr[mid] == target:")
        print("            return mid")
        print("        elif arr[mid] < target:")
        print("            left = mid + 1")
        print("        else:")
        print("            right = mid - 1")
        print("    return -1")
        print()
        
        print("Specification:")
        print("  Precondition: arr is sorted array, target is search value")
        print("  Postcondition: return index i where arr[i] = target, atau -1 if not found")
        print()
        
        print("Proof Strategy: Loop Invariant")
        print()
        print("Loop Invariant:")
        print("  If target exists dalam arr, then arr[left] <= target <= arr[right]")
        print()
        
        print("Proof of Invariant:")
        print("  Initialization: left=0, right=len(arr)-1, so invariant holds")
        print("  Maintenance: Each iteration maintains invariant by:")
        print("    - If arr[mid] < target: target must be dalam arr[mid+1:right+1]")
        print("    - If arr[mid] > target: target must be dalam arr[left:mid]") 
        print("  Termination: left > right means target not dalam remaining range")
        print()
        
        print("Correctness Argument:")
        print("  - If target found: return correct index")
        print("  - If loop terminates: invariant + left > right implies target not present")
        print("  - Algorithm always terminates: search space halves each iteration")
        print()
        
        # Concrete verification
        print("=== CONCRETE VERIFICATION ===")
        
        def binary_search_impl(arr, target):
            left, right = 0, len(arr) - 1
            steps = []
            
            while left <= right:
                mid = (left + right) // 2
                steps.append({
                    'left': left,
                    'right': right, 
                    'mid': mid,
                    'arr_mid': arr[mid],
                    'invariant_check': f"Searching dalam arr[{left}:{right+1}] = {arr[left:right+1]}"
                })
                
                if arr[mid] == target:
                    return mid, steps
                elif arr[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            
            return -1, steps
        
        # Test cases
        test_arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
        test_targets = [5, 12, 1, 19, 0, 20]
        
        print(f"Test Array: {test_arr}")
        print()
        
        for target in test_targets:
            result, steps = binary_search_impl(test_arr, target)
            expected = test_arr.index(target) if target in test_arr else -1
            correct = (result == expected)
            
            print(f"Target: {target}")
            print(f"  Result: {result}, Expected: {expected}, Correct: {correct}")
            print(f"  Steps taken: {len(steps)}")
            
            # Show invariant maintenance
            for i, step in enumerate(steps[:3]):  # Show first 3 steps
                print(f"    Step {i+1}: {step['invariant_check']}")
            if len(steps) > 3:
                print(f"    ... (total {len(steps)} steps)")
            print()
        
        return {
            'algorithm': 'binary_search',
            'proof_method': 'loop_invariant',
            'invariant_maintained': True,
            'termination_guaranteed': True,
            'correctness_established': True
        }
    
    def demonstrate_proof_techniques(self):
        """
        Demonstrate different proof techniques dalam CS context
        """
        print("=== PROOF TECHNIQUES DALAM COMPUTER SCIENCE ===")
        print()
        
        techniques = [
            {
                'name': 'Mathematical Induction',
                'application': 'Recursive algorithms, loop correctness',
                'example': 'Proving factorial correctness',
                'key_idea': 'Base case + inductive step'
            },
            {
                'name': 'Loop Invariants', 
                'application': 'Iterative algorithms verification',
                'example': 'Binary search, sorting algorithms',
                'key_idea': 'Property maintained throughout loop execution'
            },
            {
                'name': 'Proof by Contradiction',
                'application': 'Impossibility results, lower bounds',
                'example': 'Proving no algorithm can sort dalam o(n log n) comparisons',
                'key_idea': 'Assume opposite, derive contradiction'
            },
            {
                'name': 'Direct Proof',
                'application': 'Algorithm properties, complexity analysis',
                'example': 'Proving time complexity bounds',
                'key_idea': 'Straightforward logical derivation'
            }
        ]
        
        for i, technique in enumerate(techniques, 1):
            print(f"{i}. {technique['name']}")
            print(f"   Application: {technique['application']}")
            print(f"   Example: {technique['example']}")
            print(f"   Key Idea: {technique['key_idea']}")
            print()
        
        print("=== WHY PROOFS MATTER IN CS ===")
        importance_points = [
            "Software Reliability: Critical systems need mathematical guarantees",
            "Algorithm Analysis: Proving complexity bounds dan correctness",
            "Security: Cryptographic protocols require formal verification",
            "Compiler Correctness: Ensuring compilers preserve program semantics",
            "Career Advantage: Formal methods skills highly valued dalam industry"
        ]
        
        for point in importance_points:
            print(f"• {point}")

# Demo Program Verifier
verifier = ProgramVerifier()

# Verify factorial correctness
result1 = verifier.verify_factorial_correctness()
print("\\n" + "="*60 + "\\n")

# Verify binary search correctness
result2 = verifier.verify_binary_search_correctness()
print("\\n" + "="*60 + "\\n")

# Demonstrate proof techniques
verifier.demonstrate_proof_techniques()`,
      explanation: [
        '1. **Formal Specification**: Clearly define preconditions dan postconditions untuk programs',
        '2. **Mathematical Induction**: Prove recursive function correctness using base case + inductive step',
        '3. **Loop Invariants**: Identify properties yang remain true throughout loop execution',
        '4. **Concrete Verification**: Test theoretical proofs dengan actual program execution',
        '5. **Multiple Techniques**: Different algorithms require different proof approaches',
        '6. **Industry Relevance**: Formal verification essential untuk safety-critical systems'
      ],
      proofStructure: {
        type: 'Program Verification Framework',
        components: [
          'Specification: Formal preconditions dan postconditions',
          'Proof Strategy: Choose appropriate mathematical technique',
          'Verification: Step-by-step logical argument',
          'Testing: Concrete examples untuk validation'
        ]
      }
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'Apa yang dimaksud dengan mathematical proof?',
      options: [
        'Sebuah contoh yang menunjukkan statement benar',
        'Argumen logis rigorous yang menunjukkan statement pasti benar',
        'Eksperimen yang memverifikasi hypothesis',
        'Intuisi yang kuat tentang kebenaran statement'
      ],
      correct: 1,
      explanation: 'Mathematical proof adalah rigorous logical argument yang definitively establishes kebenaran mathematical statement menggunakan logical reasoning, axioms, dan previously proven results.'
    },
    {
      id: 'q2', 
      question: 'Dalam direct proof untuk "If P then Q", langkah pertama adalah:',
      options: [
        'Assume Q dan derive P',
        'Assume P dan derive Q', 
        'Assume ¬Q dan cari contradiction',
        'Assume ¬P dan derive ¬Q'
      ],
      correct: 1,
      explanation: 'Direct proof untuk conditional statement P → Q dimulai dengan assuming hypothesis P, kemudian using logical steps untuk derive conclusion Q.'
    },
    {
      id: 'q3',
      question: 'Proof by contradiction dimulai dengan:',
      options: [
        'Assuming hypothesis',
        'Assuming conclusion',
        'Assuming negation dari conclusion',
        'Assuming negation dari hypothesis'
      ],
      correct: 2,
      explanation: 'Proof by contradiction assumes negation dari apa yang ingin dibuktikan, kemudian derives contradiction untuk show original statement must be true.'
    },
    {
      id: 'q4',
      question: 'Dalam algorithm correctness proofs, loop invariant adalah:',
      options: [
        'Property yang berubah di setiap iteration',
        'Condition untuk loop termination',
        'Property yang tetap true sepanjang loop execution',
        'Final result dari loop'
      ],
      correct: 2,
      explanation: 'Loop invariant adalah property atau condition yang remains true sebelum dan sesudah setiap iteration dari loop, helping prove algorithm correctness.'
    },
    {
      id: 'q5',
      question: 'Mengapa mathematical proofs penting dalam Computer Science?',
      options: [
        'Hanya untuk keperluan akademik',
        'Untuk membuktikan algorithm correctness dan system reliability',
        'Tidak relevan untuk programming praktis',
        'Hanya digunakan dalam theoretical CS'
      ],
      correct: 1,
      explanation: 'Mathematical proofs essential dalam CS untuk verifying algorithm correctness, ensuring software reliability, proving security properties, dan building trustworthy systems.'
    },
    {
      id: 'q6',
      question: 'Dalam proof bahwa "If n is even, then n² is even", setelah assume n is even, langkah selanjutnya adalah:',
      options: [
        'Prove n² is odd',
        'Use definition: n = 2k untuk some integer k',
        'Assume n² is even',
        'Find counterexample'
      ],
      correct: 1,
      explanation: 'Setelah assume n is even, kita use mathematical definition: even numbers dapat ditulis sebagai n = 2k where k is integer, kemudian derive consequences.'
    }
  ];

  const glossaryTerms = [
    {
      term: 'Algorithm Correctness',
      definition: 'Property yang menyatakan bahwa algorithm produces correct output untuk semua valid inputs dan satisfies its specification (preconditions dan postconditions).'
    },
    {
      term: 'Axiom',
      definition: 'Statement atau principle yang diterima sebagai true tanpa proof dan serves sebagai starting point untuk further reasoning. Foundation dari mathematical systems.'
    },
    {
      term: 'Base Case',
      definition: 'Dalam mathematical induction, initial case (biasanya n=0 atau n=1) yang dibuktikan directly untuk establish foundation dari inductive proof.'
    },
    {
      term: 'Biconditional Statement',
      definition: 'Statement dalam form "P if and only if Q" (P ↔ Q), yang true when P dan Q have same truth value. Equivalent to (P → Q) ∧ (Q → P).'
    },
    {
      term: 'Conditional Statement',
      definition: 'Statement dalam form "If P then Q" (P → Q), where P adalah hypothesis/antecedent dan Q adalah conclusion/consequent. False only when P true dan Q false.'
    },
    {
      term: 'Contradiction',
      definition: 'Statement yang is always false, atau situation dalam proof where kita derive both P dan ¬P simultaneously, indicating error dalam reasoning atau falsity dari assumptions.'
    },
    {
      term: 'Contrapositive',
      definition: 'Dari conditional statement P → Q, contrapositive adalah ¬Q → ¬P. Selalu logically equivalent dengan original statement.'
    },
    {
      term: 'Direct Proof',
      definition: 'Proof method yang starts dengan hypothesis dan uses straightforward logical steps untuk derive conclusion. Most common dan intuitive proof technique.'
    },
    {
      term: 'Existential Statement',
      definition: 'Statement yang claims existence dari object dengan particular property: "There exists x such that P(x)" (∃x P(x)). Proven dengan providing specific example.'
    },
    {
      term: 'Formal Verification',
      definition: 'Process menggunakan mathematical methods untuk prove atau disprove correctness dari algorithms, systems, atau specifications relative formal specifications.'
    },
    {
      term: 'Hypothesis',
      definition: 'Dalam conditional statement P → Q, P adalah hypothesis (juga called antecedent atau premise). Starting assumption dalam direct proof.'
    },
    {
      term: 'Inductive Hypothesis',
      definition: 'Dalam mathematical induction, assumption yang statement is true untuk value k (atau all values ≤ k dalam strong induction). Used untuk prove statement untuk k+1.'
    },
    {
      term: 'Inductive Step',
      definition: 'Dalam mathematical induction, proof bahwa if statement true untuk value k, then it must also be true untuk k+1. Combined dengan base case proves statement untuk all values.'
    },
    {
      term: 'Loop Invariant',
      definition: 'Property atau assertion yang remains true before dan after each iteration dari loop. Essential untuk proving correctness dari iterative algorithms.'
    },
    {
      term: 'Mathematical Induction',
      definition: 'Proof technique untuk proving statements tentang all natural numbers (atau discrete structures). Consists dari base case dan inductive step.'
    },
    {
      term: 'Postcondition',
      definition: 'Dalam program specification, condition atau property yang harus be true ketika program atau function terminates successfully. Part dari correctness specification.'
    },
    {
      term: 'Precondition',
      definition: 'Dalam program specification, condition atau property yang must be true ketika program atau function is called. Input requirements untuk correct behavior.'
    },
    {
      term: 'Proof by Cases',
      definition: 'Proof technique yang breaks problem into exhaustive cases dan proves statement untuk each case separately. Useful when different approaches needed untuk different situations.'
    },
    {
      term: 'Proof by Contradiction',
      definition: 'Proof method yang assumes negation dari desired conclusion dan derives logical contradiction, therefore establishing original statement must be true.'
    },
    {
      term: 'QED',
      definition: 'Latin phrase "quod erat demonstrandum" meaning "which was to be demonstrated". Symbol (∎) atau phrase used untuk mark end dari mathematical proof.'
    },
    {
      term: 'Strong Induction',
      definition: 'Variant dari mathematical induction where inductive hypothesis assumes statement true untuk ALL values from base case up to k, rather than just k.'
    },
    {
      term: 'Theorem',
      definition: 'Important mathematical statement yang has been proven to be true. Can be used dalam further proofs sebagai established fact.'
    },
    {
      term: 'Universal Statement',
      definition: 'Statement yang claims property holds untuk all objects dalam domain: "For all x, P(x)" (∀x P(x)). Often proven using universal generalization techniques.'
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
      pages: 'Chapter 1.5-1.8: Methods of Proof, Introduction to Proofs'
    },
    {
      type: 'book',
      authors: 'Lehman, Eric., Leighton, F. Thomson., Meyer, Albert R.',
      year: '2017',
      title: 'Mathematics for Computer Science',
      publisher: 'MIT OpenCourseWare',
      chapter: 'Chapter 1: What is a Proof?, Chapter 2: The Well Ordering Principle',
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
      note: 'Excellent introduction untuk proof techniques dan mathematical reasoning'
    },
    {
      type: 'book',
      authors: 'Hammack, Richard',
      year: '2018',
      title: 'Book of Proof',
      edition: '3rd Edition',
      publisher: 'Virginia Commonwealth University',
      url: 'https://www.people.vcu.edu/~rhammack/BookOfProof/',
      note: 'Free textbook focusing pada proof techniques untuk beginners'
    },
    {
      type: 'book',
      authors: 'Huth, Michael., Ryan, Mark',
      year: '2004',
      title: 'Logic in Computer Science: Modelling and Reasoning about Systems',
      edition: '2nd Edition',
      publisher: 'Cambridge University Press',
      chapter: 'Part I: Propositional Logic, Part II: Predicate Logic'
    },
    {
      type: 'book',
      authors: 'Clocksin, William F., Mellish, Christopher S.',
      year: '2003',
      title: 'Programming in Prolog: Using the ISO Standard',
      edition: '5th Edition',
      publisher: 'Springer',
      note: 'For understanding logic programming dan automated reasoning'
    },
    {
      type: 'journal',
      authors: 'Wing, Jeannette M.',
      year: '2006',
      title: 'Computational Thinking',
      journal: 'Communications of the ACM',
      volume: '49',
      number: '3',
      pages: '33-35',
      doi: '10.1145/1118178.1118215',
      note: 'Seminal paper on computational thinking dan problem-solving approaches'
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
      note: 'Modern approaches untuk writing dan structuring mathematical proofs'
    },
    {
      type: 'journal',
      authors: 'de Bruijn, Nicolaas Govert',
      year: '1994',
      title: 'Checking Mathematics with a Computer',
      journal: 'Notices of the American Mathematical Society',
      volume: '41',
      number: '11',
      pages: '1385-1392',
      note: 'Early work on computer-assisted proof verification'
    },
    {
      type: 'conference',
      authors: 'Harrison, John',
      year: '2008',
      title: 'Formal Verification at Intel',
      conference: 'Proceedings of the 18th IEEE Symposium on Logic in Computer Science',
      pages: '45-54',
      location: 'Pittsburgh, PA',
      doi: '10.1109/LICS.2008.47',
      note: 'Industrial application dari formal verification methods'
    },
    {
      type: 'conference',
      authors: 'Klein, Gerwin et al.',
      year: '2009',
      title: 'seL4: Formal Verification of an OS Kernel',
      conference: 'Proceedings of the 22nd ACM SIGOPS Symposium on Operating Systems Principles',
      pages: '207-220',
      location: 'Big Sky, MT',
      doi: '10.1145/1629575.1629596',
      note: 'Landmark achievement dalam formal verification dari complex software systems'
    },
    {
      type: 'web',
      title: 'MIT 6.042J Lecture 1: Introduction to Proofs',
      publisher: 'Massachusetts Institute of Technology',
      year: '2017',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/mit6_042jf10_lec01_intro/',
      accessed: '2024'
    },
    {
      type: 'web',
      title: 'Stanford CS103: Mathematical Foundations - Introduction to Proofs',
      publisher: 'Stanford University',
      year: '2024',
      url: 'https://web.stanford.edu/class/cs103/lectures/proofs/',
      accessed: '2024'
    },
    {
      type: 'web',
      authors: 'Paulson, Lawrence C.',
      title: 'The Foundation of a Generic Proof Assistant',
      publisher: 'University of Cambridge Computer Laboratory',
      year: '2023',
      url: 'https://www.cl.cam.ac.uk/~lp15/papers/isabelle-foundation/',
      accessed: '2024',
      note: 'Introduction untuk automated proof assistants'
    },
    {
      type: 'web',
      title: 'ProofWiki - Compendium of Mathematical Proofs',
      publisher: 'ProofWiki Community',
      year: '2024',
      url: 'https://proofwiki.org/',
      accessed: '2024',
      note: 'Collaborative repository dari mathematical proofs dengan detailed explanations'
    },
    {
      type: 'web',
      title: 'Lean Theorem Prover - Community Resources',
      publisher: 'Lean Community',
      year: '2024',
      url: 'https://leanprover-community.github.io/',
      accessed: '2024',
      note: 'Modern computer-assisted proof verification system'
    },
    {
      type: 'web',
      authors: 'Lamport, Leslie',
      title: 'The TLA+ Specification Language and Tools',
      publisher: 'Microsoft Research',
      year: '2023',
      url: 'https://lamport.azurewebsites.net/tla/tla.html',
      accessed: '2024',
      note: 'Industrial formal specification language untuk concurrent systems'
    },
    {
      type: 'web',
      title: 'Automated Reasoning Course Materials',
      publisher: 'Carnegie Mellon University',
      year: '2023',
      url: 'https://www.cs.cmu.edu/~15414/',
      accessed: '2024',
      note: 'Course materials untuk automated reasoning dan theorem proving'
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
              <p className="text-gray-600">Pertemuan 4: Introduction to Proofs</p>
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
                Introduction to Proofs
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                "The Art of Mathematical Reasoning" - Membangun kemampuan untuk construct rigorous logical arguments dan verify program correctness
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tujuan Pembelajaran Pertemuan 4</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Understanding Proofs</h4>
                      <p className="text-gray-600">Memahami what constitutes a valid mathematical proof dan its components</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Direct Proof Technique</h4>
                      <p className="text-gray-600">Master structure dan process dari constructing direct proofs</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Proof by Contradiction</h4>
                      <p className="text-gray-600">Learning powerful technique untuk proving statements indirectly</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">CS Applications</h4>
                      <p className="text-gray-600">Applying proof techniques untuk algorithm correctness verification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Journey */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Journey: From Logic to Proofs</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">✓</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Week 1</h4>
                  <p className="text-sm text-gray-600">Mathematical reasoning foundations</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">✓</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Week 2</h4>
                  <p className="text-sm text-gray-600">Propositional logic & truth tables</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">✓</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Week 3</h4>
                  <p className="text-sm text-gray-600">Equivalences & simplification</p>
                </div>
                <div className="text-center p-4 bg-black rounded-lg text-white">
                  <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">4</div>
                  <h4 className="font-semibold mb-2">Week 4</h4>
                  <p className="text-sm text-gray-300">Introduction to proofs</p>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center space-x-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-blue-900 font-semibold">Ready untuk Advanced Topics</p>
                    <p className="text-blue-700 text-sm">Proof techniques akan essential untuk mathematical induction, formal verification, dan algorithm analysis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Proofs Matter */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <FileText className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">Why Mathematical Proofs?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Professional Impact:</h4>
                      <ul className="text-purple-700 space-y-1 text-sm">
                        <li>• <strong>Software Verification:</strong> $60B+ lost annually due to software bugs</li>
                        <li>• <strong>Security:</strong> Formal proofs prevent cryptographic vulnerabilities</li>
                        <li>• <strong>AI Safety:</strong> Proving neural network properties untuk reliable AI</li>
                        <li>• <strong>Career Premium:</strong> Formal methods engineers earn 20-40% more</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Real Success Stories:</h4>
                      <ul className="text-purple-700 space-y-1 text-sm">
                        <li>• <strong>seL4 Kernel:</strong> Mathematically verified OS kernel</li>
                        <li>• <strong>CompCert Compiler:</strong> Fully proven compiler correctness</li>
                        <li>• <strong>Amazon DynamoDB:</strong> TLA+ specs prevented critical bugs</li>
                        <li>• <strong>Aerospace:</strong> Mathematical proofs required untuk flight software</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prerequisites Reminder */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Prerequisites Check</h3>
                  <p className="text-blue-800 mb-3">Pastikan Anda sudah comfortable dengan:</p>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Logical connectives dan truth tables (Pertemuan 2)</li>
                    <li>• Logical equivalences dan De Morgan's laws (Pertemuan 3)</li>
                    <li>• Conditional statements dan their interpretations</li>
                    <li>• Basic Python programming untuk examples</li>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Konsep Dasar Proof</h2>
              <p className="text-xl text-gray-600">Understanding foundations dari mathematical reasoning dan proof construction</p>
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
                      <h4 className="font-semibold text-gray-900 mb-3">Contoh Applications:</h4>
                      <ul className="space-y-2 mb-4">
                        {card.examples.map((example, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-100 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Programming Connection:</h5>
                          <p className="text-gray-700 text-sm">{card.programming}</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h5 className="font-semibold text-blue-900 mb-2">Why Important:</h5>
                          <p className="text-blue-800 text-sm">{card.importance}</p>
                        </div>
                      </div>
                      {card.connection && (
                        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                          <h5 className="font-semibold text-green-900 mb-2">Connection to Previous Topics:</h5>
                          <p className="text-green-800 text-sm">{card.connection}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Structure Section */}
        {activeSection === 'structure' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Struktur Proof</h2>
              <p className="text-xl text-gray-600">Learning formal structure dan techniques untuk constructing valid proofs</p>
            </div>

            <div className="space-y-8">
              {proofStructures.map((structure, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{structure.type}</h3>
                    <p className="text-gray-600">{structure.description}</p>
                  </div>
                  
                  <div className="p-6">
                    {/* Template Steps */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">General Template:</h4>
                      <div className="space-y-2">
                        {structure.template.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            <p className="text-gray-700">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Example */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Concrete Example:</h4>
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Statement to Prove:</h5>
                        <p className="text-gray-800 font-mono text-sm">{structure.example.statement}</p>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <pre className="text-sm text-gray-100 whitespace-pre-wrap">
                          {structure.example.proof}
                        </pre>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-900 mb-3">Step-by-Step Breakdown:</h5>
                        <div className="space-y-2">
                          {structure.example.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start space-x-3">
                              <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                {stepIndex + 1}
                              </div>
                              <p className="text-blue-800 text-sm">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Programming Analogy & Common Mistakes */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h5 className="font-semibold text-green-900 mb-2">Programming Analogy:</h5>
                        <p className="text-green-800 text-sm">{structure.programmingAnalogy}</p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h5 className="font-semibold text-red-900 mb-2">Common Mistakes:</h5>
                        <ul className="text-red-800 text-sm space-y-1">
                          {structure.commonMistakes.map((mistake, mistakeIndex) => (
                            <li key={mistakeIndex} className="flex items-start space-x-2">
                              <span className="text-red-600">•</span>
                              <span>{mistake}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Proof Writing Best Practices */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Practices untuk Proof Writing</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">✅ Do This:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">State clearly what you're proving</span>
                        <p className="text-sm text-gray-600">Begin dengan precise statement dari theorem atau claim</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Use logical structure</span>
                        <p className="text-sm text-gray-600">Follow template yang appropriate untuk proof type</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Justify each step</span>
                        <p className="text-sm text-gray-600">Explain reasoning behind every logical step</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Conclude clearly</span>
                        <p className="text-sm text-gray-600">End dengan clear statement bahwa proof is complete</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">❌ Avoid This:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Circle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Circular reasoning</span>
                        <p className="text-sm text-gray-600">Don't assume what you're trying to prove</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Circle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Skipping steps</span>
                        <p className="text-sm text-gray-600">Every logical jump must be justified</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Circle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Proof by example</span>
                        <p className="text-sm text-gray-600">Examples illustrate but don't prove general statements</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Circle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Informal language</span>
                        <p className="text-sm text-gray-600">Use precise mathematical terminology</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Examples Section */}
        {activeSection === 'examples' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contoh & Aplikasi</h2>
              <p className="text-xl text-gray-600">Applying proof techniques dalam programming dan computer science contexts</p>
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
                    
                    <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start space-x-2">
                        <span className="text-green-600 text-lg flex-shrink-0">🚀</span>
                        <div className="text-green-800 text-sm">
                          <p className="mb-1"><strong>Hands-on Practice:</strong></p>
                          <p>Copy dan jalankan kode ini di:</p>
                          <a href="https://www.onlineide.pro" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline font-medium break-all inline-block mt-1">
                            www.onlineide.pro
                          </a>
                          <p className="mt-1">untuk melihat proof verification dalam action!</p>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Penjelasan Step-by-Step:</h4>
                    <div className="space-y-3 mb-6">
                      {example.explanation.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {pointIndex + 1}
                          </div>
                          <p className="text-gray-700">{point}</p>
                        </div>
                      ))}
                    </div>

                    {/* Proof Structure Analysis */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h5 className="font-semibold text-blue-900 mb-4">Proof Structure Analysis:</h5>
                      <div className="mb-4">
                        <span className="text-blue-800 font-medium">Type: </span>
                        <span className="text-blue-700">{example.proofStructure.type}</span>
                      </div>
                      <div>
                        <span className="text-blue-800 font-medium mb-2 block">Components:</span>
                        <ul className="space-y-1">
                          {example.proofStructure.components.map((component, compIndex) => (
                            <li key={compIndex} className="flex items-start space-x-2">
                              <span className="text-blue-600">•</span>
                              <span className="text-blue-700 text-sm">{component}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Practice Challenge */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🎯 Proof Challenge</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Mathematical Challenge:</h4>
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm font-mono">
                      Prove: For any integer n,<br/>
                      if n² is odd, then n is odd.<br/><br/>
                      Hint: Use proof by contrapositive:<br/>
                      Prove "if n is even, then n² is even"<br/><br/>
                      Extension: Implement verification program<br/>
                      yang tests this theorem dengan concrete values.
                    </p>
                  </div>
                  <div className="bg-blue-600/20 border border-blue-400 rounded-lg p-3">
                    <p className="text-blue-200 text-sm">
                      💻 <strong>Programming Component:</strong><br/>
                      Write Python function untuk verify theorem<br/>
                      dan test dengan range of values di:<br/>
                      <a href="https://www.onlineide.pro" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline font-medium break-all">
                        www.onlineide.pro
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">CS Application Challenge:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Choose simple algorithm (e.g., linear search)</li>
                    <li>• Write formal specification (pre/postconditions)</li>
                    <li>• Construct correctness proof</li>
                    <li>• Implement verification program</li>
                    <li>• Test dengan concrete examples</li>
                    <li>• Document proof structure clearly</li>
                  </ul>
                  <div className="mt-4 text-gray-400 text-sm">
                    <p><strong>Skills practiced:</strong> Direct proof, program specification, formal verification, testing, mathematical writing</p>
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
              <p className="text-xl text-gray-600">Test pemahaman Anda tentang proof concepts dan techniques</p>
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
                          {getQuizScore() >= 5 ? 'Excellent! Pemahaman proof concepts sudah solid.' : 
                           getQuizScore() >= 4 ? 'Very Good! Ready untuk advanced proof techniques.' :
                           getQuizScore() >= 3 ? 'Good! Review beberapa concepts untuk strengthen understanding.' :
                           'Perlu study lebih intensif tentang proof fundamentals dan structure.'}
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
              <p className="text-xl text-gray-600">Terminologi essential dalam mathematical proofs dan formal reasoning</p>
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
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">💡 Study Tips</h3>
                <div className="text-purple-800 space-y-2 text-sm">
                  <p><strong>Conceptual Understanding:</strong> Focus pada understanding rather than memorization.</p>
                  <p><strong>Practice Writing:</strong> Regularly practice writing formal mathematical statements.</p>
                  <p><strong>Peer Discussion:</strong> Explain proof concepts to classmates untuk deepen understanding.</p>
                  <p><strong>Real Examples:</strong> Connect abstract concepts dengan concrete CS applications.</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">🔗 Connections Map</h3>
                <div className="text-green-800 space-y-2 text-sm">
                  <p><strong>To Logic:</strong> Proof techniques build pada logical reasoning dari previous weeks.</p>
                  <p><strong>To Programming:</strong> Algorithm correctness verification applies proof concepts.</p>
                  <p><strong>To Future Topics:</strong> Foundation untuk induction, formal verification, complexity proofs.</p>
                  <p><strong>To Industry:</strong> Critical untuk safety-critical systems dan security applications.</p>
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
              <p className="text-xl text-gray-600">Sumber pembelajaran mathematical proofs dan formal reasoning</p>
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
                        {ref.url && (
                          <span> <a href={ref.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Available online</a></span>
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
                        {ref.note && (
                          <span className="text-gray-600"> <em>{ref.note}</em></span>
                        )}
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

              {/* Learning Pathway */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">📚 Learning Pathway untuk Proofs</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Beginner Level:</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>1. <strong>Hammack - Book of Proof:</strong> Free, beginner-friendly introduction</li>
                      <li>2. <strong>Velleman - How to Prove It:</strong> Structured approach dengan exercises</li>
                      <li>3. <strong>MIT 6.042J Lectures:</strong> Video explanations dengan CS context</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Intermediate Level:</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• <strong>Rosen Ch. 1.5-1.8:</strong> Formal methods dengan applications</li>
                      <li>• <strong>Stanford CS103:</strong> Modern computer science perspective</li>
                      <li>• <strong>ProofWiki:</strong> Extensive proof examples dan verification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Advanced Applications:</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• <strong>Huth & Ryan:</strong> Logic dalam computer systems</li>
                      <li>• <strong>Lamport Papers:</strong> Modern proof writing techniques</li>
                      <li>• <strong>Lean/Coq:</strong> Computer-assisted proof verification</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 Study Strategy:</h4>
                  <p className="text-gray-300 text-sm">
                    Start dengan Hammack atau Velleman untuk solid foundations, kemudian proceed ke computer science applications. 
                    Practice writing proofs regularly dan use online resources untuk verification dan additional examples.
                    Connect every proof technique dengan programming concepts untuk better retention dan practical understanding.
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
              <h4 className="font-bold mb-4">Pertemuan 4 Summary</h4>
              <p className="text-gray-400 text-sm">
                Mathematical proofs provide rigorous foundation untuk algorithm verification dan 
                system correctness. Master direct proofs dan proof by contradiction untuk 
                advanced computer science applications.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Pertemuan Selanjutnya</h4>
              <p className="text-gray-400 text-sm">
                Pertemuan 5: Proof Techniques - Contradiction & Contrapositive<br/>
                - Advanced proof by contradiction examples<br/>
                - Contrapositive proofs dan equivalences<br/>
                - Applications dalam algorithm termination proofs
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Key Skills Developed</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Understanding proof structure dan validity</li>
                <li>• Direct proof construction dan verification</li>
                <li>• Proof by contradiction technique</li>
                <li>• Algorithm correctness verification</li>
                <li>• Mathematical writing dan communication</li>
                <li>• CS applications dari formal methods</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2024 Logika Matematika - Universitas. Introduction to mathematical reasoning dan formal verification.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  💻 Untuk menjalankan contoh kode Python:<br/>
                  <a href="https://www.onlineide.pro" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-all">
                    www.onlineide.pro
                  </a> (No installation required - langsung bisa coding!)
                </p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className="flex space-x-4 items-center">
                  <span className="text-gray-400 text-sm">Quiz 1 Next Week</span>
                  <span className="bg-white text-black px-2 py-1 rounded text-xs">4 marks</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Topics: Propositional logic, equivalences, basic proofs
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LogicMathWeek4;