import { neon } from '@neondatabase/serverless';

const DATABASE_URL = import.meta.env.DATABASE_URL || process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not set');
}

// Use neon serverless driver for Vercel compatibility
const sql = DATABASE_URL ? neon(DATABASE_URL) : null;

// Helper function to execute queries
const query = async <T>(text: string, params: any[] = []): Promise<{ rows: T[] }> => {
  if (!sql) {
    throw new Error('Database not configured - DATABASE_URL is missing');
  }
  const result = await sql.call(null, [text, ...params].join('|||').split('|||').shift()!, params);
  return { rows: result as T[] };
};

// Types untuk setiap tabel
export interface Certification {
  id: number;
  title: string;
  website: string;
  date: string;
  icon: string;
  badge_alt: string;
  description: string;
  skills: string;
  created_at: string;
  updated_at: string;
}

export interface Education {
  id: number;
  institution: string;
  website: string;
  degree: string;
  start_date: string;
  end_date: string;
  location: string;
  content_en: string;
  content_id: string;
  created_at: string;
  updated_at: string;
}

export interface Experience {
  id: number;
  company: string;
  company_url: string;
  position: string;
  start_date: string;
  end_date: string;
  type: string;
  technologies: any[];
  content_en: string;
  content_id: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  name: string;
  link: string;
  repo_link: string;
  date: string;
  image: string;
  image_ext: string;
  technos: any[];
  type: any[];
  content_en: string;
  content_id: string;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: number;
  title: string;
  type: string;
  url: string;
  icon: string;
  created_at: string;
  updated_at: string;
}

// ===== CERTIFICATIONS =====
export async function getCertifications(): Promise<Certification[]> {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`SELECT * FROM certifications ORDER BY created_at DESC`;
    return result as Certification[];
  } catch (error) {
    console.error('Error fetching certifications:', error);
    throw error;
  }
}

export async function getCertificationById(id: number): Promise<Certification | null> {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`SELECT * FROM certifications WHERE id = ${id}`;
    return result.length > 0 ? result[0] as Certification : null;
  } catch (error) {
    console.error('Error fetching certification:', error);
    throw error;
  }
}

export async function createCertification(data: Omit<Certification, 'id' | 'created_at' | 'updated_at'>) {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`
      INSERT INTO certifications (title, website, date, icon, badge_alt, description, skills)
      VALUES (${data.title}, ${data.website}, ${data.date}, ${data.icon}, ${data.badge_alt}, ${data.description}, ${data.skills})
      RETURNING *`;
    return result[0] as Certification;
  } catch (error) {
    console.error('Error creating certification:', error);
    throw error;
  }
}

export async function updateCertification(id: number, data: Partial<Omit<Certification, 'id' | 'created_at' | 'updated_at'>>) {
  if (!sql) throw new Error('Database not configured');
  try {
    // Build dynamic update
    const updates: string[] = [];
    const values: any[] = [];

    if (data.title !== undefined) { updates.push('title'); values.push(data.title); }
    if (data.website !== undefined) { updates.push('website'); values.push(data.website); }
    if (data.date !== undefined) { updates.push('date'); values.push(data.date); }
    if (data.icon !== undefined) { updates.push('icon'); values.push(data.icon); }
    if (data.badge_alt !== undefined) { updates.push('badge_alt'); values.push(data.badge_alt); }
    if (data.description !== undefined) { updates.push('description'); values.push(data.description); }
    if (data.skills !== undefined) { updates.push('skills'); values.push(data.skills); }

    // Use raw SQL for dynamic updates
    const setClauses = updates.map((col, i) => `${col} = $${i + 1}`).join(', ');
    const rawSql = neon(DATABASE_URL!);
    const result = await rawSql(`UPDATE certifications SET ${setClauses} WHERE id = $${updates.length + 1} RETURNING *`, [...values, id]);
    return result[0] as Certification;
  } catch (error) {
    console.error('Error updating certification:', error);
    throw error;
  }
}

export async function deleteCertification(id: number): Promise<void> {
  if (!sql) throw new Error('Database not configured');
  try {
    await sql`DELETE FROM certifications WHERE id = ${id}`;
  } catch (error) {
    console.error('Error deleting certification:', error);
    throw error;
  }
}

// ===== EDUCATION =====
export async function getEducation(): Promise<Education[]> {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`SELECT * FROM education ORDER BY start_date DESC`;
    return result as Education[];
  } catch (error) {
    console.error('Error fetching education:', error);
    throw error;
  }
}

export async function getEducationById(id: number): Promise<Education | null> {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`SELECT * FROM education WHERE id = ${id}`;
    return result.length > 0 ? result[0] as Education : null;
  } catch (error) {
    console.error('Error fetching education:', error);
    throw error;
  }
}

export async function createEducation(data: Omit<Education, 'id' | 'created_at' | 'updated_at'>) {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`
      INSERT INTO education (institution, website, degree, start_date, end_date, location, content_en, content_id)
      VALUES (${data.institution}, ${data.website}, ${data.degree}, ${data.start_date}, ${data.end_date}, ${data.location}, ${data.content_en}, ${data.content_id})
      RETURNING *`;
    return result[0] as Education;
  } catch (error) {
    console.error('Error creating education:', error);
    throw error;
  }
}

export async function updateEducation(id: number, data: Partial<Omit<Education, 'id' | 'created_at' | 'updated_at'>>) {
  if (!sql) throw new Error('Database not configured');
  try {
    const updates: string[] = [];
    const values: any[] = [];

    if (data.institution !== undefined) { updates.push('institution'); values.push(data.institution); }
    if (data.website !== undefined) { updates.push('website'); values.push(data.website); }
    if (data.degree !== undefined) { updates.push('degree'); values.push(data.degree); }
    if (data.start_date !== undefined) { updates.push('start_date'); values.push(data.start_date); }
    if (data.end_date !== undefined) { updates.push('end_date'); values.push(data.end_date); }
    if (data.location !== undefined) { updates.push('location'); values.push(data.location); }
    if (data.content_en !== undefined) { updates.push('content_en'); values.push(data.content_en); }
    if (data.content_id !== undefined) { updates.push('content_id'); values.push(data.content_id); }

    const setClauses = updates.map((col, i) => `${col} = $${i + 1}`).join(', ');
    const rawSql = neon(DATABASE_URL!);
    const result = await rawSql(`UPDATE education SET ${setClauses} WHERE id = $${updates.length + 1} RETURNING *`, [...values, id]);
    return result[0] as Education;
  } catch (error) {
    console.error('Error updating education:', error);
    throw error;
  }
}

export async function deleteEducation(id: number): Promise<void> {
  if (!sql) throw new Error('Database not configured');
  try {
    await sql`DELETE FROM education WHERE id = ${id}`;
  } catch (error) {
    console.error('Error deleting education:', error);
    throw error;
  }
}

// ===== EXPERIENCES =====
export async function getExperiences(): Promise<Experience[]> {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`SELECT * FROM experiences ORDER BY start_date DESC`;
    return result as Experience[];
  } catch (error) {
    console.error('Error fetching experiences:', error);
    throw error;
  }
}

export async function getExperienceById(id: number): Promise<Experience | null> {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`SELECT * FROM experiences WHERE id = ${id}`;
    return result.length > 0 ? result[0] as Experience : null;
  } catch (error) {
    console.error('Error fetching experience:', error);
    throw error;
  }
}

export async function createExperience(data: Omit<Experience, 'id' | 'created_at' | 'updated_at'>) {
  if (!sql) throw new Error('Database not configured');
  try {
    const technologiesJson = JSON.stringify(data.technologies);
    const result = await sql`
      INSERT INTO experiences (company, company_url, position, start_date, end_date, type, technologies, content_en, content_id)
      VALUES (${data.company}, ${data.company_url}, ${data.position}, ${data.start_date}, ${data.end_date}, ${data.type}, ${technologiesJson}, ${data.content_en}, ${data.content_id})
      RETURNING *`;
    return result[0] as Experience;
  } catch (error) {
    console.error('Error creating experience:', error);
    throw error;
  }
}

export async function updateExperience(id: number, data: Partial<Omit<Experience, 'id' | 'created_at' | 'updated_at'>>) {
  if (!sql) throw new Error('Database not configured');
  try {
    const updates: string[] = [];
    const values: any[] = [];

    if (data.company !== undefined) { updates.push('company'); values.push(data.company); }
    if (data.company_url !== undefined) { updates.push('company_url'); values.push(data.company_url); }
    if (data.position !== undefined) { updates.push('position'); values.push(data.position); }
    if (data.start_date !== undefined) { updates.push('start_date'); values.push(data.start_date); }
    if (data.end_date !== undefined) { updates.push('end_date'); values.push(data.end_date); }
    if (data.type !== undefined) { updates.push('type'); values.push(data.type); }
    if (data.technologies !== undefined) { updates.push('technologies'); values.push(JSON.stringify(data.technologies)); }
    if (data.content_en !== undefined) { updates.push('content_en'); values.push(data.content_en); }
    if (data.content_id !== undefined) { updates.push('content_id'); values.push(data.content_id); }

    const setClauses = updates.map((col, i) => `${col} = $${i + 1}`).join(', ');
    const rawSql = neon(DATABASE_URL!);
    const result = await rawSql(`UPDATE experiences SET ${setClauses} WHERE id = $${updates.length + 1} RETURNING *`, [...values, id]);
    return result[0] as Experience;
  } catch (error) {
    console.error('Error updating experience:', error);
    throw error;
  }
}

export async function deleteExperience(id: number): Promise<void> {
  if (!sql) throw new Error('Database not configured');
  try {
    await sql`DELETE FROM experiences WHERE id = ${id}`;
  } catch (error) {
    console.error('Error deleting experience:', error);
    throw error;
  }
}

// ===== PROJECTS =====
export async function getProjects(): Promise<Project[]> {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`SELECT * FROM projects ORDER BY date DESC`;
    return result as Project[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

export async function getProjectById(id: number): Promise<Project | null> {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`SELECT * FROM projects WHERE id = ${id}`;
    return result.length > 0 ? result[0] as Project : null;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}

export async function createProject(data: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
  if (!sql) throw new Error('Database not configured');
  try {
    const technosJson = JSON.stringify(data.technos);
    const typeJson = JSON.stringify(data.type);
    const result = await sql`
      INSERT INTO projects (name, link, repo_link, date, image, image_ext, technos, type, content_en, content_id)
      VALUES (${data.name}, ${data.link}, ${data.repo_link}, ${data.date}, ${data.image}, ${data.image_ext}, ${technosJson}, ${typeJson}, ${data.content_en}, ${data.content_id})
      RETURNING *`;
    return result[0] as Project;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
}

export async function updateProject(id: number, data: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>) {
  if (!sql) throw new Error('Database not configured');
  try {
    const updates: string[] = [];
    const values: any[] = [];

    if (data.name !== undefined) { updates.push('name'); values.push(data.name); }
    if (data.link !== undefined) { updates.push('link'); values.push(data.link); }
    if (data.repo_link !== undefined) { updates.push('repo_link'); values.push(data.repo_link); }
    if (data.date !== undefined) { updates.push('date'); values.push(data.date); }
    if (data.image !== undefined) { updates.push('image'); values.push(data.image); }
    if (data.image_ext !== undefined) { updates.push('image_ext'); values.push(data.image_ext); }
    if (data.technos !== undefined) { updates.push('technos'); values.push(JSON.stringify(data.technos)); }
    if (data.type !== undefined) { updates.push('type'); values.push(JSON.stringify(data.type)); }
    if (data.content_en !== undefined) { updates.push('content_en'); values.push(data.content_en); }
    if (data.content_id !== undefined) { updates.push('content_id'); values.push(data.content_id); }

    const setClauses = updates.map((col, i) => `${col} = $${i + 1}`).join(', ');
    const rawSql = neon(DATABASE_URL!);
    const result = await rawSql(`UPDATE projects SET ${setClauses} WHERE id = $${updates.length + 1} RETURNING *`, [...values, id]);
    return result[0] as Project;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
}

export async function deleteProject(id: number): Promise<void> {
  if (!sql) throw new Error('Database not configured');
  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
}

// ===== SKILLS =====
export async function getSkills(): Promise<Skill[]> {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`SELECT * FROM skills ORDER BY type, title`;
    return result as Skill[];
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
}

export async function getSkillById(id: number): Promise<Skill | null> {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`SELECT * FROM skills WHERE id = ${id}`;
    return result.length > 0 ? result[0] as Skill : null;
  } catch (error) {
    console.error('Error fetching skill:', error);
    throw error;
  }
}

export async function getSkillsByType(type: string): Promise<Skill[]> {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`SELECT * FROM skills WHERE type = ${type} ORDER BY title`;
    return result as Skill[];
  } catch (error) {
    console.error('Error fetching skills by type:', error);
    throw error;
  }
}

export async function createSkill(data: Omit<Skill, 'id' | 'created_at' | 'updated_at'>) {
  if (!sql) throw new Error('Database not configured');
  try {
    const result = await sql`
      INSERT INTO skills (title, type, url, icon)
      VALUES (${data.title}, ${data.type}, ${data.url}, ${data.icon})
      RETURNING *`;
    return result[0] as Skill;
  } catch (error) {
    console.error('Error creating skill:', error);
    throw error;
  }
}

export async function updateSkill(id: number, data: Partial<Omit<Skill, 'id' | 'created_at' | 'updated_at'>>) {
  if (!sql) throw new Error('Database not configured');
  try {
    const updates: string[] = [];
    const values: any[] = [];

    if (data.title !== undefined) { updates.push('title'); values.push(data.title); }
    if (data.type !== undefined) { updates.push('type'); values.push(data.type); }
    if (data.url !== undefined) { updates.push('url'); values.push(data.url); }
    if (data.icon !== undefined) { updates.push('icon'); values.push(data.icon); }

    const setClauses = updates.map((col, i) => `${col} = $${i + 1}`).join(', ');
    const rawSql = neon(DATABASE_URL!);
    const result = await rawSql(`UPDATE skills SET ${setClauses} WHERE id = $${updates.length + 1} RETURNING *`, [...values, id]);
    return result[0] as Skill;
  } catch (error) {
    console.error('Error updating skill:', error);
    throw error;
  }
}

export async function deleteSkill(id: number): Promise<void> {
  if (!sql) throw new Error('Database not configured');
  try {
    await sql`DELETE FROM skills WHERE id = ${id}`;
  } catch (error) {
    console.error('Error deleting skill:', error);
    throw error;
  }
}
