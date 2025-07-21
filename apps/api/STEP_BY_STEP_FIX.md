# Step-by-Step Database Connection Fix

## Current Status
❌ PostgreSQL remote credentials are invalid
✅ Website is running with SQLite (working)

## Step 1: Get Valid PostgreSQL Credentials

### Option A: Contact Your Hosting Provider
1. **Verify the credentials**:
   - Host: 103.94.238.99:65433
   - Database: buburayam3542_hilmiweb
   - Username: buburayam3542_sumopod
   - Password: B-SoAwTNBpMKue9

2. **Check with your hosting provider** if these credentials are correct

### Option B: Install PostgreSQL Locally
1. **Download PostgreSQL** from https://www.postgresql.org/download/
2. **Install with default settings**
3. **Create database and user**:

```sql
-- Open pgAdmin or psql and run:
CREATE DATABASE hilmiweb;
CREATE USER hilmiuser WITH PASSWORD 'hilmi123';
GRANT ALL PRIVILEGES ON DATABASE hilmiweb TO hilmiuser;
```

## Step 2: Update Database Configuration

### For Local PostgreSQL:
1. **Update .env file**:
```bash
# Copy local PostgreSQL config
cp .env.local.postgres .env
```

2. **Update Prisma schema** (already done):
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## Step 3: Setup Database

### If using local PostgreSQL:
```bash
# From apps/api directory
npx prisma generate
npx prisma db push
npx prisma db seed
```

### If using valid remote credentials:
1. **Update .env with correct credentials**:
```env
DATABASE_URL=postgresql://[correct-username]:[correct-password]@103.94.238.99:65433/buburayam3542_hilmiweb
```

2. **Setup database**:
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

## Step 4: Test Connection

### Test PostgreSQL connection:
```bash
# Test database connection
npx prisma db pull

# If successful, you'll see database schema
```

## Current Working Setup (SQLite)
While fixing PostgreSQL, you can continue development with SQLite:
- ✅ Frontend: http://localhost:3000
- ✅ Backend: http://localhost:3002
- ✅ Database: SQLite (file: ./dev.db)

## Quick Fix Commands

### To use SQLite (current working):
```bash
# Already configured and working
```

### To use PostgreSQL (when ready):
```bash
# 1. Update .env with correct credentials
# 2. Run setup commands
npx prisma generate
npx prisma db push
npx prisma db seed
npm run start:dev
```

## Need Help?
1. **Check database accessibility** with your hosting provider
2. **Verify credentials** are correct
3. **Use local PostgreSQL** as backup solution
4. **Continue with SQLite** for development

## Summary
The website is fully functional with SQLite. To connect to PostgreSQL, you need either:
1. ✅ Valid credentials from your hosting provider
2. ✅ Local PostgreSQL installation
3. ✅ Continue with SQLite (recommended for development)