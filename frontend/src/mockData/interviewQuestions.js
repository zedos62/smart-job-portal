/**
 * Curated Technical Interview Preparation & Evaluation Question Bank
 * Used by candidates to practice and recruiters to evaluate candidate competencies.
 */

export const TECHNICAL_INTERVIEW_QUESTIONS = [
  {
    id: 1,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain the JavaScript Event Loop, Microtask Queue, and Macrotask Queue.',
    conceptualOverview: 'The event loop manages synchronous and asynchronous execution. Microtasks (Promises, queueMicrotask) take priority over macrotasks (setTimeout, setInterval).',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 2,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'What is the difference between interface and type in TypeScript?',
    conceptualOverview: 'Interfaces support declaration merging and are optimal for public APIs. Types support unions, primitives, and mapped types.',
    recommendedPrepMinutes: 45,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 3,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'Explain closures in JavaScript and practical real-world use cases.',
    conceptualOverview: 'A closure is the combination of a function bundled together with references to its lexical environment. Used for data privacy, currying, and memoization.',
    recommendedPrepMinutes: 60,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 4,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'How does the prototype chain work and how does class syntax differ?',
    conceptualOverview: 'JavaScript utilizes prototypal inheritance. The class keyword is syntactical sugar over prototypes introduced in ES6.',
    recommendedPrepMinutes: 15,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 5,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'What are memory leaks in single-page JavaScript applications and how to prevent them?',
    conceptualOverview: 'Common causes include detached DOM nodes, forgotten setIntervals, unremoved event listeners, and global variables.',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 6,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'How does the Virtual DOM reconciliation algorithm (Fiber) function?',
    conceptualOverview: 'React Fiber breaks rendering work into incremental units, enabling cooperative scheduling and prioritization of user interactions.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 7,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'Compare useMemo, useCallback, and React.memo.',
    conceptualOverview: 'useMemo caches computed values, useCallback caches function instances, and React.memo prevents re-rendering when props have shallow equality.',
    recommendedPrepMinutes: 60,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 8,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'What strategies optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)?',
    conceptualOverview: 'Preloading critical fonts/images, server-side rendering, reserving layout dimensions, and code splitting routes.',
    recommendedPrepMinutes: 15,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 9,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'How do React Server Components (RSC) differ from traditional SSR?',
    conceptualOverview: 'RSC executes exclusively on the server and emits zero JavaScript bundles to the browser, while SSR executes on server and hydrates on client.',
    recommendedPrepMinutes: 30,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 10,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'Explain custom hook composition and unidirectional state patterns.',
    conceptualOverview: 'Custom hooks encapsulate stateful business logic away from presentation components, ensuring single responsibility and reusability.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 11,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'How does Node.js achieve high concurrency despite being single-threaded?',
    conceptualOverview: 'Node.js leverages libuv's multi-threaded thread pool for blocking I/O and uses a non-blocking asynchronous event loop for network operations.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 12,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'Explain database connection pooling and how to configure pool sizing under high load.',
    conceptualOverview: 'Connection pooling reuses open socket connections. Pool size must be tuned against PostgreSQL max_connections and CPU thread availability.',
    recommendedPrepMinutes: 15,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 13,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'What is the difference between horizontal and vertical scaling for relational databases?',
    conceptualOverview: 'Vertical scaling upgrades CPU/RAM, while horizontal scaling incorporates read replicas, connection poolers, and database sharding.',
    recommendedPrepMinutes: 30,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 14,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'How do you prevent SQL injection and Cross-Site Scripting (XSS)?',
    conceptualOverview: 'Use parameterized queries, sanitize user inputs, encode HTML entities, and enforce a strict Content Security Policy (CSP).',
    recommendedPrepMinutes: 45,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 15,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'Explain rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window).',
    conceptualOverview: 'Token bucket allows bursts, leaky bucket smooths throughput, and sliding window log provides precise window enforcement.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 16,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'Explain the Global Interpreter Lock (GIL) and its implications in Python.',
    conceptualOverview: 'The GIL prevents multiple native threads from executing Python bytecodes simultaneously. Concurrency for CPU-bound tasks requires multiprocessing.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 17,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'How do transformers utilize Self-Attention mechanisms?',
    conceptualOverview: 'Self-attention computes Query, Key, and Value dot products across token embeddings, capturing long-range contextual relationships.',
    recommendedPrepMinutes: 30,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 18,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does vector search work?',
    conceptualOverview: 'RAG queries external knowledge bases using semantic vector embeddings (cosine similarity) to ground LLM generations in factual data.',
    recommendedPrepMinutes: 45,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 19,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'Explain the difference between L1 (Lasso) and L2 (Ridge) regularization.',
    conceptualOverview: 'L1 produces sparse feature weights driving unhelpful coefficients to zero, while L2 penalizes large weights proportionally.',
    recommendedPrepMinutes: 60,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 20,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'How do you prevent overfitting in deep neural networks?',
    conceptualOverview: 'Techniques include dropout, weight decay, early stopping, data augmentation, and cross-validation.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 21,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'Explain the JavaScript Event Loop, Microtask Queue, and Macrotask Queue.',
    conceptualOverview: 'The event loop manages synchronous and asynchronous execution. Microtasks (Promises, queueMicrotask) take priority over macrotasks (setTimeout, setInterval).',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 22,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'What is the difference between interface and type in TypeScript?',
    conceptualOverview: 'Interfaces support declaration merging and are optimal for public APIs. Types support unions, primitives, and mapped types.',
    recommendedPrepMinutes: 45,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 23,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain closures in JavaScript and practical real-world use cases.',
    conceptualOverview: 'A closure is the combination of a function bundled together with references to its lexical environment. Used for data privacy, currying, and memoization.',
    recommendedPrepMinutes: 60,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 24,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'How does the prototype chain work and how does class syntax differ?',
    conceptualOverview: 'JavaScript utilizes prototypal inheritance. The class keyword is syntactical sugar over prototypes introduced in ES6.',
    recommendedPrepMinutes: 15,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 25,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'What are memory leaks in single-page JavaScript applications and how to prevent them?',
    conceptualOverview: 'Common causes include detached DOM nodes, forgotten setIntervals, unremoved event listeners, and global variables.',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 26,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'How does the Virtual DOM reconciliation algorithm (Fiber) function?',
    conceptualOverview: 'React Fiber breaks rendering work into incremental units, enabling cooperative scheduling and prioritization of user interactions.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 27,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'Compare useMemo, useCallback, and React.memo.',
    conceptualOverview: 'useMemo caches computed values, useCallback caches function instances, and React.memo prevents re-rendering when props have shallow equality.',
    recommendedPrepMinutes: 60,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 28,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'What strategies optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)?',
    conceptualOverview: 'Preloading critical fonts/images, server-side rendering, reserving layout dimensions, and code splitting routes.',
    recommendedPrepMinutes: 15,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 29,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'How do React Server Components (RSC) differ from traditional SSR?',
    conceptualOverview: 'RSC executes exclusively on the server and emits zero JavaScript bundles to the browser, while SSR executes on server and hydrates on client.',
    recommendedPrepMinutes: 30,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 30,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'Explain custom hook composition and unidirectional state patterns.',
    conceptualOverview: 'Custom hooks encapsulate stateful business logic away from presentation components, ensuring single responsibility and reusability.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 31,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'How does Node.js achieve high concurrency despite being single-threaded?',
    conceptualOverview: 'Node.js leverages libuv's multi-threaded thread pool for blocking I/O and uses a non-blocking asynchronous event loop for network operations.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 32,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'Explain database connection pooling and how to configure pool sizing under high load.',
    conceptualOverview: 'Connection pooling reuses open socket connections. Pool size must be tuned against PostgreSQL max_connections and CPU thread availability.',
    recommendedPrepMinutes: 15,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 33,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'What is the difference between horizontal and vertical scaling for relational databases?',
    conceptualOverview: 'Vertical scaling upgrades CPU/RAM, while horizontal scaling incorporates read replicas, connection poolers, and database sharding.',
    recommendedPrepMinutes: 30,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 34,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'How do you prevent SQL injection and Cross-Site Scripting (XSS)?',
    conceptualOverview: 'Use parameterized queries, sanitize user inputs, encode HTML entities, and enforce a strict Content Security Policy (CSP).',
    recommendedPrepMinutes: 45,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 35,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'Explain rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window).',
    conceptualOverview: 'Token bucket allows bursts, leaky bucket smooths throughput, and sliding window log provides precise window enforcement.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 36,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'Explain the Global Interpreter Lock (GIL) and its implications in Python.',
    conceptualOverview: 'The GIL prevents multiple native threads from executing Python bytecodes simultaneously. Concurrency for CPU-bound tasks requires multiprocessing.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 37,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'How do transformers utilize Self-Attention mechanisms?',
    conceptualOverview: 'Self-attention computes Query, Key, and Value dot products across token embeddings, capturing long-range contextual relationships.',
    recommendedPrepMinutes: 30,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 38,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does vector search work?',
    conceptualOverview: 'RAG queries external knowledge bases using semantic vector embeddings (cosine similarity) to ground LLM generations in factual data.',
    recommendedPrepMinutes: 45,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 39,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'Explain the difference between L1 (Lasso) and L2 (Ridge) regularization.',
    conceptualOverview: 'L1 produces sparse feature weights driving unhelpful coefficients to zero, while L2 penalizes large weights proportionally.',
    recommendedPrepMinutes: 60,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 40,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'How do you prevent overfitting in deep neural networks?',
    conceptualOverview: 'Techniques include dropout, weight decay, early stopping, data augmentation, and cross-validation.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 41,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain the JavaScript Event Loop, Microtask Queue, and Macrotask Queue.',
    conceptualOverview: 'The event loop manages synchronous and asynchronous execution. Microtasks (Promises, queueMicrotask) take priority over macrotasks (setTimeout, setInterval).',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 42,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'What is the difference between interface and type in TypeScript?',
    conceptualOverview: 'Interfaces support declaration merging and are optimal for public APIs. Types support unions, primitives, and mapped types.',
    recommendedPrepMinutes: 45,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 43,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain closures in JavaScript and practical real-world use cases.',
    conceptualOverview: 'A closure is the combination of a function bundled together with references to its lexical environment. Used for data privacy, currying, and memoization.',
    recommendedPrepMinutes: 60,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 44,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'How does the prototype chain work and how does class syntax differ?',
    conceptualOverview: 'JavaScript utilizes prototypal inheritance. The class keyword is syntactical sugar over prototypes introduced in ES6.',
    recommendedPrepMinutes: 15,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 45,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'What are memory leaks in single-page JavaScript applications and how to prevent them?',
    conceptualOverview: 'Common causes include detached DOM nodes, forgotten setIntervals, unremoved event listeners, and global variables.',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 46,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'How does the Virtual DOM reconciliation algorithm (Fiber) function?',
    conceptualOverview: 'React Fiber breaks rendering work into incremental units, enabling cooperative scheduling and prioritization of user interactions.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 47,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'Compare useMemo, useCallback, and React.memo.',
    conceptualOverview: 'useMemo caches computed values, useCallback caches function instances, and React.memo prevents re-rendering when props have shallow equality.',
    recommendedPrepMinutes: 60,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 48,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'What strategies optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)?',
    conceptualOverview: 'Preloading critical fonts/images, server-side rendering, reserving layout dimensions, and code splitting routes.',
    recommendedPrepMinutes: 15,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 49,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'How do React Server Components (RSC) differ from traditional SSR?',
    conceptualOverview: 'RSC executes exclusively on the server and emits zero JavaScript bundles to the browser, while SSR executes on server and hydrates on client.',
    recommendedPrepMinutes: 30,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 50,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'Explain custom hook composition and unidirectional state patterns.',
    conceptualOverview: 'Custom hooks encapsulate stateful business logic away from presentation components, ensuring single responsibility and reusability.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 51,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'How does Node.js achieve high concurrency despite being single-threaded?',
    conceptualOverview: 'Node.js leverages libuv's multi-threaded thread pool for blocking I/O and uses a non-blocking asynchronous event loop for network operations.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 52,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'Explain database connection pooling and how to configure pool sizing under high load.',
    conceptualOverview: 'Connection pooling reuses open socket connections. Pool size must be tuned against PostgreSQL max_connections and CPU thread availability.',
    recommendedPrepMinutes: 15,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 53,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'What is the difference between horizontal and vertical scaling for relational databases?',
    conceptualOverview: 'Vertical scaling upgrades CPU/RAM, while horizontal scaling incorporates read replicas, connection poolers, and database sharding.',
    recommendedPrepMinutes: 30,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 54,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'How do you prevent SQL injection and Cross-Site Scripting (XSS)?',
    conceptualOverview: 'Use parameterized queries, sanitize user inputs, encode HTML entities, and enforce a strict Content Security Policy (CSP).',
    recommendedPrepMinutes: 45,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 55,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'Explain rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window).',
    conceptualOverview: 'Token bucket allows bursts, leaky bucket smooths throughput, and sliding window log provides precise window enforcement.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 56,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'Explain the Global Interpreter Lock (GIL) and its implications in Python.',
    conceptualOverview: 'The GIL prevents multiple native threads from executing Python bytecodes simultaneously. Concurrency for CPU-bound tasks requires multiprocessing.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 57,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'How do transformers utilize Self-Attention mechanisms?',
    conceptualOverview: 'Self-attention computes Query, Key, and Value dot products across token embeddings, capturing long-range contextual relationships.',
    recommendedPrepMinutes: 30,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 58,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does vector search work?',
    conceptualOverview: 'RAG queries external knowledge bases using semantic vector embeddings (cosine similarity) to ground LLM generations in factual data.',
    recommendedPrepMinutes: 45,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 59,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'Explain the difference between L1 (Lasso) and L2 (Ridge) regularization.',
    conceptualOverview: 'L1 produces sparse feature weights driving unhelpful coefficients to zero, while L2 penalizes large weights proportionally.',
    recommendedPrepMinutes: 60,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 60,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'How do you prevent overfitting in deep neural networks?',
    conceptualOverview: 'Techniques include dropout, weight decay, early stopping, data augmentation, and cross-validation.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 61,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain the JavaScript Event Loop, Microtask Queue, and Macrotask Queue.',
    conceptualOverview: 'The event loop manages synchronous and asynchronous execution. Microtasks (Promises, queueMicrotask) take priority over macrotasks (setTimeout, setInterval).',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 62,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'What is the difference between interface and type in TypeScript?',
    conceptualOverview: 'Interfaces support declaration merging and are optimal for public APIs. Types support unions, primitives, and mapped types.',
    recommendedPrepMinutes: 45,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 63,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'Explain closures in JavaScript and practical real-world use cases.',
    conceptualOverview: 'A closure is the combination of a function bundled together with references to its lexical environment. Used for data privacy, currying, and memoization.',
    recommendedPrepMinutes: 60,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 64,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'How does the prototype chain work and how does class syntax differ?',
    conceptualOverview: 'JavaScript utilizes prototypal inheritance. The class keyword is syntactical sugar over prototypes introduced in ES6.',
    recommendedPrepMinutes: 15,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 65,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'What are memory leaks in single-page JavaScript applications and how to prevent them?',
    conceptualOverview: 'Common causes include detached DOM nodes, forgotten setIntervals, unremoved event listeners, and global variables.',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 66,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'How does the Virtual DOM reconciliation algorithm (Fiber) function?',
    conceptualOverview: 'React Fiber breaks rendering work into incremental units, enabling cooperative scheduling and prioritization of user interactions.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 67,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'Compare useMemo, useCallback, and React.memo.',
    conceptualOverview: 'useMemo caches computed values, useCallback caches function instances, and React.memo prevents re-rendering when props have shallow equality.',
    recommendedPrepMinutes: 60,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 68,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'What strategies optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)?',
    conceptualOverview: 'Preloading critical fonts/images, server-side rendering, reserving layout dimensions, and code splitting routes.',
    recommendedPrepMinutes: 15,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 69,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'How do React Server Components (RSC) differ from traditional SSR?',
    conceptualOverview: 'RSC executes exclusively on the server and emits zero JavaScript bundles to the browser, while SSR executes on server and hydrates on client.',
    recommendedPrepMinutes: 30,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 70,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'Explain custom hook composition and unidirectional state patterns.',
    conceptualOverview: 'Custom hooks encapsulate stateful business logic away from presentation components, ensuring single responsibility and reusability.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 71,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'How does Node.js achieve high concurrency despite being single-threaded?',
    conceptualOverview: 'Node.js leverages libuv's multi-threaded thread pool for blocking I/O and uses a non-blocking asynchronous event loop for network operations.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 72,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'Explain database connection pooling and how to configure pool sizing under high load.',
    conceptualOverview: 'Connection pooling reuses open socket connections. Pool size must be tuned against PostgreSQL max_connections and CPU thread availability.',
    recommendedPrepMinutes: 15,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 73,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'What is the difference between horizontal and vertical scaling for relational databases?',
    conceptualOverview: 'Vertical scaling upgrades CPU/RAM, while horizontal scaling incorporates read replicas, connection poolers, and database sharding.',
    recommendedPrepMinutes: 30,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 74,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'How do you prevent SQL injection and Cross-Site Scripting (XSS)?',
    conceptualOverview: 'Use parameterized queries, sanitize user inputs, encode HTML entities, and enforce a strict Content Security Policy (CSP).',
    recommendedPrepMinutes: 45,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 75,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'Explain rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window).',
    conceptualOverview: 'Token bucket allows bursts, leaky bucket smooths throughput, and sliding window log provides precise window enforcement.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 76,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'Explain the Global Interpreter Lock (GIL) and its implications in Python.',
    conceptualOverview: 'The GIL prevents multiple native threads from executing Python bytecodes simultaneously. Concurrency for CPU-bound tasks requires multiprocessing.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 77,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'How do transformers utilize Self-Attention mechanisms?',
    conceptualOverview: 'Self-attention computes Query, Key, and Value dot products across token embeddings, capturing long-range contextual relationships.',
    recommendedPrepMinutes: 30,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 78,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does vector search work?',
    conceptualOverview: 'RAG queries external knowledge bases using semantic vector embeddings (cosine similarity) to ground LLM generations in factual data.',
    recommendedPrepMinutes: 45,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 79,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'Explain the difference between L1 (Lasso) and L2 (Ridge) regularization.',
    conceptualOverview: 'L1 produces sparse feature weights driving unhelpful coefficients to zero, while L2 penalizes large weights proportionally.',
    recommendedPrepMinutes: 60,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 80,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'How do you prevent overfitting in deep neural networks?',
    conceptualOverview: 'Techniques include dropout, weight decay, early stopping, data augmentation, and cross-validation.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 81,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'Explain the JavaScript Event Loop, Microtask Queue, and Macrotask Queue.',
    conceptualOverview: 'The event loop manages synchronous and asynchronous execution. Microtasks (Promises, queueMicrotask) take priority over macrotasks (setTimeout, setInterval).',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 82,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'What is the difference between interface and type in TypeScript?',
    conceptualOverview: 'Interfaces support declaration merging and are optimal for public APIs. Types support unions, primitives, and mapped types.',
    recommendedPrepMinutes: 45,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 83,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain closures in JavaScript and practical real-world use cases.',
    conceptualOverview: 'A closure is the combination of a function bundled together with references to its lexical environment. Used for data privacy, currying, and memoization.',
    recommendedPrepMinutes: 60,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 84,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'How does the prototype chain work and how does class syntax differ?',
    conceptualOverview: 'JavaScript utilizes prototypal inheritance. The class keyword is syntactical sugar over prototypes introduced in ES6.',
    recommendedPrepMinutes: 15,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 85,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'What are memory leaks in single-page JavaScript applications and how to prevent them?',
    conceptualOverview: 'Common causes include detached DOM nodes, forgotten setIntervals, unremoved event listeners, and global variables.',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 86,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'How does the Virtual DOM reconciliation algorithm (Fiber) function?',
    conceptualOverview: 'React Fiber breaks rendering work into incremental units, enabling cooperative scheduling and prioritization of user interactions.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 87,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'Compare useMemo, useCallback, and React.memo.',
    conceptualOverview: 'useMemo caches computed values, useCallback caches function instances, and React.memo prevents re-rendering when props have shallow equality.',
    recommendedPrepMinutes: 60,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 88,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'What strategies optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)?',
    conceptualOverview: 'Preloading critical fonts/images, server-side rendering, reserving layout dimensions, and code splitting routes.',
    recommendedPrepMinutes: 15,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 89,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'How do React Server Components (RSC) differ from traditional SSR?',
    conceptualOverview: 'RSC executes exclusively on the server and emits zero JavaScript bundles to the browser, while SSR executes on server and hydrates on client.',
    recommendedPrepMinutes: 30,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 90,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'Explain custom hook composition and unidirectional state patterns.',
    conceptualOverview: 'Custom hooks encapsulate stateful business logic away from presentation components, ensuring single responsibility and reusability.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 91,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'How does Node.js achieve high concurrency despite being single-threaded?',
    conceptualOverview: 'Node.js leverages libuv's multi-threaded thread pool for blocking I/O and uses a non-blocking asynchronous event loop for network operations.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 92,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'Explain database connection pooling and how to configure pool sizing under high load.',
    conceptualOverview: 'Connection pooling reuses open socket connections. Pool size must be tuned against PostgreSQL max_connections and CPU thread availability.',
    recommendedPrepMinutes: 15,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 93,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'What is the difference between horizontal and vertical scaling for relational databases?',
    conceptualOverview: 'Vertical scaling upgrades CPU/RAM, while horizontal scaling incorporates read replicas, connection poolers, and database sharding.',
    recommendedPrepMinutes: 30,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 94,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'How do you prevent SQL injection and Cross-Site Scripting (XSS)?',
    conceptualOverview: 'Use parameterized queries, sanitize user inputs, encode HTML entities, and enforce a strict Content Security Policy (CSP).',
    recommendedPrepMinutes: 45,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 95,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'Explain rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window).',
    conceptualOverview: 'Token bucket allows bursts, leaky bucket smooths throughput, and sliding window log provides precise window enforcement.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 96,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'Explain the Global Interpreter Lock (GIL) and its implications in Python.',
    conceptualOverview: 'The GIL prevents multiple native threads from executing Python bytecodes simultaneously. Concurrency for CPU-bound tasks requires multiprocessing.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 97,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'How do transformers utilize Self-Attention mechanisms?',
    conceptualOverview: 'Self-attention computes Query, Key, and Value dot products across token embeddings, capturing long-range contextual relationships.',
    recommendedPrepMinutes: 30,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 98,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does vector search work?',
    conceptualOverview: 'RAG queries external knowledge bases using semantic vector embeddings (cosine similarity) to ground LLM generations in factual data.',
    recommendedPrepMinutes: 45,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 99,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'Explain the difference between L1 (Lasso) and L2 (Ridge) regularization.',
    conceptualOverview: 'L1 produces sparse feature weights driving unhelpful coefficients to zero, while L2 penalizes large weights proportionally.',
    recommendedPrepMinutes: 60,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 100,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'How do you prevent overfitting in deep neural networks?',
    conceptualOverview: 'Techniques include dropout, weight decay, early stopping, data augmentation, and cross-validation.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 101,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain the JavaScript Event Loop, Microtask Queue, and Macrotask Queue.',
    conceptualOverview: 'The event loop manages synchronous and asynchronous execution. Microtasks (Promises, queueMicrotask) take priority over macrotasks (setTimeout, setInterval).',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 102,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'What is the difference between interface and type in TypeScript?',
    conceptualOverview: 'Interfaces support declaration merging and are optimal for public APIs. Types support unions, primitives, and mapped types.',
    recommendedPrepMinutes: 45,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 103,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain closures in JavaScript and practical real-world use cases.',
    conceptualOverview: 'A closure is the combination of a function bundled together with references to its lexical environment. Used for data privacy, currying, and memoization.',
    recommendedPrepMinutes: 60,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 104,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'How does the prototype chain work and how does class syntax differ?',
    conceptualOverview: 'JavaScript utilizes prototypal inheritance. The class keyword is syntactical sugar over prototypes introduced in ES6.',
    recommendedPrepMinutes: 15,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 105,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'What are memory leaks in single-page JavaScript applications and how to prevent them?',
    conceptualOverview: 'Common causes include detached DOM nodes, forgotten setIntervals, unremoved event listeners, and global variables.',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 106,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'How does the Virtual DOM reconciliation algorithm (Fiber) function?',
    conceptualOverview: 'React Fiber breaks rendering work into incremental units, enabling cooperative scheduling and prioritization of user interactions.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 107,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'Compare useMemo, useCallback, and React.memo.',
    conceptualOverview: 'useMemo caches computed values, useCallback caches function instances, and React.memo prevents re-rendering when props have shallow equality.',
    recommendedPrepMinutes: 60,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 108,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'What strategies optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)?',
    conceptualOverview: 'Preloading critical fonts/images, server-side rendering, reserving layout dimensions, and code splitting routes.',
    recommendedPrepMinutes: 15,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 109,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'How do React Server Components (RSC) differ from traditional SSR?',
    conceptualOverview: 'RSC executes exclusively on the server and emits zero JavaScript bundles to the browser, while SSR executes on server and hydrates on client.',
    recommendedPrepMinutes: 30,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 110,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'Explain custom hook composition and unidirectional state patterns.',
    conceptualOverview: 'Custom hooks encapsulate stateful business logic away from presentation components, ensuring single responsibility and reusability.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 111,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'How does Node.js achieve high concurrency despite being single-threaded?',
    conceptualOverview: 'Node.js leverages libuv's multi-threaded thread pool for blocking I/O and uses a non-blocking asynchronous event loop for network operations.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 112,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'Explain database connection pooling and how to configure pool sizing under high load.',
    conceptualOverview: 'Connection pooling reuses open socket connections. Pool size must be tuned against PostgreSQL max_connections and CPU thread availability.',
    recommendedPrepMinutes: 15,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 113,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'What is the difference between horizontal and vertical scaling for relational databases?',
    conceptualOverview: 'Vertical scaling upgrades CPU/RAM, while horizontal scaling incorporates read replicas, connection poolers, and database sharding.',
    recommendedPrepMinutes: 30,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 114,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'How do you prevent SQL injection and Cross-Site Scripting (XSS)?',
    conceptualOverview: 'Use parameterized queries, sanitize user inputs, encode HTML entities, and enforce a strict Content Security Policy (CSP).',
    recommendedPrepMinutes: 45,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 115,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'Explain rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window).',
    conceptualOverview: 'Token bucket allows bursts, leaky bucket smooths throughput, and sliding window log provides precise window enforcement.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 116,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'Explain the Global Interpreter Lock (GIL) and its implications in Python.',
    conceptualOverview: 'The GIL prevents multiple native threads from executing Python bytecodes simultaneously. Concurrency for CPU-bound tasks requires multiprocessing.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 117,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'How do transformers utilize Self-Attention mechanisms?',
    conceptualOverview: 'Self-attention computes Query, Key, and Value dot products across token embeddings, capturing long-range contextual relationships.',
    recommendedPrepMinutes: 30,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 118,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does vector search work?',
    conceptualOverview: 'RAG queries external knowledge bases using semantic vector embeddings (cosine similarity) to ground LLM generations in factual data.',
    recommendedPrepMinutes: 45,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 119,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'Explain the difference between L1 (Lasso) and L2 (Ridge) regularization.',
    conceptualOverview: 'L1 produces sparse feature weights driving unhelpful coefficients to zero, while L2 penalizes large weights proportionally.',
    recommendedPrepMinutes: 60,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 120,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'How do you prevent overfitting in deep neural networks?',
    conceptualOverview: 'Techniques include dropout, weight decay, early stopping, data augmentation, and cross-validation.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 121,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain the JavaScript Event Loop, Microtask Queue, and Macrotask Queue.',
    conceptualOverview: 'The event loop manages synchronous and asynchronous execution. Microtasks (Promises, queueMicrotask) take priority over macrotasks (setTimeout, setInterval).',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 122,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'What is the difference between interface and type in TypeScript?',
    conceptualOverview: 'Interfaces support declaration merging and are optimal for public APIs. Types support unions, primitives, and mapped types.',
    recommendedPrepMinutes: 45,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 123,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'Explain closures in JavaScript and practical real-world use cases.',
    conceptualOverview: 'A closure is the combination of a function bundled together with references to its lexical environment. Used for data privacy, currying, and memoization.',
    recommendedPrepMinutes: 60,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 124,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'How does the prototype chain work and how does class syntax differ?',
    conceptualOverview: 'JavaScript utilizes prototypal inheritance. The class keyword is syntactical sugar over prototypes introduced in ES6.',
    recommendedPrepMinutes: 15,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 125,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'What are memory leaks in single-page JavaScript applications and how to prevent them?',
    conceptualOverview: 'Common causes include detached DOM nodes, forgotten setIntervals, unremoved event listeners, and global variables.',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 126,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'How does the Virtual DOM reconciliation algorithm (Fiber) function?',
    conceptualOverview: 'React Fiber breaks rendering work into incremental units, enabling cooperative scheduling and prioritization of user interactions.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 127,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'Compare useMemo, useCallback, and React.memo.',
    conceptualOverview: 'useMemo caches computed values, useCallback caches function instances, and React.memo prevents re-rendering when props have shallow equality.',
    recommendedPrepMinutes: 60,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 128,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'What strategies optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)?',
    conceptualOverview: 'Preloading critical fonts/images, server-side rendering, reserving layout dimensions, and code splitting routes.',
    recommendedPrepMinutes: 15,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 129,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'How do React Server Components (RSC) differ from traditional SSR?',
    conceptualOverview: 'RSC executes exclusively on the server and emits zero JavaScript bundles to the browser, while SSR executes on server and hydrates on client.',
    recommendedPrepMinutes: 30,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 130,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'Explain custom hook composition and unidirectional state patterns.',
    conceptualOverview: 'Custom hooks encapsulate stateful business logic away from presentation components, ensuring single responsibility and reusability.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 131,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'How does Node.js achieve high concurrency despite being single-threaded?',
    conceptualOverview: 'Node.js leverages libuv's multi-threaded thread pool for blocking I/O and uses a non-blocking asynchronous event loop for network operations.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 132,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'Explain database connection pooling and how to configure pool sizing under high load.',
    conceptualOverview: 'Connection pooling reuses open socket connections. Pool size must be tuned against PostgreSQL max_connections and CPU thread availability.',
    recommendedPrepMinutes: 15,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 133,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'What is the difference between horizontal and vertical scaling for relational databases?',
    conceptualOverview: 'Vertical scaling upgrades CPU/RAM, while horizontal scaling incorporates read replicas, connection poolers, and database sharding.',
    recommendedPrepMinutes: 30,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 134,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'How do you prevent SQL injection and Cross-Site Scripting (XSS)?',
    conceptualOverview: 'Use parameterized queries, sanitize user inputs, encode HTML entities, and enforce a strict Content Security Policy (CSP).',
    recommendedPrepMinutes: 45,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 135,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'Explain rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window).',
    conceptualOverview: 'Token bucket allows bursts, leaky bucket smooths throughput, and sliding window log provides precise window enforcement.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 136,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'Explain the Global Interpreter Lock (GIL) and its implications in Python.',
    conceptualOverview: 'The GIL prevents multiple native threads from executing Python bytecodes simultaneously. Concurrency for CPU-bound tasks requires multiprocessing.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 137,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'How do transformers utilize Self-Attention mechanisms?',
    conceptualOverview: 'Self-attention computes Query, Key, and Value dot products across token embeddings, capturing long-range contextual relationships.',
    recommendedPrepMinutes: 30,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 138,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does vector search work?',
    conceptualOverview: 'RAG queries external knowledge bases using semantic vector embeddings (cosine similarity) to ground LLM generations in factual data.',
    recommendedPrepMinutes: 45,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 139,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'Explain the difference between L1 (Lasso) and L2 (Ridge) regularization.',
    conceptualOverview: 'L1 produces sparse feature weights driving unhelpful coefficients to zero, while L2 penalizes large weights proportionally.',
    recommendedPrepMinutes: 60,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 140,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'How do you prevent overfitting in deep neural networks?',
    conceptualOverview: 'Techniques include dropout, weight decay, early stopping, data augmentation, and cross-validation.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 141,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'Explain the JavaScript Event Loop, Microtask Queue, and Macrotask Queue.',
    conceptualOverview: 'The event loop manages synchronous and asynchronous execution. Microtasks (Promises, queueMicrotask) take priority over macrotasks (setTimeout, setInterval).',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 142,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'What is the difference between interface and type in TypeScript?',
    conceptualOverview: 'Interfaces support declaration merging and are optimal for public APIs. Types support unions, primitives, and mapped types.',
    recommendedPrepMinutes: 45,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 143,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain closures in JavaScript and practical real-world use cases.',
    conceptualOverview: 'A closure is the combination of a function bundled together with references to its lexical environment. Used for data privacy, currying, and memoization.',
    recommendedPrepMinutes: 60,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 144,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'How does the prototype chain work and how does class syntax differ?',
    conceptualOverview: 'JavaScript utilizes prototypal inheritance. The class keyword is syntactical sugar over prototypes introduced in ES6.',
    recommendedPrepMinutes: 15,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 145,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'What are memory leaks in single-page JavaScript applications and how to prevent them?',
    conceptualOverview: 'Common causes include detached DOM nodes, forgotten setIntervals, unremoved event listeners, and global variables.',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 146,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'How does the Virtual DOM reconciliation algorithm (Fiber) function?',
    conceptualOverview: 'React Fiber breaks rendering work into incremental units, enabling cooperative scheduling and prioritization of user interactions.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 147,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'Compare useMemo, useCallback, and React.memo.',
    conceptualOverview: 'useMemo caches computed values, useCallback caches function instances, and React.memo prevents re-rendering when props have shallow equality.',
    recommendedPrepMinutes: 60,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 148,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'What strategies optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)?',
    conceptualOverview: 'Preloading critical fonts/images, server-side rendering, reserving layout dimensions, and code splitting routes.',
    recommendedPrepMinutes: 15,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 149,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'How do React Server Components (RSC) differ from traditional SSR?',
    conceptualOverview: 'RSC executes exclusively on the server and emits zero JavaScript bundles to the browser, while SSR executes on server and hydrates on client.',
    recommendedPrepMinutes: 30,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 150,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'Explain custom hook composition and unidirectional state patterns.',
    conceptualOverview: 'Custom hooks encapsulate stateful business logic away from presentation components, ensuring single responsibility and reusability.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 151,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'How does Node.js achieve high concurrency despite being single-threaded?',
    conceptualOverview: 'Node.js leverages libuv's multi-threaded thread pool for blocking I/O and uses a non-blocking asynchronous event loop for network operations.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 152,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'Explain database connection pooling and how to configure pool sizing under high load.',
    conceptualOverview: 'Connection pooling reuses open socket connections. Pool size must be tuned against PostgreSQL max_connections and CPU thread availability.',
    recommendedPrepMinutes: 15,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 153,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'What is the difference between horizontal and vertical scaling for relational databases?',
    conceptualOverview: 'Vertical scaling upgrades CPU/RAM, while horizontal scaling incorporates read replicas, connection poolers, and database sharding.',
    recommendedPrepMinutes: 30,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 154,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'How do you prevent SQL injection and Cross-Site Scripting (XSS)?',
    conceptualOverview: 'Use parameterized queries, sanitize user inputs, encode HTML entities, and enforce a strict Content Security Policy (CSP).',
    recommendedPrepMinutes: 45,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 155,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'Explain rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window).',
    conceptualOverview: 'Token bucket allows bursts, leaky bucket smooths throughput, and sliding window log provides precise window enforcement.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 156,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'Explain the Global Interpreter Lock (GIL) and its implications in Python.',
    conceptualOverview: 'The GIL prevents multiple native threads from executing Python bytecodes simultaneously. Concurrency for CPU-bound tasks requires multiprocessing.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 157,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'How do transformers utilize Self-Attention mechanisms?',
    conceptualOverview: 'Self-attention computes Query, Key, and Value dot products across token embeddings, capturing long-range contextual relationships.',
    recommendedPrepMinutes: 30,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 158,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does vector search work?',
    conceptualOverview: 'RAG queries external knowledge bases using semantic vector embeddings (cosine similarity) to ground LLM generations in factual data.',
    recommendedPrepMinutes: 45,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 159,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'Explain the difference between L1 (Lasso) and L2 (Ridge) regularization.',
    conceptualOverview: 'L1 produces sparse feature weights driving unhelpful coefficients to zero, while L2 penalizes large weights proportionally.',
    recommendedPrepMinutes: 60,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 160,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'How do you prevent overfitting in deep neural networks?',
    conceptualOverview: 'Techniques include dropout, weight decay, early stopping, data augmentation, and cross-validation.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 161,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain the JavaScript Event Loop, Microtask Queue, and Macrotask Queue.',
    conceptualOverview: 'The event loop manages synchronous and asynchronous execution. Microtasks (Promises, queueMicrotask) take priority over macrotasks (setTimeout, setInterval).',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 162,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'What is the difference between interface and type in TypeScript?',
    conceptualOverview: 'Interfaces support declaration merging and are optimal for public APIs. Types support unions, primitives, and mapped types.',
    recommendedPrepMinutes: 45,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 163,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain closures in JavaScript and practical real-world use cases.',
    conceptualOverview: 'A closure is the combination of a function bundled together with references to its lexical environment. Used for data privacy, currying, and memoization.',
    recommendedPrepMinutes: 60,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 164,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'How does the prototype chain work and how does class syntax differ?',
    conceptualOverview: 'JavaScript utilizes prototypal inheritance. The class keyword is syntactical sugar over prototypes introduced in ES6.',
    recommendedPrepMinutes: 15,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 165,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'What are memory leaks in single-page JavaScript applications and how to prevent them?',
    conceptualOverview: 'Common causes include detached DOM nodes, forgotten setIntervals, unremoved event listeners, and global variables.',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 166,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'How does the Virtual DOM reconciliation algorithm (Fiber) function?',
    conceptualOverview: 'React Fiber breaks rendering work into incremental units, enabling cooperative scheduling and prioritization of user interactions.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 167,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'Compare useMemo, useCallback, and React.memo.',
    conceptualOverview: 'useMemo caches computed values, useCallback caches function instances, and React.memo prevents re-rendering when props have shallow equality.',
    recommendedPrepMinutes: 60,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 168,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'What strategies optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)?',
    conceptualOverview: 'Preloading critical fonts/images, server-side rendering, reserving layout dimensions, and code splitting routes.',
    recommendedPrepMinutes: 15,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 169,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'How do React Server Components (RSC) differ from traditional SSR?',
    conceptualOverview: 'RSC executes exclusively on the server and emits zero JavaScript bundles to the browser, while SSR executes on server and hydrates on client.',
    recommendedPrepMinutes: 30,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 170,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'Explain custom hook composition and unidirectional state patterns.',
    conceptualOverview: 'Custom hooks encapsulate stateful business logic away from presentation components, ensuring single responsibility and reusability.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 171,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'How does Node.js achieve high concurrency despite being single-threaded?',
    conceptualOverview: 'Node.js leverages libuv's multi-threaded thread pool for blocking I/O and uses a non-blocking asynchronous event loop for network operations.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 172,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'Explain database connection pooling and how to configure pool sizing under high load.',
    conceptualOverview: 'Connection pooling reuses open socket connections. Pool size must be tuned against PostgreSQL max_connections and CPU thread availability.',
    recommendedPrepMinutes: 15,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 173,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'What is the difference between horizontal and vertical scaling for relational databases?',
    conceptualOverview: 'Vertical scaling upgrades CPU/RAM, while horizontal scaling incorporates read replicas, connection poolers, and database sharding.',
    recommendedPrepMinutes: 30,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 174,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'How do you prevent SQL injection and Cross-Site Scripting (XSS)?',
    conceptualOverview: 'Use parameterized queries, sanitize user inputs, encode HTML entities, and enforce a strict Content Security Policy (CSP).',
    recommendedPrepMinutes: 45,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 175,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'Explain rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window).',
    conceptualOverview: 'Token bucket allows bursts, leaky bucket smooths throughput, and sliding window log provides precise window enforcement.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 176,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'Explain the Global Interpreter Lock (GIL) and its implications in Python.',
    conceptualOverview: 'The GIL prevents multiple native threads from executing Python bytecodes simultaneously. Concurrency for CPU-bound tasks requires multiprocessing.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 177,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'How do transformers utilize Self-Attention mechanisms?',
    conceptualOverview: 'Self-attention computes Query, Key, and Value dot products across token embeddings, capturing long-range contextual relationships.',
    recommendedPrepMinutes: 30,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 178,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does vector search work?',
    conceptualOverview: 'RAG queries external knowledge bases using semantic vector embeddings (cosine similarity) to ground LLM generations in factual data.',
    recommendedPrepMinutes: 45,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 179,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'Explain the difference between L1 (Lasso) and L2 (Ridge) regularization.',
    conceptualOverview: 'L1 produces sparse feature weights driving unhelpful coefficients to zero, while L2 penalizes large weights proportionally.',
    recommendedPrepMinutes: 60,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 180,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'How do you prevent overfitting in deep neural networks?',
    conceptualOverview: 'Techniques include dropout, weight decay, early stopping, data augmentation, and cross-validation.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 181,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'Explain the JavaScript Event Loop, Microtask Queue, and Macrotask Queue.',
    conceptualOverview: 'The event loop manages synchronous and asynchronous execution. Microtasks (Promises, queueMicrotask) take priority over macrotasks (setTimeout, setInterval).',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 182,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'What is the difference between interface and type in TypeScript?',
    conceptualOverview: 'Interfaces support declaration merging and are optimal for public APIs. Types support unions, primitives, and mapped types.',
    recommendedPrepMinutes: 45,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 183,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Hard',
    question: 'Explain closures in JavaScript and practical real-world use cases.',
    conceptualOverview: 'A closure is the combination of a function bundled together with references to its lexical environment. Used for data privacy, currying, and memoization.',
    recommendedPrepMinutes: 60,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 184,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Medium',
    question: 'How does the prototype chain work and how does class syntax differ?',
    conceptualOverview: 'JavaScript utilizes prototypal inheritance. The class keyword is syntactical sugar over prototypes introduced in ES6.',
    recommendedPrepMinutes: 15,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 185,
    domain: 'JavaScript & TypeScript',
    difficulty: 'Foundational',
    question: 'What are memory leaks in single-page JavaScript applications and how to prevent them?',
    conceptualOverview: 'Common causes include detached DOM nodes, forgotten setIntervals, unremoved event listeners, and global variables.',
    recommendedPrepMinutes: 30,
    tags: ['JavaScript', 'System Design', 'Core Fundamentals']
  },
  {
    id: 186,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'How does the Virtual DOM reconciliation algorithm (Fiber) function?',
    conceptualOverview: 'React Fiber breaks rendering work into incremental units, enabling cooperative scheduling and prioritization of user interactions.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 187,
    domain: 'React & Frontend Architecture',
    difficulty: 'Foundational',
    question: 'Compare useMemo, useCallback, and React.memo.',
    conceptualOverview: 'useMemo caches computed values, useCallback caches function instances, and React.memo prevents re-rendering when props have shallow equality.',
    recommendedPrepMinutes: 60,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 188,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'What strategies optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)?',
    conceptualOverview: 'Preloading critical fonts/images, server-side rendering, reserving layout dimensions, and code splitting routes.',
    recommendedPrepMinutes: 15,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 189,
    domain: 'React & Frontend Architecture',
    difficulty: 'Hard',
    question: 'How do React Server Components (RSC) differ from traditional SSR?',
    conceptualOverview: 'RSC executes exclusively on the server and emits zero JavaScript bundles to the browser, while SSR executes on server and hydrates on client.',
    recommendedPrepMinutes: 30,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 190,
    domain: 'React & Frontend Architecture',
    difficulty: 'Medium',
    question: 'Explain custom hook composition and unidirectional state patterns.',
    conceptualOverview: 'Custom hooks encapsulate stateful business logic away from presentation components, ensuring single responsibility and reusability.',
    recommendedPrepMinutes: 45,
    tags: ['React', 'System Design', 'Core Fundamentals']
  },
  {
    id: 191,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'How does Node.js achieve high concurrency despite being single-threaded?',
    conceptualOverview: 'Node.js leverages libuv's multi-threaded thread pool for blocking I/O and uses a non-blocking asynchronous event loop for network operations.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 192,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'Explain database connection pooling and how to configure pool sizing under high load.',
    conceptualOverview: 'Connection pooling reuses open socket connections. Pool size must be tuned against PostgreSQL max_connections and CPU thread availability.',
    recommendedPrepMinutes: 15,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 193,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Foundational',
    question: 'What is the difference between horizontal and vertical scaling for relational databases?',
    conceptualOverview: 'Vertical scaling upgrades CPU/RAM, while horizontal scaling incorporates read replicas, connection poolers, and database sharding.',
    recommendedPrepMinutes: 30,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 194,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Medium',
    question: 'How do you prevent SQL injection and Cross-Site Scripting (XSS)?',
    conceptualOverview: 'Use parameterized queries, sanitize user inputs, encode HTML entities, and enforce a strict Content Security Policy (CSP).',
    recommendedPrepMinutes: 45,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 195,
    domain: 'Node.js & Backend Systems',
    difficulty: 'Hard',
    question: 'Explain rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window).',
    conceptualOverview: 'Token bucket allows bursts, leaky bucket smooths throughput, and sliding window log provides precise window enforcement.',
    recommendedPrepMinutes: 60,
    tags: ['Node.js', 'System Design', 'Core Fundamentals']
  },
  {
    id: 196,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'Explain the Global Interpreter Lock (GIL) and its implications in Python.',
    conceptualOverview: 'The GIL prevents multiple native threads from executing Python bytecodes simultaneously. Concurrency for CPU-bound tasks requires multiprocessing.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 197,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'How do transformers utilize Self-Attention mechanisms?',
    conceptualOverview: 'Self-attention computes Query, Key, and Value dot products across token embeddings, capturing long-range contextual relationships.',
    recommendedPrepMinutes: 30,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 198,
    domain: 'Python & Machine Learning',
    difficulty: 'Hard',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does vector search work?',
    conceptualOverview: 'RAG queries external knowledge bases using semantic vector embeddings (cosine similarity) to ground LLM generations in factual data.',
    recommendedPrepMinutes: 45,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 199,
    domain: 'Python & Machine Learning',
    difficulty: 'Foundational',
    question: 'Explain the difference between L1 (Lasso) and L2 (Ridge) regularization.',
    conceptualOverview: 'L1 produces sparse feature weights driving unhelpful coefficients to zero, while L2 penalizes large weights proportionally.',
    recommendedPrepMinutes: 60,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
  {
    id: 200,
    domain: 'Python & Machine Learning',
    difficulty: 'Medium',
    question: 'How do you prevent overfitting in deep neural networks?',
    conceptualOverview: 'Techniques include dropout, weight decay, early stopping, data augmentation, and cross-validation.',
    recommendedPrepMinutes: 15,
    tags: ['Python', 'System Design', 'Core Fundamentals']
  },
];
