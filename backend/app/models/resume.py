from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel, Field


class ResumeUploadResponse(BaseModel):
    """Response model for uploaded resumes."""

    filename: str = Field(..., description="Original filename of the uploaded file")
    saved_path: str = Field(..., description="Temporary path where file is stored")
    file_size_bytes: int = Field(..., description="Size of the uploaded file in bytes")
    content_type: Optional[str] = Field(None, description="MIME type of the file")
    status: str = Field(default="uploaded", description="Current upload processing status")
    uploaded_at: datetime = Field(default_factory=datetime.utcnow, description="Timestamp of upload")
    message: str = Field(default="Resume uploaded and queued for analysis successfully.")


class ResumeAnalysisResult(BaseModel):
    """Model representing parsed resume attributes and AI evaluation scores."""

    candidate_name: Optional[str] = None
    email: Optional[str] = None
    skills: List[str] = Field(default_factory=list)
    experience_years: Optional[float] = None
    ats_score: int = Field(..., ge=0, le=100, description="Overall ATS compatibility score (0-100)")
    key_strengths: List[str] = Field(default_factory=list)
    suggested_improvements: List[str] = Field(default_factory=list)
