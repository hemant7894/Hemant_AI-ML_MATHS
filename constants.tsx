
import React from 'react';
import type { Subject } from './types.ts';

// --- Icon Components ---

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 14.5c.69 0 1.32-.21 1.84-.58a4.5 4.5 0 002.32-6.84 4.5 4.5 0 00-6.84 2.32" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5c-.69 0-1.32.21-1.84.58a4.5 4.5 0 01-2.32 6.84 4.5 4.5 0 016.84-2.32" />
  </svg>
);

const PythonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20.5c-5-2-7-7-7-11.5C3 5.42 6.42 2 10.5 2s7.5 3.42 7.5 7.5c0 2.76-1.12 5.26-2.93 7.07" />
    </svg>
);


const CppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h-4m4 0h4m-4 0V8m0 4v4" />
  </svg>
);


const MathIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 10H6M18 14H6M14 6L10 18" />
  </svg>
);

// --- Subjects Constant ---

export const SUBJECTS: Subject[] = [
  {
    id: 'ai-ml',
    name: 'AI / ML',
    description: 'Explore concepts in Artificial Intelligence and Machine Learning, from neural networks to LLMs.',
    icon: <BrainIcon />,
    syllabus: [
        'Introduction to AI & ML: History, types of ML, applications.',
        'Supervised Learning: Linear & Logistic Regression, Decision Trees, Random Forest, SVM.',
        'Unsupervised Learning: K-Means Clustering, Hierarchical Clustering, PCA for dimensionality reduction.',
        'Deep Learning Fundamentals: Neural Networks, Activation Functions, Backpropagation, Gradient Descent.',
        'Convolutional Neural Networks (CNNs): Architectures (LeNet, AlexNet), applications in image recognition.',
        'Recurrent Neural Networks (RNNs): LSTMs, GRUs, applications in sequence data and NLP.',
        'Transformers and Large Language Models (LLMs): Attention mechanism, BERT, GPT architecture.',
        'Model Evaluation & Deployment: Cross-validation, metrics (Accuracy, Precision, Recall), deploying models with Flask/Docker.',
    ],
    systemInstruction: 'You are an expert tutor in AI and Machine Learning. Your name is "Expert Tutor". You have over 10 years of teaching experience. Your goal is to explain complex concepts in simple terms, provide code examples, and help students learn effectively. Be friendly, encouraging, and patient.',
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Master the Python programming language, from basic syntax to advanced data structures.',
    icon: <PythonIcon />,
    syllabus: [
        'Python Basics: Variables, Data Types (int, float, string, boolean), and Operators (arithmetic, comparison, logical).',
        'Control Flow: If-elif-else statements, for loops, while loops, break, and continue.',
        'Functions: Defining functions, arguments, return values, scope, and lambda functions.',
        'Data Structures: Lists (slicing, methods), Tuples, Dictionaries, and Sets.',
        'Object-Oriented Programming (OOP): Classes, objects, inheritance, encapsulation, and polymorphism.',
        'File I/O: Reading from and writing to files, working with different file modes, using `with` statement.',
        'Modules and Libraries: Importing modules, standard library (math, datetime), introduction to popular libraries like NumPy & Pandas.',
        'Advanced Topics: Decorators, Generators, List Comprehensions, Exception Handling (try, except, finally).',
    ],
    systemInstruction: 'You are an expert Python programming tutor. Your name is "Expert Tutor". You have over 10 years of teaching experience. Your goal is to explain Python concepts from basics to advanced, provide code examples, and help with exercises. Be friendly, encouraging, and patient.',
  },
    {
    id: 'c-lang',
    name: 'C Programming',
    description: 'Learn the fundamentals of C, a cornerstone of systems programming and performance-critical applications.',
    icon: <CIcon />,
    syllabus: [
        'Introduction to C: History, compilation process (preprocessor, compiler, linker), basic structure of a C program.',
        'Variables, Data Types, and Operators: int, char, float, double, type casting, arithmetic and logical operators.',
        'Control Flow: if-else, switch-case, for, while, do-while loops, break and continue.',
        'Functions: Declaration, definition, call, pass by value vs. pass by reference, recursion.',
        'Pointers and Memory Management: Pointer basics, dereferencing, pointer arithmetic, dynamic memory allocation (malloc, calloc, free).',
        'Arrays and Strings: Declaration, initialization, multi-dimensional arrays, string handling functions.',
        'Structures and Unions: Defining custom data types, accessing members, difference between struct and union.',
        'File I/O: Opening, reading, writing, and closing files (fopen, fread, fwrite, fclose).',
    ],
    systemInstruction: 'You are an expert C programming tutor. Your name is "Expert Tutor". You have over 10 years of teaching experience. Your goal is to explain C concepts, focusing on memory management and pointers, and provide clear code examples. Be friendly, encouraging, and patient.',
  },
  {
    id: 'c-plus-plus',
    name: 'C++',
    description: 'Dive into C++, covering everything from pointers and memory management to object-oriented programming.',
    icon: <CppIcon />,
    syllabus: [
        'C++ Fundamentals: Syntax, I/O streams (cin, cout), compilation, transitioning from C.',
        'Pointers, References, and Memory Management: Smart pointers (unique_ptr, shared_ptr), new/delete operators.',
        'Object-Oriented Programming: Classes, Objects, Constructors, Destructors, Inheritance, Polymorphism, Encapsulation.',
        'The Standard Template Library (STL): Containers (vector, map, set, list), Iterators, and Algorithms.',
        'STL Algorithms: Sorting, searching, manipulating sequences (e.g., sort, find, copy, transform).',
        'Templates and Generic Programming: Function templates, class templates, reducing code duplication.',
        'Exception Handling: try, catch, throw, creating custom exceptions, Resource Acquisition Is Initialization (RAII).',
        'Modern C++ Features: Lambdas, auto, range-based for loops, move semantics (C++11 and beyond).',
    ],
    systemInstruction: 'You are an expert C++ programming tutor. Your name is "Expert Tutor". You have over 10 years of teaching experience. Your goal is to explain C++ concepts from fundamentals to advanced topics, provide code examples, and help with memory management. Be friendly, encouraging, and patient.',
  },
  {
    id: 'sat-math',
    name: 'SAT Math',
    description: 'Prepare for the SAT Math section with targeted practice and explanations of key concepts.',
    icon: <MathIcon />,
    syllabus: [
        'Heart of Algebra: Solving linear equations and inequalities, systems of linear equations, interpreting linear models.',
        'Problem Solving and Data Analysis: Ratios, rates, proportions, percentages, statistics (mean, median, mode), reading charts.',
        'Passport to Advanced Math: Quadratic equations, exponential functions, manipulating polynomials, function notation.',
        'Additional Topics: Geometry (lines, angles, triangles, circles, volume), basic trigonometry (SOHCAHTOA), complex numbers.',
        'Grid-In Questions: Strategy and best practices for free-response questions.',
        'Pacing and Time Management: Techniques for both calculator and no-calculator sections.',
        'Common Traps: Identifying and avoiding common mistakes and misleading question formats.',
        'Practice Test Reviews: In-depth analysis of official SAT practice tests to identify weaknesses.',
    ],
    systemInstruction: 'You are an expert SAT Math tutor. Your name is "Expert Tutor". You have over 10 years of teaching experience. Your goal is to explain mathematical concepts clearly, provide step-by-step solutions to problems, and offer strategies for the SAT exam. Be friendly, encouraging, and patient.',
  },
  {
    id: 'grade-math',
    name: 'Maths (7-10th)',
    description: 'Strengthen your foundations in Grade 7-10 mathematics, from algebra to geometry.',
    icon: <MathIcon />,
    syllabus: [
        'Number Systems (Grade 7-8): Integers, rational numbers, properties of numbers, exponents, and square roots.',
        'Algebraic Expressions (Grade 7-9): Linear equations in one/two variables, polynomials, factoring, identities.',
        'Geometry (Grade 7-10): Lines and angles, triangles (congruence, similarity), quadrilaterals, circles, area, and volume.',
        'Exponents and Radicals: Laws of exponents, simplifying radical expressions.',
        'Quadratic Equations (Grade 10): Standard form, solving by factoring and quadratic formula, applications.',
        'Coordinate Geometry (Grade 9-10): Distance formula, section formula, plotting points and lines on the Cartesian plane.',
        'Introduction to Trigonometry (Grade 10): Trigonometric ratios, identities, heights, and distances.',
        'Statistics and Probability (Grade 9-10): Data representation (bar graphs, histograms), measures of central tendency, basic probability.',
    ],
    systemInstruction: 'You are an expert math tutor for students in grades 7-10. Your name is "Expert Tutor". You have over 10 years of teaching experience. Your goal is to explain concepts in algebra, geometry, and trigonometry, and provide clear examples. Be friendly, encouraging, and patient.',
  }
];