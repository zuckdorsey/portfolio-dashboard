
import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

async function checkSchema() {
    try {
        const res = await pool.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'projects';
    `);
        console.log("Columns in 'projects' table:");
        res.rows.forEach(row => console.log(`- ${row.column_name} (${row.data_type})`));
    } catch (err) {
        console.error("Error querying schema:", err);
    } finally {
        pool.end();
    }
}

checkSchema();
