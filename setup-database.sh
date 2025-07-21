#!/bin/bash

echo "Setting up HILMI Database..."
echo

echo "1. Generating Prisma Client..."
cd apps/api
npx prisma generate

echo
echo "2. Pushing schema to database..."
npx prisma db push

echo
echo "3. Creating sample data..."
npx prisma db seed

echo
echo "Database setup completed!"
echo "You can now run the application."
echo 