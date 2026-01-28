import { neon } from '@neondatabase/serverless';

const DATABASE_URL = "postgresql://portfolio_owner:npg_sRpl6V4aNjbM@ep-odd-queen-a1ac507q.ap-southeast-1.aws.neon.tech/portfolio?sslmode=require&channel_binding=require";
const sql = neon(DATABASE_URL) ;
async function getCertifications() {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`SELECT * FROM certifications ORDER BY created_at DESC`;
    return result;
  } catch (error) {
    console.error("Error fetching certifications:", error);
    throw error;
  }
}
async function getCertificationById(id) {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`SELECT * FROM certifications WHERE id = ${id}`;
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("Error fetching certification:", error);
    throw error;
  }
}
async function createCertification(data) {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`
      INSERT INTO certifications (title, website, date, icon, badge_alt, description, skills)
      VALUES (${data.title}, ${data.website}, ${data.date}, ${data.icon}, ${data.badge_alt}, ${data.description}, ${data.skills})
      RETURNING *`;
    return result[0];
  } catch (error) {
    console.error("Error creating certification:", error);
    throw error;
  }
}
async function updateCertification(id, data) {
  if (!sql) throw new Error("Database not configured");
  try {
    const updates = [];
    const values = [];
    if (data.title !== void 0) {
      updates.push("title");
      values.push(data.title);
    }
    if (data.website !== void 0) {
      updates.push("website");
      values.push(data.website);
    }
    if (data.date !== void 0) {
      updates.push("date");
      values.push(data.date);
    }
    if (data.icon !== void 0) {
      updates.push("icon");
      values.push(data.icon);
    }
    if (data.badge_alt !== void 0) {
      updates.push("badge_alt");
      values.push(data.badge_alt);
    }
    if (data.description !== void 0) {
      updates.push("description");
      values.push(data.description);
    }
    if (data.skills !== void 0) {
      updates.push("skills");
      values.push(data.skills);
    }
    const setClauses = updates.map((col, i) => `${col} = $${i + 1}`).join(", ");
    const rawSql = neon(DATABASE_URL);
    const result = await rawSql(`UPDATE certifications SET ${setClauses} WHERE id = $${updates.length + 1} RETURNING *`, [...values, id]);
    return result[0];
  } catch (error) {
    console.error("Error updating certification:", error);
    throw error;
  }
}
async function deleteCertification(id) {
  if (!sql) throw new Error("Database not configured");
  try {
    await sql`DELETE FROM certifications WHERE id = ${id}`;
  } catch (error) {
    console.error("Error deleting certification:", error);
    throw error;
  }
}
async function getEducation() {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`SELECT * FROM education ORDER BY start_date DESC`;
    return result;
  } catch (error) {
    console.error("Error fetching education:", error);
    throw error;
  }
}
async function getEducationById(id) {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`SELECT * FROM education WHERE id = ${id}`;
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("Error fetching education:", error);
    throw error;
  }
}
async function createEducation(data) {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`
      INSERT INTO education (institution, website, degree, start_date, end_date, location, content_en, content_id)
      VALUES (${data.institution}, ${data.website}, ${data.degree}, ${data.start_date}, ${data.end_date}, ${data.location}, ${data.content_en}, ${data.content_id})
      RETURNING *`;
    return result[0];
  } catch (error) {
    console.error("Error creating education:", error);
    throw error;
  }
}
async function updateEducation(id, data) {
  if (!sql) throw new Error("Database not configured");
  try {
    const updates = [];
    const values = [];
    if (data.institution !== void 0) {
      updates.push("institution");
      values.push(data.institution);
    }
    if (data.website !== void 0) {
      updates.push("website");
      values.push(data.website);
    }
    if (data.degree !== void 0) {
      updates.push("degree");
      values.push(data.degree);
    }
    if (data.start_date !== void 0) {
      updates.push("start_date");
      values.push(data.start_date);
    }
    if (data.end_date !== void 0) {
      updates.push("end_date");
      values.push(data.end_date);
    }
    if (data.location !== void 0) {
      updates.push("location");
      values.push(data.location);
    }
    if (data.content_en !== void 0) {
      updates.push("content_en");
      values.push(data.content_en);
    }
    if (data.content_id !== void 0) {
      updates.push("content_id");
      values.push(data.content_id);
    }
    const setClauses = updates.map((col, i) => `${col} = $${i + 1}`).join(", ");
    const rawSql = neon(DATABASE_URL);
    const result = await rawSql(`UPDATE education SET ${setClauses} WHERE id = $${updates.length + 1} RETURNING *`, [...values, id]);
    return result[0];
  } catch (error) {
    console.error("Error updating education:", error);
    throw error;
  }
}
async function deleteEducation(id) {
  if (!sql) throw new Error("Database not configured");
  try {
    await sql`DELETE FROM education WHERE id = ${id}`;
  } catch (error) {
    console.error("Error deleting education:", error);
    throw error;
  }
}
async function getExperiences() {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`SELECT * FROM experiences ORDER BY start_date DESC`;
    return result;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    throw error;
  }
}
async function getExperienceById(id) {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`SELECT * FROM experiences WHERE id = ${id}`;
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("Error fetching experience:", error);
    throw error;
  }
}
async function createExperience(data) {
  if (!sql) throw new Error("Database not configured");
  try {
    const technologiesJson = JSON.stringify(data.technologies);
    const result = await sql`
      INSERT INTO experiences (company, company_url, position, start_date, end_date, type, technologies, content_en, content_id)
      VALUES (${data.company}, ${data.company_url}, ${data.position}, ${data.start_date}, ${data.end_date}, ${data.type}, ${technologiesJson}, ${data.content_en}, ${data.content_id})
      RETURNING *`;
    return result[0];
  } catch (error) {
    console.error("Error creating experience:", error);
    throw error;
  }
}
async function updateExperience(id, data) {
  if (!sql) throw new Error("Database not configured");
  try {
    const updates = [];
    const values = [];
    if (data.company !== void 0) {
      updates.push("company");
      values.push(data.company);
    }
    if (data.company_url !== void 0) {
      updates.push("company_url");
      values.push(data.company_url);
    }
    if (data.position !== void 0) {
      updates.push("position");
      values.push(data.position);
    }
    if (data.start_date !== void 0) {
      updates.push("start_date");
      values.push(data.start_date);
    }
    if (data.end_date !== void 0) {
      updates.push("end_date");
      values.push(data.end_date);
    }
    if (data.type !== void 0) {
      updates.push("type");
      values.push(data.type);
    }
    if (data.technologies !== void 0) {
      updates.push("technologies");
      values.push(JSON.stringify(data.technologies));
    }
    if (data.content_en !== void 0) {
      updates.push("content_en");
      values.push(data.content_en);
    }
    if (data.content_id !== void 0) {
      updates.push("content_id");
      values.push(data.content_id);
    }
    const setClauses = updates.map((col, i) => `${col} = $${i + 1}`).join(", ");
    const rawSql = neon(DATABASE_URL);
    const result = await rawSql(`UPDATE experiences SET ${setClauses} WHERE id = $${updates.length + 1} RETURNING *`, [...values, id]);
    return result[0];
  } catch (error) {
    console.error("Error updating experience:", error);
    throw error;
  }
}
async function deleteExperience(id) {
  if (!sql) throw new Error("Database not configured");
  try {
    await sql`DELETE FROM experiences WHERE id = ${id}`;
  } catch (error) {
    console.error("Error deleting experience:", error);
    throw error;
  }
}
async function getProjects() {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`SELECT * FROM projects ORDER BY date DESC`;
    return result;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
async function getProjectById(id) {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`SELECT * FROM projects WHERE id = ${id}`;
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
}
async function createProject(data) {
  if (!sql) throw new Error("Database not configured");
  try {
    const technosJson = JSON.stringify(data.technos);
    const typeJson = JSON.stringify(data.type);
    const result = await sql`
      INSERT INTO projects (name, link, repo_link, date, image, image_ext, technos, type, content_en, content_id)
      VALUES (${data.name}, ${data.link}, ${data.repo_link}, ${data.date}, ${data.image}, ${data.image_ext}, ${technosJson}, ${typeJson}, ${data.content_en}, ${data.content_id})
      RETURNING *`;
    return result[0];
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}
async function updateProject(id, data) {
  if (!sql) throw new Error("Database not configured");
  try {
    const updates = [];
    const values = [];
    if (data.name !== void 0) {
      updates.push("name");
      values.push(data.name);
    }
    if (data.link !== void 0) {
      updates.push("link");
      values.push(data.link);
    }
    if (data.repo_link !== void 0) {
      updates.push("repo_link");
      values.push(data.repo_link);
    }
    if (data.date !== void 0) {
      updates.push("date");
      values.push(data.date);
    }
    if (data.image !== void 0) {
      updates.push("image");
      values.push(data.image);
    }
    if (data.image_ext !== void 0) {
      updates.push("image_ext");
      values.push(data.image_ext);
    }
    if (data.technos !== void 0) {
      updates.push("technos");
      values.push(JSON.stringify(data.technos));
    }
    if (data.type !== void 0) {
      updates.push("type");
      values.push(JSON.stringify(data.type));
    }
    if (data.content_en !== void 0) {
      updates.push("content_en");
      values.push(data.content_en);
    }
    if (data.content_id !== void 0) {
      updates.push("content_id");
      values.push(data.content_id);
    }
    const setClauses = updates.map((col, i) => `${col} = $${i + 1}`).join(", ");
    const rawSql = neon(DATABASE_URL);
    const result = await rawSql(`UPDATE projects SET ${setClauses} WHERE id = $${updates.length + 1} RETURNING *`, [...values, id]);
    return result[0];
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
}
async function deleteProject(id) {
  if (!sql) throw new Error("Database not configured");
  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}
async function getSkills() {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`SELECT * FROM skills ORDER BY type, title`;
    return result;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
}
async function getSkillById(id) {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`SELECT * FROM skills WHERE id = ${id}`;
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("Error fetching skill:", error);
    throw error;
  }
}
async function getSkillsByType(type) {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`SELECT * FROM skills WHERE type = ${type} ORDER BY title`;
    return result;
  } catch (error) {
    console.error("Error fetching skills by type:", error);
    throw error;
  }
}
async function createSkill(data) {
  if (!sql) throw new Error("Database not configured");
  try {
    const result = await sql`
      INSERT INTO skills (title, type, url, icon)
      VALUES (${data.title}, ${data.type}, ${data.url}, ${data.icon})
      RETURNING *`;
    return result[0];
  } catch (error) {
    console.error("Error creating skill:", error);
    throw error;
  }
}
async function updateSkill(id, data) {
  if (!sql) throw new Error("Database not configured");
  try {
    const updates = [];
    const values = [];
    if (data.title !== void 0) {
      updates.push("title");
      values.push(data.title);
    }
    if (data.type !== void 0) {
      updates.push("type");
      values.push(data.type);
    }
    if (data.url !== void 0) {
      updates.push("url");
      values.push(data.url);
    }
    if (data.icon !== void 0) {
      updates.push("icon");
      values.push(data.icon);
    }
    const setClauses = updates.map((col, i) => `${col} = $${i + 1}`).join(", ");
    const rawSql = neon(DATABASE_URL);
    const result = await rawSql(`UPDATE skills SET ${setClauses} WHERE id = $${updates.length + 1} RETURNING *`, [...values, id]);
    return result[0];
  } catch (error) {
    console.error("Error updating skill:", error);
    throw error;
  }
}
async function deleteSkill(id) {
  if (!sql) throw new Error("Database not configured");
  try {
    await sql`DELETE FROM skills WHERE id = ${id}`;
  } catch (error) {
    console.error("Error deleting skill:", error);
    throw error;
  }
}

export { getCertifications as a, deleteEducation as b, createCertification as c, deleteCertification as d, getEducationById as e, getEducation as f, getCertificationById as g, createEducation as h, updateEducation as i, deleteExperience as j, getExperienceById as k, getExperiences as l, createExperience as m, updateExperience as n, deleteProject as o, getProjectById as p, getProjects as q, createProject as r, updateProject as s, deleteSkill as t, updateCertification as u, getSkillById as v, getSkillsByType as w, getSkills as x, createSkill as y, updateSkill as z };
