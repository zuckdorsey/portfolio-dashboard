# Quick Start Guide - Portfolio Dashboard dengan Neon DB

## 1️⃣ Setup Database (5 menit)

### Step 1: Create Neon Project

```
1. Go to https://console.neon.tech
2. Sign up dengan email
3. Create new project → nama: "portfolio"
4. Copy connection string
```

### Step 2: Configure Environment

```bash
# Edit .env file
echo "DATABASE_URL=postgresql://user:password@your-neon-hostname/database?sslmode=require" > .env
```

## 2️⃣ Install Dependencies (2 menit)

```bash
cd portfolio-dashboard
npm install
```

Dependencies yang sudah terinstall:

- `@neondatabase/serverless` - Neon Database Client
- `tailwindcss` - CSS Styling
- `astro` - Framework

## 3️⃣ Test Connection (3 menit)

### Cek database dengan cURL:

```bash
# Get all skills
curl http://localhost:3000/api/skills

# Output: Array of skills atau []
```

Jika error → Check DATABASE_URL di .env

## 4️⃣ Run Development Server (1 menit)

```bash
npm run dev
```

Server running di: `http://localhost:3000`

### Akses Dashboard:

- **Dashboard**: http://localhost:3000/dashboard
- **Kelola Skills**: http://localhost:3000/manage/skills
- **Kelola Proyek**: http://localhost:3000/manage/projects
- **Kelola Pengalaman**: http://localhost:3000/manage/experiences
- **Kelola Pendidikan**: http://localhost:3000/manage/education
- **Kelola Sertifikasi**: http://localhost:3000/manage/certifications

## 5️⃣ Add Sample Data (optional)

### Via API (using cURL):

```bash
# Add skill
curl -X POST http://localhost:3000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "title": "React",
    "type": "frontend",
    "url": "https://reactjs.org",
    "icon": "react"
  }'

# Add project
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My Awesome Website",
    "link": "https://mysite.com",
    "repo_link": "https://github.com/user/repo",
    "date": "2024-01-28",
    "image": "project.jpg",
    "image_ext": "jpg",
    "technos": ["React", "TypeScript"],
    "type": ["Web"],
    "content_en": "A beautiful website",
    "content_id": "A beautiful website"
  }'
```

### Or via SQL directly:

```sql
-- Add sample skill
INSERT INTO skills (title, type, url, icon)
VALUES ('React', 'frontend', 'https://reactjs.org', 'react');

-- Add sample project
INSERT INTO projects (name, link, repo_link, date, image, image_ext, technos, type, content_en, content_id)
VALUES (
  'My Project',
  'https://myproject.com',
  'https://github.com/user/repo',
  '2024-01-28',
  'project.jpg',
  'jpg',
  '["React", "Node.js"]',
  '["Web"]',
  'A great project',
  'A great project'
);
```

## 📁 File Structure

```
src/
├── lib/db.ts                    # Database functions
├── pages/
│   ├── api/
│   │   ├── skills.ts           # Skills API
│   │   ├── projects.ts         # Projects API
│   │   ├── experiences.ts      # Experiences API
│   │   ├── education.ts        # Education API
│   │   └── certifications.ts   # Certifications API
│   └── manage/
│       ├── skills.astro        # Manage skills page
│       ├── projects.astro      # Manage projects page
│       ├── experiences.astro   # Manage experiences page
│       ├── education.astro     # Manage education page
│       └── certifications.astro# Manage certifications page
├── dashboard.astro             # Dashboard main page
└── components/                 # Reusable components
```

## 🔧 Environment Variables

```env
# .env file (create this)
DATABASE_URL=postgresql://user:password@hostname/database?sslmode=require
```

## 🚀 Build for Production

```bash
npm run build
```

Output di folder `dist/` siap untuk deploy.

## 📝 Common Commands

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build           # Build for production
npm run preview         # Preview production build

# Database
# (No special command, menggunakan @neondatabase/serverless)
```

## 🆘 Troubleshooting

### Problem: "DATABASE_URL not found"

```
Solution:
1. Create .env file
2. Add DATABASE_URL
3. Restart dev server (npm run dev)
```

### Problem: "Cannot connect to database"

```
Solution:
1. Verify DATABASE_URL format
2. Check Neon project is active
3. Try pinging database from Neon console
```

### Problem: "API returns 500 error"

```
Solution:
1. Check server logs
2. Verify table names match schema
3. Check DATABASE_URL in .env
```

### Problem: "Pages showing no data"

```
Solution:
1. Check if data exists in database
2. Use API endpoint to test
3. Check browser console for errors
```

## 📚 Next Steps

1. **Add more data** → Use API endpoints atau SQL directly
2. **Customize styling** → Edit Tailwind classes
3. **Add authentication** → Implement login system
4. **Deploy** → Push to Vercel/Netlify
5. **CI/CD** → Setup GitHub Actions

## 🎯 Features Implemented

✅ Server-side database integration
✅ API endpoints untuk CRUD
✅ Management pages untuk semua data types
✅ Responsive dashboard UI
✅ Tailwind CSS styling
✅ Environment configuration
✅ Error handling

## 📖 Documentation Files

- `DATABASE_SETUP.md` - Detailed database setup guide
- `API_TESTING.md` - API testing examples
- `DASHBOARD_DOCS.md` - Dashboard features overview
- `.env.example` - Environment variables template

## ✨ Tips

1. **Always use server-side rendering** untuk database operations
2. **Validate data** sebelum insert/update
3. **Use pagination** untuk large datasets
4. **Cache responses** untuk performance
5. **Monitor database** di Neon console

## 🆔 Database Connection

Using **Neon's serverless PostgreSQL**:

- Instant provisioning
- Auto-scaling
- Pay per use
- Built-in backups

Perfect untuk portfolio dashboard!

---

**Questions?** Check the documentation files atau visit:

- [Neon Docs](https://neon.tech/docs)
- [Astro Docs](https://docs.astro.build)
- [PostgreSQL Docs](https://postgresql.org/docs)

Happy coding! 🎉
