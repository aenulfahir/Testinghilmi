# Fix PostgreSQL Connection Guide

## Current Issue
❌ **Authentication failed** with provided PostgreSQL credentials:
- Host: 103.94.238.99:65433
- Database: buburayam3542_hilmiweb
- Username: buburayam3542_sumopod
- Password: B-SoAwTNBpMKue9

## Immediate Solutions

### Option 1: Verify Current Credentials
1. **Test connection directly**:
```bash
# Test with psql (if installed)
psql "postgresql://buburayam3542_sumopod:B-SoAwTNBpMKue9@103.94.238.99:65433/buburayam3542_hilmiweb"

# Or test with curl
curl -v telnet://103.94.238.99:65433
```

2. **Check if database exists**:
```bash
# Test database accessibility
npx prisma db pull
```

### Option 2: Use Local PostgreSQL (Recommended)
1. **Start local PostgreSQL with Docker**:
```bash
# From apps/api directory
docker-compose -f docker-compose.postgres.yml up -d

# Then use local PostgreSQL
cp .env.local.postgres .env
```

2. **Setup local database**:
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

### Option 3: Update with Valid Credentials
If you have correct credentials, update the .env file:

```env
DATABASE_URL=postgresql://[username]:[password]@[host]:[port]/[database]?schema=public
```

## Database Connection Status
✅ **Website is running** with SQLite (current setup)
- Frontend: http://localhost:3000
- Backend: http://localhost:3002
- API Docs: http://localhost:3002/api

## Next Steps
1. **Verify credentials** with your hosting provider
2. **Or use local PostgreSQL** with provided Docker setup
3. **Or continue with SQLite** for development

## Testing Connection
After updating credentials:
```bash
# Test database connection
npx prisma db pull

# If successful, setup database
npx prisma generate
npx prisma db push
npx prisma db seed

# Start application
npm run start:dev
```

## Current Working Setup
The website is fully functional with SQLite. To switch to PostgreSQL, please provide valid credentials or use the local setup.