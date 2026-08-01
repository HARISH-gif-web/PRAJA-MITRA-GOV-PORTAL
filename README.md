# PrajaMitra — Government Citizen Grievance Portal

PrajaMitra is a full-stack citizen complaint management system designed for Indian government departments. It enables citizens to register complaints, track status, and nodal authorities to manage, assign, and resolve issues dynamically.

## Key Features

- **Citizen Gateway**: Register complaints (support for geo-coordinates, audio/video evidence, and AI assistance), search grievances, and track live status.
- **Admin Control Desk**: A premium React dashboard featuring analytics graphs, department triaging, citizen registers, and officer assignment controls.
- **Dynamic Security Passkeys**: Departmental authority login protected by passkeys configurable directly from the system settings.
- **AI Assist**: Powered by Google Gemini API to analyze and categorize public grievances automatically.

---

## Tech Stack

- **Backend**: Node.js + Express (`server.js`)
- **Database**: File-based JSON Database (`database.json`)
- **Frontend Core**: Vanilla HTML/CSS/JS (served statically)
- **Admin Panel**: React + Vite + Tailwind CSS (`src/admin/`, built to `/admin-dist`)

---

## Getting Started

### Local Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   JWT_SECRET=your_jwt_secret_here
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Build the React Admin Panel**:
   ```bash
   npm run build
   ```

4. **Run the Server**:
   ```bash
   npm start
   ```
   Open `http://localhost:5000` in your web browser.

---

## Vercel Deployment

This project is configured for Vercel static builds. The output directory is customized to `admin-dist` via `vercel.json`.
