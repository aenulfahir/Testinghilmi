@echo off
echo Starting HILMI Development Servers...
echo.

echo Starting Backend API (NestJS)...
start "HILMI Backend" cmd /k "cd apps/api && npm run start:dev"

echo Waiting 5 seconds for backend to start...
timeout /t 5 /nobreak > nul

echo Starting Frontend (Next.js)...
start "HILMI Frontend" cmd /k "cd apps/web && npm run dev"

echo.
echo Development servers started!
echo Backend: http://localhost:3001
echo Frontend: http://localhost:3000
echo.
pause 