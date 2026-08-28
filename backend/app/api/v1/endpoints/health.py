from typing import Dict
from fastapi import APIRouter, status
from app.core.config import settings

router = APIRouter()


@router.get(
    "/health",
    status_code=status.HTTP_200_OK,
    summary="Service Health Check",
    response_description="Returns operational status of the FastAPI backend",
)
async def health_check() -> Dict[str, str]:
    """
    Health check endpoint for container orchestrators, load balancers, and monitoring.
    """
    return {
        "status": "ok",
        "service": settings.PROJECT_NAME,
        "environment": settings.ENVIRONMENT,
    }
