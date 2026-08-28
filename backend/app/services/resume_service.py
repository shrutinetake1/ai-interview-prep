import os
import shutil
import uuid
from pathlib import Path
from fastapi import UploadFile, HTTPException, status
from app.core.config import settings
from app.models.resume import ResumeUploadResponse, ResumeAnalysisResult


class ResumeService:
    """Service class for handling resume persistence and AI parsing orchestration."""

    def __init__(self, upload_dir: str = settings.TEMP_UPLOAD_DIR) -> None:
        self.upload_dir = Path(upload_dir)
        self._ensure_upload_directory_exists()

    def _ensure_upload_directory_exists(self) -> None:
        """Create the temporary upload directory if not present."""
        self.upload_dir.mkdir(parents=True, exist_ok=True)

    async def save_uploaded_file(self, file: UploadFile) -> ResumeUploadResponse:
        """
        Validate and save an uploaded resume file temporarily to disk.
        
        Args:
            file: FastAPI UploadFile object received from the multipart request.

        Returns:
            ResumeUploadResponse containing metadata and temporary path.
        """
        if not file.filename:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Uploaded file must have a valid filename.",
            )

        # Basic extension validation (PDF, DOCX, TXT)
        allowed_extensions = {".pdf", ".docx", ".doc", ".txt"}
        file_ext = Path(file.filename).suffix.lower()
        if file_ext not in allowed_extensions:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Unsupported file type '{file_ext}'. Allowed types: {', '.join(allowed_extensions)}",
            )

        # Generate a unique filename to prevent collisions
        unique_filename = f"{uuid.uuid4().hex}_{file.filename}"
        target_path = self.upload_dir / unique_filename

        try:
            # Read and save file content asynchronously in chunks
            total_bytes = 0
            with open(target_path, "wb") as buffer:
                while chunk := await file.read(1024 * 1024):  # 1MB chunk
                    buffer.write(chunk)
                    total_bytes += len(chunk)

            return ResumeUploadResponse(
                filename=file.filename,
                saved_path=str(target_path),
                file_size_bytes=total_bytes,
                content_type=file.content_type,
                status="saved_temporarily",
                message="Resume uploaded and stored successfully. Ready for AI parsing.",
            )
        except Exception as e:
            # Cleanup on failure
            if target_path.exists():
                os.remove(target_path)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Failed to save uploaded file: {str(e)}",
            ) from e
        finally:
            await file.close()

    async def parse_and_analyze_resume(self, file_path: str) -> ResumeAnalysisResult:
        """
        Placeholder service method for future AI resume parsing & scoring pipeline.
        """
        # TODO: Integrate with OCR/PDF parsing (e.g., pypdf, pdfplumber) and OpenAI/Gemini LLM
        return ResumeAnalysisResult(
            candidate_name="Jane Doe",
            email="jane.doe@example.com",
            skills=["TypeScript", "React", "Next.js", "Python", "FastAPI", "PostgreSQL"],
            experience_years=4.5,
            ats_score=85,
            key_strengths=[
                "Strong full-stack experience with modern frameworks",
                "Clear quantifiable impact in project descriptions",
            ],
            suggested_improvements=[
                "Add more cloud infrastructure keywords (AWS, Docker, CI/CD)",
                "Expand on system design and architectural leadership achievements",
            ],
        )
