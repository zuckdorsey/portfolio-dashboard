import { Pool } from 'pg';

const DATABASE_URL = "postgresql://portfolio_owner:npg_sRpl6V4aNjbM@ep-odd-queen-a1ac507q.ap-southeast-1.aws.neon.tech/portfolio?sslmode=require&channel_binding=require";
const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
async function getCertifications() {
  try {
    const result = await pool.query(
      "SELECT * FROM certifications ORDER BY created_at DESC"
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching certifications:", error);
    throw error;
  }
}
async function getCertificationById(id) {
  try {
    const result = await pool.query(
      "SELECT * FROM certifications WHERE id = $1",
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error("Error fetching certification:", error);
    throw error;
  }
}
async function createCertification(data) {
  try {
    const result = await pool.query(
      `INSERT INTO certifications (title, website, date, icon, badge_alt, description, skills)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [data.title, data.website, data.date, data.icon, data.badge_alt, data.description, data.skills]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating certification:", error);
    throw error;
  }
}
async function updateCertification(id, data) {
  try {
    const fields = [];
    const values = [];
    let paramCount = 1;
    Object.entries(data).forEach(([key, value]) => {
      fields.push(`${key} = $${paramCount}`);
      values.push(value);
      paramCount++;
    });
    values.push(id);
    const result = await pool.query(
      `UPDATE certifications SET ${fields.join(", ")} WHERE id = $${paramCount} RETURNING *`,
      values
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error updating certification:", error);
    throw error;
  }
}
async function deleteCertification(id) {
  try {
    await pool.query("DELETE FROM certifications WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error deleting certification:", error);
    throw error;
  }
}
async function getEducation() {
  try {
    const result = await pool.query(
      "SELECT * FROM education ORDER BY start_date DESC"
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching education:", error);
    throw error;
  }
}
async function getEducationById(id) {
  try {
    const result = await pool.query(
      "SELECT * FROM education WHERE id = $1",
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error("Error fetching education:", error);
    throw error;
  }
}
async function createEducation(data) {
  try {
    const result = await pool.query(
      `INSERT INTO education (institution, website, degree, start_date, end_date, location, content_en, content_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [data.institution, data.website, data.degree, data.start_date, data.end_date, data.location, data.content_en, data.content_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating education:", error);
    throw error;
  }
}
async function updateEducation(id, data) {
  try {
    const fields = [];
    const values = [];
    let paramCount = 1;
    Object.entries(data).forEach(([key, value]) => {
      fields.push(`${key} = $${paramCount}`);
      values.push(value);
      paramCount++;
    });
    values.push(id);
    const result = await pool.query(
      `UPDATE education SET ${fields.join(", ")} WHERE id = $${paramCount} RETURNING *`,
      values
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error updating education:", error);
    throw error;
  }
}
async function deleteEducation(id) {
  try {
    await pool.query("DELETE FROM education WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error deleting education:", error);
    throw error;
  }
}
async function getExperiences() {
  try {
    const result = await pool.query(
      "SELECT * FROM experiences ORDER BY start_date DESC"
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    throw error;
  }
}
async function getExperienceById(id) {
  try {
    const result = await pool.query(
      "SELECT * FROM experiences WHERE id = $1",
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error("Error fetching experience:", error);
    throw error;
  }
}
async function createExperience(data) {
  try {
    const result = await pool.query(
      `INSERT INTO experiences (company, company_url, position, start_date, end_date, type, technologies, content_en, content_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [data.company, data.company_url, data.position, data.start_date, data.end_date, data.type, JSON.stringify(data.technologies), data.content_en, data.content_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating experience:", error);
    throw error;
  }
}
async function updateExperience(id, data) {
  try {
    const fields = [];
    const values = [];
    let paramCount = 1;
    Object.entries(data).forEach(([key, value]) => {
      fields.push(`${key} = $${paramCount}`);
      values.push(key === "technologies" ? JSON.stringify(value) : value);
      paramCount++;
    });
    values.push(id);
    const result = await pool.query(
      `UPDATE experiences SET ${fields.join(", ")} WHERE id = $${paramCount} RETURNING *`,
      values
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error updating experience:", error);
    throw error;
  }
}
async function deleteExperience(id) {
  try {
    await pool.query("DELETE FROM experiences WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error deleting experience:", error);
    throw error;
  }
}
async function getProjects() {
  try {
    const result = await pool.query(
      "SELECT * FROM projects ORDER BY date DESC"
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
async function getProjectById(id) {
  try {
    const result = await pool.query(
      "SELECT * FROM projects WHERE id = $1",
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
}
async function createProject(data) {
  try {
    const result = await pool.query(
      `INSERT INTO projects (name, link, repo_link, date, image, image_ext, technos, type, content_en, content_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
      [data.name, data.link, data.repo_link, data.date, data.image, data.image_ext, JSON.stringify(data.technos), JSON.stringify(data.type), data.content_en, data.content_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}
async function updateProject(id, data) {
  try {
    const fields = [];
    const values = [];
    let paramCount = 1;
    Object.entries(data).forEach(([key, value]) => {
      fields.push(`${key} = $${paramCount}`);
      values.push(["technos", "type"].includes(key) ? JSON.stringify(value) : value);
      paramCount++;
    });
    values.push(id);
    const result = await pool.query(
      `UPDATE projects SET ${fields.join(", ")} WHERE id = $${paramCount} RETURNING *`,
      values
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
}
async function deleteProject(id) {
  try {
    await pool.query("DELETE FROM projects WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}
async function getSkills() {
  try {
    const result = await pool.query(
      "SELECT * FROM skills ORDER BY type, title"
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
}
async function getSkillById(id) {
  try {
    const result = await pool.query(
      "SELECT * FROM skills WHERE id = $1",
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error("Error fetching skill:", error);
    throw error;
  }
}
async function getSkillsByType(type) {
  try {
    const result = await pool.query(
      "SELECT * FROM skills WHERE type = $1 ORDER BY title",
      [type]
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching skills by type:", error);
    throw error;
  }
}
async function createSkill(data) {
  try {
    const result = await pool.query(
      `INSERT INTO skills (title, type, url, icon)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [data.title, data.type, data.url, data.icon]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating skill:", error);
    throw error;
  }
}
async function updateSkill(id, data) {
  try {
    const fields = [];
    const values = [];
    let paramCount = 1;
    Object.entries(data).forEach(([key, value]) => {
      fields.push(`${key} = $${paramCount}`);
      values.push(value);
      paramCount++;
    });
    values.push(id);
    const result = await pool.query(
      `UPDATE skills SET ${fields.join(", ")} WHERE id = $${paramCount} RETURNING *`,
      values
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error updating skill:", error);
    throw error;
  }
}
async function deleteSkill(id) {
  try {
    await pool.query("DELETE FROM skills WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error deleting skill:", error);
    throw error;
  }
}

export { getCertifications as a, deleteEducation as b, createCertification as c, deleteCertification as d, getEducationById as e, getEducation as f, getCertificationById as g, createEducation as h, updateEducation as i, deleteExperience as j, getExperienceById as k, getExperiences as l, createExperience as m, updateExperience as n, deleteProject as o, getProjectById as p, getProjects as q, createProject as r, updateProject as s, deleteSkill as t, updateCertification as u, getSkillById as v, getSkillsByType as w, getSkills as x, createSkill as y, updateSkill as z };
