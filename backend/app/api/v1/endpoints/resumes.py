from fastapi import APIRouter, File, UploadFile, Depends, status
from app.models.resume import ResumeUploadResponse
from app.services.resume_service import ResumeService

router = APIRouter()


def get_resume_service() -> ResumeService:
    """Dependency provider for ResumeService."""
    return ResumeService()


@router.post(
    "/upload",
    response_model=ResumeUploadResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Upload Candidate Resume",
    response_description="Returns upload status and temporary storage metadata",
)
async def upload_resume(
    file: UploadFile = File(..., description="Resume file in PDF, DOCX, or TXT format"),
    service: ResumeService = Depends(get_resume_service),
) -> ResumeUploadResponse:
    """
    Accepts a multipart resume file upload, saves it temporarily on the server,
    and returns a structured response ready for downstream parsing and AI scoring.
    """
    result = await service.save_uploaded_file(file)
    return result
