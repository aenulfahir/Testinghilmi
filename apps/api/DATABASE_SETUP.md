# Database Setup Guide for HILMI API

## Issues Found and Fixed

### 1. Environment Variable Issues
- **Problem**: .env file had UTF-16 encoding with BOM, causing Prisma to fail reading environment variables
- **Solution**: Recreated .env file with proper UTF-8 encoding

### 2. Database Connection Issues
- **Problem**: Provided remote database credentials were invalid
- **Solution**: Set up local PostgreSQL development environment

## Quick Setup (Recommended)

### Option 1: Docker PostgreSQL (Recommended for Development)

1. **Start PostgreSQL with Docker**:
   ```bash
   docker-compose up -d
   ```

2. **Set up the database**:
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

3. **Start the API**:
   ```bash
   npm run start:dev
   ```

### Option 2: Local PostgreSQL

1. **Install PostgreSQL** locally
2. **Create database**:
   ```sql
   CREATE DATABASE hilmiweb;
   CREATE USER postgres WITH PASSWORD 'password';
   GRANT ALL PRIVILEGES ON DATABASE hilmiweb TO postgres;
   ```

3. **Update .env file** with your local credentials

## Verification Steps

1. **Check database connection**:
   ```bash
   npx prisma db pull
   ```

2. **Test API endpoints**:
   - Swagger UI: http://localhost:3001/api
   - Health check: http://localhost:3001

## Production Database Setup

For production, update the .env file with your actual database credentials:

```env
DATABASE_URL="postgresql://username:password@host:port/database?schema=public"
```

## Troubleshooting

### Common Issues and Solutions

1. **"Environment variable not found"**:
   - Ensure .env file is in UTF-8 encoding
   - Check file is in the correct location (apps/api/.env)

2. **"Authentication failed"**:
   - Verify database credentials
   - Check if database server is running
   - Ensure firewall allows connections

3. **"Database does not exist"**:
   - Create the database manually or use `npx prisma db push`

4. **Port conflicts**:
   - Change PORT in .env file if 3001 is already in use