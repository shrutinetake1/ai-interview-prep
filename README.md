# AI-Powered Mock Interview & Resume Analyzer

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4+-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776ab?style=flat&logo=python)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An intelligent, full-stack platform designed to help job seekers practice realistic technical/behavioral mock interviews and receive actionable, AI-driven resume critiques.

---

## 🏗 Repository Architecture

```text
interview-ai-platform/
├── frontend/               # Next.js 14+ App Router, TypeScript, TailwindCSS
│   ├── app/                # App router pages & layouts
│   ├── components/         # Reusable UI components & shadcn elements
│   ├── lib/                # Utility helpers
│   └── public/             # Static assets
├── backend/                # FastAPI application
│   ├── app/
│   │   ├── api/            # API v1 routes & endpoints
│   │   ├── core/           # Configuration & settings
│   │   ├── models/         # Pydantic data schemas
│   │   ├── services/       # Business logic & AI orchestration
│   │   └── main.py         # Application entry point
│   ├── requirements.txt    # Python dependencies
│   └── .env.example
├── .github/
│   └── workflows/          # GitHub Actions CI pipelines
├── .env.example            # Monorepo environment blueprint
├── CONTRIBUTING.md         # Contribution guidelines
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: `v18.17+` or `v20+`
- **Python**: `v3.10+`
- **Package Managers**: `npm` (or `pnpm` / `yarn`), `pip` (or `uv`)

---

### 1. Backend Setup (FastAPI)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   ```bash
   # Windows (PowerShell)
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1

   # macOS / Linux
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

5. Start the FastAPI development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

   - API Documentation (Swagger UI): [http://localhost:8000/docs](http://localhost:8000/docs)
   - Health Check: [http://localhost:8000/api/v1/health](http://localhost:8000/api/v1/health)

---

### 2. Frontend Setup (Next.js)

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the Next.js development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Tech Stack Details

- **Frontend**:
  - [Next.js 14](https://nextjs.org/) (App Router, Server Components)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Lucide Icons](https://lucide.dev/)
  - [shadcn/ui](https://ui.shadcn.com/) ready
- **Backend**:
  - [FastAPI](https://fastapi.tiangolo.com/)
  - [Uvicorn](https://www.uvicorn.org/) (ASGI Server)
  - [Pydantic v2](https://docs.pydantic.dev/latest/) (Data validation and Settings)
  - [Python Multipart](https://andrew-d.github.io/python-multipart/) (File upload handling)
- **CI/CD**:
  - GitHub Actions for automated linting and code quality checks

---

## 🤝 Contributing

We welcome contributions! Please review our [CONTRIBUTING.md](./CONTRIBUTING.md) guide for details on our code of conduct, development workflow, and pull request process.

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
