# API Testing Examples

Contoh-contoh untuk test semua API endpoints.

## 🔧 Testing dengan cURL

### Skills API

```bash
# Get all skills
curl http://localhost:3000/api/skills

# Get skill by ID
curl "http://localhost:3000/api/skills?id=1"

# Get skills by type
curl "http://localhost:3000/api/skills?type=frontend"

# Create skill
curl -X POST http://localhost:3000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "title": "React",
    "type": "frontend",
    "url": "https://reactjs.org",
    "icon": "react-icon"
  }'

# Update skill
curl -X PUT "http://localhost:3000/api/skills?id=1" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "React.js",
    "type": "frontend"
  }'

# Delete skill
curl -X DELETE "http://localhost:3000/api/skills?id=1"
```

### Projects API

```bash
# Get all projects
curl http://localhost:3000/api/projects

# Get project by ID
curl "http://localhost:3000/api/projects?id=1"

# Create project
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "E-Commerce Website",
    "link": "https://myshop.com",
    "repo_link": "https://github.com/user/shop",
    "date": "2024-01-15",
    "image": "project.jpg",
    "image_ext": "jpg",
    "technos": ["React", "Node.js", "MongoDB"],
    "type": ["Web"],
    "content_en": "Built an e-commerce platform",
    "content_id": "Built an e-commerce platform"
  }'

# Update project
curl -X PUT "http://localhost:3000/api/projects?id=1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Project Name"
  }'

# Delete project
curl -X DELETE "http://localhost:3000/api/projects?id=1"
```

### Experiences API

```bash
# Get all experiences
curl http://localhost:3000/api/experiences

# Get experience by ID
curl "http://localhost:3000/api/experiences?id=1"

# Create experience
curl -X POST http://localhost:3000/api/experiences \
  -H "Content-Type: application/json" \
  -d '{
    "company": "Tech Company",
    "company_url": "https://techcompany.com",
    "position": "Frontend Developer",
    "start_date": "2022-01-01",
    "end_date": "2023-12-31",
    "type": "Full-time",
    "technologies": ["React", "TypeScript", "Tailwind CSS"],
    "content_en": "Built and maintained React components",
    "content_id": "Built and maintained React components"
  }'

# Update experience
curl -X PUT "http://localhost:3000/api/experiences?id=1" \
  -H "Content-Type: application/json" \
  -d '{
    "position": "Senior Frontend Developer"
  }'

# Delete experience
curl -X DELETE "http://localhost:3000/api/experiences?id=1"
```

### Education API

```bash
# Get all education records
curl http://localhost:3000/api/education

# Get education by ID
curl "http://localhost:3000/api/education?id=1"

# Create education
curl -X POST http://localhost:3000/api/education \
  -H "Content-Type: application/json" \
  -d '{
    "institution": "State University",
    "website": "https://university.edu",
    "degree": "Bachelor of Science in Computer Science",
    "start_date": "2018-09-01",
    "end_date": "2022-05-30",
    "location": "City, Country",
    "content_en": "Studied computer science fundamentals",
    "content_id": "Studied computer science fundamentals"
  }'

# Update education
curl -X PUT "http://localhost:3000/api/education?id=1" \
  -H "Content-Type: application/json" \
  -d '{
    "degree": "Bachelor of Science in Software Engineering"
  }'

# Delete education
curl -X DELETE "http://localhost:3000/api/education?id=1"
```

### Certifications API

```bash
# Get all certifications
curl http://localhost:3000/api/certifications

# Get certification by ID
curl "http://localhost:3000/api/certifications?id=1"

# Create certification
curl -X POST http://localhost:3000/api/certifications \
  -H "Content-Type: application/json" \
  -d '{
    "title": "AWS Certified Developer",
    "website": "https://aws.amazon.com/certification/",
    "date": "2023-06-15",
    "icon": "aws-icon",
    "badge_alt": "AWS Certified Badge",
    "description": "Certified in AWS development",
    "skills": "AWS, Cloud Computing, Lambda"
  }'

# Update certification
curl -X PUT "http://localhost:3000/api/certifications?id=1" \
  -H "Content-Type: application/json" \
  -d '{
    "skills": "AWS, Cloud Computing, Lambda, DynamoDB"
  }'

# Delete certification
curl -X DELETE "http://localhost:3000/api/certifications?id=1"
```

## 🧪 Testing dengan JavaScript/Fetch

### Setup Test File

Buat file `test-api.js`:

```javascript
const API_BASE = "http://localhost:3000/api";

// Helper function
async function apiCall(endpoint, method = "GET", data = null) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_BASE}${endpoint}`, options);
  return await response.json();
}

// Test Skills
async function testSkills() {
  console.log("=== Testing Skills API ===");

  // Get all
  const skills = await apiCall("/skills");
  console.log("All skills:", skills);

  // Get by type
  const frontend = await apiCall("/skills?type=frontend");
  console.log("Frontend skills:", frontend);

  // Create
  const newSkill = await apiCall("/skills", "POST", {
    title: "Vue.js",
    type: "frontend",
    url: "https://vuejs.org",
    icon: "vue-icon",
  });
  console.log("Created:", newSkill);

  // Update
  const updated = await apiCall("/skills?id=1", "PUT", {
    title: "Vue.js 3",
  });
  console.log("Updated:", updated);

  // Delete
  await apiCall("/skills?id=1", "DELETE");
  console.log("Deleted skill with ID 1");
}

// Test Projects
async function testProjects() {
  console.log("=== Testing Projects API ===");

  const projects = await apiCall("/projects");
  console.log("All projects:", projects);
}

// Test Experiences
async function testExperiences() {
  console.log("=== Testing Experiences API ===");

  const experiences = await apiCall("/experiences");
  console.log("All experiences:", experiences);
}

// Test Education
async function testEducation() {
  console.log("=== Testing Education API ===");

  const education = await apiCall("/education");
  console.log("All education:", education);
}

// Test Certifications
async function testCertifications() {
  console.log("=== Testing Certifications API ===");

  const certs = await apiCall("/certifications");
  console.log("All certifications:", certs);
}

// Run all tests
async function runAllTests() {
  try {
    await testSkills();
    await testProjects();
    await testExperiences();
    await testEducation();
    await testCertifications();
    console.log("✅ All tests completed!");
  } catch (error) {
    console.error("❌ Test error:", error);
  }
}

// Run tests
runAllTests();
```

### Run Tests

```bash
node test-api.js
```

## 🔍 Testing dengan Postman

1. **Import API Collection** (optional)
   - Create new collection "Portfolio API"
   - Add requests untuk setiap endpoint

2. **Test GET Requests**
   - Click New Request
   - Select GET method
   - Enter URL: `http://localhost:3000/api/skills`
   - Send

3. **Test POST Requests**
   - Select POST method
   - Go to Body tab
   - Select "raw" and "JSON"
   - Add request body
   - Send

4. **Save Requests**
   - Save setiap request di collection
   - Dapat di-run berkali-kali

## ✅ Expected Responses

### Success Response

```json
{
  "id": 1,
  "title": "React",
  "type": "frontend",
  "created_at": "2024-01-28T10:30:00Z",
  "updated_at": "2024-01-28T10:30:00Z"
}
```

### Error Response

```json
{
  "error": "ID is required"
}
```

### Array Response

```json
[
  {
    "id": 1,
    "title": "React",
    "type": "frontend"
  },
  {
    "id": 2,
    "title": "Vue.js",
    "type": "frontend"
  }
]
```

## 🐛 Common Issues & Solutions

### Issue: 404 Not Found

**Solution:** Verify URL path dan method yang benar

### Issue: 500 Internal Error

**Solution:** Check server logs dan DATABASE_URL

### Issue: Empty response

**Solution:** Verify database has data atau gunakan GET dengan proper query params

### Issue: CORS Error

**Solution:** Pastikan menggunakan URL yang benar (localhost:3000)

---

Happy testing! 🧪
