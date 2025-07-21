#!/bin/bash

echo "Starting HILMI Development Servers..."
echo

echo "Starting Backend API (NestJS)..."
cd apps/api && npm run start:dev &
BACKEND_PID=$!

echo "Waiting 5 seconds for backend to start..."
sleep 5

echo "Starting Frontend (Next.js)..."
cd ../web && npm run dev &
FRONTEND_PID=$!

echo
echo "Development servers started!"
echo "Backend: http://localhost:3001"
echo "Frontend: http://localhost:3000"
echo
echo "Press Ctrl+C to stop all servers"

# Wait for user to stop
wait 