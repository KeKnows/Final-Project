# StierSpeed: AI-Powered Sprint Training App
Overview

StierSpeed is a performance-tracking and AI analytics app built for track and field sprinters who specialize in the 100m, 200m, and 400m events. The platform helps athletes monitor workouts, analyze their data, and receive professional-grade AI recommendations to enhance speed, strength, and overall performance.

Problem It Solves

Sprinters often rely on generic training plans or manual tracking methods that don’t adapt to their individual performance data. StierSpeed fills this gap by providing data-driven insights, personalized workout plans, and event-specific lifting programs powered by AI.

Core Features

Log and track sprinting and lifting sessions

AI-generated performance summaries and improvement tips

Visual analytics dashboards for tracking speed and strength gains

Personalized training and recovery recommendations

Technology Stack
Layer	Technology
Frontend	React
Backend	Python (FastAPI)
Database	PostgreSQL
Deployment	Docker + AWS
AI Tools	OpenAI API or custom ML model
AI Integration

StierSpeed uses AI to interpret athlete data, summarize key performance metrics, and generate expert-grade training advice. It helps athletes train smarter, not harder, by tailoring plans to their specific event needs and past results.

MVP Goals

User authentication system

Workout tracking interface

Basic analytics dashboard

AI summary generator

Future Enhancements

Advanced AI model for predictive analytics

Integration with wearable devices (Garmin, Strava, etc.)

Social leaderboard and competition tracking

(Updates)

This PR updates the documentation for the MVP:

- Added setup instructions for backend and frontend
- Documented all MVP features: authentication, workout tracking, dashboard, AI summary
- Added AI tool usage section (ChatGPT, GitHub Copilot)
- Listed branches and commits used for feature development
- Updated Confluence page with screenshots and descriptions

- # StierSpeed MVP Documentation

## Setup Instructions

### Backend
1. Navigate to backend folder:
cd backend

 
2. Install dependencies:
pip install -r requirements.txt


3. Run backend server:
uvicorn main:app --reload


### Frontend
1. Navigate to frontend folder:
cd frontend

 
2. Install dependencies:
npm install

3. Run frontend:
npm run dev

javascript
Copy code
4. Set API URL in `.env`:
VITE_API_URL=http://localhost:8000

yaml

---

## Features

- **User Authentication:** Signup/Login with JWT tokens
- **Workout Tracking:** Log sprints and strength workouts (add/edit/delete)
- **Dashboard:** Line charts showing weekly progress
- **AI Text Summaries:** Weekly summaries of workouts for performance insights

---

## AI Tool Usage

- **ChatGPT / OpenAI API:** Suggested code snippets for backend routes and frontend components
- **GitHub Copilot:** Assisted in writing React components and FastAPI CRUD routes

---

## Branches & Commits

| Branch                  | Purpose                                      | Example Commits                                 |
|--------------------------|----------------------------------------------|------------------------------------------------|
| feature/auth-backend     | Backend signup/login                         | feat(auth): add User model                     |
| feature/signup-ui        | Frontend Signup page                          | feat(frontend): add Signup page               |
| feature/login-ui         | Frontend Login page                           | feat(frontend): add Login page                |
| feature/workout-tracking | Backend & frontend workout CRUD               | feat(workout): add Workout model and routes   |
| feature/dashboard        | Dashboard with charts                          | feat(frontend): add Dashboard page            |
| feature/ai-summary       | AI weekly summary                             | feat(ai): add summary route                   |
| feature/docs             | Documentation updates                          | docs: update README and Confluence            |
