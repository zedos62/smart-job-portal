"""
Skill Taxonomy & Synonym Dictionary for AI Matching Service
Provides structured categorization, semantic clustering, and ontology mappings for technical skills.
"""

SKILL_CATEGORIES = {
    "frontend": [
        "react", "react.js", "next.js", "vue", "vue.js", "angular", "svelte", 
        "typescript", "javascript", "tailwind", "tailwind css", "html5", "css3", 
        "redux", "zustand", "graphql", "vite", "webpack"
    ],
    "backend": [
        "node", "node.js", "express", "nestjs", "python", "fastapi", "django", 
        "flask", "golang", "go", "java", "spring boot", "c#", ".net core", 
        "ruby", "ruby on rails", "php", "laravel"
    ],
    "database": [
        "postgresql", "postgres", "mysql", "mongodb", "redis", "elasticsearch", 
        "sqlite", "cassandra", "dynamodb", "prisma", "sequelize", "typeorm", "supabase"
    ],
    "devops_cloud": [
        "docker", "kubernetes", "aws", "amazon web services", "gcp", "google cloud", 
        "azure", "terraform", "ci/cd", "github actions", "gitlab ci", "nginx", "linux"
    ],
    "ai_ml": [
        "machine learning", "deep learning", "nlp", "natural language processing", 
        "pytorch", "tensorflow", "scikit-learn", "huggingface", "llm", "langchain", 
        "rag", "spacy", "pandas", "numpy"
    ]
}

SYNONYM_MAP = {
    "reactjs": "react",
    "react.js": "react",
    "nodejs": "node.js",
    "node": "node.js",
    "ts": "typescript",
    "js": "javascript",
    "py": "python",
    "postgres": "postgresql",
    "k8s": "kubernetes",
    "golang": "go"
}

def normalize_skill(skill_name: str) -> str:
    """Normalizes input skill strings through synonym lookup and lowercasing."""
    if not skill_name:
        return ""
    clean = skill_name.strip().lower()
    return SYNONYM_MAP.get(clean, clean)

def extract_skills_from_text(text: str) -> list[str]:
    """Extracts known technical competencies from arbitrary resume or job text."""
    if not text:
        return []
    
    text_lower = f" {text.lower()} "
    identified = set()
    
    for category, skills in SKILL_CATEGORIES.items():
        for skill in skills:
            pattern = f" {skill} "
            if pattern in text_lower or f"({skill})" in text_lower or f",{skill}" in text_lower:
                identified.add(normalize_skill(skill))
                
    return sorted(list(identified))

def compute_skill_overlap_score(candidate_skills: list[str], job_requirements: list[str]) -> float:
    """Computes Jaccard similarity and coverage quotient between candidate and job requirement sets."""
    if not job_requirements:
        return 1.0
    
    c_set = set(normalize_skill(s) for s in candidate_skills)
    j_set = set(normalize_skill(s) for s in job_requirements)
    
    intersection = c_set.intersection(j_set)
    coverage = len(intersection) / len(j_set)
    return round(coverage * 100.0, 1)
