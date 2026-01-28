# Database Integration Guide - Neon DB

Panduan lengkap untuk menghubungkan Portfolio Dashboard dengan Neon Database.

## 🚀 Setup Awal

### 1. Buat Neon Account & Database

1. Kunjungi [https://console.neon.tech](https://console.neon.tech)
2. Sign up dengan email Anda
3. Buat project baru
4. Buat database dengan nama `portfolio`
5. Copy connection string (format: `postgresql://user:password@hostname/database`)

### 2. Setup Environment Variables

1. Copy `.env.example` ke `.env`:

```bash
cp .env.example .env
```

2. Edit `.env` dan tambahkan connection string Anda:

```
DATABASE_URL=postgresql://user:password@your-neon-hostname/database?sslmode=require
```

### 3. Database Schema

Schema sudah siap di database Anda dengan 5 tabel utama:

#### `certifications`

- id (integer)
- title (varchar)
- website (varchar)
- date (varchar)
- icon (varchar)
- badge_alt (varchar)
- description (text)
- skills (text)
- created_at (timestamp)
- updated_at (timestamp)

#### `education`

- id (integer)
- institution (varchar)
- website (varchar)
- degree (varchar)
- start_date (varchar)
- end_date (varchar)
- location (varchar)
- content_en (text)
- content_id (text)
- created_at (timestamp)
- updated_at (timestamp)

#### `experiences`

- id (integer)
- company (varchar)
- company_url (varchar)
- position (varchar)
- start_date (varchar)
- end_date (varchar)
- type (varchar)
- technologies (jsonb)
- content_en (text)
- content_id (text)
- created_at (timestamp)
- updated_at (timestamp)

#### `projects`

- id (integer)
- name (varchar)
- link (varchar)
- repo_link (varchar)
- date (varchar)
- image (varchar)
- image_ext (varchar)
- technos (jsonb)
- type (jsonb)
- content_en (text)
- content_id (text)
- created_at (timestamp)
- updated_at (timestamp)

#### `skills`

- id (integer)
- title (varchar)
- type (varchar)
- url (varchar)
- icon (varchar)
- created_at (timestamp)
- updated_at (timestamp)

## 📁 Project Structure

```
src/
├── lib/
│   └── db.ts              # Database service layer
├── pages/
│   ├── api/
│   │   ├── certifications.ts
│   │   ├── education.ts
│   │   ├── experiences.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── manage/
│   │   ├── certifications.astro
│   │   ├── education.astro
│   │   ├── experiences.astro
│   │   ├── projects.astro
│   │   └── skills.astro
│   ├── dashboard.astro
│   ├── content.astro
│   └── media.astro
```

## 🔧 Database Service (`lib/db.ts`)

File ini berisi semua fungsi untuk CRUD operations:

### Certifications Functions

```typescript
-getCertifications() - // Get all certifications
  getCertificationById(id) - // Get single certification
  createCertification(data) - // Create new certification
  updateCertification(id, data) - // Update certification
  deleteCertification(id); // Delete certification
```

### Education Functions

```typescript
-getEducation() - // Get all education records
  getEducationById(id) - // Get single education
  createEducation(data) - // Create new education
  updateEducation(id, data) - // Update education
  deleteEducation(id); // Delete education
```

### Experiences Functions

```typescript
-getExperiences() - // Get all experiences
  getExperienceById(id) - // Get single experience
  createExperience(data) - // Create new experience
  updateExperience(id, data) - // Update experience
  deleteExperience(id); // Delete experience
```

### Projects Functions

```typescript
-getProjects() - // Get all projects
  getProjectById(id) - // Get single project
  createProject(data) - // Create new project
  updateProject(id, data) - // Update project
  deleteProject(id); // Delete project
```

### Skills Functions

```typescript
-getSkills() - // Get all skills
  getSkillById(id) - // Get single skill
  getSkillsByType(type) - // Get skills by type
  createSkill(data) - // Create new skill
  updateSkill(id, data) - // Update skill
  deleteSkill(id); // Delete skill
```

## 🌐 API Endpoints

### Skills API

```
GET    /api/skills                 // Get all skills
GET    /api/skills?id=1            // Get skill by ID
GET    /api/skills?type=frontend   // Get skills by type
POST   /api/skills                 // Create skill
PUT    /api/skills?id=1            // Update skill
DELETE /api/skills?id=1            // Delete skill
```

### Certifications API

```
GET    /api/certifications         // Get all certifications
GET    /api/certifications?id=1    // Get certification by ID
POST   /api/certifications         // Create certification
PUT    /api/certifications?id=1    // Update certification
DELETE /api/certifications?id=1    // Delete certification
```

### Education API

```
GET    /api/education              // Get all education
GET    /api/education?id=1         // Get education by ID
POST   /api/education              // Create education
PUT    /api/education?id=1         // Update education
DELETE /api/education?id=1         // Delete education
```

### Experiences API

```
GET    /api/experiences            // Get all experiences
GET    /api/experiences?id=1       // Get experience by ID
POST   /api/experiences            // Create experience
PUT    /api/experiences?id=1       // Update experience
DELETE /api/experiences?id=1       // Delete experience
```

### Projects API

```
GET    /api/projects               // Get all projects
GET    /api/projects?id=1          // Get project by ID
POST   /api/projects               // Create project
PUT    /api/projects?id=1          // Update project
DELETE /api/projects?id=1          // Delete project
```

## 📝 Management Pages

### Halaman-Halaman yang Tersedia

1. **Dashboard** (`/dashboard`)
   - Tampilan overview dengan stats
   - Konten terbaru

2. **Kelola Skills** (`/manage/skills`)
   - Lihat semua skills
   - Organized by type
   - Edit dan delete buttons

3. **Kelola Proyek** (`/manage/projects`)
   - Table view untuk projects
   - Lihat technologies
   - Edit dan delete

4. **Kelola Pengalaman** (`/manage/experiences`)
   - Card view untuk experiences
   - Lihat technologies used
   - Edit dan delete

5. **Kelola Pendidikan** (`/manage/education`)
   - Lihat institusi dan degree
   - Tanggal mulai dan berakhir
   - Edit dan delete

6. **Kelola Sertifikasi** (`/manage/certifications`)
   - Grid view untuk certifications
   - Lihat skills yang dipelajari
   - Edit dan delete

## 💻 Usage Examples

### Fetch Skills dari Server-Side

```typescript
import { getSkills, getSkillsByType } from "../lib/db";

// Di .astro file
const allSkills = await getSkills();
const frontendSkills = await getSkillsByType("frontend");
```

### Fetch API dari Client-Side

```javascript
// Fetch all skills
const response = await fetch("/api/skills");
const skills = await response.json();

// Fetch skill by type
const response = await fetch("/api/skills?type=frontend");
const skills = await response.json();

// Create skill
const newSkill = await fetch("/api/skills", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "React",
    type: "frontend",
    url: "https://reactjs.org",
    icon: "react-icon",
  }),
});

// Update skill
const updated = await fetch("/api/skills?id=1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "React.js",
  }),
});

// Delete skill
await fetch("/api/skills?id=1", {
  method: "DELETE",
});
```

## 🔒 Security Tips

1. **Never commit .env file** - Add to `.gitignore` ✅ (already done)
2. **Use environment variables** - Connection string tersembunyi
3. **Validate input** - Validasi data sebelum insert/update
4. **Rate limiting** - Implementasikan untuk API production

## 🚀 Deployment

### Deploy ke Vercel

1. Push code ke GitHub
2. Connect GitHub repo ke Vercel
3. Add environment variable `DATABASE_URL` di Vercel settings
4. Deploy!

### Deploy ke Netlify

1. Push code ke GitHub
2. Connect ke Netlify
3. Add build command: `npm run build`
4. Add environment variables
5. Deploy!

## 📞 Troubleshooting

### Connection Error

```
Error: connect ECONNREFUSED
```

**Solution:**

- Check DATABASE_URL format
- Verify Neon project is active
- Check network connection

### Query Error

```
Error: column "column_name" does not exist
```

**Solution:**

- Verify column names match schema
- Check database is up to date
- Run schema initialization query

### CORS Error

```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**

- Astro API routes automatically handle this
- Use server-side fetching when possible

## 📚 Resources

- [Neon Documentation](https://neon.tech/docs)
- [Astro Documentation](https://docs.astro.build)
- [PostgreSQL Docs](https://www.postgresql.org/docs)
- [Node.js PostgreSQL Client](https://node-postgres.com)

## ✅ Checklist

- [ ] Create Neon account
- [ ] Create database dan copy connection string
- [ ] Add DATABASE_URL ke .env
- [ ] Run `npm install` untuk install dependencies
- [ ] Test API endpoints
- [ ] Verify management pages show data
- [ ] Deploy to production

---

Happy coding! 🎉
