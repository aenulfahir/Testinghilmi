@echo off
echo ========================================
echo    TESTING HILMI WEBSITE
echo ========================================
echo.

echo 1. Testing Backend API...
echo Testing health endpoint...
curl -s http://localhost:3001/health
echo.
echo.

echo 2. Testing Frontend...
echo Frontend URL: http://localhost:3002
echo.
echo 3. Testing API Endpoints...
echo.
echo Users Test:
curl -s http://localhost:3001/users/test
echo.
echo.
echo Events:
curl -s http://localhost:3001/events
echo.
echo.
echo Articles:
curl -s http://localhost:3001/articles
echo.
echo.

echo ========================================
echo    WEBSITE TEST COMPLETED
echo ========================================
echo.
echo Access URLs:
echo - Frontend: http://localhost:3002
echo - Backend API: http://localhost:3001
echo - API Docs: http://localhost:3001/api
echo.
echo Test Steps:
echo 1. Open http://localhost:3002 in browser
echo 2. Test navigation menu
echo 3. Test responsive design
echo 4. Test login functionality
echo 5. Test dashboard after login
echo.
pause 