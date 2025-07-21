@echo off
echo Testing HILMI Application...
echo.

echo 1. Testing Backend API...
echo Testing endpoint: http://localhost:3001/users/test
curl -s http://localhost:3001/users/test
echo.
echo.

echo 2. Testing Frontend...
echo Frontend should be running at: http://localhost:3000
echo.
echo 3. Testing Database...
echo Testing endpoint: http://localhost:3001/users/all
curl -s http://localhost:3001/users/all
echo.
echo.

echo Test completed!
echo.
echo To access the application:
echo - Frontend: http://localhost:3000
echo - Backend API: http://localhost:3001
echo - API Docs: http://localhost:3001/api
echo.
pause 