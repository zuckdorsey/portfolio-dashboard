import { Pool } from 'pg';

const DATABASE_URL = import.meta.env.DATABASE_URL || process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

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
  try {
    const result = await pool.query<Certification>(
      'SELECT * FROM certifications ORDER BY created_at DESC'
    );
    return result.rows;
  } catch (error) {
    console.error('Error fetching certifications:', error);
    throw error;
  }
}

export async function getCertificationById(id: number): Promise<Certification | null> {
  try {
    const result = await pool.query<Certification>(
      'SELECT * FROM certifications WHERE id = $1',
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error('Error fetching certification:', error);
    throw error;
  }
}

export async function createCertification(data: Omit<Certification, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const result = await pool.query<Certification>(
      `INSERT INTO certifications (title, website, date, icon, badge_alt, description, skills)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [data.title, data.website, data.date, data.icon, data.badge_alt, data.description, data.skills]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error creating certification:', error);
    throw error;
  }
}

export async function updateCertification(id: number, data: Partial<Omit<Certification, 'id' | 'created_at' | 'updated_at'>>) {
  try {
    const fields: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    Object.entries(data).forEach(([key, value]) => {
      fields.push(`${key} = $${paramCount}`);
      values.push(value);
      paramCount++;
    });

    values.push(id);

    const result = await pool.query<Certification>(
      `UPDATE certifications SET ${fields.join(', ')} WHERE id = $${paramCount} RETURNING *`,
      values
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error updating certification:', error);
    throw error;
  }
}

export async function deleteCertification(id: number): Promise<void> {
  try {
    await pool.query('DELETE FROM certifications WHERE id = $1', [id]);
  } catch (error) {
    console.error('Error deleting certification:', error);
    throw error;
  }
}

// ===== EDUCATION =====
export async function getEducation(): Promise<Education[]> {
  try {
    const result = await pool.query<Education>(
      'SELECT * FROM education ORDER BY start_date DESC'
    );
    return result.rows;
  } catch (error) {
    console.error('Error fetching education:', error);
    throw error;
  }
}

export async function getEducationById(id: number): Promise<Education | null> {
  try {
    const result = await pool.query<Education>(
      'SELECT * FROM education WHERE id = $1',
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error('Error fetching education:', error);
    throw error;
  }
}

export async function createEducation(data: Omit<Education, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const result = await pool.query<Education>(
      `INSERT INTO education (institution, website, degree, start_date, end_date, location, content_en, content_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [data.institution, data.website, data.degree, data.start_date, data.end_date, data.location, data.content_en, data.content_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error creating education:', error);
    throw error;
  }
}

export async function updateEducation(id: number, data: Partial<Omit<Education, 'id' | 'created_at' | 'updated_at'>>) {
  try {
    const fields: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    Object.entries(data).forEach(([key, value]) => {
      fields.push(`${key} = $${paramCount}`);
      values.push(value);
      paramCount++;
    });

    values.push(id);

    const result = await pool.query<Education>(
      `UPDATE education SET ${fields.join(', ')} WHERE id = $${paramCount} RETURNING *`,
      values
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error updating education:', error);
    throw error;
  }
}

export async function deleteEducation(id: number): Promise<void> {
  try {
    await pool.query('DELETE FROM education WHERE id = $1', [id]);
  } catch (error) {
    console.error('Error deleting education:', error);
    throw error;
  }
}

// ===== EXPERIENCES =====
export async function getExperiences(): Promise<Experience[]> {
  try {
    const result = await pool.query<Experience>(
      'SELECT * FROM experiences ORDER BY start_date DESC'
    );
    return result.rows;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    throw error;
  }
}

export async function getExperienceById(id: number): Promise<Experience | null> {
  try {
    const result = await pool.query<Experience>(
      'SELECT * FROM experiences WHERE id = $1',
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error('Error fetching experience:', error);
    throw error;
  }
}

export async function createExperience(data: Omit<Experience, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const result = await pool.query<Experience>(
      `INSERT INTO experiences (company, company_url, position, start_date, end_date, type, technologies, content_en, content_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [data.company, data.company_url, data.position, data.start_date, data.end_date, data.type, JSON.stringify(data.technologies), data.content_en, data.content_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error creating experience:', error);
    throw error;
  }
}

export async function updateExperience(id: number, data: Partial<Omit<Experience, 'id' | 'created_at' | 'updated_at'>>) {
  try {
    const fields: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    Object.entries(data).forEach(([key, value]) => {
      fields.push(`${key} = $${paramCount}`);
      values.push(key === 'technologies' ? JSON.stringify(value) : value);
      paramCount++;
    });

    values.push(id);

    const result = await pool.query<Experience>(
      `UPDATE experiences SET ${fields.join(', ')} WHERE id = $${paramCount} RETURNING *`,
      values
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error updating experience:', error);
    throw error;
  }
}

export async function deleteExperience(id: number): Promise<void> {
  try {
    await pool.query('DELETE FROM experiences WHERE id = $1', [id]);
  } catch (error) {
    console.error('Error deleting experience:', error);
    throw error;
  }
}

// ===== PROJECTS =====
export async function getProjects(): Promise<Project[]> {
  try {
    const result = await pool.query<Project>(
      'SELECT * FROM projects ORDER BY date DESC'
    );
    return result.rows;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

export async function getProjectById(id: number): Promise<Project | null> {
  try {
    const result = await pool.query<Project>(
      'SELECT * FROM projects WHERE id = $1',
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}

export async function createProject(data: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const result = await pool.query<Project>(
      `INSERT INTO projects (name, link, repo_link, date, image, image_ext, technos, type, content_en, content_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
      [data.name, data.link, data.repo_link, data.date, data.image, data.image_ext, JSON.stringify(data.technos), JSON.stringify(data.type), data.content_en, data.content_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
}

export async function updateProject(id: number, data: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>) {
  try {
    const fields: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    Object.entries(data).forEach(([key, value]) => {
      fields.push(`${key} = $${paramCount}`);
      values.push(['technos', 'type'].includes(key) ? JSON.stringify(value) : value);
      paramCount++;
    });

    values.push(id);

    const result = await pool.query<Project>(
      `UPDATE projects SET ${fields.join(', ')} WHERE id = $${paramCount} RETURNING *`,
      values
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
}

export async function deleteProject(id: number): Promise<void> {
  try {
    await pool.query('DELETE FROM projects WHERE id = $1', [id]);
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
}

// ===== SKILLS =====
export async function getSkills(): Promise<Skill[]> {
  try {
    const result = await pool.query<Skill>(
      'SELECT * FROM skills ORDER BY type, title'
    );
    return result.rows;
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
}

export async function getSkillById(id: number): Promise<Skill | null> {
  try {
    const result = await pool.query<Skill>(
      'SELECT * FROM skills WHERE id = $1',
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error('Error fetching skill:', error);
    throw error;
  }
}

export async function getSkillsByType(type: string): Promise<Skill[]> {
  try {
    const result = await pool.query<Skill>(
      'SELECT * FROM skills WHERE type = $1 ORDER BY title',
      [type]
    );
    return result.rows;
  } catch (error) {
    console.error('Error fetching skills by type:', error);
    throw error;
  }
}

export async function createSkill(data: Omit<Skill, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const result = await pool.query<Skill>(
      `INSERT INTO skills (title, type, url, icon)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [data.title, data.type, data.url, data.icon]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error creating skill:', error);
    throw error;
  }
}

export async function updateSkill(id: number, data: Partial<Omit<Skill, 'id' | 'created_at' | 'updated_at'>>) {
  try {
    const fields: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    Object.entries(data).forEach(([key, value]) => {
      fields.push(`${key} = $${paramCount}`);
      values.push(value);
      paramCount++;
    });

    values.push(id);

    const result = await pool.query<Skill>(
      `UPDATE skills SET ${fields.join(', ')} WHERE id = $${paramCount} RETURNING *`,
      values
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error updating skill:', error);
    throw error;
  }
}

export async function deleteSkill(id: number): Promise<void> {
  try {
    await pool.query('DELETE FROM skills WHERE id = $1', [id]);
  } catch (error) {
    console.error('Error deleting skill:', error);
    throw error;
  }
}
