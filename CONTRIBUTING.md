# Contributing to AI-Powered Mock Interview & Resume Analyzer

Thank you for your interest in contributing to this project! We welcome contributors of all skill levels. This guide will walk you through setting up your local environment, making changes, and submitting a Pull Request (PR).

---

## 📋 Table of Contents
1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
   - [Fork & Clone](#1-fork--clone)
   - [Environment Setup](#2-environment-setup)
3. [Development Workflow](#development-workflow)
   - [Branch Naming Convention](#branch-naming-convention)
   - [Running Frontend & Backend](#running-the-development-servers)
4. [Coding Standards & Linting](#coding-standards--linting)
5. [Submitting a Pull Request](#submitting-a-pull-request)
6. [Need Help?](#need-help)

---

## 📜 Code of Conduct
Please be respectful, collaborative, and constructive when interacting with other members of the community and repository maintainers.

---

## 🛠 Getting Started

### 1. Fork & Clone
1. Click the **Fork** button at the top right of this GitHub repository to create your own copy.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<YOUR-USERNAME>/ai-interview-prep.git
   cd ai-interview-prep
   ```
3. Set the upstream remote to sync with latest changes:
   ```bash
   git remote add upstream https://github.com/thejitha-minindu/ai-interview-prep.git
   ```

### 2. Environment Setup

Copy the example environment configuration:
```bash
# At the root of the project
cp .env.example .env

# In the backend directory
cp backend/.env.example backend/.env

# In the frontend directory
cp frontend/.env.example frontend/.env.local
```

---

## 🌿 Development Workflow

### Branch Naming Convention
Always create a new branch from `main` before starting any work. Use the following naming format:

- `feat/<issue-number>-<short-description>`: New features (e.g., `feat/42-resume-parser`)
- `fix/<issue-number>-<short-description>`: Bug fixes (e.g., `fix/18-cors-header`)
- `docs/<short-description>`: Documentation changes (e.g., `docs/update-readme`)
- `chore/<short-description>`: Maintenance or tooling (e.g., `chore/ci-workflow`)
- `refactor/<short-description>`: Code refactoring without new features

Example:
```bash
git checkout -b feat/101-mock-interview-session
```

---

### Running the Development Servers

#### Backend (FastAPI):
```bash
cd backend
python -m venv .venv

# Activate venv:
# Windows (PowerShell):
.\.venv\Scripts\Activate.ps1
# macOS/Linux:
source .venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

#### Frontend (Next.js):
```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Coding Standards & Linting

Before pushing your code, make sure all linters and tests pass:

### Frontend
- Run Next.js lint:
  ```bash
  cd frontend
  npm run lint
  ```
- Use TypeScript types strictly; avoid `any`.
- Follow React functional component conventions and Tailwind CSS classes.

### Backend
- Run Ruff linter:
  ```bash
  cd backend
  ruff check .
  ```
- Ensure type annotations are used for all function arguments and returns.
- Follow [PEP 8](https://peps.python.org/pep-0008/) naming and formatting conventions.

---

## 🚀 Submitting a Pull Request

1. **Commit your changes**:
   Write clear, imperative commit messages:
   ```bash
   git add .
   git commit -m "feat(backend): add resume extraction service endpoint"
   ```

2. **Sync with upstream**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

3. **Push to your fork**:
   ```bash
   git push origin feat/your-branch-name
   ```

4. **Open a Pull Request**:
   - Go to the repository on GitHub.
   - Click **Compare & pull request**.
   - Fill out the PR template, linking the relevant issue (e.g., `Closes #42`).
   - Ensure all CI workflow checks pass.

---

## 💬 Need Help?
Feel free to open an issue or ask questions in existing discussions. Happy coding!
