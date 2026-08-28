from contextlib import asynccontextmanager
from typing import AsyncGenerator
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.router import api_router
from app.core.config import settings


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Application startup and shutdown event lifespan."""
    # Code executed on startup
    print(f"Starting {settings.PROJECT_NAME} in [{settings.ENVIRONMENT}] mode...")
    yield
    # Code executed on shutdown
    print(f"Shutting down {settings.PROJECT_NAME}...")


def create_application() -> FastAPI:
    """Factory to instantiate and configure the FastAPI application."""
    application = FastAPI(
        title=settings.PROJECT_NAME,
        openapi_url=f"{settings.API_V1_STR}/openapi.json",
        docs_url="/docs",
        redoc_url="/redoc",
        lifespan=lifespan,
    )

    # CORS Middleware Configuration
    origins = (
        settings.CORS_ORIGINS
        if isinstance(settings.CORS_ORIGINS, list)
        else [settings.CORS_ORIGINS]
    )

    application.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Include API Routers
    application.include_router(api_router, prefix=settings.API_V1_STR)

    @application.get("/", tags=["Root"])
    async def root():
        return {
            "message": f"Welcome to {settings.PROJECT_NAME}",
            "docs": "/docs",
            "health": f"{settings.API_V1_STR}/health",
        }

    return application


app = create_application()
