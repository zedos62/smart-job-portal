import pytest
from skill_taxonomy import (
    normalize_skill, 
    extract_skills_from_text, 
    compute_skill_overlap_score,
    SKILL_CATEGORIES
)

def test_normalize_skill_synonyms():
    assert normalize_skill("reactjs") == "react"
    assert normalize_skill("React.js") == "react"
    assert normalize_skill("k8s") == "kubernetes"
    assert normalize_skill("postgres") == "postgresql"
    assert normalize_skill("Python") == "python"

def test_extract_skills_from_resume_text():
    sample_resume = """
    Experienced Software Engineer with 5+ years of experience in React, TypeScript, and Node.js.
    Deep background building RESTful APIs using PostgreSQL and Docker.
    Proficient with Python and LangChain for RAG LLM pipeline architectures.
    """
    
    skills = extract_skills_from_text(sample_resume)
    assert "react" in skills
    assert "typescript" in skills
    assert "node.js" in skills
    assert "postgresql" in skills
    assert "docker" in skills
    assert "python" in skills

def test_compute_skill_overlap_score_perfect_match():
    candidate = ["React", "TypeScript", "Node.js", "PostgreSQL"]
    required = ["react", "typescript", "node.js", "postgresql"]
    score = compute_skill_overlap_score(candidate, required)
    assert score == 100.0

def test_compute_skill_overlap_score_partial_match():
    candidate = ["React", "CSS3"]
    required = ["React", "TypeScript", "Node.js", "Docker"]
    score = compute_skill_overlap_score(candidate, required)
    assert score == 25.0

def test_empty_requirements_returns_full_score():
    assert compute_skill_overlap_score(["React"], []) == 100.0
